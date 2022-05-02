// default
import Layout from "./Layout.vue";
import NotFound from "./NotFound.vue";

import "./styles/vars.css";
import "./styles/layout.css";
import "./styles/code.css";
import "./styles/custom-blocks.css";
import "./styles/sidebar-links.css";

// LaTeX
import "katex/dist/katex.min.css";

// user CSS
import "./styles/custom.css";

// user components
import Extra from "./components/Extra.vue";

const theme = {
  Layout,
  NotFound,
  enhanceApp({ app, router, siteData }) {
    app.component("annotation", Extra);
    app.component("math", Extra);
    app.component("mfrac", Extra);
    app.component("mi", Extra);
    app.component("mn", Extra);
    app.component("mo", Extra);
    app.component("mrow", Extra);
    app.component("mstyle", Extra);
    app.component("mtext", Extra);
    app.component("semantics", Extra);
  },
};
export default theme;
