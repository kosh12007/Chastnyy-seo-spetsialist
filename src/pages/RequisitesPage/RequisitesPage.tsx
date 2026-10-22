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
        <article className="py-12 md:py-16 bg-dark-50 min-h-screen">
          <div className="container max-w-4xl">
            <Link to="/" className="inline-flex items-center gap-2 text-accent-600 hover:text-accent-700 text-xs font-mono mb-8 font-semibold">
              <ArrowLeft className="w-4 h-4" />
              <span>Вернуться на главную</span>
            </Link>

            <div className="bg-white rounded-2xl border border-dark-200 p-6 sm:p-10 shadow-clean-card space-y-8">
              <div>
                <span className="px-3 py-1 rounded-full bg-accent-50 text-accent-700 text-xs font-mono font-semibold uppercase tracking-wider inline-block mb-3">
                  Федеральный закон № 422-ФЗ
                </span>
                <h1 className="text-3xl sm:text-4xl font-bold font-heading text-dark-900 tracking-tight">
                  Реквизиты и условия работы с юридическими лицами
                </h1>
                <p className="text-dark-600 text-sm mt-2">
                  Официальное сотрудничество с компаниями и предпринимателями в статусе плательщика налога на профессиональный доход.
                </p>
              </div>

              {/* Преимущества работы с самозанятым для бухгалтерии */}
              <div className="p-6 rounded-xl bg-dark-900 text-white space-y-4">
                <h2 className="text-base font-bold font-heading text-white flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-accent-400" />
                  <span>Преимущества для вашей бухгалтерии и финансового отдела</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans">
                  <div className="p-3.5 rounded-lg bg-dark-800/80 border border-dark-700">
                    <div className="font-bold text-accent-400 mb-1 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4" />
                      Без НДФЛ и страховых взносов
                    </div>
                    <div className="text-dark-300 leading-relaxed">
                      Заказчик освобожден от уплаты страховых взносов и удержания НДФЛ с выплат исполнителю (ч. 8 ст. 15 Федерального закона № 422-ФЗ).
                    </div>
                  </div>

                  <div className="p-3.5 rounded-lg bg-dark-800/80 border border-dark-700">
                    <div className="font-bold text-accent-400 mb-1 flex items-center gap-1.5">
                      <Receipt className="w-4 h-4" />
                      Официальные расходы бизнеса
                    </div>
                    <div className="text-dark-300 leading-relaxed">
                      Сумма оплаты в полном объеме уменьшает налоговую базу заказчика (налог на прибыль или УСН «доходы минус расходы»).
                    </div>
                  </div>

                  <div className="p-3.5 rounded-lg bg-dark-800/80 border border-dark-700">
                    <div className="font-bold text-accent-400 mb-1 flex items-center gap-1.5">
                      <FileText className="w-4 h-4" />
                      Договор и ежемесячные акты
                    </div>
                    <div className="text-dark-300 leading-relaxed">
                      Работа ведется по договору возмездного оказания услуг с подробным планом работ, KPI и закрывающими актами.
                    </div>
                  </div>

                  <div className="p-3.5 rounded-lg bg-dark-800/80 border border-dark-700">
                    <div className="font-bold text-accent-400 mb-1 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4" />
                      Фискальные электронные чеки
                    </div>
                    <div className="text-dark-300 leading-relaxed">
                      После каждого платежа формируется и направляется заказчику фискальный чек из приложения ФНС «Мой налог» с уникальным QR-кодом.
                    </div>
                  </div>
                </div>
              </div>

              {/* Таблица реквизитов */}
              <div className="space-y-4">
                <h2 className="text-xl font-bold font-heading text-dark-900">
                  Официальные реквизиты исполнителя
                </h2>

                <div className="overflow-hidden border border-dark-200 rounded-xl font-mono text-xs">
                  <table className="w-full text-left border-collapse">
                    <tbody className="divide-y divide-dark-200 text-dark-800">
                      <tr className="hover:bg-dark-50">
                        <td className="py-3 px-4 font-semibold text-dark-500 w-1/3">ФИО исполнителя:</td>
                        <td className="py-3 px-4 font-bold text-dark-900">Павлов Михаил Васильевич</td>
                      </tr>
                      <tr className="hover:bg-dark-50">
                        <td className="py-3 px-4 font-semibold text-dark-500">Правовой статус:</td>
                        <td className="py-3 px-4 text-accent-700 font-bold">
                          Плательщик налога на профессиональный доход (НПД / самозанятый)
                        </td>
                      </tr>
                      <tr className="hover:bg-dark-50">
                        <td className="py-3 px-4 font-semibold text-dark-500">ИНН:</td>
                        <td className="py-3 px-4 font-bold text-dark-900">772839102948</td>
                      </tr>
                      <tr className="hover:bg-dark-50">
                        <td className="py-3 px-4 font-semibold text-dark-500">Регион постановки на учёт:</td>
                        <td className="py-3 px-4 text-dark-800">г. Москва (ИФНС России)</td>
                      </tr>
                      <tr className="hover:bg-dark-50">
                        <td className="py-3 px-4 font-semibold text-dark-500">Телефон:</td>
                        <td className="py-3 px-4 text-dark-900">{contactInfo.phone}</td>
                      </tr>
                      <tr className="hover:bg-dark-50">
                        <td className="py-3 px-4 font-semibold text-dark-500">Электронная почта:</td>
                        <td className="py-3 px-4 text-dark-900">{contactInfo.email}</td>
                      </tr>
                      <tr className="hover:bg-dark-50">
                        <td className="py-3 px-4 font-semibold text-dark-500">Форма расчетов:</td>
                        <td className="py-3 px-4 text-dark-800">
                          Безналичный перевод по счету на расчетный счет самозанятого, СБП
                        </td>
                      </tr>
                      <tr className="hover:bg-dark-50">
                        <td className="py-3 px-4 font-semibold text-dark-500">НДС:</td>
                        <td className="py-3 px-4 text-dark-800 font-bold">НДС не облагается (п. 9 ст. 2 ФЗ № 422-ФЗ)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Справка о постановке на учет */}
              <div className="p-4 rounded-xl bg-dark-50 border border-dark-200 text-xs font-mono text-dark-600">
                Справка о постановке на учет физического лица в качестве плательщика налога на профессиональный доход (форма КНД 1122035) формируется в электронном виде и направляется заказчику вместе с проектом договора.
              </div>
            </div>
          </div>
        </article>
      </AnimatedSection>
    </>
  );
};
