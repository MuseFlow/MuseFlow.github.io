module.exports = [
  {
    text: 'Home',
    link: '/'
  },
  {
    text: 'Staves',
    link: '/staves/index.html'
  },
  {
    text: 'Music',
    ariaLabel: 'Classify',
    items: [
      {
        text: 'Category',
        items: [
          {
            text: 'Piano Notes',
            link: '/piano/'
          },
          {
            text: 'Guitar Notes',
            link: '/guitar/'
          }
        ]
      },
      {
        text: 'Other',
        items: [
          {
            text: 'Electronic',
            link: '/electric/'
          }
        ],
      }
    ]
  },
  {
    text: 'Change',
    link: '/log/index.html'
  },
  {
    text: 'FAQ',
    link: '/issues/index.html'
  },
  {
    text: 'Github',
    target:'_blank',
    link: 'https://github.com/MuseFlow'
  }
]