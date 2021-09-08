(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[0],{108:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var a=n(38);function c(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],a=!0,c=!1,r=void 0;try{for(var o,u=t[Symbol.iterator]();!(a=(o=u.next()).done)&&(n.push(o.value),!e||n.length!==e);a=!0);}catch(i){c=!0,r=i}finally{try{a||null==u.return||u.return()}finally{if(c)throw r}}return n}}(t,e)||Object(a.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},114:function(t,e,n){t.exports={form:"ContactForm_form__3ateH",label:"ContactForm_label__iYR4Q",input:"ContactForm_input__2Zkig",btn:"ContactForm_btn__1JpRv"}},115:function(t,e,n){t.exports={form:"Filter_form__LlR5H",label:"Filter_label__1MI-Y",input:"Filter_input__yY-KY",btn:"Filter_btn__3IM-T"}},116:function(t,e,n){t.exports={list:"ContactList_list__1fvOe",item:"ContactList_item__1mFBC",name:"ContactList_name__NMSGQ",btn:"ContactList_btn__1cM8f"}},117:function(t,e,n){t.exports={contacts:"ContactsView_contacts__CzxqU"}},119:function(t,e,n){"use strict";n.r(e);var a={};n.r(a),n.d(a,"fetchContact",(function(){return N})),n.d(a,"addContact",(function(){return F})),n.d(a,"deleteContact",(function(){return S})),n.d(a,"updateContact",(function(){return w}));var c={};n.r(c),n.d(c,"getContacts",(function(){return L})),n.d(c,"getFilter",(function(){return k})),n.d(c,"getTotalContacts",(function(){return q})),n.d(c,"getError",(function(){return A})),n.d(c,"getLoadingStatus",(function(){return R})),n.d(c,"getFiltredContacts",(function(){return z}));var r=n(7),o=n(108),u=n(0),i=n(114),s=n.n(i),l=n(11),d=n(22),b=n.n(d),f=l.fetchContactRequest,m=l.fetchContactSuccess,j=l.fetchContactError,h=l.addContactRequest,p=l.addContactSuccess,C=l.addContactError,O=l.deleteContactRequest,_=l.deleteContactSuccess,v=l.deleteContactError,x=l.updateContactRequest,g=l.updateContactSuccess,y=l.updateContactError,N=function(){return function(t){t(f()),b.a.get("/contacts").then((function(e){var n=e.data;return t(m(n))})).catch((function(e){return t(j(e))}))}},F=function(t,e,n){return function(a){if(t.some((function(t){return t.name===e})))alert("".concat(e," is already in contacts"));else{var c={name:e,number:n};a(h()),b.a.post("/contacts",c).then((function(t){var e=t.data;return a(p(e))})).catch((function(t){return a(C(t))}))}}},S=function(t){return function(e){e(O()),b.a.delete("/contacts/".concat(t)).then((function(){return e(_(t))})).catch((function(t){return e(v(t))}))}},w=function(t,e){return function(n){var a={number:e};n(x()),b.a.patch("/contacts/".concat(t),a).then((function(t){var e=t.data;return n(g(e))})).catch((function(t){return n(y(t))}))}},E=(n(39),n(31)),L=function(t){return t.contacts.items},k=function(t){return t.contacts.filter},q=function(t){return t.contacts.items.length},A=function(t){return t.contacts.error},R=function(t){return t.contacts.loading},z=Object(E.a)([L,k],(function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.includes(n)}))})),M=n(1);function T(){var t=Object(r.b)(),e=Object(r.c)(c.getFiltredContacts),n=Object(u.useState)(""),i=Object(o.a)(n,2),l=i[0],d=i[1],b=Object(u.useState)(""),f=Object(o.a)(b,2),m=f[0],j=f[1],h=function(t){var e=t.target,n=e.name,a=e.value;switch(n){case"name":d(a);break;case"number":j(a);break;default:return}};return Object(M.jsxs)("form",{className:s.a.form,method:"post",onSubmit:function(n){n.preventDefault(),t(a.addContact(e,l,m)),d(""),j("")},children:[Object(M.jsxs)("label",{className:s.a.label,children:["Name:",Object(M.jsx)("input",{className:s.a.input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f\u0406\u0456\u0407\u0457\u0490\u0491]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f\u0406\u0456\u0407\u0457\u0490\u0491 ])?[a-zA-Z\u0430-\u044f\u0410-\u042f\u0406\u0456\u0407\u0457\u0490\u0491]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:h,value:l})]}),Object(M.jsxs)("label",{className:s.a.label,children:["Number:",Object(M.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",className:s.a.input,value:m,onChange:h,required:!0})]}),Object(M.jsx)("div",{className:s.a.label,children:Object(M.jsx)("button",{type:"submit",className:s.a.btn,children:"Add contact"})})]})}var Y=n(115),I=n.n(Y),J=function(){var t=Object(r.c)(c.getFilter),e=Object(r.b)();return Object(M.jsx)("form",{className:I.a.form,children:Object(M.jsxs)("label",{className:I.a.label,children:["Find contacts by name",Object(M.jsx)("input",{className:I.a.input,type:"text",placeholder:"Enter name",name:"filter",required:!0,onChange:function(t){e(l.changeFilter(t.currentTarget.value))},value:t})]})})},Z=n(116),B=n.n(Z);function D(){var t=Object(r.c)(c.getError),e=Object(r.c)(c.getLoadingStatus),n=Object(r.b)();Object(u.useEffect)((function(){n(a.fetchContact())}),[n]);var o=Object(r.c)(c.getFiltredContacts);return Object(M.jsxs)(M.Fragment,{children:[e&&Object(M.jsx)("h2",{className:B.a.loading,children:"Loading..."}),t&&Object(M.jsx)("h2",{className:B.a.error,children:t}),Object(M.jsx)("ul",{className:B.a.list,children:o.map((function(t){var e=t.id,c=t.name,r=t.number;return Object(M.jsxs)("li",{className:B.a.item,children:[Object(M.jsxs)("p",{className:B.a.name,children:[c,": ",Object(M.jsx)("span",{children:r})]}),Object(M.jsx)("button",{type:"button",className:B.a.btn,onClick:function(){return n(a.deleteContact(e))},children:"Delete"})]},e)}))})]})}var H=n(117),Q=n.n(H);e.default=function(){var t=Object(r.c)(c.getTotalContacts);return Object(M.jsxs)("div",{className:Q.a.contacts,children:[Object(M.jsx)("h2",{children:"Expand your contacts "}),Object(M.jsx)(T,{}),Object(M.jsxs)("h2",{children:["Your contacts (total: ",t,") "]}),Object(M.jsx)(J,{}),Object(M.jsx)(D,{})]})}}}]);
//# sourceMappingURL=ContactsView.cee7ad43.chunk.js.map