<script lang="ts">
	import { onMount } from 'svelte';
    import { Copy } from 'lucide-svelte';
    
    export let title = "nickgregory@MBP:~";
    export let content = "";
    let codeElement: HTMLElement;
    
    export let language = "bash";
    export let shellPrompt = "nickgregory@MBP ➜";
    let copied = false;
  
    function copyContent() {
        navigator.clipboard.writeText(content);
        copied = true;
        setTimeout(() => copied = false, 1000); // Reset after 1 second
    }


    onMount(() => {
        if (window.Prism) {
        Prism.highlightElement(codeElement);
        }
    });

  </script>
  <div class="w-full max-w-2xl rounded-lg overflow-hidden bg-dark-800 shadow-lg border border-neutral-dark/20">
    <!-- Terminal Header -->
    <div class="px-4 py-2 bg-[#403a56] backdrop-blur flex items-center border-b border-neutral-dark/20">
      <!-- Traffic Lights -->
      <div class="flex gap-2">
        <div class="w-3 h-3 rounded-full bg-red-500" />
        <div class="w-3 h-3 rounded-full bg-yellow-500" />
        <div class="w-3 h-3 rounded-full bg-green-500" />
      </div>
      <!-- Title -->
      <div class="flex-1 text-center text-sm text-neutral">
        {title}
      </div>
      <div class="w-16"><!-- Spacer to center title --></div>
    </div>
    
    <!-- Terminal Content -->
    <div class="relative p-4 bg-[#11092c] min-h-[200px] font-mono">
        <pre class="!bg-transparent !whitespace-break-spaces text-left">
        <code bind:this={codeElement} class="language-{language} !p-0 block text-left !whitespace-break-spaces"><span class="text-accent-purple">{shellPrompt}</span> {content}</code>
    </pre>
        
        <!-- Copy Button -->
        <button 
        class="absolute bottom-4 right-4 p-2 rounded-lg bg-dark-800/50 hover:bg-dark-800 
               text-neutral-dark hover:text-neutral transition-all duration-200
               {copied ? 'bg-accent-purple text-white scale-110 rotate-12' : ''}"
        on:click={copyContent}
        title="Copy to clipboard"
      >
        <Copy class="w-4 h-4 {copied ? 'animate-ping' : ''}" />
      </button> 
    </div>
  </div>