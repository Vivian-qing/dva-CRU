import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index.jsx' },
    { path: '/users', component: '@/pages/users/index' },
    // { path: '/search', component: '@/pages/search/index' },
  ],
  proxy: {
    '/api': {
      'target': 'http://public-api-v1.aspirantzhang.com/',
      'changeOrigin': true,
      'parhRewrite': { '^/api':''},
    }
  },
  fastRefresh: {},
});
