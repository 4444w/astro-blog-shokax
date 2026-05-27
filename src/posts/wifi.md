---
title: 随身wifi刷debian
date: 2022-10-12 21:04:37
tags:
---

# 刷debian
[点击下载刷机包](https://www.123pan.com/s/XwVDVv-WICn3)
（该版本默认是随身WIFI模式，开机后自动开启热点，名称：4G_UFI_123456，密码：12345678，并且会开机USB网络共享）

下载刷机包解压
随身wifi进入fastboot模式
双击运行flash.bat刷机

# 安装RNDIS驱动
没有RNDIS不能用本地usb共享网络连接
1、右键Android ADB Interface，选择属性；
2、点击驱动程序选项卡，更新驱动程序；
3、浏览我的电脑以查找驱动程序；
4、让我从计算机上的可用驱动程序列表中选择；
5、找到“网络适配器”；
6、左侧厂商找到“Microsoft”，右侧找到“基于远程NDIS的Internet共享设备”；
7、在跳出的警告对话框中选择“是”。
完成就能本地连接

# debian连接wifi
ssh登录debian
192.168.68.1端口22
用户名：root，密码：1
登陆后，执行nmtui连接wifi
```bash
nmtui
```
编辑连接-选中wifi然后移到右边删除-返回
启动连接-找到自己家里的wifi回车输入密码连接

# 安装docker
```bash
true > /etc/apt/sources.list.d/mobian.list
sudo apt-get update
apt-get install curl wget
curl -fsSL https://get.docker.com | bash -s docker --mirror Aliyun
systemctl enable docker
systemctl start docker 
```
#如果提示不再含有Release文件，把/ete/apt/sources.list.d文件夹里对应错误的文件删除即可

# 扩容U盘
## 切换usb功能（usb共享网络会失效，重启恢复）
```bash
echo host > /sys/kernel/debug/usb/ci_hdrc.0/role
```
## 挂载U盘
#查看hub
lsblk
#查看u盘挂载
lsblk
```bash
#创建挂载目录
mkdir -p /sd
#挂载分区
mount /dev/sda1 /sd
```
## 创建swap虚拟内存
```bash
#创建虚拟内存2G，按需自己修改
fallocate -l 2G /sd/swapfile
#改权限
chmod 600 /sd/swapfile
#启动虚拟内存
mkswap /sd/swapfile
swapon /sd/swapfile
```
##删除swap
#停用
swapoff -v /sd/swapfile
#删除
rm /sd/swapfile
## 设置docker镜像储存路径为U盘
```bash
#关闭开机启动docker
systemctl disable docker
#停止docker
systemctl stop docker
#移动docker目录到U盘
mv /var/lib/docker /sd/docker
#创建软链接
ln -sf /sd/docker /var/lib/docker
```
## /etc/rc.local开机自启
#自动挂载u盘，swap虚拟内存，关闭随身WiFi的led灯光，启动docker
```bash
#!/bin/sh -e
#
# 开机自动执行(命令前面加#号关闭执行)
sleep 5
echo host > /sys/kernel/debug/usb/ci_hdrc.0/role
#关闭LED灯光
echo none > /sys/class/leds/blue:wifi/trigger
echo 0 > /sys/class/leds/blue:wifi/brightness
echo none > /sys/class/leds/red:os/trigger
echo 0 > /sys/class/leds/red:os/brightness
sleep 5
mount /dev/sda1 /sd
swapon /sd/swapfile
sleep 5
systemctl start docker
exit 0

```
## update-rc.d自启动
#/etc/init.d/目录下创建执行脚本
#cd /etc/init.d ,运行开机自启sudo update-rc.d name defaults
```bash
#!/bin/bash

### BEGIN INIT INFO
# Provides:     test
# Required-Start:  $remote_fs $syslog
# Required-Stop:   $remote_fs $syslog
# Default-Start:  2 3 4 5
# Default-Stop:   0 1 6
# Short-Description: start test
# Description:    start test
### END INIT INFO
sleep 5
echo host > /sys/kernel/debug/usb/ci_hdrc.0/role
#关闭LED
echo none > /sys/class/leds/blue:wifi/trigger
echo 0 > /sys/class/leds/blue:wifi/brightness
echo none > /sys/class/leds/red:os/trigger
echo 0 > /sys/class/leds/red:os/brightness
sleep 5
mount /dev/sda1 /sd
swapon /sd/swapfile
sleep 5
systemctl start docker
```
## 查看温度命令
```bash
cat /sys/class/thermal/thermal_zone0/temp
```
