#!/bin/bash


###
 # @Author: liangzai450
 # @Date: 2024-08-25 15:00:07
 # @Description: 
 # @FilePath: \\shell\\latestUpdateArcticleTop10.sh
 # @LastEditors: liangzai450
 # @LastEditTime: 2024-10-30 00:50:56
 # ==============================================
 # Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
### 



# for i in {1..10}
# do
#   echo "Iteration $i"
# done

# 将脚本赋值给变量
script=$(cat <<'END_SCRIPT'
for i in {1..10}
do
  find /f/docusaurus/docs/ -name "*.md" ! -name 'latestUpdateArcticleTop10.md' -type f -exec stat --format="%y %n" {} + | sort -n -r | head -${i}|tail -1|awk '{print $1"---"$4}';echo -e
done
END_SCRIPT
)

cat > /f/docusaurus/docs/5、关于我/关于本站/3、latestUpdateArcticleTop10.md << EOF
---
title: 3、最近更新
id: latestUpdateArcticleTop10
slug: /latestUpdateArcticleTop10
---
EOF


# 执行脚本
eval "$script" >> /f/docusaurus/docs/5、关于我/关于本站/3、latestUpdateArcticleTop10.md

