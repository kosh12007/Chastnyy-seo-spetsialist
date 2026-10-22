/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  readonly VITE_APP_API_URL: string;
  readonly VITE_APP_PHONE: string;
  readonly VITE_APP_EMAIL: string;
  readonly VITE_APP_WHATSAPP: string;
  readonly VITE_APP_TELEGRAM: string;
  readonly VITE_APP_ADDRESS: string;
  readonly VITE_APP_WORKING_HOURS: string;
  readonly VITE_APP_MAP_LATITUDE: string;
  readonly VITE_APP_MAP_LONGITUDE: string;
  readonly VITE_APP_SITE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
