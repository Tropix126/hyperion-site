<script lang="ts">
    import ripple from "~/lib/ripple";

    export let external = false;
    export let href = "";
    export let name = "";
</script>

<li class="navigation-item">
    <a
        use:ripple
        {href}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer noopener" : undefined}
    >
        {name}
    </a>
</li>

<style lang="scss">
    .navigation-item {
        list-style-type: none;
        block-size: 100%;
        a {
            display: flex;
            align-items: center;
            block-size: 100%;
            padding-inline: 36px;
            text-decoration: none;
            font-weight: 500;
            font-size: 12px;
            line-height: 16px;
            letter-spacing: 0.5px;
            text-align: center;
            color: var(--on-secondary-container);
        }
    }
</style>