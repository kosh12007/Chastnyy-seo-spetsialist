/**
 * =========================================================================
 * ПОДГРУЗКА И УПРАВЛЕНИЕ ЯНДЕКС.МЕТРИКОЙ (152-ФЗ)
 * =========================================================================
 * 
 * 1. Код счётчика НЕ захардкожен здесь, а берётся напрямую из файла /yandex-metrika.html
 * 2. Скрипт вставляет код из yandex-metrika.html в самое начало <head> страницы
 * 3. Если пользователь нажимает «Отказаться» в куки-баннере — код Метрики полностью
 *    вырезается со страницы (DOM), удаляются все cookies и отключается трекинг.
 * 4. Если пользователь нажимает «Принять» — код подгружается и вставляется в страницу.
 * =========================================================================
 */

(function () {
  // Атрибут для идентификации всех внедрённых тегов Метрики
  var INJECTED_ATTR = 'data-metrika-injected';
  // Кэш текста счётчика
  var cachedHtml = null;

  /**
   * Вставка кода из HTML в самое начало страницы
   */
  function insertMetrikaFromHtml(html) {
    if (!html) return;
    cachedHtml = html;

    // Если код уже вставлен — ничего повторно не добавляем
    if (document.querySelector('[' + INJECTED_ATTR + '="true"]')) {
      return;
    }

    // Автоматически определяем номер счётчика из кода без хардкода
    var idMatch = html.match(/id=(\d+)/) || html.match(/ym\((\d+)/) || html.match(/watch\/(\d+)/);
    if (idMatch && idMatch[1]) {
      window.__activeYmCounterId = idMatch[1];
      // Снимаем блокировку, если она была ранее
      try {
        delete window['disableYaCounter' + idMatch[1]];
      } catch (e) {}
    }

    // Парсим переданный HTML-код
    var container = document.createElement('div');
    container.innerHTML = html;

    // 1. Вставляем все теги <script> в самое начало <head>
    var scriptTags = container.getElementsByTagName('script');
    var targetParent = document.head || document.documentElement;

    for (var i = 0; i < scriptTags.length; i++) {
      var orig = scriptTags[i];
      var script = document.createElement('script');
      script.setAttribute(INJECTED_ATTR, 'true');
      if (orig.type) script.type = orig.type;

      if (orig.src) {
        script.src = orig.src;
        script.async = true;
      } else {
        script.text = orig.innerHTML;
      }

      // Вставляем в самое начало дерева head
      if (targetParent.firstChild) {
        targetParent.insertBefore(script, targetParent.firstChild);
      } else {
        targetParent.appendChild(script);
      }
    }

    // 2. Вставляем теги <noscript> в body (если имеются)
    var noscriptTags = container.getElementsByTagName('noscript');
    for (var j = 0; j < noscriptTags.length; j++) {
      var ns = document.createElement('noscript');
      ns.setAttribute(INJECTED_ATTR, 'true');
      ns.innerHTML = noscriptTags[j].innerHTML;

      if (document.body) {
        if (document.body.firstChild) {
          document.body.insertBefore(ns, document.body.firstChild);
        } else {
          document.body.appendChild(ns);
        }
      }
    }

  
  }

  /**
   * Подгрузка файла /yandex-metrika.html и запуск
   */
  function loadAndInsertMetrika() {
    // Проверка согласия: если пользователь ранее отказался — не загружаем
    try {
      if (localStorage.getItem('analytics_consent') === 'declined') {
        console.log('[Яндекс.Метрика] Пользователь ранее выбрал «Отказаться» — код не вставляется.');
        return;
      }
    } catch (e) {}

    if (cachedHtml) {
      insertMetrikaFromHtml(cachedHtml);
      return;
    }

    fetch('/yandex-metrika.html')
      .then(function (response) {
        if (!response.ok) {
          throw new Error('Файл /yandex-metrika.html не найден (HTTP ' + response.status + ')');
        }
        return response.text();
      })
      .then(function (htmlCode) {
        insertMetrikaFromHtml(htmlCode);
      })
      .catch(function (error) {
        console.warn('[Яндекс.Метрика] Ошибка загрузки /yandex-metrika.html:', error);
      });
  }

  /**
   * Полное вырезание кода счётчика со страницы при клике «Отказаться»
   */
  function removeMetrika() {
    try {
      // 1. Вырезаем из DOM все добавленные теги (script и noscript)
      var injectedElements = document.querySelectorAll('[' + INJECTED_ATTR + '="true"]');
      for (var i = 0; i < injectedElements.length; i++) {
        var el = injectedElements[i];
        if (el.parentNode) {
          el.parentNode.removeChild(el);
        }
      }

      // 2. Дополнительно удаляем любые скрипты, загруженные с mc.yandex.ru
      var allScripts = document.getElementsByTagName('script');
      for (var k = allScripts.length - 1; k >= 0; k--) {
        if (allScripts[k].src && allScripts[k].src.indexOf('mc.yandex.ru') !== -1) {
          if (allScripts[k].parentNode) {
            allScripts[k].parentNode.removeChild(allScripts[k]);
          }
        }
      }

      // 3. Отключаем счетчик через глобальный флаг Метрики
      if (window.__activeYmCounterId) {
        window['disableYaCounter' + window.__activeYmCounterId] = true;
      }

      // 4. Глушим вызовы ym(...)
      if (window.ym) {
        window.ym = function () {};
      }

      // 5. Очищаем все cookies Яндекс.Метрики
      var ymCookies = ['_ym_uid', '_ym_d', '_ym_isad', '_ym_visorc', 'yabs-sid', '_ym_hostIndex', '_ym_user_am'];
      var domain = window.location.hostname;

      for (var c = 0; c < ymCookies.length; c++) {
        var cookieName = ymCookies[c];
        document.cookie = cookieName + '=; Max-Age=0; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        document.cookie = cookieName + '=; Max-Age=0; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=' + domain + ';';
        document.cookie = cookieName + '=; Max-Age=0; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.' + domain + ';';
      }

      console.log('[Яндекс.Метрика] Код счётчика полностью вырезан из страницы, cookies удалены.');
    } catch (err) {
      console.warn('[Яндекс.Метрика] Ошибка при вырезании счётчика:', err);
    }
  }

  // Экспорт глобальных функций для CookieBanner
  window.enableYandexMetrika = loadAndInsertMetrika;
  window.disableYandexMetrika = removeMetrika;

  // Автоматический запуск подгрузки в начало страницы
  loadAndInsertMetrika();
})();
