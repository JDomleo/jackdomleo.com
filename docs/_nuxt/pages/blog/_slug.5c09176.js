(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{243:function(t,e,r){var content=r(265);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(10).default)("8575003e",content,!0,{sourceMap:!1})},264:function(t,e,r){"use strict";var n=r(243);r.n(n).a},265:function(t,e,r){(e=r(9)(!1)).push([t.i,".blog__back[data-v-167485dc]{display:inline-flex;align-items:center;text-decoration:none;margin-top:1rem}.blog__back svg[data-v-167485dc]{height:1.8rem;width:1.8rem}.blog__meta[data-v-167485dc]{padding-left:0;display:flex;align-items:center}.blog__meta li[data-v-167485dc]:first-child{list-style-type:none;margin-right:2rem;font-weight:700}.blog__devto[data-v-167485dc]{font-weight:var(--body-font-weight);font-size:90%}.blog__hashtags[data-v-167485dc]{align-items:center;display:flex;flex-wrap:wrap;grid-gap:1rem;gap:1rem;list-style-type:none;margin:1rem 0;padding-left:0}.blog__hashtags li[data-v-167485dc]{display:inline-block}.social-share[data-v-167485dc]{align-items:center;display:flex;grid-gap:1rem;gap:1rem;list-style-type:none;margin:1rem 0 3rem;padding-left:0}.social-share li[data-v-167485dc]{display:inline-block}.social-share a[data-v-167485dc]{display:block;color:inherit;transition:color .16s ease}@media (prefers-reduced-motion:reduce){.social-share a[data-v-167485dc]{transition:none}}.social-share svg[data-v-167485dc]{height:1rem;width:1rem}",""]),t.exports=e},299:function(t,e,r){"use strict";r.r(e);r(144),r(34);var n=r(12),o=r(295),c={components:{Codepen:r(93).b},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,n=t.params,o=n.slug||"index",e.next=4,r("blog",{deep:!0}).where({slug:o}).only(["title","date","slug","description","readingTime","body","containsCodePen","hashtags","twitterEmbed","twitterVia","devtoLink"]).fetch();case 4:return c=(c=e.sent)[0],e.abrupt("return",{page:c});case 7:case"end":return e.stop()}}),e)})))()},methods:{articleDate:function(t){var e=Date.parse(String(t));return{date:Object(o.a)(e,"do MMMM yyyy"),datetime:Object(o.a)(e,"yyyy-MM-dd")}},socialShares:function(){return[{platform:"Twitter",url:"https://twitter.com/intent/tweet?text=".concat(this.page.title,"&via=jackdomleo7").concat(this.page.twitterVia?", @"+this.page.twitterVia.join(", @"):"","&url=https://jackdomleo.dev").concat(this.$route.path)},{platform:"LinkedIn",url:"https://www.linkedin.com/shareArticle?mini=true&url=https://jackdomleo.dev".concat(this.$route.path,"&title=").concat(this.page.title,"&summary=").concat(this.page.title,"&source=blog.jackdomleo.dev").concat(this.$route.path)}]}},head:function(){return{title:this.page.title,meta:[{hid:"og:image",name:"og:image",property:"og:image",content:"".concat("https://jackdomleo.dev").concat(this.$route.path).concat(this.$route.path.endsWith("/")?"":"/","og.png")},{hid:"og:title",name:"og:title",property:"og:title",content:"".concat(this.page.title," | Blog | Jack Domleo")},{hid:"og:description",name:"og:description",property:"og:description",content:"".concat(this.page.description)},{hid:"description",name:"description",property:"description",content:"".concat(this.page.description)},{hid:"og:type",name:"og:type",property:"og:type",content:"article"},{hid:"article:published_time",name:"article:published_time",property:"article:published_time",content:"".concat(this.page.date)},{hid:"article:author",name:"article:author",property:"article:author",content:"Jack Domleo"},{hid:"article:tag",name:"article:tag",property:"article:tag",content:"".concat(this.page.hashtags)}]}}},l=(r(264),r(6)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("article",{staticClass:"markdown"},[r("nuxt-link",{staticClass:"blog__back",attrs:{to:"/blog"}},[r("svg-icon",{attrs:{name:"arrow-left"}}),t._v("\n    Back to blogs\n  ")],1),t._v(" "),r("h1",[t._v(t._s(t.page.title))]),t._v(" "),r("ul",{staticClass:"blog__meta"},[r("li",[r("time",{attrs:{datetime:t.articleDate(t.page.date).datetime}},[t._v(t._s(t.articleDate(t.page.date).date))])]),t._v(" "),r("li",[r("span",[t._v(t._s(t.page.readingTime)+" "+t._s(1===t.page.readingTime?"minute":"minutes")+" read")])])]),t._v(" "),t.page.hashtags?r("ul",{staticClass:"blog__hashtags"},t._l(t.page.hashtags,(function(e,n){return r("li",{key:e,attrs:{"aria-setsize":t.page.hashtags.length,"aria-posinset":n+1}},[r("i",[t._v("#"+t._s(e))])])})),0):t._e(),t._v(" "),t.page.devtoLink?r("p",{staticClass:"blog__devto"},[t._v("\n    You can also read this article "),r("a",{staticClass:"link",attrs:{href:t.page.devtoLink,rel:"nofollow noopener"}},[t._v("here on DEV.to")])]):t._e(),t._v(" "),r("ul",{staticClass:"social-share"},[t._m(0),t._v(" "),t._l(t.socialShares(),(function(e,n){return r("li",{key:n,attrs:{"aria-setsize":t.socialShares().length,"aria-posinset":n+1}},[r("a",{attrs:{href:e.url,rel:"nofollow noopener",target:"_blank","data-cooltipz-dir":"bottom","aria-label":"Share on "+e.platform}},[r("svg-icon",{attrs:{name:e.platform.toLowerCase()}})],1)])}))],2),t._v(" "),r("p",[t._v(t._s(t.page.description))]),t._v(" "),r("hr"),t._v(" "),r("nuxt-content",{attrs:{document:t.page}}),t._v(" "),t.page.containsCodePen?r("script",{attrs:{async:"",src:"https://static.codepen.io/assets/embed/ei.js"}}):t._e(),t._v(" "),t.page.twitterEmbed?r("script",{attrs:{async:"",src:"https://platform.twitter.com/widgets.js",charset:"utf-8"}}):t._e()],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("li",{attrs:{role:"presentation"}},[e("strong",[this._v("Share")]),this._v(":\n    ")])}],!1,null,"167485dc",null);e.default=component.exports}}]);