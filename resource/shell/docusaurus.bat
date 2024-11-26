::添加自己要执行的任务 待修改
echo  Push winodws docusaurus static data to ecs...
@rem rsync.exe -avPzruh --delete --port 8730 --password-file=/cygdrive/D/docusaurus/resource/shell/password.txt /cygdrive/D/docusaurus/build root@47.100.215.163::cmi-docusaurus/
rsync.exe -avPzruh --delete --port 8730 --password-file=/homepc1/F/docusaurus/resource/shell/password.txt /homepc1/F/docusaurus/build root@101.35.100.97::cmi-docusaurus/      