(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-83e392fc"],{"0e77":function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"registerDetailPage"},[s("div",[s("span",{staticClass:"title"},[t._v("挂号详情")]),s("el-tag",{attrs:{size:"medium"}},[t._v(t._s(t.statusId))])],1),s("div",{ref:"leftBox",staticClass:"card-container Mg-T20"},[s("el-row",{staticClass:"card-row"},[s("el-col",{staticClass:"patient-box"},[s("el-card",[s("div",{staticClass:"info"},[t._v("患者信息")]),s("div",{staticClass:"ill-info-container"},[s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{span:12}},[s("p",[t._v(" 病历号： "),s("span",[t._v(t._s(t.registerDetailInfo.patient_number))])])]),s("el-col",{attrs:{span:12}},[s("p",[t._v(" 挂单号： "),s("span",[t._v(t._s(t.registerDetailInfo.make_number))])])])],1),s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{span:8}},[s("p",[s("i",{staticClass:"color-red"},[t._v("*")]),t._v(" 患者： "),s("span",[t._v(t._s(t.registerDetailInfo.patient_name))])])])],1),s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{span:8}},[s("p",[s("i",{staticClass:"color-red"},[t._v("*")]),t._v(" 年龄： "),s("span",[t._v(t._s(t.registerDetailInfo.patient_age))])])])],1),s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{span:8}},[s("p",[s("i",{staticClass:"color-red"},[t._v("*")]),t._v(" 性别： "),0==t.registerDetailInfo.patient_sex?s("span",[t._v("保密")]):1==t.registerDetailInfo.patient_sex?s("span",[t._v(" 男 ")]):s("span",[t._v("女")])])])],1),s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{span:8}},[s("p",[s("i",{staticClass:"color-red"},[t._v("*")]),t._v(" 电话： "),s("span",[t._v(t._s(t.registerDetailInfo.patient_phone))])])])],1),s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{span:12}},[s("p",[s("i",{staticClass:"color-red"},[t._v("*")]),t._v(" 身份证号： "),s("span",[t._v(t._s(t.registerDetailInfo.patient_id_card))])])])],1)],1)])],1),s("el-col",{staticClass:"register-box"},[s("el-card",{staticClass:"register-list Mg-L20",style:{height:t.height}},[s("div",{staticClass:"info"},[t._v("挂号信息")]),s("p",[t._v(" 医师姓名： "),s("span",[t._v(t._s(t.registerDetailInfo.doc_name))])]),s("p",[t._v(" 医师职称： "),s("span",[t._v(t._s(t.registerDetailInfo.grade_name))])]),s("p",[t._v(" 所属科室： "),s("span",[t._v(t._s(t.registerDetailInfo.dep_name))])]),s("p",[t._v(" 预约时间： "),s("span",[t._v(t._s(t.registerDetailInfo.make_frame))])]),s("p",[t._v(" 到达时间： "),s("span",[t._v(" "+t._s(t._f("allDateFormat")(t.registerDetailInfo.register_time))+" ")])])])],1)],1)],1),s("div",{staticClass:"btns Mg-T20"},[s("el-button",{attrs:{type:"primary"},on:{click:t._toRegisterList}},[t._v("返回")])],1)])},a=[],i=(s("6a61"),s("cf7f")),n=s("dd82"),o={data:function(){return{rid:null,registerDetailInfo:{},sta:this.$route.query.status,height:"auto"}},created:function(){this.rid=this.$route.query.registerInfoId,this._getRegisterDetailData()},computed:{statusId:function(){return 0==this.sta?"未付款":1==this.sta?"已取消":2==this.sta?"失约":3==this.sta?"已预约":4==this.sta?"已登记":void 0}},mounted:function(){var t=this;this.$nextTick((function(){t.height=t.$refs.leftBox.clientHeight-2+"px"}))},methods:{_getRegisterDetailData:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var s,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(n["g"])({regId:t.rid});case 2:s=e.sent,r=s.data,0!==r.code?t.$message.error(r.msg):t.registerDetailInfo=r.data;case 6:case"end":return e.stop()}}),e)})))()},_toRegisterList:function(){this.$router.push("/home/registerlist")}}},c=o,l=(s("2a912"),s("9ca4")),u=Object(l["a"])(c,r,a,!1,null,"639f51f4",null);e["default"]=u.exports},"2a912":function(t,e,s){"use strict";var r=s("3333"),a=s.n(r);a.a},3333:function(t,e,s){},dd82:function(t,e,s){"use strict";s.d(e,"f",(function(){return a})),s.d(e,"g",(function(){return i})),s.d(e,"h",(function(){return n})),s.d(e,"b",(function(){return o})),s.d(e,"c",(function(){return c})),s.d(e,"e",(function(){return l})),s.d(e,"d",(function(){return u})),s.d(e,"a",(function(){return _}));var r=s("bdd0"),a=function(t){return Object(r["a"])("post","/registrationList",t)},i=function(t){return Object(r["a"])("post","/registrationDetail",t)},n=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return 2===e?Object(r["a"])("get","/patientRegister",t):Object(r["a"])("post","/patientRegister",t)},o=function(t){return Object(r["a"])("post","/doctorCycle",t)},c=function(t){return Object(r["a"])("post","/editCycle",t)},l=function(t){return Object(r["a"])("post","/editCycle",t)},u=function(t){return Object(r["a"])("post","/editCycle",t)},_=function(t){return Object(r["a"])("post","/monthList",t)}}}]);