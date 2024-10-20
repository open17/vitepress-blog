# 内存分配

## 连续分配

即用户进程需要在一个连续的内存空间

- 外部碎片(进程外不可用的内存)
- 内部碎片(进程分配的过多的内存)

### 单一连续分配

内存只有一道用户程序

### 固定分区分配

分区大小可以相等,也可以不相等

分区说明表

### 动态分区分配

表/链需要什么

动态分区算法:

- 首次适应算法（First Fit）: 表地址从小到大,第一个可以就分配
- 邻近时应算法（Next Fit）: 在首次的基础上不从头找(循环链表之类的)
- 最佳适应算法（Best Fit）: 表按空间大小排序,用最小的
- 最佳适应算法（Best Fit）: 用最大的

![](https://cdn.jsdelivr.net/gh/open17/Pic/img/202409172300364.png)

## 非连续分配

> 对于采用非连续存放的分页技术，操作系统应该如何实现地址的转换呢？
> - 要算出逻辑地址对应的页号
> - 要知道该页号对应页面在内存中的起始地址
> - 要算出逻辑地址在该页面内的偏移量
> - 物理地址 = 页面起始地址 + 页内偏移量
>


## 逻辑地址与偏移量

显然逻辑是和常见的数据分页相同的:

页号=逻辑地址/页面长度
偏移量=逻辑地址%页面长度


可以使用二进制地址表示法:

前部分表示页面长度,后部分表示偏移量

## 页表

我们可以通过页表得到页面起始地址


页表分为页号与块号,块号指向对应内存块的起始地址

页号可以是隐含的,因为我们只需要页表的起始地址和页表项的长度即可算出对应的页号对应的页表项的存放地址

## 基本地址变换机构

按照上面的流程计算即可

## 具有快表的地址变换机构

很多程序可能重复访问同样的内存地址或者相近的内存地址(许多数据结构内存相邻)

可以用快表缓存访问过的页表项

## 两级页表

页表嵌套页表

注意各个页表大小不能超过一个页面大小

## 程序分段

与分页相似,不同的是分段没有指定的统一大小,因此段表还要加上一个段长维度

分段比分页更容易实现信息的共享与保护

## 段页式存储管理方式

段号+页号+页号偏移量

