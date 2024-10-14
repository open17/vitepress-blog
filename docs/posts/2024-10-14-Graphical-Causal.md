---
title: Graphical-Causal
date: 2024-10-14
tags:
    - 因果推断
    - 幻灯片
---

点击幻灯片框,按`F`全屏幻灯片,按`esc`退出

---

<script setup>
import RevealGroup from '../components/RevealGroup.vue'
</script>

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
## DIRECTED GRAPHICAL CAUSAL MODELS
![](https://matheusfacure.github.io/python-causality-handbook/_images/graph-flow.png)
---
### Chain Structure
![Chain Stru](https://matheusfacure.github.io/python-causality-handbook/_images/04-Graphical-Causal-Models_4_0.svg)
---
Dependence flows in the direction of the arrows.
The greater the causal expertise, the greater your chances of getting a promotion. 
---
As a general rule, the dependence flow in the direct path from A to C is blocked when we condition on an intermediary variable B.
$$
A \not \perp C
$$
$$
A \perp C | B
$$
---
### fork structure 
![fork structure](https://matheusfacure.github.io/python-causality-handbook/_images/04-Graphical-Causal-Models_7_0.svg)
---
$$
A \not \perp  B
$$
$$
A \perp B | C
$$
As a general rule, two variables that share a common cause are dependent, but independent when we condition on the common cause.
---
### Collider structure 
![](https://matheusfacure.github.io/python-causality-handbook/_images/04-Graphical-Causal-Models_9_0.svg)
---
$$
A \perp B
$$
$$
A \not \perp B | C
$$
As a general rule, conditioning on a collider opens the dependence path. Not conditioning on it leaves it closed.
</textarea>
</section>
</RevealGroup>

## 参考来源

- [图模型简介](https://matheusfacure.github.io/python-causality-handbook/04-Graphical-Causal-Models.html)
- [论文综述](https://www.frontiersin.org/journals/genetics/articles/10.3389/fgene.2019.00524/full)