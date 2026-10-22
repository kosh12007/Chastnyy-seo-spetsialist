import React, { useState } from 'react';
import { Phone } from 'lucide-react';
import { CallbackModal } from '@components/common/CallbackModal';

/**
 * Плавающая кнопка быстрого заказа звонка.
 * Оформлена в стиле изумрудного роста Emerald Growth.
 */
export const CallbackButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 w-13 h-13 p-3.5 bg-growth-600 text-obsidian-950 rounded-2xl shadow-2xl shadow-black/80 hover:bg-growth-500 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center border border-growth-400/40 cursor-pointer"
        aria-label="Заказать обратный звонок"
      >
        <Phone className="w-5 h-5" />
      </button>

      <CallbackModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};
