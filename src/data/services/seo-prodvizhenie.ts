import { Service } from '@/types';

export const service: Service = {
  id: 'seo',
  title: 'SEO-продвижение сайтов',
  description: 'Комплексная оптимизация для роста в Яндекс и Google. Технический аудит, семантика, контент, ссылки.',
  icon: 'Search',
  slug: 'seo-prodvizhenie',
  content: `
    <div class="space-y-12">
      <section>
        <h2 class="text-2xl font-bold font-heading mb-6">Что входит в комплексное продвижение?</h2>
        <p class="mb-6 text-dark-800">
          Комплексное SEO — это не просто "поднятие позиций", это работа над качеством всего сайта для привлечения целевого трафика и повышения конверсии в продажи.
        </p>
        <div class="grid sm:grid-cols-2 gap-4">
          <div class="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm border border-dark-50">
            <span class="text-primary-600 font-bold">01.</span>
            <span class="text-dark-800"><b>Технический аудит:</b> Исправление всех ошибок, мешающих ранжированию.</span>
          </div>
          <div class="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm border border-dark-50">
            <span class="text-primary-600 font-bold">02.</span>
            <span class="text-dark-800"><b>Семантическое ядро:</b> Подбор целевых запросов, по которым вас ищут клиенты.</span>
          </div>
          <div class="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm border border-dark-50">
            <span class="text-primary-600 font-bold">03.</span>
            <span class="text-dark-800"><b>Внутренняя оптимизация:</b> Работа с мета-тегами, заголовками и структурой.</span>
          </div>
          <div class="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm border border-dark-50">
            <span class="text-primary-600 font-bold">04.</span>
            <span class="text-dark-800"><b>Внешнее продвижение:</b> Работа с репутацией и ссылочной массой.</span>
          </div>
        </div>
      </section>

      <section class="bg-dark-50 p-8 rounded-2xl">
        <h2 class="text-2xl font-bold font-heading mb-6">Этапы работы</h2>
        <div class="space-y-6">
          <div class="flex gap-4">
            <div class="w-10 h-10 rounded-full bg-primary-600 text-white flex items-center justify-center flex-shrink-0 font-bold">1</div>
            <div>
              <h3 class="font-bold text-lg">Подготовительный этап</h3>
              <p class="text-dark-800 text-sm">Настройка аналитики, анализ конкурентов и формирование стратегии на 6-12 месяцев.</p>
            </div>
          </div>
          <div class="flex gap-4">
            <div class="w-10 h-10 rounded-full bg-primary-600 text-white flex items-center justify-center flex-shrink-0 font-bold">2</div>
            <div>
              <h3 class="font-bold text-lg">Активная фаза оптимизации</h3>
              <p class="text-dark-800 text-sm">Внедрение технических правок, работа с текстовыми и коммерческими факторами.</p>
            </div>
          </div>
          <div class="flex gap-4">
            <div class="w-10 h-10 rounded-full bg-primary-600 text-white flex items-center justify-center flex-shrink-0 font-bold">3</div>
            <div>
              <h3 class="font-bold text-lg">Масштабирование и поддержка</h3>
              <p class="text-dark-800 text-sm">Регулярное обновление контента, работа с новыми разделами и мониторинг позиций.</p>
            </div>
          </div>
        </div>
      </section>
        <h2 class="text-2xl font-bold font-heading mb-6">Второй Заголовок Н2</h2>
        <p class="mb-6 text-dark-800">
          Комплексное SEO — это не просто "поднятие позиций", это работа над качеством всего сайта для привлечения целевого трафика и повышения конверсии в продажи.
        </p>
    </div>
  `,
};
