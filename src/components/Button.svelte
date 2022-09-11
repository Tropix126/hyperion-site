<script lang="ts">
    import ripple from "~/lib/ripple";

    export let variant: "filled" | "outlined" | "text" | "elevated" | "tonal" = "filled";

    export let href = "";

    export let disabled = false;

    let className = "";
    export { className as class };
</script>

<svelte:element
    use:ripple
    on:click
    on:mousedown
    on:mouseup
    on:focus
    on:blur
    on:keydown
    on:keyup
    on:keypress
    this={href && !disabled ? "a" : "button"}
    class="button variant-{variant} {className}"
    {disabled}
    {...$$restProps}
>
    <slot />
</svelte:element>

<style lang="scss">
    .button {
        --mdc-ripple-color: currentColor;
        --mdc-ripple-hover-opacity: 0.08;
        --mdc-ripple-pressed-opacity: 0.12;

        cursor: pointer;
        user-select: none;
        border: none;
        outline: none;
        appearance: none;

        background: rgba(0, 0, 0, 0);
        box-sizing: border-box;
        display: inline-flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        min-inline-size: 64px;
        padding-inline: 24px;
        padding-block: 10px;
        gap: 10px;
        
        vertical-align: middle;
        text-decoration: none;
        font-family: inherit;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
        letter-spacing: 0.1px;

        transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1) 0s, box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

        &.variant- {
            &filled, &outlined, &text, &elevated, &tonal { border-radius: 100px; }

            &filled {
                background-color: var(--primary);
                color: var(--on-primary);

                &:hover {
                    box-shadow: var(--elevation-1);
                }
            }

            &outlined {
                color: var(--primary);
                box-shadow: inset 0 0 0 1px var(--outline);
            }

            &text {
                color: var(--primary);
                padding-inline: 12px;
                padding-block: 10px;
            }

            &elevated {
                color: var(--primary);
                background: var(--surface-1);
                box-shadow: var(--elevation-2);

                &:hover {
                    background: var(--surface-2);
                    box-shadow: var(--elevation-2);
                }
            }

            &tonal {
                background: var(--secondary-container);
                color: var(--on-secondary-container);

                &:hover {
                    box-shadow: var(--elevation-1);
                }

                &:focus {
                    box-shadow: none;
                }
            }
        }
    }
</style>