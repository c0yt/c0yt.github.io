---
date: 2025-4-12 21:54:00
icon: study
sidebar: false
category:
  - study
tag:
  - Linux
  - Study
  - NFS
  - 运维
---
# NFS配置

### 一、安装NFS服务
#### 检测安装情况
```bash
rpm -qa | grep nfs-utils
rpm -qa | grep rpcbind
```
#### 未安装情况
```bash
yum -y install nfs-utils rpcbind
```
### 二、服务端配置
#### 创建共享目录
```bash
mkdir -p /data/
```
#### 编辑/etc/exports文件
```bash
vim /etc/exports
```
填写以下内容
```bash
/data/  192.168.100.1/24(rw)
# 限制192.168.100.1/24网段可访问，rw为读写权限
```
#### 重新加载让配置生效
```
exportfs -r
```
#### 启动rpcbind服务
```bash
systemctl enable rpcbind
systemctl start rpcbind
```
#### 启动nfs服务
```bash
systemctl enable nfs
systemctl start nfs
```
#### 查看 RPC 服务的注册状况
```bash
[root@study sky]# rpcinfo -p
   program vers proto   port  service
    100000    4   tcp    111  portmapper
    100000    3   tcp    111  portmapper
    100000    2   tcp    111  portmapper
    100000    4   udp    111  portmapper
    100000    3   udp    111  portmapper
    100000    2   udp    111  portmapper
    100024    1   udp  50680  status
    100024    1   tcp  59650  status
    100005    1   udp  20048  mountd
    100005    1   tcp  20048  mountd
    100005    2   udp  20048  mountd
    100005    2   tcp  20048  mountd
    100005    3   udp  20048  mountd
    100005    3   tcp  20048  mountd
    100003    3   tcp   2049  nfs
    100003    4   tcp   2049  nfs
    100227    3   tcp   2049  nfs_acl
    100003    3   udp   2049  nfs
    100003    4   udp   2049  nfs
    100227    3   udp   2049  nfs_acl
    100021    1   udp  48973  nlockmgr
    100021    3   udp  48973  nlockmgr
    100021    4   udp  48973  nlockmgr
    100021    1   tcp  33609  nlockmgr
    100021    3   tcp  33609  nlockmgr
    100021    4   tcp  33609  nlockmgr
```
#### 检查服务端共享信息
```bash
[root@study data]# showmount -e localhost
Export list for localhost:
/data 192.168.100.1/24
```
### 三、客户端配置
#### 安装NFS
```bash
yum -y install nfs-utils
```
#### 创建挂载目录
```bash
mkdir -p /data/
```
#### 挂载目录到本机/data/目录
```bash
mount -t nfs 192.168.100.1:/data/ /data/ -o proto=tcp -o nolock
```
#### 查看挂载结果
```bash
[root@study /]# df -h
Filesystem             Size  Used Avail Use% Mounted on
devtmpfs               471M     0  471M   0% /dev
tmpfs                  487M     0  487M   0% /dev/shm
tmpfs                  487M   15M  472M   4% /run
tmpfs                  487M     0  487M   0% /sys/fs/cgroup
/dev/sda3               27G  5.6G   22G  21% /
/dev/sda1              297M  213M   85M  72% /boot
tmpfs                   98M   28K   98M   1% /run/user/1000
192.168.100.1:/data   27G  5.6G   22G  21% /data
```
至此，NFS配置结束，如有需要，可配置目录权限
### 四、如何取消挂载
```bash
[root@study /]# umount /data/
[root@study /]# df -h
Filesystem      Size  Used Avail Use% Mounted on
devtmpfs        471M     0  471M   0% /dev
tmpfs           487M     0  487M   0% /dev/shm
tmpfs           487M   15M  472M   4% /run
tmpfs           487M     0  487M   0% /sys/fs/cgroup
/dev/sda3        27G  5.6G   22G  21% /
/dev/sda1       297M  213M   85M  72% /boot
tmpfs            98M   32K   98M   1% /run/user/1000
```

