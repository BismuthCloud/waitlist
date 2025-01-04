<script lang="ts">
    export const csr = true;
    export const ssr = false;
  
    import AnimatedBackgroundWrapper from '$lib/components/AnimatedBackgroundWrapper.svelte';
    // Note: we'll need these CSS imports too
    import '$lib/vendor/css/normalize.css';
    import '$lib/vendor/css/webflow.css';
    import '$lib/vendor/css/bismuthos.webflow.css';
  </script>
  
  <AnimatedBackgroundWrapper>
    <section class="section-regular !max-w-full !overflow-x-hidden pb-24 relative z-10">
      <div class="container-large !mx-auto !px-4 relative z-10">
        <div class="container-small w-full relative z-10">
          <div class="text-align-center flex flex-col items-center justify-center">
            <div class="column-x-large column-center w-full max-w-4xl">
              <div style="opacity:1" class="column-large column-center text-center">
                <div class="column-regular column-center">
                  <h2 class="display-heading center text-center bg-gradient-to-r from-pink-500 via-purple-500 to-pink-400 text-transparent bg-clip-text">Getting Started with <span class="text-span gradient-text">Bismuth</span></h2>
                </div>
                <div class="max-width-regular mx-auto">
                  <p class="paragraph-x-large text-color-gray-500 text-center leading-relaxed">Follow this guide to quickly set up and start using Bismuth's AI-powered code review and maintenance capabilities.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  
    <section class="section-large-2 blue-ellypse relative bg-gradient-to-b from-blue-50 to-transparent pt-32 pb-32">
      <div class="container-large-3 relative z-10">
        <div class="w-layout-grid title-grid-2 full">
          <div class="column-regular column-left ce-ter fade column-margin">
            <div class="badge-large blue bg-blue-100 text-blue-600 px-4 py-2 rounded-full inline-block">
              <div>Installation</div>
            </div>
            <h3 class="h2-heading text-4xl font-bold mt-6 mb-4">Quick Installation</h3>
            <p class="paragraph-x-large text-color-gray-500 _18 center leading-relaxed">Install the Bismuth CLI to get started.</p>
          </div>
        </div>
        <div class="code-wrapper bg-gray-900 rounded-xl p-6 my-8 shadow-xl">
          <pre class="text-gray-100 font-mono text-sm"><code>npx @bismuthcloud/install</code></pre>
        </div>
      </div>
    </section>
  
    <section class="section-large relative z-10 pt-32 pb-32">
      <div class="container-large-3">
        <div class="w-layout-grid title-grid-2 full">
          <div class="column-regular column-left ce-ter fade column-margin">
            <div class="badge-large bg-purple-100 text-purple-600 px-4 py-2 rounded-full inline-block">
              <div>Initial Setup</div>
            </div>
            <h3 class="h2-heading text-4xl font-bold mt-6 mb-4">Setting Up <span class="text-span-2 bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">Bismuth</span></h3>
          </div>
        </div>
  
        <div class="process-wrapper relative">
          <div class="absolute top-0 bottom-0 left-1/2 w-px bg-gray-200"></div>
          
          <div class="w-layout-grid process-grid relative grid grid-cols-[1fr,auto,1fr] gap-8 mb-16">
            <div class="process-content fade">
              <div class="div-block-5 bg-white rounded-2xl p-8 shadow-lg">
                <h3 class="h3 text-2xl font-bold mb-4">Login to Bismuth</h3>
                <p class="paragraph-x-large text-color-gray-500 _18 leading-relaxed mb-6">Authenticate with the Bismuth platform:</p>
                <div class="code-wrapper bg-gray-900 rounded-lg p-4">
                  <pre class="text-gray-100 font-mono text-sm"><code>biscli login</code></pre>
                </div>
              </div>
            </div>
            <div class="process-line-wrapper flex items-center justify-center">
              <div class="process-number w-12 h-12 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold text-lg shadow-lg">
                1
              </div>
            </div>
          </div>
  
          <!-- Repeat similar structure for steps 2 and 3 -->
        </div>
      </div>
    </section>
  
    <section class="section-large-2 purple relative bg-gradient-to-b from-purple-50 to-transparent pt-32 pb-32">
      <div class="container-large-3">
        <div class="w-layout-grid title-grid-2 full">
          <div class="column-regular column-left ce-ter fade column-margin">
            <div class="badge-large blue bg-blue-100 text-blue-600 px-4 py-2 rounded-full inline-block">
              <div>Usage Tips</div>
            </div>
            <h3 class="h2-heading text-4xl font-bold mt-6 mb-4">Getting the Most Out of Bismuth</h3>
          </div>
        </div>
  
        <div class="column-x-large-2 grid grid-cols-1 md:grid-cols-2 gap-8 fade">
          <div class="card-ai-1 bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div class="div-block-5">
              <h3 class="h3 text-2xl font-bold mb-4">Helpful Commands</h3>
              <p class="paragraph-x-large text-color-gray-500 _18 leading-relaxed">
                Use <code class="bg-pink-50 text-pink-600 px-2 py-1 rounded">/help</code> in chat to see available commands.
                Use <code class="bg-pink-50 text-pink-600 px-2 py-1 rounded">/feedback</code> to report issues or provide feedback.
              </p>
            </div>
          </div>
  
          <div class="card-ai-1 bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div class="div-block-5">
              <h3 class="h3 text-2xl font-bold mb-4">Project Management</h3>
              <p class="paragraph-x-large text-color-gray-500 _18 leading-relaxed">
                Delete projects using: <code class="bg-pink-50 text-pink-600 px-2 py-1 rounded">biscli project delete project-name</code>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </AnimatedBackgroundWrapper>
  
  <style>
    :global(.gradient-text) {
      @apply bg-gradient-to-r from-pink-500 via-purple-500 to-pink-400 text-transparent bg-clip-text;
    }
  
    .blue-ellypse {
      position: relative;
      overflow: hidden;
    }
  
    .blue-ellypse::before {
      content: '';
      position: absolute;
      width: 200%;
      height: 200%;
      top: -100%;
      left: -50%;
      background: radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, rgba(59, 130, 246, 0) 70%);
      z-index: 0;
    }
  
    .process-wrapper {
      @apply relative py-12;
    }
  
    .process-line {
      @apply absolute h-full w-px bg-gray-200 left-1/2 top-0 transform -translate-x-1/2;
    }
  
    .fade {
      @apply opacity-0 transform translate-y-8;
      animation: fadeIn 0.8s ease-out forwards;
    }
  
    @keyframes fadeIn {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  </style>