(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-189e952a"],{"365c":function(e,t,l){"use strict";var a=l("bc3a"),n=l.n(a),o=n.a.create({baseURL:"https://www.easy-mock.com/mock/592501a391470c0ac1fab128",timeout:5e3});o.interceptors.request.use(function(e){return e},function(e){return console.log(e),Promise.reject()}),o.interceptors.response.use(function(e){if(200===e.status)return e.data;Promise.reject()},function(e){return console.log(e),Promise.reject()});var i=o;l.d(t,"a",function(){return s});var s=function(e){return i({url:"/ms/table/list",method:"post",data:e})}},"3e92":function(e,t,l){"use strict";l.r(t);var a=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"table"},[l("div",{staticClass:"container"},[l("div",{staticClass:"handle-box"},[l("el-input",{staticClass:"handle-input mr10",attrs:{placeholder:"筛选名称关键词"},model:{value:e.query.name,callback:function(t){e.$set(e.query,"name",t)},expression:"query.name"}}),l("el-select",{staticClass:"mr10",attrs:{placeholder:"状态"},model:{value:e.query.status,callback:function(t){e.$set(e.query,"status",t)},expression:"query.status"}},e._l(e.options,function(e){return l("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1),l("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.search}},[e._v("搜索")]),l("el-button",{staticClass:"handle-del mr10",attrs:{type:"primary",icon:"el-icon-delete"}},[e._v("批量上架")]),l("el-button",{staticClass:"handle-del mr10",attrs:{type:"primary",icon:"el-icon-delete"}},[e._v("批量下架")])],1),l("el-table",{ref:"multipleTable",staticClass:"table",attrs:{data:e.list,border:""},on:{"selection-change":e.handleSelectionChange}},[l("el-table-column",{attrs:{type:"selection",width:"55",align:"center"}}),l("el-table-column",{attrs:{prop:"name",label:"名称"}}),l("el-table-column",{attrs:{prop:"price",label:"价格"}}),l("el-table-column",{attrs:{prop:"type",label:"开奖模式"}}),l("el-table-column",{attrs:{prop:"timing",label:"发布时间"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n                    "+e._s(e.$tools.format(t.row.timing))+"\n                ")]}}])}),l("el-table-column",{attrs:{prop:"initPeople",label:"初始化人数"}}),l("el-table-column",{attrs:{prop:"currentPeople",label:"已参加人数"}}),l("el-table-column",{attrs:{prop:"address",label:"开奖状态"}}),l("el-table-column",{attrs:{label:"操作",width:"180",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-button",{attrs:{type:"text",icon:"el-icon-edit"},on:{click:function(l){return e.handleEdit(t.$index,t.row)}}},[e._v("编辑\n                    ")]),l("el-button",{staticClass:"red",attrs:{type:"text",icon:"el-icon-delete"},on:{click:function(l){return e.del(t.row.id)}}},[e._v("删除\n                    ")])]}}])})],1),l("div",{staticClass:"pagination"},[l("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:1e3},on:{"current-change":e.handleCurrentChange}})],1)],1),l("el-dialog",{attrs:{title:"编辑",visible:e.editVisible,width:"30%"},on:{"update:visible":function(t){e.editVisible=t}}},[l("el-form",{ref:"form",attrs:{model:e.form,"label-width":"50px"}},[l("el-form-item",{attrs:{label:"日期"}},[l("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期","value-format":"yyyy-MM-dd"},model:{value:e.form.date,callback:function(t){e.$set(e.form,"date",t)},expression:"form.date"}})],1),l("el-form-item",{attrs:{label:"姓名"}},[l("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),l("el-form-item",{attrs:{label:"地址"}},[l("el-input",{model:{value:e.form.address,callback:function(t){e.$set(e.form,"address",t)},expression:"form.address"}})],1)],1),l("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[l("el-button",{on:{click:function(t){e.editVisible=!1}}},[e._v("取 消")]),l("el-button",{attrs:{type:"primary"}},[e._v("确 定")])],1)],1),l("el-dialog",{attrs:{title:"提示",visible:e.delVisible,width:"300px",center:""},on:{"update:visible":function(t){e.delVisible=t}}},[l("div",{staticClass:"del-dialog-cnt"},[e._v("删除不可恢复，是否确定删除？")]),l("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[l("el-button",{on:{click:function(t){e.delVisible=!1}}},[e._v("取 消")]),l("el-button",{attrs:{type:"primary"},on:{click:e.deleteRow}},[e._v("确 定")])],1)])],1)},n=[],o=(l("365c"),{name:"basetable",data:function(){return{options:[{value:0,label:"全部"},{value:1,label:"未上架"},{value:2,label:"上架中"},{value:3,label:"已下架"}],query:{},list:[],cur_page:1,editVisible:!1,delVisible:!1,form:{name:"",date:"",address:""}}},created:function(){this.getList()},computed:{},methods:{getList:function(){var e=this;this.$api.get("/goods/list").then(function(t){t&&(e.list=t)})},del:function(e){var t=this;this.$api.get("/goods/del",{id:e}).then(function(e){console.log(e),e&&t.getList()})},handleSelectionChange:function(){},handleCurrentChange:function(e){this.cur_page=e},search:function(){},handleEdit:function(){},deleteRow:function(){}}}),i=o,s=(l("fec9"),l("2877")),r=Object(s["a"])(i,a,n,!1,null,"a0eda3b2",null);t["default"]=r.exports},a7d5:function(e,t,l){},fec9:function(e,t,l){"use strict";var a=l("a7d5"),n=l.n(a);n.a}}]);