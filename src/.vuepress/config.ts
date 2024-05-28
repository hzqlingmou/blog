import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "EscapedSpark-Share",
  description: "逸燧の涩图站",

  theme,

});
