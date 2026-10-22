import React, { useState } from 'react';
import { MessageSquare } from 'lucide-react';
import { DiscussionModal } from '@components/common/DiscussionModal';

export const DiscussionButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Плавающая кнопка */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 z-40 w-14 h-14 bg-primary-600 text-white rounded-full shadow-xl hover:bg-primary-500 transition-all duration-300 flex items-center justify-center hover:scale-110"
        aria-label="Обсудить проект"
      >
        <MessageSquare className="w-6 h-6" />
      </button>

      {/* Модалка */}
      <DiscussionModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};
