---
title: 安装青龙
date: 2021-10-13
---

## 安装 Docker（三选一）

## 使用官方源安装（国内直接访问较慢）：

```bash
curl -fsSL https://get.docker.com | bash
```

## 使用阿里源安装（推荐/好像国内自带加速）：

```bash
curl -fsSL https://get.docker.com | bash -s docker --mirror Aliyun
```

## 使用中国区 Azure 源安装：

```bash
curl -fsSL https://get.docker.com | bash -s docker --mirror AzureChinaCloud
```

## 启动Docker服务

## 设置开机自启：

```bash
systemctl enable docker
```

## 启动 Docker：

```bash
systemctl start docker
```

# 安装青龙

```bash
docker run -dit \
  --name QL \
  --hostname QL \
  --restart always \
  -p 5700:5700 \
  -v /root/QL/config:/ql/config \
  -v /root/QL/log:/ql/log \
  -v /root/QL/db:/ql/db \
  -v /root/QL/scripts:/ql/scripts \
  -v /root/QL/jbot:/ql/jbot \
  -v /root/QL/raw:/ql/raw \
  -v /root/QL/repo:/ql/repo \
  whyour/qinglong:latest
```

### # -v /root=映射目录

## 进入青龙容器命令

```bash
docker exec -it QL bash
```
## 关闭开机自启
```bash
systemctl disable docker
```
## 删除docker
```bash
sudo apt-get purge docker-ce docker-ce-cli containerd.io docker-compose-plugin
sudo rm -rf /var/lib/docker
sudo rm -rf /var/lib/containerd
```
