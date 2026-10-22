import React from 'react';
import { TrendingUp, DollarSign, Shield, Clock, Users } from 'lucide-react';

const benefits = [
  { icon: TrendingUp, title: 'Рост трафика', desc: '150-500% за 6 месяцев' },
  { icon: DollarSign, title: 'Рост продаж', desc: '+30-200% конверсия' },
  { icon: Shield, title: 'Доверие', desc: 'Органика выше рекламы' },
  { icon: Clock, title: 'Долгий результат', desc: '2-5 лет без вложений' },
  { icon: Users, title: 'Целевая аудитория', desc: 'Горячие клиенты из поиска' },
];

export const SEOBasicsSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-dark-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            Что такое SEO и почему это нужно вашему бизнесу?
          </h2>
          <p className="text-lg text-dark-800 max-w-3xl mx-auto">
            SEO — это способ сделать так, чтобы ваш сайт находили клиенты в Яндекс и Google,
            когда они ищут ваши услуги. Это не реклама — это органический трафик от заинтересованных людей.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {benefits.map((item, i) => (
            <div key={i} className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
              <item.icon className="w-10 h-10 text-primary-600 mx-auto mb-3" />
              <h3 className="font-bold font-heading mb-1">{item.title}</h3>
              <p className="text-sm text-dark-800">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
