// https://vuepress.vuejs.org/config/#basic-config

module.exports = {
  // base : /bar/ //-> https://foo.github.io/bar/
  title: 'PeterOnCode - TechCom',
  description: 'TechCom (Technical Communication)',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/safari-browser-icon-64662.png'
      }
    ]
  ],
  markdown: {
    anchor: {
      permalink: true,
      permalinkBefore: true,
      permalinkSymbol: '#'
    },
    toc: {
      includeLevel: [1, 2, 3, 4]
    }
  },
  // themeConfig: {
  //   nav: [{
  //       text: 'Home',
  //       link: '/'
  //     },
  //     {
  //       text: 'Guide',
  //       link: '/guide/'
  //     },
  //     {
  //       text: 'External',
  //       link: 'https://google.com'
  //     },
  //   ]
  // }
}
