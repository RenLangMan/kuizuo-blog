items:[

        // {
        //   type:'default',                     /*可选，将此项目类型设为链接*/
        //   label: 'Introduction',              /*项目显示的名称 必须*/
        //   // Only one of "label" or "html" should be used
        //   // html: '<b>Introduction</b>'      /*与 label 相同，但渲染纯 HTML 而不是文本内容。*/
        //   to: 'docs/introduction',            /*客户端路由，用于在网站内导航。baseUrl 将自动添加到该值前面*/
        //   // Only one of "to" or "href" should be used
        //   // href: 'https://www.facebook.com', /*全页导航，用于网站外部的导航。只能使用 to 或 href 之一。*/
        //   prependBaseUrlToHref:false,/* 是否将 baseUrl 添加到 href 值之前。*/
        //   position: 'left',       /* 该项目应出现在导航栏的一侧。left/right */
        //     activeBaseRegex: 'docs/(next|v8)',/*将活动类样式应用于从此路径开始的所有路由。这通常是没有必要的。*/
        //     target: '_blank',
        // },

        // {
        //   type: 'dropdown', /*将此项目的类型设置为下拉列表。*/
        //   label: 'Community', /*该项目要显示的名称。*/
        //   position: 'left',  /*项目在导航栏的方位*/
        //   /*要包含在下拉列表中的项目列表。*/
        //   items: [
        //     {
        //       label: 'Facebook',
        //       href: 'https://www.facebook.com',
        //     },
        //     {
        //       type: 'doc',
        //       label: 'Social',
        //       docId: 'social',
        //     },
        //     // ... more items
        //   ],
        // },
        /*
        {
          type: 'doc',
          position: 'left',
          docId: 'introduction',
          label: 'Docs',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          type: 'docsVersionDropdown',
          position: 'right',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/facebook/docusaurus',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
        */



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
      { label: '📘知识库', to: '/docs/zhishiku' },
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
  {
    type: 'search',
    position: 'right',
  },
]
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
      ],
      //-------
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