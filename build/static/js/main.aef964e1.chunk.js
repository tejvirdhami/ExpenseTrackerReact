(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],{18:function(e,t,n){},19:function(e,t,n){},21:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var a=n(8),c=n.n(a),l=(n(18),n(5)),s=n(2),i=(n(19),n(0));var r=function(e){var t="card "+e.className;return Object(i.jsx)("div",{className:t,children:e.children})},u=n(1),j=(n(21),function(e){return Object(i.jsx)("div",{className:"expenses-filter",children:Object(i.jsxs)("div",{className:"expenses-filter__control",children:[Object(i.jsx)("label",{children:"Filter by year"}),Object(i.jsxs)("select",{value:e.selected,onChange:function(t){e.onChangeFilter(t.target.value)},children:[Object(i.jsx)("option",{value:"2023",children:"2023"}),Object(i.jsx)("option",{value:"2022",children:"2022"}),Object(i.jsx)("option",{value:"2021",children:"2021"}),Object(i.jsx)("option",{value:"2020",children:"2020"})]})]})})});n(22),n(23),n(24),n(25);var o=function(e){var t=e.date.toLocaleString("en-US",{month:"long"}),n=e.date.toLocaleString("en-US",{day:"2-digit"}),a=e.date.getFullYear();return Object(i.jsxs)("div",{className:"expense-date",children:[Object(i.jsx)("div",{className:"expense-date__month",children:t}),Object(i.jsx)("div",{className:"expense-date__year",children:a}),Object(i.jsx)("div",{className:"expense-date__day",children:n})]})};var d=function(e){return Object(i.jsx)("li",{children:Object(i.jsxs)(r,{className:"expense-item",children:[Object(i.jsx)(o,{date:e.date}),Object(i.jsxs)("div",{className:"expense-item__description",children:[Object(i.jsx)("h2",{children:e.title}),Object(i.jsxs)("div",{className:"expense-item__price",children:["$",e.amount]})]})]})})};var b=function(e){return 0===e.items.length?Object(i.jsx)("h2",{className:"expenses-list__fallback",children:"Found no Expenses."}):Object(i.jsx)("ul",{className:"expenses-list",children:e.items.map((function(e){return Object(i.jsx)(d,{title:e.title,amount:e.amount,date:e.date},e.id)}))})},x=n(9);n(26);var v=function(e){var t="0%";return e.maxValue>0&&(t=Math.round(e.value/e.maxValue*100)+"%"),Object(i.jsxs)("div",{className:"chart-bar",children:[Object(i.jsx)("div",{className:"chart-bar__inner",children:Object(i.jsx)("div",{className:"chart-bar__fill",style:{height:t}})}),Object(i.jsx)("div",{className:"chart-bar__label",children:e.label})]})};n(27);var O=function(e){var t=e.dataPoints.map((function(e){return e.value})),n=Math.max.apply(Math,Object(l.a)(t));return Object(i.jsx)("div",{className:"chart",children:e.dataPoints.map((function(e){return Object(i.jsx)(v,{value:e.value,maxValue:n,label:e.label},e.label)}))})};var h=function(e){var t,n=[{label:"Jan",value:0},{label:"Feb",value:0},{label:"Mar",value:0},{label:"Apr",value:0},{label:"May",value:0},{label:"Jun",value:0},{label:"Jul",value:0},{label:"Aug",value:0},{label:"Sep",value:0},{label:"Oct",value:0},{label:"Nov",value:0},{label:"Dec",value:0}],a=Object(x.a)(e.expenses);try{for(a.s();!(t=a.n()).done;){var c=t.value;n[c.date.getMonth()].value+=c.amount}}catch(l){a.e(l)}finally{a.f()}return Object(i.jsx)(O,{dataPoints:n})};var m=function(e){var t=Object(u.useState)("2022"),n=Object(s.a)(t,2),a=n[0],c=n[1],l=e.items.filter((function(e){return e.date.getFullYear().toString()===a}));return Object(i.jsx)("div",{children:Object(i.jsxs)(r,{className:"expenses",children:[Object(i.jsx)(j,{selected:a,onChangeFilter:function(e){c(e)}}),Object(i.jsx)(h,{expenses:l}),Object(i.jsx)(b,{items:l})]})})},p=n(6);n(28),n(29);var f=function(e){var t=Object(u.useState)(""),n=Object(s.a)(t,2),a=n[0],c=n[1],l=Object(u.useState)(""),r=Object(s.a)(l,2),j=r[0],o=r[1],d=Object(u.useState)(""),b=Object(s.a)(d,2),x=b[0],v=b[1];return Object(i.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={title:a,amount:+j,date:new Date(x)};e.onSaveExpenseDate(n),c(""),o(""),v("")},children:[Object(i.jsxs)("div",{className:"new-expense__controls",children:[Object(i.jsxs)("div",{className:"new-expense__control",children:[Object(i.jsx)("label",{children:"Title"}),Object(i.jsx)("input",{type:"text",value:a,onChange:function(e){c(e.target.value)}})]}),Object(i.jsxs)("div",{className:"new-expense__control",children:[Object(i.jsx)("label",{children:"Amount"}),Object(i.jsx)("input",{type:"number",min:"0.01",step:"0.01",value:j,onChange:function(e){o(e.target.value)}})]}),Object(i.jsxs)("div",{className:"new-expense__control",children:[Object(i.jsx)("label",{children:"Date"}),Object(i.jsx)("input",{type:"date",min:"2000-01-01",max:"2999-12-30",value:x,onChange:function(e){v(e.target.value)}})]})]}),Object(i.jsxs)("div",{className:"new-expense__actions",children:[Object(i.jsx)("button",{type:"button",onClick:e.onCancel,children:"Cancel"}),Object(i.jsx)("button",{type:"submit",children:"Add Expense"})]})]})};var _=function(e){var t=Object(u.useState)(!1),n=Object(s.a)(t,2),a=n[0],c=n[1];return Object(i.jsxs)("div",{className:"new-expense",children:[!a&&Object(i.jsx)("button",{onClick:function(){c(!0)},children:"Add New Expense"}),a&&Object(i.jsx)(f,{onSaveExpenseDate:function(t){var n=Object(p.a)(Object(p.a)({},t),{},{id:Math.random().toString()});e.onAddExpense(n),c(!1)},onCancel:function(){c(!1)}})]})},N=[{id:"e1",title:"Roasted Peppers",amount:94.12,date:new Date(2022,7,14)},{id:"e2",title:"New TV",amount:799.49,date:new Date(2022,2,12)},{id:"e3",title:"Car Insurance",amount:294.67,date:new Date(2022,2,28)},{id:"e4",title:"New Desk (Wooden)",amount:450,date:new Date(2022,5,12)}];var g=function(){var e=Object(u.useState)(N),t=Object(s.a)(e,2),n=t[0],a=t[1];return Object(i.jsxs)("div",{children:[Object(i.jsx)(_,{onAddExpense:function(e){a((function(t){return[e].concat(Object(l.a)(t))}))}}),Object(i.jsx)(m,{items:n})]})};c.a.createRoot(document.getElementById("root")).render(Object(i.jsx)(g,{}))}},[[30,1,2]]]);
//# sourceMappingURL=main.aef964e1.chunk.js.map