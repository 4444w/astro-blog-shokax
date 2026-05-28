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
    fixedCover: "https://file.icve.com.cn/file_doc/375/495/5DE7BF44B6C207678DC93EF846B1269B.jpg",
    fixedCover: "https://file.icve.com.cn/file_doc/503/196/7DD313CA66CCA41853FB2FD23F034A1A.jpg",
    fixedCover: "https://file.icve.com.cn/file_doc/619/606/9AD9791E62A8D2739F2C0D826EEAC6D4.jpg",
    fixedCover: "https://file.icve.com.cn/file_doc/417/804/684C903179C72E632ECB6FD63349C451.jpg",
    fixedCover: "https://file.icve.com.cn/file_doc/775/78/C1E1390E8646F64B11F946B72C8A51BE.jpg",
  },  

  // 侧边栏
  sidebar: {
    author: "h4w",
    description: "blog",
  },
  
  // 版权配置
  copyright: {
    license: "CC-BY-NC-SA-4.0", // 许可证类型
    show: true, // 是否显示版权声明
  },
});
