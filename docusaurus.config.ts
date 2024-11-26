import type * as Preset from '@docusaurus/preset-classic'
import type { Config } from '@docusaurus/types'
import { themes as prismThemes } from 'prism-react-renderer'
//import social from './data/social'
import type { GiscusConfig } from './src/components/Comment'

const beian = 'ICP备案号'
const beian1 = '公安备案号'

const config: Config = {
  /*------------------------------站点元数据------------------------------------------------------- */
  title: 'Ysundy Docusaurus Blog' /*网站标题*/,
  url: 'https://wiki.ysundy.com' /*站点URL*/,
  baseUrl: '/' /*站点BaseUrl*/,
  /*----------------------------------------------------------------------------------------------- */
  favicon: 'img/favicon.ico' /*网站图标的路径*/,
  trailingSlash: undefined /*undefined（默认）：保持 URL 不变，并为 /docs/myDoc.md 触发 /docs/myDoc/index.html*/,
  /*----------------------------------------------------------------------------------------------- */
  /*网站多语言国际化设置*/
  i18n: {
    defaultLocale: 'zh-CN' /*站点默认的区域*/,
    locales: ['en', 'zh-CN'] /*站点上部署的区域设置列表。必须包含 defaultLocale。*/,
    path: 'i18n' /*所有语言环境包的根目录，绝对路径/相对路径均可*/,
    /*每个区域设置的单独选项*/
    localeConfigs: {
      'zh-CN': {
        label: '简体中文' /*在区域设置下拉列表中为此区域设置显示的标签。*/,
        htmlLang: 'zh-CN' /*BCP 47 语言标签*/,
        direction: 'ltr' /*文字方向从左到右(ltr)/右到左(rtl)，用于选择区域设置的 CSS 和 HTML 元属性*/,
        calendar: 'gregory' /*日期纪元，gregory公历 */,
        path: 'zh-CN' /*与此区域设置的所有插件本地化文件夹相对的根文件夹。将对i18n.path进行解析。默认为区域设置的名称。*/,
      },
      en: {
        label: 'English' /*在区域设置下拉列表中为此区域设置显示的标签。*/,
        htmlLang: 'en-US' /*BCP 47 语言标签*/,
        direction: 'ltr' /*文字方向从左到右(ltr)/右到左(rtl)，用于选择区域设置的 CSS 和 HTML 元属性*/,
        calendar: 'gregory' /*日期纪元，gregory公历 */,
        path: 'en' /*与此区域设置的所有插件本地化文件夹相对的根文件夹。将对i18n.path进行解析。默认为区域设置的名称。*/,
      },
    },
  },
  /*----------------------------------------------------------------------------------------------- */
  future:
    undefined /*future 配置对象允许选择即将推出/不稳定/实验性的 Docusaurus 功能，这些功能尚未准备好迎接黄金时段。*/,
  noIndex: false /*默认为false，此选项将 <meta name="robots" content="noindex, nofollow"> 添加到每个页面，以告诉搜索引擎避免对你的网站建立索引*/,
  /*----------------------------------------------------------------------------------------------- */
  onBrokenLinks: 'ignore' /*检测到任何损坏的链接时的行为，默认为warn*/,
  //onBrokenLinks: 'warn',
  //onBrokenLinks: 'throw',
  onBrokenAnchors: 'ignore' /*检测到任何使用 Docusaurus 的 Heading 组件声明的损坏锚点时的行为，默认为warn*/,
  // 这将仅抑制警告，而不会修复潜在问题。
  //onBrokenMarkdownLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn' /*检测到任何损坏的 Markdown 链接时的行为，默认为warn*/,
  onDuplicateRoutes: 'warn' /*检测到任何 重复路由 时的行为*/,
  /*----------------------------------------------------------------------------------------------- */
  tagline: '明心静性，爱自己' /*网站的标语*/,

  /*------------------------部----署----配----置----Start------------------------------------------ */
  /*如果你不使用 docusaurus deploy 命令，则不需要此命令。*/
  organizationName: 'renlangman2' /*拥有存储库的 GitHub 用户或组织。*/,
  projectName: 'mogai-docus-kuizuo-v1' /*GitHub 存储库的名称。*/,
  deploymentBranch: 'gh-pages' /*将静态文件部署到的分支的名称。*/,
  githubHost: 'github.com' /*你的服务器的主机名。如果你使用 GitHub Enterprise，则很有用。*/,
  githubPort: '22' /*你的服务器的端口。如果你使用 GitHub Enterprise，则很有用。*/,
  /*------------------------部----署----配----置-----End------------------------------------------ */

  /*-----------------------主题、插件和预设配置---------------主题配置根目录--------------------------------------------------------- */
  /* themes: ['@docusaurus/theme-classic'] /*themes: ['@docusaurus/theme-classic'] 可简写为 themes: ['classic'],*/

  /*themeConfig:{},*/
  themeConfig: {
    /*色彩模式*/
    colorMode: {
      defaultMode: 'light' /*默认色调*/,
      disableSwitch: false /*true时只能使用单色模式，隐藏导航栏中的色彩模式切换开关,*/,
      respectPrefersColorScheme: false /*true则由用户系统首选项确定色调主题, defaultMode配置失效*/,
    },
    /*元图片*/
    image: '/img/og.png' /*你可以配置将用于元标记meta tag 的默认图片，特别是 og:image 和 twitter:image。*/,
    /*元数据              任何字段都会直接传递到 <meta /> 标签。可能的字段包括 id、name、property、content、itemprop 等。*/
    metadata: [
      {
        name: 'author',
        content: 'Ysundy',
      },
      {
        name: 'keywords',
        content: 'blog, javascript, typescript, node, react, vue, web',
      },
      {
        name: 'keywords',
        content: '编程爱好者, Web开发者, 写过爬虫, 学过逆向, 主攻ts全栈',
      },
    ],
    /*顶部公告栏*/
    announcementBar: {
      id: 'support_us' /*任何可识别此消息的值。*/,
      content: '欢迎访问我的网站👋这里将会持续更新，感谢关注~' /*公告的文本内容。HTML 将被插入。*/,
      backgroundColor: '#fafbfc' /*公告栏背景色*/,
      textColor: '#091E42' /*公告栏文本色*/,
      isCloseable: true /*是否可以通过 '×' 按钮关闭此公告。*/,
    },
    /*docs文档库相关主题配置项*/
    docs: {
      versionPersistence: 'localStorage' /*定义首选文档版本的浏览器持久性。*/,
      /*docs 侧边栏*/
      sidebar: {
        hideable: true /*在侧边栏底部显示隐藏按钮。*/,
        autoCollapseCategories: true /*自动折叠你导航到的所有同级类别。*/,
      },
    },
    /*blog博客相关主题配置项*/
    blog: {
      /*blog 侧边栏*/
      sidebar: {
        groupByYear: true /* 按年份分组侧边栏博客文章。*/,
      },
    },

    /*顶部导航栏*/
    navbar: {
      /*名称	          类型	                默认	        描述
       title	        string	             undefined	    导航栏的标题。
       logo	          见下文	             undefined	    徽标对象的定制。
       items	        NavbarItem[]        []	            导航栏项目列表。请参阅下面的规范。
       hideOnScroll	  boolean	            false	          当用户向下滚动时导航栏是否隐藏。
       style	        'primary' | 'dark'	与主题相同	      设置导航栏样式，忽略深色/浅色主题。 */

      /* title: '🏡首页',*/ /*导航栏的标题。*/
      /* logo徽标图设置 */
      logo: {
        alt: 'ysundy wiki' /*logo图片的 Alt 标签*/,
        src: 'img/logo.webp' /*徽标图片的 URL。默认情况下附加基本 URL*/,
        srcDark: 'img/logo.webp' /*在夜间模式下使用的替代图片 URL。*/,
        href: '/' /*单击徽标时导航到的链接*/,
        width: 32 /*图像宽度*/,
        height: 32 /*图像高度*/,
        target: '_self' /*_self 当前窗口打开,_blank新窗口打开*/,
        className: 'custom-navbar-logo-class' /*应用于图片的 CSS 类*/,
        style: { border: 'solid red' } /*CSS 内联样式对象。React/JSX 风格，使用驼峰命名法属性。*/,
        // src: 'https://ice.frostsky.com/2024/08/17/fe2225d1be58e6076fd44a1744cd69e4.png',
        // srcDark: 'https://ice.frostsky.com/2024/08/17/fe2225d1be58e6076fd44a1744cd69e4.png',
      },
      /*导航栏项目集*/
      items: [
        /* 01 */
        {
          label: '🏡Home',
          position: 'left',
          items: [
            { label: '👏首页', to: '/' },
            { label: '👏起始页', to: 'https://nav.ysundy.com' },
            { label: '🌐导航', to: '/docs/tool' },
          ],
        },
        /* 07 */
        {
          /*导航栏链接到侧边栏，如果你的侧边栏经常更新且顺序不稳定，请使用此导航栏项目类型。*/
          type: 'docSidebar' /*将此导航栏项目的类型设置为侧边栏的第一个文档。*/,
          sidebarId: 'mySidebar' /* 该项目链接到的侧边栏的 ID。*/,
          label: '📘知识库' /* 该项目要显示的名称。 */,
          position: 'left' /* 该项目应出现在导航栏的一侧。*/,
          docsPluginId: 'default' /*文档所属的文档插件的 ID。默认default */,
        },
        /* 03 */
        {
          label: '🌈博客',
          position: 'left',
          items: [
            { label: '📕 文稿&分类', to: 'blog' },
            { label: '🗃️ 标签', to: 'blog/tags' },
            { label: '⏰时间轴', to: 'blog/archive' },
            { label: '----------', to: '/' },
            { label: 'ruyu-blog', to: 'http://blog.onedayxyy.cn/' },
            { label: 'hexo', to: 'http://onedayxyy.cn/hexoblog/' },
            { label: 'VanBlog', to: 'https://vanblog.mereith.com/' },
          ],
        },
        /* 02 */
        {
          label: '✍️ Notes',
          position: 'left',
          to: 'docs/intro', //跳转到概述',
          items: [
            { label: '🖥️ 手记', to: 'docs/overview' },
            { label: '🌐 Docusaurus ', to: 'docs/Docusaurus' },
            { label: '🛠️ 专栏', to: 'docs/tools/' },
            /*{ label: '📘知识库', to: '/docs/intro' },*/
          ],
        },
        /* 04 */
        {
          label: '🍷更多',
          position: 'left',
          items: [
            { label: '🔗 友链&导航', to: 'website' },
            { label: '🚀 关于', to: 'about' },
            { label: '导航栏项目', to: 'https://docusaurus.nodejs.cn/docs/api/themes/configuration#navbar-items' },
          ],
        },
        /*---------*/
        /* 05 */
        // {
        //   /* 导航栏下拉菜单 */
        //   type: 'dropdown' /*将此项目的类型设置为下拉列表。*/,
        //   label: 'Community' /*该项目要显示的名称。*/,
        //   position: 'left',
        //   items: [
        //     /*要包含在下拉列表中的项目。*/
        //     {
        //       label: '导航栏链接',
        //       href: 'https://docusaurus.nodejs.cn/docs/api/themes/configuration#navbar-link',
        //     },
        //     {
        //       label: '导航栏文档链接',
        //       href: 'https://docusaurus.nodejs.cn/docs/api/themes/configuration#navbar-doc-link',
        //     },
        //     {
        //       label: '导航栏文档版本',
        //       href: 'https://docusaurus.nodejs.cn/docs/api/themes/configuration#navbar-docs-version',
        //     },
        //     {
        //       label: '导航栏文档侧边栏',
        //       href: 'https://docusaurus.nodejs.cn/docs/api/themes/configuration#navbar-doc-sidebar',
        //     },
        //     {
        //       label: '带有自定义 HTML 的导航栏',
        //       href: 'https://docusaurus.nodejs.cn/docs/api/themes/configuration#navbar-with-custom-html',
        //     },
        //     // ... more items
        //   ],
        // },
        // /* 06 */
        // {
        //   /* 导航栏文档链接 */
        //   type: 'doc' /*将此项目的类型设置为文档链接*/,
        //   docId: 'introduction' /*该项目链接到的文档的 ID。*/,
        //   label: 'Docs' /*该项目要显示的名称。*/,
        //   position: 'left' /*该项目应出现在导航栏的一侧。*/,
        //   docsPluginId: 'default' /*文档所属的文档插件的 ID。默认default */,
        // },

        // /* 08 */
        // {
        //   /*导航栏文档版本下拉列表*/
        //   type: 'docsVersionDropdown' /*将此项目的类型设置为文档版本下拉列表。*/,
        //   position: 'left' /*该项目应出现在导航栏的一侧。*/,
        //   dropdownItemsBefore: [] /* 在下拉列表的开头添加其他下拉项目。*/,
        //   dropdownItemsAfter: [{ to: '/versions', label: 'All versions' }] /*在下拉列表末尾添加其他下拉项目。*/,
        //   docsPluginId: 'default' /*文档版本控制所属的文档插件的 ID。*/,
        //   dropdownActiveClassDisabled: true /*浏览文档时不要添加链接活动类。默认为false*/,
        // },
        // /* 09 */
        // {
        //   /*导航栏文档版本*/
        //   type: 'docsVersion' /*将此项的类型设置为文档版本链接。*/,
        //   label: 'label' /*该项目要显示的名称。*/,
        //   to: '/path' /*该项目指向的内部链接*/,
        //   position: 'left' /*该项目应出现在导航栏的一侧。*/,
        //   docsPluginId: 'default' /*文档版本控制所属的文档插件的 ID。*/,
        // },
        // /* 10 */
        // {
        //   /*导航栏区域设置下拉菜单*/
        //   type: 'localeDropdown' /*  将此项目的类型设置为区域设置下拉列表。*/,
        //   position: 'left' /*该项目应出现在导航栏的一侧。*/,
        //   dropdownItemsBefore: [] /*在下拉列表的开头添加其他下拉项目。*/,
        //   dropdownItemsAfter: [
        //     {
        //       to: 'https://my-site.com/help-us-translate',
        //       label: 'Help us translate',
        //     },
        //   ] /*在下拉列表末尾添加其他下拉项目。*/,
        //   queryString: undefined /*要附加到 URL 的查询字符串。默认为undefined */,
        // },
        // /* 11 */
        // {
        //   /*导航栏搜索*/
        //   type: 'search' /*将此项目的类型设置为搜索栏。*/,
        //   position: 'right' /*该项目应出现在导航栏的一侧。*/,
        //   className: '/' /*此导航栏项目的自定义 CSS 类。默认为/ */,
        // },
        // /* 12 */
        // {
        //   /*带有自定义 HTML 的导航栏*/
        //   type: 'html' /*将此项目的类型设置为 HTML 元素。*/,
        //   position: 'right' /*该项目应出现在导航栏的一侧。*/,
        //   value: '<button>Give feedback</button>' /*要在此导航栏项目内渲染的自定义 HTML。*/,
        //   className: '/' /*此导航栏项目的自定义 CSS 类。默认为/ */,
        // },
        /*-----*/
        /* 13 */
        {
          href: 'https://onedayxyy.cn/images/image-20240703070602.png',
          label: 'QQ群',
          position: 'right',
        },
        /* 14 */
        {
          type: 'localeDropdown',
          position: 'right',
        },
        /* 15 */
        {
          type: 'search',
          position: 'right',
        },
        /* {},{},{},{},{},{},{},{},{},{}  */
      ],
      hideOnScroll: true /*当用户开始向下滚动页面时自动隐藏导航栏，并在用户向上滚动时再次显示它。*/,
      // style: 'dark' /*导航栏样式 dark primary undefined */,
    },

    /* 代码块主题*/
    prism: {
      theme: prismThemes.github /*用于浅色主题代码块的 Prism 主题。*/,
      darkTheme: prismThemes.dracula /*用于深色主题代码块的 Prism 主题。*/,
      /*添加支持的编程语言*/
      additionalLanguages: ['bash', 'json', 'java', 'python', 'php', 'graphql', 'rust', 'toml', 'protobuf'],
      defaultLanguage: 'javascript' /*用于未声明任何显式语言的代码块的默认语言*/,
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

    // 页脚内容
    footer: {
      //样式 深色
      style: 'dark',
      // 链接集合

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
            // { label: '技术笔记', to: 'docs/skill' },
            // { label: '实战项目', to: 'project' },
            // { label: '前端示例', to: 'https://example.kuizuo.cn' },
            // { label: '知识库', href: 'https://wiki.onedayxyy.cn/' },
            // { label: '博客', href: 'https://blog.onedayxyy.cn/' },
          ],
        },
        {
          title: '更多',
          items: [
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

    //侧边栏显示目录级数
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 6,
    },

    /*-------------------------下面还未整理----------------------------------------------------------------*/
    // 禁用面包屑导航
    breadcrumbs: false,

    // 引用自动生成的侧边栏配置
    sidebars: require('./sidebars.ts'),

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



    giscus: {
      repo: 'kuizuo/blog',
      repoId: 'MDEwOlJlcG9zaXRvcnkzOTc2MjU2MTI=',
      category: 'General',
      categoryId: 'DIC_kwDOF7NJDM4CPK95',
      theme: 'light',
      darkTheme: 'dark_dimmed',
    } satisfies Partial<GiscusConfig>,
    
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

  /*-------------------主题、插件和预设配置--------------插件配置根目录-------------------------------------------------------------- */
  /*plugins:[],*/
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
        offlineModeActivationStrategies: ['appInstalled', 'standalone', 'queryString'],
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
        'margin: 1em 0; padding: 5px 0; background: #efefef;',
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

  /*----------------------下面还未整理---主题、插件和预设配置---------预设配置----在themeConfig内部-------------------------------------*/
  /*presets:[],*/
  presets: [
    [
      'classic',
      {
        /* 检查当前环境变量NODE_ENV的值是否为'development' */
        /* 如果为'development'，则设置debug为true，否则为false */
        debug: process.env.NODE_ENV === 'development',

        /* docs文档集 */
        docs: {
          path: 'docs' /*文件系统上文档内容目录的路径，相对于站点目录。*/,
          breadcrumbs: true /*启用或禁用文档页面上的面包屑。*/,
          /*用于编辑站点的基本 URL。最终 URL 由 editUrl + relativeDocPath 计算。
              使用函数可以对每个文件进行更细致的控制。完全省略此变量将禁用编辑链接。*/
          /*      editUrl:undefined , 
              Simple use-case: string editUrl*/
          /*editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',*/
          /*Advanced use-case: functional editUrl */
          editUrl: ({ versionDocsDirPath, docPath }) =>
            `https://github.com/facebook/docusaurus/edit/main/website/${versionDocsDirPath}/${docPath}`,
          editLocalizedFiles: false /*编辑 URL 将定位本地化文件，而不是原始的未本地化文件。当 editUrl 是函数时被忽略。*/,
          editCurrentVersion: false /*编辑 URL 将始终针对当前版本文档而不是旧版本。当 editUrl 是函数时被忽略。*/,
          routeBasePath: 'docs' /*你网站的文档部分的 URL 路由。不要包含尾部斜杠。使用 / 发送没有基本路径的文档。*/,
          tagsBasePath: 'tags' /*你网站的标签列表页面的 URL 路由。它位于 routeBasePath 之前。*/,
          // include: ['**/*.md', '**/*.mdx'], /*与要构建的 Markdown 文件相匹配的 glob 模式数组，相对于内容路径。*/
          // exclude: ['**/_*.{js,jsx,ts,tsx,md,mdx}', '**/_*/**', '**/*.test.{js,jsx,ts,tsx}', '**/__tests__/**'], /*与要排除的 Markdown 文件匹配的 glob 模式数组。用作基于 include 选项的细化。*/
          include: ['**/*.md', '**/*.mdx'], // 包含哪些文件
          exclude: ['**/_*.{js,jsx,ts,tsx,md,mdx}', '**/_*/**', '**/*.test.{js,jsx,ts,tsx}', '**/__tests__/**'], // 排除哪些文件
          sidebarPath:
            'sidebars.ts' /*侧边栏配置的路径。  指定侧边栏配置文件的位置。 使用 false 禁用侧边栏，或使用 undefined 创建完全自动生成的侧边栏。*/,
          sidebarCollapsible: true /*侧边栏类别默认情况下是否可折叠。另见 可折叠类别*/,
          sidebarCollapsed: true /*侧边栏类别是否默认折叠。另见 默认扩展类别*/,
          /*用于将 'autogenerated' 类型的侧边栏项目替换为真实侧边栏项目（文档、类别、链接...）的函数。另见 自定义侧边栏项目生成器*/
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

          /*自定义解析逻辑从文件名中提取数字前缀。使用 false 禁用此行为并保持文档不变，使用 true 使用默认解析器。另见 使用数字前缀*/
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

          docsRootComponent:
            '@theme/DocsRoot' /*所有文档插件页面（包括所有版本）的父组件。在文档页面和版本之间导航时保持安装状态。*/,
          docVersionRootComponent:
            '@theme/DocVersionRoot' /*单个版本的所有文档页面的父组件（带有侧边栏的文档页面、标签页面）。在该特定版本的页面之间导航时保持安装状态。*/,
          docRootComponent:
            '@theme/DocRoot' /*所有带有侧边栏的文档页面的父组件（常规文档页面、类别生成的索引页面）。在此类页面之间导航时保持安装状态。*/,
          docItemComponent: '@theme/DocItem' /*主文档容器，包含目录、分页等。*/,
          docTagsListComponent: '@theme/DocTagsListPage' /*标签列表页面的根组件*/,
          docTagDocListComponent: '@theme/DocTagDocListPage' /*	"包含标签 X 的文档" 页面的根组件。*/,
          docCategoryGeneratedIndexComponent: '@theme/DocCategoryGeneratedIndexPage' /*生成的类别索引页的根组件。*/,
          // remarkPlugins: [require('./my-remark-plugin')],
          remarkPlugins: [] /* 额外的 Remark 插件 备注传递给 MDX 的插件。*/,
          rehypePlugins: [] /* 额外的 Rehype 插件,Rehype 插件传递给 MDX。*/,
          beforeDefaultRemarkPlugins: [] /*自定义 Remark 插件在默认 Docusaurus Remark 插件之前传递到 MDX。*/,
          beforeDefaultRehypePlugins: [] /*自定义 Rehype 插件在默认 Docusaurus Rehype 插件之前传递到 MDX。*/,
          showLastUpdateAuthor: true /*是否显示最后更新文档的作者。*/,
          showLastUpdateTime: true /*是否显示文档的最后更新日期。这需要在构建期间访问 git 历史记录，因此无法与浅克隆（CI 系统的常见默认设置）一起正常工作。使用 GitHub actions/checkout，使用 fetch-depth: 0。*/,
          disableVersioning: false /*即使存在多个版本，也应显式禁用版本控制。这将使该网站仅包含当前版本。如果 includeCurrentVersion: false 和 disableVersioning: true 将会出错。*/,
          includeCurrentVersion: true /*包括文档的当前版本。*/,
          lastVersion: undefined /*文档导航栏项目优先导航到并默认显示的版本。*/,
          tags: 'tags.yml' /*列出预定义标签的 YAML 文件的路径。相对于文档版本内容目录。string | false | null | undefined	*/,
          onInlineTags:
            'warn' /*当文档包含内联标签（未出现在预定义标签列表中，通常为 docs/tags.yml）时的插件行为。'ignore' | 'log' | 'warn' | 'throw'	*/,
          /*独立定制每个版本的属性。*/
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
          /* onlyIncludeVersions: ['current', '1.0.0', '2.0.0'],*/ /*仅包含所有可用版本的子集。*/
          //docLayoutComponent: '@theme/DocPage', // 自定义文档页面布局组件
        },
        /* blog博客配置*/
        blog: false, // 停用博客文件夹
        /*pages配置*/
        pages: {},
        /* 站点地图 */
        sitemap: {
          changefreq: 'weekly', // 站点地图的更新频率
          priority: 0.5, // 站点地图的优先级
          ignorePatterns: ['/tags/**'], // 忽略哪些路径
          filename: 'sitemap.xml', // 站点地图文件名
        },
        /*主题*/
        theme: {
          customCss: ['./src/css/custom.css'], // 自定义 CSS 文件的路径
        },
        /*googleAnalytics*/
        /*googleAnalytics: {},*/
        /*gtag配置*/
        gtag: {
          trackingID: 'G-S4SD5NXWXF', // Google Analytics 的跟踪 ID
          anonymizeIP: true, // 是否匿名化 IP 地址
        },
        /**/
        /*googleTagManager: {},*/
      } satisfies Preset.Options, // Preset.Options 类型的配置对象
    ],
  ],
  /*----------------------------------------------------------------------------------------------- */
  markdown: undefined,
  /*---------------------定制配置--------------------定制配置根目录----------------------------------------------- */
  customFields: {
    bio: '道阻且长，行则将至',
    description:
      '是一个由暖阳创建的个人知识库(带博客功能)，主要记录一些自己收集到的知识点，该网站基于 React 驱动的静态网站生成器 Docusaurus3.5.2 构建。该网站基于 React 驱动的静态网站生成器 Docusaurus 构建。由愧怍进行二次魔改，Hyed在愧怍进行二次修改',
  },
  /*----------------------------------------------------------------------------------------------- */
  staticDirectories: ['static'],
  /*----------------------------------------------------------------------------------------------- */
  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'description',
        content: '暖阳的个人博客',
      },
    },
  ],
  /*----------------------------------------------------------------------------------------------- */
  // 插入外部 JavaScript 链接
  scripts: [
    /* {
         // 在线聊天
       src: 'https://assets.salesmartly.com/js/project_115881_120589_1725045557.js',
       async: true,  // 异步加载脚本
     },
     {
         // 看板娘
       src: 'https://fastly.jsdelivr.net/gh/stevenjoezhang/live2d-widget@latest/autoload.js',
       defer: true,  // 延迟加载
     },*/

    {
      src: 'https://cpython666.github.io/js/clickjs/fireworks.js',  //鼠标爆炸效果
      efer: true,  // 延迟加载
    },
    {
      src: 'https://cpython666.github.io/js/clickjs/anime.min.js',  //鼠标爆炸效果
      efer: true,  // 延迟加载
    },


  ], 
  /*----------------------------------------------------------------------------------------------- */
  stylesheets: [
    'https://cdn.jsdelivr.net/npm/misans@4.0.0/lib/Normal/MiSans-Normal.min.css',
    'https://cdn.jsdelivr.net/npm/misans@4.0.0/lib/Normal/MiSans-Medium.min.css',
    'https://cdn.jsdelivr.net/npm/misans@4.0.0/lib/Normal/MiSans-Semibold.min.css',
  ],
  /*----------------------------------------------------------------------------------------------- */
  clientModules: [require.resolve('./src/clientModules/routeModules.ts')],
  /*----------------------------------------------------------------------------------------------- */
  ssrTemplate: undefined,
  /*----------------------------------------------------------------------------------------------- */
  titleDelimiter: '🦖', // Defaults to `|`
  /*----------------------------------------------------------------------------------------------- */
  baseUrlIssueBanner: true, // Defaults to `true`
  /*----------------------------------------------------------------------------------------------- */
  // https://docusaurus.io/docs/api/docusaurus-config#onBrokenLinks
  /*----------------------------------------------------------------------------------------------- */
}

export default config
