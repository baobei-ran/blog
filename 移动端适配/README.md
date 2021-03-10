# 移动端适配方案实践-rem和vw

## rem 进行配置

### 1. scss 和 less 中计算 rem

```less
  @default-w: 750;

  .rem(@name, @px) {
    @{name}: unit((@px / @default-w), rem);
  }

  .app {
    .rem(width, 300);
    .rem(height: 500);
  }

```

```scss

// 以iphone6尺寸@2x 750像素宽的视觉稿为例
// html的 font-size=37.5
@function rem($px) {
  @return $px / 75 + rem;
}

.hello {
  width: rem(300);    // 150px
  height: rem(100);   // 50px 
}

```


### 2. 结合插件计算 rem 

1. 进行根节点设置，下载 amfe-flexible

```base
  npm install --save amfe-flexible
```

2. 下载 px 转换 rem的插件

```base
npm insatll -D postcss-px2rem-exclude
```

3. 设置参数配置

```js
  // 1. 创建 postcss.config.js 文件
  // 2. 进行参数配置

module.exports = {
  plugins: {
      autoprefixer: {},
      "postcss-px2rem-exclude": {
      "remUnit": 75,                // 设计稿的视口宽度，进行比例换算 (750 / 10)
      exclude: /node_modules/i      // 忽略某些文件夹下的文件，不进行转换，比如我用的 vant ui库，不进行转换
    }
  }
}

```




## vw 进行配置

### 1. scss和less中 vw 使用和计算方式

1. scss 使用

```scss
  //以iphone7尺寸@2x 750像素宽的视觉稿为例
  @function vw($px) {
    @return ($px / 750) * 100vw;
  }

  //假设一个div元素在视觉稿中，宽度为120px，字体大小为12px
  div {
    width: vw(240);
    font-size: vw(24);
  }

```
2. less 使用

```less
  @width: 750px;
  .vw(@name, @px) {
    @{name}: unit((@px / @width * 100vw), vw);
  }

  .app {
    .vw(height, 500);
    .vw(width, 300);
  }
```

### 2. 使用插件进行 px 转换 vw （两种引入方式）

  1. 首先第一步,安装插件

```base
  npm install postcss-px-to-viewport --save-dev
```

### （1）第一种引入方式

  2. 第二步，在webpack中引入插件,并对插件进行一些配置，具体代码如下（vue.config.js）：

```js

// 引入 插件
const PxtoVw = require('postcss-px-to-viewport');
    
// 设置
module.exports = {
  css: {
     loaderOptions: {
        less: {
          lessOptions: {
            modifyVars: {
              // 配置 vant 的主题，改变 vant 的一些配置
                hack: `true; @import "${resolve('./src/styles/vant-theme.less')}";`
            },
          }
        },
        postcss: {
          plugins: [
            new PxtoVw({
              unitToConvert: 'px',    // 需要转换的单位，默认为"px"；
              viewportWidth: 750,     // 设计稿的视口宽度，进行比例换算
              unitPrecision: 5,       // 单位转换后保留的小数位数
              propList: ['*'],        // 要进行转换的属性列表,*表示匹配所有,!表示不转换
              viewportUnit: 'vw',     // 转换后的视口单位
              fontViewportUnit: 'vw', // 转换后字体使用的视口单位
              selectorBlackList: [],  // 不进行转换的css选择器，继续使用原有单位
              minPixelValue: 1,       // 设置最小的转换数值
              mediaQuery: false,      // 设置媒体查询里的单位是否需要转换单位
              replace: true,          // 是否直接更换属性值，而不添加备用属性
              exclude: [/node_modules/] // 忽略某些文件夹下的文件  由于引用了game/vui的toast组件，需要对其进行vm转换适配
            })
          ]
         }
      }
   }
}

```

### （2）第二种 引入方式


3. 也可以在vue的根目录下新建postcss.config.js，引入如下代码：

```js

module.exports = {
  plugins: {
     autoprefixer: {}, // 用来给不同的浏览器自动添加相应前缀，如-webkit-，-moz-等等
    "postcss-px-to-viewport": {
      unitToConvert: "px", // 要转化的单位
      viewportWidth: 750, // UI设计稿的宽度
      unitPrecision: 6, // 转换后的精度，即小数点位数
      propList: ["*"], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
      viewportUnit: "vw", // 指定需要转换成的视窗单位，默认vw
      fontViewportUnit: "vw", // 指定字体需要转换成的视窗单位，默认vw
      selectorBlackList: ["wrap"], // 指定不转换为视窗单位的类名，
      minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
      mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false
      replace: true, // 是否转换后直接更换属性值
      exclude: [/node_modules/], // 设置忽略文件，用正则做目录名匹配
      landscape: false // 是否处理横屏情况
    }
  }
}

```


完成之后，项目中的px 就会自动变为vw。

#### 注意：由于移动端用的UI 框架为vant ，但是vant 设计的宽度为375 ，设计稿的宽度为750，这样用的话，会导致vant 的所有尺寸都会变小一倍。当然我们也可以把上面viewportWidth改为375，然后把UI 图除以2，然后计算。
#### 当然，我们也可以根据不同的文件来适配不同的尺寸，vant 的适配375，自己写的适配750。

代码如下：

```js

const path = require('path');
 
module.exports = ({ file }) => {
  // vant 的适配375，自己写的适配750
  const designWidth = file.dirname.includes(path.join('node_modules', 'vant')) ? 375 : 750;
 
  return {
    plugins: {
      autoprefixer: {},
      "postcss-px-to-viewport": {
        unitToConvert: "px",
        viewportWidth: designWidth, // 适配
        unitPrecision: 6,
        propList: ["*"],
        viewportUnit: "vw",
        fontViewportUnit: "vw",
        selectorBlackList: [],
        minPixelValue: 1,
        mediaQuery: true,
        exclude: [],
        landscape: false
      }
    }
  }
 
}
```

End