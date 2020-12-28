(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1b3e7694"],{1799:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-pagination",{attrs:{background:"",layout:"total,prev, pager, next",total:e.total,"page-size":e.per_page,"current-page":e.current_page},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)},r=[],i=(a("513c"),{props:{current_page:{type:Number,default:1},per_page:{type:Number,default:10},total:{type:Number,default:0}},methods:{handleSizeChange:function(e){this.$emit("handleSizeChangeSon",e)},handleCurrentChange:function(e){this.$emit("handleCurrentChangeSon",e)}}}),l=i,o=a("9ca4"),s=Object(o["a"])(l,n,r,!1,null,null,null);t["a"]=s.exports},"9b3b":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"imageOurReport"},[a("el-card",[a("el-form",{ref:"form",attrs:{model:e.form,"label-width":"80px"}},[a("el-row",[a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{label:"检查时间"}},[a("el-date-picker",{staticStyle:{width:"auto","min-width":"100%"},attrs:{type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","value-format":"yyyy-MM-dd"},on:{change:e.onChnageDate},model:{value:e.dateRange,callback:function(t){e.dateRange=t},expression:"dateRange"}})],1)],1),a("el-col",{attrs:{span:4}},[a("el-form-item",{attrs:{label:"患者姓名"}},[a("el-input",{attrs:{clearable:""},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1)],1),a("el-col",{attrs:{span:4}},[a("el-form-item",{attrs:{label:"检查号"}},[a("el-input",{attrs:{clearable:""},model:{value:e.form.number,callback:function(t){e.$set(e.form,"number",t)},expression:"form.number"}})],1)],1),a("el-col",{attrs:{span:4}},[a("el-form-item",{attrs:{label:"检查类别"}},[a("el-select",{attrs:{placeholder:""},model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}},e._l(e.statuslist,(function(e,t){return a("el-option",{key:t,attrs:{label:e,value:e}})})),1)],1)],1),a("el-col",{attrs:{span:4}},[a("div",{staticClass:"Mg-L20"},[a("el-button",{attrs:{type:"primary"},on:{click:e.handleSearch}},[e._v("查询")]),a("el-button",{attrs:{plain:""},on:{click:e.resetForm}},[e._v("重置")])],1)])],1)],1)],1),a("el-tabs",{on:{"tab-click":e.handleClick},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"全部",name:""}}),a("el-tab-pane",{attrs:{label:"待写报告",name:"1"}}),a("el-tab-pane",{attrs:{label:"待审核",name:"2"}}),a("el-tab-pane",{attrs:{label:"待确认",name:"3"}}),a("el-tab-pane",{attrs:{label:"审核驳回",name:"4"}}),a("el-tab-pane",{attrs:{label:"已确认",name:"6"}})],1),a("el-card",{staticClass:"Mg-T20"},[a("f-table",{attrs:{"table-label":e.tableLabel,"table-data":e.tableData},scopedSlots:e._u([{key:"info",fn:function(t){return[e._v(" "+e._s(t.data.real_name)+"/"+e._s("F"==t.data.sex?"女":"男")+"/"+e._s(t.data.age)+" ")]}},{key:"status_e",fn:function(t){return[e._v(" "+e._s(["检查完成","初步报告","审核通过","审核驳回","修改报告","已完成"][t.data.examine_status-1])+" ")]}},{key:"formatDate",fn:function(t){return[e._v(" "+e._s(e._f("dateFormat")(t.data.examine_time))+" ")]}},{key:"arrive",fn:function(){return[e._v("已到达")]},proxy:!0},{key:"report",fn:function(t){return[e._v(" "+e._s(t.data.write.doc_name)+"/"+e._s(e._f("momentDate")(t.data.write.create_time,"YYYY-MM-DD"))+" ")]}},{key:"examine",fn:function(t){return[e._v(" "+e._s(t.data.audit.doc_name)+"/"+e._s(e._f("momentDate")(t.data.audit.create_time,"YYYY-MM-DD"))+" ")]}},{key:"confirm",fn:function(t){return[e._v(" "+e._s(t.data.query.doc_name)+"/"+e._s(e._f("momentDate")(t.data.query.create_time,"YYYY-MM-DD"))+" ")]}},{key:"opt",fn:function(t){return[a("el-button",{attrs:{type:"primary",size:"mini",plain:""},on:{click:function(a){return e.handleUserMsg(t.data.mutual_id,1)}}},[e._v(" 完善患者信息 ")]),a("el-button",{attrs:{type:"primary",size:"mini",plain:""},on:{click:function(a){return e._toPatientInfoPage(t.data.mutual_id,4)}}},[e._v(" 影像 ")]),a("el-button",{attrs:{type:"primary",size:"mini",plain:""},on:{click:function(a){return e._toPatientInfoPage(t.data.mutual_id,2,t.data.examine_status)}}},[e._v(" "+e._s(1==t.data.examine_status?"写报告":2==t.data.examine_status?"审核报告":3==t.data.examine_status?"确认报告":4==t.data.examine_status?"修改报告":5==t.data.examine_status?"审核报告":"查看报告")+" ")])]}}])}),a("pagination",{attrs:{total:e.total,current_page:e.form.page,per_page:e.form.limit},on:{handleSizeChangeSon:e.handleSizeChangeFather,handleCurrentChangeSon:e.handleCurrentChangeFather}})],1)],1)},r=[],i=(a("2eeb"),a("053b"),a("e793")),l=(a("6a61"),a("cf7f")),o=a("0748"),s=a("1799"),m=a("1103"),u={data:function(){return{form:{name:"",number:"",type:"",page:1,limit:10,ktime:"",jtime:""},dateRange:[],statuslist:[],activeName:"",tableLabel:[{prop:"index",label:"序号",width:"50"},{prop:"dcm_patient_id",label:"检查号"},{label:"患者信息",columnType:"slot",slotName:"info",width:"150"},{prop:"examine_status",label:"检查状态",columnType:"slot",slotName:"status_e"},{prop:"examine_type",label:"检查类别"},{prop:"examine_time",label:"检查时间",columnType:"slot",slotName:"formatDate",width:"120"},{prop:"examine_part",label:"检查部位"},{label:"影像",columnType:"slot",slotName:"arrive"},{label:"报告信息",columnType:"slot",slotName:"report",width:"180"},{label:"审核信息",columnType:"slot",slotName:"examine",width:"180"},{label:"确认信息",columnType:"slot",slotName:"confirm",width:"180"},{label:"操作",columnType:"slot",slotName:"opt",width:"300",fixed:"right"}],tableData:[],total:0}},components:{FTable:o["a"],Pagination:s["a"]},created:function(){this._getImageOurReportListApi()},methods:{handleSearch:function(){this.form.page=1,this._getImageOurReportListApi()},onChnageDate:function(e){if(!e||!e.length)return e=[],this.form.ktime="",void(this.form.jtime="");e&&e.length&&(this.form.ktime=e[0],this.form.jtime=e[1])},_getImageOurReportListApi:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=1,t.next=5,Object(m["f"])(Object(i["a"])(Object(i["a"])({},e.form),{},{status:0==e.activeName?"":e.activeName}));case 5:a=t.sent,n=a.data,0!==n.code?(e.tableData=[],e.total=0):(n.data.list.map((function(t,a){t.index=a+1+(e.form.page-1)*e.form.limit})),e.tableData=n.data.list,e.total=n.data.count||0,e.statuslist=n.data.select),t.next=13;break;case 11:t.prev=11,t.t0=t["catch"](1);case 13:case"end":return t.stop()}}),t,null,[[1,11]])})))()},handleClick:function(e,t){this.form.name="",this.form.number="",this.form.type="",this.form.page=1,this._getImageOurReportListApi()},handleUserMsg:function(e,t){this.$isAuth("home/repoerUser")&&this.$router.push({path:"/home/imageOurReport/table/imagePatientInfoPage",query:{patientInfoId:e,flag:t}})},_toPatientInfoPage:function(e,t,a){1==a||4==a?this.$isAuth("home/imageOurReport/table/addAndEditor")&&this.outPathDetail(e,t):2==a||5==a?this.$isAuth("home/imageOurReport/table/Audit")&&this.outPathDetail(e,t):3==a?this.$isAuth("home/imageOurReport/table/hAffirm")&&this.outPathDetail(e,t):this.outPathDetail(e,t)},outPathDetail:function(e,t){this.$router.push({path:"/home/imageOurReport/table/imagePatientInfoPage",query:{patientInfoId:e,flag:t}})},handleSizeChangeFather:function(e){this.form.limit=e,this._getImageOurReportListApi()},handleCurrentChangeFather:function(e){this.form.page=e,this._getImageOurReportListApi()},resetForm:function(){this.$refs.form.resetFields(),this.form={name:"",number:"",type:"",page:1,limit:10,ktime:"",jtime:""},this.dateRange=[],this._getImageOurReportListApi()}}},c=u,p=(a("e9d0"),a("9ca4")),f=Object(p["a"])(c,n,r,!1,null,"17e6e175",null);t["default"]=f.exports},b961:function(e,t,a){},e9d0:function(e,t,a){"use strict";var n=a("b961"),r=a.n(n);r.a}}]);