import { MyTheme } from "./theme/index";
import { zhNavbar } from "./navbar/index.js";
import { zhSidebar } from "./sidebar/index.js";
export default MyTheme({
  hotReload: true,
  hostname: "https://blog.fzero.me",
  themeColor: true,
  fullscreen: true,
  author: {
    name: "null",
    url: "https://blog.fzero.me",
  },

  iconAssets: [
    // 默认：
    "//at.alicdn.com/t/c/font_2410206_5vb9zlyghj.css",
    // 自己的
    "//at.alicdn.com/t/c/font_3941380_00g6dc2nedwir.css",
  ],

  logo: "/logo.png",

  repo: "c0yt",

  docsDir: "src",

  navbarLayout: {
    start: ["Brand"],
    center: ["Links"],
    // end: ["Language", "Repo", "Wormhole", "Travelling", "Outlook", "Search"],
    end: ["Language", "Repo", "Outlook", "Search"],
  },

  blog: {
    medias: {
      Email: "mailto:3057311151@qq.com",
      GitHub: "https://github.com/c0yt",
    },
    name: "null",
  },
  locales: {
    /**
     * Chinese locale config
     */
    "/": {
      // navbar
      navbar: zhNavbar,

      // sidebar
      sidebar: zhSidebar,

      footer: "默认页脚",

      displayFooter: false,

      blog: {
        description: "允许一切自然发生",
        intro: "/intro.html",
      },

      // page meta
      metaLocales: {
        editLink: "在 GitHub 上编辑此页",
      },
    },
  },
  // navbarAutoHide: "always",
  // 加密
  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
    },
  },
  plugins: {
    // 代码高亮
    shiki: {
      themes: {
        light: "one-dark-pro",
        dark: "one-dark-pro",
      },
      lineNumbers:15,
    },
    components: {
      components: ["BiliBili", "Badge"],
    },
    blog: {
      filter: ({ filePathRelative, frontmatter }) => {
        // 将标记为非文章，并且是说说的加入文章采集中，以便后续筛选
        if (!frontmatter.article && frontmatter.news) return true;

        return true;
      },

      type: [
        {
          key: "thinks",
          filter: (page) => page.frontmatter.thinks === true,
          layout: "News",
          frontmatter: () => ({ title: "说说" }),
        },
      ],
    },
    photoSwipe: {
      selector: [
        ".theme-hope-content :not(a) > img:not([no-view])",
        ".news-content :not(a) > .vp-article-excerpt img",
      ],
    },
    git: true,
    feed: {
      rss: true,
    },
    comment: {
      provider: "Waline",
      serverURL: "https://talk.fzero.me/", // your server url
      reaction: true,
      requiredMeta: ["nick", 'mail'],
      wordLimit: 300,
      pageSize: 10,
      emoji: [
        "https://unpkg.com/@waline/emojis@1.1.0/tieba",
        "https://unpkg.com/@waline/emojis@1.1.0/weibo",
        "https://emoji.shojo.cn/bili/webp/tv_小电视_动图",
        "https://emoji.shojo.cn/bili/webp/罗小黑战记",
        "https://emoji.shojo.cn/bili/webp/2233娘",
        "https://emoji.shojo.cn/bili/webp/装扮小姐姐梦幻冬季",
        "https://emoji.shojo.cn/bili/webp/装扮小姐姐·秋日午后",
        "https://emoji.shojo.cn/bili/webp/星尘",
        "https://emoji.shojo.cn/bili/webp/池年"
      ],
      locales: {
        "/": {
          placeholder:
            "欢迎留言~ _(≧∇≦」∠)_ (填写常用邮箱即可快速收到回复通知~)",
        },
      },
    },
    prismjs: false,
    copyright: {
      author: "null",
      license: "CC BY-NC-SA 4.0",
      global: true,
    },
    // all features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      tasklist: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      revealJs: {
        plugins: ["highlight", "math", "search", "notes", "zoom"]
      },
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
      vuePlayground: true,
    },

    // uncomment these if you want a PWA
    pwa: {
      favicon: "/favicon.ico",
      cacheHTML: true,
      cacheImage: true,
      appendBase: true,
      apple: {
        icon: "/assets/icon/apple-icon-152.png",
        statusBarColor: "black",
      },
      msTile: {
        image: "/assets/icon/ms-icon-144.png",
        color: "#ffffff",
      },
      manifest: {
        icons: [
          {
            src: "/assets/icon/chrome-mask-512.png",
            sizes: "512x512",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-mask-192.png",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
        shortcuts: [
          {
            name: "Demo",
            short_name: "Demo",
            url: "/demo/",
            icons: [
              {
                src: "/assets/icon/guide-maskable.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png",
              },
            ],
          },
        ],
      },
    },
  },
});
