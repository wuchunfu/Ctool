(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e1327d70"],{"3b2b":function(_,t,n){var e=n("7726"),r=n("5dbc"),x=n("86cc").f,i=n("9093").f,a=n("aae3"),o=n("0bfb"),u=e.RegExp,c=u,s=u.prototype,l=/a/g,m=/a/g,p=new u(l)!==l;if(n("9e1e")&&(!p||n("79e5")((function(){return m[n("2b4c")("match")]=!1,u(l)!=l||u(m)==m||"/a/i"!=u(l,"i")})))){u=function(_,t){var n=this instanceof u,e=a(_),x=void 0===t;return!n&&e&&_.constructor===u&&x?_:r(p?new c(e&&!x?_.source:_,t):c((e=_ instanceof u)?_.source:_,e&&x?o.call(_):t),n?this:s,u)};for(var h=function(_){_ in u||x(u,_,{configurable:!0,get:function(){return c[_]},set:function(t){c[_]=t}})},f=i(c),g=0;f.length>g;)h(f[g++]);s.constructor=u,u.prototype=s,n("2aba")(e,"RegExp",u)}n("7a56")("RegExp")},4917:function(_,t,n){"use strict";var e=n("cb7c"),r=n("9def"),x=n("0390"),i=n("5f1b");n("214f")("match",1,(function(_,t,n,a){return[function(n){var e=_(this),r=void 0==n?void 0:n[t];return void 0!==r?r.call(n,e):new RegExp(n)[t](String(e))},function(_){var t=a(n,_,this);if(t.done)return t.value;var o=e(_),u=String(this);if(!o.global)return i(o,u);var c=o.unicode;o.lastIndex=0;var s,l=[],m=0;while(null!==(s=i(o,u))){var p=String(s[0]);l[m]=p,""===p&&(o.lastIndex=x(u,r(o.lastIndex),c)),m++}return 0===m?null:l}]}))},"5dbc":function(_,t,n){var e=n("d3f4"),r=n("8b97").set;_.exports=function(_,t,n){var x,i=t.constructor;return i!==n&&"function"==typeof i&&(x=i.prototype)!==n.prototype&&e(x)&&r&&r(_,x),_}},"8b97":function(_,t,n){var e=n("d3f4"),r=n("cb7c"),x=function(_,t){if(r(_),!e(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};_.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(_,t,e){try{e=n("9b43")(Function.call,n("11e9").f(Object.prototype,"__proto__").set,2),e(_,[]),t=!(_ instanceof Array)}catch(r){t=!0}return function(_,n){return x(_,n),t?_.__proto__=n:e(_,n),_}}({},!1):void 0),check:x}},b880:function(_,t,n){"use strict";n.r(t);var e=function(){var _=this,t=_.$createElement,n=_._self._c||t;return n("div",[n("option-block",{staticStyle:{"text-align":"center"}},[n("FormItem",[n("ButtonGroup",_._l(_.unitLists,(function(t){return n("Button",{key:t.key,staticStyle:{padding:"5px 10px 6px"},attrs:{type:_.current.type===t.key?"info":"primary"},on:{click:function(n){return _.handle(t.key)}}},[_._v(_._s(t.name)+"\n        ")])})),1)],1)],1),n("option-block",{staticStyle:{"text-align":"center"}},[n("FormItem",[n("Input",{attrs:{type:"number"},model:{value:_.current.input,callback:function(t){_.$set(_.current,"input",t)},expression:"current.input"}})],1),n("FormItem",[n("Select",{staticStyle:{width:"200px"},model:{value:_.current.from,callback:function(t){_.$set(_.current,"from",t)},expression:"current.from"}},[""!==_.unitGroup[0].name?_._l(_.unitGroup,(function(t,e){return n("OptionGroup",{key:e,attrs:{label:t.name}},_._l(t.list,(function(t,e){return n("Option",{key:e,attrs:{value:t}},[_._v(_._s(_.unitFormat(t)))])})),1)})):_._l(_.unitGroup[0].list,(function(t,e){return n("Option",{key:e,attrs:{value:t}},[_._v(_._s(_.unitFormat(t)))])}))],2)],1),n("FormItem",[n("Button",{attrs:{icon:"md-code-working"},on:{click:function(t){return _.exchange()}}})],1),n("FormItem",[n("Select",{staticStyle:{width:"200px"},model:{value:_.current.to,callback:function(t){_.$set(_.current,"to",t)},expression:"current.to"}},[n("Option",{attrs:{value:"all"}},[_._v("全部")]),""!==_.unitGroup[0].name?_._l(_.unitGroup,(function(t,e){return n("OptionGroup",{key:e,attrs:{label:t.name}},_._l(t.list,(function(t,e){return n("Option",{key:e,attrs:{value:t}},[_._v(_._s(_.unitFormat(t)))])})),1)})):_._l(_.unitGroup[0].list,(function(t,e){return n("Option",{key:e,attrs:{value:t}},[_._v("\n            "+_._s(_.unitFormat(t))+"\n          ")])}))],2)],1)],1),_.isShowResult?n("div",{staticStyle:{padding:"0 30px"}},["all"!==_.current.to&&_.assignResult?[n("div",{staticStyle:{"text-align":"center","margin-top":"30px","font-size":"18px","font-weight":"bold"}},[n("span",{staticStyle:{color:"red"}},[_._v(_._s(_.current.input))]),_._v(" "+_._s(_.unitFormat(_.current.from))+" = "),n("span",{staticStyle:{color:"red"}},[_._v(_._s(_.assignResult.num))]),_._v("\n        "+_._s(_.unitFormat(_.current.to))+"\n      ")])]:_._e(),"all"===_.current.to?n("CellGroup",[n("Row",{attrs:{gutter:16}},_._l(_.result,(function(t,e){return n("Col",{key:e,attrs:{span:"12"}},[n("Cell",{attrs:{title:t.num,extra:_.unitFormat(t.unit)}})],1)})),1)],1):_._e()],2):_._e()],1)},r=[],x=(n("28a5"),n("ac6a"),n("3b2b"),n("a481"),n("4917"),14),i=7,a=4,o={angle:{calc:{"圆周":"(x*2.777778)/1000_圆周","直角":"(x*11.111111)/1000_直角","百分度":"(x*1.111111)_百分度_(gon)","度":"(x*1)_度_(°)","分":"(x*60)_分_( ′)","秒":"(x*3600)_秒_(')","弧度":"(x*17.453293)/1000_弧度_(rad)","毫弧度":"(x*17.453293)_毫弧度_(mrad)"},init:{"圆周":"(x*360)_度","直角":"(x*90)_度","百分度":"(x*900)/1000_度","度":"(x*1)_度","分":"(x*16.6666667)/1000_度","秒":"(x*0.2777778)/1000_度","弧度":"(x*57.295780)_度","毫弧度":"(x*57.295780)/1000_度"},iu:"角度(°)",group:[{name:"角度制",list:["圆周","直角","百分度_(gon)","度_(°)","分_( ′)","秒_(')"]},{name:"弧度制",list:["弧度_(rad)","毫弧度_(mrad)"]}]},area:{calc:{"平方千米":"(x*1)/1000000_平方千米_(km²)","公顷":"(x*1)/10000_公顷_(ha)","公亩":"(x*1)/100_公亩_(are)","平方米":"(x*1)/1_平方米_(㎡)","平方分米":"(x*1)/0.01_平方分米_(dm²)","平方厘米":"(x*1)/0.0001_平方厘米_(cm²)","平方毫米":"(x*1)/0.000001_平方毫米_(mm²)","英亩":"(x*1)/(Math.pow(0.3048,2)*Math.pow(16.5,2)*160)_英亩_(acre)","平方英里":"(x*1)/Math.pow((0.3048*3*1760),2)_平方英里_(sq.mi)","平方码":"(x*1)/(Math.pow(0.3048,2)*9)_平方码_(sq.yd)","平方英尺":"(x*1)/Math.pow(0.3048,2)_平方英尺_(sq.ft)","平方英寸":"(x*1)/(Math.pow(0.3048,2)/144)_平方英寸_(sq.in)","平方竿":"(x*1)/(Math.pow(0.3048,2)*Math.pow(16.5,2))_平方竿_(sq.rd)","顷":"(x*1)/(100/0.0015)_顷","亩":"(x*1)/(1/0.0015)_亩","分":"(x*1)/(1/0.015)_分","平方尺":"(x*1)/(1/9)_平方尺","平方寸":"(x*1)/(0.01/9)_平方寸"},init:{"平方千米":"(x*1000000)/1_平方米","公顷":"(x*10000)/1_平方米","公亩":"(x*100)/1_平方米","平方米":"(x*1)/1_平方米","平方分米":"(x*0.01)/1_平方米","平方厘米":"(x*0.0001)/1_平方米","平方毫米":"(x*0.000001)/1_平方米","英亩":"(x*(Math.pow(0.3048,2)*Math.pow(16.5,2)*160))/1_平方米","平方英里":"(x*Math.pow((0.3048*3*1760),2))/1_平方米","平方码":"(x*(Math.pow(0.3048,2)*9))/1_平方米","平方英尺":"(x*(Math.pow(0.3048,2)))/1_平方米","平方英寸":"(x*(Math.pow(0.3048,2)/144))/1_平方米","平方竿":"(x*(Math.pow(0.3048,2)*Math.pow(16.5,2)))/1_平方米","顷":"(x*(100/0.0015))/1_平方米","亩":"(x*(1/0.0015))/1_平方米","分":"(x*(1/0.015))/1_平方米","平方尺":"(x*(1/9))/1_平方米","平方寸":"(x*(0.01/9))/1_平方米"},iu:"平方米(㎡)",group:[{name:"公制",list:["平方千米_(km²)","公顷_(ha)","公亩_(are)","平方米_(㎡)","平方分米_(dm²)","平方厘米_(cm²)","平方毫米_(mm²)"]},{name:"英制",list:["英亩_(acre)","平方英里_(sq.mi)","平方码_(sq.yd)","平方英尺_(sq.ft)","平方英寸_(sq.in)","平方竿_(sq.rd)"]},{name:"市制",list:["顷","亩","分","平方尺","平方寸"]}]},byte:{calc:{"比特":"(x*8)_比特_(bit)","字节":"(x*1)_字节_(b)","千字节":"(x*1)/(Math.pow(2,10))_千字节_(kb)","兆字节":"(x*1)/(Math.pow(2,20))_兆字节_(mb)","千兆字节":"(x*1)/(Math.pow(2,30))_千兆字节_(gb)","太字节":"(x*1)/(Math.pow(2,40))_太字节_(tb)","拍字节":"(x*1)/(Math.pow(2,50))_拍字节_(pb)","艾字节":"(x*1)/(Math.pow(2,60))_艾字节_(eb)"},init:{"比特":"(x*1)/8_字节","字节":"(x*1)_字节","千字节":"(x*1024)_字节","兆字节":"(x*Math.pow(2,20))_字节","千兆字节":"(x*Math.pow(2,30))_字节","太字节":"(x*Math.pow(2,40))_字节","拍字节":"(x*Math.pow(2,50))_字节","艾字节":"(x*Math.pow(2,60))_字节"},iu:"字节(b)",group:[{name:"",list:["比特_(bit)","字节_(b)","千字节_(kb)","兆字节_(mb)","千兆字节_(gb)","太字节_(tb)","拍字节_(pb)","艾字节_(eb)"]}]},density:{calc:{"千克/立方厘米":"(x*1)/(Math.pow(10,6))_千克/立方厘米_(kg/cm³)","千克/立方分米":"(x*1)/1000_千克/立方分米_(kg/dm³)","千克/立方米":"(x*1)_千克/立方米_(kg/m³)","克/立方厘米":"(x*1)/1000_克/立方厘米_(g/cm³)","克/立方分米":"(x*1)_克/立方分米_(g/dm³)","克/立方米":"(x*1000)_克/立方米_(g/m³)"},init:{"千克/立方厘米":"(x*1000000)_千克/立方米","千克/立方分米":"(x*1000)_千克/立方米","千克/立方米":"(x*1)_千克/立方米","克/立方厘米":"(x*1000)_千克/立方米","克/立方分米":"(x*1)_千克/立方米","克/立方米":"(x*1)/1000_千克/立方米"},iu:"千克/立方米(kg/m³)",group:[{name:"",list:["千克/立方厘米_(kg/cm³)","千克/立方分米_(kg/dm³)","千克/立方米_(kg/m³)","克/立方厘米_(g/cm³)","克/立方分米_(g/dm³)","克/立方米_(g/m³)"]}]},length:{calc:{"千米":"(x*1)/1000_千米_(km)","米":"(x*1)/1_米_(m)","分米":"(x*1)/0.1_分米_(dm)","厘米":"(x*1)/0.01_厘米_(cm)","毫米":"(x*1)/0.001_毫米_(mm)","微米":"(x*1)/0.000001_微米_(um)","纳米":"(x*1)/0.000000001_纳米_(nm)","皮米":"(x*1)/0.000000000001_皮米_(pm)","光年":"(x*1)/9460730472580800_光年_(ly)","天文单位":"(x*1)/149597870700_天文单位_(AU)","英寸":"(x*1)/(0.3048/12)_英寸_(in)","英尺":"(x*1)/0.3048_英尺_(ft)","码":"(x*1)/(0.3048*3)_码_(yd)","英里":"(x*1)/(0.3048*3*1760)_英里_(mi)","海里":"(x*1)/1852_海里_(nmi)","英寻":"(x*1)/1.8288_英寻_(fm)","弗隆":"(x*1)/201.168_弗隆_(fur)","里":"(x*1)/500_里","丈":"(x*1)/(10/3)_丈","尺":"(x*1)/(1/3)_尺","寸":"(x*1)/(0.1/3)_寸","分":"(x*1)/(0.01/3)_分","厘":"(x*1)/(0.001/3)_厘","毫":"(x*1)/(0.0001/3)_毫"},init:{"千米":"(x*1000)/1_米","米":"(x*1)/1_米","分米":"(x*0.1)/1_米","厘米":"(x*0.01)/1_米","毫米":"(x*0.001)/1_米","微米":"(x*0.000001)/1_米","纳米":"(x*0.000000001)/1_米","皮米":"(x*0.000000000001)/1_米","光年":"(x*9460730472580800)/1_米","天文单位":"(x*149600000000)/1_米","英寸":"(x*(0.3048/12))/1_米","英尺":"(x*0.3048)/1_米","码":"(x*(0.3048*3))/1_米","英里":"(x*(0.3048*3*1760))/1_米","海里":"(x*1852)/1_米","英寻":"(x*1.8288)/1_米","弗隆":"(x*201.168)/1_米","里":"(x*500)/1_米","丈":"(x*(10/3))/1_米","尺":"(x*(1/3))/1_米","寸":"(x*(0.1/3))/1_米","分":"(x*(0.01/3))/1_米","厘":"(x*(0.001/3))/1_米","毫":"(x*(0.0001/3))/1_米"},iu:"米(m)",group:[{name:"公制",list:["千米_(km)","米_(m)","分米_(dm)","厘米_(cm)","毫米_(mm)","微米_(um)","纳米_(nm)","皮米_(pm)","光年_(ly)","天文单位_(AU)"]},{name:"英制",list:["英寸_(in)","英尺_(ft)","码_(yd)","英里_(mi)","海里_(nmi)","英寻_(fm)","弗隆_(fur)"]},{name:"市制",list:["里","丈","尺","寸","分","厘","毫"]}]},power:{calc:{"瓦":"(x*1)/1_瓦_(W)","千瓦":"(x*1)/1000_千瓦_(kW)","英制马力":"(x*1)/745.699872_英制马力_(hp)","米制马力":"(x*1)/(9.80665*75)_米制马力_(ps)","公斤·米/秒":"(x*1)/9.80665_公斤·米/秒_(kg·m/s)","千卡/秒":"(x*1)/4184.1004_千卡/秒_(kcal/s)","英热单位/秒":"(x*1)/1055.05585_英热单位/秒_(Btu/s)","英尺·磅/秒":"(x*1)/(745.699872/550)_英尺·磅/秒_(ft·lb/s)","焦耳/秒":"(x*1)/1_焦耳/秒_(J/s)","牛顿·米/秒":"(x*1)/1_牛顿·米/秒_(N·m/s)"},init:{"瓦":"(x*1)/1_瓦","千瓦":"(x*1000)/1_瓦","英制马力":"(x*745.699872)/1_瓦","米制马力":"(x*(9.80665*75))/1_瓦","公斤·米/秒":"(x*9.80665)/1_瓦","千卡/秒":"(x*4184.1004)/1_瓦","英热单位/秒":"(x*1055.05585)/1_瓦","英尺·磅/秒":"(x*(745.699872/550))/1_瓦","焦耳/秒":"(x*1)/1_瓦","牛顿·米/秒":"(x*1)/1_瓦"},iu:"瓦(W)",group:[{name:"",list:["瓦_(W)","千瓦_(kW)","英制马力_(hp)","米制马力_(ps)","公斤·米/秒_(kg·m/s)","千卡/秒_(kcal/s)","英热单位/秒_(Btu/s)","英尺·磅/秒_(ft·lb/s)","焦耳/秒_(J/s)","牛顿·米/秒_(N·m/s)"]}]},pressure:{calc:{"帕斯卡":"(x*1)/1_帕斯卡_(Pa)","千帕":"(x*1)/1000_千帕_(kpa)","百帕":"(x*1)/100_百帕_(hpa)","标准大气压":"(x*1)/101325_标准大气压_(atm)","毫米汞柱":"(x*1)/(101325/760)_毫米汞柱_(mmHg)","英寸汞柱":"(x*1)/(101325/760*25.4)_英寸汞柱_(in Hg)","巴":"(x*1)/100000_巴_(bar)","毫巴":"(x*1)/100_毫巴_(mbar)","磅力/平方英尺":"(x*1)/(6894.757/144)_磅力/平方英尺_(psf)","磅力/平方英寸":"(x*1)/6894.757_磅力/平方英寸_(psi)","毫米水柱":"(x*1)/(1/0.101972)_毫米水柱","公斤力/平方厘米":"(x*1)/98066.5_公斤力/平方厘米_(kgf/cm²)","公斤力/平方米":"(x*1)/9.80665_公斤力/平方米_(kgf/㎡)","兆帕":"(x*1)/1000000_兆帕_(MPa)"},init:{"帕斯卡":"(x*1)/1_帕斯卡","千帕":"(x*1000)/1_帕斯卡","百帕":"(x*100)/1_帕斯卡","标准大气压":"(x*101325)/1_帕斯卡","毫米汞柱":"(x*(101325/760))/1_帕斯卡","英寸汞柱":"(x*(101325/760*25.4))/1_帕斯卡","巴":"(x*100000)/1_帕斯卡","毫巴":"(x*100)/1_帕斯卡","磅力/平方英尺":"(x*(6894.757/144))/1_帕斯卡","磅力/平方英寸":"(x*6894.757)/1_帕斯卡","毫米水柱":"(x*(1/0.101972))/1_帕斯卡","公斤力/平方厘米":"(x*98066.5)/1_帕斯卡","公斤力/平方米":"(x*9.80665)/1_帕斯卡","兆帕":"(x*1000000)/1_兆帕"},iu:"帕斯卡(Pa)",group:[{name:"",list:["帕斯卡_(Pa)","兆帕_(MPa)","千帕_(kpa)","百帕_(hpa)","标准大气压_(atm)","毫米汞柱_(mmHg)","英寸汞柱_(in Hg)","巴_(bar)","毫巴_(mbar)","磅力/平方英尺_(psf)","磅力/平方英寸_(psi)","毫米水柱","公斤力/平方厘米_(kgf/cm²)","公斤力/平方米_(kgf/㎡)"]}]},speed:{calc:{"米/秒":"(x*1)_米/秒_(m/s)","千米/秒":"(x*1)/1000_千米/秒_(km/s)","千米/时":"(x*3.600000)_千米/时_(km/h)","光速":"(x*3.335641)/(Math.pow(10,9))_光速_(c)","马赫":"(x*2.938584)/1000_马赫_(mach)","英里/时":"(x*2.236936)_英里/时_(mile/h)","英寸/秒":"(x*39.370079)_英寸/秒_(in/s)"},init:{"米/秒":"(x*1)_米/秒","千米/秒":"(x*1000)_米/秒","千米/时":"(x*277.777778)/1000_米/秒","光速":"(x*299792458)_米/秒","马赫":"(x*340.300000)_米/秒","英里/时":"(x*447.040000)/1000_米/秒","英寸/秒":"(x*25.400000)/1000_米/秒"},iu:"米/秒(m/s)",group:[{name:"",list:["米/秒_(m/s)","千米/秒_(km/s)","千米/时_(km/h)","光速_(c)","马赫_(mach)","英里/时_(mile/h)","英寸/秒_(in/s)"]}]},strength:{calc:{"牛":"(x*1)_牛_(N)","千牛":"(x*1)/1000_千牛_(kN)","千克力":"(x*101.971621)/1000_千克力_(kgf)","克力":"(x*101.971621)_克力_(gf)","公吨力":"(x*101.971621)/(Math.pow(10,6))_公吨力_(tf)","磅力":"(x*224.808943)/1000_磅力_(lbf)","千磅力":"(x*224.808943)/(Math.pow(10,6))_千磅力_(kip)","达因":"(x*100000)/1_达因_(dyn)"},init:{"牛":"(x*1)_牛","千牛":"(x*1000)_牛","千克力":"(x*9.806650)_牛","克力":"(x*9.806650)/1000_牛","公吨力":"(x*9806.650000)_牛","磅力":"(x*4.448222)_牛","千磅力":"(x*4448.221615)_牛","达因":"(x*1)/100000_牛"},iu:"牛(N)",group:[{name:"",list:["牛_(N)","千牛_(kN)","千克力_(kgf)","克力_(gf)","公吨力_(tf)","磅力_(lbf)","千磅力_(kip)","达因_(dyn)"]}]},temperature:{calc:{"摄氏度":"(x-273.15)/1_摄氏度_(℃)","华氏度":"32+((x-273.15)*9/5)_华氏度_(℉)","开氏度":"(x-273.15)+273.15_开氏度_(K)","兰氏度":"((x-273.15)+273.15)*1.8_兰氏度_(°R)","列氏度":"(x-273.15)/1.25_列氏度_(°Re)"},init:{"摄氏度":"(x*1)+273.15_开氏度","华氏度":"(5*(x-32)/9)+273.15_开氏度","开氏度":"(x-273.15)+273.15_开氏度","兰氏度":"(x/1.8-273.15)+273.15_开氏度","列氏度":"(x*1.25)+273.15_开氏度"},iu:"开氏度(K)",group:[{name:"",list:["摄氏度_(℃)","华氏度_(℉)","开氏度_(K)","兰氏度_(°R)","列氏度_(°Re)"]}]},time:{calc:{"年":"(x*31.709792)/(Math.pow(10,9))_年_(yr)","周":"(x*1.653439)/(Math.pow(10,6))_周_(week)","天":"(x*11.574074)/(Math.pow(10,6))_天_(d)","时":"(x*277.777778)/(Math.pow(10,6))_时_(h)","分":"(x*16.6666667)/1000_分_(min)","秒":"(x*1)_秒_(s)","毫秒":"(x*1000)_毫秒_(ms)","微秒":"(x*1000000)_微秒_(μs)","纳秒":"(x*1000000000)_纳秒_(ns)"},init:{"年":"(x*31536000)_秒","周":"(x*604800)_秒","天":"(x*86400)_秒","时":"(x*3600)_秒","分":"(x*60)_秒","秒":"(x*1)_秒","毫秒":"(x*1)/1000_秒","微秒":"(x*1)/1000000_秒","纳秒":"(x*1)/1000000000_秒"},iu:"秒(s)",group:[{name:"",list:["年_(yr)","周_(week)","天_(d)","时_(h)","分_(min)","秒_(s)","毫秒_(ms)","微秒_(μs)","纳秒_(ns)"]}],special:{"时-分":"(x*60)_分_(min)"}},volume:{calc:{"立方米":"(x*1)/1_立方米_(m³)","立方分米":"(x*1)/0.001_立方分米_(dm³)","立方厘米":"(x*1)/0.000001_立方厘米_(cm³)","立方毫米":"(x*1)/0.000000001_立方毫米_(mm³)","升":"(x*1)/0.001_升_(l)","分升":"(x*1)/0.0001_分升_(dl)","毫升":"(x*1)/0.000001_毫升_(ml)","厘升":"(x*1)/0.00001_厘升_(cl)","公石":"(x*1)/0.1_公石_(hl)","立方英尺":"(x*1)/0.0283168_立方英尺_(cu ft)","立方英寸":"(x*1)/(0.0283168/1728)_立方英寸_(cu in)","立方码":"(x*1)/(0.0283168*27)_立方码_(cu yd)","亩英尺":"(x*1)/(43560*1728*0.016387064/1000)_亩英尺","英制加仑":"(x*1)/0.00454609188_英制加仑_(uk gal)","美制加仑":"(x*1)/(231*0.016387064/1000)_美制加仑_(us gal)","微升":"(x*1)/0.000000001_微升_(ul)","英制液体盎司":"(x*1)/(0.000001*28.41)_英制液体盎司_(oz)","美制液体盎司":"(x*1)/(0.000001*29.57)_美制液体盎司_(oz)"},init:{"立方米":"(x*1)/1_立方米","立方分米":"(x*0.001)/1_立方米","立方厘米":"(x*0.000001)/1_立方米","立方毫米":"(x*0.000000001)/1_立方米","升":"(x*0.001)/1_立方米","分升":"(x*0.0001)/1_立方米","毫升":"(x*0.000001)/1_立方米","厘升":"(x*0.00001)/1_立方米","公石":"(x*0.1)/1_立方米","立方英尺":"(x*0.0283168)/1_立方米","立方英寸":"(x*(0.0283168/1728))/1_立方米","立方码":"(x*(0.0283168*27))/1_立方米","亩英尺":"(x*(43560*1728*0.016387064/1000))/1_立方米","英制加仑":"(x*0.00454609188)/1_立方米","美制加仑":"(x*(231*0.016387064/1000))/1_立方米","微升":"(x*0.000000001)/1_立方米","英制液体盎司":"(x*0.000001*28.41)/1_立方米","美制液体盎司":"(x*0.000001*29.57)/1_立方米"},iu:"立方米(m³)",group:[{name:"公制",list:["立方米_(m³)","立方分米_(dm³)","立方厘米_(cm³)","立方毫米_(mm³)","升_(l)","分升_(dl)","毫升_(ml)","厘升_(cl)","公石_(hl)","微升_(ul)"]},{name:"英制",list:["立方英尺_(cu ft)","立方英寸_(cu in)","立方码_(cu yd)","亩英尺","英制加仑_(uk gal)","美制加仑_(us gal)","英制液体盎司_(oz)","美制液体盎司_(oz)"]}]},weight:{calc:{"千克":"(x*1)/1_千克_(kg)","克":"(x*1)/0.001_克_(g)","毫克":"(x*1)/0.000001_毫克_(mg)","微克":"(x*1)/0.000000001_微克_(μg)","吨":"(x*1)/1000_吨_(t)","公担":"(x*1)/100_公担_(q)","磅":"(x*1)/0.45359237_磅_(lb)","盎司":"(x*1)/(0.45359237/16)_盎司_(oz)","克拉":"(x*1)/0.0002_克拉_(ct)","格令":"(x*1)/(0.45359237/7000)_格令_(gr)","长吨":"(x*1)/(0.45359237*2240)_长吨_(lt)","短吨":"(x*1)/(0.45359237*2000)_短吨_(st)","英担":"(x*1)/(0.45359237*112)_英担","美担":"(x*1)/(0.45359237*100)_美担","英石":"(x*1)/(0.45359237*14)_英石_(st)","打兰":"(x*1)/(0.45359237/256)_打兰_(dr)","担":"(x*1)/50_担","斤":"(x*1)/0.5_斤","两":"(x*1)/0.05_两","钱":"(x*1)/0.005_钱","分":"(x*1)/0.000002_分"},init:{"千克":"(x*1)/1_千克","克":"(x*0.001)/1_千克","毫克":"(x*0.000001)/1_千克","微克":"(x*0.000000001)/1_千克","吨":"(x*1000)/1_千克","公担":"(x*100)/1_千克","磅":"(x*0.45359237)/1_千克","盎司":"(x*(0.45359237/16))/1_千克","克拉":"(x*0.0002)/1_千克","格令":"(x*(0.45359237/7000))/1_千克","长吨":"(x*(0.45359237*2240))/1_千克","短吨":"(x*(0.45359237*2000))/1_千克","英担":"(x*(0.45359237*112))/1_千克","美担":"(x*(0.45359237*100))/1_千克","英石":"(x*(0.45359237*14))/1_千克","打兰":"(x*(0.45359237/256))/1_千克","担":"(x*50)/1_千克","斤":"(x*0.5)/1_千克","两":"(x*0.05)/1_千克","钱":"(x*0.005)/1_千克","分":"(x*0.000002)/1_千克"},iu:"千克(kg)",group:[{name:"公制",list:["千克_(kg)","克_(g)","毫克_(mg)","微克_(μg)","吨_(t)","公担_(q)","克拉_(ct)","分_(point)"]},{name:"英制",list:["磅_(lb)","盎司_(oz)","克拉_(ct)","格令_(gr)","长吨_(lt)","短吨_(st)","英担","美担","英石_(st)","打兰_(dr)"]},{name:"市制",list:["担","斤","两","钱"]}]},work:{calc:{"焦耳":"(x*1)/1_焦耳_(J)","公斤·米":"(x*1)/9.80392157_公斤·米_(kg·m)","米制马力·时":"(x*1)/(9.80665*75*3600)_米制马力·时_(ps·h)","英制马力·时":"(x*1)/(745.699872*3600)_英制马力·时_(hp·h)","千瓦·时":"(x*1)/3600000_千瓦·时_(kW·h)","度":"(x*1)/3600000_度_(kW·h)","卡":"(x*1)/4.185851820846_卡_(cal)","千卡":"(x*1)/4185.851820846_千卡_(kcal)","英热单位":"(x*1)/1055.05585262_英热单位_(btu)","英尺·磅":"(x*1)/1.3557483731_英尺·磅_(ft·lb)","千焦":"(x*1)/1000_千焦_(kJ)"},init:{"焦耳":"(x*1)/1_焦耳","公斤·米":"(x*9.80392157)/1_焦耳","米制马力·时":"(x*(9.80665*75*3600))/1_焦耳","英制马力·时":"(x*(745.699872*3600))/1_焦耳","千瓦·时":"(x*3600000)/1_焦耳","度":"(x*3600000)/1_焦耳","卡":"(x*4.185851820846)/1_焦耳","千卡":"(x*4185.851820846)/1_焦耳","英热单位":"(x*1055.05585262)/1_焦耳","英尺·磅":"(x*1.3557483731)/1_焦耳","千焦":"(x*1000)/1_焦耳"},iu:"焦耳(J)",group:[{name:"焦耳(J)",list:["焦耳_(J)","公斤·米_(kg·m)","米制马力·时_(ps·h)","英制马力·时_(hp·h)","千瓦·时_(kW·h)","度_(kW·h)","卡_(cal)","千卡_(kcal)","英热单位_(btu)","英尺·磅_(ft·lb)","千焦_(kJ)"]}]}},u=function(_,t,n,e,r){var x,i,a,u=o[_];if(n===e)return x=s(t,u.calc[n]),i=x[1],a=x[2]||"",{num:r?t:c(t),unitFirst:i,unitSecond:a||""};var l=s(t,u.init[n]),m=u.special&&u.special[n+"-"+e]||null;return x=m?s(t,m):s(new Function("return "+l[0])(),u.calc[e]),t=new Function("return "+x[0])(),i=x[1],a=x[2]||"",{num:r?t:c(t),unitFirst:i,unitSecond:a||""}},c=function(_){var t,n,e,r=_+"",o=!1;if(r.indexOf(".")>-1){var u=r.match(/\.\d+e[+-](\d+)$/);o=!u||!u[1]||1*u[1]<x-1}return o?_>-1&&_<1&&0!=_?_=Math.abs(_)<1e-5?l(_,a):1*_.toFixed(i):(t=r.split("."),n=t[0],e=t[1],r.length>x?_=n.length>=x?l(_,a):n.length<i-1?1*_.toFixed(i):1*_.toFixed(x-n.length-1):e.length>i&&(_=1*_.toFixed(i))):r.length>x&&(_=l(_,a)),_+""},s=function(_,t){return t.replace("x",_).split("_")},l=function(_,t){var n=_.toExponential(t);return(n+"").match(new RegExp(".0{"+t+"}e"))?_.toExponential(0):n},m={getData:function(_){return o[_]},calc:function(_,t,n,e){return u(_,t,n,e)},calcOrigin:function(_,t,n,e){return u(_,t,n,e,!0)},format:function(_){return c(_)},list:[{key:"length",name:"长度"},{key:"area",name:"面积"},{key:"volume",name:"体积"},{key:"weight",name:"质量"},{key:"temperature",name:"温度"},{key:"pressure",name:"压力"},{key:"power",name:"功率"},{key:"work",name:"功/能/热"},{key:"density",name:"密度"},{key:"strength",name:"力"},{key:"time",name:"时间"},{key:"speed",name:"速度"},{key:"byte",name:"数据存储"},{key:"angle",name:"角度"}]},p={created:function(){var _=this.$getToolData();this.current.type=_["type"]?_["type"]:"temperature",this.getToolData()},computed:{unitGroup:function(){return m.getData(this.current.type).group},isShowResult:function(){return this.current.from&&this.current.type&&this.current.input},result:function(){var _=this,t=[];return this.isShowResult&&(this.saveToolData(),this.unitGroup.forEach((function(n){n.list.forEach((function(n){var e=m.calc(_.current.type,_.current.input,_.current.from.split("_")[0],n.split("_")[0]);t.push({unit:n,num:e.num})}))}))),t},assignResult:function(){if("all"===this.current.to)return{};for(var _=this.current.to,t=0;t<this.result.length;t++)if(this.result[t].unit===_)return this.result[t];return console.log(this.result),console.log(_),console.error("无对应数据"),null}},methods:{handle:function(_){this.current.type=_,this.getToolData()},saveToolData:function(){var _=this.$getToolData();_.type=this.current.type,_.data=_.data?_.data:{},_.data[_.type]={from:this.current.from,to:this.current.to,input:this.current.input},this.$saveToolData(_)},getToolData:function(){var _=this.current.type,t=this.$getToolData(),n=t["data"]&&t["data"][_]?t["data"][_]:null;this.current.from=n?n.from:"",this.current.to=n?n.to:"all",this.current.input=n?n.input:""},unitFormat:function(_){return _.split("_").join("")},exchange:function(){if("all"!==this.current.to&&this.current.from&&this.current.to){var _=this.current.from;this.current.from=this.current.to,this.current.to=_}}},data:function(){return{current:{type:"",from:"",to:"",input:""},unitLists:m.list}}},h=p,f=n("2877"),g=Object(f["a"])(h,e,r,!1,null,null,null);t["default"]=g.exports}}]);