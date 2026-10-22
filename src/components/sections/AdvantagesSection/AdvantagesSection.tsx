import React from 'react';
import { PiggyBank, Target, Handshake, FileText, TrendingUp, Zap } from 'lucide-react';

const advantages = [
  {
    icon: PiggyBank,
    title: 'Выгодный бюджет',
    description: 'Вы платите за работу, а не за офис и менеджеров. Бюджет идёт на результат: тексты, ссылки, сервисы.',
  },
  {
    icon: Target,
    title: '100% погружение',
    description: 'Я вникаю в ваш бизнес, изучаю нишу и уделяю время только вашему проекту, а не 20 другим.',
  },
  {
    icon: Handshake,
    title: 'Личная ответственность',
    description: 'Мне выгодно работать на результат, чтобы вы порекомендовали меня друзьям и партнёрам.',
  },
  {
    icon: FileText,
    title: 'Прозрачная отчётность',
    description: 'Ежемесячные отчёты: позиции, трафик, заявки, что сделано, план на следующий месяц.',
  },
  {
    icon: TrendingUp,
    title: 'Опыт и развитие',
    description: '8+ лет в SEO, постоянно обучаюсь, тестирую новые инструменты. Только рабочие подходы.',
  },
  {
    icon: Zap,
    title: 'Оперативная связь',
    description: 'WhatsApp, Telegram, телефон — без менеджеров и очередей. Отвечаю в течение часа.',
  },
];

export const AdvantagesSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            Почему стоит работать с частным SEO-специалистом
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((item, i) => (
            <div key={i} className="bg-dark-50 rounded-xl p-6 hover:bg-dark-100 transition-colors">
              <item.icon className="w-10 h-10 text-primary-600 mb-4" />
              <h3 className="text-lg font-bold font-heading mb-2">{item.title}</h3>
              <p className="text-dark-800 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
