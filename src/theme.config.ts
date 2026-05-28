import { defineConfig } from "./toolkit/themeConfig";

export default defineConfig({
  // 基础信息
  siteName: "靓仔",
  locale: "zh-CN",

  // 首页品牌
  brand: {
    title: "靓仔",
    subtitle: "你好啊，叼毛",
    logo: "✨",
  },

  // 封面
  cover: {
    enableFixedCover: true,
    fixedCover: "https://file.icve.com.cn/file_doc/640/442/A026EB068D9CF3D4FB790F6252A2B4FC.jpg",
  },  

  // 侧边栏
  sidebar: {
    author: "h4w",
    description: "blog",
  },

});
