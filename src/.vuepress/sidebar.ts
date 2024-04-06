import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "涩涩",
      icon: "book",
      prefix: "setu/",
      children: "structure",
    },
    {
      text: "文章",
      icon: "book",
      prefix: "docs/",
      children: "structure",
    },
  ],
});
