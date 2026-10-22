import React, { useState } from 'react';
import { Phone } from 'lucide-react';
import { CallbackModal } from '@components/common/CallbackModal';

export const CallbackButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Плавающая кнопка */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-accent-600 text-white rounded-full shadow-xl hover:bg-accent-700 transition-all duration-300 flex items-center justify-center hover:scale-110"
        aria-label="Заказать звонок"
      >
        <Phone className="w-6 h-6" />
      </button>

      {/* Модалка */}
      <CallbackModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};
