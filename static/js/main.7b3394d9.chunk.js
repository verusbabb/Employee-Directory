(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{43:function(e,t,c){},45:function(e,t,c){"use strict";c.r(t);var n=c(2),r=c(15),s=c.n(r),a=c(18),i=c(6),l=c(0);var o=function(e){return Object(l.jsx)("tbody",{className:"table-hover",children:Object(l.jsxs)("tr",{className:"bg-light",children:[Object(l.jsx)("td",{children:Object(l.jsx)("img",{src:e.picture})}),Object(l.jsx)("td",{children:e.nameFirst+" "+e.nameLast}),Object(l.jsx)("td",{children:e.email}),Object(l.jsx)("td",{children:e.dob})]})})},j=c(16),d=c.n(j);var b=function(e){var t=e.employeeResult,c=e.sortBy;return Object(l.jsx)("div",{className:"table-responsive",children:Object(l.jsxs)("table",{className:"table table-striped table-bordered",children:[Object(l.jsx)("thead",{className:"bg-info",children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{scope:"col",children:"Picture"}),Object(l.jsx)("th",{onClick:function(){return c("name")},children:"Name"}),Object(l.jsx)("th",{onClick:function(){return c("email")},children:"Email"}),Object(l.jsx)("th",{scope:"col",children:"DOB"})]})}),t.map((function(e,t){return Object(l.jsx)(o,{picture:e.picture.thumbnail,nameFirst:e.name.first,nameLast:e.name.last,email:e.email,dob:d()(e.dob.date).format("L")},t)}))]})})};function u(e){var t=e.search,c=e.handleInputChange;return Object(l.jsx)("div",{children:Object(l.jsx)("div",{className:"input-group mb-4",children:Object(l.jsx)("div",{className:"col-sm-4",children:Object(l.jsx)("input",{name:"search",type:"text",className:"form-control",id:"search",onChange:c,value:t,placeholder:"Search employee first name"})})})})}var m=c(17),h=c.n(m),p=function(){return h.a.get("https://randomuser.me/api/?results=20")};var O=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),c=t[0],r=t[1],s=Object(n.useState)(""),o=Object(i.a)(s,2),j=o[0],d=o[1];Object(n.useEffect)((function(){m()}),[]);var m=function(){p().then((function(e){r(e.data.results)}))};return Object(l.jsx)("div",{className:"row",children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsxs)("div",{className:"jumbotron text-center bg-info",children:[Object(l.jsx)("h1",{className:"display-4",children:"Employee Directory"}),Object(l.jsx)("p",{className:"lead",children:"View a list of all employees, sort employees by name, or search for employees by first name."})]}),Object(l.jsx)(u,{search:j,handleInputChange:function(e){d(e.target.value)}}),Object(l.jsx)(b,{employeeResult:c.filter((function(e){return e.name.first.toUpperCase().includes(j.toUpperCase())})),sortBy:function(e){var t=Object(a.a)(c);t.sort(function(e){return function(t,c){return t[e]<c[e]?-1:t[e]>c[e]?1:0}}(e)),r(t)}})]})})};c(43),c(44);s.a.render(Object(l.jsx)(O,{}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.7b3394d9.chunk.js.map