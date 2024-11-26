#!/bin/bash


###
 # @Author: liangzai450
 # @Date: 2024-08-25 15:00:07
 # @Description: 
 # @FilePath: \\shell\\website_monitor.sh
 # @LastEditors: liangzai450
 # @LastEditTime: 2024-10-30 03:05:48
 # ==============================================
 # Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
### 


cat > /f/docusaurus/docs/5、关于我/关于本站/2、网站监控.md << EOF
---
title: 2、网站监控
id: website_monitor
slug: /website_monitor
---
EOF

##打印docusaurus_wiki大小
docusaurus_wiki_size="$(du -sh /f/docusaurus/docs|awk '{print $1}')"
echo "docusaurus_wiki大小为：$docusaurus_wiki_size" >>  /f/docusaurus/docs/5、关于我/关于本站/2、网站监控.md

##打印md数量
mdSum=$(find /f/docusaurus/docs/ -name "*.md"|wc -l)
mdSumResult=", 共 $mdSum 篇md"
echo $mdSumResult >>  /f/docusaurus/docs/5、关于我/关于本站/2、网站监控.md
echo "" >>  /f/docusaurus/docs/5、关于我/关于本站/2、网站监控.md


##打印图床信息、每日访问次数 无法联网 提示ssh连接服务器时出现Permission denied (publickey,gssapi-keyex,gssapi-with-mic)
ssh root@101.35.100.97 -p 34521 -i /c/Users/Administrator/.ssh/03TC1_root/01lhkp-qu8b8yo8 "sh /root/shell/private_shell/monitor.sh" >> /f/docusaurus/docs/5、关于我/关于本站/2、网站监控.md




# # No03 TC1_root
# Host 03_TC1_root
#     # 主机地址
#     HostName 101.35.100.97
#     # 用户名
#     User root
#     # 端口号
#     #Port 22
#     #Port 2345
#     Port 34521
#     # 选择的Macs信息校验方式
#     Macs hmac-sha2-512-etm@openssh.com
#     # 下面一行代表使用ssh公钥鉴权方式
#     PreferredAuthentications publickey
#     # IdentityFile 私钥文件完整路径
#     #homepc
#     IdentityFile ~\.ssh\03TC1_root\01lhkp-qu8b8yo8
#     #workpc
#     #IdentityFile 私钥文件完整路径
#     #upan
#     #IdentityFile 私钥文件完整路径        
#     # 仅仅识别
#     IdentitiesOnly yes



#     ssh: unknown option -- -
# usage: ssh [-46AaCfGgKkMNnqsTtVvXxYy] [-B bind_interface] [-b bind_address]
#            [-c cipher_spec] [-D [bind_address:]port] [-E log_file]
#            [-e escape_char] [-F configfile] [-I pkcs11] [-i identity_file]
#            [-J destination] [-L address] [-l login_name] [-m mac_spec]
#            [-O ctl_cmd] [-o option] [-P tag] [-p port] [-R address]
#            [-S ctl_path] [-W host:port] [-w local_tun[:remote_tun]]
#            destination [command [argument ...]]
#        ssh [-Q query_option]