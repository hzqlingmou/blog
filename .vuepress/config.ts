import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  bundler: viteBundler({
    viteOptions: {},
    vuePluginOptions: {},
  }),
})
export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "EscapedSpark逸燧博客",
  description: "逸燧博客",

  theme,

});
