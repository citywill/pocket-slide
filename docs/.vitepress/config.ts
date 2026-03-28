import { escape } from "querystring";

export default {
  // 站点级选项
  base: '/pocket-slide/',
  title: 'Pocket slide',
  description: 'AI友好的全栈开发解决方案',
  head: [['link', { rel: 'icon', href: '/pocket-slide/pocket-stack.svg', }]],
  themeConfig: {
    // 主题级选项
    logo: '/pocket-stack.svg',
    siteTitle: 'Pocket Slide',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/citywill/pocket-slide' }
    ],
    search: {
      provider: 'local'
    },
    outline: {
      level: [2, 4],
      label: '目录'
    },
    sidebar: [
      { text: '概述', link: '/index' },
      { text: '组件说明', link: '/组件说明' },
      { text: '背景图片', link: '/背景图片' },
      { text: '主题配置', link: '/主题配置' },
      { text: 'AI 开发指南', link: '/AI开发指南' },
    ]
  }
}