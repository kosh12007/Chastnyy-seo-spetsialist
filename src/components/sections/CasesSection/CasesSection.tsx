import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, BarChart3, DollarSign } from 'lucide-react';
import { Card } from '@/components/ui/Card/Card';
import { cases } from '@data/index';

export const CasesSection: React.FC = () => {
  const displayCases = cases.slice(0, 4);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Кейсы и результаты</h2>
          <p className="text-lg text-dark-800 max-w-2xl mx-auto">
            Реальные проекты с измеримыми результатами. Каждый кейс — это детальный путь от проблемы к ТОПам.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {displayCases.map((item) => (
            <Card key={item.id} variant="bordered" padding="lg" className="hover:shadow-lg transition-shadow">
              {/* Placeholder для скриншота */}
              <div className="bg-dark-50 rounded-lg h-48 mb-6 flex items-center justify-center">
                <div className="text-center text-dark-800">
                  <BarChart3 className="w-12 h-12 mx-auto mb-2" />
                  <p className="text-sm">Скриншот сайта</p>
                </div>
              </div>

              <h3 className="text-xl font-bold font-heading mb-2">{item.title}</h3>
              <div className="flex flex-wrap gap-4 text-sm text-dark-800 mb-4">
                <span>📍 {item.region}</span>
                <span>⏱️ {item.duration}</span>
              </div>

              {/* Метрики */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center p-3 bg-success-50 rounded-lg">
                  <TrendingUp className="w-5 h-5 text-success-600 mx-auto mb-1" />
                  <div className="text-lg font-bold text-dark-900">+{item.growth.traffic}%</div>
                  <div className="text-xs text-dark-800">Трафик</div>
                </div>
                <div className="text-center p-3 bg-primary-50 rounded-lg">
                  <BarChart3 className="w-5 h-5 text-primary-600 mx-auto mb-1" />
                  <div className="text-lg font-bold text-dark-900">{item.before.positions}→{item.after.positions}</div>
                  <div className="text-xs text-dark-800">Позиции</div>
                </div>
                <div className="text-center p-3 bg-accent-50 rounded-lg">
                  <DollarSign className="w-5 h-5 text-accent-600 mx-auto mb-1" />
                  <div className="text-lg font-bold text-dark-900">+{item.growth.conversion}%</div>
                  <div className="text-xs text-dark-800">Конверсия</div>
                </div>
              </div>

              <Link
                to={`/portfolio/${item.slug}/`}
                className="inline-flex items-center gap-2 text-primary-600 font-medium hover:gap-3 transition-all"
              >
                Смотреть кейс <ArrowRight className="w-4 h-4" />
              </Link>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link to="/portfolio/" className="inline-flex items-center gap-2 text-primary-600 font-medium hover:gap-3 transition-all">
            Все кейсы (15+) <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
