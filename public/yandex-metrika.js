/**
 * Код счетчика Яндекс.Метрики с поддержкой динамического включения и отключения
 * в зависимости от согласия пользователя (152-ФЗ / Политика конфиденциальности).
 * 
 * ВЫ МОЖЕТЕ ИЗМЕНЯТЬ НОМЕР СЧЕТЧИКА И ЛЮБЫЕ НАСТРОЙКИ (Вебвизор, карты кликов и т.д.)
 * НАПРЯМУЮ В ЭТОМ ФАЙЛЕ БЕЗ ПЕРЕСБОРКИ ПРОЕКТА.
 */

// 1. Укажите ваш ID счётчика Яндекс.Метрики
var YANDEX_METRIKA_ID = 99999999;

// Флаг инициализации счетчика
var isMetrikaInitialized = false;

/**
 * Инициализация счётчика Яндекс.Метрики
 */
function initYandexMetrika() {
  if (isMetrikaInitialized || !YANDEX_METRIKA_ID || YANDEX_METRIKA_ID === 99999999) {
    // Если счетчик уже запущен или ID тестовый (99999999), не дублируем вызовы
    return;
  }

  try {
    (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
    m[i].l=1*new Date();
    for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
    k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
    (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

    window.ym(YANDEX_METRIKA_ID, "init", {
      clickmap: true,
      trackLinks: true,
      accurateTrackBounce: true,
      webvisor: true
    });

    isMetrikaInitialized = true;
    console.log('[Яндекс.Метрика] Счётчик успешно инициализирован:', YANDEX_METRIKA_ID);
  } catch (error) {
    console.warn('[Яндекс.Метрика] Ошибка при запуске счётчика:', error);
  }
}

/**
 * Отключение счётчика и удаление аналитических cookies Яндекс.Метрики
 */
function disableYandexMetrika() {
  try {
    // 1. Удаляем cookies Яндекс.Метрики
    var ymCookies = ['_ym_uid', '_ym_d', '_ym_isad', '_ym_visorc', 'yabs-sid', '_ym_hostIndex'];
    var domain = window.location.hostname;
    
    for (var i = 0; i < ymCookies.length; i++) {
      var name = ymCookies[i];
      document.cookie = name + '=; Max-Age=-99999999; path=/;';
      document.cookie = name + '=; Max-Age=-99999999; path=/; domain=' + domain + ';';
      document.cookie = name + '=; Max-Age=-99999999; path=/; domain=.' + domain + ';';
    }

    // 2. Деактивируем объект ym в памяти
    if (window.ym && typeof window.ym === 'function') {
      window['yaCounter' + YANDEX_METRIKA_ID] = null;
    }

    isMetrikaInitialized = false;
    console.log('[Яндекс.Метрика] Сбор аналитики отключен пользователем, cookies удалены.');
  } catch (error) {
    console.warn('[Яндекс.Метрика] Ошибка при отключении:', error);
  }
}

// Экспортируем функции в глобальную область window для взаимодействия с UI
window.initYandexMetrika = initYandexMetrika;
window.enableYandexMetrika = initYandexMetrika;
window.disableYandexMetrika = disableYandexMetrika;
window.YANDEX_METRIKA_ID = YANDEX_METRIKA_ID;

// 2. Немедленный запуск вверху дерева при загрузке страницы (если пользователь не отказался)
(function autoStartMetrika() {
  try {
    var consent = localStorage.getItem('analytics_consent');
    // Если пользователь явно нажал "Отказаться" - Метрика НЕ запускается
    if (consent === 'declined') {
      console.log('[Яндекс.Метрика] Счётчик не запущен (пользователь ранее отказался).');
      return;
    }
    // В соответствии с 152-ФЗ РФ и ст. 158 ГК РФ (конклюдентные действия)
    // аналитика запускается с первого экрана для новых посетителей и согласившихся
    initYandexMetrika();
  } catch (e) {
    // Игнорируем ошибки доступа к localStorage
  }
})();
