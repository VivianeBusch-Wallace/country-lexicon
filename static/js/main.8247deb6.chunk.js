(this["webpackJsonpcountry-lexicon"]=this["webpackJsonpcountry-lexicon"]||[]).push([[0],{38:function(e,t,c){"use strict";c.r(t);var n=c(2),r=c.n(n),s=c(13),a=c.n(s),o=c(3),i=c(14),j=c.n(i),u=c(0);var l=function(){return Object(u.jsxs)("div",{className:"loading-page",children:[Object(u.jsx)("i",{class:"fas fa-spinner"}),Object(u.jsx)("h3",{children:"Making you wait because I can."}),Object(u.jsx)("h3",{children:"Beauty takes time you know..."})]})};var b=function(e){var t=e.results,c=(e.error,t.map((function(e,t){console.log(e);var c=e.name,n=e.flag,r=e.capital,s=e.languages.map((function(e){return e.name})).join(", ");return Object(u.jsxs)("div",{className:"search-results",children:[Object(u.jsx)("div",{className:"flag-wrapper",children:Object(u.jsx)("img",{src:n,alt:c,className:"flag-image"})}),Object(u.jsx)("h2",{className:"country-name",children:c}),Object(u.jsxs)("p",{children:[c,"'s capital is: ",r]}),Object(u.jsxs)("p",{children:["Languages: ",s]})]},t)})));return Object(u.jsx)("div",{className:"search-results",children:c})};var h=function(e){var t=e.error;console.log(t);var c=t.err.toString();return console.log(c),Object(u.jsxs)("div",{className:"error-wrapper",children:[Object(u.jsx)("p",{className:"error-message",children:"Oops, you f*cked up. Erm, I mean ... Sorry, something went wrong."}),Object(u.jsxs)("p",{children:["This happened:",c," "]})]})};var p=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),c=t[0],r=t[1],s=Object(n.useState)(!0),a=Object(o.a)(s,2),i=a[0],p=a[1],O=Object(n.useState)([]),d=Object(o.a)(O,2),m=d[0],x=d[1],f=Object(n.useState)(""),g=Object(o.a)(f,2),v=g[0],y=g[1];return Object(n.useEffect)((function(){setTimeout((function(){return p(!1)}),1e3)}),[]),v?Object(u.jsx)(h,{error:v}):i?Object(u.jsx)(l,{}):Object(u.jsxs)("div",{className:"App",children:[Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=encodeURIComponent(c),n="https://restcountries.eu/rest/v2/name/".concat(t);j()(n).then((function(e){var t=e.data;return x(t)})).catch((function(e){console.log("You have an ".concat(e)),y({err:e})}))},children:[Object(u.jsx)("input",{type:"text",value:c,onChange:function(e){r(e.target.value)},placeholder:"Type a country name"}),Object(u.jsx)("button",{type:"submit",children:"Search"})]}),Object(u.jsx)(b,{results:m,error:v})]})};a.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(p,{})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.8247deb6.chunk.js.map