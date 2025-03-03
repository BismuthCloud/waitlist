<script lang="ts">
  export const csr = true;
  export const ssr = false;


  import GitHubMockUp from '$lib/components/GitHubMockUp.svelte';
  import AnimatedBackgroundWrapper from '$lib/components/AnimatedBackgroundWrapper.svelte';
  import ContactForm from '$lib/components/ContactForm.svelte';
  import ImageContainer from '$lib/components/ImageContainer.svelte';
  import ProgrammingButton from '$lib/components/ProgrammingButton.svelte';
  import ShareButton from '$lib/components/ShareButton.svelte';
  import DiscordButton from '$lib/components/DiscordButton.svelte';
  import IntegrationGrid from '$lib/components/IntegrationGrid.svelte';
  import SDKViz from '$lib/components/SDKViz.svelte';

	import { onMount } from 'svelte';
	import confetti from 'canvas-confetti';
  import logo from '$lib/images/bismuthos-logo.svg';
  import amazonLogo from '$lib/images/ant-design_amazon-square-filled.svg';
  import zillowLogo from '$lib/images/simple-icons_zillow.svg';
  import googleLogo from '$lib/images/uim_google.svg';
  import pr_review from '$lib/images/pr-review.png';
  import assignBismuth from '$lib/images/assign_bismuth.png';
  import linkIntegration from '$lib/images/link_integrations.png';
  import scanGrid from '$lib/images/scan_grid.png';
  import icon from '$lib/images/icon.svg';
  import icon1 from '$lib/images/icon-1.svg';
  import icon2 from '$lib/images/icon-2.svg';
  import installScreen from '$lib/images/install_screen.png';
  import openPR from '$lib/images/review_pr.png';
  import prFlow from '$lib/images/pr_flow.jpg';

  import '$lib/vendor/css/normalize.css';
  import '$lib/vendor/css/webflow.css';
  import '$lib/vendor/css/bismuthos.webflow.css';
  import '../app.css';

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

	// Get referral code from URL and check for existing waitlist cookie
	onMount(async () => {
		const urlParams = new URLSearchParams(window.location.search);
		const referralCode = urlParams.get('ref');
		if (referralCode) {
			referralUrl = referralCode;
		}

		// Check for existing waitlist cookie
		isLoadingCookie = true;
		error = null;
		try {
			const response = await fetch('/api/waitlist', {
				method: 'GET',
				headers: { 'Content-Type': 'application/json' }
			});
			const data = await response.json() as WaitlistResponse;
			
			if (!response.ok) {
				throw new Error(data.error || 'Failed to check waitlist status');
			}
			
			if (data.entry) {
				referralData = data.entry;
				success = true;
			}
		} catch (e) {
			error = e instanceof Error ? e.message : 'Failed to check waitlist status';
			success = false;
		} finally {
			isLoadingCookie = false;
		}
	});

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

</script>
  <div data-collapse="medium" data-animation="default" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" class="navbar w-nav">
    <div class="container-large !max-w-full !overflow-x-hidden">
      <div class="navigation-row">
        <div class="navigation-left">
          <a href="https://www.bismuth.sh" class="navigation-logo-link w-inline-block"><img loading="lazy" src={logo} alt="" class="navigation-logo"></a>
          <nav role="navigation" class="navigation-menu w-nav-menu">
            <div class="navigation-links">
              <a href="#features" class="navigation-link w-nav-link">Features</a>
              <a href="#quickstart" class="navigation-link w-nav-link">Quickstart</a>
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
    <section class="w-full overflow-x-hidden py-16 mt-16 bg-[#0A0C1B] relative z-10 bg-transparent">
      <div class="container mx-auto px-4 mt-8">
        <div class="max-w-7xl mx-auto">
          <div class="flex flex-col lg:flex-row justify-between items-center gap-8">
            <!-- Left Column: Text content -->
            <div class="lg:max-w-xl">
              <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
                Bismuth <span class="text-[#75E6DA]">tames</span> your overflowing backlog.
              </h2>
              
              <p class="text-lg text-gray-300 mb-6"> 
                Assign Bismuth to a Jira ticket or mention it on a GitHub issue and it will produce a quality PR that fixes bugs or implements a feature in minutes. 
                <br class="hidden md:block" />
                We run your tests, apply static analysis and leverage techniques like fuzzing to ensure a top quality code artifact.
              </p>
              
              <p class="text-sm text-gray-500 mb-8">
                Bismuth works best on Python and JavaScript (TypeScript) code bases. While we do support most languages, we are still in the process of ramping up analysis for languages like Go, Rust and Java. 
              </p>
              
              <a href="https://github.com/apps/bismuthdev" class="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-8 rounded-md transition-colors duration-200 text-center w-full md:w-auto">
                Install the GitHub App
              </a>
            </div>
            
            <!-- Right Column: GitHub Mockup - Increased size -->
            <div class="mt-12 lg:mt-auto lg:w-[600px] transform scale-110">
              <div class="relative p-4 lg:p-0">
                <span class="text-xs text-gray-500 absolute -top-6 left-4 lg:left-0">Example visualization</span>
                <GitHubMockUp class="w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Logos Section -->
      <div class="mt-24 mb-8">
        <div class="flex justify-center items-center flex-wrap gap-8 md:gap-12">
          <img src={amazonLogo} loading="lazy" alt="Amazon" class="h-6 md:h-8 opacity-70 hover:opacity-100 transition-opacity">
          <img src={zillowLogo} loading="lazy" alt="Zillow" class="h-6 md:h-8 opacity-70 hover:opacity-100 transition-opacity">
          <img src={googleLogo} loading="lazy" alt="Google" class="h-6 md:h-8 opacity-70 hover:opacity-100 transition-opacity">
        </div>
      </div>
    </section>
  </AnimatedBackgroundWrapper>


  <section class="section-large">
    <div id="features" class="container-large-2 pb-8">
      <div class="w-layout-grid title-grid mt-24">
        <div class="column-regular column-left fade">
          <div class="badge-large">
            <div>What We Do</div>
          </div>
          <h3 class="h2-heading">
Ship backlogged features and fix critical issues before they become a problem with an AI that understands your <span class="text-span-2">entire codebase</span>
          </h3>
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
              <h3 class="h3">Assign Bismuth to a ticket in Jira or mention it on a Github Issue</h3>
              <p class="paragraph-x-large text-color-gray-500 _18">Bismuth will pick up the work, provide updates on the ticket or issue as it works and then create a pull request for you. At this point a developer can pick it up like normal for review. We have proprietary code search and custom analysis solutions that ensure PRs are high quality without regressions.</p>
            </div>
            <a href="#quickstart" class="button-primary-large w-inline-block">
              <div>Learn more</div>
            </a>
          </div><div class="!overflow-hidden !max-w-full"><img src={prFlow} loading="eager" alt="" class="image-2 !max-w-full !w-auto !object-contain rounded-md"></div>
        </div>
        <div class="slide-2">
          <div class="div-block-4 left">
            <div class="div-block-5">
              <h3 class="h3">Have Bismuth scan your entire codebase for bugs and security issues.</h3>
              <p class="paragraph-x-large text-color-gray-500 _18">Using the same tech that powers our code generation we can scan your entire codebase for logic and security bugs before they effect customers in production.</p>
            </div>
          </div><div class="!overflow-hidden !max-w-full">
          <img src={scanGrid} loading="eager" alt="" class="image-2 !max-w-full !w-auto !object-contain rounded-md">
          </div>
        </div>
        <div class="slide-3">
          <div class="div-block-4 left">
            <div class="div-block-5">
              <h3 class="h3">Bismuth can catch critical issues in developer PRs before they're merged.</h3>
              <p class="paragraph-x-large text-color-gray-500 _18">Bismuth can leave comments for critical issues it finds when scanning developer PRs. We'll comment with suggested fixes, but never spam for nit picks.</p>
            </div>
          </div>
          <div class="!overflow-hidden !max-w-full"><img src={pr_review} loading="eager" alt="" class="image-2 !max-w-full !w-auto !object-contain rounded-md"></div>
        </div>
      </div>
    </div>
  </section>
  <section class="section-large-2 blue-ellypse">
    <div class="container-large-3">
      <div class="w-layout-grid title-grid-2 fade">
        <div class="column-regular column-left">
          <div class="badge-large blue">
            <div>How It Helps You</div>
          </div>
          <h3 class="h2-heading">Everyone is drowning in tech debt from competing demands, limited resources, and the constant pressure to deliver quickly.</h3>
          <p class="text-color-gray-500 _18">Bismuth helps ship more features and prevent more bugs and security issues so your team can go further and with the confidence there is a safety net.</p>
        </div>
      </div>
      <div class="column-x-large-2 fade">
        <div class="sticky-1">
          <div class="align-hor bottom vett">
            <h3 class="bigtitle">Bismuth helps quickly ship features and fixes.</h3>
            <p class="paragraph-x-large text-color-gray-500 _18">Every team has a bunch of features and tweaks customers have been asking for but are left behind because of limited bandwidth and competing priorities.</p>
          </div>
        </div>
        <div class="sticky-2">
          <img src="" loading="lazy" alt="" class="abs-image">
          <div class="align-hor bottom vett">
            <h3 class="bigtitle">Reviews aren't fool proof</h3>
            <p class="paragraph-x-large text-color-gray-500 _18 white">Bismuth acts as a second line of defense against bugs and security vulnerabilities that can cause financial harm and reputational damage. We reduce the time your developers spend fixing bugs and let them keep their focus on features.</p>
          </div>
        </div>
        <div class="sticky-3">
          <div class="align-hor bottom vett">
            <h3 class="bigtitle">You stay in control.</h3>
            <p class="paragraph-x-large text-color-gray-500 _18 white">Review and approve all changes before they're merged. Bismuth creates clean, atomic commits as part of pull requests with detailed messages explaining what changed and why.</p>
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
            <div>Integrated Into Common Workflows</div>
          </div>
          <h3 class="h2-heading">Bismuth is integrated with popular tools. Assign Bismuth a ticket and review its PRs like any other developer.</h3>
          <IntegrationGrid />
        </div>
        <div id="w-node-_934e175f-e164-777b-9304-d22acf947b7e-35f1b25d" class="div-block-6"></div>
      </div>
      <div class="column-x-large-2 grid fade">
        <div id="w-node-_8e961abb-3a04-9292-5f7b-60640b3cdded-35f1b25d" class="card-ai-1"><img src={icon1} loading="lazy" alt="" class="image-4">
          <div class="div-block-5">
            <h3 class="h3">Creates</h3>
            <p class="paragraph-x-large text-color-gray-500 _18">Bismuth can help you ship features and fix issues. It will create a PR like anybody else would.</p>
          </div>
        </div>
        <div id="w-node-ecbfbf86-70fd-9865-c400-8097f97e6ce7-35f1b25d" class="card-ai-1"><img src={icon} loading="lazy" alt="" class="image-4">
          <div class="div-block-5">
            <h3 class="h3">Reviews</h3>
            <p class="paragraph-x-large text-color-gray-500 _18">Bismuth only steps in to comment on a review if there are clear logical or security concerns given the context of the work.</p>
          </div>
        </div>
        <div id="w-node-bffdd33a-40ae-c482-4205-076bc6396025-35f1b25d" class="card-ai-1"><img src={icon2} loading="lazy" alt="" class="image-4">
          <div class="div-block-5">
            <h3 class="h3">Scans</h3>
            <p class="paragraph-x-large text-color-gray-500 _18">Bismuth is always checking your code base for new issues and will open pull requests to fix them when it finds them.</p>
          </div>
        </div>
      </div>
    <!-- SDK Section -->
<div class="mt-24 mb-12">
  <div class="flex flex-col lg:flex-row justify-between items-center gap-12">
    <div class="lg:max-w-xl">
      <div class="badge-large">
        <div>For Developers</div>
      </div>
      <h3 class="h2-heading mt-4">Build custom integrations with our SDK</h3>
      <p class="paragraph-x-large text-color-gray-500 _18">
        Extend Bismuth's capabilities to fit your specific workflow. Our SDK lets you create 
        custom integrations, automate complex processes, and embed Bismuth's intelligence directly 
        into your development tools.
      </p>
      <div class="mt-8">
        <a href="https://github.com/BismuthCloud/bismuthsdk" class="button-secondary-large">
          <span>Explore SDK Documentation</span>
        </a>
      </div>
    </div>
    
    <div class="lg:max-w-xl">
      <SDKViz />
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
          <p class="paragraph-x-large text-color-gray-500 _18 center">Bismuth is quick to install and get started with, just follow the steps below.</p>
        </div>
        <div id="w-node-_5dbc5ae6-dfc4-c4d6-f9d9-044fdca440d7-35f1b25d" class="div-block-6"></div>
      </div>

    <div class="process-wrapper">
      <div class="w-layout-grid process-grid">
        <div id="w-node-_14735d2d-4038-f439-be0b-22b20ca749e6-35f1b25d" class="process-image-wrapper fade">
            <ImageContainer src={installScreen} />
        </div>
        <div id="w-node-_14735d2d-4038-f439-be0b-22b20ca749e8-35f1b25d" class="process-line-wrapper">
          <div class="process-line first"></div>
          <div class="process-number">
            <div>1</div>
          </div>
        </div>
        <div id="w-node-_14735d2d-4038-f439-be0b-22b20ca749ed-35f1b25d" class="process-content fade">
          <div class="column-x-small">
            <h6 class="h3"><a class="text-blue-500 underline" href="https://github.com/apps/bismuthdev">Install</a> the Bismuth GitHub app and give it permissions.</h6>
          </div>
          <div class="button-group">
            <a id="copyBtn1" href="https://github.com/apps/bismuthdev" class="btn-secondary bg-blue-500 w-inline-block">
              <div class="text-block">Install The App</div>
            </a>
          </div>
        </div>
      </div>
      <div class="w-layout-grid process-grid">
        <div id="w-node-_14735d2d-4038-f439-be0b-22b20ca749f9-35f1b25d" class="process-content-end fade">
          <div class="column-x-small">
            <h6 class="h3"><a class=" text-blue-500 underline" href="https://app.bismuth.cloud/settings/integrations">Link</a> your task management. <br />(Or just use GitHub Issues)</h6>
          </div>
          <div class="button-group">
            <a id="copyBtn1" href="https://app.bismuth.cloud/settings/integrations" class="btn-secondary bg-blue-500 w-inline-block">
              <div class="text-block">Link Task Management</div>
            </a>
          </div>
        </div>
        <div id="w-node-_14735d2d-4038-f439-be0b-22b20ca74a01-35f1b25d" class="process-line-wrapper">
          <div class="process-line"></div>
          <div class="process-number">
            <div>2</div>
          </div>
        </div>
        <div id="w-node-_14735d2d-4038-f439-be0b-22b20ca74a06-35f1b25d" class="process-image-wrapper fade">
          <ImageContainer src={linkIntegration} />
          </div>
      </div>
      <div class="w-layout-grid process-grid">
        <div id="w-node-_14735d2d-4038-f439-be0b-22b20ca74a09-35f1b25d" class="process-image-wrapper">
          <ImageContainer src={assignBismuth} />
          </div>
        <div id="w-node-_14735d2d-4038-f439-be0b-22b20ca74a0b-35f1b25d" class="process-line-wrapper">
          <div class="process-line"></div>
          <div class="process-number">
            <div>3</div>
          </div>
        </div>
        <div id="w-node-_4cc89224-c561-311d-b795-bfa001a2a812-35f1b25d" class="process-content">
          <div class="column-x-small">
            <h6 class="h3"><span class="text-span-7">Assign</span> Bismuth to an issue and then it will pick up the work and produce a PR.</h6>
          </div>
        </div>
      </div>
      <div class="w-layout-grid process-grid">
        <div id="w-node-_62b429d7-ffb5-9bdb-249e-370f57597ea2-35f1b25d" class="process-content fade">
          <div class="column-x-small">
            <h6 class="h3"><span class="text-span-7">Review</span> and accept pull requests for issues Bismuth solves.</h6>
          </div>
        </div>
        <div id="w-node-_14735d2d-4038-f439-be0b-22b20ca74a24-35f1b25d" class="process-line-wrapper">
          <div class="process-line"></div>
          <div class="process-number">
            <div>4</div>
          </div>
        </div>
        <div id="w-node-_14735d2d-4038-f439-be0b-22b20ca74a29-35f1b25d" class="process-image-wrapper fade">
          <ImageContainer src={openPR} />
        </div>
      </div>
      <div class="w-layout-grid process-grid">
        <div id="w-node-c0906dc2-a4c3-a077-3caf-a6f02424505d-35f1b25d" class="process-image-wrapper fade">
        </div>
        <div id="w-node-c0906dc2-a4c3-a077-3caf-a6f02424505f-35f1b25d" class="process-line-wrapper">
          <div class="process-line first end"></div>
          </div>
        </div>
        <div id="w-node-c0906dc2-a4c3-a077-3caf-a6f024245064-35f1b25d" class="process-content fade">
        </div>
      </div>
    </div>
          <ProgrammingButton />
  </section>
  <section id="pricing" class="section-large pricing-section pt-2">
    <div class="container-large-3">
      <div class="w-layout-grid title-grid-2 full">
        <div class="column-regular column-left ce-ter fade column-margin">
          <div class="badge-large blue">
            <div>Pricing</div>
          </div>
          <h3 class="h2-heading">A Standard Usage Pricing</h3>
          <p class="paragraph-x-large text-color-gray-500 _18 center"></p>
        </div>
      </div>
      <div class="pricing-grid mx-auto">
        <div class="pricing-tier !bg-transparent">
          </div>
        <div class="pricing-tier">
          <h1 class="pricing-header">Cost For Everyone</h1>
          <span class="price">
            $1.5 / 100 Credits
          </span>
          <ul class="pricing-features">
            <li>1 task .approx 50-200 Credits</li>
            <li>1 review .approx 150 Credits</li>
            <li>1 scan .approx 800 Credits on a large (10k loc+) codebase</li>
            <li>100 credits is .approx 300k input + 10k output tokens</li>
          </ul>
            <a href="https://github.com/apps/bismuthdev" class="button-secondary-large !bg-blue-500 w-inline-block">
              <div>Install the GitHub App</div>
            </a>
        </div>
        <div class="pricing-tier">
          <h1 class="pricing-header">Enterprise</h1>
          <ul class="pricing-features">
            <li>Custom Integrations</li>
            <li>SSO and Compliance</li>
            <li>Custom SLAs</li>
            <li>Deploy In Your Cloud</li>
          </ul>
          <ContactForm transparent={true} subject="Enterprise Product Contact Form"/>
        </div>
        <div class="pricing-tier !bg-transparent">
          </div>
      </div>
    </div>
  </section>
  <section class="section-large-2">
  </section>
  <section class="footer">
    <div class="container-large-3">
      <div id="w-node-c01b6ecc-d9f2-b990-fc9f-55284d3da47d-35f1b25d" class="footer-card fade">
        <div class="column-x-large column-center">
          <h1 class="display-heading center">Ready to get started?</h1>
          <div class="max-width-regular">
            <p class="paragraph-x-large text-color-gray-500 cemter">Focus on your code, not the setup. Our AI-powered agent handles the rest.</p>
          </div>
          <div class="div-block-8">
            <a href="https://github.com/apps/bismuthdev" class="button-secondary-large w-inline-block">
              <div>Install the GitHub App</div>
            </a>
            <ContactForm transparent={true} subject="Product Contact Form"/>
          </div>
        </div>
        <div class="div-block-9">
          <div class="divider"></div>
          <div class="div-block-10">
            <p class="paragraph-small text-color-gray-600">Bismuth © 2025</p>
            <div class="div-block-11">
              <a href="https://www.privacypolicies.com/live/7dd85f3a-69ad-44e2-9836-7539533ad616" class="paragraph-small text-color-gray-600 link">Terms</a>
              <a href="https://www.privacypolicies.com/live/0427f571-c20b-43b8-b0f0-358ae4af43df" class="paragraph-small text-color-gray-600 link">Privacy Policy</a>
            </div>
            <p class="paragraph-small text-color-gray-600">Site by <a href="#" class="link">Vivido</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div class="full-code">
    <a data-w-id="dcca174b-49fe-8ab1-0b2d-01925e910eb5" href="#" class="button-primary-large copy-code round w-inline-block">
      <div class="icon w-embed"><svg width="420" height="420" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.0002 10.586L16.9502 5.63599L18.3642 7.04999L13.4142 12L18.3642 16.95L16.9502 18.364L12.0002 13.414L7.05023 18.364L5.63623 16.95L10.5862 12L5.63623 7.04999L7.05023 5.63599L12.0002 10.586Z" fill="currentColor"></path>
        </svg>
      </div>
    </a>
  </div>