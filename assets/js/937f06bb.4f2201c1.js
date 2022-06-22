"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8011],{167:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var i=n(5721);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,b=p["".concat(s,".").concat(m)]||p[m]||d[m]||r;return n?i.createElement(b,o(o({ref:t},u),{},{components:n})):i.createElement(b,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4519:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var i=n(5731),a=n(2706),r=(n(5721),n(167)),o=["components"],l={title:"ElementActions",sidebar_position:2},s=void 0,c={unversionedId:"actions/element-actions",id:"actions/element-actions",title:"ElementActions",description:"attributeOf",source:"@site/docs/api/actions/element-actions.md",sourceDirName:"actions",slug:"/actions/element-actions",permalink:"/boyka-framework/api/actions/element-actions",draft:!1,editUrl:"https://github.com/WasiqBhamla/boyka-framework/edit/main/website/docs/api/actions/element-actions.md",tags:[],version:"current",lastUpdatedBy:"SahilPuri2020",lastUpdatedAt:1655896053,formattedLastUpdatedAt:"6/22/2022",sidebarPosition:2,frontMatter:{title:"ElementActions",sidebar_position:2},sidebar:"api",previous:{title:"DriverActions",permalink:"/boyka-framework/api/actions/driver-actions"},next:{title:"KeyboardActions",permalink:"/boyka-framework/api/actions/keyboard-actions"}},u={},d=[{value:"<code>attributeOf</code>",id:"attributeof",level:2},{value:"<code>clear</code>",id:"clear",level:2},{value:"<code>isDisplayed</code>",id:"isdisplayed",level:2},{value:"<code>isEnabled</code>",id:"isenabled",level:2},{value:"<code>isSelected</code>",id:"isselected",level:2},{value:"<code>submit</code>",id:"submit",level:2},{value:"<code>textOf</code>",id:"textof",level:2}],p={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"attributeof"},(0,r.kt)("inlineCode",{parentName:"h2"},"attributeOf")),(0,r.kt)("p",null,"This method is used to get the attribute of the given element."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'import static com.github.wasiqb.boyka.actions.ElementActions.attributeOf;\n. . .\nSystem.out.println (attributeOf ("href"));\n')),(0,r.kt)("h2",{id:"clear"},(0,r.kt)("inlineCode",{parentName:"h2"},"clear")),(0,r.kt)("p",null,"This method is used to clear the given element."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"import static com.github.wasiqb.boyka.actions.ElementActions.clear;\n. . .\nclear (locator);\n")),(0,r.kt)("h2",{id:"isdisplayed"},(0,r.kt)("inlineCode",{parentName:"h2"},"isDisplayed")),(0,r.kt)("p",null,"This method is used to check whether the given element is displayed or not."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"import static com.github.wasiqb.boyka.actions.ElementActions.isDisplayed;\n. . .\nSystem.out.println (isDisplayed (locator));\n")),(0,r.kt)("h2",{id:"isenabled"},(0,r.kt)("inlineCode",{parentName:"h2"},"isEnabled")),(0,r.kt)("p",null,"This method is used to check whether the given element is enabled or not."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"import static com.github.wasiqb.boyka.actions.ElementActions.isEnabled;\n. . .\nSystem.out.println (isEnabled (locator));\n")),(0,r.kt)("h2",{id:"isselected"},(0,r.kt)("inlineCode",{parentName:"h2"},"isSelected")),(0,r.kt)("p",null,"This method is used to check whether the given element is selected or not."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"import static com.github.wasiqb.boyka.actions.ElementActions.isSelected;\n. . .\nSystem.out.println (isSelected (locator));\n")),(0,r.kt)("h2",{id:"submit"},(0,r.kt)("inlineCode",{parentName:"h2"},"submit")),(0,r.kt)("p",null,"This method is used to submit the given element."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"import static com.github.wasiqb.boyka.actions.ElementActions.submit;\n. . .\nsubmit (locator);\n")),(0,r.kt)("h2",{id:"textof"},(0,r.kt)("inlineCode",{parentName:"h2"},"textOf")),(0,r.kt)("p",null,"This method is used to get the text of the given element."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"import static com.github.wasiqb.boyka.actions.ElementActions.textOf;\n. . .\nSystem.out.println (textOf (locator));\n")))}m.isMDXComponent=!0}}]);