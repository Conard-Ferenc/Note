import{_ as n,c as a,o as s,a as t}from"./app.892892a0.js";const y='{"title":"\u6458\u8981","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u6458\u8981","slug":"\u6458\u8981"},{"level":2,"title":"\u8BED\u6CD5","slug":"\u8BED\u6CD5"},{"level":3,"title":"\u53D6\u503C","slug":"\u53D6\u503C"},{"level":3,"title":"\u6B63\u5F0F\u8BED\u6CD5","slug":"\u6B63\u5F0F\u8BED\u6CD5"},{"level":2,"title":"\u5173\u8054","slug":"\u5173\u8054"}],"relativePath":"CSS/Scroll-snap/scroll-snap-type.md","lastUpdated":1646671466760}',p={},e=t(`<h2 id="\u6458\u8981" tabindex="-1">\u6458\u8981 <a class="header-anchor" href="#\u6458\u8981" aria-hidden="true">#</a></h2><p><code>scroll-snap-type</code> <a href="./../../CSS/"><strong>CSS</strong></a> \u5C5E\u6027\u5B9A\u4E49\u5728\u6EDA\u52A8\u5BB9\u5668\u4E2D\u7684\u4E00\u4E2A\u4E34\u65F6\u70B9\uFF08snap point\uFF09\u5982\u4F55\u88AB\u4E25\u683C\u7684\u6267\u884C\u3002</p><p>\u6B64\u5C5E\u6027\u4E0D\u80FD\u7528\u6765\u6307\u5B9A\u4EFB\u4F55\u7CBE\u786E\u7684\u52A8\u753B\u6216\u8005\u7269\u7406\u8FD0\u52A8\u6548\u679C\u6765\u6267\u884C\u4E34\u65F6\u70B9\uFF0C\u800C\u662F\u4EA4\u7ED9\u7528\u6237\u4EE3\u7406\u6765\u5904\u7406\u3002</p><div class="language-css"><pre><code><span class="token comment">/* \u5173\u952E\u503C */</span>
<span class="token property">scroll-snap-type</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token property">scroll-snap-type</span><span class="token punctuation">:</span> x<span class="token punctuation">;</span>
<span class="token property">scroll-snap-type</span><span class="token punctuation">:</span> y<span class="token punctuation">;</span>
<span class="token property">scroll-snap-type</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
<span class="token property">scroll-snap-type</span><span class="token punctuation">:</span> inline<span class="token punctuation">;</span>
<span class="token property">scroll-snap-type</span><span class="token punctuation">:</span> both<span class="token punctuation">;</span>

<span class="token comment">/* \u53EF\u9009 mandatory | proximity */</span>
<span class="token property">scroll-snap-type</span><span class="token punctuation">:</span> x mandatory<span class="token punctuation">;</span>
<span class="token property">scroll-snap-type</span><span class="token punctuation">:</span> y proximity<span class="token punctuation">;</span>
<span class="token property">scroll-snap-type</span><span class="token punctuation">:</span> both mandatory<span class="token punctuation">;</span>
<span class="token comment">/* etc */</span>
<span class="token comment">/* \u5168\u5C40\u503C  */</span>
<span class="token property">scroll-snap-type</span><span class="token punctuation">:</span> inherit<span class="token punctuation">;</span>
<span class="token property">scroll-snap-type</span><span class="token punctuation">:</span> initial<span class="token punctuation">;</span>
<span class="token property">scroll-snap-type</span><span class="token punctuation">:</span> unset<span class="token punctuation">;</span>
</code></pre></div><h2 id="\u8BED\u6CD5" tabindex="-1">\u8BED\u6CD5 <a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a></h2><h3 id="\u53D6\u503C" tabindex="-1">\u53D6\u503C <a class="header-anchor" href="#\u53D6\u503C" aria-hidden="true">#</a></h3><p><code>none</code> \u5F53\u8FD9\u4E2A\u6EDA\u52A8\u5BB9\u5668\u7684\u53EF\u89C6\u7684 viewport \u662F\u6EDA\u52A8\u7684\uFF0C\u5B83\u5FC5\u987B\u5FFD\u7565\u4E34\u65F6\u70B9\u3002 <code>x</code> \u6EDA\u52A8\u5BB9\u5668\u53EA\u6355\u6349\u5176\u6C34\u5E73\u8F74\u4E0A\u7684\u6355\u6349\u4F4D\u7F6E\u3002 <code>y</code> \u6EDA\u52A8\u5BB9\u5668\u53EA\u6355\u6349\u5176\u5782\u76F4\u8F74\u4E0A\u7684\u6355\u6349\u4F4D\u7F6E\u3002 <code>block</code> \u6EDA\u52A8\u5BB9\u5668\u4EC5\u6355\u6349\u5230\u5176\u5757\u8F74\u4E0A\u7684\u6355\u6349\u4F4D\u7F6E\u3002 <code>inline</code> \u6EDA\u52A8\u5BB9\u5668\u4EC5\u6355\u6349\u5230\u5176\u5185\u8054\u8F74\u4E0A\u7684\u6355\u6349\u4F4D\u7F6E\u3002 <code>both</code> \u6EDA\u52A8\u5BB9\u5668\u4F1A\u72EC\u7ACB\u6355\u6349\u5230\u5176\u4E24\u4E2A\u8F74\u4E0A\u7684\u4F4D\u7F6E\uFF08\u53EF\u80FD\u4F1A\u6355\u6349\u5230\u6BCF\u4E2A\u8F74\u4E0A\u7684\u4E0D\u540C\u5143\u7D20\uFF09 <code>mandatory</code> \u5982\u679C\u5B83\u5F53\u524D\u6CA1\u6709\u88AB\u6EDA\u52A8\uFF0C\u8FD9\u4E2A\u6EDA\u52A8\u5BB9\u5668\u7684\u53EF\u89C6\u89C6\u56FE\u5C06\u9759\u6B62\u5728\u4E34\u65F6\u70B9\u4E0A\u3002\u610F\u601D\u662F\u5F53\u6EDA\u52A8\u52A8\u4F5C\u7ED3\u675F\uFF0C\u5982\u679C\u53EF\u80FD\uFF0C\u5B83\u4F1A\u4E34\u65F6\u5728\u90A3\u4E2A\u70B9\u4E0A\u3002\u5982\u679C\u5185\u5BB9\u88AB\u6DFB\u52A0\u3001\u79FB\u52A8\u3001\u5220\u9664\u6216\u8005\u91CD\u7F6E\u5927\u5C0F\uFF0C\u6EDA\u52A8\u504F\u79FB\u5C06\u88AB\u8C03\u6574\u4E3A\u4FDD\u6301\u9759\u6B62\u5728\u4E34\u65F6\u70B9\u4E0A\u3002 <code>proximity</code> \u5982\u679C\u5B83\u5F53\u524D\u6CA1\u6709\u88AB\u6EDA\u52A8\uFF0C\u8FD9\u4E2A\u6EDA\u52A8\u5BB9\u5668\u7684\u53EF\u89C6\u89C6\u56FE\u5C06\u57FA\u4E8E\u57FA\u4E8E\u7528\u6237\u4EE3\u7406\u6EDA\u52A8\u7684\u53C2\u6570\u53BB\u5230\u4E34\u65F6\u70B9\u4E0A\u3002\u5982\u679C\u5185\u5BB9\u88AB\u6DFB\u52A0\u3001\u79FB\u52A8\u3001\u5220\u9664\u6216\u8005\u91CD\u7F6E\u5927\u5C0F\uFF0C\u6EDA\u52A8\u504F\u79FB\u5C06\u88AB\u8C03\u6574\u4E3A\u4FDD\u6301\u9759\u6B62\u5728\u4E34\u65F6\u70B9\u4E0A\u3002</p><h3 id="\u6B63\u5F0F\u8BED\u6CD5" tabindex="-1">\u6B63\u5F0F\u8BED\u6CD5 <a class="header-anchor" href="#\u6B63\u5F0F\u8BED\u6CD5" aria-hidden="true">#</a></h3><blockquote><p>none | [ x | y | block | inline | both ] [ mandatory | proximity ]?</p></blockquote><h2 id="\u5173\u8054" tabindex="-1">\u5173\u8054 <a class="header-anchor" href="#\u5173\u8054" aria-hidden="true">#</a></h2><p><a href="./scroll-snap-align.html">scroll-snap-align</a></p>`,11),o=[e];function c(l,r,i,u,d,k){return s(),a("div",null,o)}var _=n(p,[["render",c]]);export{y as __pageData,_ as default};
