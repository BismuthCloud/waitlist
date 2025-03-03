<script lang="ts">
    import { Code } from 'lucide-svelte';
    export let size: 'sm' | 'md' | 'lg' = 'md';
  
    const sizeClasses = {
      sm: 'w-8 h-8 p-1.5',
      md: 'w-12 h-12 p-2',
      lg: 'w-16 h-16 p-3'
    };
  
    const iconSizes = {
      sm: 'w-4 h-4',
      md: 'w-6 h-6',
      lg: 'w-8 h-8'
    };
</script>
  
<div class="flex flex-col items-center gap-6 -mt-16 opacity-0 lg:opacity-100">
    <h3 class="text-white h3 text-center">
      Tame your backlog with Bismuth!
    </h3>
   
    <div
      class="relative rounded-lg bg-gradient-to-b from-blue-400 to-blue-600
             w-16 h-16 p-3 
             flex items-center justify-center 
             transition-all duration-300 
             shadow-[inset_0_-4px_0_rgba(0,0,0,0.2),0_8px_10px_rgba(0,0,0,0.3)]
             
             ">
      <Code class="w-8 h-8 text-white"/>
  </div>
</div>