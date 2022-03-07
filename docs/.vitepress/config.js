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
// const getSidebar = () => {
nav.forEach((item) => {
  const link = item.text;
  sidebar[`/${link}`] = getDirectory(link);
});
sidebar["/"] = nav;
// };
// getSidebar();
console.log(sidebar);

module.exports = {
  base: "/Note/",
  lang: "zh-CN",
  title: title,
  description: "这是我的第一个 VitePress 站点",
  head: [["link", { rel: "icon", type: "image/x-icon", href: "favicon.ico" }]],
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
};
