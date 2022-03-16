const { getChildren } = require("./utils/autoSidebar");
const getDirectory = (ele) => getChildren("./docs", ele);
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
  // {
  //   text: "change",
  //   link: toggleDark,
  // },
];
const sidebar = {};
nav.forEach((item) => {
  const link = item.text;
  sidebar[`/${link}`] = getDirectory(link);
});
sidebar["/"] = nav;
// console.log(sidebar);

module.exports = {
  // base: "/Note/",
  lang: "zh-CN",
  title,
  description: "我的第一个 VitePress 站点",
  head: [["link", { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]],
  themeConfig: {
    lastUpdated: "最近更新时间",
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
  },
  markdown: {
    lineNumbers: true,
    config: (md) => {
      md.use(require("@iktakahiro/markdown-it-katex"));

      // const originalRender = md.render;
      // const REG_MATH_MUSTACHE_TAG = /<span class="katex-mahml">/g;
      // const replacer = '<span class="katex-mathml" style="display:none;">';
      // md.render = function () {
      //   return originalRender.apply(this, arguments).replace(REG_MATH_MUSTACHE_TAG, replacer);
      // };
    },
  },
};
