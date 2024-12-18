---
layout: doc
layoutClass: m-nav-layout
sidebar: false
prev: false
next: false
---

<style src="../.vitepress/theme/style/nav.scss"></style>

<script setup>
import { NAV_DATA } from '../.vitepress/theme/utils/data'
</script>

# 我的导航

::: warning 申明
排名不分先后顺序
:::

<MNavLinks v-for="{title, items} in NAV_DATA" :title="title" :items="items"/>

> 导航实现参考 [使用 VitePress 打造个人前端导航网站](https://notes.fe-mm.com/daily-notes/issue-38)
