(this.webpackJsonpweather_app=this.webpackJsonpweather_app||[]).push([[0],{41:function(e,t,c){},42:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c(1),s=c.n(n),r=c(15),i=c.n(r),o=c(4),j=c.n(o),u=c(5),l=c(3),p=c(16),d=c.n(p),h="b79c53789d71b2773271fb04741a9f56",b="https://api.openweathermap.org/data/2.5/weather?q=";function O(e){return m.apply(this,arguments)}function m(){return(m=Object(u.a)(j.a.mark((function e(t){var c,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("".concat(b).concat(t,"&appid=").concat(h));case 2:return c=e.sent,e.next=5,c.data;case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}c(41);var f=function(){var e=Object(n.useState)("jodhpur"),t=Object(l.a)(e,2),c=t[0],s=t[1],r=Object(n.useState)(""),i=Object(l.a)(r,2),o=i[0],p=i[1],d=Object(n.useState)(""),h=Object(l.a)(d,2),b=h[0],m=h[1],f=Object(n.useState)(""),x=Object(l.a)(f,2),w=x[0],v=x[1],g=Object(n.useState)(""),y=Object(l.a)(g,2),N=y[0],S=y[1],k=Object(n.useState)(""),C=Object(l.a)(k,2),M=C[0],_=C[1],E=Object(n.useState)(""),J=Object(l.a)(E,2),T=J[0],q=J[1],B=Object(n.useState)(""),F=Object(l.a)(B,2),H=F[0],I=F[1];return Object(n.useEffect)((function(){function e(){return(e=Object(u.a)(j.a.mark((function e(){var t,a,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O(c);case 2:t=e.sent,console.log(t),console.log(t.weather[0].icon),v(t.weather[0].description),_(t.sys.country),q(t.main.humidity),a=Math.floor(t.main.temp-273.15),n=Math.floor(t.main.feels_like-273.15),p(c),I(n),m(a),S("http://openweathermap.org/img/wn/".concat(t.weather[0].icon,"@2x.png"));case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[c]),Object(a.jsx)("div",{className:"container-fluid",children:Object(a.jsx)("div",{className:"row",children:Object(a.jsxs)("div",{className:"col-md-12 card",children:[Object(a.jsx)("div",{className:"header",children:Object(a.jsxs)("span",{className:"city",children:[o,",",M," ",Object(a.jsx)("img",{alt:"flag",src:"https://www.countryflags.io/".concat(M,"/\nflat/64.png")})]})}),Object(a.jsx)("span",{className:"weather-icon",children:Object(a.jsx)("img",{src:N,alt:"icon for forecast",className:"icon"})}),Object(a.jsx)("div",{className:"weather",children:Object(a.jsx)("span",{id:"desc",children:w})}),Object(a.jsxs)("div",{className:"temp",children:["Current Temperature ",b,"\xb0C"]}),Object(a.jsxs)("div",{className:"temp",children:["Humidity ",T,"%"]}),Object(a.jsxs)("div",{className:"temp",children:["Current Temperature ",b,"\xb0C | Feels Like ",H,"\xb0C"]}),Object(a.jsx)("div",{className:"search",children:Object(a.jsx)("input",{type:"text",className:"location",placeholder:"Search city",onChange:function(e){s(e.target.value)}})})]})})})};var x=function(){return Object(a.jsx)("div",{children:Object(a.jsx)(f,{})})};i.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(x,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.7044723a.chunk.js.map