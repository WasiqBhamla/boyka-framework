"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6103],{911:function(e,t,n){n.d(t,{Z:function(){return L}});var a=n(2706),r=n(5721),l=n(2238),i=n(4817),o=n(955),s=n(8935),c=n(5891),m="sidebar_RWnc",u="sidebarItemTitle_gCko",d="sidebarItemList_iJne",v="sidebarItem_BrIL",g="sidebarItemLink_sXqG",f="sidebarItemLinkActive_bx4j";function p(e){var t=e.sidebar;return r.createElement("aside",{className:"col col--3"},r.createElement("nav",{className:(0,l.Z)(m,"thin-scrollbar"),"aria-label":(0,c.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,l.Z)(u,"margin-bottom--md")},t.title),r.createElement("ul",{className:(0,l.Z)(d,"clean-list")},t.items.map((function(e){return r.createElement("li",{key:e.permalink,className:v},r.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:g,activeClassName:f},e.title))})))))}var h=n(2338);function b(e){var t=e.sidebar;return r.createElement("ul",{className:"menu__list"},t.items.map((function(e){return r.createElement("li",{key:e.permalink,className:"menu__list-item"},r.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title))})))}function E(e){return r.createElement(h.Zo,{component:b,props:e})}function N(e){var t=e.sidebar,n=(0,o.i)();return null!=t&&t.items.length?"mobile"===n?r.createElement(E,{sidebar:t}):r.createElement(p,{sidebar:t}):null}var _=["sidebar","toc","children"];function L(e){var t=e.sidebar,n=e.toc,o=e.children,s=(0,a.Z)(e,_),c=t&&t.items.length>0;return r.createElement(i.Z,s,r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},r.createElement(N,{sidebar:t}),r.createElement("main",{className:(0,l.Z)("col",{"col--7":c,"col--9 col--offset-1":!c}),itemScope:!0,itemType:"http://schema.org/Blog"},o),n&&r.createElement("div",{className:"col col--2"},n))))}},4087:function(e,t,n){n.d(t,{Z:function(){return L}});var a=n(5721),r=n(2238),l=n(5891),i=n(8935),o=n(9797),s=n(4484),c=n(6698),m=n(2141),u=n(2518),d=n(2589);function v(e){return e.href?a.createElement(i.Z,e):a.createElement(a.Fragment,null,e.children)}function g(e){var t=e.author,n=t.name,r=t.title,l=t.url,i=t.imageURL,o=t.email,s=l||o&&"mailto:"+o||void 0;return a.createElement("div",{className:"avatar margin-bottom--sm"},i&&a.createElement(v,{href:s,className:"avatar__photo-link"},a.createElement("img",{className:"avatar__photo",src:i,alt:n})),n&&a.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},a.createElement("div",{className:"avatar__name"},a.createElement(v,{href:s,itemProp:"url"},a.createElement("span",{itemProp:"name"},n))),r&&a.createElement("small",{className:"avatar__subtitle",itemProp:"description"},r)))}var f="authorCol_kNQJ",p="imageOnlyAuthorRow_WqQk",h="imageOnlyAuthorCol_tRkf";function b(e){var t=e.authors,n=e.assets;if(0===t.length)return null;var l=t.every((function(e){return!e.name}));return a.createElement("div",{className:(0,r.Z)("margin-top--md margin-bottom--sm",l?p:"row")},t.map((function(e,t){var i;return a.createElement("div",{className:(0,r.Z)(!l&&"col col--6",l?h:f),key:t},a.createElement(g,{author:Object.assign({},e,{imageURL:null!=(i=n.authorsImageUrls[t])?i:e.imageURL})}))})))}var E="blogPostTitle_7lA6",N="blogPostData_OaHK",_="blogPostDetailsFull_HBiB";function L(e){var t,n,v=(n=(0,s.c)().selectMessage,function(e){var t=Math.ceil(e);return n(t,(0,l.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),g=(0,o.C)().withBaseUrl,f=e.children,p=e.frontMatter,h=e.assets,L=e.metadata,k=e.truncated,Z=e.isBlogPostPage,x=void 0!==Z&&Z,P=L.date,C=L.formattedDate,H=L.permalink,y=L.tags,I=L.readingTime,w=L.title,A=L.editUrl,T=L.authors,M=null!=(t=h.image)?t:p.image,O=!x&&k,R=y.length>0,B=x?"h1":"h2";return a.createElement("article",{className:x?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},a.createElement("header",null,a.createElement(B,{className:E,itemProp:"headline"},x?w:a.createElement(i.Z,{itemProp:"url",to:H},w)),a.createElement("div",{className:(0,r.Z)(N,"margin-vert--md")},a.createElement("time",{dateTime:P,itemProp:"datePublished"},C),void 0!==I&&a.createElement(a.Fragment,null," \xb7 ",v(I))),a.createElement(b,{authors:T,assets:h})),M&&a.createElement("meta",{itemProp:"image",content:g(M,{absolute:!0})}),a.createElement("div",{id:x?c.blogPostContainerID:void 0,className:"markdown",itemProp:"articleBody"},a.createElement(m.Z,null,f)),(R||k)&&a.createElement("footer",{className:(0,r.Z)("row docusaurus-mt-lg",x&&_)},R&&a.createElement("div",{className:(0,r.Z)("col",{"col--9":O})},a.createElement(d.Z,{tags:y})),x&&A&&a.createElement("div",{className:"col margin-top--sm"},a.createElement(u.Z,{editUrl:A})),O&&a.createElement("div",{className:(0,r.Z)("col text--right",{"col--3":R})},a.createElement(i.Z,{to:L.permalink,"aria-label":(0,l.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:w})},a.createElement("b",null,a.createElement(l.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},926:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var a=n(5721),r=n(2238),l=n(495),i=n(8005),o=n(911),s=n(4087),c=n(5731),m=n(5891),u=n(809);function d(e){var t=e.nextItem,n=e.prevItem;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,m.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n&&a.createElement(u.Z,(0,c.Z)({},n,{subLabel:a.createElement(m.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")})),t&&a.createElement(u.Z,(0,c.Z)({},t,{subLabel:a.createElement(m.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post"),isNext:!0})))}var v=n(1546);function g(e){var t,n=e.content,r=n.assets,i=n.metadata,o=i.title,s=i.description,c=i.date,m=i.tags,u=i.authors,d=i.frontMatter,v=d.keywords,g=null!=(t=r.image)?t:d.image;return a.createElement(l.d,{title:o,description:s,keywords:v,image:g},a.createElement("meta",{property:"og:type",content:"article"}),a.createElement("meta",{property:"article:published_time",content:c}),u.some((function(e){return e.url}))&&a.createElement("meta",{property:"article:author",content:u.map((function(e){return e.url})).filter(Boolean).join(",")}),m.length>0&&a.createElement("meta",{property:"article:tag",content:m.map((function(e){return e.label})).join(",")}))}function f(e){var t=e.content,n=e.sidebar,r=t.assets,l=t.metadata,i=l.nextItem,c=l.prevItem,m=l.frontMatter,u=m.hide_table_of_contents,g=m.toc_min_heading_level,f=m.toc_max_heading_level;return a.createElement(o.Z,{sidebar:n,toc:!u&&t.toc&&t.toc.length>0?a.createElement(v.Z,{toc:t.toc,minHeadingLevel:g,maxHeadingLevel:f}):void 0},a.createElement(s.Z,{frontMatter:m,assets:r,metadata:l,isBlogPostPage:!0},a.createElement(t,null)),(i||c)&&a.createElement(d,{nextItem:i,prevItem:c}))}function p(e){return a.createElement(l.FG,{className:(0,r.Z)(i.k.wrapper.blogPages,i.k.page.blogPostPage)},a.createElement(g,e),a.createElement(f,e))}},1546:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(5731),r=n(2706),l=n(5721),i=n(2238),o=n(5296),s="tableOfContents_AdQB",c=["className"];function m(e){var t=e.className,n=(0,r.Z)(e,c);return l.createElement("div",{className:(0,i.Z)(s,"thin-scrollbar",t)},l.createElement(o.Z,(0,a.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},5296:function(e,t,n){n.d(t,{Z:function(){return h}});var a=n(5731),r=n(2706),l=n(5721),i=["parentIndex"];function o(e){var t=e.map((function(e){return Object.assign({},e,{parentIndex:-1,children:[]})})),n=Array(7).fill(-1);t.forEach((function(e,t){var a=n.slice(2,e.level);e.parentIndex=Math.max.apply(Math,a),n[e.level]=t}));var a=[];return t.forEach((function(e){var n=e.parentIndex,l=(0,r.Z)(e,i);n>=0?t[n].children.push(l):a.push(l)})),a}function s(e){var t=e.toc,n=e.minHeadingLevel,a=e.maxHeadingLevel;return t.flatMap((function(e){var t=s({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[Object.assign({},e,{children:t})]:t}))}var c=n(1287);function m(e){var t=e.getBoundingClientRect();return t.top===t.bottom?m(e.parentNode):t}function u(e,t){var n,a,r=t.anchorTopOffset,l=e.find((function(e){return m(e).top>=r}));return l?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(m(l))?l:null!=(a=e[e.indexOf(l)-1])?a:null:null!=(n=e[e.length-1])?n:null}function d(){var e=(0,l.useRef)(0),t=(0,c.L)().navbar.hideOnScroll;return(0,l.useEffect)((function(){e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function v(e){var t=(0,l.useRef)(void 0),n=d();(0,l.useEffect)((function(){if(!e)return function(){};var a=e.linkClassName,r=e.linkActiveClassName,l=e.minHeadingLevel,i=e.maxHeadingLevel;function o(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(a),o=function(e){for(var t=e.minHeadingLevel,n=e.maxHeadingLevel,a=[],r=t;r<=n;r+=1)a.push("h"+r+".anchor");return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:l,maxHeadingLevel:i}),s=u(o,{anchorTopOffset:n.current}),c=e.find((function(e){return s&&s.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(r),e.classList.add(r),t.current=e):e.classList.remove(r)}(e,e===c)}))}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),function(){document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}}),[e,n])}function g(e){var t=e.toc,n=e.className,a=e.linkClassName,r=e.isChild;return t.length?l.createElement("ul",{className:r?void 0:n},t.map((function(e){return l.createElement("li",{key:e.id},l.createElement("a",{href:"#"+e.id,className:null!=a?a:void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(g,{isChild:!0,toc:e.children,className:n,linkClassName:a}))}))):null}var f=l.memo(g),p=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function h(e){var t=e.toc,n=e.className,i=void 0===n?"table-of-contents table-of-contents__left-border":n,m=e.linkClassName,u=void 0===m?"table-of-contents__link":m,d=e.linkActiveClassName,g=void 0===d?void 0:d,h=e.minHeadingLevel,b=e.maxHeadingLevel,E=(0,r.Z)(e,p),N=(0,c.L)(),_=null!=h?h:N.tableOfContents.minHeadingLevel,L=null!=b?b:N.tableOfContents.maxHeadingLevel,k=function(e){var t=e.toc,n=e.minHeadingLevel,a=e.maxHeadingLevel;return(0,l.useMemo)((function(){return s({toc:o(t),minHeadingLevel:n,maxHeadingLevel:a})}),[t,n,a])}({toc:t,minHeadingLevel:_,maxHeadingLevel:L});return v((0,l.useMemo)((function(){if(u&&g)return{linkClassName:u,linkActiveClassName:g,minHeadingLevel:_,maxHeadingLevel:L}}),[u,g,_,L])),l.createElement(f,(0,a.Z)({toc:k,className:i,linkClassName:u},E))}},4484:function(e,t,n){n.d(t,{c:function(){return c}});var a=n(5721),r=n(7188),l=["zero","one","two","few","many","other"];function i(e){return l.filter((function(t){return e.includes(t)}))}var o={locale:"en",pluralForms:i(["one","other"]),select:function(e){return 1===e?"one":"other"}};function s(){var e=(0,r.Z)().i18n.currentLocale;return(0,a.useMemo)((function(){try{return t=e,n=new Intl.PluralRules(t),{locale:t,pluralForms:i(n.resolvedOptions().pluralCategories),select:function(e){return n.select(e)}}}catch(a){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+a.message+"\n"),o}var t,n}),[e])}function c(){var e=s();return{selectMessage:function(t,n){return function(e,t,n){var a=e.split("|");if(1===a.length)return a[0];a.length>n.pluralForms.length&&console.error("For locale="+n.locale+", a maximum of "+n.pluralForms.length+" plural forms are expected ("+n.pluralForms.join(",")+"), but the message contains "+a.length+": "+e);var r=n.select(t),l=n.pluralForms.indexOf(r);return a[Math.min(l,a.length-1)]}(n,t,e)}}}}}]);