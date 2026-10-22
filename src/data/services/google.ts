import { Service } from '@/types';

export const service: Service = {
  id: 'google',
  title: 'Продвижение в Google',
  description: 'Оптимизация под требования Google. Рост позиций, трафика и заявок из поиска.',
  icon: 'Globe',
  slug: 'google',
  content: `
    <div class="space-y-12">
      <section>
        <h2 class="text-2xl font-bold font-heading mb-6">Как продвинуть сайт в Google?</h2>
        <p class="mb-6 text-dark-800">
          Google — это про авторитетность, качество контента (E-E-A-T) и техническое совершенство сайта.
        </p>
      </section>

      <section class="grid sm:grid-cols-3 gap-6">
        <div class="p-6 bg-dark-50 rounded-2xl">
          <h3 class="font-bold mb-2 uppercase text-xs text-primary-600">E-E-A-T</h3>
          <p class="text-xs text-dark-800">Опыт, экспертиза, авторитетность, надежность.</p>
        </div>
        <div class="p-6 bg-dark-50 rounded-2xl">
          <h3 class="font-bold mb-2 uppercase text-xs text-primary-600">Mobile First</h3>
          <p class="text-xs text-dark-800">Идеальная работа на смартфонах.</p>
        </div>
        <div class="p-6 bg-dark-50 rounded-2xl">
          <h3 class="font-bold mb-2 uppercase text-xs text-primary-600">Core Web Vitals</h3>
          <p class="text-xs text-dark-800">Скорость и стабильность загрузки.</p>
        </div>
      </section>
    </div>
  `,
};
