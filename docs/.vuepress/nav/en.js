module.exports = [
  {
    text: 'Home',
    link: '/'
  },
  {
    text: 'Notation',
    link: '/notation/'
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
    link: '/log/'
  },
  {
    text: 'FAQ',
    link: '/issues/'
  },
  {
    text: 'Github',
    target:'_blank',
    link: 'https://github.com/MuseFlow'
  }
]