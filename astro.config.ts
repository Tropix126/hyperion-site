import { defineConfig } from "astro/config";

import path from "path";

import svelte from "@astrojs/svelte";
import prefetch from "@astrojs/prefetch";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
	integrations: [svelte(), prefetch(), sitemap()],
	vite: {
		build: { sourcemap: true },
		resolve: {
			alias: {
				"~": path.resolve("./src")
			}
		}
	},
});
