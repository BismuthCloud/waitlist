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
  import '../../app.css';

	interface WaitlistEntry {
		email: string;
		referralCode: string;
		referralCount: number;
		hasAppAccess: boolean;
		hasRateLimit: boolean;
		hasCredit: boolean;
	}

	interface WaitlistResponse {
		entry?: WaitlistEntry;
		error?: string;
		stats?: WaitlistEntry;
	}

	interface TierInfo {
		count: number;
		benefit: string;
		description: string;
	}

	const tiers: TierInfo[] = [
		{ count: 3, benefit: "App Access", description: "Get immediate access to the app" },
		{ count: 6, benefit: "Rate Limits", description: "Increased API rate limits" },
		{ count: 9, benefit: "Credit", description: "$3 platform credit" }
	];

	let email = '';
	let isSubmitting = false;
	let error: string | null = null;
	let success = false;
	let referralData: WaitlistEntry | null = null;
	let referralUrl = '';
	let isLoadingCookie = false;

  const pythonCallgraph = [
    {
      name: "main",
      module: "__main__",
      description: "Entry point of the application",
      calls: ["initialize_app", "process_data"],
      returns: "int",
      depth: 0
    },
    {
      name: "initialize_app",
      module: "app.core",
      description: "Initializes application settings and configurations",
      calls: ["load_config", "setup_logging"],
      returns: "Config",
      depth: 1
    },
    {
      name: "process_data",
      module: "app.processing",
      description: "Processes input data and generates results",
      calls: ["validate_input", "transform_data", "save_results"],
      returns: "ProcessingResult",
      depth: 1
    },
  ];


  const messages = [
    {
      author: "Nick Gregory",
      content: "implement the thumbnail endpoint using pillow",
      authorColor: "#63ECFF"
    },
    {
      author: "Bismuth",
      content: "Certainly! I'll implement the thumbnail endpoint using Pillow, which is a powerful image processing library in Python. Let's go through the steps to implement this feature. First, we'll add Pillo",
      authorColor: "#FFB71A"
    }
  ];

  onMount(() => {
    const button = document.querySelector('#install-cli-btn');
    button.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelector('#quickstart').scrollIntoView({ behavior: 'smooth' });
    });
  })

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

	const getNextTier = (count: number): TierInfo | null => {
		return tiers.find(tier => tier.count > count) || null;
	};

	const getProgressToNextTier = (count: number): number => {
		const nextTier = getNextTier(count);
		if (!nextTier) return 100;
		const prevTier = tiers[tiers.findIndex(t => t === nextTier) - 1];
		const start = prevTier ? prevTier.count : 0;
		return ((count - start) / (nextTier.count - start)) * 100;
	};

	const fireConfetti = () => {
		const count = 200;
		const defaults = { origin: { y: 0.7 }, zIndex: 1000 };
		function fire(particleRatio: number, opts: any) {
			confetti({ ...defaults, ...opts, particleCount: Math.floor(count * particleRatio) });
		}
		fire(0.25, { spread: 26, startVelocity: 55, colors: ['#ec4899', '#c084fc', '#f472b6'] });
		fire(0.2, { spread: 60, colors: ['#ec4899', '#c084fc', '#f472b6'] });
		fire(0.35, {
			spread: 100,
			decay: 0.91,
			scalar: 0.8,
			colors: ['#ec4899', '#c084fc', '#f472b6']
		});
		fire(0.1, {
			spread: 120,
			startVelocity: 25,
			decay: 0.92,
			scalar: 1.2,
			colors: ['#ec4899', '#c084fc', '#f472b6']
		});
		fire(0.1, { spread: 120, startVelocity: 45, colors: ['#ec4899', '#c084fc', '#f472b6'] });
	};

	const handleSubmit = async () => {
		isSubmitting = true;
		error = null;
		success = false;
		try {
			const response = await fetch('/api/waitlist', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ 
					email,
					referralCode: referralUrl 
				})
			});
			const data = await response.json() as WaitlistResponse;
			if (!response.ok) {
				// Handle "email already registered" case by showing their stats
				if (data.stats) {
					success = true;
					referralData = data.stats;
					email = '';
				} else {
					throw new Error(data.error || 'Failed to submit');
				}
			} else {
				success = true;
				referralData = data.entry;
				email = '';
				fireConfetti();
			}
		} catch (e) {
			error = e instanceof Error ? e.message : 'Something went wrong';
		} finally {
			isSubmitting = false;
		}
	};
</script>
  <div data-collapse="medium" data-animation="default" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" class="navbar w-nav">
    <div class="container-large !max-w-full !overflow-x-hidden">
      <div class="navigation-row">
        <div class="navigation-left">
          <a href="#" class="navigation-logo-link w-inline-block"><img loading="lazy" src={logo} alt="" class="navigation-logo"></a>
          <nav role="navigation" class="navigation-menu w-nav-menu">
            <div class="navigation-links">
              <a href="#features" class="navigation-link w-nav-link">Features</a>
              <a href="#quickstart" class="navigation-link w-nav-link">Quickstart</a>
              <a href="#testimonial" class="navigation-link w-nav-link">Testimonials</a>
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
                <h2 class="display-heading-smaller center text-center">Your AI pair programmer that <span class="text-span"> ships code</span></h2>
              </div>
              <div class="max-width-regular mx-auto">
                <p class="paragraph-x-large text-color-gray-500 text-center">Bismuth is an AI coding agent that helps you tackle your backlog. It understands your codebase, follows your patterns, and works alongside you to get more done.</p>
              </div>

    <video 
  controls
  autoplay
  muted
  loop
  class="w-full rounded-lg shadow-lg"
  poster="/bismuth_develop_thumb.png"
>
  <source src="/bismuth_develop.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
        <div class="mx-auto max-w-md space-y-4">
          <a id="install-cli-btn" href="#quickstart" class="button-secondary-large mt-12 btn-primary btn w-inline-block px-8 text-lg">
            <div>Install the CLI</div>
          </a>
          <a id="docs-button" href="/pair-programming/docs" class="button-outline-large mt-12 w-inline-block px-8 text-lg">
            <div>View Docs</div>
          </a>
			</div>
            </div>		
        </div>
      </div>
      <div class="header-logos-wrapper">
        <div class="header-logo-row !flex !justify-center !space-x-4"><img src={amazonLogo} loading="lazy" alt="" class="logoheader"><img src={zillowLogo} loading="lazy" alt="" class="logoheader"><img src={googleLogo} loading="lazy" alt="" class="logoheader"></div>
      </div>
    </div>

  </section>
</AnimatedBackgroundWrapper>
  <section class="section-large-2 blue-ellypse">
      <div class="container-large-3">
        <div class="w-layout-grid title-grid-2 full">
            <div class="column-regular column-left ce-ter fade column-margin">
              <div class="badge-large blue">
                <div>Products</div>
              </div>
              <h3 class="h2-heading">Explore Our Other Solutions</h3>
              <p class="paragraph-x-large text-color-gray-500 _18 center">Engineered by developers who understand the complexities of modern software development--delivering precision and efficiency.</p>
            </div>
        </div>
        <Pipeline currentStage={4} progress={[100, 100, 100, 100, 100]} currentPage="development" />
      </div>
    </section>


  <section class="section-large">
    <div id="features" class="container-large-2">
      <div class="w-layout-grid title-grid mt-24">
        <div class="column-regular column-left fade">
          <div class="badge-large">
            <div>Our Benefits</div>
          </div>
          <h3 class="h2-heading">Clear your backlog with an AI that understands your <span class="text-span-2">entire codebase</span></h3>
        </div>
      </div>

      <div class="column-x-large fade">
        <div class="div-block-paired-programming mt-2">
          <div id="w-node-_062ff97b-6130-4051-4384-2b71fbe42f18-35f1b25d" class="desktop left">
            <div id="w-node-_0cd4b5f4-bf12-0570-aca3-d185a341705e-35f1b25d" data-w-id="0cd4b5f4-bf12-0570-aca3-d185a341705e" class="arrow3back icon">
              <div class="icon-4 w-embed"><svg width="420" height="420" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.828 12L15.778 16.95L14.364 18.364L8 12L14.364 5.63599L15.778 7.04999L10.828 12Z" fill="currentColor"></path>
                </svg>
              </div>
            </div>
            <div id="w-node-_6d64328d-ee52-1422-06de-10b7d6a4ae67-35f1b25d" data-w-id="6d64328d-ee52-1422-06de-10b7d6a4ae67" class="arrow2back icon">
              <div class="icon-4 w-embed"><svg width="420" height="420" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.828 12L15.778 16.95L14.364 18.364L8 12L14.364 5.63599L15.778 7.04999L10.828 12Z" fill="currentColor"></path>
                </svg>
              </div>
            </div>
            <div id="w-node-_98962118-092f-58cd-3975-2bb2d5b72b5d-35f1b25d" data-w-id="98962118-092f-58cd-3975-2bb2d5b72b5d" class="arrow1back icon">
              <div class="icon-4 w-embed"><svg width="420" height="420" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.828 12L15.778 16.95L14.364 18.364L8 12L14.364 5.63599L15.778 7.04999L10.828 12Z" fill="currentColor"></path>
                </svg>
              </div>
            </div>
            <div id="w-node-b9c7b09a-0ddd-5690-fcb2-37621d93380e-35f1b25d" class="arrow0back icon">
              <div class="icon-4 w-embed"><svg width="420" height="420" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.828 12L15.778 16.95L14.364 18.364L8 12L14.364 5.63599L15.778 7.04999L10.828 12Z" fill="currentColor"></path>
                </svg>
              </div>
            </div>
          </div>
          <div id="w-node-a4b54b76-18e8-4629-ba77-af461e87aa55-35f1b25d" class="div-block-2 _1"></div>
          <div id="w-node-_7d8c146f-0f85-3a98-3815-7e5d8c800522-35f1b25d" class="div-block-2 _2"></div>
          <div id="w-node-_9fc26a8d-7b33-12f1-1ad4-f0bf8a67d7b5-35f1b25d" class="div-block-2 _3"></div>
          <div id="w-node-e5cc3c18-0e2e-06de-aeae-6fe7a1bc1249-35f1b25d" class="desktop">
            <div id="w-node-e5cc3c18-0e2e-06de-aeae-6fe7a1bc124a-35f1b25d" data-w-id="e5cc3c18-0e2e-06de-aeae-6fe7a1bc124a" class="arrow2 icon">
              <div class="icon-5 w-embed"><svg width="420" height="420" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.1722 12L8.22217 7.04999L9.63617 5.63599L16.0002 12L9.63617 18.364L8.22217 16.95L13.1722 12Z" fill="currentColor"></path>
                </svg>
              </div>
            </div>
            <div id="w-node-_04bfa171-b2e8-e3f7-9c0a-55f558c6c04e-35f1b25d" data-w-id="04bfa171-b2e8-e3f7-9c0a-55f558c6c04e" class="arrow3 icon">
              <div class="icon-5 w-embed"><svg width="420" height="420" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.1722 12L8.22217 7.04999L9.63617 5.63599L16.0002 12L9.63617 18.364L8.22217 16.95L13.1722 12Z" fill="currentColor"></path>
                </svg>
              </div>
            </div>
            <div id="w-node-_03b7da76-f3c2-4fe7-4725-1711719c3fd0-35f1b25d" data-w-id="03b7da76-f3c2-4fe7-4725-1711719c3fd0" class="arrow4 icon">
              <div class="icon-5 w-embed"><svg width="420" height="420" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.1722 12L8.22217 7.04999L9.63617 5.63599L16.0002 12L9.63617 18.364L8.22217 16.95L13.1722 12Z" fill="gray"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div class="slide-1">
          <div class="div-block-4 left">
            <div class="div-block-5">
              <h3 class="h3">Works alongside you or independently</h3>
              <p class="paragraph-x-large text-color-gray-500 _18">Pair program with Bismuth in your terminal or let it work on tasks while you focus on other priorities. It learns your patterns and maintains code consistency.</p>
            </div>
            <a href="#quickstart" class="button-primary-large w-inline-block">
              <div>Learn more</div>
            </a>
          </div><div class="!overflow-hidden !max-w-full"><img src={bismuthInTerm} loading="eager" alt="" class="image-2 !max-w-full !w-auto !object-contain rounded-md"></div>
        </div>
        <div class="slide-2">
          <div class="div-block-4 left">
            <div class="div-block-5">
              <h3 class="h3">Understands your entire codebase</h3>
              <p class="paragraph-x-large text-color-gray-500 _18">Bismuth analyzes your project structure, dependencies, and coding patterns to write code that fits seamlessly with your existing work.</p>
            </div>
          </div><div class="!overflow-hidden !max-w-full">
            <Callgraph callgraph={pythonCallgraph} />
          </div>
        </div>
        <div class="slide-3">
          <div class="div-block-4 left">
            <div class="div-block-5">
              <h3 class="h3">Self-testing and verification</h3>
              <p class="paragraph-x-large text-color-gray-500 _18">Every code change is tested against your existing test suite and build process. Bismuth verifies its own work before submitting changes.</p>
            </div>
          </div><div class="!overflow-hidden !max-w-full"><img src={bismuthRunBuild} loading="eager" alt="" class="image-2 !max-w-full !w-auto !object-contain rounded-md"></div>
        </div>
      </div>
    </div>
  </section>
  <section class="section-large-2 blue-ellypse">
    <div class="container-large-3">
      <div class="w-layout-grid title-grid-2 fade">
        <div class="column-regular column-left">
          <div class="badge-large blue">
            <div>Technical Capabilities</div>
          </div>
          <h3 class="h2-heading"><span class="text-span-3">Ship More</span> With Less Effort</h3>
          <p class="paragraph-x-large text-color-gray-500 _18">Let Bismuth handle your backlog while you focus on high-priority tasks. From feature development to bug fixes, our AI agent works efficiently in your codebase to help you ship more code.</p>
        </div>
      </div>
      <div class="column-x-large-2 fade">
        <div class="sticky-1">
          <div class="align-hor bottom vett">
            <h3 class="bigtitle">You need to clear your backlog.</h3>
            <p class="paragraph-x-large text-color-gray-500 _18">Bismuth works on multiple tasks in parallel, helping you tackle that growing list of features and fixes that keep getting deprioritized.</p>
          </div>
        </div>
        <div class="sticky-2">
          <img src="" loading="lazy" alt="" class="abs-image">
          <div class="align-hor bottom vett">
            <h3 class="bigtitle">You need code that fits.</h3>
            <p class="paragraph-x-large text-color-gray-500 _18 white">Bismuth analyzes your entire codebase to understand patterns and architecture, ensuring new code maintains your project's standards and style.</p>
          </div>
        </div>
        <div class="sticky-3">
          <div class="align-hor bottom vett">
            <h3 class="bigtitle">You stay in control.</h3>
            <p class="paragraph-x-large text-color-gray-500 _18 white">Review and approve all changes before they're committed. Bismuth creates clean, atomic commits with detailed messages explaining what changed and why.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="section-large-2 purple">
    <div class="container-large-3">
      <div class="w-layout-grid title-grid-2 full">
        <div class="column-regular column-left ce-ter fade column-margin">
          <div class="badge-large blue">
            <div>Advanced AI Development</div>
          </div>
          <h3 class="h2-heading">Intelligent Code Transformation: <br><span class="text-span-4">Beyond Traditional Development</span></h3>
        </div>
        <div id="w-node-_934e175f-e164-777b-9304-d22acf947b7e-35f1b25d" class="div-block-6"></div>
      </div>
      <div class="column-x-large-2 grid fade">
        <div id="w-node-ecbfbf86-70fd-9865-c400-8097f97e6ce7-35f1b25d" class="card-ai-1"><img src={icon} loading="lazy" alt="" class="image-4">
          <div class="div-block-5">
            <h3 class="h3">Seamless Version Control Integration</h3>
            <p class="paragraph-x-large text-color-gray-500 _18">Advanced Git integration that understands your project's context. Propose commits directly to the repository with intelligent, context-aware recommendations.</p>
          </div>
        </div>
        <div id="w-node-bffdd33a-40ae-c482-4205-076bc6396025-35f1b25d" class="card-ai-1"><img src={icon1} loading="lazy" alt="" class="image-4">
          <div class="div-block-5">
            <h3 class="h3">Autonomous Code Refinement</h3>
            <p class="paragraph-x-large text-color-gray-500 _18">Leveraging state-of-the-art machine learning to analyze, validate, and self-correct code. Provides transparent feedback and ensures high-quality, reliable code generation.</p>
          </div>
        </div>
        <div id="w-node-_8e961abb-3a04-9292-5f7b-60640b3cdded-35f1b25d" class="card-ai-1"><img src={icon2} loading="lazy" alt="" class="image-4">
          <div class="div-block-5">
            <h3 class="h3">Intelligent Issue Resolution</h3>
            <p class="paragraph-x-large text-color-gray-500 _18">Advanced AI-powered issue tracking and resolution. Automatically diagnose, implement, and resolve complex development challenges with unprecedented precision.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="quickstart" class="section-large-2">
    <div class="container-large-3">
      <div class="w-layout-grid title-grid-2 full">
        <div class="column-regular column-left ce-ter fade column-margin">
          <div class="badge-large">
            <div>Technical Workflow</div>
          </div>
          <h3 class="h2-heading">Quickstart</h3>
          <p class="paragraph-x-large text-color-gray-500 _18 center">Get started with Bismuth in 2 minutes.</p>
        </div>
        <div id="w-node-_5dbc5ae6-dfc4-c4d6-f9d9-044fdca440d7-35f1b25d" class="div-block-6"></div>
      </div>

    <div class="process-wrapper">
      <div class="w-layout-grid process-grid">
        <div id="w-node-_14735d2d-4038-f439-be0b-22b20ca749e6-35f1b25d" class="process-image-wrapper fade">
                <Terminal 
  title="nickgregory@MBP:~"
  content="npx bismuthcli install"
/>
        </div>
        <div id="w-node-_14735d2d-4038-f439-be0b-22b20ca749e8-35f1b25d" class="process-line-wrapper">
          <div class="process-line first"></div>
          <div class="process-number">
            <div>1</div>
          </div>
        </div>
        <div id="w-node-_14735d2d-4038-f439-be0b-22b20ca749ed-35f1b25d" class="process-content fade">
          <div class="column-x-small">
            <h6 class="h3"><span class="text-span-5">Install</span> the CLI tool.</h6>
          </div>
          <div class="button-group">
            <a id="copyBtn1" href="/pair-programming/docs" class="button-secondary-large w-inline-block">
              <div class="text-block">View CLI Guide</div>
              <div class="icon w-embed"><svg width="420" height="420" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 6V3C7 2.73478 7.10536 2.48043 7.29289 2.29289C7.48043 2.10536 7.73478 2 8 2H20C20.2652 2 20.5196 2.10536 20.7071 2.29289C20.8946 2.48043 21 2.73478 21 3V17C21 17.2652 20.8946 17.5196 20.7071 17.7071C20.5196 17.8946 20.2652 18 20 18H17V21C17 21.552 16.55 22 15.993 22H4.007C3.87513 22.0008 3.7444 21.9755 3.62232 21.9256C3.50025 21.8757 3.38923 21.8022 3.29566 21.7093C3.20208 21.6164 3.12779 21.5059 3.07705 21.3841C3.02632 21.2624 3.00013 21.1319 3 21L3.003 7C3.003 6.448 3.453 6 4.01 6H7ZM5.003 8L5 20H15V8H5.003ZM9 6H17V16H19V4H9V6Z" fill="currentColor"></path>
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div class="w-layout-grid process-grid">
        <div id="w-node-_14735d2d-4038-f439-be0b-22b20ca749f9-35f1b25d" class="process-content-end fade">
          <div class="column-x-small text-right">
            <h6 class="h3"><span class="text-span-6">Login</span> to Bismuth.</h6>
          </div>
        </div>
        <div id="w-node-_14735d2d-4038-f439-be0b-22b20ca74a01-35f1b25d" class="process-line-wrapper">
          <div class="process-line"></div>
          <div class="process-number">
            <div>2</div>
          </div>
        </div>
        <div id="w-node-_14735d2d-4038-f439-be0b-22b20ca74a06-35f1b25d" class="process-image-wrapper fade">
                <Terminal 
                  title="nickgregory@MBP:~"
                  content="biscli login" />
        </div>
      </div>
      <div class="w-layout-grid process-grid">
        <div id="w-node-_14735d2d-4038-f439-be0b-22b20ca74a09-35f1b25d" class="process-image-wrapper">
            <Terminal 
              title="nickgregory@MBP:~"
              content="biscli import . # Make sure you're in the project you want to work on." />
        </div>
        <div id="w-node-_14735d2d-4038-f439-be0b-22b20ca74a0b-35f1b25d" class="process-line-wrapper">
          <div class="process-line"></div>
          <div class="process-number">
            <div>3</div>
          </div>
        </div>
        <div id="w-node-_4cc89224-c561-311d-b795-bfa001a2a812-35f1b25d" class="process-content">
          <div class="column-x-small">
            <h6 class="h3"><span class="text-span-7">Import</span> your project.</h6>
          </div>
        </div>
      </div>
      <div class="w-layout-grid process-grid">
        <div id="w-node-_62b429d7-ffb5-9bdb-249e-370f57597ea2-35f1b25d" class="process-content-end fade">
          <div class="column-x-small">
            <h6 class="h3"><span class="text-span-7">Add</span> some credits.</h6>
            (Every account starts with 100 credits)
          </div>
        </div>
        <div id="w-node-_14735d2d-4038-f439-be0b-22b20ca74a24-35f1b25d" class="process-line-wrapper">
          <div class="process-line"></div>
          <div class="process-number">
            <div>4</div>
          </div>
        </div>
        <div id="w-node-_14735d2d-4038-f439-be0b-22b20ca74a29-35f1b25d" class="process-image-wrapper fade">
                <Terminal 
  title="nickgregory@MBP:~"
  content="biscli billing refill"
/>
        </div>
      </div>
      <div class="w-layout-grid process-grid">
        <div id="w-node-c0906dc2-a4c3-a077-3caf-a6f02424505d-35f1b25d" class="process-image-wrapper fade flex flex-col">
          <Terminal 
          title="nickgregory@MBP:~"
          content="biscli chat"
        />
          <Chat {messages} />
        </div>
        <div id="w-node-c0906dc2-a4c3-a077-3caf-a6f02424505f-35f1b25d" class="process-line-wrapper">
          <div class="process-line first end"></div>
          <div class="process-number">
            <div>5</div>
          </div>
        </div>
        <div id="w-node-c0906dc2-a4c3-a077-3caf-a6f024245064-35f1b25d" class="process-content fade">
          <div class="column-x-small">
            <h6 class="h3"><span class="text-span-7">Build</span> with Bismuth.</h6>
          </div>
        </div>
      </div>
    </div>
    </div>
  </section>
  <section id="pricing" class="section-large pricing-section">
    <div class="container-large-3">
      <div class="w-layout-grid title-grid-2 full">
        <div class="column-regular column-left ce-ter fade column-margin">
          <div class="badge-large blue">
            <div>Pricing</div>
          </div>
          <h3 class="h2-heading">Flexible Plans for Every Developer</h3>
          <p class="paragraph-x-large text-color-gray-500 _18 center">Scale your AI development capabilities with precision and control.</p>
        </div>
      </div>
      <div class="pricing-grid-pair-programming flex flex-col sm:grid">
        <div class="pricing-tier">
          <h1 class="pricing-header">Individual</h1>
          <span class="price">
            $1.50 / 100 Credits
          </span>
          <br/>
          (100 credits = ~3-4 Commits)
          <br/>
          <br/>
          <ul class="pricing-features">
            <li>CLI Tool</li>
            <li>Discord Support</li>
          </ul>
          <div>
                <Terminal 
  title="nickgregory@MBP:~"
  content="npx bismuthcli install && biscli billing refill"
/>
          </div>
        </div>
        <div class="pricing-tier">
          <h1 class="pricing-header">Team</h1>
          <span class="price">
            Contact Us
            </span>
          <br/>
          <br/>
          <ul class="pricing-features">
            <li>Custom Integrations</li>
            <li>SSO</li>
            <li>Slack Integration</li>
          </ul>
          <ContactForm subject={"Team Contact Form"}/>
        </div>
      </div>
    </div>
  </section>
  <section id="testimonial" class="section-large-2">
    <div class="container-large-3">
      <div class="w-layout-grid title-grid-2 full">
        <div class="column-regular column-left ce-ter fade column-margin">
          <div class="badge-large white">
            <div>Testimonials</div>
          </div>
          <h3 class="h2-heading maxw">What Developers Are Saying</h3>
        </div>
      </div>
      <div class="w-layout-grid grid-two-column fade">
        <div id="w-node-_070fbda4-0e86-b6d9-449f-02add22f48ad-35f1b25d" class="testimonial-card">
          <div class="column-x-large-3 column-left">
            <div class="testimonial-avatar"><img loading="lazy" src={testimonial1} alt="" class="image-cover"></div>
            <div>
              <div class="h4-heading text-color-gray-800">"</div>
              <h5 class="h4-heading text-color-gray-300">It's so nice being able to sit down for a couple hours and tear through a backlog of projects</h5>
            </div>
          </div>
          <div class="column-tiny-3">
            <div class="subheading-large">Kyle Martin</div>
            <p class="paragraph-small text-color-gray-600">Engineer - Vector 35</p>
          </div>
        </div>
        <div id="w-node-_070fbda4-0e86-b6d9-449f-02add22f48bb-35f1b25d" class="column-large">
        </div>
      </div>
    </div>
  </section>
  <section class="footer">
    <div class="container-large-3">
      <div class="footer-card fade">
        <div class="column-x-large column-center">
          <h1 class="display-heading center">Ready to get started?</h1>
          <div class="max-width-regular">
            <p class="paragraph-x-large text-color-gray-500 cemter">Focus on your code, not the setup. Our AI-powered agent handle the rest.</p>
          </div>
          <div class="div-block-8">
            <a href="#quickstart" class="button-secondary-large w-inline-block">
              <div>Try Bismuth</div>
            </a>
              <ContactForm subject={"Footer Contact Form"} transparent/>
          </div>
        </div>
        <div class="div-block-9">
          <div class="divider"></div>
          <div class="div-block-10">
            <p class="paragraph-small text-color-gray-600">(c)2024</p>
            <div class="div-block-11">
              <a href="#" class="paragraph-small text-color-gray-600 link">Terms</a>
              <a href="#" class="paragraph-small text-color-gray-600 link">Privacy Policy</a>
            </div>
            <p class="paragraph-small text-color-gray-600">Site by <a href="#" class="link">Vivido</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>