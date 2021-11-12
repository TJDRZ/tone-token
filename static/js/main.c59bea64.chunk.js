(this["webpackJsonptone-token"]=this["webpackJsonptone-token"]||[]).push([[0],[,,,,,,,,,,function(e,t,c){},function(e,t,c){},,,,,function(e,t,c){},,function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);c(10),c(11);var a=c(1),n=c(9),s=c.n(n),r=c(5),o=c(2),l=c(3),i=(c(16),c(6)),d=c.n(i),j=(c(18),c(0));var b=function(e){var t=Object(a.useState)(""),c=Object(l.a)(t,2),n=c[0],s=c[1],r=Object(a.useState)(!1),o=Object(l.a)(r,2),i=o[0],d=o[1];Object(a.useEffect)((function(){s(e.card.name),d(!0)}),[]);var b=e.type,u=e.name,m=e.placeholder,h=e.pattern;return Object(j.jsx)("div",{className:"Input",children:i?Object(j.jsxs)("div",{children:[Object(j.jsxs)("span",{children:[n," "]}),Object(j.jsx)("button",{onClick:function(){d(!1)},children:"Edit"})]}):Object(j.jsxs)("form",{onSubmit:function(){d(!0),e.lift([n,e.card.id])},children:[Object(j.jsxs)("label",{htmlFor:u,children:[u,": "]}),Object(j.jsx)("input",{type:b,name:u,required:!0,maxLength:"10",placeholder:m,pattern:h,onChange:function(e){s(e.target.value)}}),Object(j.jsx)("button",{type:"submit",children:"Submit"})]})})};c(20),c(21);var u=function(){return Object(j.jsx)("div",{className:"Knob",children:Object(j.jsx)("div",{className:"notch"})})};c(22);var m=function(){return Object(j.jsx)("div",{className:"Flicker"})};var h=function(){var e=Object(o.g)(),t=Object(a.useState)({}),c=Object(l.a)(t,2),n=c[0],s=c[1],i=Object(a.useState)([]),h=Object(l.a)(i,2),O=h[0],f=h[1],x=Object(a.useState)([]),p=Object(l.a)(x,2),N=p[0],g=p[1],S=Object(a.useState)({}),v=Object(l.a)(S,2),k=v[0],y=v[1],w=Object(a.useState)([]),C=Object(l.a)(w,2),E=C[0],I=C[1],L=Object(a.useState)([]),P=Object(l.a)(L,2),J=P[0],q=P[1],T=Object(a.useRef)(!1);return Object(a.useEffect)((function(){var e=O;e.forEach((function(e){e.id===N[1]&&(e.name=N[0])})),f(e),s({id:d()(),name:"New Knob",status:null});var t=E;t.forEach((function(e){e.id===J[1]&&(e.name=J[0])})),I(t),y({id:d()(),name:"New Switch",status:!1})}),[O,E,N,J]),Object(a.useEffect)((function(){T.current?(localStorage.setItem("".concat(e.id,"knobs"),JSON.stringify(O)),localStorage.setItem("".concat(e.id,"flickers"),JSON.stringify(E))):T.current=!0}),[O,E,N,J,e]),Object(a.useEffect)((function(){null!==localStorage.getItem("".concat(e.id,"knobs"))&&f(JSON.parse(localStorage.getItem("".concat(e.id,"knobs")))),null!==localStorage.getItem("".concat(e.id,"flickers"))&&I(JSON.parse(localStorage.getItem("".concat(e.id,"flickers"))))}),[]),Object(j.jsxs)("main",{className:"Pedalbody",children:[Object(j.jsxs)("header",{className:"header",children:[Object(j.jsx)(r.b,{to:"/tone-token",children:"Click Here to Go Back to Pedalboards"}),Object(j.jsx)("h1",{className:"title",children:e.name}),Object(j.jsx)("p",{children:"Under Construction: knobs and switches incomplete"}),Object(j.jsxs)("div",{className:"header-buttons",children:[Object(j.jsx)("button",{onClick:function(){return f(O.concat(n))},children:"Add New Knob"}),Object(j.jsx)("button",{onClick:function(){return I(E.concat(k))},children:"Add New Switch"})]})]}),Object(j.jsxs)("ul",{className:"card-container",children:[O.map((function(e){return Object(j.jsxs)("li",{className:"card",children:[Object(j.jsx)(u,{}),Object(j.jsx)(b,{type:"text",name:"Knob Name",placeholder:"Enter a knob name",lift:g,card:e}),Object(j.jsx)("button",{className:"delete-card ".concat("true"===localStorage.cardLock?"hide-delete":0),onClick:function(){return t=e,void f(O.filter((function(e){return e.id!==t.id})));var t},children:"Delete"})]},e.id)})),E.map((function(e){return Object(j.jsxs)("li",{className:"card",children:[Object(j.jsx)(m,{}),Object(j.jsx)(b,{type:"text",name:"Switch Name",placeholder:"Enter a switch name",lift:q,card:e}),Object(j.jsx)("button",{className:"delete-card ".concat("true"===localStorage.cardLock?"hide-delete":0),onClick:function(){return t=e,void I(E.filter((function(e){return e.id!==t.id})));var t},children:"Delete"})]},e.id)}))]})]})};var O=function(){var e=Object(o.g)(),t=Object(a.useState)({}),c=Object(l.a)(t,2),n=c[0],s=c[1],i=Object(a.useState)([]),u=Object(l.a)(i,2),m=u[0],h=u[1],O=Object(a.useState)([]),f=Object(l.a)(O,2),x=f[0],p=f[1],N=Object(a.useRef)(!1);return Object(a.useEffect)((function(){var e=m;e.forEach((function(e){e.id===x[1]&&(e.name=x[0])})),h(e),s({id:d()(),name:"New Pedal"})}),[m,x]),Object(a.useEffect)((function(){N.current?localStorage.setItem("".concat(e.id),JSON.stringify(m)):N.current=!0}),[m,x,e]),Object(a.useEffect)((function(){null!==localStorage.getItem("".concat(e.id))&&h(JSON.parse(localStorage.getItem("".concat(e.id))))}),[]),Object(j.jsxs)("main",{className:"Pedalboard",children:[Object(j.jsxs)("header",{className:"header",children:[Object(j.jsx)(r.b,{to:"/tone-token",children:"Click Here to Go Back to Pedalboards"}),Object(j.jsx)("h1",{className:"title",children:e.name}),Object(j.jsx)("div",{className:"header-buttons",children:Object(j.jsx)("button",{onClick:function(){h(m.concat(n))},children:"Add New Pedal"})})]}),Object(j.jsx)("ul",{className:"card-container",children:m.map((function(e){return Object(j.jsxs)("li",{className:"card",children:[Object(j.jsx)("div",{className:"card-name",children:Object(j.jsx)(b,{type:"text",name:"Pedal Name",placeholder:"Enter a pedal name",lift:p,card:e})}),Object(j.jsxs)("div",{className:"card-buttons",children:[Object(j.jsx)(r.b,{to:"/pedalbody/".concat(e.id,"/").concat(e.name),children:Object(j.jsx)("button",{children:"Open Pedal"})}),Object(j.jsx)("button",{className:"delete-card ".concat("true"===localStorage.cardLock?"hide-delete":0),onClick:function(){return t=e,h(m.filter((function(e){return e.id!==t.id})));var t},children:"Delete"})]})]},e.id)}))})]})};c(23);var f=function(){var e=Object(a.useState)({}),t=Object(l.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)([]),o=Object(l.a)(s,2),i=o[0],u=o[1],m=Object(a.useState)([]),h=Object(l.a)(m,2),O=h[0],f=h[1],x=Object(a.useRef)(!1);return Object(a.useEffect)((function(){var e=i;e.forEach((function(e){e.id===O[1]&&(e.name=O[0])})),u(e),n({id:d()(),name:"New Pedalboard"})}),[i,O]),Object(a.useEffect)((function(){x.current?localStorage.setItem("cards",JSON.stringify(i)):x.current=!0}),[i,O]),Object(a.useEffect)((function(){localStorage.cards&&u(JSON.parse(localStorage.getItem("cards")))}),[]),Object(j.jsxs)("main",{className:"Menu",children:[Object(j.jsxs)("header",{className:"header",children:[Object(j.jsxs)("div",{className:"about closed",onClick:function(){var e=document.querySelector(".about"),t=document.querySelector(".slide"),c=document.querySelector(".ham"),a=document.querySelector(".bur"),n=document.querySelector(".ger"),s=document.querySelector(".author"),r=document.querySelector(".title");e.classList.contains("closed")?(c.style.transform="rotate(45deg) translate(22.5%, 100%)",a.style.opacity="0",n.style.transform="rotate(-45deg) translate(22.5%, -100%)",t.style.transform="translateX(100%)",s.style.color="#fada5e",r.style.color="#fada5e",e.classList.toggle("closed")):(c.style.transform="rotate(0) translate(0)",a.style.opacity="1",n.style.transform="rotate(0) translate(0)",t.style.transform="translateX(-100%)",s.style.color="#000",r.style.color="#000",e.classList.toggle("closed"))},children:[Object(j.jsx)("div",{className:"ham"}),Object(j.jsx)("div",{className:"bur"}),Object(j.jsx)("div",{className:"ger"})]}),Object(j.jsxs)("div",{className:"slide",children:[Object(j.jsx)("p",{children:"-Tired of forgetting where your knobs and switches were set as you change styles of music? How about what pedals you used to achieve that specific sound? ...Tone Token helps solve that problem"}),Object(j.jsx)("p",{children:"-Create pedalboards, pedals inside them, and knobs and switches inside them! Click edit to edit the name for anything. Click on the Card Lock Token at the top of the main menu page to hid all 'Delete' buttons to prevent unhappy accidents. Clear storage on the main menu screen to wipe it all and erase the local storage from your browser."}),Object(j.jsx)("p",{children:"-Only saves to your browser's local storage at the moment, so no cross-device accounts available yet. This is a Front-end Development project."}),Object(j.jsx)("p",{children:"-Enjoy!"}),Object(j.jsx)("p",{children:Object(j.jsx)("a",{className:"website",href:"https://tjdrz.com",children:"https://tjdrz.com"})})]}),Object(j.jsxs)("div",{className:"card-lock",children:[Object(j.jsx)("div",{className:"outer-lock",onClick:function(){var e=document.querySelectorAll(".delete-card");e.forEach((function(e){e.classList.toggle("hide-delete")})),e[0]&&e[0].classList.contains("hide-delete")?localStorage.setItem("cardLock","true"):localStorage.setItem("cardLock","false")},children:Object(j.jsx)("div",{className:"inner-lock"})}),Object(j.jsx)("p",{children:"Card Lock"})]}),Object(j.jsx)("h2",{className:"author",children:"TJDRZ's"}),Object(j.jsx)("h1",{className:"title",children:"Tone Token"}),Object(j.jsxs)("div",{className:"header-buttons",children:[Object(j.jsx)("button",{className:"new-pedalboard",onClick:function(){u(i.concat(c))},children:"New Pedalboard"}),Object(j.jsx)("button",{className:"clear-storage",onClick:function(){return localStorage.clear()},children:"Clear Storage"})]})]}),Object(j.jsx)("ul",{className:"card-container",children:i.map((function(e){return Object(j.jsxs)("li",{className:"card",children:[Object(j.jsx)("div",{className:"card-name",children:Object(j.jsx)(b,{type:"text",name:"Pedalboard Name",placeholder:"Enter a pedalboard name",lift:f,card:e})}),Object(j.jsxs)("div",{className:"card-buttons",children:[Object(j.jsx)(r.b,{to:"/pedalboard/".concat(e.id,"/").concat(e.name),children:Object(j.jsx)("button",{children:"Open Pedalboard"})}),Object(j.jsx)("button",{className:"delete-card ".concat("true"===localStorage.cardLock?"hide-delete":0),onClick:function(){return t=e,u(i.filter((function(e){return e.id!==t.id})));var t},children:"Delete"})]})]},e.id)}))})]})};var x=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)(o.c,{children:[Object(j.jsx)(o.a,{path:"/tone-token",element:Object(j.jsx)(f,{})}),Object(j.jsx)(o.a,{path:"/pedalboard/:id/:name",element:Object(j.jsx)(O,{})}),Object(j.jsx)(o.a,{path:"/pedalbody/:id/:name",element:Object(j.jsx)(h,{})})]})})};s.a.render(Object(j.jsx)(r.a,{children:Object(j.jsx)(x,{})}),document.getElementById("root"))}],[[24,1,2]]]);
//# sourceMappingURL=main.c59bea64.chunk.js.map