import { defineConfig } from "./toolkit/themeConfig";

export default defineConfig({
  // 基础信息
  siteName: "靓仔",
  locale: "zh-CN",

  // 首页品牌
  brand: {
    title: "靓仔",
    subtitle: "=",
    logo: "✨",
  },

  // 侧边栏
  sidebar: {
    author: "h4w",
    description: "blog",
  },
  
  // 隐藏版权
  copyright: {
    license: "CC-BY-NC-SA-4.0",
    show: false,  // 不显示版权声明
  },
  
  // 年份
  footer: {
    since: 2020, // 你的博客始于 2020 年
	powered: false, // 显示技术声明
	icp: {
      enable: false, // 海外部署，不需要备案
    },
  },

});
