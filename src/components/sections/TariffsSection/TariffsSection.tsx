import React from 'react';
import { Check, Info, Shield, Star } from 'lucide-react';

/**
 * Секция тарифных планов (SEO Start, SEO Growth, SEO Scale).
 * Точно соответствует утвержденному макету mockup-v2.html.
 * Включает дисклеймеры о договоре с самозанятым и чеках «Мой налог».
 */
export const TariffsSection: React.FC = () => {
  return (
    <section id="pricing" className="py-16 md:py-24 border-b border-obsidian-850 bg-obsidian-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Заголовок секции */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-mono uppercase tracking-widest text-growth-400 mb-2">
            Прозрачные тарифы
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-3">
            Стоимость ежемесячного ведения проекта
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
            Фиксированная стоимость без скрытых доплат. Официальный договор с самозанятым (НПД), чеки в приложении ФНС «Мой налог». Без НДС.
          </p>
        </div>

        {/* 3 тарифа */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-10">
          
          {/* Тариф 1: SEO Start */}
          <div className="p-6 rounded-2xl bg-obsidian-900 border border-obsidian-800 flex flex-col justify-between hover:border-obsidian-750 transition-colors">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">Для малого бизнеса</div>
              <h3 className="text-xl font-bold text-white mb-1">SEO Start</h3>
              <p className="text-xs text-slate-400 mb-4 font-mono">Сайты услуг, локальный бизнес до 30 страниц</p>
              
              <div className="text-3xl font-extrabold text-white font-mono mb-6">
                35 000 ₽ <span className="text-xs font-normal text-slate-400">/ месяц</span>
              </div>
              
              <ul className="space-y-3 text-xs font-sans text-slate-300 mb-6">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-growth-400 shrink-0 mt-0.5" />
                  <span>Полный технический аудит и исправление базовых ошибок индексации</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-growth-400 shrink-0 mt-0.5" />
                  <span>Сбор ядра до 150 целевых коммерческих запросов</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-growth-400 shrink-0 mt-0.5" />
                  <span>Оптимизация метатегов и заголовков основных страниц</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-growth-400 shrink-0 mt-0.5" />
                  <span>Регистрация и оптимизация профиля в Яндекс.Бизнес и Картах</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-growth-400 shrink-0 mt-0.5" />
                  <span>15–20 часов работы специалиста в месяц</span>
                </li>
              </ul>
            </div>
            
            <a
              href="#audit-form"
              className="w-full py-3 rounded-xl bg-obsidian-800 hover:bg-obsidian-750 text-white font-mono text-xs font-bold text-center border border-obsidian-700 transition-all uppercase tracking-wider block"
            >
              Выбрать SEO Start
            </a>
          </div>

          {/* Тариф 2: SEO Growth (Хит) */}
          <div className="p-6 rounded-2xl bg-obsidian-900 border-2 border-growth-500 flex flex-col justify-between shadow-2xl shadow-growth-950/40 relative sm:-translate-y-2">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-growth-600 text-obsidian-950 text-[10px] font-mono font-bold uppercase tracking-wider flex items-center gap-1 shadow-md">
              <Star className="w-3 h-3 fill-obsidian-950" />
              <span>Самый популярный выбор</span>
            </div>

            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-growth-400 mb-2 pt-2 sm:pt-0">Оптимальный рост</div>
              <h3 className="text-xl font-bold text-white mb-1">SEO Growth</h3>
              <p className="text-xs text-slate-400 mb-4 font-mono">Интернет-магазины до 3000 SKU, растущий бизнес</p>
              
              <div className="text-3xl font-extrabold text-white font-mono mb-6">
                65 000 ₽ <span className="text-xs font-normal text-slate-400">/ месяц</span>
              </div>
              
              <ul className="space-y-3 text-xs font-sans text-slate-200 mb-6">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-growth-400 shrink-0 mt-0.5" />
                  <span>Глубокая семантика до 500+ кластеров (Keys.so)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-growth-400 shrink-0 mt-0.5" />
                  <span>Проектирование и внедрение теговых страниц фильтрации</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-growth-400 shrink-0 mt-0.5" />
                  <span>Внедрение микроразметки Schema.org (Product, FAQ, Breadcrumbs)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-growth-400 shrink-0 mt-0.5" />
                  <span>Анализ конверсии страниц (CRO) и кликабельности сниппетов</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-growth-400 shrink-0 mt-0.5" />
                  <span>30–35 часов чистого времени эксперта в месяц</span>
                </li>
              </ul>
            </div>
            
            <a
              href="#audit-form"
              className="w-full py-3 rounded-xl bg-growth-600 hover:bg-growth-500 text-obsidian-950 font-mono text-xs font-bold text-center tracking-wider transition-all shadow-lg shadow-growth-950/60 uppercase block"
            >
              Выбрать SEO Growth
            </a>
          </div>

          {/* Тариф 3: SEO Scale */}
          <div className="p-6 rounded-2xl bg-obsidian-900 border border-obsidian-800 flex flex-col justify-between hover:border-obsidian-750 transition-colors">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">Для масштабных ресурсов</div>
              <h3 className="text-xl font-bold text-white mb-1">SEO Scale</h3>
              <p className="text-xs text-slate-400 mb-4 font-mono">Крупные каталоги от 5000 SKU, порталы</p>
              
              <div className="text-3xl font-extrabold text-white font-mono mb-6">
                110 000 ₽ <span className="text-xs font-normal text-slate-400">/ месяц</span>
              </div>
              
              <ul className="space-y-3 text-xs font-sans text-slate-300 mb-6">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-growth-400 shrink-0 mt-0.5" />
                  <span>Неограниченный пул семантики и работа с большими каталогами</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-growth-400 shrink-0 mt-0.5" />
                  <span>Прямой контроль внедрения доработок программистами на CMS</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-growth-400 shrink-0 mt-0.5" />
                  <span>Управление репутацией и SERM в поисковой выдаче</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-growth-400 shrink-0 mt-0.5" />
                  <span>50+ часов времени эксперта в месяц</span>
                </li>
              </ul>
            </div>
            
            <a
              href="#audit-form"
              className="w-full py-3 rounded-xl bg-obsidian-800 hover:bg-obsidian-750 text-white font-mono text-xs font-bold text-center border border-obsidian-700 transition-all uppercase tracking-wider block"
            >
              Выбрать SEO Scale
            </a>
          </div>

        </div>

        {/* Юридическая оговорка по ценам и KPI */}
        <div className="p-4 rounded-xl bg-obsidian-900/80 border border-obsidian-800 text-xs font-mono text-slate-400 space-y-2">
          <div className="flex items-start gap-2">
            <Info className="w-4 h-4 text-growth-400 shrink-0 mt-0.5" />
            <div>
              <span className="text-slate-300 font-semibold">Условия и договор:</span>{' '}
              Цены указаны для предварительного ознакомления. Итоговая стоимость определяется составом регламентных работ и фиксируется в договоре с самозанятым. На каждую оплату выдается официальный фискальный чек из приложения «Мой налог». Без НДС.
            </div>
          </div>
          <div className="flex items-start gap-2 pt-1 border-t border-obsidian-850">
            <Shield className="w-4 h-4 text-amberGold-400 shrink-0 mt-0.5" />
            <div>
              <span className="text-slate-300 font-semibold">Позиция по гарантиям:</span>{' '}
              100% гарантировать конкретную строчку в поисковой выдаче невозможно: алгоритмы поисковых систем находятся вне контроля исполнителя. В договоре фиксируются объем регламентных задач, сроки, отчётность и согласованные KPI.
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
