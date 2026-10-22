import React, { useState } from 'react';
import { ChevronRight, X, ShieldCheck } from 'lucide-react';

interface CaseItem {
  id: string;
  niche: string;
  region: string;
  title: string;
  problem: string;
  done: string[];
  metrics: {
    positions: string;
    traffic: string;
    duration: string;
  };
  result: string;
}

const detailedCases: CaseItem[] = [
  {
    id: 'case-1',
    niche: 'E-commerce (Медтехника)',
    region: 'Москва и РФ',
    title: 'Интернет-магазин ортопедии: рост коммерческого трафика на +340%',
    problem: 'Трафик стагнировал на уровне 12 000 визитов/мес. 85% каталога не индексировалось из-за дублей фильтров и технических ошибок CMS.',
    done: [
      'Проведен полный технический аудит: закрыты 14 000 мусорных дублей страниц пагинации и сортировок;',
      'Спроектирована новая структура теговых посадочных страниц на базе семантики из Keys.so;',
      'Настроена генерация человекопонятных title, description и H1 по жестким шаблонам для 4 500 товаров;',
      'Внедрена микроразметка Schema.org (Product, Offer, AggregateRating) — CTR в выдаче вырос на 22%;',
      'Оптимизирована скорость загрузки: мобильный Google PageSpeed поднят с 31 до 84 баллов.',
    ],
    metrics: {
      positions: '78% в ТОП-10',
      traffic: '+340%',
      duration: '7 мес',
    },
    result: 'Органический трафик вырос с 12 000 до 53 000 визитов в месяц. Доля органики в общей выручке магазина превысила 55%.',
  },
  {
    id: 'case-2',
    niche: 'Сложные услуги (Юриспруденция)',
    region: 'Санкт-Петербург',
    title: 'Юридическая группа: вывод в ТОП-5 Яндекса по арбитражным спорам',
    problem: 'Высокая конкуренция со стороны агрегаторов. Предыдущий подрядчик 6 месяцев писал бессмысленные SEO-статьи без заявок.',
    done: [
      'Полностью переработаны посадочные страницы: от абстрактных текстов к карточкам арбитражной практики с номерами дел и суммами выигрышей;',
      'Внедрены требования E-E-A-T: подтвержденный опыт юристов, дипломы, публикации в профильных СМИ;',
      'Настроена гео-привязка и оформлен профиль в Яндекс.Бизнес (получен синий знак «Информация подтверждена владельцем»);',
      'Написаны экспертные разборы судебных прецедентов с прямыми лид-формами на расчет судебных перспектив.',
    ],
    metrics: {
      positions: 'ТОП-3–5',
      traffic: '+220%',
      duration: '5 мес',
    },
    result: 'Рост целевых обращений (лидов) на юридическое сопровождение в 3,2 раза при снижении стоимости заявки (CPL) в сравнении с Яндекс Директ.',
  },
  {
    id: 'case-3',
    niche: 'B2B Производство',
    region: 'Вся Россия',
    title: 'Станочное оборудование: снятие спам-фильтра и вывод в ТОП-3',
    problem: 'Резкое падение трафика на 80% после некорректной закупки спамных ссылок сторонним агентством.',
    done: [
      'Проведен полный аудит ссылочного профиля, отклонены токсичные доноры через Disavow Tool;',
      'Удалены переоптимизированные тексты начала 2010-х годов с главной и категорий;',
      'Разработан нормальный каталог станков с техническими параметрами (ГОСТ, мощность, чертежи);',
      'Добавлены блоки для оптовиков (лизинг, доставка спецтранспортом, пусконаладка).',
    ],
    metrics: {
      positions: 'ТОП-3',
      traffic: '+180%',
      duration: '3 мес',
    },
    result: 'Фильтр был полностью снят за 2 месяца. За 3 месяца сайт вернулся в ТОП-3 по ключевым коммерческим запросам станков ЧПУ.',
  },
];

/**
 * Секция кейсов из практики.
 * Поддерживает адаптивную светлую тему и ночную эстетику Dark Obsidian.
 * Включает дисклеймеры NDA и детальные модальные окна разбора.
 */
export const CasesSection: React.FC = () => {
  const [activeCase, setActiveCase] = useState<CaseItem | null>(null);

  return (
    <section id="cases" className="py-16 md:py-24 bg-white dark:bg-obsidian-950 border-b border-slate-200 dark:border-obsidian-850 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Заголовок */}
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-growth-600 dark:text-growth-400 mb-2 font-semibold">
              Практика и результаты
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Примеры проектов из практики
            </h2>
          </div>
          <div className="text-xs font-mono text-slate-500 dark:text-slate-400 max-w-md text-left sm:text-right">
            Данные подтверждены веб-аналитикой (Яндекс.Метрика). Названия проектов скрыты по условиям NDA.
          </div>
        </div>

        {/* Сетка кейсов */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {detailedCases.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl bg-slate-50 dark:bg-obsidian-900 border border-slate-200 dark:border-obsidian-800 hover:border-slate-300 dark:hover:border-obsidian-750 shadow-sm transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400 mb-3">
                  <span className="font-semibold text-slate-900 dark:text-white">{item.niche}</span>
                  <span className="text-growth-600 dark:text-growth-400 font-mono font-medium">{item.region}</span>
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                  {item.title}
                </h3>
                <div className="text-xs text-slate-600 dark:text-slate-300 font-sans leading-relaxed mb-4 space-y-1.5">
                  <p>
                    <strong className="text-slate-700 dark:text-slate-400">Исходная точка:</strong> {item.problem}
                  </p>
                </div>

                {/* Метрики */}
                <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-white dark:bg-obsidian-950 font-mono text-center text-xs mb-4 border border-slate-200 dark:border-obsidian-800 shadow-sm">
                  <div>
                    <div className="text-growth-600 dark:text-growth-400 font-bold text-sm">{item.metrics.positions}</div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400">Позиции</div>
                  </div>
                  <div>
                    <div className="text-growth-600 dark:text-growth-400 font-bold text-sm">{item.metrics.traffic}</div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400">Трафик</div>
                  </div>
                  <div>
                    <div className="text-slate-700 dark:text-slate-300 font-bold text-sm">{item.metrics.duration}</div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400">Срок</div>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setActiveCase(item)}
                className="w-full text-xs font-mono text-growth-600 dark:text-growth-400 hover:text-growth-700 dark:hover:text-growth-300 flex items-center justify-between pt-3 border-t border-slate-200 dark:border-obsidian-800 transition-colors cursor-pointer"
              >
                <span>Подробный разбор работ</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Юридический дисклеймер NDA по кейсам */}
        <div className="p-4 rounded-xl bg-slate-100/70 dark:bg-obsidian-900/40 border border-slate-200 dark:border-obsidian-800/80 text-[11px] font-mono text-slate-500 dark:text-slate-400 flex items-start gap-2.5 transition-colors">
          <ShieldCheck className="w-4 h-4 text-growth-600 dark:text-growth-400 shrink-0 mt-0.5" />
          <span>
            Показатели роста индивидуальны и зависят от исходного технического состояния домена, возраста сайта, структуры спроса и скорости согласования технических заданий заказчиком. Конкретные цифры зафиксированы в аналитических отчетах.
          </span>
        </div>

      </div>

      {/* Модальное окно детального кейса */}
      {activeCase && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 dark:bg-black/80 backdrop-blur-sm animate-fade-in"
          onClick={() => setActiveCase(null)}
        >
          <div
            className="bg-white dark:bg-obsidian-900 border border-slate-200 dark:border-obsidian-800 rounded-2xl max-w-2xl w-full p-6 sm:p-8 space-y-6 shadow-2xl relative text-slate-800 dark:text-slate-100 transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveCase(null)}
              className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-obsidian-800 transition-colors"
              aria-label="Закрыть модальное окно"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <div className="text-xs font-mono text-growth-600 dark:text-growth-400 uppercase tracking-widest mb-1 font-semibold">
                {activeCase.niche} • {activeCase.region}
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                {activeCase.title}
              </h3>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-obsidian-950 border border-slate-200 dark:border-obsidian-800 text-xs font-mono text-slate-700 dark:text-slate-300">
              <span className="text-growth-600 dark:text-growth-400 font-bold">Исходная ситуация: </span>
              {activeCase.problem}
            </div>

            <div>
              <div className="text-sm font-bold text-slate-900 dark:text-white mb-3 font-mono">
                Что конкретно было внедрено:
              </div>
              <ul className="space-y-2 text-xs font-sans text-slate-600 dark:text-slate-300">
                {activeCase.done.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-growth-600 dark:text-growth-400 font-bold shrink-0 font-mono">0{idx + 1}.</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-emerald-50 dark:bg-obsidian-950 border border-emerald-200 dark:border-growth-500/30 text-xs font-sans text-emerald-950 dark:text-slate-200">
              <div className="font-bold text-growth-700 dark:text-growth-400 font-mono text-xs uppercase mb-1">
                Итоговый результат:
              </div>
              {activeCase.result}
            </div>

            <div className="flex justify-between items-center pt-2 border-t border-slate-200 dark:border-obsidian-800 text-xs font-mono text-slate-500 dark:text-slate-400">
              <span>Срок проекта: {activeCase.metrics.duration}</span>
              <button
                type="button"
                onClick={() => setActiveCase(null)}
                className="px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-obsidian-800 dark:hover:bg-obsidian-750 text-slate-800 dark:text-white font-semibold transition-colors"
              >
                Закрыть
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
