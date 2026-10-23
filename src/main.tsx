import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import 'react-phone-input-2/lib/style.css';
import './styles/globals.css';

const rootElement = document.getElementById('root')!;
const appElement = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Монтируем интерактивное React-приложение поверх серверного HTML без конфликтов с SEO-расширениями браузера (data-heading-tag)
ReactDOM.createRoot(rootElement).render(appElement);
