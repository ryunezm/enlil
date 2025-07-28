
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://ryunezm.github.io/enlil/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/enlil"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 37664, hash: 'e8bc40f13903767a6c6b731ec3536b72844d5d9875c5984871927b8dd82e1623', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 29464, hash: '4d2a4a5203cb72492cd1ac2bc818947fa8e6d0d93538d2937330db30f8da4653', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 131348, hash: '41ac222be0c771fae3c8df23727e8286f585362fef517e8948f90a52f75c3e24', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-ITA5FEOS.css': {size: 11476, hash: 'OY68L4+gB5c', text: () => import('./assets-chunks/styles-ITA5FEOS_css.mjs').then(m => m.default)}
  },
};
