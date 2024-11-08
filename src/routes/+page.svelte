<script lang="ts">
	import { onMount } from 'svelte';
	import confetti from 'canvas-confetti';
	let email = '';
	let isSubmitting = false;
	let error: string | null = null;
	let success = false;
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
				body: JSON.stringify({ email })
			});
			const data = await response.json();
			if (!response.ok) {
				throw new Error(data.error || 'Failed to submit');
			}
			success = true;
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
				<span class="gradient-text">Build Your Dream App</span> <br /> With AI Assistance
			</h1>
			<p class="mx-auto max-w-2xl text-xl text-gray-300 md:text-2xl lg:text-3xl">
				Meet Bismuth, your AI developer companion that turns ideas into reality. From concept to
				deployment, build the application you've always wanted with intelligent guidance every step
				of the way.
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
				{#if success}
					<div class="animate-fade-in mt-4 font-medium text-primary-400">
						🎉 You're on the list! Welcome aboard!
					</div>
				{/if}
				{#if error}
					<div class="animate-fade-in mt-4 font-medium text-red-400">❌ {error}</div>
				{/if}
				<div class="fixed top-4 right-4 z-10">
					<a 
						href="https://discord.gg/YourDiscordInviteLink" 
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
					See how Bismuth built this site:
				</h2>
				<div class="mx-auto max-w-3xl">
					<div class="relative pb-[56.25%]">
						<iframe
							class="absolute inset-0 h-full w-full rounded-lg shadow-lg"
							src="https://www.youtube.com/embed/kR5PLxP30O0"
							title="How Bismuth Built This Site"
							frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowfullscreen
						></iframe>
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
