import { Service } from '@/types';

export const service: Service = {
  id: 'content',
  title: 'Контент-маркетинг',
  description: 'Создание экспертного контента: статьи, кейсы, описания услуг. Контент, который продаёт.',
  icon: 'FileText',
  slug: 'content-marketing',
  content: `
    <div class="space-y-12">
      <section>
        <h2 class="text-2xl font-bold font-heading mb-6">Зачем нужен контент-маркетинг?</h2>
        <p class="mb-6 text-dark-800">
          Контент — это единственный способ доказать вашу экспертность до того, как клиент обратится к вам. Мы создаем контент, который решает задачи бизнеса.
        </p>
      </section>

      <section>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="p-6 bg-white border border-dark-100 rounded-2xl shadow-sm">
            <h3 class="font-bold mb-2">Экспертные статьи</h3>
            <p class="text-xs text-dark-800">Инструкции, гайды, аналитические обзоры.</p>
          </div>
          <div class="p-6 bg-white border border-dark-100 rounded-2xl shadow-sm">
            <h3 class="font-bold mb-2">Кейсы</h3>
            <p class="text-xs text-dark-800">Описание ваших реальных проектов и результатов.</p>
          </div>
          <div class="p-6 bg-white border border-dark-100 rounded-2xl shadow-sm">
            <h3 class="font-bold mb-2">Продающие тексты</h3>
            <p class="text-xs text-dark-800">Описания услуг, вызывающие доверие.</p>
          </div>
        </div>
      </section>
    </div>
  `,
};
