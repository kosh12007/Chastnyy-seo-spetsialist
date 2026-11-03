/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_SITE_URL: string;
  readonly VITE_APP_TITLE: string;
  readonly VITE_APP_API_URL: string;
  readonly VITE_APP_DEFAULT_THEME: string;
  readonly VITE_APP_EXPERT_NAME: string;
  readonly VITE_APP_EXPERT_FULL_NAME: string;
  readonly VITE_APP_EXPERT_FULL_NAME_GENITIVE: string;
  readonly VITE_APP_EXPERT_FULL_NAME_INSTRUMENTAL: string;
  readonly VITE_APP_EXPERT_FULL_NAME_DATIVE: string;
  readonly VITE_APP_EXPERT_INITIALS: string;
  readonly VITE_APP_INN: string;
  readonly VITE_APP_LEGAL_STATUS_SHORT: string;
  readonly VITE_APP_LEGAL_STATUS_FULL: string;
  readonly VITE_APP_TAX_REGION: string;
  readonly VITE_APP_PHONE: string;
  readonly VITE_APP_EMAIL: string;
  readonly VITE_APP_WHATSAPP: string;
  readonly VITE_APP_TELEGRAM: string;
  readonly VITE_APP_ADDRESS: string;
  readonly VITE_APP_WORKING_HOURS: string;
  readonly VITE_APP_MAP_LATITUDE: string;
  readonly VITE_APP_MAP_LONGITUDE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
