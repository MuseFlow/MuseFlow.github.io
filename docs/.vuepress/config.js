module.exports = ctx =>  ({
    // 多语言配置
    locales: {
        '/': {
          lang: 'en-US',
          // 显示在左上角的网页名称以及首页在浏览器标签显示的title名称
          title: 'MuseFlow',
          // meta 中的描述文字，用于SEO
          description: 'MuseFlow'
        },
        '/zh/': {
          lang: 'zh-CN',
          // 显示在左上角的网页名称以及首页在浏览器标签显示的title名称
          title: 'MuseFlow',
          // meta 中的描述文字，用于SEO
          description: 'MuseFlow'
        }
      },
    // 注入到当前页面的 HTML <head> 中的标签
    head: [
        //浏览器的标签栏的网页图标
        ['link', { rel: 'icon', href: '/music.svg' }], 
        ['link', { rel: 'manifest', href: '/manifest.json' }],
        ['link', { rel: 'apple-touch-icon', href: `/music.svg` }],
        ['link', { rel: 'mask-icon', href: '/music.svg', color: '#49b1f5' }],
        ['meta', { name: 'theme-color', content: '#49b1f5' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['meta', { name: 'msapplication-TileImage', content: '/music.svg' }],
        ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
    ],
    // markdown 显示行号
    markdown: {
        lineNumbers: true
    },
    // VuePress 将自动生成并注册一个 Service Worker，用于缓存页面的内容以供离线使用（仅会在生产环境中启用）
    serviceWorker: true,

    themeConfig: {    
        // 导航栏 Logo
        logo: '/music.svg',
        // 最后更新时间
        // lastUpdated: 'lastUpdate', // string | boolean
        // 内置搜索
        search: true,
        // 页面滚动
        smoothScroll: true,
        locales: {
            '/': {
              label: 'English',
              selectText: 'Languages',
              ariaLabel: 'Select language',
              editLinkText: 'Edit this page on GitHub',
              lastUpdated: 'Last Updated',
              nav: require('./nav/en'),
              sidebar: {
                '/notation/': getNotationSidebar('Guide', 'Advanced'),
                '/piano/': getPianoSidebar('🎹  Overview', '🎹  Pop', '🎹  Classic', '🎹  Recommend', '🎹  Other'),
                '/guitar/': getGuitarSidebar('🎸  Overview', '🎸  Pop','🎸  Classic','🎸  Recommend','🎸  Other'),
                '/issues/': getIssuesSidebar(),
                '/log/': getLogSidebar()
              }
            },
            '/zh/': {
              label: '简体中文',
              selectText: '选择语言',
              ariaLabel: '选择语言',
              editLinkText: '在 GitHub 上编辑此页',
              lastUpdated: '上次更新',
              nav: require('./nav/zh'),
              sidebar: {
                '/zh/notation/': getNotationSidebar('指南', '深入'),
                '/zh/piano/': getPianoSidebar('🎹  概览', '🎹  热门', '🎹  经典', '🎹  推荐', '🎹  其他'),
                '/zh/guitar/': getGuitarSidebar('🎸  概览', '🎸  热门', '🎸  经典', '🎸  推荐', '🎸  其他'),
                '/zh/issues/': getIssuesSidebar(),
                '/zh/log/': getLogSidebar()
              }
            }
        },

        plugins: [
            ['@vuepress/back-to-top', true],
            ['@vuepress/last-updated', true],
            ['@vuepress/pwa', {
              serviceWorker: true,
              updatePopup: true
            }],
            ['@vuepress/medium-zoom', true],
            ['@vuepress/google-analytics', {
              ga: 'G-Z12RKTSQKC'
            }],
            ['@vuepress/search', {
              searchMaxSuggestions: 10
            }],
            ['container', {
              type: 'vue',
              before: '<pre class="vue-container"><code>',
              after: '</code></pre>'
            }]
          ],
          extraWatchFiles: [
            '.vuepress/nav/en.js',
            '.vuepress/nav/zh.js'
          ]
    }
})

function getLogSidebar () {
  return [
    ''
  ]
}

function getNotationSidebar (groupA, groupB) {
  return [
    {
      title: groupA,
      collapsable: true,
      children: [
        '',
      ]
    },
    {
      title: groupB,
      collapsable: true,
      children: [

      ]
    }
  ]
}

function getPianoSidebar (categoryA, categoryB, categoryC, categoryD, categoryE) {
  return [
    {
      title: categoryA,
      collapsable: true,
      children: [
        '',
      ]
    },
    {
      title: categoryB,
      collapsable: true,
      children: [
        'pop',
      ]
    },
    {
      title: categoryC,
      collapsable: true,
      children: [
        'classic'
      ]
    },
    {
      title: categoryD,
      collapsable: true,
      children: [
        // ''
      ]
    },
    {
      title: categoryE,
      collapsable: true,
      children: [
        
      ]
    }
  ]
}

function getGuitarSidebar (categoryA, categoryB, categoryC, categoryD, categoryE) {
  return [
    {
      title: categoryA,
      collapsable: true,
      children: [
        '',
      ]
    },
    {
      title: categoryB,
      collapsable: true,
      children: [
        'pop',
      ]
    },
    {
      title: categoryC,
      collapsable: true,
      children: [
        // 
      ]
    },
    {
      title: categoryD,
      collapsable: true,
      children: [
        // ''
      ]
    },
    {
      title: categoryE,
      collapsable: true,
      children: [
        
      ]
    }
  ]
}

function getIssuesSidebar () {
  return [
    ''
  ]
}