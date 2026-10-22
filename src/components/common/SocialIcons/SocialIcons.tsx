import React from 'react';
import { MessageCircle, Send, Users } from 'lucide-react';
import { socialLinks } from '@data/navigation';
import { clsx } from 'clsx';

interface SocialIconsProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  MessageCircle: ({ className }) => <MessageCircle className={className} />,
  Send: ({ className }) => <Send className={className} />,
  Users: ({ className }) => <Users className={className} />,
};

export const SocialIcons: React.FC<SocialIconsProps> = ({ size = 'md', className }) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
  };

  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  };

  return (
    <div className={clsx('flex gap-2', className)}>
      {socialLinks.map((link) => {
        const Icon = iconMap[link.icon] || Users;
        return (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={clsx(
              'rounded-lg bg-dark-100 flex items-center justify-center text-dark-800 hover:bg-primary-600 hover:text-white transition-all duration-200',
              sizeClasses[size]
            )}
            aria-label={link.name}
            title={link.name}
          >
            <Icon className={iconSizes[size]} />
          </a>
        );
      })}
    </div>
  );
};
