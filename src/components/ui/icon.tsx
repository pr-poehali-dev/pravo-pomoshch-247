import React from 'react';
import {
  Phone, Menu, X, Scale, Clock, Shield, Award, Users, Calendar, 
  CheckCircle, Zap, Star, Quote, TrendingUp, AlertTriangle, 
  Lightbulb, Briefcase, Gavel, FileText, Calculator, ShieldCheck,
  Lock, FileCheck, Headphones, Send, Loader2, ArrowRight, Check,
  MessageCircle, Circle
} from 'lucide-react';

interface IconProps {
  name: string;
  fallback?: string;
  size?: number;
  className?: string;
  fill?: string;
  [key: string]: any;
}

const iconMap: Record<string, React.ComponentType<any>> = {
  Phone,
  Menu,
  X,
  Scale,
  Clock,
  Shield,
  Award,
  Users,
  Calendar,
  CheckCircle,
  Zap,
  Star,
  Quote,
  TrendingUp,
  AlertTriangle,
  Lightbulb,
  Briefcase,
  Gavel,
  FileText,
  Calculator,
  ShieldCheck,
  Lock,
  FileCheck,
  Headphones,
  Send,
  Loader2,
  ArrowRight,
  Check,
  MessageCircle,
  Circle
};

const Icon: React.FC<IconProps> = ({ name, fallback = 'Circle', ...props }) => {
  const IconComponent = iconMap[name];

  if (!IconComponent) {
    const FallbackIcon = iconMap[fallback];
    if (FallbackIcon) {
      return <FallbackIcon {...props} />;
    }
    return null;
  }

  return <IconComponent {...props} />;
};

export default Icon;
