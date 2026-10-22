import React from 'react';
import { FileText, BarChart3, CreditCard, Lock, Wrench, Eye } from 'lucide-react';

const guarantees = [
  { icon: FileText, title: 'Работа по договору', desc: 'Официальный договор с прописанными условиями и KPI' },
  { icon: BarChart3, title: 'Прозрачная отчётность', desc: 'Ежемесячные отчёты: позиции, трафик, конверсии' },
  { icon: CreditCard, title: 'Возврат при невыполнении', desc: 'Если не выполню обещанное — верну деньги' },
  { icon: Lock, title: 'Конфиденциальность', desc: 'Ваши данные под защитой NDA' },
  { icon: Wrench, title: 'Бесплатные доработки', desc: 'Исправлю бесплатно, если нужно что-то улучшить' },
  { icon: Eye, title: 'Без скрытых платежей', desc: 'Фиксированная цена, никаких "доплат"' },
];

export const GuaranteesSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Гарантии</h2>
          <p className="text-lg text-dark-800 max-w-2xl mx-auto">
            Работаю прозрачно и отвечаю за результат
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guarantees.map((item, i) => (
            <div key={i} className="flex gap-4 p-6 bg-dark-50 rounded-xl">
              <div className="flex-shrink-0">
                <item.icon className="w-8 h-8 text-primary-600" />
              </div>
              <div>
                <h3 className="font-bold font-heading mb-1">{item.title}</h3>
                <p className="text-sm text-dark-800">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
