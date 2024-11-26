#!/bin/sh

echo "Print latestUpdateArcticleTop10……" 
sh /f/docusaurus/resource/shell/latestUpdateArcticleTop10.sh 

echo "Print websiteMonitor……" 
# websiteMonitor="$(ssh root@47.100.215.163 sh /root/monitor.sh)"
# echo ${websiteMonitor}
# sed -i "1i\\${websiteMonitor}" /d/docusaurus/docs/关于本站/2、网站监控.md;echo -e
# sed -i "1i\\\n" /d/docusaurus/docs/关于本站/2、网站监控.md
# echo "![](https://onedayxyy.cn/images/IMG_024.gif)" >> /d/docusaurus/docs/关于本站/2、网站监控.md


##执行网站监控脚本
sh /f/docusaurus/resource/shell/website_monitor.sh


cd /f/docusaurus/ 
yarn build
echo "docusaurus 本地数据构建成功！"
echo ""
echo ""

#加入看板娘代码
sed  -i '4i\<script src="https://fastly.jsdelivr.net/gh/stevenjoezhang/live2d-widget@latest/autoload.js"></script>' /f/docusaurus/build/index.html
cat /f/docusaurus/build/index.html |head -6



echo "推送winodws site数据到ecs："
/f/docusaurus/resource/shell/docusaurus.bat
echo "rsync: rsync数据winodws-->ecs推送成功!"
echo ""
echo ""

echo "重新加载ecs上nginx进程："
ssh root@101.35.100.97 'systemctl reload nginx'
echo " "
echo " "

echo "汇总docusaurus数据目录大小："
echo "winodws上docusaurus元数据总大小："
du -sh /f/docusaurus/docs|awk '{print $1}'
echo " "
echo " "

echo "winodws上docusaurus静态数据大小："
du -sh /f/docusaurus/build|awk '{print $1}'
echo " "
echo " "

echo "ecs上docusaurus静态数据大小："
ssh root@101.35.100.97 "du -sh /root/rsync/rsync-docusaurus/build |awk '{print $1}'"
echo " "
echo " "

echo "-------------------------------------------------------------------"
echo "xyy, i miss you!"
echo "-------------------------------------------------------------------"
echo "推送结束！"
echo "明心静性，平和，爱自己"

# cd /d/docusaurus
# git status
# git pull
# git add -A
# git commit -m "data commit"
# git push
# git status




echo "同步图床数据到本地："
/f/docusaurus/resource/shell/MdImages-rsync-linux-To-winodws.bat
echo "rsync: rsync数据linux ecs-->win推送成功!"
echo ""
echo ""


@pause