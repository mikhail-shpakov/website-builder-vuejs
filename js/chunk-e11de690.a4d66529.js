(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e11de690"],{"2f80":function(t,e,s){},3142:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("p",{staticClass:"c-title"},[t._v("Новый сайт")]),s("div",{staticClass:"c-card"},[s("b-field",{attrs:{label:"Название сайта"}},[s("b-input",{model:{value:t.siteName,callback:function(e){t.siteName="string"===typeof e?e.trim():e},expression:"siteName"}})],1),s("b-button",{ref:"button-create",attrs:{type:"is-success",disabled:!t.siteName},nativeOn:{click:function(e){return t.CREATE_NEW_SITE(t.siteName)}}},[t._v("Начать проектирование")])],1),s("p",{staticClass:"c-title"},[t._v("История")]),t.history.length?t._l(t.history,(function(e){return s("div",{key:e.id,staticClass:"c-card"},[t._o(s("b-icon",{attrs:{icon:t.listIcons[t.randomInteger()],size:"is-large"}}),0,e.id),s("p",{staticClass:"site-title"},[t._v(t._s(e.siteName))]),s("p",{staticClass:"site-time"},[t._v("Сохранено в "+t._s(t._f("moment")(e.saveTime,"HH:mm, dddd, Do MMMM YYYY")))]),s("div",{staticClass:"buttons"},[s("b-button",{ref:"button-open",refInFor:!0,attrs:{type:"is-success"},nativeOn:{click:function(s){return t.OPEN_HISTORY_PROJECT(e.id)}}},[t._v("Открыть")]),s("b-button",{ref:"button-delete",refInFor:!0,attrs:{type:"is-danger"},nativeOn:{click:function(s){return t.DELETE_HISTORY_PROJECT(e.id)}}},[t._v("Удалить")])],1)],1)})):s("div",{staticClass:"history-empty"},[t._m(0),s("p",[t._v("Сейчас у вас нет сохранённых сайтов")])])],2)},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("figure",{staticClass:"image is-4by3"},[i("img",{attrs:{src:s("8479"),alt:"img-empty"}})])}],a=s("5935"),c=s("2f62"),r={name:"Start",data(){return{siteName:"",listIcons:["semantic-web","spider-web","search-web","web","webhook","webpack"]}},computed:{...Object(a["b"])("builder",["history"])},methods:{...Object(c["b"])("builder",["CREATE_NEW_SITE","OPEN_HISTORY_PROJECT","DELETE_HISTORY_PROJECT"]),randomInteger(){const t=0,e=5,s=t+Math.random()*(e-t);return Math.round(s)}}},o=r,l=(s("c2bc"),s("2877")),u=Object(l["a"])(o,i,n,!1,null,"05078053",null);e["default"]=u.exports},8479:function(t,e,s){t.exports=s.p+"img/empty.3da65a95.svg"},c2bc:function(t,e,s){"use strict";var i=s("2f80"),n=s.n(i);n.a}}]);
//# sourceMappingURL=chunk-e11de690.a4d66529.js.map