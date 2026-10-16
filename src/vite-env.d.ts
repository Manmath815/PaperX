/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_INQUIRY_ENDPOINT?: string;
  readonly VITE_INQUIRY_AUTH_TOKEN?: string;
  readonly VITE_WHATSAPP_NUMBER?: string;
  readonly VITE_CONTACT_EMAIL?: string;
  readonly VITE_APP_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
