<script lang="ts">
    export const ssr = false;
    export const csr = true;
    
    import Pipeline from '$lib/components/Pipeline.svelte';
    import Callgraph from '$lib/components/Callgraph.svelte';
    import Terminal from '$lib/components/Terminal.svelte';
    import Chat from '$lib/components/Chat.svelte';
    import AnimatedBackgroundWrapper from '$lib/components/AnimatedBackgroundWrapper.svelte';
    import ContactForm from '$lib/components/ContactForm.svelte';
  
      import { onMount } from 'svelte';
      import confetti from 'canvas-confetti';
    import bismuthInTerm from '$lib/images/bismuth_in_term.png';
    import bismuthRunBuild from '$lib/images/bismuth_run_build.png';
    import logo from '$lib/images/bismuthos-logo.svg';
    import amazonLogo from '$lib/images/ant-design_amazon-square-filled.svg';
    import zillowLogo from '$lib/images/simple-icons_zillow.svg';
    import googleLogo from '$lib/images/uim_google.svg';
    import screen12 from '$lib/images/screen12-1.svg';
    import code2 from '$lib/images/code2.svg';
    import screen from '$lib/images/screen.svg';
    import screen1 from '$lib/images/screen1.svg';
    // import codeGeneration from '$lib/images/code-generation.svg';
    import icon from '$lib/images/icon.svg';
    import icon1 from '$lib/images/icon-1.svg';
    import icon2 from '$lib/images/icon-2.svg';
    import codeGit from '$lib/images/code-git.svg';
    import timeline1 from '$lib/images/timeline1.svg';
    import feature from '$lib/images/feature.svg';
    import timeline3 from '$lib/images/timeline3.svg';
    import timeline4 from '$lib/images/timeline4.svg';
    import testimonial1 from '$lib/images/kyle_martin.jpg';
    import testimonial2 from '$lib/images/Testimonial-Avatar-06_1Testimonial-Avatar-06.png';
    import testimonial3 from '$lib/images/Testimonial-Avatar-05_1Testimonial-Avatar-05.png';
    import testimonial4 from '$lib/images/Testimonial-Avatar-04_1Testimonial-Avatar-04.png';
    import testimonial5 from '$lib/images/Testimonial-Avatar-03_1Testimonial-Avatar-03.png';
    import testimonial6 from '$lib/images/Testimonial-Avatar-02.png';
  
    import '$lib/vendor/css/normalize.css';
    import '$lib/vendor/css/webflow.css';
    import '$lib/vendor/css/bismuthos.webflow.css';
    import '../app.css';
  
    onMount(() => {
      const addScript = (src, onload=null) => {
        return new Promise((resolve, reject) => {
          const script = document.createElement('script');
          script.src = src;
          if(onload) {
            script.onload = () => {
              console.log(onload);
              onload();
              resolve(null);
            };
          } else {
            script.onload = () => resolve(null);
          }
  
          script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
          document.body.appendChild(script);
        });
      };
  
      const initializeWebflow = async () => {
        const jqueryScript = document.createElement('script');
        jqueryScript.src = 'https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=66e8dee2171ca3c335f1b257';
        jqueryScript.type = 'text/javascript';
        jqueryScript.integrity = 'sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=';
        jqueryScript.crossOrigin = 'anonymous';
  
        // Append the script to the head or body
        document.body.appendChild(jqueryScript);
  
        // Optionally, wait for the script to load before doing anything else
        jqueryScript.onload = async () => {
          console.log('jQuery has been loaded successfully.');
  
          try {
            await addScript('/webflow.js');
            await addScript('https://cdnjs.cloudflare.com/ajax/libs/prism/1.24.1/prism.min.js');
            await addScript('https://cdnjs.cloudflare.com/ajax/libs/prism/1.24.1/components/prism-bash.min.js');
            await addScript('https://cdnjs.cloudflare.com/ajax/libs/prism/1.24.1/components/prism-python.min.js');
          } catch (error) {
            console.error(error.message);
          }
        };
      };
  
      initializeWebflow();
    });
  
  </script>
    <div data-collapse="medium" data-animation="default" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" class="navbar w-nav">
      <div class="container-large !max-w-full !overflow-x-hidden">
        <div class="navigation-row">
          <div class="navigation-left">
            <a href="#" class="navigation-logo-link w-inline-block"><img loading="lazy" src={logo} alt="" class="navigation-logo"></a>
            <nav role="navigation" class="navigation-menu w-nav-menu">
              <div class="navigation-links">
                <a href="/pair-programming" class="navigation-link w-nav-link">Pair Programmer</a>
                <a href="/maintenance" class="navigation-link w-nav-link">Bug Fixer</a>
              </div>
            </nav>
          </div>
          <div class="navigation-right">
            <div class="navigation-menu-button w-nav-button">
              <div class="w-icon-nav-menu"></div>
            </div>
  
            <div class="z-10">
                      <a 
                          href="https://discord.gg/bismuthai" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          class="flex items-center gap-1 px-3 py-1.5 text-sm bg-[#5865F2] hover:bg-[#4752C4] text-white rounded-full transition-colors"
                      >
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 256 256" fill="currentColor" class="w-4 h-4">
                              <path d="M197.33,81.39a160.61,160.61,0,0,0-42.4-13.13.81.81,0,0,0-.86.41,110.44,110.44,0,0,0-4.86,10,147.47,147.47,0,0,0-44.4,0,110.44,110.44,0,0,0-4.86-10,.84.84,0,0,0-.86-.41,160.13,160.13,0,0,0-42.4,13.13.76.76,0,0,0-.35.3C21.66,123.08,10.83,163.66,14.73,203.83a.67.67,0,0,0,.25.46,162.47,162.47,0,0,0,48.86,24.7.84.84,0,0,0,.91-.3,115.52,115.52,0,0,0,10-16.26.82.82,0,0,0-.45-1.14,107.39,107.39,0,0,1-15.32-7.3.83.83,0,0,1-.08-1.38c1-.75,2-1.53,2.93-2.32a.81.81,0,0,1,.85-.11c31,14.11,64.46,14.11,95.13,0a.81.81,0,0,1,.86.11c.95.79,1.93,1.57,2.94,2.32a.83.83,0,0,1-.07,1.38,100.92,100.92,0,0,1-15.32,7.3.83.83,0,0,0-.44,1.14,129.57,129.57,0,0,0,10,16.26.83.83,0,0,0,.91.3,161.79,161.79,0,0,0,49-24.7.84.84,0,0,0,.25-.46c4.53-44.66-7.6-83.92-32.12-118.14A.67.67,0,0,0,197.33,81.39ZM85.34,175.16c-10.73,0-19.55-9.85-19.55-21.93s8.68-21.93,19.55-21.93,19.68,9.85,19.55,21.93C104.89,165.31,96.21,175.16,85.34,175.16Zm85.33,0c-10.73,0-19.55-9.85-19.55-21.93s8.68-21.93,19.55-21.93,19.68,9.85,19.55,21.93C190.22,165.31,181.4,175.16,170.67,175.16Z"/>
                          </svg>
                          Discord
                      </a>
                  </div>
          </div>
        </div>
      </div>
    </div>
    <AnimatedBackgroundWrapper>
    <section class="section-regular !max-w-full !overflow-x-hidden">
      <div class="container-large !mx-auto !px-4">
        <div  class="container-small w-full">
          <div class="text-align-center flex flex-col items-center justify-center">
            <div class="column-x-large column-center w-full max-w-4xl">
              <div class="column-large column-center text-center">
                <div class="column-regular column-center">
                  <h1 class="display-heading text-center">Bismuth <span class="text-span">ships</span> and <span class="text-span">fixes</span> code.</h1>
                </div>
                <div class="max-width-regular mx-auto">
                  <p class="paragraph-x-large text-color-gray-500 text-center">Bismuth is an AI coding agent that helps you tackle your backlog. It understands your codebase, follows your patterns, and works alongside you to ship code or asynchronously to find and fix bugs.</p>
                </div>

                <div class="mt-24">
                <h3 class="h2-heading">Explore Our Solutions</h3>
                <p class="paragraph-x-large text-color-gray-500 _18 center">Engineered by developers who understand the complexities of modern software development--delivering precision and efficiency.</p>
                <Pipeline currentStage={4} progress={[100, 100, 100, 100, 100]} currentPage={null} />
                </div>
                <div class="header-logos-wrapper">
                    <div class="header-logo-row !flex !justify-center !space-x-4">
                        <img src={amazonLogo} loading="lazy" alt="" class="logoheader">
                        <img src={zillowLogo} loading="lazy" alt="" class="logoheader">
                        <img src={googleLogo} loading="lazy" alt="" class="logoheader">
                    </div>
                </div>
            </div>
      </div>
  
    </section>
  </AnimatedBackgroundWrapper>