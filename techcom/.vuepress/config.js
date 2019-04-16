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
      permalinkSymbol: '&rarr;'
    },
    toc: {
      includeLevel: [1, 2, 3, 4]
    },
    lineNumbers: true
  },
  themeConfig: {
    sidebar: [
      ['/','[Home]'],
      ['/documentation/','Documentation'],
      ['/guide/', 'Guide'],
      ['/interview-question/', 'Interview Question'],
      ['/post/', 'Post'],
      ['/reference-card/', 'Reference Card'],
      ['/tutorial/', 'Tutorial'],
    ],
    nav: [{
        text: 'Menu',
        link: '/menu.md'
      },
      {
        text: 'Guide',
        link: '/guide/'
      },
      {
        text: 'External',
        link: 'https://google.com'
      },
    ]
  }
}
