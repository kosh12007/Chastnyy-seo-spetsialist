import React from 'react';
import { ShoppingCart, Briefcase, Wrench, AlertCircle } from 'lucide-react';

/**
 * Секция селективности: "С кем я работаю наиболее эффективно".
 * Помогает отфильтровать нерелевантные лиды и утверждает профессионализм эксперта.
 */
export const SEOBasicsSection: React.FC = () => {
  return (
    <section id="fit" className="py-16 md:py-20 bg-dark-50 border-b border-dark-200">
      <div className="container">
        <div className="max-w-3xl mb-10">
          <div className="text-xs font-mono uppercase tracking-widest text-accent-700 font-bold mb-2">
            Специализация и фокус
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-dark-950 tracking-tight mb-3">
            С кем я работаю наиболее эффективно
          </h2>
          <p className="text-dark-600 text-sm sm:text-base leading-relaxed">
            Я не беру в работу всё подряд. SEO работает только там, где есть реальный поисковый спрос и готовность развивать сайт.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Сегмент 1: E-commerce */}
          <div className="p-6 rounded-2xl bg-white border border-dark-200 shadow-clean-card hover:shadow-clean-hover transition-all space-y-3">
            <div className="w-10 h-10 rounded-xl bg-accent-50 border border-accent-200 flex items-center justify-center text-accent-600">
              <ShoppingCart className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold font-heading text-dark-900">
              Интернет-магазины (E-commerce)
            </h3>
            <p className="text-xs text-dark-600 leading-relaxed font-sans">
              Каталоги от 500 товаров. Оптимизация структуры, теговые страницы, фильтры, коммерческие сниппеты с ценами и разметка Schema.org.
            </p>
            <div className="text-xs text-dark-500 font-mono pt-3 border-t border-dark-100">
              Цель: рост заказов и снижение CPO
            </div>
          </div>

          {/* Сегмент 2: Услуги и B2B */}
          <div className="p-6 rounded-2xl bg-white border border-dark-200 shadow-clean-card hover:shadow-clean-hover transition-all space-y-3">
            <div className="w-10 h-10 rounded-xl bg-primary-50 border border-primary-200 flex items-center justify-center text-primary-600">
              <Briefcase className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold font-heading text-dark-900">
              Сайты услуг и B2B компании
            </h3>
            <p className="text-xs text-dark-600 leading-relaxed font-sans">
              Медицинские центры, производство, промышленность, юриспруденция. Проработка экспертности (E-E-A-T), региональное продвижение и посадочные страницы.
            </p>
            <div className="text-xs text-dark-500 font-mono pt-3 border-t border-dark-100">
              Цель: входящие коммерческие заявки
            </div>
          </div>

          {/* Сегмент 3: Сложные задачи */}
          <div className="p-6 rounded-2xl bg-white border border-dark-200 shadow-clean-card hover:shadow-clean-hover transition-all space-y-3">
            <div className="w-10 h-10 rounded-xl bg-dark-100 border border-dark-200 flex items-center justify-center text-dark-700">
              <Wrench className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold font-heading text-dark-900">
              Сложные технические задачи
            </h3>
            <p className="text-xs text-dark-600 leading-relaxed font-sans">
              Переезд сайтов на новый домен или CMS без потери органики, аудит после спам-атак, оптимизация скорости загрузки и индексации.
            </p>
            <div className="text-xs text-dark-500 font-mono pt-3 border-t border-dark-100">
              Цель: техническая чистота и восстановление
            </div>
          </div>
        </div>

        {/* Принцип честной селективности */}
        <div className="p-4 rounded-xl bg-white border border-accent-200/80 flex items-center gap-3 text-xs font-mono text-dark-700 shadow-sm">
          <AlertCircle className="w-4 h-4 text-accent-600 shrink-0" />
          <span>
            <strong>Принцип честности:</strong> я прямо откажусь от сотрудничества, если увижу, что в вашей нише SEO не окупится или бюджет целесообразнее направить в контекстную рекламу.
          </span>
        </div>
      </div>
    </section>
  );
};
