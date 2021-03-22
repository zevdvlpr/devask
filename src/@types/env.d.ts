declare namespace NodeJS {
  export interface ProcessEnv {
    // node
    NODE_ENV: 'production' | 'development' | 'testing';

    // Database
    DB_HOST: string;
    DB_PORT: string | number;
    DB_NAME: string;
    DB_USER: string;
    DB_PASS: string;
  }
}
