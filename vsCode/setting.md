<!--
 * @Author: 清风浩明月
 * @Date: 2021-05-27 16:23:31
 * @version: 
 * @Description: 
-->
# vscode  setting.json 设置

```json
{
    "update.mode": "none", // 禁止自动更新编辑器
    "update.enableWindowsBackgroundUpdates": false, // 是否启用Windows后台更新
    "workbench.colorTheme": "Monokai", // 主题颜色 
    "workbench.iconTheme": "material-icon-theme", // 图标主题
    "editor.tabCompletion": "on", // 开启自动补全
    "vetur.format.options.tabSize": 4,
    "files.autoSave": "off",
  //   "liveServer.settings.donotShowInfoMsg": true, // 浏览器实时更新插件（使用请下载 Live Server 插件即可）
    "vetur.format.defaultFormatter.js": "vscode-typescript",
    "vetur.format.defaultFormatter.html": "js-beautify-html",
    "window.zoomLevel": 0, // 设置放大，扩大工作区大小（默认为 0）
    // "terminal.integrated.fontSize": 16, // 控制台字体大小
    "vsicons.dontShowNewVersionMessage": true,
    "editor.formatOnSave": false, // #值设置为true时，每次保存的时候自动格式化；
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true // #值设置为true时，每次保存的时候自动格式化；
    },
    "editor.formatOnType": true,
    "diffEditor.ignoreTrimWhitespace": false,
    "editor.detectIndentation": false, // 检测缩进( vscode默认启用了根据文件类型自动设置tabsize的选项)
    // 配置新建文件注释和方法注释 （下载插件 koroFileHeader 进行配置）
    "fileheader.configObj": {
      "createFileTime": true, // 设置为true则为文件新建时候作为date，否则注释生成时间为date
      "autoAdd": true, // 自动生成注释，老是忘记的同学可以设置
      "annotationStr": {
        "head": "/*",
        "middle": " * @",
        "end": " */",
        "use": true // 设置自定义注释可用
      }
    },
    // 函数注释：使用快捷键window：ctrl+alt+t/mac：ctrl+cmd+t，即可生成函数注释
    "fileheader.cursorMode": {
      "description": "",
      "param ": "",
      "return": ""
    },
    // 文件头部注释： 快捷键:window：ctrl+alt+i/mac：ctrl+cmd+i,即可生成文件头部注释
    "fileheader.customMade": {
      "Author": "清风浩明月", // 编辑人
      "Date": "Do not edit", // 时间
      "version": "",         // 版本（自定义）
      "LastEditTime": "Do not edit", // 最后修改时间
	  "LastEditors": "清风浩明月",  // 最后修改的编辑人
      "Description": "" // 文件内容描述
    },
    "powermode.enabled": true,
    "powermode.presets": "exploding-rift",
    "git.confirmSync": false,
    "json.schemas": [],
    // 使用 prettier 来美化代码
    "[vue]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[json]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[html]": {
      "editor.defaultFormatter": "vscode.html-language-features"
    },
    "[css]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[javascript]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode"
    //   "editor.defaultFormatter": "vscode.typescript-language-features"
    },
    "editor.suggestSelection": "first", // 建议选择
    "terminal.integrated.shell.windows": "C:\\Windows\\System32\\cmd.exe", // 终端使用 cmd 启动，默认是 shell
    // 重新设定tabsize
    // "editor.tabSize": 2, // tab 空格
    // "editor.fontSize": 16, // 编辑器的字体大小
    // "prettier.printWidth": 200, // 设置长度超过 200 换行
  }
  ```
  
  