import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";

export default defineUserConfig({

  lang: "zh-CN",
  title: "逸燧涩图分享站",
  description: "「我思故我在,一念定乾坤」",

  theme: hopeTheme({
  hostname: "https://mister-hope.github.io",

  author: {
    name: "逸燧EscapedSpark",
    url: "https://escaped.icu",
  },

  iconAssets: "fontawesome-with-brands",

  logo: "https://pi.escaped.icu/favicon.ico",

  repo: "escapedspark/setu",

  docsDir: "src",

  navbar: [
  "/",
  {
    text: "主页/Home",
    icon: "lightclub",
    link: "/",
  },
  {
    text: "博客/Blog",
    icon: "book",
    link: "https://escaped.icu",
  },
  ],
  sidebar: [
  "/",
  {
      text: "Pixiv涩图",
      icon: "book",
      prefix: "/pixiv/",
      children: "structure",
  },
  ],

  // 页脚
  footer: "「梦在前方,路在脚下」",
  displayFooter: true,

  // 博客相关
  blog: {
    roundAvatar: true,
    hotReload: true,
    description: "不要让你的意志击穿了你的欲望",
    intro: "https://escaped.icu",
    avatar: "https:/pi.escaped.icu/1.png",
    medias: {
      QQ: "https://qm.qq.com/q/JDf3REVSMM",
      Gitee: "https://gitee.com/escaped-spark",
      GitHub: "https://github.com/hzqlingmou",
    },
  },
  
  metaLocales: {
    editLink: "温馨❤️提示:要想身体好，同志不要导",
  },
  
  plugins: {
    blog: true,
     comment: {
        provider: "Waline",
        serverURL: "https://waline.dengfenglai.icu/",
      },

    components: {
      components: ["Badge", "VPCard"],
    },
    mdEnhance: {
      alert: true,
      align: true,
      attrs: true,
      codetabs: true,
      component: true,
      demo: true,
      figure: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      mark: true,
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
    },
  },
}),
});
