<script lang="ts">
    type Message = {
      author: string;
      content: string;
      authorColor?: string;
    };

    import { Copy } from 'lucide-svelte';
  
    export let messages: Message[];
    export let copyable: boolean = false;

    let copied = false;

    function copyContent(content: string) {
        navigator.clipboard.writeText(content);
        copied = true;
        setTimeout(() => copied = false, 1000); // Reset after 1 second
    }
  </script>
  
  <div class="w-full max-w-2xl rounded-lg overflow-hidden bg-[#11092c] shadow-lg border border-neutral-dark/20">
    <!-- Chat Header with line -->
    <div class="relative p-4 border-b border-neutral-dark/20">
      <span class="text-neutral font-mono">Chat History</span>
      <div class="absolute left-[120px] top-1/2 -translate-y-1/2 h-[1px] bg-neutral-dark/20 w-[calc(100%-140px)]" />
    </div>
    
    <!-- Chat Content -->
    <div class="p-4 space-y-4">
      {#each messages as message}
        <div class="space-y-1">
          <span class="font-mono" style="color: {message.authorColor || 'inherit'}">
            {message.author}:
          </span>
          <div class="text-neutral font-mono pl-4">
            {message.content}

          </div>        

            <button 
              class=" p-2 rounded-lg bg-dark-800/50 hover:bg-dark-800 
                      text-neutral-dark hover:text-neutral transition-all duration-200
                      {copied ? 'bg-accent-purple text-white scale-110 rotate-12' : ''}"
              on:click={() => copyContent(message.content)}
              title="Copy to clipboard"
            >
              <Copy class="w-4 h-4 {copied ? 'animate-ping' : ''}" />
            </button> 
        </div>
      {/each}
    </div>
  
    <!-- Input Area -->
    <div class="p-4 border-t border-neutral-dark/20 bg-[#403a56]">
      <div class="text-neutral-dark font-mono">
        Type your message
      </div>
    </div>
  </div>