import { defineConfig } from '@rsbuild/core';
import { pluginVue } from '@rsbuild/plugin-vue';
import { UnoCSSRspackPlugin } from "@unocss/webpack/rspack";

export default defineConfig({
  plugins: [pluginVue()],
  tools: {
    rspack(config, ctx) {
      ctx.prependPlugins(UnoCSSRspackPlugin());
      config.optimization ??= {};
      config.optimization.realContentHash = true;
    }
  }
});
