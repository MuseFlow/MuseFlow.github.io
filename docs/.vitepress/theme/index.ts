import Theme from 'vitepress/theme'
import DefaultTheme from 'vitepress/theme'
import MNavLinks from './components/MNavLinks.vue'
import AnimateTitle from "./components/AnimateTitle.vue"
import { h } from 'vue'
import { useData } from 'vitepress'
import './style/var.css'

export default {
  ...Theme,
  extends: DefaultTheme,
  Layout: () => {
    const props: Record<string, any> = {}
    // 获取 frontmatter
    const { frontmatter } = useData()

    /* 添加自定义 class */
    if (frontmatter.value?.layoutClass) {
      props.class = frontmatter.value.layoutClass
    }

    return h(Theme.Layout, props)
    /* 动态文字颜色 */
    // return h(Theme.Layout, null, {
    //   "home-hero-info": () => h(AnimateTitle),
    // });
  },
  enhanceApp({app}) {
    // 注册组件
    app.component('MNavLinks' , MNavLinks)
  },
}
