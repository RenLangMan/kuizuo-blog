#!/bin/bash
echo "开始备份docusaurus配置数据……"

cd /f/BaiduSyncdisk/backup/博客配置核心数据/2、win10配置/docusaurus备份

mkdir `date +%F`-docusaurus备份
cd `date +%F`-docusaurus备份

# cp -a /f/docusaurus/.docusaurus/ ./
# cp -a /f/docusaurus/.git/ ./
# cp -a /f/docusaurus/.github/ ./
cp -a /f/docusaurus/.gitignore ./
# cp -a /f/docusaurus/.idea/ ./
cp -a /f/docusaurus/.vscode/ ./
cp -a /f/docusaurus/.yarn/ ./
cp -a /f/docusaurus/.yarnrc.yml ./
# cp -a /f/docusaurus/backup/ ./
cp -a /f/docusaurus/biome.json ./
cp -a /f/docusaurus/blog/ ./
# cp -a /f/docusaurus/config/ ./
# cp -a /f/docusaurus/create_docsfloders.py ./
cp -a /f/docusaurus/data/ ./
# cp -a /f/docusaurus/dev_workpc-a8d1d9799.zip ./
cp -a /f/docusaurus/docs/ ./
cp -a /f/docusaurus/docsearch.json ./
cp -a /f/docusaurus/docusaurus.config.ts ./
# cp -a /f/docusaurus/errblog/ ./
cp -a /f/docusaurus/i18n/ ./
cp -a /f/docusaurus/LICENSE ./
# cp -a /f/docusaurus/node_modules/ ./
cp -a /f/docusaurus/package.json ./
# cp -a /f/docusaurus/picgo.js ./
cp -a /f/docusaurus/README.md ./
cp -a /f/docusaurus/renovate.json ./
# cp -a /f/docusaurus/requirements.txt ./
cp -a /f/docusaurus/resource/ ./
cp -a /f/docusaurus/RUN.bat ./
cp -a /f/docusaurus/sidebars.ts ./
cp -a /f/docusaurus/src/ ./
cp -a /f/docusaurus/Start.bat ./
cp -a /f/docusaurus/static/ ./
cp -a /f/docusaurus/tags.yml ./
cp -a /f/docusaurus/tailwind.config.ts ./
cp -a /f/docusaurus/tsconfig.json ./
cp -a /f/docusaurus/yarn.lock ./
# cp -a /f/docusaurus/错误记录.txt ./


# 下面是原始脚本复制的文件夹，与我的盘符等不同。
# cp -a /d/docusaurus/README.md ./
# # cp -a /d/docusaurus/babel.config.js ./ #项目下没有此文件
# cp -a /d/docusaurus/blog/ ./
# #cp -a build/ ./
# # cp -a /d/docusaurus/custom.js ./ #项目下没有此文件
# cp -a /d/docusaurus/docs/ ./
# cp -a /d/docusaurus/docusaurus.config.js ./
# #cp -a node_modules/ ./
# cp -a /d/docusaurus/package-lock.json ./
# cp -a /d/docusaurus/package.json ./
# cp -a /d/docusaurus/resource/ ./
# cp -a /d/docusaurus/rsync.exe.stackdump ./
# cp -a /d/docusaurus/sidebars.js ./
# cp -a /d/docusaurus/src/ ./
# cp -a /d/docusaurus/static/ ./
# cp -a /d/docusaurus/.gitignore ./
# cp -a /d/docusaurus/.vscode ./

echo "docusaurus本地配置数据大小："
#会被强制覆盖掉当天的代码
du -sh /f/BaiduSyncdisk/backup/博客配置核心数据/2、win10配置/docusaurus备份/`date +%F`-docusaurus备份



# 暂无hexo数据需要备份 注释下面的脚本 2024年10月26日00:28:56

# echo "hexo backup-----------------------------------------"
# echo "开始全量备份hexo配置数据……"

# cd /f/BaiduSyncdisk/backup/博客配置核心数据/2、win10配置/hexo备份
# mkdir `date +%F`-hexo备份
# cd `date +%F`-hexo备份

# #cp -a .git/
# #cp -a .github/
# cp -a /f/hexo/.gitignore ./
# cp -a /f/hexo/README.md ./
# cp -a /f/hexo/_config.landscape.yml ./
# cp -a /f/hexo/_config.yml ./
# cp -a /f/hexo/db.json ./
# cp -a /f/hexo/md_source/ ./
# #cp -a node_modules/
# cp -a /f/hexo/package-lock.json ./
# cp -a /f/hexo/package.json ./
# #cp -a public/
# cp -a /f/hexo/resource/ ./
# cp -a /f/hexo/scaffolds/ ./
# cp -a /f/hexo/themes/ ./



# echo "hexo本地配置数据大小："
# #会被强制覆盖掉当天的代码
# du -sh /f/BaiduSyncdisk/backup/博客配置核心数据/2、win10配置/hexo备份/`date +%F`-hexo备份    