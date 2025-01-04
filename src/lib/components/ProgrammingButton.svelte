<script lang="ts">
    import { Code } from 'lucide-svelte';
    export let href: string;
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
  
<div class="flex flex-col items-center gap-6 -mt-16">
    <h3 class="text-white h3 text-center">
      Need more hands-on assistance?<br/>
      Try our AI pair programmer
    </h3>
   
    <a {href} 
      class="relative rounded-lg bg-gradient-to-b from-blue-400 to-blue-600
             w-16 h-16 p-3 
             flex items-center justify-center 
             transition-all duration-300 
             hover:scale-110
             shadow-[inset_0_-4px_0_rgba(0,0,0,0.2),0_8px_10px_rgba(0,0,0,0.3)]
             hover:shadow-[inset_0_-2px_0_rgba(0,0,0,0.2),0_6px_8px_rgba(0,0,0,0.3)]
             active:translate-y-1
             active:shadow-[inset_0_2px_0_rgba(0,0,0,0.2),0_2px_4px_rgba(0,0,0,0.3)]">
      <Code class="w-8 h-8 text-white"/>
    </a>
</div>