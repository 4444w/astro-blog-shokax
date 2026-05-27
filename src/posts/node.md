---
title: 安装node npm go
date: 2021/10/8 18:02:00
---


# 手动安装node npm

## 1、下载源码

```bash
cd /usr/local/src/
wget https://npm.taobao.org/mirrors/node/v16.10.0/node-v16.10.0-linux-x64.tar.xz
```

## 2、解压源码

```bash
tar -xvf node-v16.10.0-linux-x64.tar.xz
```

## 3、修改目录名

```bash
mv node-v16.10.0-linux-x64 nodejs
```

## 4、软连接形式安装

```bash
ln -snf /usr/local/src/nodejs/bin/node /usr/local/bin/node
ln -snf /usr/local/src/nodejs/bin/npm /usr/local/bin/npm
```

# #自用Deepin/debian官方源安装

```bash
curl -sL https://deb.nodesource.com/setup_12.x | bash -
```

按照官方的方式执行 `curl -sL https://deb.nodesource.com/setup_12.x | bash -` 后出现错误提示：## Confirming "n/a" is supported...

+curl -sLf -o /dev/null 'https://deb.nodesource.com/node_12.x/dists/n/a/Release'

##Your distribution, identified as "n/a", is not currently supported, please contact NodeSource at https://github.com/nodesource/distributions/issues if you think this is incorrect or would like your distribution to be considered for support

解决方法：

```bash
vim /etc/apt/sources.list.d/nodesource.list
```

#手动输入添加源(想装node14版本的把下面12.x改成14.x就行)

```bash
deb https://deb.nodesource.com/node_12.x buster main
deb-src https://deb.nodesource.com/node_12.x buster main
```

### #安装

```bash
apt update && apt install nodejs
```



# 安装go

```bash
cd /usr/local && wget https://golang.google.cn/dl/go1.17.2.linux-amd64.tar.gz
tar -xvzf go1.17.2.linux-amd64.tar.gz
```

## 设置环境变量

```bash
vi /etc/profile
```

在下面添加下面变量

```bash
export GO111MODULE=on
export GOPROXY=https://goproxy.cn
export GOROOT=/usr/local/go
export GOPATH=/usr/local/go/path
export PATH=$PATH:$GOROOT/bin:$GOPATH/bin
```

##输入后，按“Esc”，再输入":wq",按"Enter"，保存并退出。`

```bash
source /etc/profile
go env
```

\#运行后出现GO配置就可以了

###### #如果编译报错/usr/local/go/path/pkg/mod/github.com/mattn/go-sqlite3@v2.0.3+incompatible/backup.go:14:10: fatal error: stdlib.h: No such file or directory
 #include <stdlib.h>
          ^~~~~~~~~~
compilation terminated.

###### 执行

```bash
apt-get install libsqlite3-dev
```

