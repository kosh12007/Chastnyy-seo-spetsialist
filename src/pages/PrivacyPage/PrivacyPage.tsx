import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SITE_URL } from '@utils/constants';
import { AnimatedSection } from '@components/common';
import { contactInfo } from '@data/contactInfo';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PrivacyPageProps {
  type?: 'privacy' | 'consent';
}

/**
 * Страница юридических документов:
 * - Политика обработки персональных данных (152-ФЗ)
 * - Согласие на обработку персональных данных
 */
export const PrivacyPage: React.FC<PrivacyPageProps> = ({ type = 'privacy' }) => {
  const isPrivacy = type === 'privacy';
  const pageTitle = isPrivacy
    ? 'Политика в отношении обработки персональных данных'
    : 'Согласие на обработку персональных данных';
  const canonicalUrl = `${SITE_URL}/${isPrivacy ? 'politika-konfidentsialnosti' : 'soglasie-opd'}/`;

  return (
    <>
      <Helmet>
        <title>{pageTitle} | Михаил Павлов</title>
        <meta
          name="description"
          content={
            isPrivacy
              ? 'Официальная политика обработки персональных данных самозанятого Павлова Михаила Васильевича в соответствии с Федеральным законом № 152-ФЗ.'
              : 'Условия согласия пользователя на обработку персональных данных при отправке форм обратной связи на сайте.'
          }
        />
        <link rel="canonical" href={canonicalUrl} />
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
                  Федеральный закон № 152-ФЗ
                </span>
                <h1 className="text-3xl sm:text-4xl font-bold font-heading text-dark-900 tracking-tight">
                  {pageTitle}
                </h1>
                <p className="text-dark-500 text-xs font-mono mt-2">
                  Редакция от 22 октября 2026 г. • Оператор: Павлов Михаил Васильевич (плательщик НПД / самозанятый)
                </p>
              </div>

              {isPrivacy ? (
                /* Полный текст Политики конфиденциальности */
                <div className="space-y-6 text-sm text-dark-700 leading-relaxed font-sans">
                  <section>
                    <h2 className="text-lg font-bold font-heading text-dark-900 mb-2">1. Общие положения</h2>
                    <p>
                      1.1. Настоящая Политика обработки персональных данных составлена в соответствии с требованиями Федерального закона от 27.07.2006 № 152-ФЗ «О персональных данных» и определяет порядок сбора, обработки и защиты персональных данных, предпринимаемые физическим лицом Павловым Михаилом Васильевичем (ИНН 772839102948, плательщик налога на профессиональный доход), далее — «Оператор».
                    </p>
                    <p className="mt-2">
                      1.2. Оператор ставит своей важнейшей целью и условием осуществления профессиональной деятельности соблюдение прав и свобод человека и гражданина при обработке его персональных данных, включая защиту прав на неприкосновенность частной жизни, личную и коммерческую тайну.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-lg font-bold font-heading text-dark-900 mb-2">2. Категории обрабатываемых данных</h2>
                    <p>2.1. Оператор может обрабатывать следующие данные Пользователя, добровольно предоставляемые при заполнении форм на сайте:</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-dark-800">
                      <li>Имя или псевдоним контактного лица;</li>
                      <li>Номер контактного телефона;</li>
                      <li>Идентификатор (юзернейм) в мессенджере Telegram;</li>
                      <li>Адрес электронной почты (Email);</li>
                      <li>Адрес (URL) продвигаемого веб-сайта;</li>
                      <li>Обезличенные технические данные о посетителях (файлы cookie, IP-адрес, тип устройства и браузера), собираемые счетчиками веб-аналитики.</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-lg font-bold font-heading text-dark-900 mb-2">3. Цели обработки персональных данных</h2>
                    <p>3.1. Персональные данные обрабатываются строго для следующих целей:</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-dark-800">
                      <li>Установление обратной связи, включая направление ответов на запросы и предоставление предварительной оценки поисковой видимости сайта;</li>
                      <li>Подготовка коммерческого предложения и согласование состава регламентных работ;</li>
                      <li>Заключение и исполнение договоров возмездного оказания услуг с самозанятым, формирование фискальных чеков в приложении ФНС «Мой налог».</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-lg font-bold font-heading text-dark-900 mb-2">4. Правовые основания и безопасность</h2>
                    <p>
                      4.1. Правовыми основаниями обработки персональных данных являются: ст. 6 Федерального закона № 152-ФЗ, согласие Пользователя на обработку данных, а также нормы Федерального закона от 27.11.2018 № 422-ФЗ.
                    </p>
                    <p className="mt-2">
                      4.2. Оператор обеспечивает конфиденциальность персональных данных. Базы данных с персональными данными граждан РФ размещены на серверных мощностях, физически находящихся на территории Российской Федерации.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-lg font-bold font-heading text-dark-900 mb-2">5. Сроки обработки и порядок отзыва согласия</h2>
                    <p>
                      5.1. Обработка персональных данных осуществляется до достижения целей обработки либо до момента отзыва согласия Пользователем.
                    </p>
                    <p className="mt-2">
                      5.2. Пользователь может в любой момент отозвать свое согласие на обработку персональных данных, направив письменное уведомление Оператору по электронной почте: <span className="font-mono text-dark-900 font-semibold">{contactInfo.email}</span> или через Telegram: <span className="font-mono text-sky-600 font-semibold">@{contactInfo.telegram}</span> с темой «Отзыв согласия на обработку персональных данных».
                    </p>
                  </section>

                  <section className="border-t border-dark-200 pt-6 font-mono text-xs text-dark-600">
                    <div>Оператор: Павлов Михаил Васильевич • ИНН 772839102948</div>
                    <div>Телефон: {contactInfo.phone} • Email: {contactInfo.email}</div>
                  </section>
                </div>
              ) : (
                /* Полный текст Согласия на обработку ПДн */
                <div className="space-y-6 text-sm text-dark-700 leading-relaxed font-sans">
                  <p>
                    Заполняя любую форму обратной связи на сайте и проставляя отметку (чекбокс) в поле «Я даю согласие на обработку персональных данных», Пользователь свободно, своей волей и в своем интересе дает согласие физическому лицу Павлову Михаилу Васильевичу (ИНН 772839102948, плательщик НПД / самозанятый), далее — «Оператор», на обработку своих персональных данных на следующих условиях:
                  </p>

                  <div className="p-4 rounded-xl bg-dark-50 border border-dark-200 space-y-2">
                    <h3 className="font-bold text-dark-900">1. Перечень обрабатываемых данных:</h3>
                    <p>Имя, контактный номер телефона, юзернейм в Telegram, адрес электронной почты, URL-адрес продвигаемого сайта, сведения из обращения Пользователя.</p>
                  </div>

                  <div className="p-4 rounded-xl bg-dark-50 border border-dark-200 space-y-2">
                    <h3 className="font-bold text-dark-900">2. Цели обработки:</h3>
                    <p>Предоставление консультации по поисковой оптимизации, проведение предварительной оценки сайта по открытым данным, подготовка предварительного расчета стоимости (коммерческого предложения), согласование условий договора оказания услуг.</p>
                  </div>

                  <div className="p-4 rounded-xl bg-dark-50 border border-dark-200 space-y-2">
                    <h3 className="font-bold text-dark-900">3. Перечень действий с данными:</h3>
                    <p>Сбор, запись, систематизация, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, блокирование, удаление, уничтожение персональных данных с использованием средств автоматизации или без таковых.</p>
                  </div>

                  <div className="p-4 rounded-xl bg-dark-50 border border-dark-200 space-y-2">
                    <h3 className="font-bold text-dark-900">4. Срок действия и отзыв согласия:</h3>
                    <p>Настоящее согласие действует бессрочно с момента его предоставления до момента отзыва Пользователем. Отзыв согласия осуществляется путем направления электронного сообщения на адрес <span className="font-mono text-dark-900 font-semibold">{contactInfo.email}</span> с пометкой «Отзыв согласия на обработку персональных данных».</p>
                  </div>

                  <div className="border-t border-dark-200 pt-6 font-mono text-xs text-dark-600">
                    <div>Оператор: Павлов Михаил Васильевич • ИНН 772839102948</div>
                    <div>Телефон: {contactInfo.phone} • Email: {contactInfo.email}</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </article>
      </AnimatedSection>
    </>
  );
};
