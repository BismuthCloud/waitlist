<script lang="ts">
    export const ssr = false;
    export const csr = true;
   
    import DiscordButton from '$lib/components/DiscordButton.svelte';
    import ShareButton from '$lib/components/ShareButton.svelte';
    import Pipeline from '$lib/components/Pipeline.svelte';
    import AnimatedBackgroundWrapper from '$lib/components/AnimatedBackgroundWrapper.svelte';

  
      import { onMount } from 'svelte';

    import logo from '$lib/images/bismuthos-logo.svg';
    import amazonLogo from '$lib/images/ant-design_amazon-square-filled.svg';
    import zillowLogo from '$lib/images/simple-icons_zillow.svg';
    import googleLogo from '$lib/images/uim_google.svg';


  
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
            <a href="http://www.bismuth.sh" class="navigation-logo-link w-inline-block"><img loading="lazy" src={logo} alt="" class="navigation-logo"></a>
            <nav role="navigation" class="navigation-menu w-nav-menu">
              <div class="navigation-links">
                <a href="/pair-programming" class="navigation-link w-nav-link">Pair Programmer</a>
                <a href="/maintenance" class="navigation-link w-nav-link">Bug Fixer</a>
              </div>
            </nav>
          </div>
          <div class="navigation-right">
            <ShareButton />
            <DiscordButton />
            <div class="navigation-menu-button w-nav-button">
              <div class="w-icon-nav-menu"></div>
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
                <p class="text-color-gray-500">Engineered by developers who understand the complexities of modern software development--delivering precision and efficiency.</p>
                <Pipeline currentStage={4} progress={[100, 100, 100, 100, 100]} currentPage={null} />
                </div>
                <div class="header-logos-wrapper mt-6">
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