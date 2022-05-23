"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3022],{167:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var o=r(7612);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||n;return r?o.createElement(f,i(i({ref:t},p),{},{components:r})):o.createElement(f,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<n;c++)i[c]=r[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6925:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var o=r(3830),a=r(2056),n=(r(7612),r(167)),i=["components"],s={title:"\ud83d\udc4b Introduction",sidebar_position:1},l=void 0,c={unversionedId:"intro",id:"intro",title:"\ud83d\udc4b Introduction",description:"Welcome to Boyka Framework!",source:"@site/docs/framework-docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/boyka-framework/docs/intro",draft:!1,editUrl:"https://github.com/WasiqBhamla/boyka-framework/edit/main/website/docs/framework-docs/intro.md",tags:[],version:"current",lastUpdatedBy:"Wasiq Bhamla",lastUpdatedAt:1653317637,formattedLastUpdatedAt:"5/23/2022",sidebarPosition:1,frontMatter:{title:"\ud83d\udc4b Introduction",sidebar_position:1},sidebar:"docs",next:{title:"\ud83d\udcd0 Framework Architecture",permalink:"/boyka-framework/docs/getting-started/architecture"}},p={},u=[{value:"Background",id:"background",level:2},{value:"Why Boyka Framework?",id:"why-boyka-framework",level:2},{value:"Features",id:"features",level:3},{value:"But why create yet another framework?",id:"but-why-create-yet-another-framework",level:2}],m={toc:u};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,n.kt)("wrapper",(0,o.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Welcome to Boyka Framework!"),(0,n.kt)("p",null,"Boyka framework is an ultimate test automation framework, which handles all the platforms in a single framework, like API, Web, Android and iOS applications."),(0,n.kt)("h2",{id:"background"},"Background"),(0,n.kt)("p",null,"In the past, I worked on Web, API and Mobile automation testing, all of which required to write custom framework for every project. There was no perfect framework which we could directly add dependency and start writing tests."),(0,n.kt)("p",null,"To solve this problem, I created ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/WasiqB/coteafs-appium"},"coteafs-appium")," framework for Android and iOS applications, ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/WasiqB/coteafs-selenium"},"coteafs-selenium")," framework for Web applications and ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/WasiqB/coteafs-services"},"coteafs-services")," for API."),(0,n.kt)("p",null,"Out of these 3 framework, first 2 got very popular. But the problem I saw in it which no one else noticed was,"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"It was not easy to understand for novice."),(0,n.kt)("li",{parentName:"ul"},"Coding style was not consistent."),(0,n.kt)("li",{parentName:"ul"},"We cannot use same page object for Web, Android and iOS platforms."),(0,n.kt)("li",{parentName:"ul"},"Getting new contributors was not possible because the framework was very complex."),(0,n.kt)("li",{parentName:"ul"},"To Automate all the platforms, we must add 3 separate dependencies.")),(0,n.kt)("h2",{id:"why-boyka-framework"},"Why Boyka Framework?"),(0,n.kt)("p",null,"After looking at the mistakes I made in my previous frameworks, I created Boyka Framework where I tried to address all the shortcomings from my earlier frameworks."),(0,n.kt)("h3",{id:"features"},"Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"With Boyka, you can now create single page object for all the platforms."),(0,n.kt)("li",{parentName:"ul"},"Use consistent coding style across your project."),(0,n.kt)("li",{parentName:"ul"},"Start writing tests right from day 0 on your new project without writing a single line of boilerplate code.")),(0,n.kt)("h2",{id:"but-why-create-yet-another-framework"},"But why create yet another framework?"),(0,n.kt)("p",null,"Although there are many frameworks in open source community, I found that almost all the frameworks required to write some boilerplate code in order to get started with a new project."),(0,n.kt)("p",null,"Boyka was created with the aim to simplify writing tests on any project you may work on. That means, no need to write even a single line of boilerplate code, just write your tests and run them."),(0,n.kt)("p",null,"Boyka also helps in writing simple page objects for your application where you can specify locators for Web, Android and iOS applications, and it will automatically use the appropriate locator when running your tests."),(0,n.kt)("p",null,"In addition, Boyka also helps with writing tests for API applications, which means you can write tests for any API endpoint."),(0,n.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"Boyka framework is in it's early stages of development. We will add a proper comparison page with other popular frameworks in the future on this site."))))}d.isMDXComponent=!0}}]);