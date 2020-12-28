(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7d4a9f8e"],{"432d":function(e,t,r){"use strict";var a=r("7714"),n=r.n(a);n.a},"72c6":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"registerPage"},[r("title-common",[r("span",{attrs:{slot:"title"},slot:"title"},[e._v("登记")])]),r("div",[r("el-row",{staticClass:"card-container"},[r("el-col",{attrs:{span:16}},[r("el-card",[r("el-form",{ref:"registerFormRef",attrs:{model:e.registerForm,rules:e.registerFormRules,"label-width":"80px"}},[r("el-row",[r("el-col",{attrs:{span:9}},[r("el-form-item",{attrs:{label:"病历号",prop:"patient_number"}},[r("el-input",{attrs:{disabled:""},model:{value:e.registerForm.patient_number,callback:function(t){e.$set(e.registerForm,"patient_number",t)},expression:"registerForm.patient_number"}})],1)],1),r("el-col",{attrs:{span:9}},[r("el-form-item",{attrs:{label:"挂单单号",prop:"make_number"}},[r("span",[e._v(e._s(e.registerForm.make_number))])])],1)],1),r("el-row",[r("el-col",{attrs:{span:9}},[r("el-form-item",{attrs:{label:"姓名",prop:"patient_name"}},[r("el-input",{attrs:{clearable:""},model:{value:e.registerForm.patient_name,callback:function(t){e.$set(e.registerForm,"patient_name",t)},expression:"registerForm.patient_name"}})],1)],1),r("el-col",{attrs:{span:6}},[r("el-form-item",{attrs:{label:"年龄",prop:"patient_age"}},[r("el-input",{attrs:{clearable:""},model:{value:e.registerForm.patient_age,callback:function(t){e.$set(e.registerForm,"patient_age",t)},expression:"registerForm.patient_age"}})],1)],1),r("el-col",{attrs:{span:9}},[r("el-form-item",{attrs:{label:"性别",prop:"patient_sex"}},[r("el-radio-group",{model:{value:e.registerForm.patient_sex,callback:function(t){e.$set(e.registerForm,"patient_sex",t)},expression:"registerForm.patient_sex"}},[r("el-radio",{attrs:{label:0}},[e._v("保密")]),r("el-radio",{attrs:{label:1}},[e._v("男")]),r("el-radio",{attrs:{label:2}},[e._v("女")])],1)],1)],1)],1),r("el-row",[r("el-col",{attrs:{span:9}},[r("el-form-item",{attrs:{label:"手机号",prop:"patient_phone"}},[r("el-input",{attrs:{clearable:""},model:{value:e.registerForm.patient_phone,callback:function(t){e.$set(e.registerForm,"patient_phone",t)},expression:"registerForm.patient_phone"}})],1)],1)],1),r("el-row",[r("el-col",{attrs:{span:9}},[r("el-form-item",{attrs:{label:"身份证号",prop:"patient_id_card"}},[r("el-input",{attrs:{clearable:""},model:{value:e.registerForm.patient_id_card,callback:function(t){e.$set(e.registerForm,"patient_id_card",t)},expression:"registerForm.patient_id_card"}})],1)],1)],1)],1)],1)],1),r("el-col",{attrs:{span:8}},[r("el-card",{staticClass:"register-list"},[r("div",{staticClass:"info"},[e._v("挂号信息")]),r("p",[e._v(" 医师姓名： "),r("span",[e._v(e._s(e.registerForm.doc_name))])]),r("p",[e._v(" 医师职称： "),r("span",[e._v(e._s(e.registerForm.grade_name))])]),r("p",[e._v(" 所属科室： "),r("span",[e._v(e._s(e.registerForm.dep_name))])]),r("p",[e._v(" 预约时间： "),r("span",[e._v(e._s(e.registerForm.make_frame))])]),r("p",[e._v(" 到达时间： "),r("span",[e._v(e._s(e._f("allDateFormat")(e.registerForm.register_time)))])])])],1)],1)],1),r("div",{staticClass:"btns"},[r("el-button",{attrs:{type:"primary"},on:{click:e._saveRegisterData}},[e._v("保存并登记")]),r("el-button",{attrs:{plain:""},on:{click:e.resetSaveRegister}},[e._v("取消")])],1)],1)},n=[],i=(r("6a61"),r("cf7f")),s=r("a041"),o=r("dd82"),l={data:function(){var e=function(e,t,r){var a=/^1[3456789]\d{9}$/;a.test(t)?r():r(new Error("手机号格式不正确！"))},t=function(e,t,r){var a=/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;a.test(t)?r():r(new Error("身份账号格式不正确！"))};return{registerForm:{},patientName:"",patientPhone:"",patientIdCard:"",patientAge:"",patientSex:"",registerFormRules:{patient_name:[{required:!0,message:"请输入姓名",trigger:"blur"}],patient_age:[{required:!0,message:"请输入年龄",trigger:"blur"}],patient_sex:[{required:!0,message:"请输入性别",trigger:"blur"}],patient_phone:[{required:!0,message:"请输入手机号",trigger:"blur"},{validator:e,trigger:"blur"}],patient_id_card:[{required:!0,message:"请输入身份证号",trigger:"blur"},{validator:t,trigger:"blur"}]},rid:null}},components:{TitleCommon:s["a"]},created:function(){this.rid=this.$route.query.registerInfoId,this._getRegisterDetailData()},methods:{_getRegisterDetailData:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(o["h"])({regId:e.rid},2);case 2:r=t.sent,a=r.data,0!==a.code?e.$message.error(a.msg):e.registerForm=a.data;case 6:case"end":return t.stop()}}),t)})))()},_saveRegisterData:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(o["h"])({regId:e.rid,patientName:e.registerForm.patient_name,patientPhone:e.registerForm.patient_phone,patientIdCard:e.registerForm.patient_id_card,patientAge:e.registerForm.patient_age,patientSex:e.registerForm.patient_sex});case 2:r=t.sent,a=r.data,0!==a.code?e.$message.error(a.msg):(e.$message.success("保存并登记挂号信息成功！"),e.$router.go(-1));case 6:case"end":return t.stop()}}),t)})))()},resetSaveRegister:function(){this.$router.go(-1)}}},c=l,p=(r("432d"),r("9ca4")),u=Object(p["a"])(c,a,n,!1,null,"0b0adfde",null);t["default"]=u.exports},7714:function(e,t,r){},8775:function(e,t,r){},a041:function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("span",{staticClass:"title"},[e._t("title")],2),e._t("tag")],2)},n=[],i=(r("f343"),r("9ca4")),s={},o=Object(i["a"])(s,a,n,!1,null,"2a454133",null);t["a"]=o.exports},dd82:function(e,t,r){"use strict";r.d(t,"f",(function(){return n})),r.d(t,"g",(function(){return i})),r.d(t,"h",(function(){return s})),r.d(t,"b",(function(){return o})),r.d(t,"c",(function(){return l})),r.d(t,"e",(function(){return c})),r.d(t,"d",(function(){return p})),r.d(t,"a",(function(){return u}));var a=r("bdd0"),n=function(e){return Object(a["a"])("post","/registrationList",e)},i=function(e){return Object(a["a"])("post","/registrationDetail",e)},s=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return 2===t?Object(a["a"])("get","/patientRegister",e):Object(a["a"])("post","/patientRegister",e)},o=function(e){return Object(a["a"])("post","/doctorCycle",e)},l=function(e){return Object(a["a"])("post","/editCycle",e)},c=function(e){return Object(a["a"])("post","/editCycle",e)},p=function(e){return Object(a["a"])("post","/editCycle",e)},u=function(e){return Object(a["a"])("post","/monthList",e)}},f343:function(e,t,r){"use strict";var a=r("8775"),n=r.n(a);n.a}}]);