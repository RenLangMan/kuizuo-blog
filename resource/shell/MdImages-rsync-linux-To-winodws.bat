echo backupmd图床数据……
rsync.exe -avPzruh  --port 8730 --password-file=/homepc1/F/docusaurus/resource/shell/password.txt  root@101.35.100.97::cmi-MdImages/ /homepc1/F/BaiduSyncdisk/backup/rsync_local/cmi-MdImages-local

echo 推送docusaurus静态数据到博客
/F/docusaurus/resource/shell/xyy2.sh
