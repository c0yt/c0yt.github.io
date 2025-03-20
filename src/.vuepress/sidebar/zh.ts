import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    "",
    {
      text: "导航",
      icon: "discover",
      prefix: "tools/",
      link: "tools/",
    },
    {
      text: "项目",
      icon: "software",
      prefix: "project/",
      link: "project/",
    },
    {
      text: "留言板",
      icon: "mark",
      prefix: "talk/",
      link: "talk/",
    },
    {
      text: "关于",
      icon: "info",
      prefix: "about/",
      link: "about",
    },
  ],
  // "/posts/Linux/": "structure",
  // "/posts/Python/": "structure",
  // "/posts/cross-platform/Flutter/": "structure",
  // "/posts/cross-platform/ReactNative/": "structure",
  // "/posts/iOS/": "structure",
  // "/posts/Web/": "structure",
  // "/site/": "structure",
  // "/blog": "structure",
  // "/tutorial": "structure",
});
