(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6071bd0e","chunk-26a25e7f"],{"1c93":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"imagePatientInfoPage"},[a("title-common",[a("span",{attrs:{slot:"title"},slot:"title"},[e._v("报告详情")]),e.form.examine_status?a("el-tag",{attrs:{slot:"tag",size:"medium"},slot:"tag"},[e._v(" 检查状态："+e._s(1==e.form.examine_status?"检查完毕 影像已到达！":2==e.form.examine_status?"初步报告 影像已到达!":3==e.form.examine_status?"审核报告 影像已到达!":4==e.form.examine_status?"审核驳回 影像已到达!":5==e.form.examine_status?"修改报告":"已完成")+" ")]):e._e()],1),a("el-tabs",{staticClass:"Mg-T20 hz-tabs",on:{"tab-click":e.handleClick},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"检查信息",name:"1"}},[a("el-form",{ref:"formRef",attrs:{model:e.form,rules:e.formRules,"label-width":"100px"}},[a("panel-common",[a("div",{attrs:{slot:"info-title"},slot:"info-title"},[e._v("患者信息")]),a("div",{staticClass:"info-content Mg-T20",attrs:{slot:"info-content"},slot:"info-content"},[a("el-row",[a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"登记时间"}},[a("span",{staticClass:"span"},[e._v(" "+e._s(e._f("dateFormat")(e.form.create_time))+" ")])])],1),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"患者身份证号","label-width":"120px"}},[a("el-input",{attrs:{clearable:""},model:{value:e.form.id_card,callback:function(t){e.$set(e.form,"id_card",t)},expression:"form.id_card"}})],1)],1)],1),a("el-row",[a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"患者姓名",prop:"name"}},[a("el-input",{attrs:{clearable:""},model:{value:e.form.real_name,callback:function(t){e.$set(e.form,"real_name",t)},expression:"form.real_name"}})],1)],1),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"患者手机","label-width":"120px"}},[a("el-input",{attrs:{clearable:""},model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone",t)},expression:"form.phone"}})],1)],1)],1),a("el-row",[a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"患者性别",prop:"sex"}},[a("el-radio-group",{model:{value:e.form.sex,callback:function(t){e.$set(e.form,"sex",t)},expression:"form.sex"}},[a("el-radio",{attrs:{label:"M"}},[e._v("男")]),a("el-radio",{attrs:{label:"F"}},[e._v("女")])],1)],1)],1),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"患者年龄",prop:"age","label-width":"120px"}},[a("el-input",{attrs:{clearable:""},model:{value:e.form.age,callback:function(t){e.$set(e.form,"age",t)},expression:"form.age"}})],1)],1)],1),a("el-row",[a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"生日",prop:"birthday"}},[a("el-input",{attrs:{clearable:""},model:{value:e.form.birthday,callback:function(t){e.$set(e.form,"birthday",t)},expression:"form.birthday"}})],1)],1)],1)],1)]),a("panel-common",[a("div",{attrs:{slot:"info-title"},slot:"info-title"},[e._v("检查信息")]),a("div",{staticClass:"info-content Mg-T20",attrs:{slot:"info-content"},slot:"info-content"},[a("el-row",[a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"检查号"}},[a("span",{staticClass:"span"},[e._v(e._s(e.form.dcm_patient_id))])])],1),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"检查类别"}},[a("span",{staticClass:"span"},[e._v(e._s(e.form.examine_type))])])],1),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"检查时间"}},[a("span",{staticClass:"span"},[e._v(" "+e._s(e._f("dateFormat")(e.form.examine_time))+" ")])])],1),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"扫描方式"}},[a("el-autocomplete",{staticClass:"inline-input",staticStyle:{width:"100%"},attrs:{size:"medium","fetch-suggestions":e.searchKS,placeholder:"请输入扫描方式"},on:{select:e.handleKS},model:{value:e.form.scan_type,callback:function(t){e.$set(e.form,"scan_type",t)},expression:"form.scan_type"}})],1)],1),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"检查部位"}},[a("el-autocomplete",{staticClass:"inline-input",staticStyle:{width:"100%"},attrs:{size:"medium","fetch-suggestions":e.searchBW,placeholder:"请输入检查部位"},on:{select:e.handleBW},model:{value:e.form.examine_part,callback:function(t){e.$set(e.form,"examine_part",t)},expression:"form.examine_part"}})],1)],1),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"申请科室"}},[a("el-autocomplete",{staticClass:"inline-input",staticStyle:{width:"100%"},attrs:{size:"medium","fetch-suggestions":e.searchkeshi,placeholder:"请输入科室"},on:{select:e.handlekeshi},model:{value:e.form.discipline,callback:function(t){e.$set(e.form,"discipline",t)},expression:"form.discipline"}})],1)],1)],1),a("el-row",[a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"检查设备"}},[a("el-select",{model:{value:e.form.examine_devices,callback:function(t){e.$set(e.form,"examine_devices",t)},expression:"form.examine_devices"}},e._l(e.devicesList,(function(e,t){return a("el-option",{key:t,attrs:{label:e,value:e}})})),1)],1)],1),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"检查项目"}},[a("el-select",{model:{value:e.form.examine_items,callback:function(t){e.$set(e.form,"examine_items",t)},expression:"form.examine_items"}},e._l(e.itemsList,(function(e,t){return a("el-option",{key:t,attrs:{label:e,value:e}})})),1)],1)],1)],1),a("el-row",[a("el-col",[a("el-form-item",{attrs:{label:"检查备注"}},[a("el-input",{attrs:{type:"textarea",rows:5},model:{value:e.form.examine_remark,callback:function(t){e.$set(e.form,"examine_remark",t)},expression:"form.examine_remark"}})],1)],1)],1)],1)])],1),a("div",{staticClass:"btns Mg-T20"},[a("el-button",{attrs:{plain:""},on:{click:function(t){return e.$router.go(-1)}}},[e._v("返回")]),a("el-button",{attrs:{type:"primary",disabled:e.isBtn,loading:e.isBtn},on:{click:e.editImagePatientInfoDetail}},[e._v(" 保存 ")])],1)],1),a("el-tab-pane",{attrs:{label:e.reportName,name:"2"}},[a("componentReport",{attrs:{hosInfo:e.form,report_config:e.report_config},on:{refresh:e.getImagePatientInfoDetail}})],1),a("el-tab-pane",{attrs:{label:"痕迹",name:"3"}},[a("componentMark",{attrs:{study_id:e.form.study_id}})],1),a("el-tab-pane",{attrs:{label:"影像",name:"4"}},[a(e.yxImage,{tag:"component",attrs:{imageUrl:e.form.image_url}}),a("div",{staticClass:"btns Mg-T20"},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.$router.go(-1)}}},[e._v("返回")])],1)],1)],1)],1)},i=[],s=(a("dbb3"),a("ecb4"),a("2eeb"),a("513c"),a("e18c"),a("e35a"),a("1c2e"),a("5e9f"),a("0d7a"),a("e793")),n=a("5748"),l=(a("6a61"),a("cf7f")),o=a("a041"),m=a("2a94"),c=a("7fc1"),u=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"imagePatientInfoPage"},[a("el-card",{staticClass:"table-card"},[a("f-table",{attrs:{"table-label":e.tableLabel,"table-data":e.tableData,"empty-text":e.message},scopedSlots:e._u([{key:"type",fn:function(t){return[e._v(" "+e._s(2==t.data.report_type?"写报告":3==t.data.report_type?"审核报告":4==t.data.report_type?"审核驳回":5==t.data.report_type?"修改报告":6==t.data.report_type?"确认报告":"未写报告")+" ")]}},{key:"formatDate",fn:function(t){return[e._v(" "+e._s(e._f("dateFormat")(t.data.report_time))+" ")]}},{key:"exam",fn:function(t){return[a("div",{domProps:{innerHTML:e._s(t.data.examine_see)}})]}},{key:"impr",fn:function(t){return[a("div",{domProps:{innerHTML:e._s(t.data.impressive)}})]}}])})],1),a("div",{staticClass:"btns Mg-T20"},[a("el-button",{attrs:{type:"primary"},on:{click:e.back}},[e._v("返回")])],1)],1)},f=[],p=a("0748"),d=a("1103"),_={props:{study_id:{type:String}},data:function(){return{tableLabel:[{prop:"report_type",label:"操作类别",columnType:"slot",slotName:"type",width:"150"},{prop:"doc_name",label:"医生姓名",width:"150"},{prop:"report_time",label:"日期",columnType:"slot",slotName:"formatDate",width:"180"},{prop:"examine_see",label:"检查所见",columnType:"slot",slotName:"exam"},{prop:"impressive",label:"诊断意见",columnType:"slot",slotName:"impr"}],tableData:[],message:""}},components:{FTable:p["a"]},watch:{study_id:{handler:function(e){e&&this.getMarkList()},immediate:!0}},methods:{getMarkList:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(d["h"])({mutual_id:e.$route.query.patientInfoId,study_id:e.study_id});case 2:a=t.sent,r=a.data,0==r.code?e.tableData=r.data:40025==r.code?e.message=r.msg:e.message="暂无数据";case 5:case"end":return t.stop()}}),t)})))()},back:function(){this.$router.push("/home/imageOurReport")}}},b=_,g=(a("ee01"),a("9ca4")),v=Object(g["a"])(b,u,f,!1,null,"6bd2a626",null),h=v.exports,x={components:{TitleCommon:o["a"],PanelCommon:m["a"],componentImage:c["default"],componentMark:h,componentReport:function(){return a.e("chunk-f1dbb050").then(a.bind(null,"9d26"))}},data:function(){return{activeName:"1",form:{create_time:"",id_card:"",real_name:"",phone:"",sex:"",age:"",birthday:"",dcm_patient_id:"",examine_type:"",examine_time:"",scan_type:"",examine_part:"",discipline:"",examine_devices:"",examine_items:"",examine_remark:"",examine_status:1},formRules:{real_name:[{required:!0,message:"请输入患者姓名",trigger:"blur"}],sex:[{required:!0,message:"请选择患者性别",trigger:"change"}],age:[{required:!0,message:"请输入患者年龄",trigger:"blur"}],birthday:[{required:!0,message:"请输入生日",trigger:"blur"}]},smList:[],itemsList:[],devicesList:[],partList:[],ksList:[],report_config:[],yxImage:null,isBtn:!1}},computed:{reportName:function(){var e=this.form.examine_status,t=1==e?"写报告":2==e?"审核报告":3==e?"确认报告":4==e?"修改报告":5==e?"审核报告":6==e?"已完成":"查看报告";return t}},created:function(){var e=this.$route.query.flag;if(e){var t=Number(e);isNaN(t)||(t<=4&&0!=t?(4===t&&(this.yxImage="componentImage"),this.activeName=t.toString()):this.activeName="1")}this.docId=window.localStorage.getItem("did"),this.tid=this.$route.query.patientInfoId,this.getImagePatientInfoDetail()},methods:{getImagePatientInfoDetail:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){var a,r,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=3,Object(d["g"])({mutual_id:e.tid});case 3:a=t.sent,r=a.data,0!==r.code?e.$message.error(r.msg):(e.form=r.data.list,e.report_config=r.data.report_config,i=Object(n["a"])(r.data.exam),i.map((function(t){if(2==t.field_type&&t.field_value){var a=t.field_value.split(";"),r=[];a.map((function(e){r.push({value:e})})),e.partList=r}if(3==t.field_type&&t.field_value&&(e.devicesList=t.field_value.split(";")),4==t.field_type&&t.field_value&&(e.itemsList=t.field_value.split(";")),5==t.field_type&&t.field_value){var i=t.field_value.split(";"),s=[];i.map((function(e){s.push({value:e})})),e.smList=s}if(99==t.field_type&&t.field_value){var n=t.field_value.split(";"),l=[];n.map((function(e){l.push({value:e})})),e.ksList=l}})));case 7:case"end":return t.stop()}}),t)})))()},handleClick:function(e,t){this.$router.replace("/home/imageOurReport/table/imagePatientInfoPage?patientInfoId="+this.tid+"&flag="+this.activeName),this.yxImage||"4"!=this.activeName||(this.yxImage="componentImage")},editImagePatientInfoDetail:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){var a,r,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.form.real_name){t.next=3;break}return e.$message.error("请完善患者姓名"),t.abrupt("return");case 3:if(e.form.sex){t.next=6;break}return e.$message.error("请完善患者性别"),t.abrupt("return");case 6:if(e.form.age){t.next=9;break}return e.$message.error("请完善患者年龄"),t.abrupt("return");case 9:if(e.form.birthday){t.next=12;break}return e.$message.error("请完善生日"),t.abrupt("return");case 12:return e.isBtn=!0,a=Object(s["a"])({},e.form),e.$delete(a,"image_url"),e.$delete(a,"dcm_patient_id"),e.$delete(a,"write"),e.$delete(a,"audit"),e.$delete(a,"query"),t.prev=19,t.next=22,Object(d["d"])(Object(s["a"])(Object(s["a"])({},a),{},{examine_number:e.form.dcm_patient_id,mutual_id:e.tid,did:e.docId,examine_status:e.form.examine_status,inpatient_area:e.form.inpatient_area,in_hos_number:e.form.in_hos_number,bed_number:e.form.bed_number,examine_see:e.form.examine_see,impressive:e.form.impressive}));case 22:r=t.sent,i=r.data,0==i.code?(e.$message.success("保存成功！"),e.getImagePatientInfoDetail(),e.isBtn=!1):(e.$message.error(i.msg),e.isBtn=!1),t.next=32;break;case 28:t.prev=28,t.t0=t["catch"](19),e.$message.error("服务器错误，保存失败！"),e.isBtn=!1;case 32:case"end":return t.stop()}}),t,null,[[19,28]])})))()},searchKS:function(e,t){var a=this.smList,r=e?a.filter(this.createFilter(e)):a;t(r)},createFilter:function(e){return function(t){return t.value.indexOf(e)>-1}},handleKS:function(e){this.form.scan_type=e.value},searchBW:function(e,t){var a=this.partList,r=e?a.filter(this.createFilter(e)):a;t(r)},handleBW:function(e){this.form.examine_part=e.value},searchkeshi:function(e,t){var a=this.ksList,r=e?a.filter(this.createFilter(e)):a;t(r)},handlekeshi:function(e){this.form.discipline=e.value}}},y=x,k=(a("d488"),Object(g["a"])(y,r,i,!1,null,"2cd0dfd2",null));t["default"]=k.exports},"6bb9":function(e,t,a){"use strict";var r=a("9b6c"),i=a.n(r);i.a},"7fc1":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"imagesMsg"},[a("div",{staticClass:"imagesMsg-content"},[a("iframe",{attrs:{src:e.imageUrl,frameborder:"0",allowfullscreen:""}})])])},i=[],s={props:{imageUrl:{type:String}}},n=s,l=(a("6bb9"),a("9ca4")),o=Object(l["a"])(n,r,i,!1,null,"2b706c7c",null);t["default"]=o.exports},8775:function(e,t,a){},"89ab":function(e,t,a){},"9b6c":function(e,t,a){},a041:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("span",{staticClass:"title"},[e._t("title")],2),e._t("tag")],2)},i=[],s=(a("f343"),a("9ca4")),n={},l=Object(s["a"])(n,r,i,!1,null,"2a454133",null);t["a"]=l.exports},d120:function(e,t,a){},d488:function(e,t,a){"use strict";var r=a("d120"),i=a.n(r);i.a},ee01:function(e,t,a){"use strict";var r=a("89ab"),i=a.n(r);i.a},f343:function(e,t,a){"use strict";var r=a("8775"),i=a.n(r);i.a}}]);