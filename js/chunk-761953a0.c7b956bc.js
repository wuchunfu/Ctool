(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-761953a0"],{1089:function(t,n,r){"use strict";r.r(n);var e=function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",[r("Input",{attrs:{rows:7,type:"textarea",placeholder:"内容(标准时间(YYYY-MM-DD HH:mm:ss[.SSS])/时间戳(秒/毫秒))"},model:{value:t.current.input,callback:function(n){t.$set(t.current,"input",n)},expression:"current.input"}}),r("option-block",[r("FormItem",[r("Button",{attrs:{type:"primary"},on:{click:function(n){return t.handle()}}},[t._v("转换")]),r("Dropdown",{staticStyle:{"margin-left":"10px"},on:{"on-click":t.currentTime}},[r("Button",{attrs:{type:"primary"}},[t._v("\n            当前时间\n            "),r("Icon",{attrs:{type:"ios-arrow-down"}})],1),r("DropdownMenu",{attrs:{slot:"list"},slot:"list"},[r("DropdownItem",{attrs:{name:"normalSecond"}},[t._v("标准时间(秒)")]),r("DropdownItem",{attrs:{name:"normalMillisecond"}},[t._v("标准时间(毫秒)")]),r("DropdownItem",{attrs:{name:"unixSecond"}},[t._v("UNIX时间戳(秒)")]),r("DropdownItem",{attrs:{name:"unixMillisecond"}},[t._v("UNIX时间戳(毫秒)")])],1)],1)],1)],1),r("Input",{attrs:{rows:7,type:"textarea",placeholder:"结果"},model:{value:t.current.output,callback:function(n){t.$set(t.current,"output",n)},expression:"current.output"}})],1)},o=[],c=(r("3b2b"),r("c1df")),i=r.n(c),u={normalSecond:1,normalMillisecond:2,unixSecond:3,unixMillisecond:4,error:0},a={created:function(){this.current=Object.assign(this.current,this.$getToolData("input"))},methods:{handle:function(){var t=function(t){return new RegExp(/^\d+-\d+-\d+ \d+:\d+:\d+$/).test(t)?u.normalSecond:new RegExp(/^\d+-\d+-\d+ \d+:\d+:\d+\.\d+$/).test(t)?u.normalMillisecond:new RegExp(/^\d{10}$/).test(t)?u.unixSecond:new RegExp(/^\d{13}$/).test(t)?u.unixMillisecond:u.error}(this.current.input.trim());if(t===u.error)return this.$Message.error("输入时间格式错误");switch(t){case u.normalSecond:this.current.output=i()(this.current.input).format("X");break;case u.normalMillisecond:this.current.output=i()(this.current.input).format("x");break;case u.unixSecond:this.current.output=i()(1e3*parseInt(this.current.input)).format("YYYY-MM-DD HH:mm:ss");break;case u.unixMillisecond:this.current.output=i()(parseInt(this.current.input)).format("YYYY-MM-DD HH:mm:ss.SSS");break}this.$clipboardCopy(this.current.output),this.$saveToolData(this.current)},currentTime:function(t){this.current.input="normalSecond"===t?i()().format("YYYY-MM-DD HH:mm:ss"):"normalMillisecond"===t?i()().format("YYYY-MM-DD HH:mm:ss.SSS"):"unixSecond"===t?i()().format("X"):i()().format("x"),this.handle()}},data:function(){return{current:{input:"",output:""}}}},s=a,p=r("2877"),l=Object(p["a"])(s,e,o,!1,null,null,null);n["default"]=l.exports},"3b2b":function(t,n,r){var e=r("7726"),o=r("5dbc"),c=r("86cc").f,i=r("9093").f,u=r("aae3"),a=r("0bfb"),s=e.RegExp,p=s,l=s.prototype,d=/a/g,f=/a/g,m=new s(d)!==d;if(r("9e1e")&&(!m||r("79e5")((function(){return f[r("2b4c")("match")]=!1,s(d)!=d||s(f)==f||"/a/i"!=s(d,"i")})))){s=function(t,n){var r=this instanceof s,e=u(t),c=void 0===n;return!r&&e&&t.constructor===s&&c?t:o(m?new p(e&&!c?t.source:t,n):p((e=t instanceof s)?t.source:t,e&&c?a.call(t):n),r?this:l,s)};for(var h=function(t){t in s||c(s,t,{configurable:!0,get:function(){return p[t]},set:function(n){p[t]=n}})},b=i(p),x=0;b.length>x;)h(b[x++]);l.constructor=s,s.prototype=l,r("2aba")(e,"RegExp",s)}r("7a56")("RegExp")},"5dbc":function(t,n,r){var e=r("d3f4"),o=r("8b97").set;t.exports=function(t,n,r){var c,i=n.constructor;return i!==r&&"function"==typeof i&&(c=i.prototype)!==r.prototype&&e(c)&&o&&o(t,c),t}},"8b97":function(t,n,r){var e=r("d3f4"),o=r("cb7c"),c=function(t,n){if(o(t),!e(n)&&null!==n)throw TypeError(n+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,n,e){try{e=r("9b43")(Function.call,r("11e9").f(Object.prototype,"__proto__").set,2),e(t,[]),n=!(t instanceof Array)}catch(o){n=!0}return function(t,r){return c(t,r),n?t.__proto__=r:e(t,r),t}}({},!1):void 0),check:c}}}]);