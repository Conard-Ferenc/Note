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

module.exports = {
  lang: "zh-CN",
  title: title,
  description: "这是我的第一个 VitePress 站点",
  head: [["link", { rel: "icon", href: "/favicon.png", type: "image/png" }]],
  themeConfig: {
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
    sidebar: {
      "/CSS": [
        {
          text: "Flexbox",
          children: [
            {
              text: "flex",
              link: "/CSS/Flexbox/flex",
            },
          ],
          // text: "CSS",
          // children: [
          //   {},
          //   // {
          //   //   text: "入职第一周",
          //   //   link: "/first-week",
          //   // },
          //   {
          //     text: "flex",
          //     link: "/CSS/Flexbox/flex",
          //   },
          // ],
        },
        {
          text: "Scroll-snap",
          children: [
            {
              text: "scroll-snap-type",
              link: "/CSS/Scroll-snap/scroll-snap-type",
            },
            {
              text: "scroll-snap-align",
              link: "/CSS/Scroll-snap/scroll-snap-align",
            },
          ],
        },
      ],
      "/JavaScript": [
        {
          text: "",
          link: "/JavaScript/index",
        },
      ],
      "/LaTeX": [
        {
          text: "开始",
          link: "/LaTeX/index.md",
          // children: [
          //   {
          //     text: "基础语法",
          //   },
          // ],
        },
      ],
      "/Python": [
        {
          text: "",
          link: "/Python/index",
        },
      ],
      "/": nav,
    },
  },
  markdown: {
    lineNumbers: true,
    config: (md) => {
      md.use(require("@iktakahiro/markdown-it-katex"));
      const originalRender = md.render;
      const REG_MATH_MUSTACHE_TAG = /<span class="katex-mahml">/g;
      const replacer = '<span class="katex-mathml" style="display:none;">';
      md.render = function () {
        return originalRender.apply(this, arguments).replace(REG_MATH_MUSTACHE_TAG, replacer);
      };
    },
  },
};
