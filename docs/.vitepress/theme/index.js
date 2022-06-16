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
const all_extra = ["annotation", "math", "mfrac", "mi", "mn", "mo", "mrow", "mstyle", "mtext", "semantics"];

const theme = {
  Layout,
  NotFound,
  enhanceApp({ app, router, siteData }) {
    all_extra.forEach((item) => app.component(item, Extra));
  },
};
export default theme;
