(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0fa55ac4"],{1799:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-pagination",{attrs:{background:"",layout:"total,prev, pager, next",total:t.total,"page-size":t.per_page,"current-page":t.current_page},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)},n=[],i=(a("513c"),{props:{current_page:{type:Number,default:1},per_page:{type:Number,default:10},total:{type:Number,default:0}},methods:{handleSizeChange:function(t){this.$emit("handleSizeChangeSon",t)},handleCurrentChange:function(t){this.$emit("handleCurrentChangeSon",t)}}}),o=i,l=a("9ca4"),s=Object(l["a"])(o,r,n,!1,null,null,null);e["a"]=s.exports},"1a0f":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"register"},[a("el-card",[a("el-form",{ref:"form",attrs:{model:t.form,"label-width":"80px"}},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{label:"医师姓名"}},[a("el-input",{attrs:{clearable:""},on:{clear:t._getRegisterListData},model:{value:t.form.docName,callback:function(e){t.$set(t.form,"docName",e)},expression:"form.docName"}})],1)],1),a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{label:"患者姓名"}},[a("el-input",{attrs:{clearable:""},on:{clear:t._getRegisterListData},model:{value:t.form.patName,callback:function(e){t.$set(t.form,"patName",e)},expression:"form.patName"}})],1)],1),a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{label:"所属科室"}},[a("el-select",{attrs:{placeholder:""},model:{value:t.form.depName,callback:function(e){t.$set(t.form,"depName",e)},expression:"form.depName"}},t._l(t.deplist,(function(t,e){return a("el-option",{key:e,attrs:{label:t.name,value:t.id}})})),1)],1)],1),a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{label:"预约日期"}},[a("el-date-picker",{staticStyle:{width:"auto"},attrs:{type:"date",placeholder:"",align:"right","value-format":"yyyy-MM-dd"},on:{clear:t._getRegisterListData},model:{value:t.form.regDate,callback:function(e){t.$set(t.form,"regDate",e)},expression:"form.regDate"}})],1)],1),a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{label:"状态"}},[a("el-select",{attrs:{placeholder:"全部"},model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}},t._l(t.statuslist,(function(t,e){return a("el-option",{key:e,attrs:{label:t.name,value:t.id}})})),1)],1)],1),a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{label:"电话号码"}},[a("el-input",{attrs:{clearable:""},on:{clear:t._getRegisterListData},model:{value:t.form.phone,callback:function(e){t.$set(t.form,"phone",e)},expression:"form.phone"}})],1)],1),a("el-col",{attrs:{span:6}},[a("div",[a("el-button",{attrs:{type:"primary"},on:{click:t.handleSearch}},[t._v("查询")]),a("el-button",{attrs:{plain:""},on:{click:t.resetRegisterForm}},[t._v("重置")])],1)])],1)],1)],1),a("el-card",{staticClass:"table-card"},[a("f-table",{attrs:{"table-label":t.tableLabel,"table-data":t.tableData},scopedSlots:t._u([{key:"formatDate",fn:function(e){return[t._v(" "+t._s(t._f("momentDate")(e.data.make_date,"YYYY-MM-DD"))+" ")]}},{key:"allStatus",fn:function(e){return[0==e.data.status?a("div",[t._v("未付款")]):t._e(),1==e.data.status?a("div",[t._v("已取消")]):2==e.data.status?a("div",[t._v("失约")]):3==e.data.status?a("div",[t._v("已预约")]):t._e(),4==e.data.status?a("div",[t._v("已登记")]):t._e()]}},{key:"opt",fn:function(e){return[a("el-button",{attrs:{type:"primary",icon:"el-icon-search",size:"mini",plain:""},on:{click:function(a){return t._toDetailPage(e.data.reg_id,e.data.status)}}},[t._v(" 详情 ")]),3==e.data.status?a("el-button",{attrs:{type:"primary",icon:"el-icon-edit",size:"mini",plain:""},on:{click:function(a){return t._toRegisterPage(e.data.reg_id)}}},[t._v(" 登记 ")]):t._e()]}}])}),a("pagination",{attrs:{total:t.total,current_page:t.form.page,per_page:t.form.limit},on:{handleSizeChangeSon:t.handleSizeChangeFather,handleCurrentChangeSon:t.handleCurrentChangeFather}})],1)],1)},n=[],i=(a("2eeb"),a("e793")),o=(a("6a61"),a("cf7f")),l=a("0748"),s=a("1799"),c=a("dd82"),u={data:function(){return{form:{docName:"",depName:"",regDate:"",regTime:"",patName:"",status:"",phone:"",page:1,limit:10},tableLabel:[{prop:"index",label:"序号",width:"50"},{prop:"make_number",label:"预约单号"},{prop:"doc_name",label:"预约医师"},{prop:"dep_name",label:"所属科室"},{prop:"make_date",label:"预约日期",columnType:"slot",slotName:"formatDate"},{prop:"make_frame",label:"预约时间"},{prop:"patient_name",label:"患者姓名"},{prop:"patient_phone",label:"患者手机号",width:"120"},{prop:"status",label:"状态",columnType:"slot",slotName:"allStatus"},{label:"操作",columnType:"slot",slotName:"opt",width:"210"}],tableData:[],total:0,statuslist:[{id:"",name:"全部"},{id:1,name:"已取消"},{id:2,name:"失约"},{id:3,name:"已预约"},{id:4,name:"已登记"}],deplist:[]}},components:{FTable:l["a"],Pagination:s["a"]},created:function(){this._getRegisterListData()},methods:{handleSearch:function(){this.form.page=1,this._getRegisterListData()},_getRegisterListData:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var a,r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=Object(i["a"])({},t.form),e.next=4,Object(c["f"])(a);case 4:r=e.sent,n=r.data,n.data&&n.data.dep&&(t.deplist=n.data.dep),0!==n.code?(t.tableData=[],t.total=0):(n.data.reg.data.map((function(e,a){e.index=a+1+(t.form.page-1)*t.form.limit})),t.tableData=n.data.reg.data,t.total=n.data.reg.total);case 9:case"end":return e.stop()}}),e)})))()},resetRegisterForm:function(){this.$refs.form.resetFields(),this.form={docName:"",depName:"",regDate:"",regTime:"",status:"",phone:"",page:1,limit:10},this._getRegisterListData()},_toDetailPage:function(t,e){this.$isAuth("home/registerDetailPage")&&this.$router.push({path:"/home/registerDetailPage",query:{registerInfoId:t,status:e}})},_toRegisterPage:function(t){this.$isAuth("home/registerPage")&&this.$router.push({path:"/home/registerPage",query:{registerInfoId:t}})},handleSizeChangeFather:function(t){this.form.limit=t,this._getRegisterListData()},handleCurrentChangeFather:function(t){this.form.page=t,this._getRegisterListData()}}},d=u,p=(a("f4c1"),a("9ca4")),m=Object(p["a"])(d,r,n,!1,null,"10c87a72",null);e["default"]=m.exports},"325a":function(t,e,a){},dd82:function(t,e,a){"use strict";a.d(e,"f",(function(){return n})),a.d(e,"g",(function(){return i})),a.d(e,"h",(function(){return o})),a.d(e,"b",(function(){return l})),a.d(e,"c",(function(){return s})),a.d(e,"e",(function(){return c})),a.d(e,"d",(function(){return u})),a.d(e,"a",(function(){return d}));var r=a("bdd0"),n=function(t){return Object(r["a"])("post","/registrationList",t)},i=function(t){return Object(r["a"])("post","/registrationDetail",t)},o=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return 2===e?Object(r["a"])("get","/patientRegister",t):Object(r["a"])("post","/patientRegister",t)},l=function(t){return Object(r["a"])("post","/doctorCycle",t)},s=function(t){return Object(r["a"])("post","/editCycle",t)},c=function(t){return Object(r["a"])("post","/editCycle",t)},u=function(t){return Object(r["a"])("post","/editCycle",t)},d=function(t){return Object(r["a"])("post","/monthList",t)}},f4c1:function(t,e,a){"use strict";var r=a("325a"),n=a.n(r);n.a}}]);