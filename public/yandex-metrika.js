/**
 * =========================================================================
 * УПРАВЛЕНИЕ ЯНДЕКС.МЕТРИКОЙ И СОГЛАСИЕМ ПОЛЬЗОВАТЕЛЕЙ (152-ФЗ)
 * =========================================================================
 * 
 * Данный файл:
 * 1. Автоматически подгружает код счётчика из отдельного файла:
 *    - /yandex-metrika.html (если код вставлен целиком со скриптами из кабинета Метрики)
 *    - или /yandex-metrika.json (если передан номер счётчика и опции в формате JSON)
 * 2. Проверяет согласие пользователя (localStorage: 'analytics_consent')
 * 3. Предоставляет методы для баннера куки (CookieBanner):
 *    - window.disableYandexMetrika() — отключение счётчика и удаление cookies
 *    - window.enableYandexMetrika()  — включение счётчика при согласии
 * 
 * =========================================================================
 */

(function () {
  // Флаг инициализации счетчика
  var isInitialized = false;
  // Номер активного счетчика
  var currentCounterId = null;

  /**
   * Исполнение полученного кода счетчика (HTML или JSON)
   * @param {string} rawText Текст из файла yandex-metrika.html или yandex-metrika.json
   */
  function executeSnippet(rawText) {
    if (isInitialized) return;

    var trimmed = (rawText || '').trim();
    if (!trimmed) return;

    // ВАРИАНТ 1: Если в файле передан JSON-конфиг
    if (trimmed.startsWith('{') && trimmed.endsWith('}')) {
      try {
        var config = JSON.parse(trimmed);
        if (config.id) {
          currentCounterId = String(config.id);

          // Инициализация стандартного загрузчика Метрики
          (function (m, e, t, r, i, k, a) {
            m[i] = m[i] || function () { (m[i].a = m[i].a || []).push(arguments); };
            m[i].l = 1 * new Date();
            for (var j = 0; j < document.scripts.length; j++) {
              if (document.scripts[j].src === r) { return; }
            }
            k = e.createElement(t); a = e.getElementsByTagName(t)[0];
            k.async = 1; k.src = r; a.parentNode.insertBefore(k, a);
          })(window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js?id=' + currentCounterId, 'ym');

          var defaultOptions = {
            ssr: true,
            webvisor: true,
            clickmap: true,
            referrer: document.referrer,
            url: location.href,
            accurateTrackBounce: true,
            trackLinks: true
          };

          window.ym(Number(currentCounterId), 'init', config.options || defaultOptions);
          isInitialized = true;
          console.log('[Яндекс.Метрика] Счётчик ' + currentCounterId + ' успешно инициализирован из JSON-файла.');
          return;
        }
      } catch (jsonErr) {
        console.warn('[Яндекс.Метрика] Ошибка разбора JSON, выполняем как HTML-код:', jsonErr);
      }
    }

    // ВАРИАНТ 2: Если в файле передан HTML-код из личного кабинета Метрики
    // (содержит теги <!-- -->, <script> и <noscript>)
    try {
      // Извлекаем номер счётчика для корректного отключения при отказе
      var idMatch = trimmed.match(/tag\.js\?id=(\d+)/) || trimmed.match(/ym\((\d+)/) || trimmed.match(/watch\/(\d+)/);
      if (idMatch && idMatch[1]) {
        currentCounterId = idMatch[1];
      }

      var container = document.createElement('div');
      container.innerHTML = trimmed;

      // Извлекаем и запускаем скрипты
      var scriptElements = container.getElementsByTagName('script');
      for (var i = 0; i < scriptElements.length; i++) {
        var oldScript = scriptElements[i];
        var newScript = document.createElement('script');
        newScript.type = oldScript.type || 'text/javascript';

        if (oldScript.src) {
          newScript.src = oldScript.src;
        } else {
          newScript.text = oldScript.innerHTML;
        }

        document.head.appendChild(newScript);
      }

      // Добавляем noscript блоки, если они есть
      var noscriptElements = container.getElementsByTagName('noscript');
      for (var n = 0; n < noscriptElements.length; n++) {
        var ns = document.createElement('noscript');
        ns.innerHTML = noscriptElements[n].innerHTML;
        if (document.body) {
          document.body.appendChild(ns);
        } else {
          document.addEventListener('DOMContentLoaded', function () {
            document.body.appendChild(ns);
          });
        }
      }

      isInitialized = true;
      console.log('[Яндекс.Метрика] Код счётчика успешно подгружен и запущен' + (currentCounterId ? ' (ID: ' + currentCounterId + ')' : '') + '.');
    } catch (htmlErr) {
      console.error('[Яндекс.Метрика] Ошибка при вставке кода счётчика:', htmlErr);
    }
  }

  /**
   * Загрузка файла со счётчиком (сначала проверяем .html, затем .json)
   */
  function loadMetrikaCode() {
    // Проверяем согласие: если пользователь нажал «Отказаться», прерываем загрузку
    try {
      var consent = localStorage.getItem('analytics_consent');
      if (consent === 'declined') {
        console.log('[Яндекс.Метрика] Загрузка счётчика отменена: пользователь выбрал «Отказаться».');
        return;
      }
    } catch (e) {}

    // 1. Пробуем загрузить yandex-metrika.html
    fetch('/yandex-metrika.html')
      .then(function (response) {
        if (response.ok) {
          return response.text();
        }
        // 2. Если html нет, пробуем yandex-metrika.json
        return fetch('/yandex-metrika.json').then(function (jsonResponse) {
          if (jsonResponse.ok) {
            return jsonResponse.text();
          }
          throw new Error('Файлы yandex-metrika.html и yandex-metrika.json не найдены');
        });
      })
      .then(function (codeText) {
        executeSnippet(codeText);
      })
      .catch(function (error) {
        console.warn('[Яндекс.Метрика] Информация:', error.message);
      });
  }

  /**
   * Отключение счётчика и удаление аналитических cookies (при клике «Отказаться»)
   */
  function disableYandexMetrika() {
    try {
      if (currentCounterId) {
        window['disableYaCounter' + currentCounterId] = true;
      }

      // Список cookies, используемых Яндекс.Метрикой
      var ymCookies = ['_ym_uid', '_ym_d', '_ym_isad', '_ym_visorc', 'yabs-sid', '_ym_hostIndex', '_ym_user_am'];
      var domain = window.location.hostname;

      for (var i = 0; i < ymCookies.length; i++) {
        var name = ymCookies[i];
        document.cookie = name + '=; Max-Age=0; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        document.cookie = name + '=; Max-Age=0; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=' + domain + ';';
        document.cookie = name + '=; Max-Age=0; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.' + domain + ';';
      }

      // Заглушка функции ym для предотвращения дальнейшей отправки хитов
      if (window.ym) {
        window.ym = function () {};
      }

      isInitialized = false;
      console.log('[Яндекс.Метрика] Сбор аналитики отключен пользователем, cookies удалены.');
    } catch (error) {
      console.warn('[Яндекс.Метрика] Ошибка при отключении:', error);
    }
  }

  /**
   * Включение счётчика (при клике «Принять» в баннере согласия)
   */
  function enableYandexMetrika() {
    if (currentCounterId) {
      try {
        delete window['disableYaCounter' + currentCounterId];
      } catch (e) {}
    }

    if (!isInitialized) {
      loadMetrikaCode();
    }
  }

  // Экспорт функций для управления из CookieBanner
  window.disableYandexMetrika = disableYandexMetrika;
  window.enableYandexMetrika = enableYandexMetrika;

  // Запуск подгрузки счетчика
  loadMetrikaCode();
})();
