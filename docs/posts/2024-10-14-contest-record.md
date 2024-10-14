---
title: 第二届XXX程序设计竞赛-高年级组&外校
date: 2024-10-14
tags:
    - 算法
    - 比赛
    - 设计模式
img: https://cdn.jsdelivr.net/gh/open17/Pic/img/202402082335721.jpg
---

不算题解的题解,顺序按照个人的解题顺序来

---

## A 邮箱

签到,按题意模拟即可

代码可能写的有点烂XD,刚开始太紧张了,而且好久(半个月左右)没有训练了

做完这题没看榜,但是看A题通过数已经排到十几了

:::details 参考代码
```cpp
signed main(){
    string s;
    cin>>s;
    int n=s.size();
    int p=-1;
    string a;
    for(int i=0;i<n;i++){
        if(s[i]=='('){
            while(i<n&&s[i]!=')'){
                i++;
            }
            p=i+1;
            a+='@';
            break;
        }
        a+=s[i];
    }
    for(int i=p;i<n;i++){
        a+=s[i];
    }
    print(a);
    return 0;
}
```
:::

## D 爬虫

签到,按要求统计出现次数然后排序即可

不少人可能wa在同样出现次数排序,这个点题目有一点点模糊(但是我猜出题组应该没写SPJ,所以按照样例输出排了个序)

写的时候一直在等第一题的气球,感觉赛场已经发了不少气球了,特别是正前面坐着wr,好像已经发了3到4个气球了,太强了,压力很大

:::details 参考代码
```cpp
signed main(){
    string s;
    cin>>s;
    map<char,int> mp;
    for(auto c:s){
        if(c>='a'&&c<='z'){
            c=(char)(c+('A'-'a'));
        }
        if(c>='A'&&c<='Z'){
            mp[c]++;
        }
    }
    vector<pair<int,int>> a;
    for(auto p:mp){
        a.push_back({p.second,'A'-p.first});
    }
    sort(all(a));
    for(int i=a.size()-1;i>=0;i--){
        auto p=a[i];
        print((char)('A'-p.second),p.first);
    }
    return 0;
}
```
:::

## B 黄金矿工

二分+前缀和

个人感觉比较典,而且预选赛似乎出过解法差不多的题(当然那题可以O(n)滑窗)

写这题的时候有点紧张,一眼的东西卡了好几下,有点难受(好久没写代码了真的不行)

做完这几题后,剩下的题只有一到两个人通过,压力稍微小一点


:::details 参考代码
```cpp
signed main(){
    int n=read();
    vector<int> x(n);
    vector<int> p(n);
    for(int i=0;i<n;i++){
        x[i]=read();
    }
    for(int i=0;i<n;i++){
        p[i]=read();
    }
    vector<int> a(n+1);
    for(int i=1;i<=n;i++){
        a[i]=a[i-1]+p[i-1];
    }
    int q=read();
    for(int i=0;i<q;i++){
        int l=read(),r=read();
        int ldx=lower_bound(all(x),l)-x.begin();
        int rdx=lower_bound(all(x),r+1)-x.begin()-1;
        if(ldx>rdx){
            print(0);
            continue;
        }
        print(a[rdx+1]-a[ldx]);
        // print(ldx,rdx);
    }

    return 0;
}
```
:::

## E 糗大了

因为是离线的,所以无需持久化,按照要删除的点倒着建图,并查集维护最大联通权值和即可

大脑有点小宕机,所以先炒了个板子整理思路

结果还把题目读错了好几个很唐的点,比如以为删除的顺序是固定从1开始

然后dede改改,搞了半天,感觉都要完蛋了,没想到交上去竟然是全场第三个过的


:::details 参考代码
```cpp
struct DSU{
    vector<int> f,siz;
    DSU(){}
    DSU(int n){
        f.resize(n);
        iota(all(f),0);
        siz.assign(n,0);
    }
    int find(int x){
        if(x==f[x])return x;
        f[x]=find(f[x]);
        return f[x];
    }
    int merge(int x,int y){
        x=find(x);
        y=find(y);
        if(x==y)return siz[x];
        siz[x]+=siz[y];
        f[y]=x;
        return siz[x];
    }
};

signed main(){
    int n=read(),m=read();
    vector<vector<int>> g(n);
    vector<int> w(n);
    for(int i=0;i<n;i++){
        w[i]=read();
    }
    for(int i=0;i<m;i++){
        int u=read()-1,v=read()-1;
        g[u].push_back(v);
        g[v].push_back(u);
    }
    set<int> s;
    DSU d(n);
    for(int i=0;i<n;i++){
        d.siz[i]=w[i];
    }
    vector<int> p(n);
    for(int i=0;i<n;i++)p[i]=read()-1;
    vector<int> res(n);
    int ans=-1;
    for(int i=n-1;i>0;i--){
        // print("what",p[i],w[p[i]]);
        s.insert(p[i]);
        ans=max(ans,w[p[i]]);
        for(auto v:g[p[i]]){
            if(s.count(v)){
                int tmp=d.merge(p[i],v);
                ans=max(ans,tmp);
            }
        }
        res[i]=ans;
    }
    for(int i=1;i<n;i++)print(res[i]);
    print(0);
    return 0;
}
```
:::


## C 关键的Guan

有一说一,一开始题目真有点没看懂,有点想先做后面的,后来花了大概5-10分钟才读明白

一开始以为和约束差分啥的有关,感觉有点不好想

结果看了下数据范围,才15,直接枚举全部组合然后暴力判断即可

写完这题一时到了rk2(算上打星rk3),还有差不多一半的比赛时间

:::details 参考代码
```cpp
int get(int p,int idx){
    return (p>>idx)&1;
}

signed main(){
    int n=read(),m=read(),k=read();
    vector<vector<int>> yes,no;
    for(int i=0;i<m;i++){
        int t=read();
        vector<int> a(t);
        for(int j=0;j<t;j++)a[j]=read();
        char c;
        cin>>c;
        if(c=='o')yes.push_back(a);
        else no.push_back(a);
    }
    int ans=0;
    for(int p=0;p<(1<<n);p++){
        int flag=1;
        for(auto a:yes){
            int cnt=0;
            for(auto val:a){
                cnt+=get(p,val-1);
            }
            if(cnt<k){
                flag=0;
                break;
            }
        }
        if(!flag)continue;
        for(auto a:no){
            int cnt=0;
            for(auto val:a){
                cnt+=get(p,val-1);
            }
            if(cnt>=k){
                flag=0;
                break;
            }
        }
        if(flag)ans++;
    }
    print(ans);
    return 0;
}
```
:::

## G 桥颗计划

> 怎么会有人一天有500节课啊

数据范围: $n<=k<=m<=500$

还是很微妙的,感觉不太能贪,直接自信 $n*k*m$ 的dp

怕直接定义转移方程哪里写错暴死,所以自信的写一个记忆化

定义 $f_{i,del}$ 表示对到第 $i$ 天可以逃 $del$ 节课时最小在校时间

哎其实这个时候就应该反应过来直接上背包了,但是好久没写代码了,真有点反应迟钝+码力下降

中间又看错了题目细节,想复杂了,然后还有`unordered_map`竟然不能用pair做键了,很难受

先改成了map,然后T了

然后改回,乱搞了个手写的哈希映射,然后又T了

很难受,不知道记忆化被卡常还是1e8不能过

然后想了半天怎么数据结构优化,也没想出来

然后懒得该递推,因为想不到优化,怕是思路错了,所以一直没过

结果最后正解就是1e8,遗憾离场

当然也可能我哪里写假了,很难受

:::details TLE

```cpp
vector<vector<int>> t;

unordered_map<int,int> cache;

int hhash(int a,int b){
    return a*1e4+b;
}

int f(int i,int del){
    int cac=hhash(i,del);
    if(cache.count(cac))return cache[cac];
    if(i==t.size())return 0;
    int ans=0x3f3f3f3f;
    int m=t[i].size();
    for(int k=0;k<=min(del,m);k++){
        int val=f(i+1,del-k);
        int len=m-k;
        if(len!=0){
            int b=0x3f3f3f3f;
            for(int l=0;l<m;l++){
                int r=l+len-1;
                if(r>=m){
                    break;
                }
                int tmp=t[i][r]-t[i][l]+1;
                b=min(b,tmp);
            }
            val+=b;
        }
        ans=min(val,ans);
        // print(i,k,val);
    }
    cache[cac]=ans;
    return ans;
}

signed main(){
    int n=read(),m=read(),k=read();
    t.resize(n);
    for(int i=0;i<n;i++){
        for(int j=0;j<m;j++){
            int tmp=read();
            if(tmp)t[i].push_back(j+1);
        }
    }
    print(f(0,k));
    return 0;
}
```
:::

## F

没看

## H

好像在哪见过类似的题,但是来不及了,dp写红温了,然后就开摆了

 