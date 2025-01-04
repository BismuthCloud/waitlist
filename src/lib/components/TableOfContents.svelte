<!-- src/lib/components/TableOfContents.svelte -->
<script lang="ts">
    // Interface for our TOC items
    interface TOCItem {
        id: string;
        text: string;
        level: number;
        children?: TOCItem[];
    }

    // Export a prop to receive heading data from the parent
    export let items: TOCItem[] = [];

    // Optional prop for controlling active state styling
    export let activeId: string = '';
</script>

<nav class="toc-nav" aria-label="Table of contents">
    <ul class="toc-list">
        {#each items as item}
            <li class="toc-item">
                <a 
                    href="#{item.id}" 
                    class="toc-link"
                    class:active={activeId === item.id}
                >
                    {item.text}
                </a>
                {#if item.children && item.children.length > 0}
                    <ul class="toc-sublist">
                        {#each item.children as child}
                            <li>
                                <a 
                                    href="#{child.id}" 
                                    class="toc-sublink"
                                    class:active={activeId === child.id}
                                >
                                    {child.text}
                                </a>
                            </li>
                        {/each}
                    </ul>
                {/if}
            </li>
        {/each}
    </ul>
</nav>

<style>
    .toc-nav {
        font-size: 0.9rem;
    }

    .toc-list {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .toc-item {
        margin-bottom: 1rem;
    }

    .toc-link {
        text-decoration: none;
        font-weight: 600;
        display: block;
        margin-bottom: 0.5rem;
        transition: color 0.2s ease;
    }

    .toc-link:hover,
    .toc-link.active {
        color: #ec4899;
    }

    .toc-sublist {
        list-style: none;
        padding-left: 1rem;
        margin: 0.5rem 0;
    }

    .toc-sublink {
        text-decoration: none;
        display: block;
        padding: 0.25rem 0;
        font-weight: normal;
        transition: color 0.2s ease;
    }

    .toc-sublink:hover,
    .toc-sublink.active {
        color: #ec4899;
    }
</style>