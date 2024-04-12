import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "trss云崽教程",
      icon: "book",
      prefix: "trss-yunzai/",
      children: "structure",
    },
  ],
});
