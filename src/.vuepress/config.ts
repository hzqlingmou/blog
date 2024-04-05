import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "en-US",
  title: "EscapedSpark逸燧博客",
  description: "A blog demo for 逸燧撒嘛",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
