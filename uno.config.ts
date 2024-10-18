import {
	defineConfig,
	presetUno,
	transformerDirectives,
	transformerVariantGroup,
} from "unocss";

export default defineConfig({
	content: {
		filesystem: ["src/**/*.{html,js,ts,jsx,tsx,vue,svelte,astro,css}"],
		pipeline: {
			exclude: [],
		},
	},
	presets: [presetUno()],
	transformers: [
		transformerVariantGroup(),
		transformerDirectives({ enforce: "pre" }),
	],
});
