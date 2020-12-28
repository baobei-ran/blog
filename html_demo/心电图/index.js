

class ChartConfig {
    constructor() {
        this.sampling = ChartConfig.DEFAULT_SAMPLING;
        this.xWindowWidth = 0;
        this.xWindowMils = ChartConfig.DEFAULT_MILS;
        this.xShowMils = ChartConfig.DEFAULT_MILS;
        this.xDataCount = this.sampling * this.xShowMils / 1000;
        this.xMsMinCell = 40;
        this.xWindowCells = this.xWindowMils / this.xMsMinCell;
        this.xCells = this.xShowMils / this.xMsMinCell;
        this.xInterval = this.xDataCount / this.xCells;
        this.xWidth = this.xWindowWidth * this.xShowMils / this.xWindowMils - 2;
        this.yMax = 2;
        this.yMin = -1;
        this.yMvMinCell = 0.1;
        this.yCells = (this.yMax - this.yMin) / this.yMvMinCell;
        this.yInterval = this.yMvMinCell;
        this.yHeight = this.xWindowWidth / this.xWindowCells * this.yCells;
    }
}
ChartConfig.DEFAULT_SAMPLING = 125;
ChartConfig.DEFAULT_MILS = 4000;


/**
 * 心电图表服务
 *
 * 创建图表步骤：initChart -> makeConfig -> makeChartOption -> setOption
 */
class EcgChart {
  constructor() {
    this.defaultConfig = this.makeDefaultConfig();
  }

  /** 初始化图表 */
  initChart(canvas, width, height) {
    let chart = echarts.init(canvas, null, {
      width: width,
      height: height,
    });
    // canvas.setChart(chart);
    return chart;
  }

  /** 销毁图表 */
  disposeChart(chart) {
    if (chart != null) {
      chart.dispose();
    }
  }

  /** 创建默认配置 */
 makeDefaultConfig() {
    let config = new ChartConfig();
    this.computeConfig(config);
    return config;
  }

  /** 计算配置。更改配置项后，需要调用此方法重新计算部分属性值 */
  computeConfig(config) {
    let windowWidth = 500; // 窗口宽度
    config.xWindowWidth = windowWidth - 2; // 图表宽度。两边各留1像素边框线
    // 图表宽度。根据要显示的数据时长确定。可超过窗口宽度，用横向滚动方式查看。
    config.xWidth = (windowWidth * config.xShowMils) / config.xWindowMils - 2;
    config.xDataCount = (config.sampling * config.xShowMils) / 1000; // 横向有多少个数据点
    config.xWindowCells = config.xWindowMils / config.xMsMinCell; // 横向窗口显示的格子数
    config.xCells = config.xShowMils / config.xMsMinCell; // 横向格子数
    config.xInterval = config.xDataCount / config.xCells; // 横向间隔(数据点个数)
    config.yCells = (config.yMax - config.yMin) / config.yMvMinCell; // 纵向格子数
    config.yInterval = config.yMvMinCell; // 纵向间隔(毫伏数值)
    // 根据宽度确定高度，保证每个小格均为正方形。
    config.yHeight =
      (config.xWindowWidth / config.xWindowCells) * config.yCells;
    // console.dir(config);
    return config;
  }

  /**
   * 生成基础配置。图表option需要依据此配置动态生成
   * @param sampling 采样率
   * @param showMils 显示的毫秒数
   */
  makeConfig(sampling, showMils) {
    let config = new ChartConfig();
    config.sampling = sampling;
    config.xShowMils = showMils;
    this.computeConfig(config);
    return config;
  }

  /** 生成图表选项 */
  makeChartOption(config) {
    var option = {
      animation: false,
      animationDelay: 0,
      grid: {
        containLabel: false,
        top: 0,
        left: 0,
        width: config.xWidth,
        height: config.yHeight,
      },
      xAxis: {
        type: "category",
        interval: config.xInterval,
        max: config.xDataCount,
        min: 0,
        // axisLine: {
        //   show: false,
        // },
        // axisLabel: {
        //   show: false,
        // },
        // axisTick: {
        //   show: false,
        // },
        // splitLine: {
        //   show: true,
        //   lineStyle: {
        //     color: ["#FEBABC", "#FBE9E7", "#FBE9E7", "#FBE9E7", "#FBE9E7"],
        //   },
        // },
        
      },
      yAxis: {
        type: "value",
        max: config.yMax,
        min: config.yMin,
        interval: config.yInterval,
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          show: false,
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: ["#FEBABC", "#FBE9E7", "#FBE9E7", "#FBE9E7", "#FBE9E7"],
          },
        },
        // #F57C00, #FBE9E7
      },
      series: [
        {
          name: "心电图",
          type: "line",
          smooth: true,
          lineStyle: {
            width: 1,
          },
          symbolSize: 0,
          data: [],
        },
      ],
    };
    return option;
  }

  /** 设置图表实例的配置项以及数据，万能接口。
   * 所有参数和数据的修改都可以通过 setOption 完成，
   * ECharts 会合并新的参数和数据，然后刷新图表。
   */
    setOption(chart, option) {
        chart.setOption(option);
    }

  /**
   * 快捷更新数据。自动将一维数组转换为echarts需要的二维数组形式
   * @param chart
   * @param dataArray 数据，一维数组。
   */
  setData(chart, dataArray) {
    let chartData = [];
    dataArray.forEach((value, index) => {
      chartData.push([index, value]);
    });
      console.log(chart, chartData)
    let opt = {
      series: [
        {
          data: chartData,
          lineStyle: {
            color: "#000", // 设置颜色
            width: 1,
          },
        },
      ],
    };
    chart.setOption(opt);
  }

  /**
   * 快捷更新数据。自动将一维数组转换为echarts需要的二维数组形式
   * @param chart
   * @param dataArray 数据，一维数组。
   * @param visualMap 数据分段，用于不同段显示不同颜色。
   */
  setDataAndVisualMap(chart, dataArray, visualMap) {
    let chartData = [];
    dataArray.forEach((value, index) => {
      chartData.push([index, value]);
    });
    let opt = {
      series: [
        {
          data: chartData,
        },
      ],
      visualMap: visualMap,
    };
    chart.setOption(opt);
  }

  /** 显示图表本身的loading */
  showLoading(chart) {
    chart.showLoading(null, {
      text: "",
      color: "#6cb7f1",
      textColor: "#333",
      maskColor: "rgba(255, 255, 255, 0.1)",
      zlevel: 0,
    });
  }

  /** 隐藏loading */
  hideLoading(chart) {
    chart.hideLoading();
  }

  /**
   * 构造正玄波数据
   * @param sampling
   * @param count
   */
   makeSinData(sampling, count) {
    var data = [];
    var d = (2 * Math.PI) / sampling; // 2PI对应1秒，一个完整波形
    for (var i = 0; i < count; i++) {
      data.push(Math.sin(i * d));
    }
    return data;
  }

  /**
   * 构造余玄波数据
   * @param sampling
   * @param count
   */
  makeCosData(sampling, count) {
    var data = [];
    var d = (2 * Math.PI) / sampling; // 2PI对应1秒，一个完整波形
    for (var i = 0; i < count; i++) {
      data.push(Math.cos(i * d));
    }
    return data;
  }
}

