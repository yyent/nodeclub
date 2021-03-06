var path = require('path');
module.exports = {
    debug: true,
    get mini_assets() {
        return !this.debug; }, // 是否启用静态文件的合并压缩，详见视图中的Loader

    name: 'cld.life -- 藏龙岛生活', // 社区名字
    description: '【藏龙岛】岛民自己的论坛', // 社区的描述
    keywords: '藏龙岛，楼市，教育，生活',

    // 添加到 html head 中的信息
    site_headers: [
        '<meta name="author" content="EDP@TAOBAO" />'
    ],
    site_logo: '/public/images/cld_light.svg', // default is `name`
    site_icon: '/public/images/cnode_icon_32.png', // 默认没有 favicon, 这里填写网址
    // 右上角的导航区
    site_navs: [
        // 格式 [ path, title, [target=''] ]
        ['/about', '关于']
    ],
    // cdn host，如 http://cnodejs.qiniudn.com
    site_static_host: '', // 静态文件存储域名
    // 社区的域名
    host: 'cld.life',
    // 默认的Google tracker ID，自有站点请修改，申请地址：http://www.google.com/analytics/
    google_tracker_id: '',
    // 默认的cnzz tracker ID，自有站点请修改
    cnzz_tracker_id: '',

    // mongodb 配置
    db: 'mongodb://127.0.0.1/node_club',

    // redis 配置，默认是本地
    redis_host: '127.0.0.1',
    redis_port: 6379,
    redis_db: 0,
    redis_password: '',

    session_secret: 'node_club_secret', // 务必修改
    auth_cookie_name: 'node_club',

    // 程序运行的端口
    port: 8080,

    // 话题列表显示的话题数量
    list_topic_count: 20,

    // RSS配置
    rss: {
        title: 'cld.life -- 藏龙岛生活',
        link: 'https://cld.life',
        language: 'zh-cn',
        description: '岛民自己的论坛',
        //最多获取的RSS Item数量
        max_rss_items: 50
    },

    // 邮箱配置
    mail_opts: {
        host: 'smtp.exmail.qq.com',
        port: 465,
        auth: {
            user: 'boss@sunshengda.com',
            pass: 'ssdSSD3237649$'
        },
        ignoreTLS: true,
    },

    //weibo app key
    weibo_key: 10000000,
    weibo_id: '312460629',

    admins: ['peter', 'dameng'],

    // github 登陆的配置
    GITHUB_OAUTH: {
        clientID: 'your GITHUB_CLIENT_ID',
        clientSecret: 'your GITHUB_CLIENT_SECRET',
        callbackURL: 'http://cnodejs.org/auth/github/callback'
    },
    // 是否允许直接注册（否则只能走 github 的方式）
    allow_sign_up: true,

    // oneapm 是个用来监控网站性能的服务
    oneapm_key: '',

    // 下面两个配置都是文件上传的配置

    // 7牛的access信息，用于文件上传
    qn_access: {
        accessKey: 'your access key',
        secretKey: 'your secret key',
        bucket: 'your bucket name',
        origin: 'http://your qiniu domain',
        // 如果vps在国外，请使用 http://up.qiniug.com/ ，这是七牛的国际节点
        // 如果在国内，此项请留空
        uploadURL: 'http://xxxxxxxx',
    },

    // 文件上传配置
    // 注：如果填写 qn_access，则会上传到 7牛，以下配置无效
    upload: {
        path: path.join(__dirname, '../public/upload/'),
        url: '/public/upload/'
    },

    file_limit: '1MB',

    // 版块
    tabs: [
        ['news', '新闻'],
        ['fang', '楼市'],
        ['education', '教育'],
        ['fun', '吃喝玩乐']
    ],

    // 极光推送
    jpush: {
        appKey: 'YourAccessKeyyyyyyyyyyyy',
        masterSecret: 'YourSecretKeyyyyyyyyyyyyy',
        isDebug: false,
    },

    create_post_per_day: 1000, // 每个用户一天可以发的主题数
    create_reply_per_day: 1000, // 每个用户一天可以发的评论数
    create_user_per_ip: 1000,
    visit_per_day: 1000, // 每个 ip 每天能访问的次数
}
