(this["webpackJsonpnote-app"]=this["webpackJsonpnote-app"]||[]).push([[0],{15:function(e,t,a){},23:function(e,t,a){e.exports=a(37)},28:function(e,t,a){},29:function(e,t,a){},32:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(20),c=a.n(r),l=(a(28),a(29),a(1));function u(e,t){var a=localStorage.getItem(e);return a?a=JSON.parse(a):t}function i(e,t){t=JSON.stringify(t),localStorage.setItem(e,t)}function s(e,t){var a=sessionStorage.getItem(e);return a?a=JSON.parse(a):t}function m(e,t){t=JSON.stringify(t),sessionStorage.setItem(e,t)}function p(e){sessionStorage.removeItem(e)}var d=a(6);a(12),a(32);var f=function(){var e=Object(l.f)();return o.a.createElement("div",{className:"header-container"},o.a.createElement("button",{onClick:function(){p("title"),p("content"),e.push("/note-app/")},to:"/note-app/",className:"title"},"Note Pad"),o.a.createElement(d.AwesomeButton,{className:"titlebutton",onPress:function(){var t;t="rowdata",localStorage.removeItem(t),e.push("/note-app/"),window.location.reload()}},"Clear All"))},v=a(8);a(36),a(15);var E=function(e){var t=Object(l.f)();return o.a.createElement("div",{key:"name"+e.index,className:"row-container"},o.a.createElement("p",{className:"row-title"},e.value[0],o.a.createElement("button",{title:"Delete Note",className:"row-delete",onClick:e.onRowDelete},"X")),o.a.createElement("button",{title:"Edit Note",className:"row-note",onClick:function(){t.push("/note-app/edit/"+e.index)}},o.a.createElement("p",null,e.value[1])))};var w=function(){var e=Object(l.f)(),t=Object(n.useState)([]),a=Object(v.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)((function(){var e=u("rowdata",[]);c(e)}),[]),o.a.createElement("div",{className:"home-container"},o.a.createElement(d.AwesomeButton,{className:"aws-btn",href:"/note-app/Add",ripple:"true"},"Add a note"),o.a.createElement(d.AwesomeButton,{className:"awsbtn",onPress:function(){e.push("/note-app/")}},"Add a note"),o.a.createElement("h1",null,"Home Page"),function(){for(var e=[],t=function(t){r[t][0]&&r[t][1]&&e.push(o.a.createElement(E,{index:t,value:r[t],onRowDelete:function(){!function(e){var t=Array.from(r);t.splice(e,1),c(t),i("rowdata",t)}(t)}}))},a=0;a<r.length;a++)t(a);return e}())},b=a(22);var h=function(){var e=Object(n.useState)(s("title","")),t=Object(v.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(s("content","")),f=Object(v.a)(c,2),E=f[0],w=f[1],h=Object(l.f)();return o.a.createElement("div",{className:"add-container"},o.a.createElement("h1",null,"Add a new Note"),o.a.createElement("input",{autoFocus:!0,onChange:function(e){r(e.target.value),m("title",e.target.value)},placeholder:"Title",value:a}),o.a.createElement("br",null),o.a.createElement("textarea",{onInput:function(e){m("content",e.target.value),w(e.target.value)},placeholder:"Content",value:E}),o.a.createElement("br",null),o.a.createElement(d.AwesomeButton,{className:"awsbtn",onPress:function(){var e=u("rowdata",[]);i("rowdata",[].concat(Object(b.a)(e),[[a,E]]).filter((function(e){return e[0]&&e[1]}))),p("title"),p("content"),h.push("/note-app/")}},"Add Note"))};var g=function(){var e=Object(l.g)(),t=Object(n.useState)(u("rowdata",[])[e.index][0]),a=Object(v.a)(t,2),r=a[0],c=a[1],s=Object(n.useState)(u("rowdata",[])[e.index][1]),m=Object(v.a)(s,2),p=m[0],f=m[1],E=Object(l.f)();return o.a.createElement("div",{className:"edit-container"},o.a.createElement("h1",null,"Edit Note"),o.a.createElement("input",{autoFocus:!0,onChange:function(e){c(e.target.value)},value:r}),o.a.createElement("br",null),o.a.createElement("textarea",{onChange:function(e){f(e.target.value)},value:p}),o.a.createElement("br",null),o.a.createElement(d.AwesomeButton,{className:"awsbtn",onPress:function(){!function(){var t=u("rowdata",[]);t[e.index]=[r,p],i("rowdata",t)}(),E.push("/note-app/")}},"Save Note"))};var N=function(){return o.a.createElement(l.c,null,o.a.createElement(l.a,{exact:!0,path:"/note-app/"},o.a.createElement(w,null)),o.a.createElement(l.a,{path:"/note-app/Add"},o.a.createElement(h,null)),o.a.createElement(l.a,{path:"/note-app/Edit/:index"},o.a.createElement(g,null)))};var O=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(f,null),o.a.createElement(N,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var j=a(7);c.a.render(o.a.createElement(j.a,null,o.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.7729c6a7.chunk.js.map