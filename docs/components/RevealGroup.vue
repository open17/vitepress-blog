<template>
    <div class="reveal">
        <div class="slides">
            <slot />
        </div>
    </div>
</template>

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
    // console.log("destory");
    if (deck.value) {
        deck.value.destroy();
        deck.value = null;
    }
}
</script>