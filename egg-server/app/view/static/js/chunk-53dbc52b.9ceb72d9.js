(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-53dbc52b"],{"3e3a":function(e,t,r){"use strict";var n=r("53b5"),o=r.n(n);o.a},"454f":function(e,t,r){r("46a7");var n=r("584a").Object;e.exports=function(e,t,r){return n.defineProperty(e,t,r)}},"46a7":function(e,t,r){var n=r("63b6");n(n.S+n.F*!r("8e60"),"Object",{defineProperty:r("d9f6").f})},"53b5":function(e,t,r){},"85f2":function(e,t,r){e.exports=r("454f")},ec6b:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"container"},[r("div",{staticClass:"form-box"},[r("el-form",{ref:"form",attrs:{model:e.form,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"商品地址"}},[r("el-input",{model:{value:e.url,callback:function(t){e.url=t},expression:"url"}}),r("el-button",{on:{click:e.getGoods}},[e._v("提取")])],1),r("el-form-item",{attrs:{label:"商品名称"}},[r("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),r("el-form-item",{attrs:{label:"商品价格(元)"}},[r("el-input",{model:{value:e.form.price,callback:function(t){e.$set(e.form,"price",t)},expression:"form.price"}})],1),r("el-form-item",{attrs:{label:"开奖模式"}},[r("el-radio-group",{model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}},[r("el-radio",{attrs:{label:"1"}},[e._v("定时开奖")]),r("el-radio",{attrs:{label:"2"}},[e._v("人数开奖")])],1)],1),1==e.form.type?r("el-form-item",{attrs:{label:"开奖时间"}},[r("el-date-picker",{attrs:{type:"datetime",placeholder:"选择日期时间","value-format":"timestamp"},model:{value:e.form.lottery,callback:function(t){e.$set(e.form,"lottery",t)},expression:"form.lottery"}})],1):e._e(),2==e.form.type?r("el-form-item",{attrs:{label:"开奖人数"}},[r("el-input-number",{attrs:{min:1},model:{value:e.form.people,callback:function(t){e.$set(e.form,"people",t)},expression:"form.people"}})],1):e._e(),r("el-form-item",{attrs:{label:"初始化人员"}},[r("el-input-number",{attrs:{min:1},model:{value:e.form.initPeople,callback:function(t){e.$set(e.form,"initPeople",t)},expression:"form.initPeople"}})],1),r("el-form-item",{attrs:{label:"发布时间"}},[r("el-date-picker",{attrs:{type:"datetime",placeholder:"选择日期时间","value-format":"timestamp"},model:{value:e.form.timing,callback:function(t){e.$set(e.form,"timing",t)},expression:"form.timing"}})],1),r("el-form-item",{attrs:{label:"商品banner图"}},[r("el-row",[r("el-col",{attrs:{span:24}},[r("el-card",e._l(e.form.banner,function(t,n){return r("img",{key:t,staticClass:"image",attrs:{src:t},on:{contextmenu:function(t){return e.delImg("banner",n)},click:function(r){return e.handlePictureCardPreview(t)}}})}),0)],1)],1)],1),r("el-form-item",{attrs:{label:"商品详情图"}},[r("el-row",[r("el-col",{attrs:{span:24}},[r("el-card",e._l(e.form.details,function(t,n){return r("img",{key:t,staticClass:"image",attrs:{src:t},on:{contextmenu:function(t){return e.delImg("details",n)},click:function(r){return e.handlePictureCardPreview(t)}}})}),0)],1)],1)],1),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("发布抽奖")]),r("el-button",[e._v("取消")])],1)],1)],1)]),r("el-dialog",{attrs:{visible:e.dialogVisible},on:{"update:visible":function(t){e.dialogVisible=t}}},[r("img",{attrs:{width:"100%",src:e.dialogImageUrl,alt:""}})])],1)},o=[],a=(r("8e6e"),r("ac6a"),r("456d"),r("85f2")),i=r.n(a);function l(e,t,r){return t in e?i()(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var s=r("388f"),c=r.n(s);function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(r,!0).forEach(function(t){l(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var u={name:"baseform",data:function(){return{form:{banner:[],details:[]},action:c.a+"/upload",dialogImageUrl:"",dialogVisible:!1,url:""}},methods:{getGoods:function(){var e=this;this.$api.get("http://127.0.0.1:3000/query",{url:this.url}).then(function(t){t&&(e.form=m({},e.form,{},t))})},delImg:function(e,t){this.form[e].splice(t,1)},handleAvatarSuccess:function(e,t,r){this.form.banner=r.map(function(e){return e.response.data}),console.log(this.form.banner)},handleAvatarSuccess2:function(e,t,r){this.form.details=r.map(function(e){return e.response.data}),console.log(this.form.details)},handlePictureCardPreview:function(e){this.dialogImageUrl=e,this.dialogVisible=!0},handleRemove:function(e,t){this.form.banner=t.map(function(e){return e.response.data})},handleRemove2:function(e,t){this.form.details=t.map(function(e){return e.response.data})},onSubmit:function(){var e=this;this.$api.post("/goods/add",this.form).then(function(t){t&&(console.log(t),e.$api.success("提交成功！"))})}}},p=u,d=(r("3e3a"),r("2877")),b=Object(d["a"])(p,n,o,!1,null,"6018cdf1",null);t["default"]=b.exports}}]);