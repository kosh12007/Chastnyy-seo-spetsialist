import { Service } from '@/types';

export const service: Service = {
  id: 'yandex',
  title: 'Продвижение в Яндекс',
  description: 'Выведу сайт в ТОП-10 Яндекс по целевым запросам. Учитываю все алгоритмы и фильтры.',
  icon: 'Globe',
  slug: 'yandex',
  content: `
    <div class="space-y-12">
      <section>
        <h2 class="text-2xl font-bold font-heading mb-6">Особенности продвижения в Яндекс в 2026 году</h2>
        <p class="mb-6 text-dark-800">
          Яндекс уделяет огромное внимание поведенческим факторам и коммерческому качеству сайта. Просто "написать тексты" уже не достаточно.
        </p>
      </section>

      <section class="grid md:grid-cols-2 gap-8">
        <div>
          <h3 class="text-xl font-bold mb-4">Поведенческие факторы</h3>
          <p class="text-sm text-dark-800">Мы работаем над тем, чтобы пользователи проводили больше времени на сайте и находили ответы на свои вопросы.</p>
        </div>
        <div>
          <h3 class="text-xl font-bold mb-4">Коммерческие факторы</h3>
          <p class="text-sm text-dark-800">Наличие цен, удобная корзина, контакты, отзывы и формы обратной связи — критически важны для Яндекса.</p>
        </div>
      </section>
    </div>
  `,
};
