(this["webpackJsonpsd-0x-project-trybewallet"]=this["webpackJsonpsd-0x-project-trybewallet"]||[]).push([[0],{33:function(e,t,a){e.exports=a(47)},42:function(e,t,a){},44:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(20),l=a.n(c),i=a(31),o=a(14),s=(a(42),a(13)),u=a(29),h=a(30),d=a(10),p=a(15),m=a.n(p),b=a(19);var v=function(e){return{type:"ADD_EXPENSES",payload:e}},f={user:{email:""}},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USER_ACTION":return Object(d.a)(Object(d.a)({},e),{},{email:t.payload});default:return e}},j=a(32),y={currencies:[],expenses:[]},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_CURRENCIES":return Object(d.a)(Object(d.a)({},e),{},{currencies:t.payload});case"ADD_EXPENSES":return Object(d.a)(Object(d.a)({},e),{},{expenses:[].concat(Object(j.a)(e.expenses),[Object(d.a)({id:e.expenses.length},t.payload)])});default:return e}},O=Object(s.combineReducers)({user:E,wallet:g}),C=Object(s.createStore)(O,Object(u.composeWithDevTools)(Object(s.applyMiddleware)(h.a))),w=a(2),k=a(17),x=a(6),S=a(7),D=a(12),N=a(9),R=a(8),T=(a(44),function(e){Object(N.a)(a,e);var t=Object(R.a)(a);function a(){var e;return Object(x.a)(this,a),(e=t.call(this)).state={email:"",password:""},e.handleChange=e.handleChange.bind(Object(D.a)(e)),e.validEmail=e.validEmail.bind(Object(D.a)(e)),e.handleClick=e.handleClick.bind(Object(D.a)(e)),e}return Object(S.a)(a,[{key:"handleChange",value:function(e){var t=e.target;this.setState(Object(k.a)({},t.name,t.value))}},{key:"validEmail",value:function(){var e=this.state,t=e.email,a=e.password;return!(t.match(/^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/)&&a.length>=6)}},{key:"handleClick",value:function(){var e=this.state.email,t=this.props,a=t.userLogin,n=t.history;a(e),n.push("/carteira")}},{key:"render",value:function(){var e=this.state,t=e.email,a=e.password;return r.a.createElement("div",null,r.a.createElement("h1",{className:"h1"},"Login"),r.a.createElement("form",{id:"form"},r.a.createElement("div",{className:"input-group mb-3"},r.a.createElement("label",{htmlFor:"email"},r.a.createElement("input",{className:"form-control",name:"email",type:"email",placeholder:"Email",value:t,"data-testid":"email-input",onChange:this.handleChange}))),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"password"},r.a.createElement("input",{className:"form-control",name:"password",type:"password",placeholder:"Senha",value:a,"data-testid":"password-input",onChange:this.handleChange}))),r.a.createElement("button",{className:"btn btn-primary",type:"submit",disabled:this.validEmail(),onClick:this.handleClick},"Entrar")))}}]),a}(r.a.Component)),A=Object(o.b)(null,(function(e){return{userLogin:function(t){return e(function(e){return{type:"USER_ACTION",payload:e}}(t))}}}))(T),_=function(e){Object(N.a)(a,e);var t=Object(R.a)(a);function a(){return Object(x.a)(this,a),t.apply(this,arguments)}return Object(S.a)(a,[{key:"render",value:function(){var e=this.props,t=e.user,a=e.expenses.reduce((function(e,t){return e+t.value*t.exchangeRates[t.currency].ask}),0);return r.a.createElement("header",null,r.a.createElement("h2",{"data-testid":"email-field"},t.email),"Despesa Total: R$",r.a.createElement("p",{"data-testid":"total-field"},a),r.a.createElement("p",{"data-testid":"header-currency-field"},"BRL"))}}]),a}(n.Component),I=Object(o.b)((function(e){return{user:e.user,expenses:e.wallet.expenses}}),null)(_),L=function(e){Object(N.a)(a,e);var t=Object(R.a)(a);function a(){return Object(x.a)(this,a),t.apply(this,arguments)}return Object(S.a)(a,[{key:"render",value:function(){var e=this.props,t=e.label,a=e.name,n=e.type,c=e.id,l=e.onChange,i=e.value;return r.a.createElement("label",{htmlFor:c},t," ",r.a.createElement("input",{id:c,type:n,value:i,onChange:l,name:a}))}}]),a}(n.Component),U=function(e){Object(N.a)(a,e);var t=Object(R.a)(a);function a(){return Object(x.a)(this,a),t.apply(this,arguments)}return Object(S.a)(a,[{key:"render",value:function(){var e=this.props,t=e.label,a=e.options,n=e.id,c=e.onChange,l=e.value;return r.a.createElement("label",{htmlFor:n},t," ",r.a.createElement("select",{id:n,value:l,onChange:c},a.map((function(e){return r.a.createElement("option",{key:e,value:e},e)}))))}}]),a}(n.Component);U.defaultProps={value:""};var F=U,M=["Dinheiro","Cart\xe3o de cr\xe9dito","Cart\xe3o de d\xe9bito"],B=["Alimenta\xe7\xe3o","Lazer","Trabalho","Transporte","Sa\xfade"],P=function(e){Object(N.a)(a,e);var t=Object(R.a)(a);function a(){var e;return Object(x.a)(this,a),(e=t.call(this)).state={value:"",description:"",currency:"",method:"",tag:""},e.handleChange=e.handleChange.bind(Object(D.a)(e)),e.handleClick=e.handleClick.bind(Object(D.a)(e)),e}return Object(S.a)(a,[{key:"componentDidMount",value:function(){(0,this.props.loadingCurrencies)()}},{key:"handleChange",value:function(e){var t=e.target;this.setState(Object(k.a)({},t.id,t.value))}},{key:"handleClick",value:function(){var e=Object(b.a)(m.a.mark((function e(t){var a,n,r,c,l,i,o,s,u;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=this.state,n=a.value,r=a.description,c=a.currency,l=a.method,i=a.tag,o=this.props.getExpense,t.preventDefault(),e.next=5,fetch("https://economia.awesomeapi.com.br/json/all");case 5:return s=e.sent,e.next=8,s.json();case 8:u=e.sent,o({value:n,description:r,currency:c,method:l,tag:i,exchangeRates:u});case 11:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props.currencies,t=this.state,a=t.value,n=t.description,c=t.currency,l=t.method,i=t.tag;return r.a.createElement("form",null,r.a.createElement(L,{label:"Valor:",name:"value",id:"value",type:"text",onChange:this.handleChange,value:a}),r.a.createElement(L,{label:"Descri\xe7\xe3o:",name:"description",id:"description",type:"text",value:n,onChange:this.handleChange}),r.a.createElement(F,{label:"Moeda:",name:"currency",id:"currency",options:e,value:c,onChange:this.handleChange}),r.a.createElement(F,{label:"M\xe9todo de pagamento:",id:"method",options:M,value:l,onChange:this.handleChange}),r.a.createElement(F,{label:"Tag:",id:"tag",options:B,value:i,onChange:this.handleChange}),r.a.createElement("button",{type:"submit",onClick:this.handleClick}," Adicionar despesa "))}}]),a}(n.Component),W=Object(o.b)((function(e){return{currencies:e.wallet.currencies}}),(function(e){return{loadingCurrencies:function(){return e(function(){var e=Object(b.a)(m.a.mark((function e(t){var a,n,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://economia.awesomeapi.com.br/json/all");case 2:return a=e.sent,e.next=5,a.json();case 5:n=e.sent,r=Object.keys(n).filter((function(e){return"USDT"!==e})),t({type:"GET_CURRENCIES",payload:r});case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},getExpense:function(t){return e(v(t))}}}))(P),$=function(e){Object(N.a)(a,e);var t=Object(R.a)(a);function a(){return Object(x.a)(this,a),t.apply(this,arguments)}return Object(S.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(I,null),r.a.createElement(W,null))}}]),a}(r.a.Component);a(45);var G=function(){return r.a.createElement("div",null,r.a.createElement(w.c,null,r.a.createElement(w.a,{exact:!0,path:"/",component:A}),r.a.createElement(w.a,{path:"/carteira",component:$})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(o.a,{store:C},r.a.createElement(i.a,{basename:"/trybewallet"},r.a.createElement(G,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[33,1,2]]]);
//# sourceMappingURL=main.81e938d2.chunk.js.map