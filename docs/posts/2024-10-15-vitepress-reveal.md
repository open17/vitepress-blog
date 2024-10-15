---
title: 在vitepress中使用幻灯片
date: 2024-10-15
tags:
    - 幻灯片
    - 教程
---

基于RevealJs实现在vitepress中增加幻灯片功能

---

<script setup>
import RevealGroup from '../components/RevealGroup.vue'
</script>

::: details &nbsp;&nbsp;预览幻灯片
<br>
<RevealGroup>
<section data-markdown>
<textarea data-template>
## 幻灯片示例
按 `→` 开始
---
### 幻灯片快捷键
- 按`f`: 全屏
- 按`esc`: 退出全屏
- 按`o`: 预览
---
### 广告
#### 想要快速生成同款博客?
- 利用github模板[自动生成](https://github.com/open17/vitepress-theme-open17/generate)
- 手动配置,详见[文档](https://vitepress.open17.vip/guide/0-intro/0-start)
</textarea>
</section>
</RevealGroup>
<br>
:::

## 实现代码

创建一个vue组件,注意要动态导入`RevealJS`,不然build阶段会报错

:::code-group
```vue [template]
<template>
    <div class="reveal">
        <div class="slides">
            <slot/>
        </div>
    </div>
</template>
```
```vue [script]
<script setup>
import 'reveal.js/dist/theme/white.css'
import 'reveal.js/dist/reveal.css';

import { onMounted, onUnmounted, ref } from 'vue';

const deck = ref(null);


onUnmounted(() => {
    destoryReveal();
});

onMounted(async () => {
    const Reveal = (await import('reveal.js')).default;
    const Markdown = (await import('reveal.js/plugin/markdown/markdown.esm.js')).default;
    const RevealMath = (await import('reveal.js/plugin/math/math.js')).default;
    
    initReveal(Reveal, Markdown, RevealMath);
});

const initReveal = (Reveal, Markdown, RevealMath) => {
    if (deck.value) return;
    document.querySelector('.reveal').style.width = '100%';
    document.querySelector('.reveal').style.height = '25rem';
    deck.value = new Reveal({
        hash: true,
        embedded: true,
        margin: 0.01,
        minScale: 0.2,
        maxScale: 2.0,
        plugins: [Markdown, RevealMath.KaTeX],
    });
    deck.value.initialize();
}

const destoryReveal = () => {
    if (typeof window === 'undefined') return;
    if (deck.value) {
        deck.value.destroy();
        deck.value = null;
    }
}
</script>
```
:::

然后在Markdown文件里引用该vue组件(当然你可以直接注册为全局组件),然后将要放入的内容放在组件插槽中即可


上面演示的代码实现如下:
```html
<RevealGroup>
<section data-markdown>
<textarea data-template>
## 幻灯片示例
按 `→` 开始
---
### 幻灯片快捷键
- 按`f`: 全屏
- 按`esc`: 退出全屏
- 按`o`: 预览
---
### 广告
#### 想要快速生成同款博客?
- 利用github模板[自动生成](https://github.com/open17/vitepress-theme-open17/generate)
- 手动配置,详见[文档](https://vitepress.open17.vip/guide/0-intro/0-start)
</textarea>
</section>
</RevealGroup>
```