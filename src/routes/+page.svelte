<script lang="ts">
	import { onMount } from 'svelte';
	import confetti from 'canvas-confetti';
	
	interface WaitlistEntry {
		email: string;
		referralCode: string;
		referralCount: number;
		hasAppAccess: boolean;
		hasRateLimit: boolean;
		hasCredit: boolean;
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

	interface VideoMetadata {
		id: string;
		title: string;
    }

	const videos: VideoMetadata[] = [
		{ id: 'FfWRp5vLITA', title: 'Bismuth Is Now Autonomous' },
		{ id: 'BB9MjSahjeM', title: 'How Bismuth Built This Site' },
		// { id: 'your-third-video-id', title: 'End-to-End Development with Bismuth' }
	];

	let email = '';
	let isSubmitting = false;
	let error: string | null = null;
	let success = false;
	let referralData: WaitlistEntry | null = null;
	let referralUrl = '';

	// Get referral code from URL if present
	onMount(() => {
		const urlParams = new URLSearchParams(window.location.search);
		const referralCode = urlParams.get('ref');
		if (referralCode) {
			referralUrl = referralCode;
		}
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
			const data = await response.json();
			if (!response.ok) {
				throw new Error(data.error || 'Failed to submit');
			}
			success = true;
			referralData = data.entry;
			email = '';
			fireConfetti();
		} catch (e) {
			error = e instanceof Error ? e.message : 'Something went wrong';
		} finally {
			isSubmitting = false;
		}
	};
</script>

<main class="relative min-h-screen overflow-hidden bg-dark-900 bg-grid-pattern">
	<div
		class="pointer-events-none absolute inset-0 bg-gradient-to-b from-primary-500/10 to-transparent"
	/>
	<div class="container relative mx-auto px-4 py-20">
		<div class="mx-auto max-w-4xl space-y-8 text-center lg:max-w-5xl">
			<h1 class="text-6xl font-bold leading-tight md:text-7xl lg:text-8xl">
				<span class="gradient-text">Accelerate Development</span> <br /> With Intelligent AI Coding
			</h1>
			<p class="mx-auto max-w-2xl text-xl text-gray-300 md:text-2xl lg:text-3xl">
				Bismuth is your AI-powered development platform that transforms how developers build, optimize, 
				and refactor code. Leverage cutting-edge AI to automate complex tasks, generate intelligent 
				solutions, and dramatically reduce development cycles.
			</p>
			<div class="mx-auto max-w-md space-y-4">
				<form on:submit|preventDefault={handleSubmit} class="flex flex-col gap-4 md:flex-row">
					<div class="flex-1">
						<input
							type="email"
							bind:value={email}
							placeholder="Enter your email"
							required
							class="input-primary"
						/>
					</div>
					<button type="submit" class="btn-primary whitespace-nowrap" disabled={isSubmitting}>
						{#if isSubmitting}
							<span class="inline-flex items-center">
								<svg
									class="-ml-1 mr-3 h-5 w-5 animate-spin text-white"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
								>
									<circle
										class="opacity-25"
										cx="12"
										cy="12"
										r="10"
										stroke="currentColor"
										stroke-width="4"
									></circle>
									<path
										class="opacity-75"
										fill="currentColor"
										d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
									></path>
								</svg> Processing...
							</span>
						{:else}
							Join Waitlist
						{/if}
					</button>
				</form>
				{#if success && referralData}
					<div class="animate-fade-in mt-8 space-y-6 rounded-lg bg-dark-800/50 p-6 text-left">
						<div>
							<h3 class="text-xl font-semibold text-primary-400">You're on the list! Welcome aboard!</h3>
							<p class="mt-2 text-gray-300">Share your referral link to earn rewards:</p>
							<div class="mt-2 flex items-center gap-2">
								<input
									type="text"
									readonly
									value={`${window.location.origin}?ref=${referralData.referralCode}`}
									class="input-primary flex-1"
								/>
								<button
									class="btn-primary"
									on:click={() => {
										navigator.clipboard.writeText(`${window.location.origin}?ref=${referralData.referralCode}`);
									}}
								>
									Copy
								</button>
							</div>
						</div>

						<div class="space-y-4">
							<div class="flex items-center justify-between">
								<span class="text-gray-300">Referral Count: {referralData.referralCount}</span>
								{#if getNextTier(referralData.referralCount)}
									<span class="text-primary-400">Next tier: {getNextTier(referralData.referralCount)?.count} referrals</span>
								{:else}
									<span class="text-primary-400">All tiers unlocked!</span>
								{/if}
							</div>
							
							<div class="h-2 overflow-hidden rounded-full bg-dark-700">
								<div
									class="h-full bg-primary-500 transition-all duration-500"
									style="width: {getProgressToNextTier(referralData.referralCount)}%"
								/>
							</div>

							<div class="grid gap-4 sm:grid-cols-3">
								{#each tiers as tier}
									<div class="rounded-lg bg-dark-700/50 p-4">
										<div class="flex items-center justify-between">
											<span class="font-medium text-gray-300">{tier.benefit}</span>
											{#if referralData.referralCount >= tier.count}
												<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
													<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
												</svg>
											{:else}
												<span class="text-sm text-gray-400">{tier.count} refs</span>
											{/if}
										</div>
										<p class="mt-1 text-sm text-gray-400">{tier.description}</p>
									</div>
								{/each}
							</div>
						</div>
					</div>
				{:else if success}
					<div class="animate-fade-in mt-4 font-medium text-primary-400">
						You're on the list! Welcome aboard!
					</div>
				{/if}
				{#if error}
					<div class="animate-fade-in mt-4 font-medium text-red-400">{error}</div>
				{/if}
				<div class="fixed top-4 right-4 z-10">
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



			<div class="mt-16">
				<h2 class="mb-8 text-2xl font-semibold text-white md:text-3xl">
					See Bismuth in Action:
				</h2>
				<div class="video-carousel">
					{#each videos as video}
						<div class="video-item">
							<div class="relative pb-[56.25%]">
								<iframe
									class="absolute inset-0 h-full w-full rounded-lg shadow-lg"
									src="https://www.youtube.com/embed/{video.id}"
									title={video.title}
									frameborder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowfullscreen
								></iframe>
							</div>
							<div class="video-title">{video.title}</div>
						</div>
					{/each}
				</div>

				<div class="mt-24">
					<h2 class="mb-12 text-2xl font-semibold text-white md:text-3xl">
						The Evolution of Bismuth
					</h2>
					<div class="version-comparison">
						<div class="version-card">
							<h3 class="version-title">
								<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>
								Version 0.1.0: AI Foundations
							</h3>
							<ul class="space-y-3 text-gray-300">
								<li class="flex items-start gap-2">
									<span class="mt-1 text-primary-400">*</span>
									Prototype AI-assisted code generation
								</li>
								<li class="flex items-start gap-2">
									<span class="mt-1 text-primary-400">*</span>
									Initial context understanding capabilities
								</li>
								<li class="flex items-start gap-2">
									<span class="mt-1 text-primary-400">*</span>
									Basic pattern recognition in code
								</li>
								<li class="flex items-start gap-2">
									<span class="mt-1 text-primary-400">*</span>
									Limited task-specific AI support
								</li>
							</ul>
						</div>
						<div class="version-card">
							<h3 class="version-title">
								<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>
								Version 1.0.0: AI-Powered Development
							</h3>
							<ul class="space-y-3 text-gray-300">
								<li class="flex items-start gap-2">
									<span class="mt-1 text-primary-400">*</span>
									Advanced AI-powered feature additions
								</li>
								<li class="flex items-start gap-2">
									<span class="mt-1 text-primary-400">*</span>
									Automated intelligent bug fixing
								</li>
								<li class="flex items-start gap-2">
									<span class="mt-1 text-primary-400">*</span>
									Intelligent code refactoring
								</li>
								<li class="flex items-start gap-2">
									<span class="mt-1 text-primary-400">*</span>
									Contextual code understanding and generation
								</li>
							</ul>
						</div>
						<div class="version-card">
							<h3 class="version-title">
								<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-accent-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
								</svg>
								Version 0.2.0
							</h3>
							<ul class="space-y-3 text-gray-300">
								<li class="flex items-start gap-2">
									<span class="mt-1 text-accent-400">*</span>
									Autonomous end-to-end task completion
								</li>
								<li class="flex items-start gap-2">
									<span class="mt-1 text-accent-400">*</span>
									Advanced problem-solving capabilities
								</li>
								<li class="flex items-start gap-2">
									<span class="mt-1 text-accent-400">*</span>
									Self-guided decision making and implementation
								</li>
								<li class="flex items-start gap-2">
									<span class="mt-1 text-accent-400">*</span>
									Deep code understanding and intelligent refactoring
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- Decorative elements -->
	<div
		class="pointer-events-none absolute left-1/2 top-20 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary-500/30 blur-[128px]"
	/>
</main>