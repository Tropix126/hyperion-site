import { defineConfig } from "astro/config";

import path from "path";

import svelte from "@astrojs/svelte";
import prefetch from "@astrojs/prefetch";
import sitemap from "@astrojs/sitemap";

import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
	integrations: [svelte(), prefetch(), sitemap()],
	vite: {
		build: { sourcemap: true },
		resolve: {
			alias: {
				"~": path.resolve(__dirname, "./src")
			}
		}
	}
});
