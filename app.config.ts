import { defineConfig } from "@solidjs/start/config";

export default defineConfig({
  vite: {
    ssr: { external: ["drizzle-orm"] },
    resolve: {
      alias: {
        '@src': '/src',
        '@infrastructure': '/infrastructure',
        '~public': '/public',
        '~fonts': '/fonts'
      }
    }  
  },
});
