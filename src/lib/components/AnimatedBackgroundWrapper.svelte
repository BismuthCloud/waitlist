<script>
    import { onMount, onDestroy } from 'svelte';
    
    let vantaEffect;
    let container;

    onMount(() => {
        if (typeof VANTA !== 'undefined') {
            vantaEffect = VANTA.DOTS({
                el: container,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 100.0,
                minWidth: 100.0,
                scale: 1.0,
                scaleMobile: 1.0,
                color: 0x6b46c1,
                color2: 0x1a1a2e,
                backgroundColor: 0x1a1a2e,
                size: 3,
                spacing: 35,
                showLines: true
            });
        }
    });

    onDestroy(() => {
        if (vantaEffect) vantaEffect.destroy();
    });
</script>

<div class="relative min-h-screen">
    <div bind:this={container} class="neural-background"></div>
    <slot />
</div>

<style>
    .neural-background {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        opacity: 0.5;
        z-index: 1;
        background-color: #1a1a2e; /* Matching the Vanta background color */
    }
</style>