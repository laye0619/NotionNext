const CONFIG = {
  HEO_HOME_POST_TWO_COLS: true, // 首页博客两列显示，若为false则只显示一列
  HEO_LOADING_COVER: true, // 页面加载的遮罩动画

  HEO_HOME_BANNER_ENABLE: true,

  HEO_SITE_CREATE_TIME: '2022-01-07', // 建站日期，用于计算网站运行的第几天

  // 首页顶部通知条滚动内容，如不需要可以留空 []
  HEO_NOTICE_BAR: [
    // { title: '欢迎来到我的博客', url: 'https://blog.tangly1024.com' },
    // { title: '访问文档中心获取更多帮助', url: 'https://docs.tangly1024.com' }
  ],

  // 英雄区左右侧组件颠倒位置
  HEO_HERO_REVERSE: false,
  // 博客主体区左右侧组件颠倒位置
  HEO_HERO_BODY_REVERSE: false,

  // 英雄区(首页顶部大卡)
  HEO_HERO_TITLE_1: '投资人生',
  HEO_HERO_TITLE_2: '财务自由',
  HEO_HERO_TITLE_3: 'LAYE.WANG',
  HEO_HERO_TITLE_4: 'PHOTOGRAPHY',
  HEO_HERO_TITLE_5: '我的摄影',
  HEO_HERO_TITLE_LINK: 'https://p.laye.wang',
  // 英雄区遮罩文字
  HEO_HERO_COVER_TITLE: '随便逛逛',

  // 英雄区显示三个置顶分类
  HEO_HERO_CATEGORY_1: { title: '投资投机', url: '/tag/投资投机' },
  HEO_HERO_CATEGORY_2: { title: '热门话题', url: '/tag/热门话题' },
  HEO_HERO_CATEGORY_3: { title: '日期归档', url: '/archive' },

  // 英雄区右侧推荐文章标签, 例如 [推荐] , 最多六篇文章; 若留空白''，则推荐最近更新文章
  HEO_HERO_RECOMMEND_POST_TAG: '推荐',
  HEO_HERO_RECOMMEND_POST_SORT_BY_UPDATE_TIME: false, // 推荐文章排序，为`true`时将强制按最后修改时间倒序
  //   HERO_RECOMMEND_COVER: 'https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712_1280.jpg', // 英雄区右侧图片

  // 右侧个人资料卡牌欢迎语，点击可自动切换
  HEO_INFOCARD_GREETINGS: [
    '你好！我是...',
    '🏧 投资实践者',
    '📷 摄影爱好者',
    '🏦 财务自由行动派'
  ],

  // 个人资料底部按钮
  HEO_INFO_CARD_URL1: '',
  HEO_INFO_CARD_ICON1: '',
  HEO_INFO_CARD_URL2: '',
  HEO_INFO_CARD_ICON2: '',
  HEO_INFO_CARD_URL3: '/about',
  HEO_INFO_CARD_TEXT3: '关于我',

  // 用户技能图标
  HEO_GROUP_ICONS: [
    {
      title_1: 'investment1',
      img_1: '/images/laye/investment1.png',
      color_1: '#989bf8',
      title_2: 'yo1',
      img_2: '/images/laye/yo1.png',
      color_2: '#ffffff'
    },
    {
      title_1: 'photography1',
      img_1: '/images/laye/photography1.png',
      color_1: '#57b6e6',
      title_2: 'investment2',
      img_2: '/images/laye/investment2.png',
      color_2: '#4082c3'
    },
    {
      title_1: 'investment3',
      img_1: '/images/laye/investment3.png',
      color_1: '#ffffff',
      title_2: 'yo2',
      img_2: '/images/laye/yo2.png',
      color_2: '#ffffff'
    },
    {
      title_1: 'photography2',
      img_1: '/images/laye/photography2.png',
      color_1: '#eb6840',
      title_2: 'investment4',
      img_2: '/images/laye/investment4.png',
      color_2: '#8f55ba'
    },
    {
      title_1: 'investment5',
      img_1: '/images/laye/investment5.png',
      color_1: '#f29e39',
      title_2: 'yo3',
      img_2: '/images/laye/yo3.png',
      color_2: '#2c51db'
    },
    {
      title_1: 'photography3',
      img_1: '/images/laye/photography3.png',
      color_1: '#f7cb4f',
      title_2: 'investment6',
      img_2: '/images/laye/investment6.png',
      color_2: '#e9572b'
    },
    {
      title_1: 'investment7',
      img_1: '/images/laye/investment7.png',
      color_1: '#df5b40',
      title_2: 'yo4',
      img_2: '/images/laye/yo4.png',
      color_2: '#1f1f1f'
    }
  ],

  HEO_SOCIAL_CARD: false, // 是否显示右侧，点击加入社群按钮
  HEO_SOCIAL_CARD_TITLE_1: '交流频道',
  HEO_SOCIAL_CARD_TITLE_2: '加入我们的社群讨论分享',
  HEO_SOCIAL_CARD_TITLE_3: '点击加入社群',
  HEO_SOCIAL_CARD_URL: 'https://docs.tangly1024.com/article/how-to-question',

  // 底部统计面板文案
  HEO_POST_COUNT_TITLE: '文章数:',
  HEO_SITE_TIME_TITLE: '建站天数:',
  HEO_SITE_VISIT_TITLE: '访问量:',
  HEO_SITE_VISITOR_TITLE: '访客数:',

  // *****  以下配置无效，只是预留开发 ****
  // 菜单配置
  HEO_MENU_INDEX: true, // 显示首页
  HEO_MENU_CATEGORY: true, // 显示分类
  HEO_MENU_TAG: true, // 显示标签
  HEO_MENU_ARCHIVE: true, // 显示归档
  HEO_MENU_SEARCH: true, // 显示搜索

  HEO_POST_LIST_COVER: true, // 列表显示文章封面
  HEO_POST_LIST_COVER_HOVER_ENLARGE: false, // 列表鼠标悬停放大

  HEO_POST_LIST_COVER_DEFAULT: true, // 封面为空时用站点背景做默认封面
  HEO_POST_LIST_SUMMARY: true, // 文章摘要
  HEO_POST_LIST_PREVIEW: false, // 读取文章预览
  HEO_POST_LIST_IMG_CROSSOVER: true, // 博客列表图片左右交错

  HEO_ARTICLE_ADJACENT: true, // 显示上一篇下一篇文章推荐
  HEO_ARTICLE_COPYRIGHT: true, // 显示文章版权声明
  HEO_ARTICLE_RECOMMEND: true, // 文章关联推荐

  HEO_WIDGET_LATEST_POSTS: true, // 显示最新文章卡
  HEO_WIDGET_ANALYTICS: false, // 显示统计卡
  HEO_WIDGET_TO_TOP: true,
  HEO_WIDGET_TO_COMMENT: true, // 跳到评论区
  HEO_WIDGET_DARK_MODE: true, // 夜间模式
  HEO_WIDGET_TOC: true // 移动端悬浮目录
}
export default CONFIG
