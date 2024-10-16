# 虚拟性

## 覆盖技术

> 现在不用

- 程序分段,一个固定区,多个覆盖区
- 必要的在固定区常驻内存
- 覆盖区只有需要的时候才调入内存

## 交换技术

内存紧张时将一些进程丢到外存(磁盘)对换区,具体可以参考前面的调度章节

要注意这与覆盖不同,覆盖是对于单一程序而言的,交换显然是对于程序之间的

:::tip 外存
外存的对换区为连续分配,IO速度比正常的文件区快
:::

## 虚拟内存

- 局部性原理

最大容量由CPU寻址范围所决定,实际容量由内外存容量和与最大容量的最小值决定

- 多次性：无需在作业运行时一次性装入内存，而是允许被多次调入内存
- 对换性：在作业运行时无需常驻内存，而是允许在作业运行过程中，将作业换入、换出
- 虚拟性：在逻辑上扩充了内存的容量，是用户看到的内存容量远大于实际的容量

虚拟内存会在需要的时候请求前面讲述过的内存管理(分页,分段,段页)

- 请求调页：在程序执行过程中，当所访问的信息不在内存时，由操作系统负责将所需信息从外存调入内存，然后继续执行程序。
- 页面置换：若内存空间不够时，由操作系统负责将内存中暂时用不到的信息换出到外

![](https://cdn.jsdelivr.net/gh/open17/Pic/img/202409181330157.png)

缺页中断: 要访问的页面不存在时,从内存空闲块调入/置换不用的表

页面置换算法:

- 最佳置换(OPT): 后面根本不用的淘汰,实际上不可能实现
- 先进先出(FIFO): 最早进入的淘汰
- 最近最久未使用置换算法(LRU): 硬件需求高
- 时钟置换算法(CLOCK/NRU): 循环标记

页面分配策略:

- 固定分配/可变分配
- 局部替换/全局替换

固定分配只能局部替换

局部替换只能替换自身的进程的空间

其他概念:

- 驻留集
- 工作集
- 抖动




