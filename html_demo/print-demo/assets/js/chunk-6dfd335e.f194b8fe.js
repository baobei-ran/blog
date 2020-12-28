(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6dfd335e"],{"43eb":function(e,t,i){"use strict";var a=i("f12d"),s=i.n(a);s.a},"7f63":function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"applicationRemoteDetailPageEditPage",attrs:{"data-sex":e.test}},[i("el-form",{ref:"formRef",attrs:{model:e.form,rules:e.formRules,"label-width":"100px"}},[i("el-row",[i("el-col",{attrs:{span:16}},[i("panel-common",[i("div",{attrs:{slot:"info-title"},slot:"info-title"},[e._v("检查信息")]),i("div",{staticClass:"info-content",attrs:{slot:"info-content"},slot:"info-content"},[i("el-row",[i("el-col",{attrs:{span:8}},[i("el-form-item",{attrs:{label:"患者姓名：",prop:"name"}},[i("el-input",{attrs:{clearable:""},model:{value:e.form.real_name,callback:function(t){e.$set(e.form,"real_name",t)},expression:"form.real_name"}})],1)],1),i("el-col",{attrs:{span:8}},[i("el-form-item",{attrs:{label:"患者手机：",prop:"phone"}},[i("el-input",{attrs:{clearable:""},model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone",t)},expression:"form.phone"}})],1)],1)],1),i("el-row",[i("el-col",{attrs:{span:8}},[i("el-form-item",{attrs:{label:"性别：",prop:"sex"}},[i("el-radio-group",{model:{value:e.form.sex,callback:function(t){e.$set(e.form,"sex",t)},expression:"form.sex"}},[i("el-radio",{attrs:{label:"M"}},[e._v("男")]),i("el-radio",{attrs:{label:"F"}},[e._v("女")])],1)],1)],1),i("el-col",{attrs:{span:8}},[i("el-form-item",{attrs:{label:"年龄：",prop:"age"}},[i("el-input",{attrs:{clearable:""},model:{value:e.form.age,callback:function(t){e.$set(e.form,"age",t)},expression:"form.age"}})],1)],1),i("el-col",{attrs:{span:8}},[i("el-form-item",{attrs:{label:"生日："}},[i("el-input",{attrs:{clearable:""},model:{value:e.form.birthday,callback:function(t){e.$set(e.form,"birthday",t)},expression:"form.birthday"}})],1)],1)],1),i("el-row",[i("el-col",{attrs:{span:8}},[i("el-form-item",{attrs:{label:"检查设备:"}},[i("el-select",{model:{value:e.form.examine_devices,callback:function(t){e.$set(e.form,"examine_devices",t)},expression:"form.examine_devices"}},e._l(e.examine_devicesList,(function(e,t){return i("el-option",{key:t,attrs:{label:e,value:e}})})),1)],1)],1),i("el-col",{attrs:{span:8}},[i("el-form-item",{attrs:{label:"检查部位:"}},[i("el-select",{model:{value:e.form.examine_part,callback:function(t){e.$set(e.form,"examine_part",t)},expression:"form.examine_part"}},e._l(e.examine_partList,(function(e,t){return i("el-option",{key:t,attrs:{label:e,value:e}})})),1)],1)],1),i("el-col",{attrs:{span:8}},[i("el-form-item",{attrs:{label:"检查项目:"}},[i("el-select",{model:{value:e.form.examine_items,callback:function(t){e.$set(e.form,"examine_items",t)},expression:"form.examine_items"}},e._l(e.examine_itemsList,(function(e,t){return i("el-option",{key:t,attrs:{label:e,value:e}})})),1)],1)],1)],1),i("el-row",[i("el-col",{attrs:{span:8}},[i("el-form-item",{attrs:{label:" 检查号："}},[i("span",{staticClass:"Pd-L5"},[e._v(e._s(e.form.examine_number))])])],1),i("el-col",{attrs:{span:8}},[i("el-form-item",{attrs:{label:" 检查类别："}},[i("span",[e._v(e._s(e.form.examine_type))])])],1),i("el-col",{attrs:{span:8}},[i("el-form-item",{attrs:{label:" 检查时间："}},[i("span",[e._v(e._s(e._f("dateFormat")(e.form.examine_time)))])])],1)],1),i("el-row",[i("el-col",{attrs:{span:8}},[i("el-form-item",{attrs:{label:"扫描方式:"}},[i("el-select",{model:{value:e.form.scan_type,callback:function(t){e.$set(e.form,"scan_type",t)},expression:"form.scan_type"}},e._l(e.scan_typeList,(function(e,t){return i("el-option",{key:t,attrs:{label:e,value:e}})})),1)],1)],1),i("el-col",{attrs:{span:8}})],1)],1)]),i("panel-common",[i("div",{attrs:{slot:"info-title"},slot:"info-title"},[e._v("患者病历信息")]),i("div",{staticClass:"info-content",attrs:{slot:"info-content"},slot:"info-content"},[i("el-row",[i("el-col",[i("el-form-item",{attrs:{label:"患者主诉：",prop:"main_tell","label-width":"120px"}},[i("el-input",{attrs:{type:"textarea",placeholder:"请填写患者主诉",rows:2},model:{value:e.form.main_tell,callback:function(t){e.$set(e.form,"main_tell",t)},expression:"form.main_tell"}})],1)],1)],1),i("el-row",[i("el-col",[i("el-form-item",{attrs:{label:"现病史：","label-width":"120px"}},[i("el-input",{attrs:{type:"textarea",placeholder:"请填写患者现病史",rows:2},model:{value:e.form.now_illness,callback:function(t){e.$set(e.form,"now_illness",t)},expression:"form.now_illness"}})],1)],1)],1),i("el-row",[i("el-col",[i("el-form-item",{attrs:{label:"既往病史：","label-width":"120px"}},[i("el-input",{attrs:{type:"textarea",placeholder:"请填写患者的既往病史",rows:2},model:{value:e.form.once_illness,callback:function(t){e.$set(e.form,"once_illness",t)},expression:"form.once_illness"}})],1)],1)],1),i("el-row",[i("el-col",[i("el-form-item",{attrs:{label:"其他健康指标：","label-width":"120px"}},[i("el-input",{attrs:{type:"textarea",placeholder:"请填写患者的其他健康指标",rows:2},model:{value:e.form.health,callback:function(t){e.$set(e.form,"health",t)},expression:"form.health"}})],1)],1)],1),i("el-row",[i("el-col",[i("el-form-item",{attrs:{label:"初步诊断：",prop:"initial_judge","label-width":"120px"}},[i("el-input",{attrs:{type:"textarea",placeholder:"请填写患者的初步诊断",rows:2},model:{value:e.form.initial_judge,callback:function(t){e.$set(e.form,"initial_judge",t)},expression:"form.initial_judge"}})],1)],1)],1)],1)])],1),i("el-col",{attrs:{span:8}},[i("panel-common",{staticClass:"Mg-L20"},[i("div",{attrs:{slot:"info-title"},slot:"info-title"},[e._v(" 申请信息 ")]),i("div",{staticClass:"info-content",attrs:{slot:"info-content"},slot:"info-content"},[i("el-row",[i("el-col",[i("el-form-item",{attrs:{label:"申请中心医院:","label-width":"120px"}},[i("el-select",{on:{change:function(t){return e.onChangeDoc(e.form.by_hid)}},model:{value:e.form.by_hid,callback:function(t){e.$set(e.form,"by_hid",t)},expression:"form.by_hid"}},e._l(e.data_hos,(function(e,t){return i("el-option",{key:t,attrs:{label:e.name,value:e.id}})})),1)],1)],1),i("el-col",[i("el-form-item",{attrs:{label:"申请诊断医生:","label-width":"120px"}},[i("el-select",{model:{value:e.form.by_did,callback:function(t){e.$set(e.form,"by_did",t)},expression:"form.by_did"}},[i("el-option",{attrs:{label:"全部",value:""}}),e._l(e.docList,(function(e,t){return i("el-option",{key:t,attrs:{label:e.name,value:e.did}})}))],2)],1)],1)],1),i("el-row",[i("el-col",[i("el-form-item",{attrs:{label:"是否急诊："}},[i("el-radio-group",{model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}},[i("el-radio",{attrs:{label:2}},[e._v("否")]),i("el-radio",{attrs:{label:1}},[e._v("是")])],1)],1)],1),i("el-col",[i("el-form-item",{attrs:{label:"申请描述："}},[i("el-input",{attrs:{type:"textarea",rows:12},model:{value:e.form.describe,callback:function(t){e.$set(e.form,"describe",t)},expression:"form.describe"}})],1)],1)],1)],1)])],1)],1)],1),i("div",{staticClass:"btns Mg-T20"},[i("el-button",{attrs:{type:"primary",disabled:e.disabled,loading:e.disabled},on:{click:e.handleSubmit}},[e._v("申请远程诊断")]),i("el-button",{attrs:{plain:""},on:{click:function(t){return e.handleCancel(2)}}},[e._v("取消")])],1)],1)},s=[],l=(i("2eeb"),i("e35a"),i("0d7a"),i("e793")),r=(i("6a61"),i("cf7f")),o=i("2a94"),n=i("05c3"),m={props:{hosinfo:{type:Object},list:{type:Object},data_hos:{type:Array,default:function(){return[]}},examList:{type:Array,default:function(){return[]}}},data:function(){return{form:{real_name:"",phone:"",sex:"",age:"",birthday:"",examine_devices:"",examine_part:"",examine_items:"",scan_type:"",discipline:"",examine_number:"",examine_type:"",examine_time:"",main_tell:"",now_illness:"",once_illness:"",health:"",initial_judge:"",by_hid:"",by_did:"",type:2,describe:""},id:this.$route.query.id,formRules:{real_name:[{required:!0,message:"请输入患者姓名",trigger:"blur"}],phone:[{required:!0,message:"请输入患者手机",trigger:"blur"}],sex:[{required:!0,message:"请选择性别",trigger:"change"}],age:[{required:!0,message:"请输入年龄",trigger:"blur"}],main_tell:[{required:!0,message:"请填写患者主诉",trigger:"blur"}],initial_judge:[{required:!0,message:"请填写初步诊断",trigger:"blur"}]},examine_typeList:[],examine_partList:[],examine_devicesList:[],examine_itemsList:[],scan_typeList:[],docList:[],disabled:!1,doc_did:JSON.parse(this.$cookie.get("USERLOGIN")).did}},watch:{examList:{handler:function(e){var t=this;e&&e.length&&e.map((function(e){1==e.field_type&&e.field_value&&(t.examine_typeList=e.field_value.split(";")),2==e.field_type&&e.field_value&&(t.examine_partList=e.field_value.split(";")),3==e.field_type&&e.field_value&&(t.examine_devicesList=e.field_value.split(";")),4==e.field_type&&e.field_value&&(t.examine_itemsList=e.field_value.split(";")),5==e.field_type&&e.field_value&&(t.scan_typeList=e.field_value.split(";"))}))},immediate:!0}},components:{PanelCommon:o["a"]},computed:{test:function(){return this.list.by_hid&&this.onChangeDoc(this.list.by_hid),this.form={real_name:this.hosinfo.real_name,phone:this.hosinfo.phone,sex:this.hosinfo.sex,age:this.hosinfo.age,birthday:this.hosinfo.birthday,examine_devices:this.hosinfo.examine_devices,examine_part:this.hosinfo.examine_part,examine_items:this.hosinfo.examine_items,scan_type:this.hosinfo.scan_type,discipline:this.hosinfo.discipline,examine_number:this.hosinfo.examine_number,examine_type:this.hosinfo.examine_type,examine_time:this.hosinfo.examine_time,main_tell:this.list.main_tell,now_illness:this.list.now_illness,once_illness:this.list.once_illness,health:this.list.health,initial_judge:this.list.initial_judge,by_hid:this.list.by_hid,by_did:this.list.by_id?this.list.by_id:"",type:this.list.type||2,describe:this.list.describe||"",examine_status:this.hosinfo.examine_status},this.form.sex},is_SH:function(){var e=this.$store.state.huizhen.hzIsFlag;return e}},methods:{handleCancel:function(e){this.is_SH?(this.$router.go(-1),this.$store.commit("RESET_SH_FLAG",!1)):this.$emit("close",e)},onChangeDoc:function(e){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function i(){var a,s,l;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(a="",t.data_hos.map((function(t){t.id==e&&(a=t.number)})),a){i.next=5;break}return t.docList=[],i.abrupt("return");case 5:return i.prev=5,i.next=8,Object(n["h"])({number:a});case 8:s=i.sent,l=s.data,0==l.code?t.docList=l.data.list:t.docList=[],i.next=16;break;case 14:i.prev=14,i.t0=i["catch"](5);case 16:case"end":return i.stop()}}),i,null,[[5,14]])})))()},handleSubmit:function(){var e=this;if(this.form.real_name)if(this.form.phone){var t=/^1[3456789]\d{9}$/;t.test(this.form.phone)?this.form.sex&&this.form.sex?this.form.age?this.form.main_tell?this.form.initial_judge?this.form.by_hid?(this.form.inpatient_area||(this.form.inpatient_area=""),this.form.examine_result||(this.form.examine_result=0),this.form.discipline||(this.form.discipline=""),this.form.scan_type||(this.form.scan_type=""),this.form.examine_remark||(this.form.examine_remark=""),this.form.examine_see||(this.form.examine_see=""),this.form.impressive||(this.form.impressive=""),this.form.in_hos_number||(this.form.in_hos_number=""),this.form.bed_number||(this.form.bed_number=""),this.disabled=!0,Object(n["l"])(Object(l["a"])(Object(l["a"])({},this.form),{},{flag:2,study_id:this.hosinfo.study_id,mutual_id:this.list.mutual_id,id:this.id,did:this.doc_did})).then((function(t){0==t.data.code?(e.$message.success("提交成功！"),e.handleCancel(1),e.disabled=!1):(e.$message.error(t.data.msg),e.disabled=!1)})).catch((function(t){e.$message.error("服务器错误，提交失败！"),e.disabled=!1}))):this.$message.error("请选择申请中心医院"):this.$message.error("请输入初步诊断"):this.$message.error("请输入患者主诉"):this.$message.error("请输入患者年龄"):this.$message.error("请输入患者性别"):this.$message.error("请输入正确的手机号")}else this.$message.error("请输入患者手机号");else this.$message.error("请输入患者姓名")}}},c=m,f=(i("43eb"),i("9ca4")),d=Object(f["a"])(c,a,s,!1,null,"f50400b8",null);t["default"]=d.exports},f12d:function(e,t,i){}}]);