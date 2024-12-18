import type { NavData } from './types'

export const NAV_DATA: NavData[] = [
  {
    title: '开源支持',
    items: [
      {
        // https://avatars.githubusercontent.com/u/116503765?s=200&v=4
        icon: 'https://www.abcjs.net/favicon.ico',
        title: 'Abcjs',
        badge: {
          text: 'Abcjs',
          type: 'info',
        },
        desc: 'Javascript for rendering abc music notation',
        link: 'https://www.abcjs.net'
      },
      {
        icon: 'https://configurator.abcjs.net/favicon-32x32.png',
        title: 'Abcjs Configurator',
        badge: {
          text: 'Configurator',
          type: 'warning',
        },
        desc: 'Companion to abcjs, help to understanding the abcjs configuration options',
        link: 'https://configurator.abcjs.net'
      },
      {
        // https://avatars.githubusercontent.com/u/68003193?s=48&v=4
        // https://www.verovio.org/assets/images/verovio-fadded-50.png
        icon: 'https://www.verovio.org/favicon.ico',
        title: 'Verovio',
        badge: {
          text: 'Verovio',
          type: 'tip',
        },
        desc: 'Music notation engraving library for MEI with MusicXML and Humdrum support and various toolkits',
        link: 'https://www.verovio.org'
      },
      {
        icon: 'https://res.cloudinary.com/incoder/image/upload/v1734533102/museflow/vexflow.png',
        title: 'Vexflow',
        badge: {
          text: 'Vexflow',
          type: 'danger',
        },
        desc: 'JavaScript library for rendering music notation and guitar tablature',
        link: 'https://www.vexflow.com'
      },
    ]
  },

]