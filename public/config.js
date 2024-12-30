// 配置
window.Config = {

  // 显示标题
  SiteName: 'linteresting status',

  // UptimeRobot Api Keys
  // 支持 Monitor-Specific 和 Read-Only
  ApiKeys: [
    'ur2773346-2768a4d2853cff5aa1a8feae',
  ],

    // 日志天数
  // 虽然免费版说仅保存60天日志，但测试好像API可以获取90天的
  // 不过时间不要设置太长，容易卡，接口请求也容易失败
  CountDays: 60,

  // 是否显示检测站点的链接
  ShowLink: false,

  // 导航栏菜单
  Navi: [
    {
      text: 'main',
      url: 'https://www.linteresting.cn:8443'
    },
    {
      text: 'fnos',
      url: 'https://fnos.linteresting.cn:8443'
    }
  ],
};
