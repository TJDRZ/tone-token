(this["webpackJsonptone-token"]=this["webpackJsonptone-token"]||[]).push([[0],[,,,,,,,,,,function(e,t,a){},function(e,t,a){},,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},function(e,t,a){"use strict";a.r(t);a(10),a(11);var c=a(0),n=a(9),r=a.n(n),s=a(5),d=a(2),l=a(3),o=(a(16),a(6)),i=a.n(o),j=(a(18),a(1));var b=function(){return Object(j.jsx)("div",{className:"Pedalbody",draggable:!0,onDragStart:function(e){e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("pedalbody",e.target.id)},onDragOver:function(e){e.preventDefault(),e.dataTransfer.dropEffect="move"},onDrop:function(e){if(e.preventDefault(),e.dataTransfer.getData("knob")){var t=e.dataTransfer.getData("knob");e.target.appendChild(document.getElementById(t))}else if(e.dataTransfer.getData("switch")){var a=e.dataTransfer.getData("switch");e.target.appendChild(document.getElementById(a))}}})};var u=function(){var e=Object(d.g)(),t=Object(c.useState)([]),a=Object(l.a)(t,2),n=a[0],r=a[1],o=Object(c.useRef)(!1);return Object(c.useEffect)((function(){o.current?localStorage.setItem("pedalboard-".concat(e.id),JSON.stringify(n)):o.current=!0}),[n]),Object(c.useEffect)((function(){localStorage.pedals&&r(JSON.parse(localStorage.getItem("pedalboard-".concat(e))))}),[]),Object(j.jsx)("main",{className:"Pedalboard",children:Object(j.jsxs)("header",{className:"header",children:[Object(j.jsx)(s.b,{to:"/tone-token",children:"Click Here to Go Back to Cards"}),Object(j.jsx)("h1",{className:"title",children:e.name}),Object(j.jsx)("button",{onClick:function(){var e=i()();r(n.concat(e))},children:"Add New Pedal"})]})})};a(20);var f=function(e){var t=Object(c.useState)(""),a=Object(l.a)(t,2),n=a[0],r=a[1],s=Object(c.useState)(!1),d=Object(l.a)(s,2),o=d[0],i=d[1];Object(c.useEffect)((function(){e.card.name&&"newCard"!==e.card.name&&(r(e.card.name),i(!0))}),[]);var b=e.type,u=e.name,f=e.placeholder,O=e.pattern;return Object(j.jsx)("div",{className:"Input",children:o?Object(j.jsxs)("div",{children:[Object(j.jsxs)("span",{children:[n," "]}),Object(j.jsx)("button",{onClick:function(){i(!1)},children:"Edit"})]}):Object(j.jsxs)("form",{onSubmit:function(){i(!0),e.lift([n,e.card.id])},children:[Object(j.jsxs)("label",{htmlFor:u,children:[u,": "]}),Object(j.jsx)("input",{type:b,name:u,required:!0,maxLength:"10",placeholder:f,pattern:O,onChange:function(e){r(e.target.value)}}),Object(j.jsx)("button",{type:"submit",children:"Submit"})]})})};var O=function(){var e=Object(c.useState)({}),t=Object(l.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)([]),d=Object(l.a)(r,2),o=d[0],b=d[1],u=Object(c.useState)([]),O=Object(l.a)(u,2),m=O[0],h=O[1],p=Object(c.useRef)(!1);return Object(c.useEffect)((function(){var e=o;e.forEach((function(e){e.id===m[1]&&(e.name=m[0])})),b(e),n({id:i()(),name:"New Pedalboard"})}),[o,m]),Object(c.useEffect)((function(){p.current?localStorage.setItem("cards",JSON.stringify(o)):p.current=!0}),[o,m]),Object(c.useEffect)((function(){localStorage.cards&&b(JSON.parse(localStorage.getItem("cards")))}),[]),Object(j.jsxs)("main",{className:"Menu",children:[Object(j.jsxs)("header",{className:"header",children:[Object(j.jsxs)("div",{className:"card-lock",children:[Object(j.jsx)("div",{className:"outer-lock",onClick:function(){document.querySelectorAll(".delete-card").forEach((function(e){e.classList.toggle("hide-delete")}))},children:Object(j.jsx)("div",{className:"inner-lock"})}),Object(j.jsx)("p",{children:"Card Lock"})]}),Object(j.jsx)("h1",{className:"title",children:"Tone Token"}),Object(j.jsxs)("div",{className:"header-buttons",children:[Object(j.jsx)("button",{className:"new-pedalboard",onClick:function(){b(o.concat(a))},children:"New Pedalboard"}),Object(j.jsx)("button",{className:"clear-storage",onClick:function(){return localStorage.clear()},children:"Clear Storage"})]})]}),Object(j.jsx)("ul",{className:"card-container",children:o.map((function(e){return Object(j.jsxs)("li",{className:"card",children:[Object(j.jsx)("div",{className:"card-name",children:Object(j.jsx)(f,{type:"text",name:"Pedalboard Name",placeholder:"Enter a pedalboard name",lift:h,card:e})}),Object(j.jsxs)("div",{className:"card-buttons",children:[Object(j.jsx)(s.b,{to:"/pedalboard/".concat(e.id,"/").concat(e.name),children:Object(j.jsx)("button",{children:"Open Pedalboard"})}),Object(j.jsx)("button",{className:"delete-card",onClick:function(){return t=e,b(o.filter((function(e){return e.id!==t.id})));var t},children:"Delete"})]})]},e.id)}))})]})};var m=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)(d.c,{children:[Object(j.jsx)(d.a,{path:"/tone-token",element:Object(j.jsx)(O,{})}),Object(j.jsx)(d.a,{path:"/pedalboard/:id/:name",element:Object(j.jsx)(u,{})}),Object(j.jsx)(d.a,{path:"/pedalbody/:id",element:Object(j.jsx)(b,{})})]})})};r.a.render(Object(j.jsx)(s.a,{children:Object(j.jsx)(m,{})}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.92291b08.chunk.js.map