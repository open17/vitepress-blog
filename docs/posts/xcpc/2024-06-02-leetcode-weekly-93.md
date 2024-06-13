---
title: VP乐扣周赛93
date: 2024-06-02
tags:
    - leetcode
    - 力扣周赛
---
    
上古场,排名最前的一集

---

## 868. 二进制间距

位运算小技巧

```py
class Solution:
    def binaryGap(self, n: int) -> int:
        idx,ans=inf,0
        while n:
            tmp=int(log2(n&-n))
            idx,ans=tmp,max(ans,tmp-idx)
            n&=(n-1)
        return ans
```

## 869. 重新排序得到 2 的幂

一个比较经典的技巧: 枚举数量比较少的那个

所以 先枚举出2的幂,而不是枚举n的组合即可

```py

"""

先枚举出2的幂,而不是枚举n的组合

"""
class Solution:
    def reorderedPowerOf2(self, n: int) -> bool:
        def getlen(x):
            cnt=0
            while x:
                x//=10
                cnt+=1
            return cnt
        def getcnt(x):
            ans=[0 for _ in range(10)]
            while x:
                ans[int(x%10)]+=1
                x//=10
            return ans
        tol_n=getlen(n)
        cnt_n=getcnt(n)
        # print(cnt_n)
        x=1
        flag=0
        while x<=1e9:
            if getlen(x)==tol_n:
                tmp=getcnt(x)
                for i,j in zip(tmp,cnt_n):
                    if i!=j:
                        break
                else:
                    flag=1
                    break
            if getlen(x)>tol_n:
                break
            x*=2
        return bool(flag)
```

## 870. 优势洗牌

一开始看错题看成两者和最小(排序不等式结论题)

所以代码是在原本看错的上直接改的

田忌赛马贪心即可

```py

class Solution:
    def advantageCount(self, nums1: List[int], nums2: List[int]) -> List[int]:
        nums1.sort()
        a=sorted([(v,idx) for idx,v in enumerate(nums2)])
        ans=[0 for _ in range(len(a))]
        jump=[]
        p=jump_p=0
        for idx in range(len(a)):
            v,i=a[idx]
            while p<len(a) and nums1[p]<=v:
                jump.append(p)
                p+=1
            if p<len(a): 
                ans[i]=nums1[p]
                p+=1
            else: 
                ans[i]=nums1[jump[jump_p]]
                jump_p+=1
        return ans
```

## 871. 最低加油次数

经典两种决策,单后效性

反悔贪心即可

```py

class Solution:
    def minRefuelStops(self, target: int, startFuel: int, stations: List[List[int]]) -> int:
        h=[]
        cnt=lst=0
        stations.append([target,0])
        stations.sort()
        for pos,f in stations:
            startFuel-=pos-lst
            lst=pos
            while startFuel<0 and len(h)>0:
                startFuel-=heappop(h)
                cnt+=1
            if startFuel<0:
                return -1
            if pos==target:
                break
            heappush(h,-f)
        return cnt
```