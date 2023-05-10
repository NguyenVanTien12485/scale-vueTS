/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_APP_CONFIG: string;
  // more env variables...
}
interface ImportMeta {
  readonly env: ImportMetaEnv;
}
