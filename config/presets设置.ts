presets: [
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
          exclude: ['**/_*.{js,jsx,ts,tsx,md,mdx}', '**/_*/**', '**/*.test.{js,jsx,ts,tsx}', '**/__tests__/**'], // 排除哪些文件
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
  ]