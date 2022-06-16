const { getChildren } = require("./utils/autoSidebar");
const getDirectory = (ele) => getChildren("./docs", ele);
const path = require("path");
let title = "Conard 的笔记站";
const nav = [
  {
    text: "CSS",
    link: "/CSS/",
  },
  {
    text: "JavaScript",
    link: "/JavaScript/",
  },
  {
    text: "LaTeX",
    link: "/LaTeX/",
  },
  {
    text: "Python",
    link: "/Python/",
  },
  {
    text: "Git",
    link: "/Git/",
  },
  // {
  //   text: "change",
  //   link: toggleDark,
  // },
];
const sidebar = {};
const pages = [];
nav.forEach((item) => {
  const link = item.text;
  sidebar[`/${link}`] = getDirectory(link);
  pages.push({ title: item.text, path: item.link });
});
sidebar["/"] = nav;
pages.push({ title: "Home", path: "/" });
// console.log(sidebar);

module.exports = {
  // base: "/Note/",
  lang: "zh-CN",
  title,
  description: "我的第一个 VitePress 站点",
  head: [["link", { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]],
  themeConfig: {
    lastUpdated: "最近更新时间",
    search: true,
    pages,
    // 顶部右侧导航
    // nav: [
    //   { text: "Home", link: "/" },
    //   // {
    //   //   text: "Components",
    //   //   // children: [
    //   //   //   {
    //   //   //     text: "CSS",
    //   //   //     // link: "/CSS/Flexbox/flex",
    //   //   //   },
    //   //   // ],
    //   // },
    // ],
    nav: [
      {
        text: "笔记列表",
        items: [...nav],
      },
    ],
    // 侧边栏
    sidebar,
    // alias: {
    //   "@SearchBox": path.resolve(__dirname, "./pulgin/pulgin-search/SearchBox.vue"),
    // },
  },
  markdown: {
    lineNumbers: true,
    config: (md) => {
      md.use(require("@iktakahiro/markdown-it-katex"));
    },
  },
};
