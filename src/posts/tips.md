---
title: 示例文档
date: 2021-11-23 22:13:56
tags:
---

#部署

```bash
#搜索框
npm install --save hexo-algolia
#测试运行
hexo cl && hexo g && hexo s
#上传/数据库
hexo d && hexo algolia
```

## #文字特效￬￬￬￬￬

```html
++下划线++
++波浪线++{.wavy}
++着重点++{.dot}
++紫色下划线++{.primary}
++绿色波浪线++{.wavy .success}
++黄色着重点++{.dot .warning}
~~删除线~~
~~红色删除线~~{.danger}
==荧光高亮==
[赤橙黄绿青蓝紫]{.rainbow}
[红色]{.red}
[粉色]{.pink}
[橙色]{.orange}
[黄色]{.yellow}
[绿色]{.green}
[靛青]{.aqua}
[蓝色]{.blue}
[紫色]{.purple}
[灰色]{.grey}
快捷键 [Ctrl]{.kbd} + [C]{.kbd .red}
H~2~0
29^th^
```

++下划线++
++波浪线++{.wavy}
++着重点++{.dot}
++紫色下划线++{.primary}
++绿色波浪线++{.wavy .success}
++黄色着重点++{.dot .warning}
~~删除线~~
~~红色删除线~~{.danger}
==荧光高亮==
[赤橙黄绿青蓝紫]{.rainbow}
[红色]{.red}
[粉色]{.pink}
[橙色]{.orange}
[黄色]{.yellow}
[绿色]{.green}
[靛青]{.aqua}
[蓝色]{.blue}
[紫色]{.purple}
[灰色]{.grey}
快捷键 [Ctrl]{.kbd} + [C]{.kbd .red}
H~2~0
29^th^

## #隐藏文字￬￬￬￬￬

```html
!!黑幕黑幕黑幕黑幕黑幕黑幕!!： 鼠标滑过显示内容
!!模糊模糊模糊模糊模糊模糊!!{.bulr} ： 选中文字显示内容
```

!!黑幕黑幕黑幕黑幕黑幕黑幕!!： 鼠标滑过显示内容
!!模糊模糊模糊模糊模糊模糊!!{.bulr} ： 选中文字显示内容

## #多媒体￬￬￬￬￬

本功能基于 Hexo Tag 功能，使用 media 标签，目前可选择两种类型，即 audio 和 video 。

```
#音乐￬￬
{% media audio %}
- title: 粤语
  list:
    - https://music.163.com/#/playlist?id=6764091275
{% endmedia %}

#视频￬￬
{% media video %}
- name: "视频1"
  url: https://xxxxxxxxxxxxx.mp4#t=0
{% endmedia %}
```

#音乐￬￬
{% media audio %}

- title: 粤语
  list:
    - https://music.163.com/#/playlist?id=6764091275
  {% endmedia %}

#视频￬￬
{% media video %}
- name: "视频1"
  url: https://yun.2013.eu.org/meooo2071_2024-02-29-17-47-43_1709200063898.mp4#t=0
- name: "视频2"
  url: https://file.icve.com.cn/ssykt/399/343/63D55E22AA430B3C0B5990F5422F1F09.mp4#t=0
  {% endmedia %}
