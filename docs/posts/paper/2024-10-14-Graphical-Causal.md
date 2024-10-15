---
title: Graphical-Causal
date: 2024-10-14
tags:
    - 因果推断
    - 幻灯片
---

Review of Causal Discovery Methods Based on Graphical Models

---

<RevealGroup classID="dk">
<section data-markdown>
<textarea data-template>
## Graph & Causality
Review of Causal Discovery Methods Based on Graphical Models  
---
## Intro
A fundamental task in various disciplines of science, including biology, is to find underlying
causal relations and make use of them. Causal relations can be seen if interventions
are properly applied; however, in many cases they are difficult or even impossible
to conduct.
---
A traditional way to discover causal relations is to use interventions or randomized experiments,
which is in many cases too expensive, too time-consuming, or even impossible. 
---
Therefore,revealing causal information by analyzing purely observational data, known as **causal discovery**,has drawn much attention.
---
## DGCM
Directed Graphical Causal Models
![Graph Flow](https://matheusfacure.github.io/python-causality-handbook/_images/graph-flow.png)
---
### Chain Structure
Dependence flows in the direction of the arrows.
The greater the causal expertise, the greater your chances of getting a promotion. 
![Chain](https://matheusfacure.github.io/python-causality-handbook/_images/04-Graphical-Causal-Models_4_0.svg)
---
As a general rule, the dependence flow in the direct path from A to C is blocked when we condition on an intermediary variable B.
$$
A \not \perp C
$$
$$
A \perp C | B
$$
---
### Fork Structure 
As a general rule, two variables that share a common cause are dependent, but independent when we condition on the common cause.
![fork structure](https://matheusfacure.github.io/python-causality-handbook/_images/04-Graphical-Causal-Models_7_0.svg)
---
$$
A \not \perp  B
$$
$$
A \perp B | C
$$
---
### Collider structure 
As a general rule, conditioning on a collider opens the dependence path. Not conditioning on it leaves it closed.
![](https://matheusfacure.github.io/python-causality-handbook/_images/04-Graphical-Causal-Models_9_0.svg)
---
$$
A \perp B
$$
$$
A \not \perp B | C
$$
---
## Methods
Some methods using to build CAUSAL MODELS.
---
### The PC Algorithm
- Form a complete undirected graph
- Eliminate edges between variables that are unconditionally independent
- For each pair of variables (A, B) having an edge between them,and for each variable C with an edge connected to either of them, eliminate the edge between A and B if $A \not \perp B | C$
- Keep on more pair
---
### The FCI Algorithm
- FCI orients edges by a procedure similar to PC but without assuming that every edge is directed one way or the other.
- Have a 'o' mark,means can be an arrow head or an arrow tail.
- Bidirected edge between Y and Z indicates that there is at least one unmeasured confounder between Y and Z.
</textarea>
</section>
</RevealGroup>

`F` for full screen, `esc` to exit

<!-- @include: ./2024-10-14-Graphical-Causal.md{19,81} -->

## 参考来源

- [图模型简介](https://matheusfacure.github.io/python-causality-handbook/04-Graphical-Causal-Models.html)
- [论文综述](https://www.frontiersin.org/journals/genetics/articles/10.3389/fgene.2019.00524/full)
