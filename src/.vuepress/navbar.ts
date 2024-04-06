import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/teach/",
  {
    text: "Posts",
    icon: "pen-to-square",
    prefix: "/teach/",
    children: [
      {
        text: "Apple",
        icon: "pen-to-square",
        prefix: "apple/",
        children: [
          { text: "Apple1", icon: "pen-to-square", link: "1" },
          { text: "Apple2", icon: "pen-to-square", link: "2" },
          "3",
          "4",
        ],
      },
      {
        text: "Banana",
        icon: "pen-to-square",
        prefix: "banana/",
        children: [
          {
            text: "Banana 1",
            icon: "pen-to-square",
            link: "1",
          },
          {
            text: "Banana 2",
            icon: "pen-to-square",
            link: "2",
          },
          "3",
          "4",
        ],
    ],
  },
  {
    text: "🌠",
    icon: "book",
    link: "http://47.108.91.92/",
  },
]);
