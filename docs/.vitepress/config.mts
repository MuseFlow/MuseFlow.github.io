import {defineConfig} from "vitepress";
import timeline from "vitepress-markdown-timeline";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [["link", {rel: "icon", href: "/music.svg"}]],
  lang: "zh-CN",
  title: "MuseFlow",
  description: "感受音乐的力量～",

  // 启用深色模式
  appearance: "dark",

  // 多语言

  // locales: {
  //   root: {
  //     label: "简体中文",
  //     lang: "Zh_CN",
  //   },
  //   en: {
  //     label: "English",
  //     lang: "en",
  //     // link: "/en/",
  //   },
  // },

  // markdown 配置
  markdown: {
    // 行号显示
    lineNumbers: true,

    // 时间线
    config: (md) => {
      md.use(timeline);
    },
  },

  themeConfig: {
    logo: {
      dark: "/music_white.svg",
      light: "/music_black.svg"
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      // { text: "首页", link: "/" },
      {text: "导航", link: "/nav/nav"},
      {text: "记录", link: "/release/note"},
      {text: "乐理", link: "/theory/outline"},
      {text: "乐器", link: "/instruments/category"},
      {text: "乐史", link: "/history/story"},
      {text: "创作", link: "/create/idea"},
      {text: "关于", link: "/about/about"},
    ],

    socialLinks: [
      {icon: "github", link: "https://github.com/MuseFlow/MuseFlow.github.io"},
      {icon: 'x', link: 'https://twitter.com/_incoder'},
      {
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Dribbble</title><path d="M12...6.38z"/></svg>',
        },
        link: "...",
        // You can include a custom label for accessibility too (optional but recommended):
        ariaLabel: "cool link",
      },
    ],

    search: {
      provider: "local",
    },

    footer: {
      // message: "Released under the MIT License.",
      copyright:
        'Copyright © <a href="https://museflow.io/">MuseFlow</a>',
    },

    returnToTopLabel: "返回顶部",
    langMenuLabel: '多语言',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    skipToContentLabel: '跳转到内容',

    outline: {
      level: 'deep',
      label: '目录',
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    // 自定义上下页名
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
  },
});
