import type * as Preset from '@docusaurus/preset-classic'
import type { Config } from '@docusaurus/types'
import { themes as prismThemes } from 'prism-react-renderer'
//import social from './data/social'
//import type { GiscusConfig } from './src/components/Comment'

const beian = '鄂ICP备2022000921号-1'
const beian1 = '鄂公网安备42011702000690号'

const config: Config = {
  //--------------网站基础信息设置Start--------------------------------------
  title: 'Ysundy Docusaurus Blog', //String网站标题。 会用于页面元数据中，以及浏览器选项卡标题。
  // your site config ...
  tagline: '明心静性，爱自己',
  // 您网站的URL。这也可以被认为是顶级主机名。
  url: 'https://wiki.ysundy.com', //String网站网址。
  // url: 'https://wiki.onedayxyy.cn/',
  // 可以认为是主机之后的路径。
  // 例如，'/metro/'的基础URL为https://facebook.github.io/metro/。
  // 对于没有路径的url，它应该设置为'/'。总是有前后斜杠。
  baseUrl: '/', // 站点的 base URL。 可以被看作是主机名后的路径。
  // baseUrl: '/wiki2/',
    // baseUrl: '/wiki2/',
  // 你的网站图标的路径;必须是一个可以在链接的href中使用的URL。 static\img\favicon.ico
  // TODO: 待修改网站图标
  favicon: 'img/favicon.ico',
  // favicon: 'img/xyy.png',
  trailingSlash: undefined,
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'renlangman2', // Usually your GitHub org/user name.
  projectName: 'mogai-docus-kuizuo-v1', // Usually your repo name.
  //--------------网站基础信息设置end--------------------------------------

  //--------------网站自定义字段设置Start----------------------------------
  // Docusaurus保护'Docusaurus.config.js'不受未知的自定义字段的影响。
  // 如果有需要添加的自定义字段，只能在`customFields`中定义它。
  customFields: {
    // 卡片文字说明？
    bio: '道阻且长，行则将至',
    // 摘要说明
    description:
      '是一个由暖阳创建的个人知识库(带博客功能)，主要记录一些自己收集到的知识点，该网站基于 React 驱动的静态网站生成器 Docusaurus3.5.2 构建。该网站基于 React 驱动的静态网站生成器 Docusaurus 构建。由愧怍进行二次魔改，Hyed在愧怍进行二次修改',
  },
  //--------------网站自定义字段设置end----------------------------------

  //--------------网站主题配置Start----------------------------------
  themeConfig: {
    // 禁用面包屑导航
    breadcrumbs: false,

    // 顶部公共栏
    announcementBar: {
      id: 'support_us',
      content: '欢迎访问我的网站👋这里将会持续更新，感谢关注~',
      backgroundColor: '#fafbfc',
      textColor: '#091E42',
      isCloseable: true,
    },

    // TODO 主页背景图
    image: '/img/og.png',
    //image: 'img/docusaurus-social-card.jpg',

    //head中的meta数据
    metadata: [
      // 作者
      {
        name: 'author',
        content: 'Ysundy',
      },
      // 关键字1
      {
        name: 'keywords',
        content: 'blog, javascript, typescript, node, react, vue, web',
      },
      // 关键字2
      {
        name: 'keywords',
        content: '编程爱好者, Web开发者, 写过爬虫, 学过逆向, 主攻ts全栈',
      },
    ],

    //知识库文件夹
    docs: {
      //侧边栏
      sidebar: {
        // 隐藏侧边栏
        hideable: true,
        // 自动折叠侧边栏
        autoCollapseCategories: true,
      },
    },

    // 顶部导航栏
    navbar: {
      // title: '🏡首页',
      // logo图
      logo: {
        //图片不显示时候显示的文字
        alt: 'Ysundy',
        //亮色图片地址
        src: 'img/logo.webp',
        // src: 'https://ice.frostsky.com/2024/08/17/fe2225d1be58e6076fd44a1744cd69e4.png',
        //暗色图片地址
        srcDark: 'img/logo.webp',
        // srcDark: 'https://ice.frostsky.com/2024/08/17/fe2225d1be58e6076fd44a1744cd69e4.png',
      },
      // 滚动时候隐藏？
      hideOnScroll: true,
      // Nav导航栏内容汇总列表
      /* 
      items: [
        { label: '博客', position: 'right', to: 'blog' },
        { label: '项目', position: 'right', to: 'project' },
        { label: '友链', position: 'right', to: 'friends' },
        { label: '关于', position: 'right', to: 'about' },
        {
          label: '更多',
          position: 'right',
          items: [
            { label: '归档', to: 'blog/archive' },
            { label: '笔记', to: 'docs/skill' },
            { label: '工具推荐', to: 'docs/tools' },
          ],
        },
        // {
        //   type: 'localeDropdown',
        //   position: 'right',
        // },
      ],
      */

      // Nav导航栏内容汇总列表--在用
      items: [
        //tab001 首页下拉菜单-----------------------------------------------------
        {
          label: '🏡Home',
          position: 'left',
          items: [
            { label: '👏首页', to: '/' },
            { label: '👏起始页', to: 'https://nav.ysundy.com' },
            { label: '🌐导航', to: '/docs/tool' },
          ],
        },
        // { to: '/docs/tool', label: '🌐导航', position: 'left' },
        {
          label: '✍️ Notes',
          position: 'left',
          to: 'docs/overview', //跳转到概述',
          items: [
            { label: '🖥️ 手记', to: 'docs/overview' },
            { label: '🌐 Docusaurus ', to: 'docs/Docusaurus' },
            {
              label: '🛠️ 专栏',
              to: 'docs/tools/',
            },
            { label: '📘知识库',to: '/docs/zhishiku' },
          ],
        },
        // { to: '/docs/tool', label: '导航', position: 'left' },
        { to: '/docs/zhishiku', label: '📘知识库', position: 'left' },

        // TAB002 知识库按钮--------------------------------------------------
        // { to: '/docs/zhishiku', label: '📘知识库', position: 'left' },
        /*{
          label: '📘知识库',
          position: 'left',
          items: [
            { label: '1、运维', to: '/docs/linux-cover' },
            { label: '2、编程', to: '/docs/code-cover' },
            { label: '3、前端', to: '/docs/qianduan-cover' },
            { label: '4、黑客', to: '/docs/hacker-cover' },
            { label: '5、测试', to: '/docs/test' },
            { label: '6、AI', to: '/docs/ai' },
          ],
            }, */

        // TAB003 博客下拉列表--------------------------------------------------
        // { to: 'http://onedayxyy.cn/hexoblog/', label: '博客', position: 'left' },
        {
          label: '🌈博客',
          position: 'left',
          // to: '/Hello-Blog',
          items: [
            { label: '📕 文稿&分类', to: 'blog' },
            /*{ label: '📖博客', to: 'blog' },*/
            { label: '🗃️ 标签', to: 'blog/tags' },
            { label: '⏰时间轴', to: 'blog/archive' },
            { label: 'ruyu-blog', to: 'http://blog.onedayxyy.cn/' },
            { label: 'hexo', to: 'http://onedayxyy.cn/hexoblog/' },
            { label: 'VanBlog', to: 'https://vanblog.mereith.com/' },
            { label: '归档', to: 'blog/archive' },
          ],
        },
        /*{
          label: '📖 Blog',
          position: 'left',
          // to: '/Hello-Blog',
          items: [
            { label: '📕 文稿&分类', to: 'blog' },
            { label: '⏰ 时间轴', to: 'blog/archive' },
          ],
        },*/


        // TAB004 开源项目下拉列表 已合并到专题--------------------------------------------------
        // { to: '/docs/OpenSource', label: '开源项目', position: 'left' },
        /* 
        {
            label: '开源项目',
            position: 'left',
            items: [
                { label: '1、玩转Typora', to: '/docs/typora' },
                { label: '2、玩转Docusaurus', to: '/docs/docusaurus' },
                { label: '3、个人主页home3.0', to: '/docs/myindex' },
                { label: '4、ruyu-blog', to: '/docs/ruyu-blog-gitee' },
            ],
        },
         */

        // TAB005 专题--------------------------------------------------
        /* {
          label: '💎专题',
          // position: 'right',
          // to: 'docs/zhuanti',
          items: [
            { label: '0、开源项目', to: '/docs/OpenSource' },
            { label: '1、网站搭建', to: '/docs/beauty-website' },
            // { label: '2、云笔记最佳实践', to: '/docs/cloud-note' },
            // { label: '3、知识库选型', to: '/docs/wiki-select' },
            // { label: '4、脚本', to: '/docs/scripts' },
            // { label: '5、前端示例', to: '/docs/QianDuanShiLi' },
            // { label: '6、NAS', to: '/docs/nas' },
            // { label: '7、vscode', to: '/docs/vscode' },
          ],
        }, */

        // TAB006 资源  合并到后面--------------------------------------------------
        /*{
          label: '📸娱乐',
          position: 'left',
          items: [
            {
              label: '百度网盘',
              to: 'https://pan.baidu.com/s/1E0zTSlmuQHgTKLhAr6ZBTg?pwd=g9yv',
            },
            { label: 'zdir网盘', to: 'http://47.100.215.163:6080' },
          ],
        }, */
        /* {
          label: '📸 Life Style',
          position: 'left',
          to: '#',
          items: [
            { label: '🐺 Wild Wolf', to: 'docs/WildWolf/' },
            { label: '✨ 生活指南', to: 'docs/LifeGuide/' },
            { label: '🖥 效率指北', to: 'docs/EfficiencyGuide/' },
            { label: '🖼️ 相册', to: 'https://photo.onedayxyy.cn/' },
            { label: '🎧 音乐', to: 'https://music.onedayxyy.cn/' },
            { label: '🧿 观影厅', to: '/docs/movie' },
            { label: '🖼️ 时光', to: 'docs/WildWolf/' },
            { label: '🎧 音乐', to: 'docs/LifeGuide/' },
          ],
        }, */
        // TAB007 娱乐--------------------------------------------------
        /* {
          label: '📸娱乐',
          position: 'left',
          items: [
            { label: '🖼️ 相册', to: 'https://photo.onedayxyy.cn/' },
            { label: '🎧 音乐', to: 'https://music.onedayxyy.cn/' },
            { label: '🧿 观影厅', to: '/docs/movie' },
          ],
        }, */
        /* {
          label: '🎵 Album Music',
          position: 'left',
          to: '#',
          items: [
            { label: '🖼️ 时光', to: 'docs/WildWolf/' },
            { label: '🎧 音乐', to: 'docs/LifeGuide/' },
          ],
        }, */
        // TAB008 精神小屋--------------------------------------------------
        /* {
          label: '💖精神小屋',
          position: 'left',
          items: [
            { label: '说说', to: 'https://moments.onedayxyy.cn/' },
            // { label: '树洞', to: '/' },
            { label: '精神世界', to: '/docs/missing' },
            // { label: '时间管理', to: '/docs/timeplan' },
            // { label: '终将释怀', to: '/docs/xyy' },
            // { label: '陈果的幸福哲学课', to: '/docs/iwill' },
            // { label: '生活', to: '/docs/life' },
            // { label: '时间管理', to: '/docs/timeplan' },
            // { label: '个人成长', to: '/docs/PersonalDevelopment' },
            // { label: '我的复盘', to: '/docs/replay' },
          ],
        }, */
        /*{
          label: '🗃️ Project',
          to: 'project', //跳转到项目
          position: 'left',
          items: [
            { label: '📋 项目', to: 'project' },
            { label: '🧰 工具推荐', to: 'docs/tools' },
          ],
        },*/
        // TAB009 更多--------------------------------------------------
        // {
        //   label: '资源',
        //   position: 'left',
        //   items: [
        //     {
        //       label: '百度网盘',
        //       to: 'https://pan.baidu.com/s/1E0zTSlmuQHgTKLhAr6ZBTg?pwd=g9yv',
        //     },
        //     { label: 'zdir网盘', to: 'http://47.100.215.163:6080' },
        //   ],
        // },
        {
          label: '🍷更多',
          // position: 'right',
          items: [
            // { label: '留言板', to: '/' },
            //{ label: '🔗友链', to: 'friends' },
            { label: '项目', to: 'project' },
            { label: '🗺️ 友链', to: 'friends' },
            { label: '🌐 导航', to: 'https://google.com' },
            //{ label: '🚀 关于', to: 'about' },
            { label: '关于我', to: '/docs/aboutAuthor' },
            { label: '关于本站', to: '/docs/AboutMywebsite' },
            { label: '🔗 友链&导航', to: 'website' },
            { label: '项目', to: 'project' },
            // { label: '留言板', to: '/' },
            // { label: '🔗友链', to: 'friends' },

            // {
            //   label: '监控',
            //   to: 'http://47.100.215.163:3000/d/9CWBz0bik/1-node-exporter-for-prometheus-dashboard-cn-v20200628?orgId=2',
            // },
            // { label: '后台管理系统', to: '/' },
            // {
            //   label: '百度网盘',
            //   to: 'https://pan.baidu.com/s/1E0zTSlmuQHgTKLhAr6ZBTg?pwd=g9yv',
            // },
            // { label: 'zdir网盘', to: 'http://47.100.215.163:6080' },
            { label: '百度网盘', to: 'https://pan.baidu.com/s/1E0zTSlmuQHgTKLhAr6ZBTg?pwd=g9yv' },
            { label: 'zdir网盘', to: 'http://47.100.215.163:6080' },
          ],
        },

        // TAB010 关于 移动到更多--------------------------------------------------
        /* {
            label: '关于',
            // position: 'right',
            items: [

            ],
          }, */

        // { to: '/docs/aboutAuthor', label: '关于我', position: 'left' },
        /* {
            type: 'docSidebar',
            sidebarId: 'aboutMyWebsite',
            position: 'left',
            label: '关于本站',
        }, */

        // TAB011 QQ群--------------------------------------------------


       {
          href: 'https://onedayxyy.cn/images/image-20240703070602.png',
          label: 'QQ群',
          position: 'right',
        },

                // TAB012 github联系方式--------------------------------------------------
        /* {
          href: 'https://gitee.com/renlangman2',
          label: 'gitee',
          position: 'right',
        }, */

        // TAB013 监控--------------------------------------------------
        /* {
          href: 'http://47.100.215.163:3000/d/9CWBz0bik/1-node-exporter-for-prometheus-dashboard-cn-v20200628?orgId=2',
          label: '监控',
          position: 'right',
        }, */

        // 导航栏的语言下拉选择栏
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },

    // 引用自动生成的侧边栏配置
    sidebars: require('./sidebars.ts'),

    // 页脚内容
    footer: {
      //样式 深色
      style: 'dark',
      // 链接集合

      //第一组连接方式开始.....不用
      /*       links: [
        {
          title: '学习',
          items: [
            { label: '博客', to: 'blog' },
            { label: '归档', to: 'blog/archive' },
            { label: '技术笔记', to: 'docs/skill' },
            { label: '实战项目', to: 'project' },
            { label: '前端示例', to: 'https://example.kuizuo.cn' },
          ],
        },
        {
          title: '社交媒体',
          items: [
            { label: '关于我', to: '/about' },
            { label: 'GitHub', href: social.github.href },
            // { label: 'Twitter', href: social.x.href },
            // { label: '掘金', href: social.juejin.href },
            // { label: 'Discord', href: social.discord.href },
          ],
        },
        {
          title: '网站',
          items: [
            { label: 'js反混淆', to: 'https://js-deobfuscator.kuizuo.cn' },
            { label: 'cyberChef', to: 'https://gchq.github.io/CyberChef' },
            { label: 'api服务', to: 'https://api.kuizuo.cn' },
            { label: '便民服务', to: 'https://service.kuizuo.cn' },
            { label: '站点监控', to: 'https://uptime.kuizuo.cn' },
          ],
        },
        {
          title: '更多',
          items: [
            { label: '友链', position: 'right', to: 'friends' },
            {
              html: `
                <a href="https://docusaurus.io/zh-CN/" target="_blank" rel="noreferrer noopener">
                  <img src="/img/buildwith.png" alt="build with docusaurus" width="120" height="50"/>
                <a/>
                `,
            },
          ],
        },
      ], */
      //第二组连接方式开始.....不用
      /*links: [
         {
            title: '①',
            items: [{
                    label: '首页',
                    to: '/',
                },
                // {
                //     label: '起始页',
                //     to: 'https://onedayxyy.cn/',
                // },
            ],
        },
        {
            title: '②',
            items: [{
                    label: '博客',
                    to: 'https://blog.onedayxyy.cn/',
                },
            ],
        },
        {
            title: '③',
            items: [{
                    label: '知识库',
                    to: 'https://onedayxyy.cn/docusaurus/',
                },
            ],
        },
        {
            title: '④',
            items: [{
                    label: '导航',
                    to: '/docs/tool',
                },
            ],
        },
        {
            title: '⑤',
            items: [{
                    label: '开源项目',
                    to: 'https://onedayxyy.cn/docusaurus/docs/OpenSource',
                },
            ],
        },
        {
            title: '资源',
            items: [
                // {
                //     label: '友链',
                //     to: '/docs/dalao',
                // },
                {
                    href: 'https://pan.baidu.com/s/1E0zTSlmuQHgTKLhAr6ZBTg?pwd=g9yv',
                    label: '百度网盘',
                    position: 'left',
                },
                {
                    href: 'http://47.100.215.163:6080',
                    label: 'zdir网盘',
                    position: 'left',
                },
                // {
                //     href: 'http://47.100.215.163:3000/d/9CWBz0bik/1-node-exporter-for-prometheus-dashboard-cn-v20200628?orgId=2',
                //     label: '监控',
                //     position: 'left',
                // },
            ],
        },
        {
            title: '娱乐',
            items: [
                {
                    label: '相册',
                    href: 'http://47.100.215.163:8082/',
                },
                {
                    label: '音乐',
                    href: 'https://onedayxyy.cn/musics',
                },
                // {
                //     href: 'https://onedayxyy.cn/',
                //     label: '电影',
                // },
            ],
        },
        {
            title: '学习',
            items: [
                {
                    label: '时间管理',
                    href: '/docs/timeplan',
                },
                {
                    label: '个人成长',
                    to: '/docs/PersonalDevelopment',
                },
                {
                    label: '我的复盘',
                    to: '/docs/replay',
                },
            ],
        },
        {
            title: '感悟',
            items: [
                {
                    label: '时间管理',
                    href: '/docs/timeplan',
                },
                // {
                //     to: '/docs/life',
                //     label: '生活',
                //     position: 'left',
                // },
                {
                    href: '/docs/xyy',
                    label: '终将释怀',
                    position: 'left',
                },
            ],
        },
        {
            title: '更多',
            items: [
                {
                    label: '随笔',
                    href: '/docs/heart',
                },
                {
                    label: '终将释怀',
                    to: '/docs/xyy',
                },
                {
                    label: 'docusaurus博客',
                    to: '/blog',
                },
            ],
        },

        {
          title: '社交媒体',
          items: [
            { label: '关于我', to: '/about' },
            { label: 'GitHub', href: social.github.href },
            // { label: 'Twitter', href: social.x.href },
            // { label: '掘金', href: social.juejin.href },
            // { label: 'Discord', href: social.discord.href },
          ],
        },
        {
          title: '网站',
          items: [
            { label: 'js反混淆', to: 'https://js-deobfuscator.kuizuo.cn' },
            { label: 'cyberChef', to: 'https://gchq.github.io/CyberChef' },
            { label: 'api服务', to: 'https://api.kuizuo.cn' },
            { label: '便民服务', to: 'https://service.kuizuo.cn' },
            { label: '站点监控', to: 'https://uptime.kuizuo.cn' },
          ],
        },

        ] */
      //第三组连接方式开始.....在用
      links: [
        {
          title: '开始',
          items: [
            { label: '起始页', href: 'https://nav.ysundy.com/' },
            { label: '首页', to: '/' },
          ],
        },
        {
          title: '学习',
          items: [
            { label: '博客', to: 'blog' },
            { label: '归档', to: 'blog/archive' },
            { label: '技术笔记', to: 'docs/skill' },
            { label: '实战项目', to: 'project' },
            { label: '前端示例', to: 'https://example.kuizuo.cn' },
            // { label: '知识库', href: 'https://wiki.onedayxyy.cn/' },
            // { label: '博客', href: 'https://blog.onedayxyy.cn/' },
          ],
        },

        {
          title: '娱乐',
          items: [
            { label: '相册', href: 'https://photo.onedayxyy.cn/' },
            { label: '音乐', href: 'https://music.onedayxyy.cn/' },
          ],
        },
        {
          title: '资源',
          items: [
            {
              label: '百度网盘',
              href: 'https://pan.baidu.com/s/1E0zTSlmuQHgTKLhAr6ZBTg?pwd=g9yv',
            },
            { label: 'zdir网盘', href: 'http://47.100.215.163:6080' },
          ],
        },
        {
          title: '网站',
          items: [
            { label: 'js反混淆', to: 'https://js-deobfuscator.kuizuo.cn' },
            { label: 'cyberChef', to: 'https://gchq.github.io/CyberChef' },
            { label: 'api服务', to: 'https://api.kuizuo.cn' },
            { label: '便民服务', to: 'https://service.kuizuo.cn' },
            { label: '站点监控', to: 'https://uptime.kuizuo.cn' },
          ],
        },
        {
          title: '更多',
          items: [
            { label: '友链', position: 'right', to: 'friends' },
            { label: 'xyy知识库', href: 'https://wiki.onedayxyy.cn/' },
            { label: 'xyy博客', href: 'https://blog.onedayxyy.cn/' },
            {
              html: `
                <a href="https://docusaurus.io/zh-CN/" target="_blank" rel="noreferrer noopener">
                  <img src="/img/buildwith.png" alt="build with docusaurus" width="120" height="50"/>
                <a/>
                `,
            },
          ],
        },
      ],
      // 版权声明 ICP 公安备案
      copyright: `
        <p style="margin-bottom: 0;"><a href="http://beian.miit.gov.cn/">${beian}</a></p>
        <p style="display: inline-flex; align-items: center;"><img style="height:20px;margin-right: 0.5rem;" src="/img/police.png" alt="police" height="20"/><a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=${
          beian1.match(/\d+/)?.[0]
        }" >${beian1}</a></p>
        <p>Copyright © 2022 - ${new Date().getFullYear()} 暖阳. | Built with Docusaurus.</p>
        `,
    },

    // 索引配置
    /*  
    algolia: {
      appId: '0R34U',
      apiKey: 'a515c48bx4464301',
      indexName: 'algoliaSearch',
    },
    algolia: {
      appId: 'GV6YN1ODMO',
      apiKey: '50303937b0e4630bec4a20a14e3b7872',
      indexName: 'kuizuo',
    },
      */

    // 代码块主题
    prism: {
      //亮色主题
      //theme: themes.oneLight,
      theme: prismThemes.github,
      //深色主题
      //darkTheme: themes.oneDark,
      darkTheme: prismThemes.dracula,
      //添加支持的编程语言
      additionalLanguages: [
        'bash',
        'json',
        'java',
        'python',
        'php',
        'graphql',
        'rust',
        'toml',
        'protobuf',
      ],
      //默认编程语言
      defaultLanguage: 'javascript',
      // 评论相关设置
      magicComments: [
        {
          className: 'theme-code-block-highlighted-line',
          line: 'highlight-next-line',
          block: { start: 'highlight-start', end: 'highlight-end' },
        },
        {
          className: 'code-block-error-line',
          line: 'This will error',
        },
      ],
    },

    // 评论(giscus)，社交链接(socials) 均未注册
    /* 
    giscus: {
      repo: 'kuizuo/blog',
      repoId: 'MDEwOlJlcG9zaXRvcnkzOTc2MjU2MTI=',
      category: 'General',
      categoryId: 'DIC_kwDOF7NJDM4CPK95',
      theme: 'light',
      darkTheme: 'dark_dimmed',
    } satisfies Partial<GiscusConfig>, */

    //侧边栏显示目录级数
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 6,
    },

    //运行代码块
    liveCodeBlock: { playgroundPosition: 'top' },

    // 缩放图片
    zoom: {
      selector: '.markdown :not(em) > img',
      background: {
        light: 'rgb(255, 255, 255)',
        dark: 'rgb(50, 50, 50)',
      },
      // lastUpdated: true, // 添加这一行以启用最近更新时间显示
    },
  } satisfies Preset.ThemeConfig,
  //--------------网站主题配置end----------------------------------

  // 插入外部 JavaScript 链接
  /*   scripts: [
    {
      src: 'https://assets.salesmartly.com/js/project_23232_114665_1724296502.js', //在线聊天
      async: true, // 异步加载脚本
    },
     {
      src: 'https://fastly.jsdelivr.net/gh/stevenjoezhang/live2d-widget@latest/autoload.js', // 看板娘
      defer: true, //  延迟加载
     },
  ], */

  //--------------网站预设配置start----------------------------------
  presets: [
    // 第一组预设注释掉不用
    /*
    [
      'classic',
      / @type {import('@docusaurus/preset-classic').Options} /
      {
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
        // 停用博客文件夹
        blog: false,
        docs: {
          sidebarPath: './sidebars.ts',
          // autoCollapseCategories: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',

          //需要安下面2个插件
          remarkPlugins: [require('remark-images')],
          rehypePlugins: [require('rehype-katex')],
        },
        /*         blog: {
          showReadingTime: true,
          postsPerPage: 'ALL',
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          //需要安装下面2个包yarn add
          remarkPlugins: [require('remark-images')],
          // rehypePlugins: [require('rehype-katex')],
        }, /
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
    */
    [
      'classic',
      {
        // docs知识库
        docs: {
          path: 'docs', // 文档存放的路径
          breadcrumbs: true,
          // Simple use-case: string editUrl
          // editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
          // Advanced use-case: functional editUrl
          editUrl: ({ versionDocsDirPath, docPath }) =>
            `https://github.com/facebook/docusaurus/edit/main/website/${versionDocsDirPath}/${docPath}`,
          editLocalizedFiles: false,
          editCurrentVersion: false,
          routeBasePath: 'docs',
          // routeBasePath: '/', // Serve the docs at the site's root
          include: ['**/*.md', '**/*.mdx'], // 包含哪些文件
          exclude: [
            '**/_*.{js,jsx,ts,tsx,md,mdx}',
            '**/_*/**',
            '**/*.test.{js,jsx,ts,tsx}',
            '**/__tests__/**',
          ], // 排除哪些文件
          sidebarPath: 'sidebars.ts', //指定侧边栏配置文件的位置。
          /* async sidebarItemsGenerator({
            defaultSidebarItemsGenerator,
            numberPrefixParser,
            item,
            version,
            docs,
            isCategoryIndex,
          }) {
            // Use the provided data to generate a custom sidebar slice
            // 使用提供的数据生成自定义侧栏切片
            return [
              {type: 'doc', id: 'intro'},
              {
                type: 'category',
                label: 'Tutorials',
                items: [
                  {type: 'doc', id: 'tutorial1'},
                  {type: 'doc', id: 'tutorial2'},
                ],
              },
            ];
          }, */
          /* numberPrefixParser(filename) {
            // Implement your own logic to extract a potential number prefix
            // 实现您自己的逻辑来提取潜在的数字前缀
            const numberPrefix = findNumberPrefix(filename);
            // Prefix found: return it with the cleaned filename
            if (numberPrefix) {
              return {
                numberPrefix,
                filename: filename.replace(prefix, ''),
              };
            }
            // No number prefix found
            return {numberPrefix: undefined, filename};
          }, */
          // docLayoutComponent: '@theme/DocPage', // 自定义文档页面布局组件
          docsRootComponent: '@theme/DocsRoot',
          docVersionRootComponent: '@theme/DocVersionRoot',
          docRootComponent: '@theme/DocRoot',
          docItemComponent: '@theme/DocItem', // 自定义文档条目组件
          // remarkPlugins: [require('./my-remark-plugin')],
          remarkPlugins: [], // 额外的 Remark 插件
          rehypePlugins: [], // 额外的 Rehype 插件
          beforeDefaultRemarkPlugins: [],
          beforeDefaultRehypePlugins: [],
          showLastUpdateAuthor: true, // 是否显示最后一次更新作者
          showLastUpdateTime: true, // 是否显示最后一次更新时间
          disableVersioning: false,
          includeCurrentVersion: true,
          lastVersion: undefined,
          /* versions: {
            current: {
              label: 'Android SDK v2.0.0 (WIP)',
              path: 'android-2.0.0',
              banner: 'none',
            },
            '1.0.0': {
              label: 'Android SDK v1.0.0',
              path: 'android-1.0.0',
              banner: 'unmaintained',
            },
          }, */
          // onlyIncludeVersions: ['current', '1.0.0', '2.0.0'],
        },
        blog: false, // 停用博客文件夹
        theme: {
          customCss: ['./src/css/custom.css'], // 自定义 CSS 文件的路径
        },
        // 站点地图
        sitemap: {
          changefreq: 'weekly', // 站点地图的更新频率
          priority: 0.5, // 站点地图的优先级
          ignorePatterns: ['/tags/**'], // 忽略哪些路径
          filename: 'sitemap.xml', // 站点地图文件名
        },
        gtag: {
          trackingID: 'G-S4SD5NXWXF', // Google Analytics 的跟踪 ID
          anonymizeIP: true, // 是否匿名化 IP 地址
        },
        // 检查当前环境变量NODE_ENV的值是否为'development'
        // 如果为'development'，则设置debug为true，否则为false
        debug: process.env.NODE_ENV === 'development',
      } satisfies Preset.Options, // Preset.Options 类型的配置对象
    ],
  ],
  //--------------网站预设配置end----------------------------------

  //--------------网站插件配置start----------------------------------
  plugins: [
    'docusaurus-plugin-image-zoom', // 图片放大插件
    [
      '@docusaurus/plugin-ideal-image', //图像的 Docusaurus 插件（响应式、懒加载及低像素占位图）。
      {
        name: 'image', // 图像的名称
        quality: 70, //JPEG 压缩质量（0-100）
        max: 1030, //除了手动指定sizes，您还可以指定min、max和steps，然后系统将为您生成尺寸。
        min: 640, // 除了手动指定sizes，您还可以指定min、max和steps，然后系统将为您生成尺寸。
        steps: 2, // min配置在和之间max（含）生成的图像数量
        disableInDev: false, // 是否在开发环境中禁用插件
      },
    ],
    // ['docusaurus-plugin-baidu-tongji', { token: 'c9a3849aa75f9c4a4e65f846cd1a5155' }],
    [
      '@docusaurus/plugin-pwa',
      {
        debug: process.env.NODE_ENV === 'development',
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        pwaHead: [
          { tagName: 'link', rel: 'icon', href: '/img/logo.png' },
          { tagName: 'link', rel: 'manifest', href: '/manifest.json' },
          { tagName: 'meta', name: 'theme-color', content: '#12affa' },
        ],
      },
    ],
    [
      'vercel-analytics',
      {
        debug: process.env.NODE_ENV === 'development',
        mode: 'auto',
      },
    ],
    [
      './src/plugin/plugin-content-blog', // 为了实现全局 blog 数据，必须改写 plugin-content-blog 插件
      {
        path: 'blog',
        editUrl: ({ locale, blogDirPath, blogPath, permalink }) =>
          `https://github.com/RenLangMan2/DocusaurusBlog_V3.5.2/edit/main/${blogDirPath}/${blogPath}`,
        editLocalizedFiles: false,
        blogDescription: '代码人生：编织技术与生活的博客之旅',
        blogSidebarCount: 10,
        blogSidebarTitle: 'Blogs',
        postsPerPage: 12,
        showReadingTime: true,
        readingTime: ({ content, frontMatter, defaultReadingTime }) =>
          defaultReadingTime({ content, options: { wordsPerMinute: 300 } }),
        feedOptions: {
          type: 'all',
          title: '暖阳',
          copyright: `Copyright © ${new Date().getFullYear()} 暖阳 Built with Docusaurus.<p><a href="http://beian.miit.gov.cn/" class="footer_lin">${beian}</a></p>`,
        },
      },
    ],
    async function tailwindcssPlugin() {
      return {
        name: 'docusaurus-tailwindcss',
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require('tailwindcss'))
          postcssOptions.plugins.push(require('autoprefixer'))
          return postcssOptions
        },
      }
    },
    async function injectMotto() {
      return {
        name: 'docusaurus-motto',
        injectHtmlTags() {
          return {
            headTags: [
              {
                tagName: 'script',
                innerHTML: `
    (${function () {
      console.log(
        `%c Kz Blog %c https://github.com/kuizuo/blog`,
        'color: #fff; margin: 1em 0; padding: 5px 0; background: #12affa;',
        'margin: 1em 0; padding: 5px 0; background: #efefef;'
      )

      const motto = `
This Webisite Powered By Kz Blog.
Written by Docusaurus, Coding with Love.
--------
Love what you do and do what you love.
`

      if (document.firstChild?.nodeType !== Node.COMMENT_NODE) {
        document.prepend(document.createComment(motto))
      }
    }.toString()})();`,
              },
            ],
          }
        },
      }
    },
  ],
  //--------------网站插件配置end----------------------------------

  //--------------网页head部分参数设置start------------------------
  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'description',
        content: '暖阳的个人博客',
      },
    },
  ],
  //--------------网页head部分参数设置end------------------------

  //--------------网页样式表部分参数设置start------------------------
  stylesheets: [
    'https://cdn.jsdelivr.net/npm/misans@4.0.0/lib/Normal/MiSans-Normal.min.css',
    'https://cdn.jsdelivr.net/npm/misans@4.0.0/lib/Normal/MiSans-Medium.min.css',
    'https://cdn.jsdelivr.net/npm/misans@4.0.0/lib/Normal/MiSans-Semibold.min.css',
  ],
  //--------------网页样式表部分参数设置start------------------------

  // i18n多语言国际化设置
  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-CN',
    locales: ['en', 'zh-CN'],
    localeConfigs: {
      en: {
        htmlLang: 'en-GB',
      },
    },
  },
  // https://docusaurus.io/docs/api/docusaurus-config#onBrokenLinks
  //onBrokenLinks: 'warn',
  // onBrokenLinks: 'throw',
  onBrokenLinks: 'ignore',
  // 这将仅抑制警告，而不会修复潜在问题。
  //onBrokenMarkdownLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  onBrokenAnchors: 'ignore',
}

export default config
