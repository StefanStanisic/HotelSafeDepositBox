(this["webpackJsonphotel-safe-deposit-box"]=this["webpackJsonphotel-safe-deposit-box"]||[]).push([[0],{18:function(e,t,s){},23:function(e,t,s){},24:function(e,t,s){},25:function(e,t,s){},26:function(e,t,s){},28:function(e,t,s){},29:function(e,t,s){"use strict";s.r(t);var a=s(0),r=s(5),c=s.n(r),n=(s(18),s(3)),o=s(12),d=s(2),i={SCREEN_ACTIVE:"SCREEN_ACTIVE",SCREEN_INACTIVE:"SCREEN_INACTIVE",SET_SCREEN_MESSAGE:"SET_SCREEN_MESSAGE",SET_PASSWORD:"SET_PASSWORD",SAVE_PASSWORD:"SAVE_PASSWORD",SAFE_LOCK:"SAFE_LOCK",SERVICE_MODE:"SERVICE_MODE",READ_SCREEN_MESSAGE:"READ_SCREEN_MESSAGE"},p={screenStatusMessage:"",screenActive:!1,safeLocked:!1,password:"",savedPassword:"",readScreenMessage:!1,serviceMode:!1},u=Object(o.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i.SET_SCREEN_MESSAGE:return Object(d.a)(Object(d.a)({},e),{},{screenStatusMessage:t.payload});case i.SAVE_PASSWORD:return Object(d.a)(Object(d.a)({},e),{},{savedPassword:t.payload});case i.SET_PASSWORD:return Object(d.a)(Object(d.a)({},e),{},{password:t.payload});case i.SCREEN_ACTIVE:return Object(d.a)(Object(d.a)({},e),{},{screenActive:t.payload});case i.SAFE_LOCK:return Object(d.a)(Object(d.a)({},e),{},{safeLocked:t.payload});case i.SERVICE_MODE:return Object(d.a)(Object(d.a)({},e),{},{serviceMode:t.payload});case i.READ_SCREEN_MESSAGE:return Object(d.a)(Object(d.a)({},e),{},{readScreenMessage:t.payload});default:return e}})),l=(s(23),s(24),s(9)),S=s(10),E=s(4),h=s(13),f=s(11),v=(s(25),function(e){return{type:i.SET_SCREEN_MESSAGE,payload:e}}),b=function(e){return{type:i.SCREEN_ACTIVE,payload:e}},O=function(e){return{type:i.SERVICE_MODE,payload:e}},j=function(e){return{type:i.SAFE_LOCK,payload:e}},A=function(e){return{type:i.SET_PASSWORD,payload:e}},_=function(e){return{type:i.READ_SCREEN_MESSAGE,payload:e}},y=(s(26),s(1)),R=Object(n.b)((function(e){return{password:e.password,serviceMode:e.serviceMode}}))((function(e){return Object(y.jsx)("button",{type:"text",style:{order:e.data.order},className:"safe-key",onClick:function(t){return function(t){var s=e.password,a=e.serviceMode,r="".concat(s).concat(t.target.innerHTML);r=a?r:r.substring(r.length-6,r.length),e.debouncedHandler(),e.debouncedHandlerIdleScreen(),e.dispatch(b(!0)),e.dispatch(A(r))}(t)},children:e.data.val})})),M="https://9w4qucosgf.execute-api.eu-central-1.amazonaws.com/default/CR-JS_team_M02a?code=456R987L0123",C=4815162342;function m(e,t,s){var a;return function(){var r=this,c=arguments,n=function(){a=null,s||e.apply(r,c)},o=s&&!a;clearTimeout(a),a=setTimeout(n,t),o&&e.apply(r,c)}}console.log;var g=function(e){Object(h.a)(s,e);var t=Object(f.a)(s);function s(){var e;Object(l.a)(this,s);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).validateCode=function(t){fetch("".concat(M).concat(t)).then((function(t){t.data===C?(e.props.dispatch(v("Unlocking")),setTimeout((function(){e.props.dispatch(v("Ready")),setTimeout((function(){e.props.dispatch(_(!1))}),1200),e.props.dispatch(j(!1)),e.props.dispatch(O(!1))}),1200)):(e.props.dispatch(v("Error")),setTimeout((function(){e.props.dispatch(_(!1))}),1200))}))},e.debouncedHandler=m(e.handlePassword.bind(Object(E.a)(e)),1200),e.debouncedHandlerIdleScreen=m(e.handleIdleScreen.bind(Object(E.a)(e)),5e3),e.renderKeys=function(){return[{val:"0",order:"5"},{val:"1",order:"3"},{val:"2",order:"3"},{val:"3",order:"3"},{val:"4",order:"2"},{val:"5",order:"2"},{val:"6",order:"2"},{val:"7",order:"1"},{val:"8",order:"1"},{val:"9",order:"1"},{val:"*",order:"4"},{val:"L",order:"6"}].map((function(t){return Object(y.jsx)(R,{debouncedHandler:e.debouncedHandler,debouncedHandlerIdleScreen:e.debouncedHandlerIdleScreen,data:t},t.val)}))},e}return Object(S.a)(s,[{key:"handlePassword",value:function(){var e=this,t=this.props,s=t.savedPassword,a=t.safeLocked,r=t.password,c=t.serviceMode;if(this.props.dispatch(b(!0)),this.props.dispatch(_(!0)),c)return this.validateCode(r),void this.props.dispatch(A(""));a?"000000"===r&&"000000"!==s?(this.props.dispatch(v("Service")),this.props.dispatch(O(!0)),setTimeout((function(){e.props.dispatch(_(!1))}),1200)):s===r?(this.props.dispatch(v("Unlocking")),setTimeout((function(){e.props.dispatch(v("Ready")),setTimeout((function(){e.props.dispatch(_(!1))}),1200),e.props.dispatch(j(!1))}),1200)):(this.props.dispatch(v("Error")),setTimeout((function(){e.props.dispatch(_(!1))}),1200)):6===r.length?(this.props.dispatch(function(e){return{type:i.SAVE_PASSWORD,payload:e}}(r)),this.props.dispatch(v("Locking")),setTimeout((function(){e.props.dispatch(j(!0)),e.props.dispatch(v("Ready")),setTimeout((function(){e.props.dispatch(_(!1))}),1200)}),1200)):(this.props.dispatch(v("Error")),setTimeout((function(){e.props.dispatch(_(!1))}),1200)),this.props.dispatch(A(""))}},{key:"handleIdleScreen",value:function(){this.props.dispatch(b(!1))}},{key:"render",value:function(){return Object(y.jsx)("div",{className:"keyboard-container",children:this.renderKeys()})}}]),s}(a.Component),T=Object(n.b)((function(e){return{password:e.password,screenStatusMessage:e.screenStatusMessage,savedPassword:e.savedPassword,safeLocked:e.safeLocked,serviceMode:e.serviceMode}}))(g),N=(s(28),Object(n.b)((function(e){return{password:e.password,screenStatusMessage:e.screenStatusMessage,screenActive:e.screenActive,safeLocked:e.safeLocked,readScreenMessage:e.readScreenMessage}}))((function(e){return Object(y.jsxs)("div",{className:e.screenActive?"screen-container active":"screen-container inactive",children:[Object(y.jsx)("div",{className:"small-screen",children:e.safeLocked?"Locked":"Unlocked"}),Object(y.jsx)("div",{className:"big-screen",children:e.readScreenMessage?e.screenStatusMessage:e.password})]})}))),w=function(){return Object(y.jsxs)("div",{className:"safe-container",children:[Object(y.jsx)(N,{}),Object(y.jsx)(T,{}),Object(y.jsxs)("div",{className:"safe-number",children:["S/N: ",C]})]})};var k=function(){return Object(y.jsx)(n.a,{store:u,children:Object(y.jsx)("div",{className:"App",children:Object(y.jsx)(w,{})})})};c.a.render(Object(y.jsx)(k,{}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.46a522c6.chunk.js.map