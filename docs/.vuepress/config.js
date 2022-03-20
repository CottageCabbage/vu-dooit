module.exports = {
  // site config
  lang: 'en-US',
  title: 'Vu-dooit',
  description: 'Open Source Task Manager made with Vue',

  head: [['link', { rel: 'icon', href: '/images/Logo1.png' }]],
  // theme and its config
  theme: '@vuepress/theme-default',
  themeConfig: {
    logo: 'https://raw.githubusercontent.com/CottageCabbage/Vu-dooit/main/docs/images/Logo.svg',
    navbar: [
      {text: 'References', link: 'References.md'},
      '/Relevant-Links.md'
    ]
  },
}