<script lang="ts">
    import NavigationItem from "./NavigationItem.svelte";

    interface NavigationHeaderItem {
        name: string;
        href: string;
        external?: boolean;
    }

    export let items: NavigationHeaderItem[] = [];

    export let title = "";

    let scrollY = 0;
</script>

<svelte:window bind:scrollY />

<header class="navigation-header" class:elevated={scrollY > 0}>
    <nav>
        <a href="/" class="navigation-title">
            <slot name="icon" />
            <span class="navigation-title-text">{title}</span>
        </a>

        <ul class="navigation-items">
            {#each items as item}
                <NavigationItem {...item} />
            {/each}
        </ul>
    </nav>
</header>

<style lang="scss">
    .navigation- {
        &header,
        &header nav,
        &title,
        &items {
            display: flex;
            align-items: center;
        }
        
        &header {
            user-select: none;
            box-sizing: border-box;
            z-index: 100;
            inline-size: 100%;
            block-size: 64px;
            padding-inline-start: 24px;
            background: var(--surface-2);
            transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
            
            &.elevated {
                box-shadow: var(--elevation-2);
            }

            nav {
                inline-size: 100%;
                block-size: 100%;
                justify-content: space-between;
            }
        }

        &title {
            gap: 16px;
            text-decoration: none;
            color: var(--on-surface);

            :global(svg) {
                fill: var(--tertiary);
                inline-size: 24px;
                block-size: auto;
            }

            &-text {
                font-weight: 400;
                font-size: 22px;
                line-height: 28px;
            }
        }

        &items {
            padding: 0;
            margin: 0;
            block-size: 100%;
        }
    }
</style>