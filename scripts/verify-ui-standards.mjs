import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const pagesDir = path.join(projectRoot, 'src', 'pages');
const sectionsDir = path.join(projectRoot, 'src', 'components', 'sections');

console.log('\n🔍 [UI Style Guide Validator] Запуск глубокой проверки UI-стандартов и соответствия главной странице...\n');

/**
 * Рекурсивный поиск всех .tsx файлов
 */
function getTsxFiles(dir, files = []) {
  if (!fs.existsSync(dir)) return files;
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      getTsxFiles(fullPath, files);
    } else if (item.endsWith('.tsx') && !item.includes('.test.') && !item.includes('.spec.')) {
      files.push(fullPath);
    }
  }
  return files;
}

const activeSectionNames = new Set([
  'HeroSection',
  'SEOBasicsSection',
  'CasesSection',
  'StepsSection',
  'TariffsSection',
  'BudgetCalculatorSection',
  'ModelComparisonSection',
  'AboutExpertSection',
  'FAQSection',
  'CTASection',
  'ContactForm',
  'SpecialOfferBanner',
  'ComparisonTableSection',
  'DeliverablesSection',
  'RelatedServicesSection',
  'SubServiceHero',
  'DiagnosticScenariosSection',
  'ChecklistGroupsSection',
  'AuditTrustAndRulesSection',
  'TariffComparisonTable',
]);

const pageFiles = getTsxFiles(pagesDir);
const sectionFiles = getTsxFiles(sectionsDir).filter(f => {
  const dirName = path.basename(path.dirname(f));
  return activeSectionNames.has(dirName);
});

let totalErrors = 0;
let totalPassed = 0;

/**
 * Валидация файла на соответствие UI Style Guide
 */
function validateFile(filePath, isPage = true) {
  const relativePath = path.relative(projectRoot, filePath).replace(/\\/g, '/');
  const content = fs.readFileSync(filePath, 'utf-8');
  const errors = [];

  // 1. Проверка анимации (для страниц)
  if (isPage) {
    const hasAnimatedSectionImport =
      content.includes('AnimatedSection') ||
      content.includes("from 'framer-motion'") ||
      content.includes('from "framer-motion"');

    const usesAnimatedSection =
      content.includes('<AnimatedSection') ||
      content.includes('<motion.');

    if (!hasAnimatedSectionImport || !usesAnimatedSection) {
      errors.push('❌ Отсутствует анимация: страница не импортирует или не использует <AnimatedSection>');
    }
  }

  // 2. Проверка Hero-секции на координатную фоновую сетку (grid-bg)
  if (content.includes('<h1') && !content.includes('grid-bg')) {
    errors.push('❌ Отсутствует класс сетки "grid-bg" в Hero-секции');
  }

  // 3. Проверка шрифтового стека заголовков: H1/H2 должны иметь tracking-tight
  if (content.includes('<h1') && !content.includes('tracking-tight') && !content.includes('font-heading')) {
    errors.push('⚠️ Заголовок H1 не содержит рекомендованных классов типографики ("tracking-tight" или "font-heading")');
  }

  // 4. Проверка поддержки темного режима (наличие dark:)
  if (content.includes('<section') && !content.includes('dark:')) {
    errors.push('❌ Отсутствуют классы тёмной темы (dark:) для цветовой схемы Dark Obsidian');
  }

  // 5. Проверка шрифта в блоках тарифов и цен: цены ОБЯЗАНЫ использовать font-mono (JetBrains Mono)
  const isTariffBlock =
    content.includes('id="pricing"') ||
    content.includes('id="pricing-tiers"') ||
    content.includes('TariffsSection') ||
    content.includes('pricingTiers') ||
    content.includes('auditTiers');

  if (isTariffBlock) {
    // В блоках тарифов цена должна иметь font-mono
    if (content.includes('tier.price') && !content.includes('font-mono mb-6') && !content.includes('font-mono mb-1')) {
      errors.push('❌ Нарушение стиля тарифов: отображение цены "tier.price" не содержит шрифт "font-mono"');
    }

    // Надзаголовки перед тарифами должны иметь tracking-widest (в компоненте TariffsSection или в JSX)
    if (content.includes('Прозрачные тарифы') && !content.includes('TariffsSection') && !content.includes('tracking-widest')) {
      errors.push('⚠️ Надзаголовок "Прозрачные тарифы" должен использовать класс "tracking-widest" как на главной');
    }
  }

  // 6. Проверка надзаголовков (eyebrow) на моноширинный шрифт и регистр
  const hasEyebrow = content.includes('text-growth-600') && content.includes('uppercase');
  if (hasEyebrow && !content.includes('font-mono')) {
    errors.push('⚠️ Надзаголовок секции с акцентным цветом и uppercase не использует класс "font-mono"');
  }

  return { relativePath, errors };
}

// Проверяем страницы
for (const filePath of pageFiles) {
  const { relativePath, errors } = validateFile(filePath, true);
  if (errors.length > 0) {
    console.error(`🔴 Ошибки на странице: ${relativePath}`);
    for (const err of errors) {
      console.error(`   ${err}`);
    }
    totalErrors += errors.length;
  } else {
    console.log(`✅ [OK] ${relativePath}`);
    totalPassed++;
  }
}

// Проверяем секции
for (const filePath of sectionFiles) {
  const { relativePath, errors } = validateFile(filePath, false);
  if (errors.length > 0) {
    console.error(`🔴 Ошибки в секции: ${relativePath}`);
    for (const err of errors) {
      console.error(`   ${err}`);
    }
    totalErrors += errors.length;
  } else {
    console.log(`✅ [OK] ${relativePath}`);
    totalPassed++;
  }
}

console.log('\n------------------------------------------------------------');
console.log(`Результаты проверки UI-стандартов: Успешно: ${totalPassed}, Ошибок: ${totalErrors}`);

if (totalErrors > 0) {
  console.error('❌ Проверка UI_STYLE_GUIDE провалена. Исправьте ошибки перед сборкой!\n');
  process.exit(1);
} else {
  console.log('🎉 Все страницы и секции полностью соответствуют эталонным UI-стандартам главной страницы!\n');
  process.exit(0);
}
