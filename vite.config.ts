import preact from '@preact/preset-vite';
import { defineConfig } from 'vite';

export default defineConfig(({ command }) => {
  let baseUrl = '';
  if (command === 'build') {
    baseUrl = '/pgo-hundo/';
  }
  return {
    base: baseUrl,
    plugins: [
      preact({
        prerender: {
          enabled: true,
          renderTarget: '#app',
          additionalPrerenderRoutes: ['/404'],
          previewMiddlewareEnabled: true,
          previewMiddlewareFallback: '/404',
        },
      }),
    ],
  };
});
