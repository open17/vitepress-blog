<template>
    <div class="reveal">
        <div class="slides">
            <slot />
        </div>
    </div>
</template>

<script setup>
import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';
import RevealMath from 'reveal.js/plugin/math/math.js';
import 'reveal.js/dist/theme/white.css'
import 'reveal.js/dist/reveal.css';

import { onMounted, onUnmounted, ref } from 'vue';

const deck = ref(null);

onMounted(() => {
    initReveal();
});

onUnmounted(() => {
    destoryReveal();
});



const initReveal = () => {
    console.log("init");
    if (deck.value) return;
    document.querySelector('.reveal').style.width = '50vw';
    document.querySelector('.reveal').style.height = '50vh';
    deck.value = new Reveal( {
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
    console.log("destory");
    if (deck.value) {
        deck.value.destroy();
        deck.value = null;
    }
}
</script>