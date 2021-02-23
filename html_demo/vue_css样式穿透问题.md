<!--
 * @Author: 清风
 * @Date: 2020-07-31 12:39:35
 * @Description: 
-->

## 样式穿透

```css
	在开发中修改第三方组件样式是很常见，但由于 scoped 属性的样式隔离，可能需要去除 scoped 或是另起一个 style 

	这些做法都会带来副作用（组件样式污染、不够优雅），样式穿透在css预处理器中使用才生效。



	1、less使用  /deep/

	   <style scoped lang="less">

	    	.content /deep/ .el-button {

 		      height: 60px;

	    	}

	   </style>


	2、scss使用 ::v-deep

	   <style scoped lang="scss">

		.content ::v-deep .el-button {

  		   height: 60px;

		}

	   </style>


	3、stylus使用 >>>

	   <style scoped lang="stylus">

		.content >>> .custon-components {

  		   height: 60px;

		}

	   </style>

```