(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,,,,,,,function(e,a,t){e.exports={body:"Affairs_body__2w29G",list:"Affairs_list__2b57a",affair:"Affairs_affair__179X1",name:"Affairs_name__3e5_o",priority:"Affairs_priority__3sWkT",del_button:"Affairs_del_button__3UwPi",filter_button:"Affairs_filter_button__BkgrO"}},function(e,a,t){e.exports={message:"Message_message__8WR15",avatar:"Message_avatar__3FT3j",block:"Message_block__1lGHI",text_block:"Message_text_block__1zlYk",name:"Message_name__Tzmp0",concave:"Message_concave__25ga0",left_concave:"Message_left_concave__3QlTT",time:"Message_time__HOFTG"}},,,function(e,a,t){e.exports={navbar_block:"Navbar_navbar_block__MEyee",navbar_button:"Navbar_navbar_button__39sjf",navbar_arrow:"Navbar_navbar_arrow__1rIdx",navbar:"Navbar_navbar__143Y2",activeLink:"Navbar_activeLink__1pNb3"}},,function(e,a,t){e.exports={pre_junior_list:"PreJunior_pre_junior_list__3LE8F",pre_junior_item:"PreJunior_pre_junior_item__2vL_t"}},function(e,a,t){e.exports={inputBlock:"Greeting_inputBlock__3Kpyz",someClass:"Greeting_someClass__uGflL",error:"Greeting_error__1uvQ8",errorText:"Greeting_errorText__1pVNf",button:"Greeting_button__24QRF"}},,,,,function(e,a,t){e.exports={superInput:"SuperInputText_superInput__3XH9u",errorInput:"SuperInputText_errorInput__3ei0N",error:"SuperInputText_error__2J82S"}},function(e,a,t){e.exports={default:"SuperButton_default__-BXUG",red:"SuperButton_red__1kaz_",stripes:"SuperButton_stripes__AEqOE"}},function(e,a,t){e.exports={checkbox:"SuperCheckbox_checkbox__Imn1x","click-wave":"SuperCheckbox_click-wave__1j_BQ",radio:"SuperCheckbox_radio__h1p-T",checkbox_block:"SuperCheckbox_checkbox_block__ASn8B"}},function(e,a,t){e.exports={background_error:"Error404_background_error__3L7zf",error:"Error404_error__20Otx",number_error:"Error404_number_error__pPt70"}},,function(e,a,t){e.exports={pre_junior_list:"Jun_pre_junior_list__3Bllz",pre_junior_item:"Jun_pre_junior_item__Roe6L"}},function(e,a,t){e.exports={select:"SuperSelect_select__3fEsa"}},function(e,a,t){e.exports={radio:"SuperRadio_radio__3l3uR",item:"SuperRadio_item__30iI-"}},,,,,,function(e,a,t){e.exports={App:"App_App__1Sc4o"}},function(e,a,t){e.exports={header:"Header_header__30_uA"}},function(e,a,t){e.exports={hw1_block:"HW1_hw1_block__28qxP"}},function(e,a,t){e.exports={blue:"HW4_blue__2RJeg",column:"HW4_column__2ZS4I"}},function(e,a,t){e.exports={span:"SuperEditableSpan_span__TqnG3"}},function(e,a,t){e.exports={hw6_block:"HW6_hw6_block__23Yvr"}},,function(e,a,t){e.exports={hw5:"HW5_hw5__3ll6r"}},,,function(e,a,t){e.exports=t(53)},,,,,function(e,a,t){},,,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(31),l=t.n(c),o=(t(47),t(32)),i=t.n(o),s=t(2),u=t(33),m=t.n(u);var _=function(){return r.a.createElement("div",{className:m.a.header},r.a.createElement("p",null,"Homeworks"))},p=t(1),v=t(8),b=t.n(v);var d=function(e){return r.a.createElement("div",{className:b.a.message},r.a.createElement("div",{className:b.a.avatar},r.a.createElement("img",{src:e.avatar,alt:""})),r.a.createElement("div",{className:b.a.block},r.a.createElement("div",{className:b.a.concave},r.a.createElement("div",{className:b.a.left_concave})),r.a.createElement("div",{className:b.a.text_block},r.a.createElement("div",{className:b.a.name},e.name),r.a.createElement("div",{className:b.a.message_text},e.message),r.a.createElement("div",{className:b.a.time},e.time))))},f=t(34),E=t.n(f);var h=function(){var e="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",a="\u0410\u0444\u0430\u043d\u0430\u0441\u0438\u0439",t="React-Redux \u0437\u043d\u0430\u0442\u044c \u0431\u0443\u0434\u0435\u0448\u044c \u043a\u0440\u0443\u0442\u043e!!!",n="02:15";return r.a.createElement("div",{className:E.a.hw1_block},r.a.createElement(d,{avatar:e,name:a,message:t,time:n}))},N=t(7),g=t.n(N);var k=function(e){return r.a.createElement("div",{className:g.a.affair},r.a.createElement("div",{className:g.a.name},e.affair.name,r.a.createElement("div",{className:g.a.priority},e.affair.priority)),r.a.createElement("div",{className:g.a.del_button},r.a.createElement("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)}},"X")))};var C=function(e){var a=e.data.map((function(a){return r.a.createElement("li",null,r.a.createElement(k,{key:a._id,affair:a,deleteAffairCallback:e.deleteAffairCallback}))}));return r.a.createElement("div",{className:g.a.body},r.a.createElement("ul",{className:g.a.list},a),r.a.createElement("div",{className:g.a.filter_button},r.a.createElement("button",{onClick:function(){e.setFilter("all")}},"All"),r.a.createElement("button",{onClick:function(){e.setFilter("high")}},"High"),r.a.createElement("button",{onClick:function(){e.setFilter("middle")}},"Middle"),r.a.createElement("button",{onClick:function(){e.setFilter("low")}},"Low")))},j=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var x=function(){var e=Object(n.useState)(j),a=Object(s.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)("all"),o=Object(s.a)(l,2),i=o[0],u=o[1],m=function(e,a){return"all"===a?e:e.filter((function(e){return e.priority===a}))}(t,i);return r.a.createElement("div",{className:g.a.main_block},r.a.createElement(C,{data:m,setFilter:u,deleteAffairCallback:function(e){return c(function(e,a){return e.filter((function(e){return e._id!==a}))}(t,e))}}))},O=t(40),S=t(14),y=t.n(S),w=function(e){var a=e.name,t=e.setNameCallback,n=e.addUser,c=e.error,l=e.totalUsers,o=y.a.error,i=y.a.someClass;return r.a.createElement("div",{className:y.a.inputBlock},r.a.createElement("span",null,"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043d\u0430\u0438\u0432\u043d\u044b\u0445: ",l),r.a.createElement("input",{value:a,onChange:t,className:c?o:i,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0432\u043e\u0435 \u0438\u043c\u044f"}),r.a.createElement("span",{className:y.a.errorText},c),r.a.createElement("button",{onClick:n,className:y.a.button},"\u0420\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u044e\u0449\u0430\u044f \u0448\u043b\u044f\u043f\u0430"))},T=function(e){var a=e.users,t=e.addUserCallback,c=Object(n.useState)(""),l=Object(s.a)(c,2),o=l[0],i=l[1],u=Object(n.useState)(""),m=Object(s.a)(u,2),_=m[0],p=m[1],v=a.length;return r.a.createElement(w,{name:o,setNameCallback:function(e){p(""),i(e.currentTarget.value)},addUser:function(){var e=o.trim();e.length?(t(o),alert("".concat(e,", \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u044e\u0449\u0430\u044f \u0448\u043b\u044f\u043f\u0430 \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u043b\u0430 \u0432\u0430\u0441 \u0432 \u0422\u043e\u043c\u0441\u043a\u043e\u0435 \u0442\u0440\u0430\u043a\u0442\u043e\u0440\u043d\u043e-\u043c\u043e\u0442\u043e\u0440\u043d\u043e\u0435 \u0443\u0447\u0438\u043b\u0438\u0449\u0435!"))):p("\u0422\u044b \u0442\u043e\u0442, \u043a\u043e\u0433\u043e \u043d\u0435\u043b\u044c\u0437\u044f \u043d\u0430\u0437\u0432\u0430\u0442\u044c?!"),i("")},error:_,totalUsers:v})},A=t(55);var B=function(){var e=Object(n.useState)([]),a=Object(s.a)(e,2),t=a[0],c=a[1];return r.a.createElement("div",null,r.a.createElement(T,{users:t,addUserCallback:function(e){var a=[{_id:Object(A.a)(),name:e}].concat(Object(O.a)(t));c(a)}}))},I=t(18),F=t(19),J=t.n(F),P=function(e){e.type;var a=e.onChange,t=e.onChangeText,n=e.onKeyPress,c=e.onEnter,l=e.error,o=e.className,i=e.spanClassName,s=Object(I.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),u="".concat(J.a.error," ").concat(i||""),m=l?"".concat(J.a.errorInput," ").concat(o):J.a.superInput;return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),"Enter"===e.key&&c&&c()},className:m},s)),l&&r.a.createElement("span",{className:u},l))},G=t(35),H=t.n(G),M=t(9),L=t(20),W=t.n(L),R=function(e){var a=e.red,t=e.className,n=Object(M.a)(e,["red","className"]),c="".concat(a?W.a.red:W.a.default," ").concat(t);return r.a.createElement("div",{className:W.a.button_container},r.a.createElement("button",Object.assign({className:c},n)))},U=t(41),z=t(21),K=t.n(z),X=function(e){var a=e.type,t=e.onChange,n=e.onChangeChecked,c=e.className,l=e.spanClassName,o=e.children,i=Object(I.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]);console.log(Object(U.a)({type:a,onChange:t,onChangeChecked:n,className:c,spanClassName:l,children:o},i));var s="".concat(K.a.checkbox," ").concat(c||"");return r.a.createElement("label",{className:K.a.checkbox_block},r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:s},i)),o&&r.a.createElement("span",{className:K.a.spanClassName},o))};var q=function(){var e=Object(n.useState)(""),a=Object(s.a)(e,2),t=a[0],c=a[1],l=t?"":"error",o=function(){l?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(t)},i=Object(n.useState)(!1),u=Object(s.a)(i,2),m=u[0],_=u[1];return r.a.createElement("div",null,r.a.createElement("div",{className:H.a.column},r.a.createElement(P,{value:t,onChangeText:c,onEnter:o,error:l}),r.a.createElement(R,{red:!1,onClick:o},"delete "),r.a.createElement(X,{checked:m,onChangeChecked:_},"some text ")))},Q=t(36),Y=t.n(Q),D=function(e){e.autoFocus;var a=e.onBlur,t=e.onEnter,c=e.spanProps,l=Object(M.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),o=Object(n.useState)(!1),i=Object(s.a)(o,2),u=i[0],m=i[1],_=c||{},p=_.children,v=_.onDoubleClick,b=_.className,d=Object(M.a)(_,["children","onDoubleClick","className"]),f="".concat(Y.a.span," ").concat(b);return r.a.createElement(r.a.Fragment,null,u?r.a.createElement(P,Object.assign({autoFocus:!0,onBlur:function(e){m(!1),a&&a(e)},onEnter:function(){m(!1),t&&t()}},l)):r.a.createElement("span",Object.assign({onDoubleClick:function(e){m(!0),v&&v(e)},className:f},d),p||l.value))};function V(e,a){var t=JSON.stringify(a);localStorage.setItem(e,t)}function Z(e,a){var t=localStorage.getItem(e);return null!==t&&(a=JSON.parse(t)),a}V("test",{x:"A",y:1});Z("test",{x:"",y:0});var $=t(37),ee=t.n($);var ae=function(){var e=Object(n.useState)(""),a=Object(s.a)(e,2),t=a[0],c=a[1];return r.a.createElement("div",{className:ee.a.hw6_block},r.a.createElement("div",null,r.a.createElement(D,{value:t,onChangeText:c,spanProps:{children:t?void 0:"enter text..."}})),r.a.createElement(R,{onClick:function(){V("editable-span-value",t)}},"save"),r.a.createElement(R,{onClick:function(){c(Z("editable-span-value",""))}},"restore"))},te=t(13),ne=t.n(te);var re=function(){return r.a.createElement("ul",{className:ne.a.pre_junior_list},r.a.createElement("li",{className:ne.a.pre_junior_item},r.a.createElement(h,null)),r.a.createElement("li",{className:ne.a.pre_junior_item},r.a.createElement(x,null)),r.a.createElement("li",{className:ne.a.pre_junior_item},r.a.createElement(B,null)),r.a.createElement("li",{className:ne.a.pre_junior_item},r.a.createElement(q,null)),r.a.createElement("li",{className:ne.a.pre_junior_item},r.a.createElement(ae,null)))},ce=t(22),le=t.n(ce);var oe=function(){return r.a.createElement("div",{className:le.a.background_error},r.a.createElement("div",{className:le.a.error},r.a.createElement("div",{className:le.a.number_error},"404"),r.a.createElement("div",null,"Page not found!"),r.a.createElement("div",null,"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014")))},ie=t(24),se=t.n(ie),ue=t(25),me=t.n(ue),_e=function(e){var a=e.options,t=e.onChange,n=e.onChangeOption,c=Object(M.a)(e,["options","onChange","onChangeOption"]),l=void 0!==a?a.map((function(e,a){return r.a.createElement("option",{className:me.a.item,key:a,value:e.name},e)})):[];return r.a.createElement("select",Object.assign({className:me.a.select,onChange:function(e){t&&t(e),void 0!==n&&n(e.currentTarget.value)}},c),l)},pe=t(26),ve=t.n(pe),be=function(e){e.type,e.name;var a=e.options,t=(e.value,e.onChange,e.onChangeOption,Object(M.a)(e,["type","name","options","value","onChange","onChangeOption"]),a?a.map((function(e,a){})):[]);return r.a.createElement("div",{className:ve.a.radio},t)},de=["Freddy Krueger","Jason Voorhees","Candyman"];var fe=function(){var e=Object(n.useState)(de[0]),a=Object(s.a)(e,2),t=a[0],c=a[1];return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(_e,{options:de,value:t,onChangeOption:c})),r.a.createElement("div",null,r.a.createElement(be,{name:"radio",options:de,value:t,onChangeOption:c})))};var Ee=function(){return r.a.createElement("div",null,r.a.createElement("ul",{className:se.a.pre_junior_list},r.a.createElement("li",{className:se.a.pre_junior_item},r.a.createElement(fe,null))))};var he=function(){return r.a.createElement("div",null)},Ne="/pre-junior",ge="/jun",ke="/jun-plus";var Ce=function(){return r.a.createElement("div",null,r.a.createElement(p.d,null,r.a.createElement(p.b,{path:"/",exact:!0,render:function(){return r.a.createElement(p.a,{to:Ne})}}),r.a.createElement(p.b,{path:Ne,render:function(){return r.a.createElement(re,null)}}),r.a.createElement(p.b,{exact:!0,path:ge,render:function(){return r.a.createElement(Ee,null)}}),r.a.createElement(p.b,{exact:!0,path:ke,render:function(){return r.a.createElement(he,null)}}),r.a.createElement(p.b,{render:function(){return r.a.createElement(oe,null)}})))},je=t(12),xe=t(11),Oe=t.n(xe);function Se(e){return r.a.createElement("div",{className:Oe.a.navbar_block},r.a.createElement("div",{className:Oe.a.navbar_button,onClick:function(a){e.setCollapsedNavbar()}},"Menu ",r.a.createElement("span",{className:Oe.a.navbar_arrow},">")),!e.collapsedNavbar&&r.a.createElement(ye,null))}function ye(){return r.a.createElement("ul",{className:Oe.a.navbar},r.a.createElement("li",null,r.a.createElement(je.b,{to:Ne,activeClassName:Oe.a.activeLink},"PreJunior")),r.a.createElement("li",null,r.a.createElement(je.b,{to:ge,activeClassName:Oe.a.activeLink},"Junior")),r.a.createElement("li",null,r.a.createElement(je.b,{to:ke,activeClassName:Oe.a.activeLink},"JuniorPlus")))}var we=t(39),Te=t.n(we);var Ae=function(){var e=Object(n.useState)(!0),a=Object(s.a)(e,2),t=a[0],c=a[1];return r.a.createElement("div",{className:Te.a.hw5},r.a.createElement(je.a,null,r.a.createElement(_,null),r.a.createElement(Se,{collapsedNavbar:t,setCollapsedNavbar:function(){c(!t)}}),r.a.createElement(Ce,null)))};var Be=function(){return r.a.createElement("div",{className:i.a.App},r.a.createElement(Ae,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Be,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[42,1,2]]]);
//# sourceMappingURL=main.d091a90e.chunk.js.map