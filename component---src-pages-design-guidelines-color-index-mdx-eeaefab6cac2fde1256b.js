(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{KCi0:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return i})),n.d(t,"default",(function(){return u}));n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("91GP"),n("q1tI");var a=n("E/Ix"),r=n("11gL"),o=n("M7LX"),s=n("SAgo");var i={},c={_frontmatter:i},l=r.a;function u(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(a.b)(l,Object.assign({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",null,"Colors"),Object(a.b)(s.a,{items:[{title:"Pallete",href:"/design-guidelines/color"},{title:"Usage",href:"/design-guidelines/color/usage"}],mdxType:"TabLinks"}),Object(a.b)("p",null,"In Bold, colors are used to express states of interactive components, status, and emphasize visual and textual content. All palettes were built according to accessibility standards, fulfilling the minimum contrast of interactive elements and text with the background. The palettes were also designed thematically, and it maintains the optimum contrast of all components, as well as works in reverse, in dark mode."),Object(a.b)(o.a,{mdxType:"PalleteList"}))}u.isMDXComponent=!0},M7LX:function(e,t,n){"use strict";n("rGqo"),n("yt8O"),n("Btvt"),n("/8Fb");var a=n("8o4J"),r=n("3JHg"),o=n("q1tI"),s=n.n(o);n("RW0V"),n("Vd3H");function i(e){var t=e.title,n=e.pallete,o=Object(a.ab)(c),i=o.classes,l=o.css,u=Object.keys(n).map((function(e){return parseInt(e.substr(1),10)})).sort((function(e,t){return e<t?1:-1}));return s.a.createElement("div",{className:i.box},s.a.createElement("div",{className:l(i.item,i.title),style:{background:n.c40,color:r.gray.c100}},t),s.a.createElement("div",{className:i.item,style:{background:n.c40,color:r.gray.c100}},s.a.createElement("span",{className:i.shade},"40"),s.a.createElement("span",{className:i.hex},n.c40)),u.map((function(e){return s.a.createElement("div",{key:e,className:i.item,style:{background:n["c"+e],color:e<=60?r.gray.c100:r.gray.c20}},s.a.createElement("span",{className:i.shade},e),s.a.createElement("span",{className:i.hex},n["c"+e]))})))}var c=function(e){return{box:{display:"inline-block",width:240,fontSize:e.typography.sizes.text},title:{fontWeight:"bold"},item:{display:"flex",justifyContent:"space-between",padding:"0.75rem 1rem","&:first-of-type":{borderTopLeftRadius:4,borderTopRightRadius:4},"&:last-of-type":{borderBottomLeftRadius:4,borderBottomRightRadius:4}},shade:{fontWeight:"bold"},hex:{}}};n.d(t,"a",(function(){return l}));var l=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(a.n,{justifyContent:"flex-start",wrap:!0},Object.entries(r).map((function(e){var t=e[0],n=e[1];return s.a.createElement(a.e,{key:t},s.a.createElement(i,{title:u(t),pallete:n}))}))))},u=function(e){return e.charAt(0).toLocaleUpperCase()+e.substr(1)}},SAgo:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n("8o4J"),r=n("kCIJ"),o=n("q1tI"),s=n.n(o),i=n("6IVT"),c=function(e){var t=e.items,n=Object(a.ab)(l).classes,o=Object(r.useIntl)(),c=function(e){return"undefined"!=typeof location&&(location.pathname===e.href||location.pathname==="/"+o.locale+e.href)};return s.a.createElement("div",{className:n.tabs},s.a.createElement(a.L,null,t.map((function(e){return s.a.createElement(a.E,{key:e.href,component:i.a,to:e.href,style:n.item,active:c(e)},e.title)}))))},l=function(e){return{tabs:{marginTop:"-0.75rem !important",marginBottom:"2rem",borderBottom:"1px solid "+e.pallete.divider},item:{"a:focus":{boxShadow:"none !important"}}}}}}]);
//# sourceMappingURL=component---src-pages-design-guidelines-color-index-mdx-eeaefab6cac2fde1256b.js.map