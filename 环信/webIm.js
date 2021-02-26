let WebIM = window.WebIM;

//配置文件参考环信demo
var config = {
  xmppURL: "im-api.easemob.com",
  Host: "easemob.com",
  https: window.location.protocol === "https:" ? true : false,
  apiURL: (window.location.protocol === "https:" ? "https:" : "http:") + "//a1.easemob.com",
  appkey: "1100181025211076#yyk-doctor",
  isMultiLoginSessions: false,
  isAutoLogin: true, // 自动出席，（如设置为false，则表示离线，无法收消息，需要在登录成功后手动调用conn.setPresence()才可以收消
  isWindowSDK: false,
  isSandBox: false,
  isDebug: true, // 打开调试，会自动打印log，在控制台的console中查看log
  autoReconnectNumMax: 2,
  autoReconnectInterval: 2,
  isWebRTC: (/Firefox/.test(navigator.userAgent) || /WebKit/.test(navigator.userAgent)) && /^https\:$/.test(window.location.protocol),
  heartBeatWait: 4500,
  isHttpDNS: false,
  msgStatus: true,
  delivery: true, // 是否发送已读回执
  read: true,
  saveLocal: false,
  encrypt: {
    type: "none",
  },
  
};


//初始化配置
WebIM.config = config;

WebIM.Emoji = {
  path: "/images/face/",  // 表情图标路径
  map: {
    "[微笑]": "0.gif",
    "[嘻嘻]": "1.gif",
    "[哈哈]": "2.gif",
    "[可爱]": "3.gif",
    "[可怜]": "4.gif",
    "[挖鼻]": "5.gif",
    "[吃惊]": "6.gif",
    "[害羞]": "7.gif",
    "[挤眼]": "8.gif",
    "[闭嘴]": "9.gif",
    "[鄙视]": "10.gif",
    "[爱你]": "11.gif",
    "[泪]": "12.gif",
    "[偷笑]": "13.gif",
    "[亲亲]": "14.gif",
    "[生病]": "15.gif",
    "[太开心]": "16.gif",
    "[白眼]": "17.gif",
    "[右哼哼]": "18.gif",
    "[左哼哼]": "19.gif",
    "[嘘]": "20.gif",
    "[衰]": "21.gif",
    "[委屈]": "22.gif",
    "[吐]": "23.gif",
    "[哈欠]": "24.gif",
    "[抱抱]": "25.gif",
    "[怒]": "26.gif",
    "[疑问]": "27.gif",
    "[馋嘴]": "28.gif",
    "[拜拜]": "29.gif",
    "[思考]": "30.gif",
    "[汗]": "31.gif",
    "[困]": "32.gif",
    "[睡]": "33.gif",
    "[钱]": "34.gif",
    "[失望]": "35.gif",
    "[酷]": "36.gif",
    "[色]": "37.gif",
    "[哼]": "38.gif",
    "[鼓掌]": "39.gif",
    "[晕]": "40.gif",
    "[悲伤]": "41.gif",
    "[抓狂]": "42.gif",
    "[黑线]": "43.gif",
    "[阴险]": "44.gif",
    "[怒骂]": "45.gif",
    "[互粉]": "46.gif",
    "[心]": "47.gif",
    "[伤心]": "48.gif",
    "[猪头]": "49.gif",
    "[熊猫]": "50.gif",
    "[兔子]": "51.gif",
    "[ok]": "52.gif",
    "[耶]": "53.gif",
    "[good]": "54.gif",
    "[NO]": "55.gif",
    "[赞]": "56.gif",
    "[来]": "57.gif",
    "[弱]": "58.gif",
    "[小可爱]": "59.gif",
    "[神马]": "60.gif",
    "[囧]": "61.gif",
    "[浮云]": "62.gif",
    "[给力]": "63.gif",
    "[围观]": "64.gif",
    "[威武]": "65.gif",
    "[奥特曼]": "66.gif",
    "[礼物]": "67.gif",
    "[钟]": "68.gif",
    "[话筒]": "69.gif",
    "[蜡烛]": "70.gif",
    "[蛋糕]": "71.gif",
  },
};

var conn = new WebIM.connection({
  appkey: WebIM.config.appkey,
  isMultiLoginSessions: WebIM.config.isMultiLoginSessions,
  https: WebIM.config.https,
  url: WebIM.config.xmppURL,
  heartBeatWait: WebIM.config.heartBeatWait,
  autoReconnectNumMax: WebIM.config.autoReconnectNumMax,
  autoReconnectInterval: WebIM.config.autoReconnectInterval,
  apiUrl: WebIM.config.apiURL,
  isAutoLogin: true,
});

export { conn, WebIM };
