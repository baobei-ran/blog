(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8de50da2"],{2052:function(e,t,r){},6028:function(e,t,r){"use strict";var n=r("2052"),i=r.n(n);i.a},8775:function(e,t,r){},a041:function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("span",{staticClass:"title"},[e._t("title")],2),e._t("tag")],2)},i=[],a=(r("f343"),r("9ca4")),o={},l=Object(a["a"])(o,n,i,!1,null,"2a454133",null);t["a"]=l.exports},b32a:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"hospitalRoleAddPage"},[r("title-common",[r("span",{attrs:{slot:"title"},slot:"title"},[e._v("编辑角色")])]),r("panel-common",[r("div",{attrs:{slot:"info-content"},slot:"info-content"},[r("el-form",{ref:"addRoleFormRef",attrs:{model:e.editRoleForm,rules:e.editRoleFormRules,"label-width":"100px"}},[r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:8}},[r("el-form-item",{attrs:{label:"角色名称",prop:"title"}},[r("el-input",{attrs:{clearable:""},model:{value:e.editRoleForm.title,callback:function(t){e.$set(e.editRoleForm,"title",t)},expression:"editRoleForm.title"}})],1)],1)],1),r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"角色备注"}},[r("el-input",{attrs:{type:"textarea"},model:{value:e.editRoleForm.description,callback:function(t){e.$set(e.editRoleForm,"description",t)},expression:"editRoleForm.description"}})],1)],1)],1)],1)],1)]),r("panel-common",[r("div",{attrs:{slot:"info-content"},slot:"info-content"},[r("i",{staticClass:"color-red"},[e._v("*")]),e._v(" 功能授权 "),r("el-tree",{ref:"tree",attrs:{data:e.rightTreeList,props:e.rightTreeConfig,accordion:"","show-checkbox":"","node-key":"id","default-checked-keys":e.defaultChecked}})],1)]),r("div",{staticClass:"btns"},[r("el-button",{attrs:{type:"primary",disabled:e.loading,loading:e.loading},on:{click:e._saveRoleEdit}},[e._v(" 保存 ")]),r("el-button",{attrs:{plain:""},on:{click:function(t){return e.$router.go(-1)}}},[e._v("返回")])],1)],1)},i=[],a=(r("f3dd"),r("0a51"),r("fe59"),r("9302"),r("2eeb"),r("08ba"),r("6a61"),r("cf7f")),o=r("a041"),l=r("2a94"),s=r("7584"),c={data:function(){return{editRoleForm:{title:"",description:""},editRoleFormRules:{title:[{required:!0,message:"请输入角色名称",trigger:"blur"}]},rightTreeList:[],rightTreeConfig:{children:"children",label:"label"},defaultChecked:[],flag:0,loading:!1}},components:{TitleCommon:o["a"],PanelCommon:l["a"]},created:function(){this.role=this.$route.query.roleId,this._getRoleEditShow()},methods:{_getRoleShow:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(s["D"])();case 2:if(r=t.sent,n=r.data,0===n.code){t.next=7;break}return t.abrupt("return",e.$message.error(n.msg));case 7:case"end":return t.stop()}}),t)})))()},getLeafId:function(e,t){var r=this;(!e.children||e.children&&!e.children.length)&&1==e.flag&&t.push(e.id),e.children&&e.children.length&&e.children.forEach((function(e){r.getLeafId(e,t)}))},_getRoleEditShow:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var r,n,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(s["B"])({id:e.role});case 2:r=t.sent,n=r.data,0===n.code&&(e.rightTreeList=n.data,i=[],n.data.map((function(t){e.getLeafId(t,i)})),e.editRoleForm=n.list,e.$nextTick((function(){e.$refs.tree.setCheckedKeys(i)})));case 5:case"end":return t.stop()}}),t)})))()},getTreeNum:function(e,t){e.id&&t.push(e.id),e.children&&e.children.length&&this.getTreeNum(e.children,t)},_saveRoleEdit:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var r,n,i,a,o,l;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.editRoleForm.title){t.next=3;break}return e.$message.error("请完善角色名称"),t.abrupt("return");case 3:if(r=e.$refs.tree.getCheckedNodes(),n=e.$refs.tree.getHalfCheckedNodes(),r.length){t.next=8;break}return e.$message.error("请选择功能授权"),t.abrupt("return");case 8:return i=[],r.map((function(t){t.id&&i.push(t.id),t.children&&t.children.length&&e.getTreeNum(t.children,i)})),n.map((function(t){t.id&&i.push(t.id),t.children&&t.children.length&&e.getTreeNum(t.children,i)})),a=i.join(","),t.prev=12,e.loading=!0,t.next=16,Object(s["C"])({id:e.role,name:e.editRoleForm.title,remark:e.editRoleForm.description,ids:a});case 16:o=t.sent,l=o.data,0!==l.code?e.$message.error(l.msg):(e.$message.success("编辑角色成功！"),e.$router.go(-1)),e.loading=!1,t.next=26;break;case 22:t.prev=22,t.t0=t["catch"](12),e.loading=!1;case 26:case"end":return t.stop()}}),t,null,[[12,22]])})))()}}},d=c,u=(r("6028"),r("9ca4")),f=Object(u["a"])(d,n,i,!1,null,"4893a4e0",null);t["default"]=f.exports},f343:function(e,t,r){"use strict";var n=r("8775"),i=r.n(n);i.a}}]);