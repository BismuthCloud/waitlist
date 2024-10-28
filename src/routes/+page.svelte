<script lang="ts">
  let email = '';
  let isSubmitting = false;
  let error: string | null = null;
  let success = false;

  const handleSubmit = async () => {
    isSubmitting = true;
    error = null;
    success = false;

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit');
      }

      success = true;
      email = '';
    } catch (e) {
      error = e instanceof Error ? e.message : 'Something went wrong';
    } finally {
      isSubmitting = false;
    }
  };

</script>

<main class="min-h-screen bg-dark-900 bg-grid-pattern relative overflow-hidden">
  <div class="absolute inset-0 bg-gradient-to-b from-primary-500/10 to-transparent pointer-events-none" />
  
  <div class="container mx-auto px-4 py-20 relative">
    <div class="max-w-3xl mx-auto text-center space-y-8">
      <h1 class="text-5xl md:text-6xl font-bold leading-tight">
        <span class="gradient-text">Build Your Dream App</span>
        <br />
        With AI Assistance
      </h1>
      
      <p class="text-xl text-gray-300 max-w-2xl mx-auto">
        Meet Bismuth, your AI developer companion that turns ideas into reality. 
        From concept to deployment, build the application you've always wanted with 
        intelligent guidance every step of the way.
      </p>


      <div class="max-w-md mx-auto">
        <form 
          on:submit|preventDefault={handleSubmit}
          class="flex flex-col md:flex-row gap-4"
        >
          <div class="flex-1">
            <input
              type="email"
              bind:value={email}
              placeholder="Enter your email"
              required
              class="input-primary"
            />
          </div>
          <button
            type="submit"
            class="btn-primary whitespace-nowrap"
            disabled={isSubmitting}
          >
            {#if isSubmitting}
              <span class="inline-flex items-center">
                <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </span>
            {:else}
              Join Waitlist
            {/if}
          </button>
        </form>
      </div>

      <div class="pt-8">
        <p class="text-sm text-gray-500">
          Join 1,000+ developers already on the waitlist
        </p>
      </div>
    </div>
  </div>

  <!-- Decorative elements -->
  <div class="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary-500/30 rounded-full blur-[128px] pointer-events-none" />
</main>

