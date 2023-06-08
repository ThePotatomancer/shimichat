declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production';
      CHAT_SERVER_PORT?: string;
    }
  }
}

export {};