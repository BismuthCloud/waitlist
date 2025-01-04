<script lang="ts">
    import { Code, ArrowRight, GitFork, GitMerge } from 'lucide-svelte';
    
    export let callgraph: {
      name: string;
      module: string;
      description?: string;
      calls?: string[];
      returns?: string;
      depth: number;
    }[];
  
    let selectedNode: string | null = null;
  
    function handleNodeClick(name: string) {
      selectedNode = selectedNode === name ? null : name;
    }
  </script>
  
  <div class="w-full max-w-6xl mx-auto py-12 px-4">
    <div class="relative flex flex-col items-center space-y-8">
      {#each callgraph as node, i}
        <div 
          class="relative w-full group"
          style="margin-left: {node.depth * 2}rem"
        >
          <!-- Connection lines -->
          {#if i < callgraph.length - 1}
            <div class="absolute left-[2.5rem] top-[3rem] w-[2px] h-[calc(100%+2rem)] bg-neutral-dark/20"/>
          {/if}
          
          <!-- Node -->
          <div 
            class="relative flex items-center space-x-4 p-4 rounded-lg bg-dark-800 border border-neutral-dark/20
                   hover:border-accent-purple/50 transition-all duration-200 cursor-pointer"
          >
            <!-- Icon -->
            <div class="w-12 h-12 rounded-lg bg-bismuth-primary-300/20 p-2 flex items-center justify-center">
              <Code class="w-6 h-6 text-bismuth-primary-300" />
            </div>
  
            <!-- Info -->
            <div class="flex-1">
              <div class="text-lg font-medium text-neutral-light">{node.name}</div>
              <div class="text-sm text-neutral-dark">Module: {node.module}</div>
            </div>
  
            <!-- Returns indicator -->
            {#if node.returns}
              <div class="px-3 py-1 rounded-full bg-accent-purple/20 text-sm text-accent-purple">
                Returns: {node.returns}
              </div>
            {/if}
          </div>
  
          <!-- Expanded details -->
          {#if i == 0}
            <div 
              class="mt-4 ml-16 p-4 rounded-lg bg-dark-800/50 border border-neutral-dark/20"
              transition:slide
            >
              {#if node.description}
                <div class="text-neutral mb-4">{node.description}</div>
              {/if}
              
              {#if node.calls && node.calls.length > 0}
                <div class="space-y-2">
                  <div class="text-sm text-neutral-dark">Calls:</div>
                  {#each node.calls as call}
                    <div class="flex items-center space-x-2 text-neutral">
                      <ArrowRight class="w-4 h-4" />
                      <span>{call}</span>
                    </div>
                  {/each}
                </div>
              {/if}
            </div>
          {/if}
        </div>
      {/each}
    </div>
  </div>
  
  <style>
    @keyframes slide {
      from { height: 0; opacity: 0; }
      to { height: var(--height); opacity: 1; }
    }
  </style>