/**
 * =========================================================================
 * КОД СЧЁТЧИКА ЯНДЕКС.МЕТРИКИ
 * =========================================================================
 * 
 * ВЫ МОЖЕТЕ ВСТАВИТЬ ВАШ КОД ИЗ ЯНДЕКС.МЕТРИКИ СЮДА ДВУМЯ СПОСОБАМИ:
 * 
 * СПОСОБ 1 (Самый простой):
 * Просто замените цифры 99999999 в строке 32 на реальный номер вашего счётчика.
 * 
 * СПОСОБ 2 (Если скопировали код целиком из личного кабинета Метрики):
 * Замените содержимое функции runYandexMetrika() ниже на код из Метрики
 * (вставляйте то, что находится внутри тегов <script> ... </script>).
 */

// Флаг инициализации счетчика
var isMetrikaInitialized = false;

/**
 * БЛОК КОДА СЧЕТЧИКА ЯНДЕКС.МЕТРИКИ:
 */
function runYandexMetrika() {
  /* >>> НАЧАЛО КОДА ИЗ ЛИЧНОГО КАБИНЕТА ЯНДЕКС.МЕТРИКИ >>> */

  (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
  m[i].l=1*new Date();
  for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
  k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
  (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

  // ЗАМЕНИТЕ 99999999 НА ВАШ НОМЕР СЧЕТЧИКА:
  ym(99999999, "init", {
    clickmap: true,
    trackLinks: true,
    accurateTrackBounce: true,
    webvisor: true
  });

  /* <<< КОНЕЦ КОДА ИЗ ЛИЧНОГО КАБИНЕТА ЯНДЕКС.МЕТРИКИ <<< */
}

/**
 * Инициализация счётчика (с проверкой согласия)
 */
function initYandexMetrika() {
  if (isMetrikaInitialized) return;

  try {
    runYandexMetrika();
    isMetrikaInitialized = true;
    console.log('[Яндекс.Метрика] Счётчик успешно запущен.');
  } catch (error) {
    console.warn('[Яндекс.Метрика] Ошибка при запуске:', error);
  }
}

/**
 * Отключение счётчика и удаление cookies при клике "Отказаться" в баннере
 */
function disableYandexMetrika() {
  try {
    var ymCookies = ['_ym_uid', '_ym_d', '_ym_isad', '_ym_visorc', 'yabs-sid', '_ym_hostIndex'];
    var domain = window.location.hostname;
    
    for (var i = 0; i < ymCookies.length; i++) {
      var name = ymCookies[i];
      document.cookie = name + '=; Max-Age=0; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
      document.cookie = name + '=; Max-Age=0; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=' + domain + ';';
      document.cookie = name + '=; Max-Age=0; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.' + domain + ';';
    }

    if (window.ym && typeof window.ym === 'function') {
      window.ym = function() {};
    }

    isMetrikaInitialized = false;
    console.log('[Яндекс.Метрика] Сбор аналитики отключен пользователем, cookies удалены.');
  } catch (error) {
    console.warn('[Яндекс.Метрика] Ошибка при отключении:', error);
  }
}

// Глобальные методы для управления из баннера
window.enableYandexMetrika = initYandexMetrika;
window.disableYandexMetrika = disableYandexMetrika;

// Автоматический запуск при первой загрузке (если пользователь не нажал "Отказаться")
(function autoStart() {
  try {
    var consent = localStorage.getItem('analytics_consent');
    if (consent === 'declined') {
      console.log('[Яндекс.Метрика] Счётчик отключен по выбору пользователя.');
      return;
    }
    // Запускаем аналитику для новых посетителей и согласившихся
    initYandexMetrika();
  } catch (e) {}
})();
