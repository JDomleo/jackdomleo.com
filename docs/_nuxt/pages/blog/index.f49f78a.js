(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{225:function(t,e,r){var content=r(229);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(12).default)("9d0031bc",content,!0,{sourceMap:!1})},226:function(t,e,r){var content=r(231);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(12).default)("5c06c2ac",content,!0,{sourceMap:!1})},228:function(t,e,r){"use strict";var n=r(225);r.n(n).a},229:function(t,e,r){(e=r(11)(!1)).push([t.i,":root{--skeleton-light:#444;--skeleton-dark:#3a3a3a}.theme--light{--skeleton-light:#eee;--skeleton-dark:#ddd}",""]),t.exports=e},230:function(t,e,r){"use strict";var n=r(226);r.n(n).a},231:function(t,e,r){(e=r(11)(!1)).push([t.i,"li.box[data-v-b54b01b6]{border:1px solid var(--color-grey);border-radius:.75rem;overflow:hidden}li.box:last-of-type a[data-v-b54b01b6]{flex-direction:row-reverse}li.box:last-of-type a svg[data-v-b54b01b6]{margin-right:0;margin-left:1rem}li.box[data-v-b54b01b6]:focus,li.box[data-v-b54b01b6]:hover{box-shadow:0 0 10px -2px var(--more-projects-shadow-color)}li.box:focus svg[data-v-b54b01b6],li.box:hover svg[data-v-b54b01b6]{-webkit-filter:drop-shadow(2px 2px 1px var(--more-projects-icon-shadow-color));filter:drop-shadow(2px 2px 1px var(--more-projects-icon-shadow-color))}li.box a[data-v-b54b01b6]{display:inline-flex;align-items:center;justify-content:center;text-align:center;padding:1.5rem 1rem;color:inherit;text-decoration:none;width:100%}li.box a[data-v-b54b01b6],li.box a svg[data-v-b54b01b6]{transition:all .16s ease}li.box a svg[data-v-b54b01b6]{height:3rem;width:3rem;margin-right:1rem}.articles[data-v-b54b01b6]{padding-left:0;list-style-type:none}.articles>li[data-v-b54b01b6]{margin:4rem 0}.articles>li[data-v-b54b01b6]:first-of-type{margin-top:0}.articles>li[data-v-b54b01b6]:last-of-type{margin-bottom:0}.articles--skeleton[data-v-b54b01b6]{list-style-type:none;padding-left:0;overflow-x:hidden}.articles--skeleton li[data-v-b54b01b6]{margin:4rem 0}.articles--skeleton li[data-v-b54b01b6]:first-of-type{margin-top:1.25rem}.articles--skeleton li[data-v-b54b01b6]:last-of-type{margin-bottom:0}.articles--skeleton li>div[data-v-b54b01b6]{animation:skeleton-data-v-b54b01b6 5s ease infinite;background:linear-gradient(90deg,var(--skeleton-light),var(--skeleton-light) 46%,var(--skeleton-dark) 50%,var(--skeleton-light) 54%,var(--skeleton-light));background-size:250%}.articles--skeleton li>div.skeleton__header[data-v-b54b01b6]{height:2rem;width:45%;margin-bottom:1.25rem}.articles--skeleton li>div.skeleton__meta[data-v-b54b01b6]{height:1.2rem;width:30%;margin-bottom:1.5rem}.articles--skeleton li>div.skeleton__description[data-v-b54b01b6]{height:1.1rem}.articles--skeleton li>div.skeleton__description.first[data-v-b54b01b6]{width:80vw}.articles--skeleton li>div.skeleton__description.last[data-v-b54b01b6]{width:35%;margin-top:.5rem}@keyframes skeleton-data-v-b54b01b6{0%{background-position:100% 50%}to{background-position:0 50%}}.articles .article__title a[data-v-b54b01b6]{text-decoration:none}.articles .article__meta[data-v-b54b01b6]{padding-left:0;display:flex;align-items:center}.articles .article__meta li[data-v-b54b01b6]:first-child{list-style-type:none;margin-right:1.5rem;font-weight:700}.articles .article__body[data-v-b54b01b6]{margin-top:1.5rem}",""]),t.exports=e},232:function(t,e,r){var content=r(248);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(12).default)("14e2df67",content,!0,{sourceMap:!1})},244:function(t,e,r){"use strict";r.d(e,"a",(function(){return w}));r(15),r(16),r(7),r(26);var n=r(5),o=r(19),l=r(8),c=r(9),d=r(4),f=r(3),v=r(0),h=r(286);function m(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(d.a)(t);if(e){var o=Object(d.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(c.a)(this,r)}}var y=function(t,e,r,desc){var n,o=arguments.length,l=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(l=(o<3?n(l):o>3?n(e,r,l):n(e,r))||l);return o>3&&l&&Object.defineProperty(e,r,l),l},x=function(t){Object(l.a)(r,t);var e=m(r);function r(){return Object(n.a)(this,r),e.apply(this,arguments)}return Object(o.a)(r,[{key:"articleDate",value:function(t){var e=Date.parse(String(t));return{date:Object(h.a)(e,"do MMMM yyyy"),datetime:Object(h.a)(e,"yyyy-MM-dd")}}}]),r}(v.Vue);y([Object(v.Prop)({type:Array})],x.prototype,"articles",void 0),y([Object(v.Prop)()],x.prototype,"loading",void 0);var _=x=y([v.Component],x),k=(r(228),r(230),r(6)),w=Object(k.a)(_,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.articles.length>0&&!t.loading.loading?r("ul",{staticClass:"articles"},t._l(t.articles,(function(e,n){return r("li",{key:n,attrs:{"aria-setsize":t.articles.length,"aria-posinset":n+1}},[r("article",{staticClass:"article"},[r("header",[r("h2",{staticClass:"article__title"},[r("nuxt-link",{attrs:{to:"/blog/"+e.slug}},[t._v("\n            "+t._s(e.title)+"\n          ")])],1),t._v(" "),r("ul",{staticClass:"article__meta"},[r("li",[r("time",{attrs:{datetime:t.articleDate(e.date).datetime}},[t._v(t._s(t.articleDate(e.date).date))])]),t._v(" "),r("li",[r("span",[t._v(t._s(e.readingTime)+" "+t._s(1===e.readingTime?"minute":"minutes")+" read")])])])]),t._v(" "),r("section",{staticClass:"article__body"},[r("p",[t._v(t._s(e.description))])])])])})),0):t.loading.loading?r("ul",{staticClass:"articles--skeleton",attrs:{role:"presentation"}},t._l(t.loading.skeletonCount,(function(i){return r("li",{key:i,staticClass:"article--skeleton",attrs:{role:"presentation"}},[r("div",{staticClass:"skeleton__header"}),t._v(" "),r("div",{staticClass:"skeleton__meta"}),t._v(" "),r("div",{staticClass:"skeleton__description first"}),t._v(" "),r("div",{staticClass:"skeleton__description last"})])})),0):r("p",{staticClass:"center"},[t._v("\n  No articles match that search.\n")])}),[],!1,null,"b54b01b6",null).exports},247:function(t,e,r){"use strict";var n=r(232);r.n(n).a},248:function(t,e,r){(e=r(11)(!1)).push([t.i,"li.box[data-v-42080086]{border:1px solid var(--color-grey);border-radius:.75rem;overflow:hidden}li.box:last-of-type a[data-v-42080086]{flex-direction:row-reverse}li.box:last-of-type a svg[data-v-42080086]{margin-right:0;margin-left:1rem}li.box[data-v-42080086]:focus,li.box[data-v-42080086]:hover{box-shadow:0 0 10px -2px var(--more-projects-shadow-color)}li.box:focus svg[data-v-42080086],li.box:hover svg[data-v-42080086]{-webkit-filter:drop-shadow(2px 2px 1px var(--more-projects-icon-shadow-color));filter:drop-shadow(2px 2px 1px var(--more-projects-icon-shadow-color))}li.box a[data-v-42080086]{display:inline-flex;align-items:center;justify-content:center;text-align:center;padding:1.5rem 1rem;color:inherit;text-decoration:none;width:100%}li.box a[data-v-42080086],li.box a svg[data-v-42080086]{transition:all .16s ease}li.box a svg[data-v-42080086]{height:3rem;width:3rem;margin-right:1rem}.alternative[data-v-42080086]{padding-left:0;list-style-type:none;display:grid;margin-bottom:1.5rem;grid-gap:1rem;gap:1rem;grid-template-rows:auto;grid-template-columns:1fr}@media (min-width:30em){.alternative[data-v-42080086]{grid-template-columns:1fr 1fr}}",""]),t.exports=e},288:function(t,e,r){"use strict";r.r(e);r(15),r(16),r(7),r(26),r(34);var n=r(10),o=r(5),l=r(19),c=r(8),d=r(9),f=r(4),v=r(3),h=r(0),m=r(286),y=r(91),x=r(244),_=r(138);function k(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(d.a)(this,r)}}var w=function(t,e,r,desc){var n,o=arguments.length,l=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(v.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(l=(o<3?n(l):o>3?n(e,r,l):n(e,r))||l);return o>3&&l&&Object.defineProperty(e,r,l),l},j=function(t){Object(c.a)(d,t);var e,r=k(d);function d(){var t;return Object(o.a)(this,d),(t=r.apply(this,arguments)).articles=[],t.filteredArticles=[],t.articleSearch="",t.articlesLoading=!1,t}return Object(l.a)(d,[{key:"fetch",value:(e=Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.articlesLoading=!0,t.next=3,this.$content("blog",{deep:!0}).only(["title","date","slug","description","readingTime","hashtags"]).sortBy("date","desc").fetch();case 3:this.articles=t.sent,this.filterArticles(),this.articlesLoading=!1;case 6:case"end":return t.stop()}}),t,this)}))),function(){return e.apply(this,arguments)})},{key:"filterArticles",value:function(){var t=this;""!==this.articleSearch?this.filteredArticles=this.articles.filter((function(article){return t.filterArticle(article)})):this.filteredArticles=this.articles}},{key:"filterArticle",value:function(article){return _.default.fuzzySearch(article.title,this.articleSearch)||_.default.fuzzySearch(article.description,this.articleSearch)||_.default.fuzzySearch(Object(m.a)(Date.parse(String(article.date)),"do MMMM yyyy"),this.articleSearch)||_.default.fuzzySearch(Object(m.a)(Date.parse(String(article.date)),"yyyy-MM-dd"),this.articleSearch)||_.default.fuzzySearch(article.readingTime,this.articleSearch)||_.default.fuzzySearch("".concat(article.readingTime," minutes"),this.articleSearch)||_.default.fuzzySearch(article.hashtags.join(" "),this.articleSearch)}}]),d}(h.Vue),O=j=w([Object(h.Component)({components:{ArticlesList:x.a,PageTemplate:y.d,Textfield:y.f},head:function(){return{title:"Blog",meta:[{hid:"description",name:"description",content:"A list of all the articles written by me!"},{hid:"og:description",name:"og:description",content:"A list of all the articles written by me!"}]}}})],j),S=(r(247),r(6)),component=Object(S.a)(O,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("page-template",{attrs:{"page-title":"Blog"}},[r("p",[t._v("You can read my articles here or you can:")]),t._v(" "),r("ul",{staticClass:"alternative"},[r("li",{staticClass:"box",attrs:{"aria-setsize":"2","aria-posinset":"1"}},[r("a",{attrs:{href:"/feed.xml",rel:"alternate",type:"application/rss+xml"}},[r("svg-icon",{attrs:{name:"rss"}}),t._v("\n        Subscribe to my RSS feed\n      ")],1)]),t._v(" "),r("li",{staticClass:"box",attrs:{"aria-setsize":"2","aria-posinset":"2"}},[r("a",{attrs:{href:"https://dev.to/jackdomleo7",rel:"nofollow noopener"}},[r("svg-icon",{attrs:{name:"dev"}}),t._v("\n        Read on DEV.to\n      ")],1)])]),t._v(" "),r("textfield",{attrs:{label:"Filter articles",type:"search",placeholder:"Search..."},on:{input:t.filterArticles},model:{value:t.articleSearch,callback:function(e){t.articleSearch=e},expression:"articleSearch"}}),t._v(" "),r("articles-list",{attrs:{articles:t.filteredArticles,loading:{loading:t.articlesLoading,skeletonCount:3}}})],1)}),[],!1,null,"42080086",null);e.default=component.exports}}]);