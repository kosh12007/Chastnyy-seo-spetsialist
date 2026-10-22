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
    id: 'case1',
    niche: 'Интернет-магазин',
    region: 'Москва',
    title: 'Инженерная сантехника: рост органики с 1 200 до 8 400 визитов/сутки',
    problem: '1С-Битрикс генерировал 40 000+ дублей страниц фильтров, карточки товаров не индексировались Яндексом.',
    done: [
      'Закрыты технические дубли в robots.txt и через тег canonical, ускорен серверный ответ;',
      'Собрана семантика на 1 400 запросов по водоснабжению и отоплению, созданы 140 теговых страниц;',
      'Внедрена микроразметка Product и Offer со статусом наличия товара на складе в Москве;',
      'Настроены региональные коммерческие факторы (доставка, самовывоз, гарантийный талон).',
    ],
    metrics: {
      positions: '37 → 8',
      traffic: '+380%',
      duration: '5 мес',
    },
    result: 'За 5 месяцев средняя позиция поднялась с 37 до 8 места. Органический трафик вырос до 8 400 посетителей в сутки. Рост оформленных заказов через корзину — в 3.8 раза.',
  },
  {
    id: 'case2',
    niche: 'Клиника медицины',
    region: 'Санкт-Петербург',
    title: 'Косметология: снижение стоимости лида с 3 400 ₽ до 890 ₽',
    problem: 'Высокая зависимость от платного трафика с ценой клика 300+ ₽ в конкурентном регионе.',
    done: [
      'Внедрены медицинские факторы доверия E-E-A-T (дипломы, лицензии, прейскурант);',
      'Созданы детальные посадочные страницы под аппараты и процедуры с ценами;',
      'Оптимизирована карточка в Яндекс.Картах и 2ГИС (получен рейтинг 4.9);',
      'Написаны экспертные статьи по подготовке к процедурам с авторством ведущего врача.',
    ],
    metrics: {
      positions: 'в 3.8 раз',
      traffic: '+215%',
      duration: '4 мес',
    },
    result: 'За 4 месяца привлечено более 180 органических заявок в месяц со средней стоимостью лида 890 ₽. Доля органики в общей выручке клиники составила 42%.',
  },
  {
    id: 'case3',
    niche: 'B2B Производство',
    region: 'Вся Россия',
    title: 'Станочное оборудование: снятие спам-фильтра и вывод в ТОП-3',
    problem: 'Резкое падение трафика на 80% после некорректной закупки спамных ссылок сторонним подрядчиком.',
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

export const CasesSection: React.FC = () => {
  const [activeCase, setActiveCase] = useState<CaseItem | null>(null);

  return (
    <section id="cases" className="py-16 md:py-24 bg-white border-b border-dark-200">
      <div className="container">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-accent-700 font-bold mb-2">
              Практика и результаты
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-dark-950 tracking-tight">
              Примеры проектов из практики
            </h2>
          </div>
          <div className="text-xs font-mono text-dark-500 max-w-md text-left sm:text-right">
            Данные подтверждены веб-аналитикой (Яндекс.Метрика). Названия проектов скрыты по условиям NDA.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {detailedCases.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl bg-white border border-dark-200 shadow-clean-card hover:shadow-clean-hover transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-dark-500 mb-3">
                  <span className="font-semibold text-dark-700">{item.niche}</span>
                  <span className="text-accent-600 font-semibold">{item.region}</span>
                </div>
                <h3 className="text-base font-bold font-heading text-dark-900 mb-2 leading-snug">
                  {item.title}
                </h3>
                <div className="text-xs text-dark-600 font-sans leading-relaxed mb-4 space-y-1.5">
                  <p>
                    <strong className="text-dark-800">Исходная точка:</strong> {item.problem}
                  </p>
                </div>

                {/* Метрики */}
                <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-dark-50 font-mono text-center text-xs mb-4 border border-dark-100">
                  <div>
                    <div className="text-accent-700 font-bold text-sm">{item.metrics.positions}</div>
                    <div className="text-[10px] text-dark-500">Ср. позиция</div>
                  </div>
                  <div className="border-x border-dark-200">
                    <div className="text-dark-900 font-bold text-sm">{item.metrics.traffic}</div>
                    <div className="text-[10px] text-dark-500">Органика</div>
                  </div>
                  <div>
                    <div className="text-primary-700 font-bold text-sm">{item.metrics.duration}</div>
                    <div className="text-[10px] text-dark-500">Срок</div>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setActiveCase(item)}
                className="w-full py-2.5 rounded-lg bg-dark-50 hover:bg-dark-100 border border-dark-200 text-dark-800 text-xs font-mono font-semibold transition-colors flex items-center justify-center gap-1.5 mt-2"
              >
                <span>Разобрать кейс подробно</span>
                <ChevronRight className="w-3.5 h-3.5 text-accent-600" />
              </button>
            </div>
          ))}
        </div>

        {/* Юридический дисклеймер к кейсам */}
        <div className="text-[11px] font-mono text-dark-500 leading-relaxed border-t border-dark-200 pt-4 flex items-start gap-2">
          <ShieldCheck className="w-4 h-4 text-accent-600 shrink-0 mt-0.5" />
          <span>
            * Результаты индивидуальны для каждого сайта и зависят от исходного технического состояния домена, возраста, уровня конкуренции в тематике и скорости внедрения рекомендаций. Приведенные цифры не являются публичной офертой и не гарантируют аналогичных показателей в других проектах.
          </span>
        </div>
      </div>

      {/* Модальное окно детального разбора кейса */}
      {activeCase && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white border border-dark-200 max-w-2xl w-full rounded-2xl p-6 sm:p-8 space-y-4 max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="flex items-center justify-between border-b border-dark-100 pb-3">
              <h3 className="font-bold font-heading text-dark-900 text-base">
                {activeCase.title}
              </h3>
              <button
                onClick={() => setActiveCase(null)}
                className="text-dark-400 hover:text-dark-800 p-1"
                aria-label="Закрыть разбор"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="text-xs text-dark-700 font-sans space-y-3 leading-relaxed">
              <div className="p-3.5 rounded-xl bg-dark-50 border border-dark-200">
                <strong className="text-dark-900 block mb-1">Исходная проблема:</strong>
                <p>{activeCase.problem}</p>
              </div>

              <div>
                <strong className="text-dark-900 block mb-1">Что было сделано лично мной:</strong>
                <ul className="list-disc pl-4 space-y-1 text-dark-700">
                  {activeCase.done.map((step, idx) => (
                    <li key={idx}>{step}</li>
                  ))}
                </ul>
              </div>

              <div className="p-3.5 rounded-xl bg-accent-50 border border-accent-200 text-accent-900 font-mono">
                <strong className="block mb-1">Фактический результат:</strong>
                <p className="font-sans text-xs">{activeCase.result}</p>
              </div>

              <div className="text-[11px] text-dark-500 italic pt-1">
                * Название проекта не раскрывается в соответствии с соглашением о неразглашении (NDA).
              </div>
            </div>

            <div className="pt-3 border-t border-dark-100 flex justify-end">
              <button
                onClick={() => setActiveCase(null)}
                className="px-4 py-2 rounded-lg bg-dark-900 hover:bg-dark-800 text-white font-mono text-xs font-semibold"
              >
                Закрыть разбор
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
