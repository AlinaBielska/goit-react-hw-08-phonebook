"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[750],{6750:function(t,e,n){n.r(e),n.d(e,{default:function(){return x}});var a=n(9439),r=n(9434),o=n(3634),c=n(6351),s="ContactForm_form__dhl+T",u="ContactForm_formLabel__TSwxK",i="ContactForm_formInput__GszVU",l="ContactForm_formButton__TN6Jq",m=n(2791),d=n(184),f=function(){var t=(0,r.v9)(c.Af),e=(0,r.I0)(),n=(0,m.useState)(""),f=(0,a.Z)(n,2),h=f[0],p=f[1],C=(0,m.useState)(""),_=(0,a.Z)(C,2),v=_[0],b=_[1];return(0,d.jsxs)("form",{className:s,onSubmit:function(n){n.preventDefault();var a=n.currentTarget.elements.name.value;t.find((function(t){return t.name.toLowerCase()===a.toLowerCase()}))?window.alert("".concat(a," is already in contacts")):e((0,o.uK)({name:h,number:v})),p(""),b("")},children:[(0,d.jsx)("label",{className:u,children:"Name"}),(0,d.jsx)("input",{className:i,type:"text",name:"name",autoComplete:"off",value:h,onChange:function(t){return p(t.target.value)},label:"Name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,d.jsx)("label",{className:u,children:"Number"}),(0,d.jsx)("input",{className:i,type:"tel",name:"number",autoComplete:"off",value:v,onChange:function(t){return b(t.target.value)},label:"Number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,d.jsx)("button",{className:l,type:"submit",children:"Add contact"})]})},h={contactList:"ContactList_contactList__UFVCg",contactItem:"ContactList_contactItem__ppNQ5",contactButton:"ContactList_contactButton__QiycO"},p={},C=n(5581),_=function(t){var e=t.contact,n=t.id,a=t.name,o=t.number,c=t.onContactRemove,s=(0,r.I0)();return(0,d.jsx)("li",{className:p.item,label:"".concat(a,": ").concat(o),variant:"outlined",onClick:function(){return function(t){s((0,C.Li)()),s((0,C.cr)(t))}(e)},onDelete:function(){return c(n)}},n)},v=function(){var t=(0,r.I0)(),e=(0,r.v9)(c.Af),n=(0,r.v9)(c.AD),a=(0,r.v9)(c.xU),s=e.filter((function(t){return t.name.toLowerCase().includes(n.toLowerCase())})).sort((function(t,e){return t.name.localeCompare(e.name)})),u=function(e){t((0,o.GK)(e))},i=s.map((function(t){return(0,d.jsx)(_,{contact:t,id:t.id,name:t.name,number:t.number,onContactRemove:u,filter:n},t.id)}));return(0,d.jsxs)(d.Fragment,{children:[e.length>0&&(0,d.jsx)("ul",{className:h.contactsList,children:i}),(a||0===e.length)&&(0,d.jsx)("h4",{className:h.empty,children:"You did not add any Contact yet..."})]})},b=n(854),x=function(){var t=(0,r.I0)(),e=(0,r.v9)(c.xU),n=(0,r.v9)(c.zh);return(0,m.useEffect)((function(){t((0,o.yF)())}),[t]),(0,d.jsxs)(d.Fragment,{children:[e&&!n&&(0,d.jsx)(b.a,{}),(0,d.jsxs)("div",{children:[(0,d.jsx)(f,{}),(0,d.jsx)(v,{})]})]})}}}]);
//# sourceMappingURL=750.da89504b.chunk.js.map