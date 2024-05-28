import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "Pixiv涩图",
      icon: "book",
      prefix: "/pixiv/",
      children: "structure",
    },
  ],
});
