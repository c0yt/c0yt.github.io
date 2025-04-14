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
      text: "笔记",
      icon: "study",
      prefix: "study/",
      children: [
        {
          text: "Linux",
          icon: "linux",
          prefix: "Linux/",
          link: "Linux/",
        },
      ],
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
  "/study/Linux/": "structure",
  "/project/": "structure",
});
