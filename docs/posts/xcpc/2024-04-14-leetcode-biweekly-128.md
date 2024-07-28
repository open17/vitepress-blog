---
date: 2024-04-14
title: VP力扣双周赛128
tags:
    - 力扣周赛
    - 最短路
    - 单调栈
    - leetcode
---

比较基础的一场,考察知识点: 最短路,单调栈

---

## 3110. 字符串的分数

模拟即可

```cpp
class Solution {
public:
    int scoreOfString(string s) {
        int ans=0;
        for(int i=1;i<s.size();i++){
            ans+=abs(s[i]-s[i-1]);
        }
        return ans;
    }
};
```

## 3111. 覆盖所有点的最少矩形数目

不难看出,点的y对答案没有贡献,所以我们可以直接压缩为一维,然后排序贪心

```cpp
class Solution {
public:
    int minRectanglesToCoverPoints(vector<vector<int>>& points, int w) {
        vector<int>px;
        for(auto p:points){
            px.push_back(p[0]);
        }
        sort(px.begin(),px.end());
        int base=px[0];
        int ans=1;
        for(auto p:px){
            if (w+base<p){
                ans+=1;
                base=p;
            }
        }
        return ans;
    }
};
```

## 3112. 访问消失节点的最少时间

魔改迪杰斯特拉即可

```cpp
class Solution {
public:
    vector<int> minimumTime(int n, vector<vector<int>>& edges, vector<int>& disappear) {
        int src = 0;
        vector<vector<pair<int, int>>> graph(n);
        for (const auto& edge : edges) {
            int u = edge[0];
            int v = edge[1];
            int w = edge[2];
            graph[u].push_back({v, w});
            graph[v].push_back({u, w});
        }
        const int inf = 0x3f3f3f;
        vector<int> dist(n, inf);
        dist[src] = 0;
        vector<int> visited(n, 0);
        priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> heap;
        heap.push({0, src});
        while (!heap.empty()) {
            auto [d, u] = heap.top();
            heap.pop();
            if (visited[u] || d >= disappear[u]) {
                continue;
            }
            visited[u] = 1;
            for (const auto& [v, w] : graph[u]) {
                dist[v] = min(dist[v], dist[u] + w);
                if (dist[v] >= disappear[v]) {
                    dist[v] = inf;
                }
                heap.push({dist[v], v});
            }
        }
        vector<int> result;
        for (int i : dist) {
            result.push_back(i != inf ? i : -1);
        }
        return result;
    }
};
```

## 3113. 边界元素是最大值的子数组数目

手玩一下,可以看出答案的单调性  
单调栈维护即可

```cpp
class Solution {
public:
    long long numberOfSubarrays(vector<int>& nums) {
        long long ans = 0;
        stack<int> st;
        unordered_map<int, int> d;
        unordered_map<int, long long> cnt;
        //注意这里0x3f3f3f会被卡掉(不够大)
        nums.push_back(INT_MAX);
        for (int i : nums) {
            while (!st.empty() && st.top() < i) {
                int p = st.top();
                st.pop();
                ans += cnt[p];
                d[p] = 0;
                cnt[p] = 0;
            }
            if (!(!st.empty() && st.top() == i)) {
                st.push(i);
            }
            d[i]++;
            cnt[i] += d[i];
        }
        return ans;
    }
};
```