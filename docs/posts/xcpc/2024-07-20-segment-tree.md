---
title: 线段树入门
date: 2024-07-20
tags:
    - 线段树
---

线段树是一种利用分支思想维护区间信息的二叉树,为了维护区间修改和区间查询的平衡,我们会分治的选择一些特殊的区间进行信息维护

---

如果每次暴力维护所有的区间的话,信息可能会退化到$O(n)$ ,我们可以使用lazy标记优化区间更新过程,这样可以达到$logn(n)$ [^1]

如果你理解了这些,事实上我们可以用线段树维护任何可合并的信息,包括但不限于加减乘除反转等...

:::info 说明

题目选自[练习题单](https://www.luogu.com.cn/training/206)

目前尚未更新完毕...

:::


## 入门


先初始化数组,节点要开原数组大小的四倍  

每个人的线段树代码有不同的码风,我喜欢把标记数组记作todo

`_do`用于打上标记,`_down`用于下传标记`,_up`用于维护树的信息上传

一般只需要修改这三个函数以及查询函数即可


```cpp
int val[N];
int node[N << 2], todo[N << 2];

```

首先我们先划分出要维护的区间与节点,并初始化

```cpp
void build(int p, int l, int r)
{
    if (l == r)
    {
        node[p] = val[l];
        return;
    }
    int mid = (l + r) >> 1;
    build(p * 2, l, mid);
    build(p * 2 + 1, mid + 1, r);
    _up(p);
}
```

其中`_up`用于统计子节点的信息上传,以最简单的区间和为例,那么就是

```cpp
void _up(int p)
{
    node[p] = node[p * 2] + node[p * 2 + 1];
}
```

然后我们需要更新函数

如果当前节点表示的区间完全在要更新的区间内的时候,我们便无需继续更新子节点,直接更新节点值并打上懒标记

否则我们继续分治查询,分治的时候因为修改的不是完整的区间,所以必须把区间的懒标记下传并处理,然后分治,最后再上传更新父节点信息

```cpp
void update(int p, int l, int r, int L, int R, int v)
{
    if (L <= l and r <= R)
    {
        _do(p, r - l + 1, v);
        return;
    }
    int mid = (l + r) >> 1;
    _down(p, l, r);
    if (mid >= L)
        update(p * 2, l, mid, L, R, v);
    if (mid < R)
        update(p * 2 + 1, mid + 1, r, L, R, v);
    _up(p);
}
```
其中`_do`用于打上标记,`_down`用于下传标记

在这里**我们会对有todo的区间节点依然加上todo影响的值,这样查询与上传的时候就不用额外处理标记**

如何打上标记呢?以最简单的区间加为例

```cpp
void _do(int p, int size, int v)
{
    node[p] += v * size;
    todo[p] += v;
}
```

而下传标记便是对子节点打上标记,然后清除本身的标记

```cpp
void _down(int p, int l, int r)
{
    if (l >= r)
        return;
    int size = r - l + 1;
    _do(p * 2, size - size / 2, todo[p]);
    _do(p * 2 + 1, size / 2, todo[p]);
    todo[p] = 0;
}
```

这样就完成了区间更新

同样的区间查询也是一样的,分治查询即可

这里以区间求和为例

```cpp
i64 query(int p, int l, int r, int L, int R)
{
    if (L <= l and r <= R)
    {
        return node[p];
    }
    _down(p, l, r);
    i64 ans = 0;
    int mid = (l + r) >> 1;
    if (mid >= L)
        ans += query(p * 2, l, mid, L, R);
    if (mid < R)
        ans += query(p * 2 + 1, mid + 1, r, L, R);
    return ans;
}
```

一般可以把上面的代码当做模板,然后在此基础上修改

:::details 完整代码
```cpp
int val[N];
int node[N << 2], todo[N << 2];

void _do(int p, int size, int v)
{
    node[p] += v * size;
    todo[p] += v;
}

void _down(int p, int l, int r)
{
    if (l >= r)
        return;
    int size = r - l + 1;
    _do(p * 2, size - size / 2, todo[p]);
    _do(p * 2 + 1, size / 2, todo[p]);
    todo[p] = 0;
}

void _up(int p)
{
    node[p] = node[p * 2] + node[p * 2 + 1];
}

void update(int p, int l, int r, int L, int R, int v)
{
    if (L <= l and r <= R)
    {
        _do(p, r - l + 1, v);
        return;
    }
    int mid = (l + r) >> 1;
    _down(p, l, r);
    if (mid >= L)
        update(p * 2, l, mid, L, R, v);
    if (mid < R)
        update(p * 2 + 1, mid + 1, r, L, R, v);
    _up(p);
}

i64 query(int p, int l, int r, int L, int R)
{
    if (L <= l and r <= R)
    {
        return node[p];
    }
    _down(p, l, r);
    i64 ans = 0;
    int mid = (l + r) >> 1;
    if (mid >= L)
        ans += query(p * 2, l, mid, L, R);
    if (mid < R)
        ans += query(p * 2 + 1, mid + 1, r, L, R);
    return ans;
}
```
:::

## P3372 线段树1

如题，已知一个数列，你需要进行下面两种操作：

1. 将某区间每一个数加上 $k$。
2. 求出某区间每一个数的和。


### 思路

**用刚刚的模板就可以直接A掉**

## P3870 开关

现有 $n$ 盏灯排成一排，从左到右依次编号为：$1$，$2$，……，$n$。然后依次执行 $m$ 项操作。

操作分为两种：

1. 指定一个区间 $[a,b]$，然后改变编号在这个区间内的灯的状态（把开着的灯关上，关着的灯打开）；
2. 指定一个区间 $[a,b]$，要求你输出这个区间内有多少盏灯是打开的。

### 思路

设开为1关为0,统计区间多少开则为求区间和,取反开关则为`区间和=总长度-区间和`

```cpp
void _do(int p, int size)
{
    node[p]=size-node[p];
    todo[p]^=1;
}
```


## P1438 无聊的数列

维护一个数列 $a_i$，支持两种操作：

 - `1 l r K D`：给出一个长度等于 $r-l+1$ 的等差数列，首项为 $K$，公差为 $D$，并将它对应加到 $[l,r]$ 范围中的每一个数上。即：令 $a_l=a_l+K,a_{l+1}=a_{l+1}+K+D\ldots a_r=a_r+K+(r-l) \times D$。

 - `2 p`：询问序列的第 $p$ 个数的值 $a_p$。

### 思路

我们发现每个点加的值不一样,无法直接用线段树维护

但是公差是一样的,如何从这里入手呢?

维护数列的差分数组不就可以了

注意l,r可能相等要特判一下
```cpp
update(1,1,n,l,l,k);
if(l+1<=r)update(1,1,n,l+1,r,d);
if(r+1<=n)update(1,1,n,r+1,r+1,-(k+(r-l)*d));
```
其实我们还可以发现维护差分的差分就可以转为单点修改,然后区间查询,然后可以用树状数组维护



## P1253 扶苏的问题

给定一个长度为 $n$ 的序列 $a$，要求支持如下三个操作：

1. 给定区间 $[l, r]$，将区间内每个数都修改为 $x$。
2. 给定区间 $[l, r]$，将区间内每个数都加上 $x$。
3. 给定区间 $[l, r]$，求区间内的最大值。

### 思路

显然我们需要维护多个标记

对于多个lazy的时候,我们需要注意两个点:

- 规定好标记处理的先后顺序
- 尽量利用标记的相互转化,而不是直接下传

显然如果后有区间修改,前面的区间加本身就没有意义可以直接删去

反过来如果先有区间修改的时候后有区间加,我们可以把修改加上要加的值,然后清空区间加

```cpp
void _do2(int p, int v)
{
    node[p] = v;
    todo2[p][0] = v;
    todo2[p][1] = 1;
    todo[p] = 0;
}

void _do(int p, int size, int v)
{
    node[p] += v;
    if (todo2[p][1])
    {
        todo2[p][0] += v;
    }
    else
    {
        todo[p] += v;
    }
}

void _down(int p, int l, int r)
{
    if (l >= r)
        return;
    int size = r - l + 1;
    if (todo2[p][1])
    {
        _do2(p * 2, todo2[p][0]);
        _do2(p * 2 + 1, todo2[p][0]);
        todo2[p][1] = 0;
    }
    else
    {
        _do(p * 2, size - size / 2, todo[p]);
        _do(p * 2 + 1, size / 2, todo[p]);
        todo[p] = 0;
    }
}
```




[^1]: 证明的话可以从LCA角度然后缩点思考





<div class="border-t-2 border-t-gray-200 dark:border-t-gray-500"></div>