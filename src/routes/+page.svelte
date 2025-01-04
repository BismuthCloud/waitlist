<script lang="ts">
  export const csr = true;
  export const ssr = false;


  import Pipeline from '$lib/components/Pipeline.svelte';  
  import GitHubMockUp from '$lib/components/GitHubMockUp.svelte';
  import AnimatedBackgroundWrapper from '$lib/components/AnimatedBackgroundWrapper.svelte';
  import ContactForm from '$lib/components/ContactForm.svelte';
  import ImageContainer from '$lib/components/ImageContainer.svelte';
  import ProgrammingButton from '$lib/components/ProgrammingButton.svelte';

	import { onMount } from 'svelte';
	import confetti from 'canvas-confetti';
  import logo from '$lib/images/bismuthos-logo.svg';
  import amazonLogo from '$lib/images/ant-design_amazon-square-filled.svg';
  import zillowLogo from '$lib/images/simple-icons_zillow.svg';
  import googleLogo from '$lib/images/uim_google.svg';
  import pr_review from '$lib/images/pr-review.png';
  import code2 from '$lib/images/code2.svg';
  import screen from '$lib/images/screen.svg';
  import icon from '$lib/images/icon.svg';
  import icon1 from '$lib/images/icon-1.svg';
  import icon2 from '$lib/images/icon-2.svg';
  import installScreen from '$lib/images/install_screen.png';
  import openPR from '$lib/images/open_pr.png';
  import createPR from '$lib/images/create_pr.png';

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
          <a href="#" class="navigation-logo-link w-inline-block"><img loading="lazy" src={logo} alt="" class="navigation-logo"></a>
          <nav role="navigation" class="navigation-menu w-nav-menu">
            <div class="navigation-links">
              <a href="#features" class="navigation-link w-nav-link">Features</a>
              <a href="#how-it-works" class="navigation-link w-nav-link">How it works</a>
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
            <div  style="opacity:1" class="column-large column-center text-center">
              <div class="column-regular column-center">
                <h2 class="display-heading center text-center">Your AI colleague that catches <span class="text-span">critical issues</span> before they ship.</h2>
              </div>
              <div class="max-width-regular mx-auto">
                <p class="paragraph-x-large text-color-gray-500 text-center">Bismuth works on Python and JavaScript (TypeScript) code bases. It periodically scans your code base and autonomously finds and fixes bugs. It also leaves review comments on pull requests when it finds critical bugs and then provides inline suggested fixes.</p>
            </div>		
        </div>
      </div>

    <GitHubMockUp />
					<a href="https://github.com/apps/bismuthdev" class="btn-primary whitespace-nowrap mt-16">
            <span>Install the GitHub App</span>
          </a>
    </div>
    <div  style="opacity:1" class="header-logos-wrapper">
      <div class="header-logo-row !flex !justify-center !space-x-4"><img src={amazonLogo} loading="lazy" alt="" class="logoheader"><img src={zillowLogo} loading="lazy" alt="" class="logoheader"><img src={googleLogo} loading="lazy" alt="" class="logoheader"></div>
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
      <Pipeline currentStage={4} progress={[100, 100, 100, 100, 100]} currentPage="maintenance" />
    </div>
  </section>

  <section class="section-large">
    <div id="features" class="container-large-2">
      <div class="w-layout-grid title-grid mt-24">
        <div class="column-regular column-left fade">
          <div class="badge-large">
            <div>Our Benefits</div>
          </div>
          <h3 class="h2-heading">Fix critical issues before they become a problem with an AI that understands your <span class="text-span-2">entire codebase</span></h3>
        </div>
      </div>

      <div class="column-x-large fade">
        <div class="slide-1">
          <div class="div-block-4 left">
            <div class="div-block-5">
              <h3 class="h3">Catch issues before they're merged.</h3>
              <p class="paragraph-x-large text-color-gray-500 _18">Bismuth can leave comments for critical issues with suggested fixes as they review your pull request.</p>
            </div>
            <a href="#how-it-works" class="button-primary-large w-inline-block">
              <div>Learn more</div>
            </a>
          </div><div class="!overflow-hidden !max-w-full"><img src={pr_review} loading="eager" alt="" class="image-2 !max-w-full !w-auto !object-contain"></div>
        </div>
        <div class="slide-2">
          <div class="div-block-4 left">
            <div class="div-block-5">
              <h3 class="h3">Works around the clock.</h3>
              <p class="paragraph-x-large text-color-gray-500 _18">Bismuth periodically scans your code base for issues that are live in production. We then open pull requests that outline the issue and provide a fix.</p>
            </div>
          </div><div class="!overflow-hidden !max-w-full"><img src={code2} loading="eager" alt="" class="image-2 _2 !max-w-full !w-auto !object-contain"></div>
        </div>
        <div class="slide-3">
          <div class="div-block-4 left">
            <div class="div-block-5">
              <h3 class="h3">Self-testing and verification</h3>
              <p class="paragraph-x-large text-color-gray-500 _18">Every code change is tested against your existing test suite and build process. Bismuth verifies its own work before submitting changes.</p>
            </div>
          </div><div class="!overflow-hidden !max-w-full"><img src={screen} loading="eager" alt="" class="image-2 !max-w-full !w-auto !object-contain"></div>
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
          <h3 class="h2-heading">Bug fixing, quality, and security go hand in hand.</h3>
          <p class="paragraph-x-large text-color-gray-500 _18">Bismuth acts as a second line of defense against bugs that can cause financial harm and reputational damage. We reduce the time your developers spend fixing bugs and let them keep their focus on features.</p>
        </div>
      </div>
      <div class="column-x-large-2 fade">
        <div class="sticky-1">
          <div class="align-hor bottom vett">
            <h3 class="bigtitle">Bismuth goes beyond security critical bugs.</h3>
            <p class="paragraph-x-large text-color-gray-500 _18">Bismuth not only detects bugs that effect scurity which can have direct financial implications, but also unintended logic bugs which could cause reputational harm and slow development.</p>
          </div>
        </div>
        <div class="sticky-2">
          <img src="" loading="lazy" alt="" class="abs-image">
          <div class="align-hor bottom vett">
            <h3 class="bigtitle">Bismuth works on your entire codebase.</h3>
            <p class="paragraph-x-large text-color-gray-500 _18 white">Bismuth analyzes your entire codebase when checking pull requests so we can detect issues surrounding changes not just the changes themselves.</p>
          </div>
        </div>
        <div class="sticky-3">
          <div class="align-hor bottom vett">
            <h3 class="bigtitle">You stay in control.</h3>
            <p class="paragraph-x-large text-color-gray-500 _18 white">Review and approve all changes before they're committed. Bismuth creates clean, atomic commits as part of pull requests with detailed messages explaining what changed and why.</p>
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
          <h3 class="h2-heading">Bismuth works directly on GitHub, it can review pull requests and open it's own just like any one on your team.</h3>
        </div>
        <div id="w-node-_934e175f-e164-777b-9304-d22acf947b7e-35f1b25d" class="div-block-6"></div>
      </div>
      <div class="column-x-large-2 grid fade">
        <div id="w-node-ecbfbf86-70fd-9865-c400-8097f97e6ce7-35f1b25d" class="card-ai-1"><img src={icon} loading="lazy" alt="" class="image-4">
          <div class="div-block-5">
            <h3 class="h3">Reviews</h3>
            <p class="paragraph-x-large text-color-gray-500 _18">Bismuth only steps in to comment on a review if there are clear logical or security concerns given the context of the work.</p>
          </div>
        </div>
        <div id="w-node-bffdd33a-40ae-c482-4205-076bc6396025-35f1b25d" class="card-ai-1"><img src={icon1} loading="lazy" alt="" class="image-4">
          <div class="div-block-5">
            <h3 class="h3">Scans</h3>
            <p class="paragraph-x-large text-color-gray-500 _18">Bismuth is always checking your code base for new issues and will open pull requests to fix them when it finds them.</p>
          </div>
        </div>
        <div id="w-node-_8e961abb-3a04-9292-5f7b-60640b3cdded-35f1b25d" class="card-ai-1"><img src={icon2} loading="lazy" alt="" class="image-4">
          <div class="div-block-5">
            <h3 class="h3">Communicates</h3>
            <p class="paragraph-x-large text-color-gray-500 _18">Add Bismuth to slack and it will let you know it's found something you should take a look at.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="how-it-works" class="section-large-2">
    <div class="container-large-3">
      <div class="w-layout-grid title-grid-2 full">
        <div class="column-regular column-left ce-ter fade column-margin">
          <div class="badge-large">
            <div>Technical Workflow</div>
          </div>
          <h3 class="h2-heading">How It Works</h3>
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
            <h6 class="h3"><span class="text-span-5">Install</span> the Bismuth GitHub app and give it permissions.</h6>
          </div>
          <div class="button-group">
            <a id="copyBtn1" href="https://github.com/apps/bismuthdev" class="button-secondary-large w-inline-block">
              <div class="text-block">Install</div>
              <div class="icon w-embed"><img src={icon} loading="lazy" alt="" class="image-4">
              </div>
            </a>
          </div>
        </div>
      </div>
      <div class="w-layout-grid process-grid">
        <div id="w-node-_14735d2d-4038-f439-be0b-22b20ca749f9-35f1b25d" class="process-content-end fade">
          <div class="column-x-small">
            <h6 class="h3"><span class="text-span-6">Open</span> a pull request.</h6>
          </div>
        </div>
        <div id="w-node-_14735d2d-4038-f439-be0b-22b20ca74a01-35f1b25d" class="process-line-wrapper">
          <div class="process-line"></div>
          <div class="process-number">
            <div>2</div>
          </div>
        </div>
        <div id="w-node-_14735d2d-4038-f439-be0b-22b20ca74a06-35f1b25d" class="process-image-wrapper fade">
          <ImageContainer src={createPR} />
          </div>
      </div>
      <div class="w-layout-grid process-grid">
        <div id="w-node-_14735d2d-4038-f439-be0b-22b20ca74a09-35f1b25d" class="process-image-wrapper">
          <ImageContainer src={pr_review} />
          </div>
        <div id="w-node-_14735d2d-4038-f439-be0b-22b20ca74a0b-35f1b25d" class="process-line-wrapper">
          <div class="process-line"></div>
          <div class="process-number">
            <div>3</div>
          </div>
        </div>
        <div id="w-node-_4cc89224-c561-311d-b795-bfa001a2a812-35f1b25d" class="process-content">
          <div class="column-x-small">
            <h6 class="h3"><span class="text-span-7">Review</span> and accept the changes if Bismuth finds an issue.</h6>
          </div>
        </div>
      </div>
      <div class="w-layout-grid process-grid">
        <div id="w-node-_62b429d7-ffb5-9bdb-249e-370f57597ea2-35f1b25d" class="process-content fade">
          <div class="column-x-small">
            <h6 class="h3"><span class="text-span-7">Accept</span> pull requests for issues Bismuth finds while scanning your code base.</h6>
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
          <ProgrammingButton href={"/pair-programming"}/>
  </section>
  <section id="pricing" class="section-large pricing-section pt-2">
    <div class="container-large-3">
      <div class="w-layout-grid title-grid-2 full">
        <div class="column-regular column-left ce-ter fade column-margin">
          <div class="badge-large blue">
            <div>Pricing</div>
          </div>
          <h3 class="h2-heading">A Plan for Every Development Team</h3>
          <p class="paragraph-x-large text-color-gray-500 _18 center"></p>
        </div>
      </div>
      <div class="pricing-grid">
        <div class="pricing-tier">
          <h1 class="pricing-header">Free</h1>
          <span class="price">
            $0 / mo
          </span>
          <ul class="pricing-features">
            <li>5 reviews / month</li>
          </ul>
          <br />
          <br />
          <br />
          <br />
					<a href="https://github.com/apps/bismuthdev" class="btn-primary whitespace-nowrap mt-12">
            <span>Install the GitHub App</span>
          </a>
        </div>
        <div class="pricing-tier">
          <h1 class="pricing-header">Standard</h1>
          <span class="price">
            $49 / mo
          </span>
          <ul class="pricing-features">
            <li>50 reviews / month</li>
            <li>10 scans / month</li>
          </ul>
        </div>
        <div class="pricing-tier">
          <h1 class="pricing-header">Pro</h1>
          <span class="price">
            $249 / mo
          </span>
          <ul class="pricing-features">
            <li>100 scans / month</li>
            <li>Unlimitted Reviews</li>
            <li>Slack Integration</li>
          </ul>
        </div>
        <div class="pricing-tier">
          <h1 class="pricing-header">Enterprise</h1>
          <span class="price">
            Contact Us
          </span>
          <ul class="pricing-features">
            <li>Unlimitted Scans</li>
            <li>Unlimitted Reviews</li>
            <li>Custom Integrations</li>
            <li>SSO and Compliance</li>
          </ul>
          <ContactForm transparent={true} subject="Bug Fixing Product Contact Form"/>
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
            <p class="paragraph-x-large text-color-gray-500 cemter">Focus on your code, not the setup. Our AI-powered agent handle the rest.</p>
          </div>
          <div class="div-block-8">
            <a href="https://github.com/apps/bismuthdev" class="button-secondary-large w-inline-block">
              <div>Install the GitHub App</div>
            </a>
            <ContactForm transparent={true} subject="Bug Fixing Product Contact Form"/>
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
  <div class="full-code">
    <div class="code">
      <div class="align-hor">
        <p class="paragraph-x-large text-color-gray-500 _18 white">import io<br>import flask<br>import requests<br>from PIL import Image<br>from bismuth import API, BlobStorageclass ThumbnailerAPI(API):<br>    def __init__(self):<br>        super().__init__()<br>        self.add_route(&#x27;/thumbnail&#x27;, &lbrace;&quot;POST&quot;: self.thumbnail&rbrace;)<br>        self.storage = BlobStorage()    def thumbnail(self, request: flask.Request, url: str):<br>        cached = self.storage.retrieve(url)<br>        if cached:<br>            return flask.send_file(io.BytesIO(cached), mimetype=&#x27;image/png&#x27;)        image_file = requests.get(url).content<br>        img = Image.open(image_file)<br>        img.thumbnail((100, 100))<br>        thumb_io = io.BytesIO()<br>        img.save(thumb_io, format=&#x27;PNG&#x27;)<br>        thumb_io.seek(0)<br>        self.storage.create(url, thumb_io.getvalue())        return flask.send_file(thumb_io, mimetype=&#x27;image/png&#x27;)app = ThumbnailerAPI()</p>
      </div>
      <a id="copyBtn3" href="#" class="button-primary-large copy-code w-inline-block">
        <div>Copy Code</div>
        <div class="icon w-embed"><svg width="420" height="420" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 6V3C7 2.73478 7.10536 2.48043 7.29289 2.29289C7.48043 2.10536 7.73478 2 8 2H20C20.2652 2 20.5196 2.10536 20.7071 2.29289C20.8946 2.48043 21 2.73478 21 3V17C21 17.2652 20.8946 17.5196 20.7071 17.7071C20.5196 17.8946 20.2652 18 20 18H17V21C17 21.552 16.55 22 15.993 22H4.007C3.87513 22.0008 3.7444 21.9755 3.62232 21.9256C3.50025 21.8757 3.38923 21.8022 3.29566 21.7093C3.20208 21.6164 3.12779 21.5059 3.07705 21.3841C3.02632 21.2624 3.00013 21.1319 3 21L3.003 7C3.003 6.448 3.453 6 4.01 6H7ZM5.003 8L5 20H15V8H5.003ZM9 6H17V16H19V4H9V6Z" fill="currentColor"></path>
          </svg>
        </div>
      </a>
    </div>
    <a data-w-id="dcca174b-49fe-8ab1-0b2d-01925e910eb5" href="#" class="button-primary-large copy-code round w-inline-block">
      <div class="icon w-embed"><svg width="420" height="420" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.0002 10.586L16.9502 5.63599L18.3642 7.04999L13.4142 12L18.3642 16.95L16.9502 18.364L12.0002 13.414L7.05023 18.364L5.63623 16.95L10.5862 12L5.63623 7.04999L7.05023 5.63599L12.0002 10.586Z" fill="currentColor"></path>
        </svg>
      </div>
    </a>
  </div>