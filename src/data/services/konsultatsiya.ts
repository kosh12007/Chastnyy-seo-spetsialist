import { Service } from '@/types';

export const service: Service = {
  id: 'consulting',
  title: 'Консультация по SEO',
  description: 'Разберу вашу ситуацию, составлю план работ. 60 минут детального разбора проекта.',
  icon: 'MessageCircle',
  slug: 'konsultatsiya',
  content: `
    <div class="space-y-12">
      <section>
        <h2 class="text-2xl font-bold font-heading mb-6">Как проходит консультация?</h2>
        <div class="p-8 bg-accent-50 rounded-2xl border border-accent-100">
          <p class="text-dark-800 mb-4 font-medium italic">
            "За 60 минут мы разберем ваш проект 'по косточкам'. Вы получите четкие ответы на вопросы: почему нет трафика и что делать прямо сейчас."
          </p>
        </div>
      </section>

      <section>
        <h2 class="text-2xl font-bold font-heading mb-6">План консультации</h2>
        <ul class="space-y-4">
          <li class="flex items-center gap-4">
            <span class="w-8 h-8 rounded-full bg-accent-600 text-white flex items-center justify-center flex-shrink-0">✓</span>
            <span class="text-dark-800">Аудит текущего состояния сайта</span>
          </li>
          <li class="flex items-center gap-4">
            <span class="w-8 h-8 rounded-full bg-accent-600 text-white flex items-center justify-center flex-shrink-0">✓</span>
            <span class="text-dark-800">Анализ стратегии конкурентов</span>
          </li>
          <li class="flex items-center gap-4">
            <span class="w-8 h-8 rounded-full bg-accent-600 text-white flex items-center justify-center flex-shrink-0">✓</span>
            <span class="text-dark-800">Разбор ошибок внутренней оптимизации</span>
          </li>
          <li class="flex items-center gap-4">
            <span class="w-8 h-8 rounded-full bg-accent-600 text-white flex items-center justify-center flex-shrink-0">✓</span>
            <span class="text-dark-800">Составление пошагового плана на 3 месяца</span>
          </li>
        </ul>
      </section>
    </div>
  `,
};
