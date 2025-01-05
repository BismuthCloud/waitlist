<script>
    import { onMount, onDestroy } from 'svelte';
    
    // Props for animation type and configuration
    export let animationType = 'DOTS'; // Default animation
    export let config = {}; // Custom configuration

    let vantaEffect;
    let container;

    // Default configurations for different animation types
    const defaultConfigs = {
        DOTS: {
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
        },
        WAVES: {
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 100.0,
            minWidth: 100.0,
            scale: 1.0,
            scaleMobile: 1.0,
            color: 0x6b46c1,
            waveSpeed: 0.5,
            waveHeight: 20
        },
        NET: {
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 100.0,
            minWidth: 100.0,
            scale: 1.0,
            scaleMobile: 1.0,
            color: 0x6b46c1,
            backgroundColor: 0x1a1a2e,
            points: 10,
            maxDistance: 20,
            spacing: 15
        },
        TOPOLOGY: {
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            // Adding some aesthetic defaults that work well with TOPOLOGY
            color: 0x6b46c1,
            backgroundColor: 0x1a1a2e,
            points: 15,
            maxDistance: 20.00,
            spacing: 15,
            showDots: true
        }
    };

    onMount(() => {
        if(animationType === null) {
           return; 
        }

        if (typeof VANTA !== 'undefined') {
            // Merge default config with custom config
            const mergedConfig = {
                ...defaultConfigs[animationType],
                ...config,
                el: container
            };

            // Initialize the selected animation type
            if (VANTA[animationType]) {
                vantaEffect = VANTA[animationType](mergedConfig);
            } else {
                console.error(`Animation type ${animationType} not found`);
            }
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
        background-color: #1a1a2e;
    }
</style>