import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SITE_URL } from '@utils/constants';
import { AnimatedSection } from '@components/common';
import { contactInfo } from '@data/contactInfo';
import { CheckCircle2, ShieldCheck, FileText, Receipt, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

/**
 * Страница юридических реквизитов и условий работы с юридическими лицами
 * для самозанятого специалиста (плательщика НПД в рамках 422-ФЗ).
 * Полностью выдержана в темной теме Dark Obsidian & Emerald Growth.
 */
export const RequisitesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Реквизиты и условия сотрудничества для юридических лиц | Михаил Павлов</title>
        <meta
          name="description"
          content="Официальные реквизиты самозанятого Павлова Михаила Васильевича. Условия заключения договоров с юридическими лицами и ИП, чеки 'Мой налог', без НДФЛ и взносов."
        />
        <link rel="canonical" href={`${SITE_URL}/rekvizity/`} />
      </Helmet>

      <AnimatedSection variant="fade" duration={0.8}>
        <article className="py-12 md:py-16 bg-obsidian-950 min-h-screen grid-bg">
          <div className="max-w-4xl mx-auto px-4 sm:px-8">
            
            {/* Кнопка возврата */}
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-growth-400 hover:text-growth-300 text-xs font-mono mb-8 font-semibold transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>← Вернуться на главную страницу</span>
            </Link>

            <div className="bg-obsidian-900 rounded-2xl border border-obsidian-800 p-6 sm:p-10 shadow-2xl space-y-8">
              
              <div>
                <span className="px-3 py-1 rounded-full bg-growth-500/10 border border-growth-500/20 text-growth-400 text-xs font-mono font-semibold uppercase tracking-wider inline-block mb-3">
                  Федеральный закон № 422-ФЗ
                </span>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                  Реквизиты и условия работы с юридическими лицами
                </h1>
                <p className="text-slate-400 text-xs sm:text-sm mt-2 font-mono">
                  Официальное сотрудничество с компаниями и предпринимателями в статусе плательщика налога на профессиональный доход (НПД).
                </p>
              </div>

              {/* Преимущества работы с самозанятым для бухгалтерии */}
              <div className="p-6 rounded-xl bg-obsidian-950 border border-obsidian-800 space-y-4">
                <h2 className="text-base font-bold text-white flex items-center gap-2 font-mono">
                  <ShieldCheck className="w-5 h-5 text-growth-400" />
                  <span>Преимущества для вашей бухгалтерии и финансового отдела:</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans">
                  <div className="p-4 rounded-xl bg-obsidian-900/90 border border-obsidian-800">
                    <div className="font-bold text-growth-400 mb-1.5 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-growth-400 shrink-0" />
                      <span>Без НДФЛ и страховых взносов</span>
                    </div>
                    <div className="text-slate-300 leading-relaxed text-[11px] sm:text-xs">
                      Заказчик освобожден от уплаты страховых взносов и удержания НДФЛ с выплат исполнителю (ч. 8 ст. 15 Федерального закона № 422-ФЗ).
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-obsidian-900/90 border border-obsidian-800">
                    <div className="font-bold text-growth-400 mb-1.5 flex items-center gap-2">
                      <Receipt className="w-4 h-4 text-growth-400 shrink-0" />
                      <span>Официальные расходы бизнеса</span>
                    </div>
                    <div className="text-slate-300 leading-relaxed text-[11px] sm:text-xs">
                      Сумма оплаты в полном объеме уменьшает налоговую базу заказчика (налог на прибыль или УСН «доходы минус расходы»).
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-obsidian-900/90 border border-obsidian-800">
                    <div className="font-bold text-growth-400 mb-1.5 flex items-center gap-2">
                      <FileText className="w-4 h-4 text-growth-400 shrink-0" />
                      <span>Договор и ежемесячные акты</span>
                    </div>
                    <div className="text-slate-300 leading-relaxed text-[11px] sm:text-xs">
                      Работа ведется по официальному договору возмездного оказания услуг с подробным планом регламентных задач, KPI и закрывающими актами.
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-obsidian-900/90 border border-obsidian-800">
                    <div className="font-bold text-growth-400 mb-1.5 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-growth-400 shrink-0" />
                      <span>Фискальные чеки ФНС</span>
                    </div>
                    <div className="text-slate-300 leading-relaxed text-[11px] sm:text-xs">
                      После каждого платежа формируется и направляется заказчику электронный фискальный чек из приложения ФНС «Мой налог» с уникальным QR-кодом.
                    </div>
                  </div>
                </div>
              </div>

              {/* Таблица реквизитов */}
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-white font-mono">
                  Официальные реквизиты исполнителя
                </h2>

                <div className="overflow-hidden border border-obsidian-800 rounded-xl font-mono text-xs bg-obsidian-950">
                  <table className="w-full text-left border-collapse">
                    <tbody className="divide-y divide-obsidian-800 text-slate-300">
                      <tr className="hover:bg-obsidian-900/60 transition-colors">
                        <td className="py-3.5 px-4 font-semibold text-slate-400 w-1/3">ФИО исполнителя:</td>
                        <td className="py-3.5 px-4 font-bold text-white">Павлов Михаил Васильевич</td>
                      </tr>
                      <tr className="hover:bg-obsidian-900/60 transition-colors">
                        <td className="py-3.5 px-4 font-semibold text-slate-400">Налоговый статус:</td>
                        <td className="py-3.5 px-4 text-growth-400 font-bold">
                          Плательщик налога на профессиональный доход (НПД / самозанятый)
                        </td>
                      </tr>
                      <tr className="hover:bg-obsidian-900/60 transition-colors">
                        <td className="py-3.5 px-4 font-semibold text-slate-400">ИНН:</td>
                        <td className="py-3.5 px-4 font-bold text-white">772839102948</td>
                      </tr>
                      <tr className="hover:bg-obsidian-900/60 transition-colors">
                        <td className="py-3.5 px-4 font-semibold text-slate-400">Регион постановки на учёт:</td>
                        <td className="py-3.5 px-4 text-slate-300">г. Москва (ИФНС России)</td>
                      </tr>
                      <tr className="hover:bg-obsidian-900/60 transition-colors">
                        <td className="py-3.5 px-4 font-semibold text-slate-400">Контактный телефон:</td>
                        <td className="py-3.5 px-4 text-white">
                          <a href={`tel:${contactInfo.phone.replace(/[^+\d]/g, '')}`} className="text-white hover:text-growth-400">
                            {contactInfo.phone}
                          </a>
                        </td>
                      </tr>
                      <tr className="hover:bg-obsidian-900/60 transition-colors">
                        <td className="py-3.5 px-4 font-semibold text-slate-400">Электронная почта:</td>
                        <td className="py-3.5 px-4 text-white">
                          <a href={`mailto:${contactInfo.email}`} className="text-white hover:text-growth-400">
                            {contactInfo.email}
                          </a>
                        </td>
                      </tr>
                      <tr className="hover:bg-obsidian-900/60 transition-colors">
                        <td className="py-3.5 px-4 font-semibold text-slate-400">Telegram для связи:</td>
                        <td className="py-3.5 px-4 text-sky-400">
                          <a href={`https://t.me/${contactInfo.telegram}`} target="_blank" rel="noopener noreferrer" className="hover:underline">
                            @{contactInfo.telegram}
                          </a>
                        </td>
                      </tr>
                      <tr className="hover:bg-obsidian-900/60 transition-colors">
                        <td className="py-3.5 px-4 font-semibold text-slate-400">Форма расчетов:</td>
                        <td className="py-3.5 px-4 text-slate-300">
                          Безналичный перевод по счету на расчетный счет самозанятого, СБП
                        </td>
                      </tr>
                      <tr className="hover:bg-obsidian-900/60 transition-colors">
                        <td className="py-3.5 px-4 font-semibold text-slate-400">НДС:</td>
                        <td className="py-3.5 px-4 text-growth-400 font-bold">НДС не облагается (п. 9 ст. 2 ФЗ № 422-ФЗ)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Справка о постановке на учет */}
              <div className="p-4 rounded-xl bg-obsidian-950 border border-obsidian-800 text-xs font-mono text-slate-400 leading-relaxed">
                * Справка о постановке на учет физического лица в качестве плательщика налога на профессиональный доход (форма КНД 1122035) формируется в электронном виде с цифровой подписью ФНС и направляется заказчику вместе с проектом договора.
              </div>
            </div>

          </div>
        </article>
      </AnimatedSection>
    </>
  );
};
