(this.webpackJsonpsuper_store=this.webpackJsonpsuper_store||[]).push([[0],{47:function(e,t,c){},49:function(e,t,c){},54:function(e,t,c){},55:function(e,t,c){},57:function(e,t,c){},58:function(e,t,c){},59:function(e,t,c){},78:function(e,t,c){},79:function(e,t,c){},80:function(e,t,c){},81:function(e,t,c){},82:function(e,t,c){},83:function(e,t,c){},84:function(e,t,c){},85:function(e,t,c){},86:function(e,t,c){"use strict";c.r(t);var n={};c.r(n),c.d(n,"SETUSER",(function(){return d}));var a={};c.r(a),c.d(a,"ADDTOCART",(function(){return p})),c.d(a,"REMOVEFROMCART",(function(){return v})),c.d(a,"INCREASECARTITEM",(function(){return g})),c.d(a,"DECREASECARTITEM",(function(){return N})),c.d(a,"SETCART",(function(){return w})),c.d(a,"INITCART",(function(){return y}));c(40),c(41);var s=c(2),r=c.n(s),i=c(35),l=c.n(i),o=(c(47),c(9)),j=c(5),u=c(19),d="SETUSER",b=function(e,t){switch(t.type){case d:return t.data;default:return e}},m=c(3),h=c(1),O=Object(s.createContext)(),x=function(e){var t=Object(s.useReducer)(b,null),c=Object(m.a)(t,2),n=c[0],a=c[1];return Object(h.jsx)(O.Provider,{value:{userState:n,userDispatch:a},children:e.children})},f=function(){return Object(s.useContext)(O)},p="ADDTOCART",v="REMOVEFROMCART",g="INCREASECARTITEM",N="DECREASECARTITEM",w="SETCART",y="INITSTATE",k=c(24),S=c(7),C=[],E=function(e,t){switch(t.type){case p:var c=e.find((function(e){return e.id===t.data.id}));if(c){var n=Object(S.a)(Object(S.a)({},c),{},{quantity:c.quantity+1,total_price:t.data.total_price+t.data.price}),a=e.filter((function(e){return e.id!==c.id}));return[].concat(Object(k.a)(a),[n])}var s=t.data,r=Object(S.a)(Object(S.a)({},s),{},{quantity:s.item_number,total_price:s.item_number*s.price});return[].concat(Object(k.a)(e),[r]);case v:var i=t.data;return e.filter((function(e){return e.id!==i}));case g:var l=t.data,o=e.find((function(e){return e.id===l.id})),j=e.findIndex((function(e){return e.id===l.id})),u=Object(S.a)(Object(S.a)({},o),{},{quantity:o.quantity+1,total_price:o.total_price+o.price});return e.map((function(e,t){return t===j?u:e}));case N:var d=t.data,b=e.find((function(e){return e._id===d._id})),m=e.findIndex((function(e){return e._id===d._id})),h=Object(S.a)(Object(S.a)({},b),{},{quantity:b.quantity-1,total_price:b.total_price-b.price});return e.map((function(e,t){return t===m?h:e}));case w:return t.data;case y:return C;default:return e}},T=Object(s.createContext)(),R=function(e){var t=Object(s.useReducer)(E,C),c=Object(m.a)(t,2),n=c[0],a=c[1];return Object(h.jsx)(T.Provider,{value:{cartItems:n,cartDispatch:a},children:e.children})},I=function(){return Object(s.useContext)(T)},_=(c(49),function(e){var t=e.navName,c=e.linkTo,n=e.sign_in,a=I().cartItems,s="nav-item mx-2";if(n&&(s+=" sign_in"),"Cart"===t){var r=0!==a.length?Object(h.jsx)("div",{className:"icon-tag",children:a.length}):null;return Object(h.jsx)("li",{className:s,children:Object(h.jsxs)(o.c,{id:"cart",to:c,exact:!0,className:"nav-link text-white font-weight-bold icon-block",activeClassName:"active",children:[t,"  ",Object(h.jsx)(u.b,{size:25}),r]})})}return"Admin"===t?Object(h.jsx)("li",{className:"".concat(s),children:Object(h.jsx)(o.c,{to:c,exact:!0,className:"nav-link text-white font-weight-bold admin",children:t})}):Object(h.jsx)("li",{className:s,children:Object(h.jsx)(o.c,{to:c,exact:!0,className:"nav-link text-white font-weight-bold",activeClassName:"active",children:t})})}),A=(c(54),function(){var e=f(),t=e.userState,c=e.userDispatch,s=I().cartDispatch,r=Object(j.g)(),i=null===t?Object(h.jsx)(_,{sign_in:!0,navName:"Sign In",linkTo:"/login"}):Object(h.jsxs)("div",{className:"px-4 m-0 text-white",children:[Object(h.jsx)("div",{children:t.name}),Object(h.jsx)("div",{className:"logout",onClick:function(){c({type:n.SETUSER,data:null}),s({type:a.INITCART}),window.localStorage.removeItem("loggedUser"),r.push("/login")},children:"logout"})]});return Object(h.jsxs)("nav",{className:"navbar navbar-expand-md navbar-light py-2 head_bar",children:[Object(h.jsx)("button",{className:"navbar-toggler text-white",type:"button","data-toggle":"collapse","data-target":"#navbarToggler","aria-controls":"navbarTogglerDemo03","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(h.jsx)(u.a,{className:"navbar-toggler-icon",style:{color:"white"}})}),Object(h.jsx)(o.b,{to:"/",className:"navbar-brand display-1 text-white font-weight-bolder",children:"Super Store"}),Object(h.jsx)("div",{className:"collapse navbar-collapse",id:"navbarToggler",children:Object(h.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(h.jsx)(_,{navName:"Home",linkTo:"/"}),Object(h.jsx)(_,{navName:"Deals",linkTo:"/deals"}),Object(h.jsx)(_,{navName:"Cart",linkTo:"/cart"}),t&&"admin"===t.role?Object(h.jsx)(_,{navName:"Admin",linkTo:"/admin",children:"Admin"}):null,i]})})]})}),P=(c(55),c(4)),D=c.n(P),L=c(6),q=function(){return Object(h.jsxs)("svg",{width:"16px",height:"16px",viewBox:"0 0 64 64",version:"1.1",xmlns:"http://www.w3.org/2000/svg",children:[Object(h.jsx)("title",{children:"star-full"}),Object(h.jsx)("desc",{children:"Created with Sketch."}),Object(h.jsx)("g",{id:"star-full",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:Object(h.jsx)("path",{d:"M31.4885496,3.11613455 L22.2702274,21.5136178 L1.67622723,24.4611015 L16.5775637,38.7678904 L13.0578457,58.980827 L31.4885496,49.4369407 L49.9192536,58.980827 L46.3995355,38.7678904 L61.300872,24.4611015 L40.7068718,21.5136178 L31.4885496,3.11613455 Z",id:"Star",stroke:"#E7B811",fill:"#F6C415"})})]})},F=function(){return Object(h.jsxs)("svg",{width:"16px",height:"16px",viewBox:"0 0 64 64",version:"1.1",xmlns:"http://www.w3.org/2000/svg",children:[Object(h.jsx)("title",{children:"Artboard"}),Object(h.jsx)("desc",{children:"Created with Sketch."}),Object(h.jsxs)("g",{id:"Artboard",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:[Object(h.jsx)("polygon",{id:"Star",fill:"#F6C415",points:"32 50.2781955 13.1908719 60.0180394 16.7830957 39.3887189 1.56619148 24.7789531 22.595436 21.7691758 32 3"}),Object(h.jsx)("path",{d:"M32,4.11613455 L22.9252589,22.2270655 L2.65231591,25.1285984 L17.3213333,39.2123374 L13.8564583,59.1103226 L32,49.7151362 L50.1435417,59.1103226 L46.6786667,39.2123374 L61.3476841,25.1285984 L41.0747411,22.2270655 L32,4.11613455 Z",id:"Star-Copy-4",stroke:"#E7B811"})]})]})},M=function(){return Object(h.jsxs)("svg",{width:"16px",height:"16px",viewBox:"0 0 64 64",version:"1.1",xmlns:"http://www.w3.org/2000/svg",children:[Object(h.jsx)("title",{children:"star-empty"}),Object(h.jsx)("desc",{children:"Created with Sketch."}),Object(h.jsx)("g",{id:"star-empty",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:Object(h.jsx)("path",{d:"M32,4.11613455 L22.9252589,22.2270655 L2.65231591,25.1285984 L17.3213333,39.2123374 L13.8564583,59.1103226 L32,49.7151362 L50.1435417,59.1103226 L46.6786667,39.2123374 L61.3476841,25.1285984 L41.0747411,22.2270655 L32,4.11613455 Z",id:"Star-Copy-4",stroke:"#E7B811"})})]})},U=function(e){for(var t=e.average_rating,c=[],n=Math.trunc(t),a=t%1>0?1:0,s=5-(n+a),r=0;r<n;r++)c.push(Object(h.jsx)(q,{},"full_star_".concat(r)));for(var i=0;i<a;i++)c.push(Object(h.jsx)(F,{},"half_star_".concat(i)));for(var l=0;l<s;l++)c.push(Object(h.jsx)(M,{},"empty_star_".concat(l)));return c},z=(c(57),function(e){var t=e.imgUrl,c=e.price,n=e.name,a=e.average_rating,s=e.isOnSale,r=e.item_id;return Object(h.jsxs)("div",{className:"card",children:[Object(h.jsx)("img",{className:"card-img-top img center",src:t,alt:n}),Object(h.jsxs)("div",{className:"card-body",children:[Object(h.jsx)("p",{className:"mb-0",children:Object(h.jsx)(o.b,{to:"item/".concat(r),children:n})}),Object(h.jsx)(U,{average_rating:a}),Object(h.jsx)("div",{children:Object(h.jsx)("p",{className:"card-text",children:Object(h.jsxs)("strong",{children:["$",c,s&&Object(h.jsx)("span",{className:"onSale ml-2",children:"On Sale"})]})})})]}),Object(h.jsx)("div",{className:"row mb-3",children:Object(h.jsx)(o.b,{to:"item/".concat(r),className:"btn btn-primary center",children:"View Item"})})]})}),B=(c(58),function(e){var t=e.items;return Object(h.jsx)("div",{className:"container mt-5",children:Object(h.jsx)("div",{className:"row",children:t.map((function(e){return Object(h.jsx)("div",{className:"col-md-4 col-sm-6 my-3",children:Object(h.jsx)(z,{name:e.name,imgUrl:e.imageUrl,description:e.description,price:e.price,average_rating:e.avgRating,isOnSale:e.isOnSale,item_id:e.id})},e.id)}))})})}),Z=c(38),J=(c(59),function(e){var t=e.handleSearch,c=Object(s.useState)(""),n=Object(m.a)(c,2),a=n[0],r=n[1];return Object(h.jsx)("div",{className:"row search",children:Object(h.jsx)("div",{className:"col-sm-3 offset-sm-4 mt-3 mb-2",children:Object(h.jsxs)("div",{className:"input-group md-form form-sm form-2 pl-0",children:[Object(h.jsx)("input",{className:"form-control my-0 py-1 amber-border",type:"search",placeholder:"Search","aria-label":"Search",onChange:function(e){var c=e.target;r(c.value),""===c.value&&t("")}}),Object(h.jsx)("div",{className:"input-group-append",children:Object(h.jsx)("span",{className:"input-group-text amber lighten-3  bg-warning",id:"basic-text1",children:Object(h.jsx)("i",{className:"fas fa-search text-grey","aria-hidden":"true",onClick:function(e){e.preventDefault(),t(a)},children:Object(h.jsx)(Z.a,{})})})})]})})})}),G=c(15),V=c.n(G),$={PAGE_SIZE:6},H=function(){var e=Object(L.a)(D.a.mark((function e(t){var c;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V.a.post("".concat("/","item/upload"),t);case 2:return c=e.sent,e.abrupt("return",c.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),W=function(){var e=Object(L.a)(D.a.mark((function e(t){var c;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V.a.get("".concat("/","item/").concat(t));case 2:return c=e.sent,e.abrupt("return",c.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();var Q=function(e){var t=e.from,c=(e.size,e.sortField),n=e.sortDir,a=e.isOnSale,s=e.q;return V.a.get("".concat("/","item/list"),{params:{from:t,size:$.PAGE_SIZE,sortField:c,sortDir:n,isOnSale:a,q:s}}).then((function(e){return e.data}))},Y=(c(78),c(14)),K=c.n(Y),X=(c(79),function(e){var t=e.currentPage,c=e.allPages,n=e.nextPage,a=e.prevPage,s=e.firstPage,r=e.lastPage;return Object(h.jsxs)("div",{className:"pagination-button text-center mb-4 mt-4",children:[Object(h.jsx)("button",{className:"mx-3",onClick:function(){return s()},disabled:1===t,children:"First"}),Object(h.jsx)("button",{onClick:function(){return a()},disabled:1===t,children:" < "}),Object(h.jsxs)("span",{className:"mx-3",children:[c?t:null," - ",c||null]}),Object(h.jsx)("button",{onClick:function(){return n()},disabled:t===c,children:" > "}),Object(h.jsx)("button",{className:"mx-3",onClick:function(){return r()},disabled:t===c,children:"Last"})]})});X.prototype={currentPage:K.a.number.isRequired,allPages:K.a.number.isRequired,nextPage:K.a.func.isRequired,prevPage:K.a.func.isRequired};var ee=X,te=function(e){var t=e.updatePage,c=e.page,n=e.totalItems,a=Math.ceil(n/6);return Object(h.jsx)(ee,{currentPage:c,allPages:a,nextPage:function(){t(c+1)},prevPage:function(){t(c-1)},firstPage:function(){t(1)},lastPage:function(){t(a)}})},ce=function(){var e=Object(s.useState)([]),t=Object(m.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)(!0),r=Object(m.a)(a,2),i=r[0],l=r[1],o=Object(s.useState)(null),j=Object(m.a)(o,2),u=j[0],d=j[1],b=Object(s.useState)(1),O=Object(m.a)(b,2),x=O[0],f=O[1],p=Object(s.useState)(""),v=Object(m.a)(p,2),g=v[0],N=v[1];Object(s.useEffect)((function(){(function(){var e=Object(L.a)(D.a.mark((function e(){var t,c;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={from:(x-1)*$.PAGE_SIZE,q:g,isOnSale:!1},e.next=4,Q(t);case 4:c=e.sent,d(c.total),n(c.items),l(!1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[x,g]);var w=function(){var e=Object(L.a)(D.a.mark((function e(t){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:""===t?(N(""),f(1)):(f(1),N(t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:"container-fluid",children:[Object(h.jsx)(J,{handleSearch:w}),0!==c.length||i?Object(h.jsx)(B,{items:c}):Object(h.jsx)("h3",{className:"no-item",children:"No items matched your search"}),Object(h.jsx)(te,{updatePage:function(e){f(e)},page:x,totalItems:u})]})},ne=(c(80),function(){var e=Object(s.useState)([]),t=Object(m.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)(!0),r=Object(m.a)(a,2),i=r[0],l=r[1],o=Object(s.useState)(null),j=Object(m.a)(o,2),u=j[0],d=j[1],b=Object(s.useState)(1),O=Object(m.a)(b,2),x=O[0],f=O[1],p=Object(s.useState)(""),v=Object(m.a)(p,2),g=v[0],N=v[1];Object(s.useEffect)((function(){(function(){var e=Object(L.a)(D.a.mark((function e(){var t,c;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={isOnSale:!0,from:(x-1)*$.PAGE_SIZE,q:g},e.next=4,Q(t);case 4:c=e.sent,n(c.items),d(c.total),l(!1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[x,g]);var w=function(){var e=Object(L.a)(D.a.mark((function e(t){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:N(""===t?"":t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=!1===i&&0===c.length?Object(h.jsx)("div",{className:"noDeals",children:Object(h.jsx)("h1",{children:"No Deals available at the moment"})}):Object(h.jsx)(B,{items:c});return Object(h.jsxs)("div",{children:[Object(h.jsx)(J,{handleSearch:w}),Object(h.jsx)("div",{className:"row",children:0!==c.length||i?y:Object(h.jsx)("h3",{className:"no-item",children:"No Deals matched your search"})}),Object(h.jsx)(te,{updatePage:function(e){f(e)},page:x,totalItems:u})]})}),ae=(c(81),function(e){var t=e.item,c=e.notify,n=e.increaseItem,a=e.decreaseItem,s=e.remove,r=t.stockCount<1?"bg-danger ":"bg-success ";return Object(h.jsx)("li",{children:Object(h.jsxs)("div",{className:"row cart-border row-sm-4",children:[Object(h.jsx)("div",{className:"col-xs-4 d-flex justify-content-center col-sm-4 col-md-4 col-lg-3 px-sm-3",children:Object(h.jsx)("img",{className:"card-img-top img center cart-img",src:t.imageUrl,alt:t.name})}),Object(h.jsxs)("div",{className:"col-xs-4 col-sm-4 col-md-4 col-lg-4 px-sm-3",children:[Object(h.jsx)("div",{className:"row p-2",children:Object(h.jsx)("strong",{children:t.name})}),Object(h.jsxs)("div",{className:"row px-2",children:["Available in stock: ",Object(h.jsx)("span",{className:r+"px-3 text-white",children:t.stockCount})]}),Object(h.jsxs)("div",{className:"row p-2",children:[Object(h.jsxs)("div",{className:"col",children:["Quantity: ",Object(h.jsx)("span",{className:"quantity text-white py-1",children:t.quantity})]}),Object(h.jsx)("div",{className:"col",children:Object(h.jsx)("span",{className:"text-primary button",onClick:function(){return s(t.id)},children:"Remove"})})]}),Object(h.jsxs)("div",{className:"row py-2",children:[Object(h.jsx)("button",{className:"ml-4 bg-primary control_btn",onClick:function(){t.quantity<=1?c({message:"Invalid number of items",class:"alert alert-danger"}):(t.quantity<=t.stockCount&&t.quantity>0&&c(""),a(t))},children:"-"}),Object(h.jsx)("button",{className:"ml-3 bg-primary control_btn",onClick:function(){t.quantity===t.stockCount?c({message:"Insufficient stock!",class:"alert alert-danger"}):(t.quantity<=t.stockCount&&t.quantity>0&&c(""),n(t))},children:"+"})]})]}),Object(h.jsx)("div",{className:"col-xs-4 col-sm-4 col-md-4 col-lg-5 px-sm-3",children:Object(h.jsx)("div",{className:"d-flex justify-content-end",children:Object(h.jsx)("h4",{children:Object(h.jsxs)("strong",{children:["$",t.total_price.toFixed(2)]})})})})]})})}),se=function(e){var t=e.message;return Object(h.jsx)("div",{className:"text-center",children:t})},re=null,ie=function(){var e=Object(L.a)(D.a.mark((function e(){var t,c;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={headers:{authorization:"bearer ".concat(re)}},console.log("config",t),e.next=4,V.a.get("".concat("/","cart"),t);case 4:return c=e.sent,e.abrupt("return",c.data);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),le={setToken:function(e){re=e},saveCart:function(){var e=Object(L.a)(D.a.mark((function e(t){var c,n;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c={headers:{authorization:"bearer ".concat(re)}},console.log("config",c),e.next=4,V.a.post("".concat("/","cart/"),t,c);case 4:return n=e.sent,e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),getCart:ie},oe=(c(82),function(){var e=I(),t=e.cartItems,c=e.cartDispatch,n=Object(s.useState)({}),r=Object(m.a)(n,2),i=r[0],l=r[1];Object(s.useEffect)((function(){var e=window.localStorage.getItem("loggedUser");if(e){var n=JSON.parse(e);c({type:a.SETCART,data:n.cart}),le.setToken(n.token)}0===t.length&&null===e&&o({message:"Cart empty for now",class:"alert alert-danger"})}),[c,t.length]);var o=function(e){l(e),setTimeout((function(){l({})}),5e3)},u=Object(j.g)(),d=function(e){c({type:a.INCREASECARTITEM,data:e})},b=function(e){c({type:a.DECREASECARTITEM,data:e})},O=function(e){c({type:a.REMOVEFROMCART,data:e})},x=function(){var e=Object(L.a)(D.a.mark((function e(){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,le.saveCart(t);case 2:204===e.sent.status&&o({message:"Cart saved succesfully",class:"alert alert-success"});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=t.map((function(e){return e.total_price})),p=0!==f.length?f.reduce((function(e,t){return e+t})):null;return Object(h.jsx)("div",{className:"row",children:Object(h.jsxs)("div",{className:"col",children:[i?Object(h.jsx)("div",{className:"row",children:Object(h.jsx)("div",{className:"col-sm-6 offset-sm-3 ".concat(i.class),role:"alert",children:Object(h.jsx)(se,{message:i.message})})}):null,Object(h.jsx)("div",{className:"row",children:Object(h.jsxs)("div",{className:"col py-5 mx-4",children:[Object(h.jsx)("div",{className:"row",children:Object(h.jsx)("div",{className:"col-sm-8 offset-sm-2 p-0",children:Object(h.jsx)("h1",{className:"py-5",children:"Shopping Cart"})})}),Object(h.jsx)("div",{className:"row",children:Object(h.jsx)("div",{className:"col-xs-8 offset-xs-2 col-sm-10 offset-sm-1 col-md-8 offset-md-2",children:Object(h.jsx)("ul",{className:"list-group cart-list",children:t.map((function(e){return Object(h.jsx)(ae,{item:e,notify:o,increaseItem:d,decreaseItem:b,remove:O,children:e.name},e.id)}))})})}),Object(h.jsx)("div",{className:"row",children:Object(h.jsx)("div",{className:"col-xs-8 offset-xs-2 col-sm-10 offset-sm-1 col-md-8 offset-md-2",children:Object(h.jsxs)("div",{className:"row py-5",children:[Object(h.jsx)("div",{className:"col",children:Object(h.jsx)("button",{className:"btn btn-lg checkout-btn",onClick:function(){c({type:a.INITSTATE}),u.push("/thankyou")},children:Object(h.jsx)("strong",{children:"Checkout"})})}),Object(h.jsx)("div",{className:"col",children:Object(h.jsx)("button",{className:"btn btn-lg saveCart-btn",onClick:x,children:Object(h.jsx)("strong",{children:"Save cart"})})}),Object(h.jsx)("div",{className:"col d-flex justify-content-end ",children:Object(h.jsx)("h4",{children:Object(h.jsxs)("strong",{children:["Total: $",p]})})})]})})})]})})]})})}),je=(c(83),function(){var e=I(),t=e.cartItems,c=e.cartDispatch,n=Object(s.useState)({}),r=Object(m.a)(n,2),i=r[0],l=r[1],o=Object(s.useState)(1),u=Object(m.a)(o,2),d=u[0],b=u[1],O=Object(s.useState)(""),x=Object(m.a)(O,2),f=x[0],p=x[1],v=Object(s.useState)(!1),g=Object(m.a)(v,2),N=g[0],w=g[1],y=Object(j.h)(),k=t.find((function(e){return e.id===i.id}));Object(s.useEffect)((function(){(function(){var e=Object(L.a)(D.a.mark((function e(){var t;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W(y.id);case 2:t=e.sent,l(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[y.id]),Object(s.useEffect)((function(){i.stockCount<1&&p("Item no longer in stock")}),[i.stockCount]);var C=i.stockCount<1?"bg-danger ":"bg-success ",E=0===i.stockCount,T=0===i.stockCount?"disable-btn":"enable-btn";return Object(h.jsxs)("div",{className:"col",children:[Object(h.jsx)("div",{className:"row text-center",children:N&&Object(h.jsx)("div",{className:"col-md-6 offset-md-3 alert alert-success",role:"alert",children:Object(h.jsx)(se,{message:"Added ".concat(d," ").concat(i.name," to Cart")})})}),Object(h.jsxs)("div",{className:"row item",children:[Object(h.jsx)("div",{className:"col-sm image_wrapper",children:Object(h.jsx)("img",{className:"float-sm-right mt-4",src:i.imageUrl,alt:i.name})}),Object(h.jsxs)("div",{className:"col-sm description",children:[Object(h.jsx)("p",{children:Object(h.jsx)("strong",{children:i.name})}),Object(h.jsx)("div",{children:Object(h.jsx)(U,{average_rating:i.avgRating})}),Object(h.jsx)("hr",{className:"line"}),Object(h.jsx)("p",{children:i.description}),Object(h.jsx)("p",{className:"my-3",children:Object(h.jsxs)("strong",{children:["$",i.price]})}),Object(h.jsxs)("div",{className:"my-3",children:["Available in stock: ",Object(h.jsx)("span",{className:C+"px-3 py-1 text-white",children:i.stockCount})]}),Object(h.jsxs)("div",{children:["Quantity: ",Object(h.jsx)("span",{className:"quantity text-white",children:d})]}),Object(h.jsxs)("div",{className:"my-3",children:[Object(h.jsx)("button",{className:"ml-4 bg-primary",onClick:function(){d<=1?p("Invalid number of items"):(d<=i.stockCount&&d>0&&p(""),b(d-1))},children:"-"}),Object(h.jsx)("button",{className:"ml-3 bg-primary",onClick:function(){d===i.stockCount?p("Insufficient stock!"):(d<=i.stockCount&&d>0&&p(""),b(d+1))},children:"+"})]}),Object(h.jsx)("div",{className:"my-3",children:Object(h.jsx)("button",{className:T,onClick:function(){c({type:a.ADDTOCART,data:Object(S.a)(Object(S.a)({},i),{},{item_number:d})}),w(!0),l(Object(S.a)(Object(S.a)({},i),{},{stockCount:i.stockCount-d})),setTimeout((function(){w(!1)}),5e3)},disabled:E,children:"Add to Cart"})}),f&&Object(h.jsx)("div",{className:"alert alert-danger",role:"alert",children:Object(h.jsx)(se,{message:f})}),k&&Object(h.jsx)("div",{className:"available_in_cart",children:"1 of this item is currently in your cart"})]})]})]})}),ue=function(){var e=Object(s.useState)(""),t=Object(m.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)(""),r=Object(m.a)(a,2),i=r[0],l=r[1],o=Object(s.useState)(null),j=Object(m.a)(o,2),u=j[0],d=j[1],b=Object(s.useState)(!1),O=Object(m.a)(b,2),x=O[0],f=O[1],p=Object(s.useState)(null),v=Object(m.a)(p,2),g=v[0],N=v[1],w=Object(s.useState)(null),y=Object(m.a)(w,2),k=y[0],S=y[1],C=Object(s.useState)(null),E=Object(m.a)(C,2),T=E[0],R=E[1],I=Object(s.useState)(null),_=Object(m.a)(I,2),A=_[0],P=_[1],q=function(){var e=Object(L.a)(D.a.mark((function e(t){var n,a,s;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(s in t.preventDefault(),n={name:c,description:i,avgRating:u,isOnSale:x,stockCount:g,price:k,image:T},a=new FormData,n)a.append(s,n[s]);return e.next=6,H(a);case 6:P({message:"Item saved successfully",class:"alert alert-success"}),setTimeout((function(){P({})}),5e3);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:"container",children:[A?Object(h.jsx)("div",{className:"row",children:Object(h.jsx)("div",{className:"col-sm-6 offset-sm-3 ".concat(A.class),role:"alert",children:Object(h.jsx)(se,{message:A.message})})}):null,Object(h.jsx)("h2",{className:"my-5 text-center",children:"Here is the admin to manage products"}),Object(h.jsx)("div",{children:Object(h.jsx)("h4",{children:"Create New Product"})}),Object(h.jsxs)("form",{className:"p-5 border border-primary",id:"form",children:[Object(h.jsxs)("div",{className:"form-group row",children:[Object(h.jsx)("label",{htmlFor:"name",className:"col-sm-2 col-form-label",children:"Products's Name"}),Object(h.jsx)("div",{className:"col-sm-6",children:Object(h.jsx)("input",{type:"text",className:"form-control",id:"name",placeholder:"Name the item here",onChange:function(e){return n(e.target.value)}})})]}),Object(h.jsxs)("div",{className:"form-group row",children:[Object(h.jsx)("label",{htmlFor:"description",className:"col-sm-2 col-form-label",children:"Description"}),Object(h.jsx)("div",{className:"col-sm-6",children:Object(h.jsx)("input",{type:"text",className:"form-control",id:"description",placeholder:"Describe the item",onChange:function(e){return l(e.target.value)}})})]}),Object(h.jsxs)("div",{className:"form-group row",children:[Object(h.jsx)("label",{htmlFor:"rating",className:"col-sm-2 col-form-label",children:"Rating"}),Object(h.jsx)("div",{className:"col-sm-6",children:Object(h.jsx)("input",{type:"number",id:"rating",name:"rating",min:"1",max:"5",onChange:function(e){return d(e.target.value)}})})]}),Object(h.jsxs)("div",{className:"form-group row",children:[Object(h.jsx)("label",{htmlFor:"isOnSale",className:"col-sm-2 col-form-label",children:"On Sale"}),Object(h.jsx)("div",{className:"col-sm-6",children:Object(h.jsx)("input",{type:"checkbox",id:"isOnSale",name:"onSale",onClick:function(e){return f(e.target.checked)}})})]}),Object(h.jsxs)("div",{className:"form-group row",children:[Object(h.jsx)("label",{htmlFor:"stockCount",className:"col-sm-2 col-form-label",children:"Stock count"}),Object(h.jsx)("div",{className:"col-sm-6",children:Object(h.jsx)("input",{type:"number",id:"stockCount",name:"stockCount",min:"1",max:"2000",onChange:function(e){return N(e.target.value)}})})]}),Object(h.jsxs)("div",{className:"form-group row",children:[Object(h.jsx)("label",{htmlFor:"price",className:"col-sm-2 col-form-label",children:"Price"}),Object(h.jsx)("div",{className:"col-sm-6",children:Object(h.jsx)("input",{type:"number",id:"price",name:"stockCount",onChange:function(e){return S(e.target.value)}})})]}),Object(h.jsxs)("div",{className:"form-group row",children:[Object(h.jsx)("label",{htmlFor:"image",className:"col-sm-2 col-form-label",children:"Price"}),Object(h.jsx)("div",{className:"col-sm-6",children:Object(h.jsx)("input",{type:"file",id:"image",name:"item",onChange:function(e){return R(e.target.files[0])}})})]}),Object(h.jsx)("div",{className:"form-group row",children:Object(h.jsx)("div",{className:"col-sm-10 offset-sm-2",children:Object(h.jsx)("button",{type:"submit",className:"btn btn-primary",onClick:q,children:"Submit"})})})]})]})},de=(c(84),function(){return Object(h.jsxs)("div",{className:"container thankyou-message",children:[Object(h.jsx)("div",{className:"row center",children:Object(h.jsx)("h1",{children:"Thank you for your purchase!"})}),Object(h.jsx)("div",{className:"row center message",children:"Your order will be on its way shortly. In the mean time, please feel free to continue shopping!"}),Object(h.jsx)("div",{className:"row center return-home",children:Object(h.jsx)(o.b,{to:"/",children:"Return to Home"})})]})}),be={login:function(){var e=Object(L.a)(D.a.mark((function e(t){var c;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V.a.post("".concat("/","login"),t);case 2:return c=e.sent,e.abrupt("return",c.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},me=(c(85),function(){var e=I().cartDispatch,t=f().userDispatch,c=Object(s.useState)({}),r=Object(m.a)(c,2),i=r[0],l=r[1],u=Object(s.useState)(""),d=Object(m.a)(u,2),b=d[0],O=d[1],x=Object(s.useState)(""),p=Object(m.a)(x,2),v=p[0],g=p[1],N=Object(s.useState)(!1),w=Object(m.a)(N,2),y=w[0],k=w[1],S=Object(j.g)(),C=function(e){l(e),setTimeout((function(){l({})}),5e3)},E=function(){var c=Object(L.a)(D.a.mark((function c(s){var r,i;return D.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return s.preventDefault(),c.prev=1,c.next=4,be.login({email:b,password:v});case 4:return r=c.sent,le.setToken(r.token),c.next=8,le.getCart(r.token);case 8:i=c.sent,y&&(r.cart=i,window.localStorage.setItem("loggedUser",JSON.stringify(r))),t({type:n.SETUSER,data:r}),e({type:a.SETCART,data:i}),O(""),g(""),S.push("/"),c.next=21;break;case 17:c.prev=17,c.t0=c.catch(1),console.log(c.t0),C({message:"Invalid username or password",class:"alert alert-danger"});case 21:case"end":return c.stop()}}),c,null,[[1,17]])})));return function(e){return c.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:"container signin",children:[i?Object(h.jsx)("div",{className:"row",children:Object(h.jsx)("div",{className:"col-sm-6 offset-sm-3 ".concat(i.class),role:"alert",children:Object(h.jsx)(se,{message:i.message})})}):null,Object(h.jsxs)("form",{className:"form-signin",children:[Object(h.jsx)("h1",{className:"h3 mb-3 font-weight-normal",children:"Please sign in"}),Object(h.jsx)("label",{htmlFor:"inputEmail",className:"sr-only",children:"Email address"}),Object(h.jsx)("input",{type:"email",id:"inputEmail",className:"form-control",placeholder:"Email address",required:!0,autoFocus:!0,onChange:function(e){return O(e.target.value)}}),Object(h.jsx)("label",{htmlFor:"inputPassword",className:"sr-only",children:"Password"}),Object(h.jsx)("input",{type:"password",id:"inputPassword",className:"form-control",placeholder:"Password",required:!0,onChange:function(e){return g(e.target.value)}}),Object(h.jsx)("div",{className:"checkbox mb-3",children:Object(h.jsxs)("label",{children:[Object(h.jsx)("input",{type:"checkbox",value:"remember-me",onChange:function(){k(!0)}})," Remember me"]})}),Object(h.jsx)("button",{id:"login-button",className:"btn btn-lg btn-primary btn-block",type:"submit",onClick:E,children:"Sign in"})]}),Object(h.jsx)("div",{className:"m-2",children:Object(h.jsxs)("small",{children:["Don't yet have an account ? ",Object(h.jsx)(o.b,{to:"/signup",children:"Sign up"})," here"]})})]})}),he=c(39),Oe=function(e){var t=e.component,c=e.user,n=Object(he.a)(e,["component","user"]);return c?"admin"===c.role?Object(h.jsx)(j.b,Object(S.a)(Object(S.a)({},n),{},{render:function(e){return Object(h.jsx)(t,Object(S.a)(Object(S.a)({},n),e))}})):Object(h.jsx)(j.a,{to:{pathname:"/unauthorized"}}):Object(h.jsx)(j.a,{to:{pathname:"/login"}})},xe=function(){return Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("h2",{className:"mx-auto",children:"Only administrators are authorized to come here"})})},fe=function(){var e=f(),t=e.userState,c=e.userDispatch,r=I().cartDispatch;return Object(s.useEffect)((function(){var e=window.localStorage.getItem("loggedUser");if(e){var t=JSON.parse(e);c({type:n.SETUSER,data:t}),r({type:a.SETCART,data:t.cart}),le.setToken(t.token)}}),[c,r]),Object(h.jsx)("div",{children:Object(h.jsxs)(o.a,{children:[Object(h.jsx)(A,{}),Object(h.jsxs)(j.d,{children:[Object(h.jsx)(j.b,{exact:!0,path:"/",children:Object(h.jsx)(ce,{})}),Object(h.jsx)(j.b,{path:"/deals",children:Object(h.jsx)(ne,{})}),Object(h.jsx)(j.b,{path:"/cart",children:Object(h.jsx)(oe,{})}),Object(h.jsx)(j.b,{path:"/item/:id",children:Object(h.jsx)(je,{})}),Object(h.jsx)(Oe,{path:"/admin",user:t,component:ue}),Object(h.jsx)(j.b,{path:"/thankyou",children:Object(h.jsx)(de,{})}),Object(h.jsx)(j.b,{path:"/login",children:Object(h.jsx)(me,{})}),Object(h.jsx)(j.b,{path:"/unauthorized",children:Object(h.jsx)(xe,{})})]})]})})};l.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(R,{children:Object(h.jsx)(x,{children:Object(h.jsx)(fe,{})})})}),document.getElementById("root"))}},[[86,1,2]]]);
//# sourceMappingURL=main.109a033c.chunk.js.map