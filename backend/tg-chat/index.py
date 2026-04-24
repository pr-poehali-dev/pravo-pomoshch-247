import json
import os
import urllib.request
import urllib.parse
from typing import Dict, Any


def tg_request(method: str, params: dict) -> dict:
    bot_token = os.environ['TELEGRAM_BOT_TOKEN']
    url = f"https://api.telegram.org/bot{bot_token}/{method}"
    data = urllib.parse.urlencode(params).encode('utf-8')
    req = urllib.request.Request(url, data=data, method='POST')
    req.add_header('Content-Type', 'application/x-www-form-urlencoded')
    with urllib.request.urlopen(req, timeout=15) as resp:
        return json.loads(resp.read().decode('utf-8'))


def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    """
    Встроенный чат с Telegram-ботом прямо на сайте.
    action=send — отправить сообщение боту от посетителя сайта
    action=poll — получить новые ответы бота (по offset)
    """
    cors = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
    }

    if event.get('httpMethod') == 'OPTIONS':
        return {'statusCode': 200, 'headers': {**cors, 'Access-Control-Max-Age': '86400'}, 'body': ''}

    body = json.loads(event.get('body') or '{}')
    action = body.get('action', '')

    # --- Отправить сообщение боту ---
    if action == 'send':
        text = body.get('text', '').strip()
        session_id = body.get('session_id', 'гость')
        if not text:
            return {'statusCode': 400, 'headers': cors, 'body': json.dumps({'error': 'empty text'})}

        chat_id = os.environ.get('TELEGRAM_CHAT_ID', '')
        full_text = f"[Сайт | {session_id}]\n{text}"
        result = tg_request('sendMessage', {'chat_id': chat_id, 'text': full_text})
        msg_id = result.get('result', {}).get('message_id')
        return {
            'statusCode': 200,
            'headers': {**cors, 'Content-Type': 'application/json'},
            'body': json.dumps({'ok': True, 'message_id': msg_id})
        }

    # --- Получить новые ответы бота ---
    if action == 'poll':
        offset = body.get('offset', 0)
        result = tg_request('getUpdates', {
            'offset': offset,
            'timeout': 3,
            'allowed_updates': 'message'
        })
        updates = result.get('result', [])
        messages = []
        new_offset = offset
        for upd in updates:
            new_offset = upd['update_id'] + 1
            msg = upd.get('message', {})
            if msg.get('from', {}).get('is_bot'):
                messages.append({
                    'id': msg.get('message_id'),
                    'text': msg.get('text', ''),
                    'date': msg.get('date')
                })
        return {
            'statusCode': 200,
            'headers': {**cors, 'Content-Type': 'application/json'},
            'body': json.dumps({'messages': messages, 'offset': new_offset})
        }

    return {'statusCode': 400, 'headers': cors, 'body': json.dumps({'error': 'unknown action'})}