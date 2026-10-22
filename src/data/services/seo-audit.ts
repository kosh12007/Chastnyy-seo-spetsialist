import { Service } from '@/types';

export const service: Service = {
  id: 'audit',
  title: 'SEO-аудит сайта',
  description: 'Полный технический и коммерческий аудит. Найду все ошибки и составлю план исправлений.',
  icon: 'FileSearch',
  slug: 'seo-audit',
  content: `
    <div class="space-y-12">
      <section>
        <h2 class="text-2xl font-bold font-heading mb-6">Кому нужен SEO-аудит?</h2>
        <div class="grid gap-6">
          <div class="p-6 bg-primary-50 rounded-2xl">
            <h3 class="font-bold mb-2">Новым проектам</h3>
            <p class="text-sm text-dark-800">Перед стартом продвижения важно выявить все ошибки, чтобы не тратить бюджет впустую.</p>
          </div>
          <div class="p-6 bg-primary-50 rounded-2xl">
            <h3 class="font-bold mb-2">Проектам с падением трафика</h3>
            <p class="text-sm text-dark-800">Найдем причину просадки и составим план по восстановлению позиций.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 class="text-2xl font-bold font-heading mb-6">Состав аудита</h2>
        <ul class="list-disc list-inside space-y-4 text-dark-800 ml-4">
          <li>Технический анализ кода и структуры</li>
          <li>Анализ коммерческих факторов</li>
          <li>Проверка юзабилити и мобильной версии</li>
          <li>Анализ ссылочного профиля</li>
          <li>Поиск и устранение дублей страниц</li>
        </ul>
      </section>
    </div>
  `,
};
