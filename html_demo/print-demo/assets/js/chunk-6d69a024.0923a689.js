(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6d69a024"],{"05c3":function(t,e,a){"use strict";a.d(e,"s",(function(){return r})),a.d(e,"o",(function(){return i})),a.d(e,"n",(function(){return o})),a.d(e,"m",(function(){return u})),a.d(e,"q",(function(){return l})),a.d(e,"p",(function(){return s})),a.d(e,"r",(function(){return c})),a.d(e,"i",(function(){return p})),a.d(e,"c",(function(){return f})),a.d(e,"h",(function(){return m})),a.d(e,"k",(function(){return d})),a.d(e,"l",(function(){return b})),a.d(e,"a",(function(){return h})),a.d(e,"b",(function(){return g})),a.d(e,"j",(function(){return _})),a.d(e,"d",(function(){return v})),a.d(e,"e",(function(){return k})),a.d(e,"g",(function(){return j})),a.d(e,"f",(function(){return C}));var n=a("bdd0");function r(t){return Object(n["a"])("post","/relevanceCentreHospitalList",t)}function i(t){return Object(n["a"])("post","/hospitalDetails",t)}function o(t){return Object(n["a"])("post","/askCooperation",t)}function u(t){return Object(n["a"])("post","/allHospitalList",t)}function l(t){return Object(n["a"])("post","/juniorAskList",t)}function s(t){return Object(n["a"])("post","/joinHospitalDetails",t)}function c(t){return Object(n["a"])("post","/queryCooperation",t)}function p(t){return Object(n["a"])("post","/groupAskUser",t)}function f(t){return Object(n["a"])("get","/groupAskUserDetails",t)}function m(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return Object(n["a"])("post","/hospitalDoctor",t)}function d(t){return Object(n["a"])("post","/groupAskUserDetails",t)}function b(t){return Object(n["a"])("post","/groupAskUserUpd",t)}function h(t){return Object(n["a"])("post","/groupAskList",t)}function g(t){return Object(n["a"])("post","/groupAskListDetails",t)}function _(t){return Object(n["a"])("post","/groupAskListRecall",t)}function v(t){return Object(n["a"])("post","/groupByList",t)}function k(t){return Object(n["a"])("post","/groupByListDetails",t)}function j(t){return Object(n["a"])("post","/groupByReceiveReject",t)}function C(t){return Object(n["a"])("post","/groupByListIssue",t)}},1799:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-pagination",{attrs:{background:"",layout:"total,prev, pager, next",total:t.total,"page-size":t.per_page,"current-page":t.current_page},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)},r=[],i=(a("513c"),{props:{current_page:{type:Number,default:1},per_page:{type:Number,default:10},total:{type:Number,default:0}},methods:{handleSizeChange:function(t){this.$emit("handleSizeChangeSon",t)},handleCurrentChange:function(t){this.$emit("handleCurrentChangeSon",t)}}}),o=i,u=a("9ca4"),l=Object(u["a"])(o,n,r,!1,null,null,null);e["a"]=l.exports},"272f":function(t,e,a){},"7dd5":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"applicationRemoteImagePage"},[a("el-tabs",{staticClass:"hz-tabs",on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"影像服务",name:"0"}},[a("el-card",[a("el-form",{ref:"formRef",attrs:{model:t.form,"label-width":"100px"}},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{label:"检查号"}},[a("el-input",{attrs:{clearable:""},model:{value:t.form.number,callback:function(e){t.$set(t.form,"number",e)},expression:"form.number"}})],1)],1),a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{label:"患者姓名"}},[a("el-input",{model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1)],1),a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{label:"检查状态","label-width":"100px"}},[a("el-select",{attrs:{placeholder:"全部"},model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}},t._l(t.statuslist,(function(t,e){return a("el-option",{key:e,attrs:{label:t.name,value:t.id}})})),1)],1)],1),a("el-col",{attrs:{span:6}},[a("div",[a("el-button",{attrs:{type:"primary"},on:{click:t.handleSearch}},[t._v("查询")]),a("el-button",{attrs:{plain:""},on:{click:t.handleReset}},[t._v("重置")])],1)])],1)],1)],1),a("el-card",{staticClass:"Mg-T20"},[a("f-table",{staticClass:"Mg-T20",attrs:{"table-label":t.tableLabel,"table-data":t.tableData},scopedSlots:t._u([{key:"formatDate",fn:function(e){return[t._v(" "+t._s(t._f("dateFormat")(e.data.examine_time))+" ")]}},{key:"status",fn:function(e){return[t._v(" "+t._s(1==e.data.examine_status?"检查完成":2==e.data.examine_status?"初步报告":3==e.data.examine_status?"审核通过":4==e.data.examine_status?"审核驳回":5==e.data.examine_status?"确认报告":6==e.data.examine_status?"已经完成":"")+" ")]}},{key:"opt",fn:function(e){return[a("el-button",{attrs:{type:"primary",size:"mini",plain:""},on:{click:function(a){return t._toApplyDetailPage(e.data)}}},[t._v("申请")])]}}])}),a("pagination",{attrs:{total:t.total,current_page:t.form.page,per_page:t.form.limit},on:{handleSizeChangeSon:t.handleSizeChangeFather,handleCurrentChangeSon:t.handleCurrentChangeFather}})],1)],1)],1)],1)},r=[],i=(a("2eeb"),a("6a61"),a("cf7f")),o=a("0748"),u=a("1799"),l=a("05c3"),s={data:function(){return{activeName:"0",form:{page:1,limit:10,number:"",name:"",status:"",ktime:"",jtime:""},statuslist:[{id:"",name:"全部"},{id:1,name:"检查完成"},{id:2,name:"初步报告"},{id:3,name:"审核通过"},{id:4,name:"审核驳回"},{id:6,name:"已经完成"}],tableLabel:[{type:"index",label:"序号",width:"50"},{prop:"dcm_patient_id",label:"检查号"},{prop:"_user",label:"患者信息"},{prop:"examine_type",label:"检查类别"},{prop:"examine_time",label:"检查时间",columnType:"slot",slotName:"formatDate"},{prop:"examine_part",label:"检查部位"},{prop:"examine_status",label:"检查状态",columnType:"slot",slotName:"status"},{label:"操作",columnType:"slot",slotName:"opt"}],tableData:[],total:0,show:!0}},components:{FTable:o["a"],Pagination:u["a"]},created:function(){this.initdata()},methods:{initdata:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(l["i"])(t.form);case 3:a=e.sent,n=a.data,0==n.code?(n.data.list.map((function(e,a){e.index=a+1+(t.form.page-1)*t.form.limit;var n="F"==e.sex?"⼥":"M"==e.sex?"男":"";e._user="",e.real_name&&(e._user+=e.real_name),n&&(e._user+="-"+n),e.age&&(e._user+="-"+e.age)})),t.tableData=n.data.list,t.total=n.data.count||0):(t.tableData=[],t.total=0),e.next=11;break;case 9:e.prev=9,e.t0=e["catch"](0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})))()},handleSearch:function(){this.form.page=1,this.initdata()},handleReset:function(){this.form={page:1,limit:10,number:"",name:"",status:""},this.initdata()},handleClick:function(t,e){},handleSizeChangeFather:function(t){this.form.limit=t},handleCurrentChangeFather:function(t){this.form.page=t,this.initdata()},_toApplyDetailPage:function(t){this.$router.push({path:"/home/remoteConsultation/applicationRemoteImagePageApplyDetail",query:{id:t.mutual_id}})},_toImageDetaiPage:function(){}}},c=s,p=(a("f87f"),a("9ca4")),f=Object(p["a"])(c,n,r,!1,null,"56f4c3ea",null);e["default"]=f.exports},f87f:function(t,e,a){"use strict";var n=a("272f"),r=a.n(n);r.a}}]);