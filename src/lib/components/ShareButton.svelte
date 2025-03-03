<script>
    import { fade, slide } from 'svelte/transition';
    import { onMount } from 'svelte';
  
    export let url = '';
    export let title = '';
    
    let isOpen = false;
    let mounted = false;
    let buttonElement;
  
    onMount(() => {
      mounted = true;
      url = url || window.location.href;
      title = title || document.title;
    });
  
    const getShareConfig = () => {
  const defaultUrl = "https://bismuth.sh";
  const twitterText = "Check out Bismuth - an end to end AI developer that takes backlog tickets and quickly makes clean tested PRs! They use static analysis, test running and fuzzing to ensure higher quality code than competitors. 🚀 #AI #developers #coding  #programming #BismuthCodes";
  
  return {
    X: {
      url: `https://x.com/intent/tweet?text=${encodeURIComponent(twitterText)}&url=${encodeURIComponent(url || defaultUrl)}`,
      icon: "twitter"
    },
    Facebook: {
      url: `https://www.facebook.com/sharer.php?u=${encodeURIComponent(url || defaultUrl)}`,
      icon: "facebook"
    },
    LinkedIn: {
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url || defaultUrl)}`,
      icon: "linkedin"
    }
  };
};
  
    const shareIcon = `
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/>
        <polyline points="16 6 12 2 8 6"/>
        <line x1="12" y1="2" x2="12" y2="15"/>
      </svg>
    `;
  
    function handleClick(e) {
      e.stopPropagation();
      isOpen = !isOpen;
    }
  
    function share(platform) {
  const config = getShareConfig();
  window.open(config[platform].url, '_blank', 'width=600,height=400');
  isOpen = false;
}
  
    function handleClickOutside(event) {
      if (!event.target.closest('.share-dropdown')) {
        isOpen = false;
      }
    }
  
    function updateDropdownPosition(node) {
      const rect = buttonElement.getBoundingClientRect();
      node.style.top = `${rect.bottom + 8}px`;
      node.style.left = `${rect.left}px`;
    }
  </script>
  
  <svelte:window on:click={handleClickOutside} />
  
  <div class="relative inline-block share-dropdown">
    <button 
      bind:this={buttonElement}
      class="flex items-center justify-center h-8 px-2 text-sm font-medium text-white transition-all duration-200 
             bg-neutral-800/50 backdrop-blur border border-white/10 rounded-lg hover:bg-neutral-700/60 
             hover:border-white/20 active:bg-neutral-600/70"
      on:click={handleClick}
    >
      <span class="mr-2">Share</span>
      {@html shareIcon}
    </button>
    
    {#if isOpen}
      <div 
        class="fixed min-w-[160px] p-1 bg-neutral-800/95 backdrop-blur border border-white/10 
               rounded-lg shadow-lg shadow-black/30 z-50"
        transition:slide={{ duration: 150, axis: 'y' }}
        use:updateDropdownPosition
      >
      {#each Object.entries(getShareConfig()) as [platform, config]}
      <button 
        class="w-full px-3 py-2 text-sm font-medium text-white text-left transition-colors 
               rounded-md hover:bg-white/10"
        on:click={() => share(platform)}
        transition:fade={{ duration: 100 }}
      >
        {platform}
      </button>
    {/each}
      </div>
    {/if}
  </div>