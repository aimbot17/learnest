/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly CORS_ORIGIN_DEV: string;
  
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
