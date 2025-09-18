import json
import os
import requests
from typing import Dict, Any
from pydantic import BaseModel, Field, ValidationError

class ConsultationRequest(BaseModel):
    name: str = Field(..., min_length=1, max_length=100)
    phone: str = Field(..., min_length=10, max_length=20)
    problem: str = Field(..., min_length=10, max_length=1000)
    region: str = Field(..., min_length=3, max_length=100)

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Business: Send consultation request to Telegram bot @zakazandy_bot
    Args: event - dict with httpMethod, body containing name, phone, problem, region
          context - object with request_id, function_name attributes
    Returns: HTTP response dict with success/error status
    '''
    method: str = event.get('httpMethod', 'GET')
    
    # Handle CORS OPTIONS request
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }
    
    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Method not allowed'})
        }
    
    # Parse and validate request
    try:
        body_str = event.get('body', '{}')
        print(f"Received body: {body_str}")
        body_data = json.loads(body_str)
        print(f"Parsed body: {body_data}")
        consultation_req = ConsultationRequest(**body_data)
        print(f"Validated data: {consultation_req}")
    except json.JSONDecodeError as e:
        print(f"JSON decode error: {e}")
        return {
            'statusCode': 400,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': f'JSON decode error: {str(e)}'})
        }
    except ValidationError as e:
        print(f"Validation error: {e}")
        return {
            'statusCode': 400,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': f'Validation error: {str(e)}'})
        }
    
    # Get Telegram bot token
    bot_token = os.environ.get('TELEGRAM_BOT_TOKEN')
    if not bot_token:
        return {
            'statusCode': 500,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Bot token not configured'})
        }
    
    # Format message for Telegram
    message = f"""🆘 НОВАЯ ЗАЯВКА НА КОНСУЛЬТАЦИЮ
    
👤 Имя: {consultation_req.name}
📞 Телефон: {consultation_req.phone}
🗺️ Регион: {consultation_req.region}
❓ Проблема: {consultation_req.problem}

📅 Время: {context.request_id}"""
    
    # Send message to Telegram bot
    telegram_url = f"https://api.telegram.org/bot{bot_token}/sendMessage"
    
    # Send to the bot owner (you'll need to get chat_id)
    # For now, we'll use a placeholder - user needs to provide their chat_id
    chat_id = os.environ.get('TELEGRAM_CHAT_ID', '123456789')  # Replace with actual chat_id
    
    payload = {
        'chat_id': chat_id,
        'text': message,
        'parse_mode': 'HTML'
    }
    
    try:
        response = requests.post(telegram_url, json=payload, timeout=10)
        response.raise_for_status()
        
        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({
                'success': True,
                'message': 'Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.'
            })
        }
        
    except requests.RequestException as e:
        return {
            'statusCode': 500,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Failed to send message to Telegram'})
        }