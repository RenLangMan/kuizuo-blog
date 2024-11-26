#!/usr/bin/env python3
# coding=utf-8
"""
Author: liangzai450@sina.com
Date: 2024-08-21 14:18:32
Description: 
FilePath: \\mogai-docus-kuizuo-v1\\create_docsfloders.py
LastEditors: liangzai450@sina.com
LastEditTime: 2024-08-21 14:18:56
==============================================
Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
"""


import os  # 导入模块


def CreateFloder(path, folders_list):
    for i in folders_list:  # 依次创建子目录
        # *定义一个变量判断文件是否存在,path指代路径,str(i)指代文件夹的名字*
        isExists = os.path.exists(path + str(i))
        if not isExists:  # 判断如果文件不存在,则创建
            os.makedirs(path + str(i))
            print("【%s 】目录创建成功" % i)
        else:
            print("【%s 】目录已经存在" % i)
            continue  # 如果文件不存在,则继续上述操作,直到循环结束
    return True


pathbase = "F:/Repos/mogai-docus-kuizuo-v1/docs/"  # 设置创建后文件夹存放的位置
path1 = pathbase + "1、笔记数据/"

# docs一级目录
lst_foldernames0 = [
    "1、运维",
    "2、编程",
    "3、前端",
    "4、黑客",
    "5、测试",
    "6、AI",
    "1、运维/linux",
    "1、运维/linux/1、linux",
    "1、运维/linux/2、devops",
    "1、运维/linux/3、docker",
    "1、运维/linux/4、k8s",
    "1、运维/linux/5、other",
]

CreateFloder(path=path1, folders_list=lst_foldernames0)
