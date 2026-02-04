import preact from '@preact/preset-vite';
import { defineConfig } from 'vite';

export default defineConfig(() => {
  return {
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
