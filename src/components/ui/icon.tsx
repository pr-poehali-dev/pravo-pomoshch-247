import React from 'react';
import * as LucideIcons from 'lucide-react';
import { LucideProps } from 'lucide-react';

interface IconProps extends LucideProps {
  name: string;
  fallback?: string;
}

const Icon: React.FC<IconProps> = ({ name, fallback = 'CircleAlert', ...props }) => {
  const IconComponent = (LucideIcons as any)[name];

  if (!IconComponent || typeof IconComponent !== 'function') {
    const FallbackIcon = (LucideIcons as any)[fallback];

    if (!FallbackIcon || typeof FallbackIcon !== 'function') {
      console.warn(`Icon "${name}" and fallback "${fallback}" not found in lucide-react`);
      return <span className="text-xs text-gray-400">[{name}]</span>;
    }

    return <FallbackIcon {...props} />;
  }

  return <IconComponent {...props} />;
};

export default Icon;