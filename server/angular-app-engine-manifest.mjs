
export default {
  basePath: 'https://ryunezm.github.io/enlil',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
