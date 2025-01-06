<script lang="ts">
	let { children } = $props();
  	import NotificationBanner from '$lib/components/NotificationBanner.svelte';
</script>

<NotificationBanner autoHideSeconds={10}/>
{@render children()}
