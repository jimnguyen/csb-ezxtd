(this["webpackJsonpcalculator-app"]=this["webpackJsonpcalculator-app"]||[]).push([[0],{26:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return App}));var _tmp_deploys_ezxtd_ckqs6yklo03qp0us87vnn5ocy_source_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(32),_material_ui_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(22),_material_ui_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(46),_material_ui_core__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(48),_material_ui_core__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(23),_material_ui_core__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(13),_material_ui_core__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(3),react__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__),_styles_css__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(41),_styles_css__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_8__),theme=Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.a)({palette:{primary:{main:"#1976d2"},secondary:{main:"#e3f2fd"}}}),useStyles=Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.a)({button:{display:"flex",alignItems:"center",marginLeft:"auto",marginRight:"auto",width:"100%",padding:"2px 2px 2px 2px",color:"black"},output:{border:"1px solid gray",boxShadow:"2px 2px lightgray",borderRadius:"10px",backgroundColor:"lightgray",display:"flex",width:"30%",justifyContent:"center",marginLeft:"auto",marginTop:"20px",marginRight:"auto",padding:"20px"}});function App(){var classes=useStyles();Object(react__WEBPACK_IMPORTED_MODULE_7__.useEffect)((function(){setCalc("")}),[]);var _useState=Object(react__WEBPACK_IMPORTED_MODULE_7__.useState)(""),_useState2=Object(_tmp_deploys_ezxtd_ckqs6yklo03qp0us87vnn5ocy_source_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState,2),calc=_useState2[0],setCalc=_useState2[1],handleCalc=function handleCalc(){var answer="";try{answer=eval(calc)}catch(error){alert("Incorrect use of calculator"),console.log("Incorrect use of calculator")}setCalc(String(answer))},handleClear=function(){setCalc("")},handleBackspace=function(){setCalc(calc.slice(0,calc.length-1))};return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.a,{theme:theme},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div",{className:"App"},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.a,{variant:"h2"},"Calculator"),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.a,{container:!0,spacing:1,className:classes.button},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.a,{item:!0,xs:12},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.a,{style:{margin:"2px",backgroundColor:"#cecece"},variant:"contained",onClick:function(){return setCalc(calc+7)}},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("strong",null,"7")),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.a,{style:{margin:"2px",backgroundColor:"#cecece"},variant:"contained",onClick:function(){return setCalc(calc+8)}},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("strong",null,"8")),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.a,{style:{margin:"2px",backgroundColor:"#cecece"},variant:"contained",onClick:function(){return setCalc(calc+9)}},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("strong",null,"9")),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.a,{style:{margin:"2px"},variant:"contained",color:"secondary",onClick:function(){return setCalc(calc+"-")}},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("strong",null,"-"))),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.a,{item:!0,xs:12},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.a,{style:{margin:"2px",backgroundColor:"#cecece"},variant:"contained",onClick:function(){return setCalc(calc+4)}},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("strong",null,"4")),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.a,{style:{margin:"2px",backgroundColor:"#cecece"},variant:"contained",onClick:function(){return setCalc(calc+5)}},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("strong",null,"5")),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.a,{style:{margin:"2px",backgroundColor:"#cecece"},variant:"contained",onClick:function(){return setCalc(calc+6)}},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("strong",null,"6")),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.a,{style:{margin:"2px"},variant:"contained",color:"secondary",onClick:function(){return setCalc(calc+"+")}},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("strong",null,"+"))),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.a,{item:!0,xs:12},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.a,{style:{margin:"2px",backgroundColor:"#cecece"},variant:"contained",onClick:function(){return setCalc(calc+1)}},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("strong",null,"1")),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.a,{style:{margin:"2px",backgroundColor:"#cecece"},variant:"contained",onClick:function(){return setCalc(calc+2)}},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("strong",null,"2")),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.a,{style:{margin:"2px",backgroundColor:"#cecece"},variant:"contained",onClick:function(){return setCalc(calc+3)}},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("strong",null,"3")),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.a,{style:{margin:"2px"},variant:"contained",color:"secondary",onClick:function(){return setCalc(calc+"/")}},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("strong",null,"/"))),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.a,{item:!0,xs:12},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.a,{style:{margin:"2px",backgroundColor:"#cecece"},variant:"contained"},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("strong",null,".")),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.a,{style:{margin:"2px",backgroundColor:"#cecece"},variant:"contained",onClick:function(){return setCalc(calc+0)}},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("strong",null,"0")),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.a,{style:{margin:"2px"},variant:"contained",color:"primary",onClick:function(){return handleCalc()}},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("strong",null,"=")),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.a,{style:{margin:"2px"},variant:"contained",color:"secondary",onClick:function(){return setCalc(calc+"*")}},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("strong",null,"*"))),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.a,{item:!0,xs:12},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.a,{variant:"contained",style:{margin:"2px",backgroundColor:"#cecece"},onClick:handleBackspace},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("strong",null,"BACKSPACE")),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.a,{variant:"contained",style:{margin:"2px",backgroundColor:"#cecece"},onClick:handleClear},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("strong",null,"CLEAR")))),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("hr",{style:{marginTop:"50px",marginBottom:"50px",width:"35%"}}),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.a,{variant:"h5",style:{textDecoration:"underline"}},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("strong",null,"OUTPUT")),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.a,{variant:"h6",className:classes.output},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("strong",null,calc))))}},35:function(_,e,a){_.exports=a(36)},36:function(_,e,a){"use strict";a.r(e);var t=a(0),r=a.n(t),c=a(10),l=a.n(c),E=a(26),n=document.getElementById("root");l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E.a,null)),n)},41:function(_,e,a){}},[[35,1,2]]]);
//# sourceMappingURL=main.9c297d03.chunk.js.map