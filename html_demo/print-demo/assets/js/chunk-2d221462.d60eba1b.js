(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d221462"],{ca3a:function(e,a,t){"use strict";t.r(a);var l=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"remoteECG"},[t("el-card",[t("el-form",{ref:"form",attrs:{model:e.form,"label-width":"80px"}},[t("el-row",{attrs:{gutter:20}},[t("el-col",{attrs:{span:6}},[t("el-form-item",{attrs:{label:"患者姓名"}},[t("el-input",{attrs:{clearable:""},model:{value:e.form.name,callback:function(a){e.$set(e.form,"name",a)},expression:"form.name"}})],1)],1),t("el-col",{attrs:{span:6}},[t("el-form-item",{attrs:{label:"医生姓名"}},[t("el-input",{attrs:{clearable:""},model:{value:e.form.docname,callback:function(a){e.$set(e.form,"docname",a)},expression:"form.docname"}})],1)],1),t("el-col",{attrs:{span:6}},[t("el-form-item",{attrs:{label:"设备编号"}},[t("el-input",{attrs:{clearable:""},model:{value:e.form.number,callback:function(a){e.$set(e.form,"number",a)},expression:"form.number"}})],1)],1),t("el-col",{attrs:{span:6}},[t("div",[t("el-button",{attrs:{type:"primary"},on:{click:e.handleSearch}},[e._v("查询")]),t("el-button",{attrs:{plain:""},on:{click:e.resetForm}},[e._v("重置")])],1)])],1)],1)],1),t("el-card",{staticClass:"Mg-T20"},[t("f-table",{staticClass:"Mg-T20",attrs:{"table-label":e.tableLabel,"table-data":e.tableData},scopedSlots:e._u([{key:"formatDate",fn:function(a){return[e._v(" "+e._s(e._f("allDateFormat")(a.data.checkDate))+" ")]}}])})],1)],1)},r=[],o=t("0748"),n={data:function(){return{form:{name:"",docname:"",number:"",page:1,limit:10},tableLabel:[{type:"index",label:"序号",width:"50"},{prop:"name",label:"姓名"},{prop:"sex",label:"性别"},{prop:"age",label:"年龄"},{prop:"sendRoom",label:"送检科室"},{prop:"number",label:"检查号"},{prop:"checkDate",label:"检查日期",columnType:"slot",slotName:"formatDate",width:"120"},{prop:"checkDoc",label:"检查医生"},{prop:"info",label:"预警信息"},{prop:"status",label:"状态"},{label:"操作",columnType:"slot",slotName:"opt"}],tableData:[]}},components:{FTable:o["a"]},methods:{handleSearch:function(){this.form.page=1},resetForm:function(){this.$refs.form.resetFields(),this.form={name:"",phone:"",pNumber:"",ageStart:"",ageEnd:"",sex:"",page:1,limit:10}}}},s=n,m=t("9ca4"),c=Object(m["a"])(s,l,r,!1,null,"2675a75a",null);a["default"]=c.exports}}]);