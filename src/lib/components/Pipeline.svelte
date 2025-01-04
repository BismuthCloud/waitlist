<script lang="ts">
  import { Code, ClipboardList, FileCheck, Rocket, Wrench } from 'lucide-svelte';
  import { fade } from 'svelte/transition';
  import { goto } from '$app/navigation';
  
  export let currentStage: number = 0;
  export let progress: number[] = [0, 30, 60, 90, 100];
  export let currentPage: 'development' | 'maintenance';

  const stages = [
      {
      icon: ClipboardList,
      name: 'BACKLOG',
      description: 'Initial planning and task organization',
      bgColor: 'from-bismuth-copper-200 to-bismuth-copper-300',
      iconColor: 'text-neutral-light',
      progressColor: 'bg-bismuth-primary-300',
      interactive: false,
      isProduct: false,
      id: 'backlog'
      },
      {
      icon: Code,
      name: 'DEVELOPMENT',
      description: 'An AI pair programmer right in your terminal.',
      bgColor: 'from-bismuth-blue-400 to-bismuth-blue-500',
      iconColor: 'text-bismuth-primary-300',
      progressColor: 'bg-bismuth-primary-300',
      interactive: true,
      isProduct: true,
      href: '/pair-programming',
      id: 'development'
      },
      {
      icon: FileCheck,
      name: 'REVIEW',
      description: 'Code review and quality assurance',
      bgColor: 'from-bismuth-secondary-200 to-bismuth-secondary-300',
      iconColor: 'text-bismuth-secondary-300',
      progressColor: 'bg-bismuth-secondary-300',
      interactive: false,
      isProduct: false,
      id: 'review'
      },
        {
        icon: Rocket,
        name: 'PRODUCTION',
        description: 'Deployed to production',
        bgColor: 'bg-accent-warm-orange/80',
        iconColor: 'text-accent-warm-orange',
        progressColor: 'bg-accent-warm-orange',
        interactive: false,
        isProduct: false,
        id: 'production'
        },
      {
      icon: Wrench,
      name: 'MAINTENANCE',
      description: 'Keep your software running smoothly',
      bgColor: 'from-bismuth-primary-200 to-bismuth-primary-300',
      iconColor: 'text-bismuth-primary-300',
      progressColor: 'bg-bismuth-primary-300',
      interactive: true,
      isProduct: true,
      href: '/maintenance',
      id: 'maintenance'
      }
  ];

  function handleStageClick(stage) {
    if (stage.interactive && stage.href && stage.id !== currentPage) {
      goto(stage.href, { replace: true });
    }
  }
</script>

<div class="w-full max-w-6xl mx-auto py-12 px-4">
  <div class="relative xs:ml-[65px]  ml-[35px] md:ml-0 flex flex-col">
    
    <div class="relative grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4">
    <div class="absolute top-[6rem] left-0 w-full h-[2px] bg-neutral-dark/20 -translate-y-1/2 hidden md:block"/>
    <div class="absolute top-0 left-3/4 h-full w-[2px] bg-neutral-dark/20 -translate-x-1/2 md:hidden"/>
      {#each stages as stage, index}
        <div 
          class="flex flex-row md:flex-col-reverse items-center group"
          class:opacity-30={!stage.isProduct}
          class:cursor-pointer={stage.interactive && stage.id !== currentPage}
          on:click={() => handleStageClick(stage)}
        >
          <div class="relative">
            <div 
              class="w-12 h-12 rounded-lg bg-gradient-to-b {stage.bgColor} p-2 
                     flex items-center justify-center
                     transition-all duration-300 {stage.interactive ? 'hover:scale-110' : ''}
                     shadow-[inset_0_-4px_0_rgba(0,0,0,0.2),0_8px_10px_rgba(0,0,0,0.3)]
                     hover:shadow-[inset_0_-2px_0_rgba(0,0,0,0.2),0_6px_8px_rgba(0,0,0,0.3)]
                     active:translate-y-1
                     active:shadow-[inset_0_2px_0_rgba(0,0,0,0.2),0_2px_4px_rgba(0,0,0,0.3)]"
            >
              <svelte:component 
                this={stage.icon} 
                class="w-6 h-6 text-white"
              />
            </div>
            

            {#if stage.interactive}
              <div class="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-accent-purple rounded-full" />
            {/if}
          </div>

          <div class="md:absolute top-12 ml-4 md:ml-0 md:mt-4 flex flex-col items-center">
            <span class="text-sm font-medium text-neutral md:text-center">{stage.name}</span>
            
            <div class="invisible group-hover:visible opacity-0 group-hover:opacity-100
                        transition-all duration-300 absolute top-full mt-2 p-2 rounded-lg
                        bg-dark-800 text-neutral-light text-xs max-w-[200px] text-center
                        shadow-lg z-10">
              {stage.description}
              {#if stage.interactive && stage.id !== currentPage}
                <div class="mt-1 text-accent-purple">Click to learn more →</div>
              {/if}
            </div>
          </div>

          {#if stage.id === currentPage}
          <div class="-mt-14 text-white text-sm font-medium whitespace-nowrap flex flex-col items-center gap-2
          md:-mt-14 
          rotate-45 md:rotate-0">
            <span>You are here</span>
            <span class="text-lg">↓</span>
          </div>
          {/if}
        </div>
      {/each}
    </div>
  </div>
</div>