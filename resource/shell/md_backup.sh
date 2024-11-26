#!/bin/bash
echo "开始备份md核心数据……"

cd /f/BaiduSyncdisk/backup/mdBackup
tar -czvf /f/BaiduSyncdisk/backup/mdBackup/`date +%F_%H-%M-%S`-mdBackup.tar.gz /d/docusaurus/docs


echo -e
echo "md数据大小："
#会被强制覆盖掉当天的代码
du -sh /f/BaiduSyncdisk/backup/mdBackup/

echo -e
echo "已备份的md文件如下："
ls /f/BaiduSyncdisk/backup/mdBackup -tlh