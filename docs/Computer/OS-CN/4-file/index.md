# 文件系统

## 逻辑结构
只针对有结构文件(如excel)
> 无结构文件(类似txt)自然没有这些

- 类型(文件中的记录逻辑上)
  - 顺序文件
  - 索引文件
  - 索引顺序文件
- 结构(记录顺序与关键词是否有关)
  - 串结构
  - 链式结构
- 存储(物理地址角度)
  - 顺序存储
  - 链式存储

## 文件目录

无环图

## 物理分配

- 文件块
- 磁盘块

- 连续分配
- 链接分配
  - 隐式链接
  - 显式链接(FAT表,支持随机访问)
- 索引分配
  - MLE解决方案
    - 链接个新的
    - 多层索引嵌套
    - 混合

## 存储空间

目标层与文件区

- 空闲表法: 空闲头+长度
- 空闲链表法: 盘块/盘区(相邻视为一个区)为单位链表
- 位示图法: 行列,0空1非空
- 成组链接法




