"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[750],{6750:function(t,e,n){n.r(e),n.d(e,{default:function(){return j}});var a=n(9439),c=n(9434),o=n(3634),r=n(6351),s="ContactForm_form__dhl+T",u="ContactForm_formLabel__TSwxK",i="ContactForm_formInput__GszVU",l="ContactForm_formButton__TN6Jq",m=n(2791),d=n(184),f=function(){var t=(0,c.v9)(r.Af),e=(0,c.I0)(),n=(0,m.useState)(""),f=(0,a.Z)(n,2),h=f[0],_=f[1],p=(0,m.useState)(""),C=(0,a.Z)(p,2),b=C[0],x=C[1];return(0,d.jsxs)("form",{className:s,onSubmit:function(n){n.preventDefault();var a=n.currentTarget.elements.name.value;t.find((function(t){return t.name.toLowerCase()===a.toLowerCase()}))?window.alert("".concat(a," is already in contacts")):e((0,o.uK)({name:h,number:b})),_(""),x("")},children:[(0,d.jsx)("label",{className:u,children:"Name"}),(0,d.jsx)("input",{className:i,type:"text",name:"name",autoComplete:"off",value:h,onChange:function(t){return _(t.target.value)},label:"Name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,d.jsx)("label",{className:u,children:"Number"}),(0,d.jsx)("input",{className:i,type:"tel",name:"number",autoComplete:"off",value:b,onChange:function(t){return x(t.target.value)},label:"Number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,d.jsx)("button",{className:l,type:"submit",children:"Add contact"})]})},h={contactList:"ContactList_contactList__UFVCg",contactItem:"ContactList_contactItem__ppNQ5",contactButton:"ContactList_contactButton__QiycO"},_="ContactListItem_contactItem__2K-XM",p="ContactListItem_contactButton__djolp",C=n(5581),b=function(t){var e=t.contact,n=t.id,a=t.name,o=t.number,r=t.onContactRemove,s=(0,c.I0)();return(0,d.jsxs)("li",{className:_,label:"".concat(a,": ").concat(o),onClick:function(){return function(t){s((0,C.Li)()),s((0,C.cr)(t))}(e)},children:[(0,d.jsxs)("span",{children:[a,": ",o]}),(0,d.jsx)("button",{className:p,type:"button",id:n,onClick:function(){return r(n)},children:"X"})]},n)},x=function(){var t=(0,c.I0)(),e=(0,c.v9)(r.Af),n=(0,c.v9)(r.AD),a=(0,c.v9)(r.xU),s=e.filter((function(t){return t.name.toLowerCase().includes(n.toLowerCase())})).sort((function(t,e){return t.name.localeCompare(e.name)})),u=function(e){t((0,o.GK)(e))},i=s.map((function(t){return(0,d.jsx)(b,{contact:t,id:t.id,name:t.name,number:t.number,onContactRemove:u,filter:n},t.id)}));return(0,d.jsxs)(d.Fragment,{children:[e.length>0&&(0,d.jsx)("ul",{className:h.contactsList,children:i}),(a||0===e.length)&&(0,d.jsx)("h4",{className:h.empty,children:"You did not add any Contact yet..."})]})},v=n(854),j=function(){var t=(0,c.I0)(),e=(0,c.v9)(r.xU),n=(0,c.v9)(r.zh);return(0,m.useEffect)((function(){t((0,o.yF)())}),[t]),(0,d.jsxs)(d.Fragment,{children:[e&&!n&&(0,d.jsx)(v.a,{}),(0,d.jsxs)("div",{children:[(0,d.jsx)(f,{}),(0,d.jsx)(x,{})]})]})}}}]);
//# sourceMappingURL=750.f4d4c886.chunk.js.map