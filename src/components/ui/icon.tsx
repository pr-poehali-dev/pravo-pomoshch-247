import React from 'react';
import * as LucideIcons from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface IconProps extends React.ComponentProps<LucideIcon> {
  name: string;
  fallback?: string;
}

const Icon: React.FC<IconProps> = ({ name, fallback = 'Circle', ...props }) => {
  const IconComponent = (LucideIcons as Record<string, LucideIcon>)[name];

  if (!IconComponent) {
    const FallbackIcon = (LucideIcons as Record<string, LucideIcon>)[fallback];
    if (FallbackIcon) {
      return <FallbackIcon {...props} />;
    }
    return null;
  }

  return <IconComponent {...props} />;
};

export default Icon;