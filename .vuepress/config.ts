import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "EscapedSpark逸燧博客",
  description: "逸燧博客",

  theme,

});
