import { hopeTheme } from "vuepress-theme-hope";


export default hopeTheme({
  hostname: "https://escaped.icu/",

  author: {
    name: "逸燧EscapedSpark",
    url: "https://escaped.icu/",
  },

  iconAssets: "fontawesome-with-brands",

  logo: "https://pi.escaped.icu/favicon.ico",

  repo: "hzqlingmou/blog",

  docsDir: "src",

  navbar: [
    "/",
    {
      text: "朝天工作室",
      icon: "book",
      link: "https://escateam.icu",
    },
    {
      text: "朝天云",
      icon: "cloud",
      link: "https://cloud.escateam.icu",
    },
    {
      text: "芙芙云",
      icon: "cloud",
      link: "https://fufuidc.cn",
    }
  ],

  // sidebar
  sidebar: [
    "/",
    {
      text: "Ubuntu系列教程",
      icon: "book",
      link: "/ubuntu/",
      collapsible: true,
      children: [
        {
          text: "磁盘扩容",
          link: "/ubuntu/pan",
        },
      ],
    },
    {
      text: "c++从入门到入土",
      icon: "book",
      link: "/cpp/",
      collapsible: true,
      children: [
        {
          text: "01输入输出&变量",
          link: "/cpp/1",
        },
        {
          text: "02程序的选择结构",
          link: "/cpp/2",
        },
        {
          text: "洛谷训练题及满分参考答案",
          collapsible: true,
          children: [
            {
              text: "b2004对齐输出",
              link: "/cpp/luogu/b2004",
            },
            {
              text: "b2005字符三角形",
              link: "/cpp/luogu/b2005",
            },
            {
              text: "b2006地球人口承载力估计",
              link: "/cpp/luogu/b2006",
            },
            {
              text: "b2007A + B 问题",
              link: "/cpp/luogu/b2007",
            },
            {
              text: "b2008计算 (a+b)×c 的值",
              link: "/cpp/luogu/b2008",
            },
            {
              text: "b2009计算 (a+b)/c 的值",
              link: "/cpp/luogu/b2009",
            },
            {
              text: "b2010带余除法",
              link: "/cpp/luogu/b2010",
            },
            {
              text: "b2011计算分数的浮点数值",
              link: "/cpp/luogu/b2011",
            },
            {
              text: "b2012甲流疫情死亡率",
              link: "/cpp/luogu/b2012",
            },
            {
              text: "b2013温度表达转化",
              link: "/cpp/luogu/b2013",
            },
            {
              text: "b2017打印 ASCII 码",
              link: "/cpp/luogu/b2017",
            },
            {
              text: "b2035判断数正负",
              link: "/cpp/luogu/b2035",
            },
            {
              text: "b2036输出绝对值",
              link: "/cpp/luogu/b2036",
            },
            {
              text: "b2037奇偶数判断",
              link: "/cpp/luogu/b2037",
            },
            {
              text: "b2038奇偶 ASCII 值判断",
              link: "/cpp/luogu/b2038",
            },
            {
              text: "b2039整数大小比较",
              link: "/cpp/luogu/b2039",
            },
            {
              text: "b2040判断是否为两位数",
              link: "/cpp/luogu/b2040",
            },
            {
              text: "b2041收集瓶盖赢大奖",
              link: "/cpp/luogu/b2041",
            },
            {
              text: "b2047分段函数",
              link: "/cpp/luogu/b2047",
            },
            {
              text: "b2048计算邮资",
              link: "/cpp/luogu/b2048",
            },
            {
              text: "b2049最大数输出",
              link: "/cpp/luogu/b2049",
            },
            {
              text: "b2050三角形判断",
              link: "/cpp/luogu/b2050",
            },
            {
              text: "b2051点和正方形的关系",
              link: "/cpp/luogu/b2051",
            }
          ]
        }
      ]
    }
  ],

  // 页脚
  footer: "&copy <a href=\"https://escaped.icu\">逸燧</a>",
  displayFooter: true,

  // 博客相关
  blog: {
    description: "「梦在前方,路在脚下」",
    intro: "/",
    medias: {
      GitHub: "https://github.com/hzqlingmou",
      QQ: "https://qm.qq.com/q/k0d3bHfSCs",
      //Baidu: "https://example.com",
      //BiliBili: "https://example.com",
      //Bitbucket: "https://example.com",
      //Dingding: "https://example.com",
      //Discord: "https://example.com",
      //Dribbble: "https://example.com",
      //Email: "mailto:info@example.com",
      //Evernote: "https://example.com",
      //Facebook: "https://example.com",
      //Flipboard: "https://example.com",
      //Gitee: "https://example.com",
      //GitHub: "https://example.com",
      //Gitlab: "https://example.com",
      //Gmail: "mailto:info@example.com",
      //Instagram: "https://example.com",
      //Lark: "https://example.com",
      //Lines: "https://example.com",
      //Linkedin: "https://example.com",
      //Pinterest: "https://example.com",
      //Pocket: "https://example.com",
      //QQ: "https://example.com",
      // Qzone: "https://example.com",
      //Reddit: "https://example.com",
      //Rss: "https://example.com",
      // Steam: "https://example.com",
      //Twitter: "https://example.com",
      // Wechat: "https://example.com",
      // Weibo: "https://example.com",
      // Whatsapp: "https://example.com",
      // Youtube: "https://example.com",
      // Zhihu: "https://example.com",
      /*  VuePressThemeHope: {
          icon: "https://theme-hope-assets.vuejs.press/logo.svg",
          link: "https://theme-hope.vuejs.press",
        }, */
    },
  },

  // 加密配置
  encrypt: {
    config: {
      "/secret/": ["esca"],
    },
  },

  // 多语言配置
  metaLocales: {
    editLink: "在 GitHub 上编辑此页",
  },

  // dev配置：如果想要实时查看任何改变，启用它。注: 这对更新性能有很大负面影响
  hotReload: true,

  // 在这里配置主题提供的插件
  plugins: {
    blog: true,

    // 启用之前需安装 @waline/client
    comment: {
      provider: "Waline",
      serverURL: "https://waline.escateam.icu",
    },

    components: {
      components: ["Badge", "VPCard"],
    },

    // 此处开启了很多功能用于演示，你应仅保留用到的功能。
    markdownImage: {
      figure: true,
      lazyload: true,
      size: true,
    },

    markdownMath: {
      type: "katex",
    },

    // 此功能被开启用于演示，你应仅当使用时保留。
    markdownTab: true,

    // 此处开启了很多功能用于演示，你应仅保留用到的功能。
    mdEnhance: {
      align: true,
      attrs: true,
      component: true,
      demo: true,
      include: true,
      mark: true,
      plantuml: true,
      spoiler: true,
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
      tasklist: true,
      vPre: true,

      // 在启用之前安装 chart.js
      chart: true,

      // insert component easily

      // 在启用之前安装 echarts
      echarts: true,

      // 在启用之前安装 flowchart.ts
      flowchart: true,

      // gfm requires mathjax-full to provide tex support
      // gfm: true,

      // 在启用之前安装 mermaid
      mermaid: true,

      playground: {
        presets: ["ts", "vue"],
      },

      // 在启用之前安装 @vue/repl
      vuePlayground: true,

      // install sandpack-vue3 before enabling it
      // sandpack: true,
    },

    // 如果你需要 PWA。安装 @vuepress/plugin-pwa 并取消下方注释
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cacheImage: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },

    // 如果你需要幻灯片，安装 @vuepress/plugin-revealjs 并取消下方注释
    revealjs: {
      plugins: ["highlight", "math", "search", "notes", "zoom"],
    },
  },
});
