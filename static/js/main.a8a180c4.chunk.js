(this.webpackJsonpcounter=this.webpackJsonpcounter||[]).push([[0],{31:function(e,t,c){},48:function(e,t,c){},49:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(13),r=c.n(a),j=(c(30),c(31),c(11)),i=c(7),o=c(12),l=c(50),b=c(51),d=c(63),h=c(52),x=c(53),O=c(2),u=function(e){var t=Object(n.useState)(!1),c=Object(o.a)(t,2),s=c[0],a=c[1];return Object(O.jsx)("div",{children:Object(O.jsxs)(l.a,{className:"px-5",color:"dark",dark:!0,expand:"md",children:[Object(O.jsx)(j.b,{to:"/",className:"navbar-brand",children:"ElHawary Portfolio"}),Object(O.jsx)(b.a,{onClick:function(){return a(!s)}}),Object(O.jsx)(d.a,{isOpen:s,navbar:!0,children:Object(O.jsxs)(h.a,{className:"ms-auto",navbar:!0,children:[Object(O.jsx)(x.a,{children:Object(O.jsx)(j.b,{className:"nav-link",to:"/",children:"Home"})}),Object(O.jsx)(x.a,{children:Object(O.jsx)(j.b,{className:"nav-link",to:"/",children:"Log In"})}),Object(O.jsx)(x.a,{children:Object(O.jsx)(j.b,{className:"nav-link",to:"/Counter",children:"Counter"})}),Object(O.jsx)(x.a,{children:Object(O.jsx)(j.b,{className:"nav-link",to:"/Shop",children:"Shop"})})]})})]})})},m=c.p+"static/media/logo.6ce24c58.svg",p=(c(48),function(){return Object(O.jsx)("div",{className:"App",children:Object(O.jsxs)("header",{className:"App-header",children:[Object(O.jsx)("img",{src:m,className:"App-logo",alt:"logo"}),Object(O.jsxs)("p",{children:["Created by ",Object(O.jsx)("code",{children:"Mohamed Adel Mohamed Ismail"})," for ITI."]})]})})}),f=function(e){var t=e.onClick,c=e.text;return Object(O.jsx)("button",{onClick:t,children:c})},g=function(){var e=Object(n.useState)(0),t=Object(o.a)(e,2),c=t[0],s=t[1];return Object(O.jsxs)("div",{style:{margin:"5rem"},children:[Object(O.jsxs)("h1",{style:{textAlign:"center"},children:["Counter: ",c]}),Object(O.jsxs)("div",{className:"btns",children:[Object(O.jsx)(f,{text:"Increase Count",onClick:function(){return s(c+1)}}),Object(O.jsx)(f,{text:"Decrease Count",onClick:function(){return c&&s(c-1)}})]})]})},v=c(54),C=c(55),N=c(56),k=c(57),y=c(58),S=c(59),I=c(60),A=c(61),w=c(62),E=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),c=t[0],s=t[1];return Object(n.useEffect)((function(){fetch("https://fakestoreapi.com/products").then((function(e){return e.json()})).then((function(e){return s(e)}))}),[]),Object(O.jsx)(v.a,{children:Object(O.jsx)(C.a,{className:"p-3 justify-content-center",children:c.map((function(e,t){return Object(O.jsxs)("div",{className:"col-3 p-1 m-1",children:[Object(O.jsx)(j.b,{to:"/product/details/".concat(e.id),children:Object(O.jsxs)(N.a,{style:{maxHeight:"30rem",height:"100%"},children:[Object(O.jsx)(k.a,{top:!0,width:"30%",height:"50%",src:e.image,alt:"Card image cap"}),Object(O.jsxs)(y.a,{children:[Object(O.jsx)(S.a,{tag:"h5",children:e.title}),Object(O.jsx)(I.a,{tag:"h6",className:"mb-2 text-muted",children:e.category}),Object(O.jsxs)(A.a,{children:[e.description.substring(0,100),"..."]}),Object(O.jsx)(A.a,{children:e.price})]})]})}),Object(O.jsx)(w.a,{children:"Add to Cart"})]},e.id)}))})})},F=function(e){var t=e.match,c=Object(n.useState)({}),s=Object(o.a)(c,2),a=s[0],r=s[1];return Object(n.useEffect)((function(){var e=t.params.id;e&&fetch("https://fakestoreapi.com/products/".concat(e)).then((function(e){return e.json()})).then((function(e){return r(e)}))}),[]),Object(O.jsx)(v.a,{children:Object(O.jsx)(C.a,{className:"justify-content-center",children:a&&Object(O.jsxs)(N.a,{className:"col-8 m-3 ",children:[Object(O.jsx)(k.a,{left:!0,width:"300px",height:"400px",src:a.image,alt:"Card image cap"}),Object(O.jsxs)(y.a,{children:[Object(O.jsxs)(S.a,{tag:"h5",children:[" ",Object(O.jsx)("b",{children:"Title: "})," ",a.title]}),Object(O.jsxs)(I.a,{tag:"h6",className:"mb-2 text-muted",children:[Object(O.jsx)("b",{children:"Category: "}),a.category]}),Object(O.jsxs)(A.a,{children:[Object(O.jsx)("b",{children:"Description: "}),Object(O.jsx)("br",{}),a.description,"..."]}),Object(O.jsxs)(A.a,{children:[Object(O.jsx)("b",{children:"Price: "}),Object(O.jsx)("code",{style:{fontSize:"1.5rem"},children:a.price})]})]})]})})})};var P=function(){return Object(O.jsxs)(j.a,{children:[Object(O.jsx)(u,{}),Object(O.jsxs)(i.c,{children:[Object(O.jsx)(i.a,{exact:!0,path:"/",component:p}),Object(O.jsx)(i.a,{path:"/counter",component:g}),Object(O.jsx)(i.a,{path:"/shop",component:E}),Object(O.jsx)(i.a,{path:"/product/details/:id",component:F})]})]})},T=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,64)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),n(e),s(e),a(e),r(e)}))};r.a.render(Object(O.jsx)(s.a.StrictMode,{children:Object(O.jsx)(P,{})}),document.getElementById("root")),T()}},[[49,1,2]]]);
//# sourceMappingURL=main.a8a180c4.chunk.js.map