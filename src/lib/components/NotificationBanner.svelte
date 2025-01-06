<!-- AnnouncementToast.svelte -->
<script>
    import { onMount } from 'svelte';
    import { fly, fade } from 'svelte/transition';
    
    export let message = "We're live, come try Bismuth Pair Programmer!";
    export let cookieKey = 'bismuth-announcement';
    export let durationDays = 30;
    export let autoHideSeconds = 5;
    export let href = 'https://bismuth.sh/pair-programming#quickstart';
    
    let isVisible = false;
  
    onMount(() => {
      isVisible = false;
  
      if (isVisible && autoHideSeconds) {
        setTimeout(dismiss, autoHideSeconds * 1000);
      }
    });
  
    function dismiss(e) {
      e?.stopPropagation();
      const expiryDate = new Date();
      expiryDate.setDate(expiryDate.getDate() + durationDays);
      document.cookie = `${cookieKey}=dismissed; expires=${expiryDate.toUTCString()}; path=/`;
      
      isVisible = false;
    }
</script>
  
{#if isVisible}
  <div 
    class="fixed top-20 left-1/2 -translate-x-1/2 flex items-center gap-3 px-5 py-3 bg-[#1a1a24] rounded-full border border-white/10 shadow-lg shadow-purple-500/10 z-50"
    transition:fly={{y: 50, duration: 300}}
    role="status"
  >
    <a {href} class="flex items-center gap-3 text-sm text-white hover:text-white/90 transition-colors">
      <span>🎉 {message}</span>
    </a>
    <button 
      on:click={dismiss} 
      class="text-white/60 hover:text-white transition-colors p-1 flex items-center"
      aria-label="Dismiss"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <path d="M6.7 5.3a1 1 0 0 0-1.4 1.4L10.6 12l-5.3 5.3a1 1 0 0 0 1.4 1.4L12 13.4l5.3 5.3a1 1 0 0 0 1.4-1.4L13.4 12l5.3-5.3a1 1 0 0 0-1.4-1.4L12 10.6 6.7 5.3z" fill="currentColor"/>
      </svg>
    </button>
  </div>
{/if}