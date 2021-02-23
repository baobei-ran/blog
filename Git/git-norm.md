# git 提交代码规范

Git提交也有其规范，业内做的比较好的，比较具有参考价值的就是Angular的提交。


例如:

```feat:新增财务报表```


type:

  用于说明本次commit的类别，只允许使用下面7个标识

  - feat：新增功能（feature）

  - fix：修补bug

  - docs：文档或者文档更新（documentation）

  - style： 格式（不影响程序逻辑的代码修改(修改空白字符，格式缩进，补全缺失的分号等，没有改变代码逻辑)）

  - refactor：重构代码（即不是新增功能，也不是修改bug的代码变动）

  - test：新增测试用例或是更新现有测试

  - perf：性能, 体验优化

  - build：主要目的是修改项目构建系统(例如 glup，webpack，rollup 的配置等)的提交

  - ci：主要目的是修改项目继续集成流程(例如 Travis，Jenkins，GitLab CI，Circle等)的提交

  - chore：构建过程或辅助工具的变动（不属于以上类型的其他类，比如构建流程, 依赖管理）

  - revert：回滚某个更早之前的提交


``` 
  # 主要type
      feat:     增加新功能
      fix:      修复bug

  # 特殊type
      docs:     只改动了文档相关的内容
      style:    不影响代码含义的改动，例如去掉空格、改变缩进、增删分号
      build:    构造工具的或者外部依赖的改动，例如webpack，npm
      refactor: 代码重构时使用
      revert:   执行git revert打印的message

  # 暂不使用type
      test:     添加测试或者修改现有测试
      perf:     提高性能的改动
      ci:       与CI（持续集成服务）有关的改动
      chore:    不修改src或者test的其余修改，例如构建过程或辅助工具的变动
```