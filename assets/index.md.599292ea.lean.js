import{u as f,_ as y,o as l,c as p,b as r,n as h,t as d,e as x}from"./app.892892a0.js";const c={props:{autoplay:{type:Boolean,default:!0}},data(){return{music:{url:"",name:"",picurl:"",artistname:""},backgroundImg:"https://api.dujin.org/bing/1920.php"}},computed:{},mounted(){this.getMusic(),this.getBase64(this.backgroundImg,e=>{this.backgroundImg=`url(${e})`})},methods:{getBase64(e,t){return t?t(e):null},ajax({method:e="get",url:t,header:o,data:a,dataType:i,success:n,error:_}){var s=null;try{s=new XMLHttpRequest}catch{s=new ActiveXObject("Microsoft.XMLHTTP")}if(typeof a=="object"&&(a=JSON.stringify(a)),e=="get"&&a&&(t+=`?${a}`,a=""),s.open(e,`${t}`,!0),o)for(const u in o)s.setRequestHeader(u,o[u]);else s.setRequestHeader("Content-type","application/x-www-form-urlencoded");s.send(`${a}`),s.onreadystatechange=function(){if(s.readyState==4)if(s.status==200&&n)switch(i){case"json":n(JSON.parse(s.responseText));break;default:n(s.response);break}else _&&_("Error"+s.status)}},getMusic(){let e=this;this.ajax({url:"https://api.uomg.com/api/rand.music?sort=\u70ED\u6B4C\u699C&format=json",dataType:"json",success:t=>{const{data:o}=t;e.music=o}})},update(){var e=document.getElementById("music"),t=document.getElementById("imgbox");e.ended==!0&&this.getMusic(),e.paused?t.style.setProperty("animation-play-state","paused",""):t.style.setProperty("animation-play-state","running","")}}},m=()=>{f(e=>({d15383ea:e.backgroundImg}))},g=c.setup;c.setup=g?(e,t)=>(m(),g(e,t)):m;const v=c,b={class:"musicBox"},B={id:"imgbox",class:"musicBox__imgbox"},j=["href"],k=["src"],I={class:"musicBox__title"},M={class:"musicBox__artist"},S=["src","autoplay","ontimeupdate"];function w(e,t,o,a,i,n){return l(),p("div",b,[r("div",{class:"musicBox__mask",style:h({filter:i.backgroundImg?"":"blur(100px)"})},null,4),r("div",B,[r("a",{href:i.music.picurl,target:"_blank"},[r("img",{src:i.music.picurl,alt:"\u4E13\u8F91\u56FE\u7247"},null,8,k)],8,j)]),r("h1",I,d(i.music.name),1),r("p",M,d(i.music.artistsname),1),r("audio",{id:"music",src:i.music.url,autoplay:o.autoplay,controls:"controls",ontimeupdate:n.update},null,8,S)])}var P=y(v,[["render",w],["__scopeId","data-v-66df15f4"]]);const T='{"title":"Home","description":"","frontmatter":{"home":true,"heroImage":"/logo.jpg","footer":"MIT Licensed | Copyright \xA9 2022-present Conard"},"headers":[],"relativePath":"index.md","lastUpdated":1646671466760}',C={},E=Object.assign(C,{setup(e){return(t,o)=>(l(),p("div",null,[x(P)]))}});export{T as __pageData,E as default};
