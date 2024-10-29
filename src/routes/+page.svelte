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
			<div class="mx-auto max-w-md">
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
			</div>
			<div class="pt-8">
				<p class="text-base text-gray-500 md:text-lg lg:text-xl">
					Join 1,000+ developers already on the waitlist
				</p>
			</div>
			
			<div class="mt-16">
				<h2 class="mb-8 text-2xl font-semibold text-white md:text-3xl">See how Bismuth built this site:</h2>
				<div class="mx-auto max-w-3xl">
					<div class="relative pb-[56.25%]">
						<iframe
							class="absolute inset-0 h-full w-full rounded-lg shadow-lg"
							src="https://www.youtube.com/embed/dQw4w9WgXcQ"
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

