---
title: 安装xdd-plus机器人
date: 2021-10-13
---

安装GO就不说了

[点击直接看](https://h4w.gitee.io/2021/10/08/%E5%AE%89%E8%A3%85node%20npm%20go/)

# 1:拉xdd-plus的库

```bash
cd ~ && git clone https://ghproxy.com/github.com/764763903a/xdd-plus.git
```

# 2:编译xdd-plus

```bash
cd /root/xdd-plus && go build
```

# 3:编译完成后运行一次

```bash
./xdd
```

#等一会它生成配置文件，用ctrl+c杀掉进程

# 4:修改配置文件

#在conf/config.yaml

```bash
mode: #模式 balance(均衡模式)、parallel(平行模式) 我一般留空
containers: #容器，可配置多个
  - address: http://192.168.31.47:5700 #青龙2.2、青龙2.8、v1v2v3v4v5访问地址
    username: admin #用户名
    password: admin #密码
    cid: jOABCDDDD-G2 #Client ID 青龙2.9开启二级验证后复制过来
    secret: dsdfsdfsdfsdfsf #Client Secret 青龙2.9开启二级验证后复制过来
    weigth: 3 #权重 balance模式下权重越高分得的ck越多，默认1
    mode: balance #单独对容器进行模式设置
    limit: #限制容器ck数目
  - address: http://192.168.31.48:5700 #青龙2.2、青龙2.8、v1v2v3v4v5访问地址
    username: admin #用户名
    password: admin #密码
    cid: jOABCDDDD-G2 #Client ID 青龙2.9开启二级验证后复制过来
    secret: dsdfsdfsdfsdfsf #Client Secret 青龙2.9开启二级验证后复制过来
    weigth: 3 #权重 balance模式下权重越高分得的ck越多，默认1
    mode: balance #单独对容器进行模式设置
    limit: #限制容器ck数目
  - address: http://192.168.31.47:5701 #青龙2.2、青龙2.8、v1v2v3v4v5访问地址
    username: admin #用户名
    password: admin #密码
    cid: jOABCDDDD-G2 #Client ID 青龙2.9开启二级验证后复制过来
    secret: dsdfsdfsdfsdfsf #Client Secret 青龙2.9开启二级验证后复制过来
    weigth: 3 #权重 balance模式下权重越高分得的ck越多，默认1
    mode: parallel #单独对容器进行模式设置,平行模式专跑88,锦鲤.开卡之类
    limit: #限制容器ck数目
AtTime: 11 #填写1-12之间的数 填错自负默认为10 10点容易出现高峰超时。
IsHelp: false #是否助力填写true或者false  false
IsOldV4: #填写true或者false  false是否新版或者旧版V4
Later: #延时防止黑IP自己设置 默认60 不怕黑的改为1即可 单位是秒
Wskey: false # 填空默认禁用wskey转换 需要的填true
IsAddFriend: true #是否自动同意加好友填写true或者false
Lim: 2 #填写1-N 代表限制次数
tytnum: 9 #填写1-N 代表推一推需要的互助值，默认为8
theme: #自定义二维码页面，支持本地、网络路径
static: ./static #静态文件 便于自定义二维码页面时，引入css、js等文件
master: password #管理员账户pin，有多个用'&'拼接
database: #数据库位置，默认./.jdc.db
qywx_key: #企业微信推送key
daily_push: #定时任务
resident: #均衡模式下所有容器共同的账号pin，有多个用'&'拼接。
#自定义ua
user_agent: Mozilla/5.0 (iPhone; CPU iPhone OS 13_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 SP-engine/2.14.0 main%2F1.0 baiduboxapp/11.18.0.16 (Baidu; P2 13.3.1) NABar/0.0
#telegram_bot_token: #telegram bot token
#telegram_user_id: #telegrame user id
qquid: 管理员QQ号 #接收通知的qq号
qqgid: 群号 #监听的群
qbot_public_mode: true #qq机器人群聊模式，默认false私聊模式
default_priority: 3 #新用户默认优先级
no_ghproxy: true #更新资源是否不使用代理 默认false
#daily_asset_push_cron: 5 21 * * * #日常资产推送时间
```

#如果只有一台机子可以把11～26行删掉

#如果是V4旧版的话：IsOldV4: #填写false

#青龙2.9二级验证

青龙管理面板-系统设置-应用设置-添加应用-名称随意-权限我是全打勾-然后自行复制Client ID-Client Secret填上

![1.png](https://h4w.gitee.io/zl/img/1.png)

# 5:启动命令

./xdd   

./xdd -d #静默运行

#如果你装了pm2的话可以

pm2 start xdd

