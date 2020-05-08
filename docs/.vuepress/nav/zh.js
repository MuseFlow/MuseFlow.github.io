module.exports = [
    {
      text: '首页',
      link: '/zh/'
    },
    {
      text: '五线谱',
      link: '/zh/staves/index.html'
    },
    {
      text: '乐谱',
      ariaLabel: '分类',
      items: [
        {
          text: '类别',
          items: [
            {
              text: '钢琴谱',
              link: '/zh/piano/'
            },
            {
              text: '吉他谱',
              link: '/zh/guitar/'
            }
          ],
        },
        {
          text: '其他',
          items: [
            {
              text: '电音',
              link: '/zh/electric/'
            }
          ],
        }
      ]
    },
    {
      text: '更新记录',
      link: '/zh/log/index.html'
    },
    {
      text: 'FAQ',
      link: '/zh/issues/'
    },
    {
      text: 'Github',
      target:'_blank',
      link: 'https://github.com/MuseFlow'
    }
]