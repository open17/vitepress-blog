---
title: VP乐扣周赛250
date: 2024-06-07
tags:
    - leetcode
    - 力扣周赛
---

T4待补...

---

## 1935. 可以输入的最大单词数

模拟

```py
class Solution:
    def canBeTypedWords(self, text: str, brokenLetters: str) -> int:
        a=text.split()
        s=set()
        for i in brokenLetters:
            s.add(i)
        cnt=0
        for i in a:
            for j in i:
                if j in s:
                    break
            else:
                cnt+=1
        return cnt
```


## 1936. 新增的最少台阶数

模拟,可以看出要补的台阶数为$\sum_i\lfloor\frac{a_i-a_{i-1}-1}{dist}\rfloor$

```cpp
class Solution {
public:
    int addRungs(vector<int>& rungs, int dist) {
        int cnt=0;
        int s=0;
        for(int i=0;i<rungs.size();i++){
            int d=rungs[i]-s;
            s=rungs[i];
            cnt+=max((d-1)/dist,0);
        }
        return cnt;
    }
};
```
## 1937. 扣分后的最大得分

可以写出朴素DP的转移方程:

$$dp_{i,j}=\max\{dp_{i-1,k}-|j-k|, \forall k \in (0,m)\}$$


:::details 朴素DP代码
其实还可以压一维
```cpp
class Solution {
public:
    long long maxPoints(vector<vector<int>>& points) {
        // dp[i][j]=max(dp[i][j],dp[i-1][j+d]-abs(d))
        int n=points.size();
        int m=points[0].size();
        long long dp[n][m];
        memset(dp,0,sizeof(dp));
        long long ans=-1;
        for(int i=0;i<n;i++){
            for(int j=0;j<m;j++){
                for(int k=0;k<m;k++){
                    if(i==0)break;
                    dp[i][j]=max(dp[i][j],dp[i-1][k]-abs(k-j));
                }
                dp[i][j]+=points[i][j];
                if(i==n-1){ans=max(ans,dp[i][j]);}
            }
        }
        return ans;
    }
};
```
:::
但朴素DP的时间复杂度为$O(nm^2)$,无法通过此题,如何优化呢?

注意到对于同一层的j,每次都需要枚举k吗?

观察到没加上本身分数的时候,从上一层左右转移过来等价于对于同一层可以视作从左/右转移+距离

而我们可以动态维护左/右的转移最值

此时则有:

```cpp
class Solution {
public:
    long long maxPoints(vector<vector<int>>& points) {
        // dp[i][j]=max(dp[i][j],dp[i-1][j+d]-abs(d))
        int n=points.size();
        int m=points[0].size();
        long long dp[n][m];
        memset(dp,0,sizeof(dp));
        long long ans=-1;
        for(int i=0;i<n;i++){
            long long lm=0,rm=0;
            for(int j=0;j<m;j++){
                if(i==0)break;
                lm=max(dp[i-1][j],lm-1);
                dp[i][j]=max(dp[i][j],lm);
            }
            for(int j=m-1;j>=0;j--){
                if(i==0)break;
                rm=max(dp[i-1][j],rm-1);
                dp[i][j]=max(dp[i][j],rm);
            }
            for(int j=0;j<m;j++){
                dp[i][j]+=points[i][j];
                if(i==n-1){ans=max(ans,dp[i][j]);}
            }
        }
        return ans;
    }
};
```
