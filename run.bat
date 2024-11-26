@echo off
for /f "tokens=2 delims=:." %%a in ('"%SystemRoot%\System32\chcp.com"') do (
    set _OLD_CODEPAGE=%%a
)
if defined _OLD_CODEPAGE (
    "%SystemRoot%\System32\chcp.com" 65001 > nul
)
echo "文件编码已经由%_OLD_CODEPAGE%更改为UTF-8(65001)"

cd /d %~dp0
echo %~d0
echo %__CD__%
if %~dp0 neq %__CD__% (
    goto end
)

@rem CHOICE [/C 可选字符] [/N] [/CS] [/T 延时秒数 /D 默认值 ] [/M 批注说明]
@echo "请选择运行环境："
@echo "     1.【W】:在workpc运行,yarn缓存于WorkPC的%HOMEDRIVE%%HOMEPATH%\AppData\Local目录下;"
@echo "     2.【H】:在HOMEPC运行,yarn缓存于HomePC的%HOMEDRIVE%%HOMEPATH%\AppData\Local目录下;"
@echo "     3.【U】:在U盘Portable环境中运行,yarn缓存于U盘的%HOME%\AppData\Local\Yarn\Berry目录(H:\Portable\WPy64-31160\settings\AppData\Local\Yarn\Berry)下;"
@echo "     4.【C】退出执行;"
@echo .
CHOICE /C WHUC /M "请输入WHUC任一字符开始运行对应的脚本..."
@echo .
@echo "你选择的是第%errorlevel%个选项"
if %errorlevel%==4 goto end
if %errorlevel%==3 goto line_UPanPortable
if %errorlevel%==2 goto line_homepc
if %errorlevel%==1 goto line_WorkPC

:line_WorkPC
echo '未开发WorkPC'
echo "workpc"
PATH=C:\Program Files (x86)\Common Files\Intel\Shared Files\cpp\bin\Intel64;C:\Program Files (x86)\Microsoft Visual Studio\Shared\Python310_64\Scripts\;C:\Program Files (x86)\Microsoft Visual Studio\Shared\Python310_64\;C:\Windows\system32;C:\Windows;C:\Windows\System32\Wbem;C:\Windows\System32\WindowsPowerShell\v1.0\;C:\Windows\System32\OpenSSH\;C:\Program Files\Microsoft VS Code\bin;C:\Program Files\Git\cmd;C:\Program Files (x86)\NetSarang\Xftp 7\;C:\Program Files\Microsoft SQL Server\130\Tools\Binn\;C:\Program Files\dotnet\;C:\Program Files\Microsoft SQL Server\150\Tools\Binn\;C:\Program Files\go\bin;D:\nvm;D:\nvm\nodejs;D:\nvm\node_global;C:\MinGW64\bin;I:\hugo\bin;C:\Program Files (x86)\Windows Kits\10\Windows Performance Toolkit\;C:\Program Files\Microsoft SQL Server\Client SDK\ODBC\170\Tools\Binn\;C:\Program Files (x86)\NetSarang\Xshell 7\;C:\Program Files\Pandoc\;C:\Program Files\TortoiseGit\bin;C:\Users\wyf\.dotnet\tools;D:\nvm;D:\nvm\nodejs;C:\MinGW64\bin;I:\hugo\bin;
@REM @rem PATH=C:\Program Files (x86)\Common Files\Intel\Shared Files\cpp\bin\Intel64;C:\Windows\system32;C:\Windows;C:\Windows\System32\Wbem;C:\Windows\System32\WindowsPowerShell\v1.0\;C:\Windows\System32\OpenSSH\;C:\Program Files\Microsoft VS Code\bin;C:\Program Files\Git\cmd;C:\Program Files (x86)\NetSarang\Xftp 7\;C:\Program Files\Microsoft SQL Server\130\Tools\Binn\;C:\Program Files\dotnet\;C:\Program Files\Microsoft SQL Server\150\Tools\Binn\;C:\Program Files\go\bin;C:\MinGW64\bin;I:\hugo\bin;C:\Program Files (x86)\Windows Kits\10\Windows Performance Toolkit\;C:\Program Files\Microsoft SQL Server\Client SDK\ODBC\170\Tools\Binn\;C:\Program Files (x86)\NetSarang\Xshell 7\;C:\Program Files\Pandoc\;C:\Program Files\TortoiseGit\bin;C:\Users\wyf\.dotnet\tools;C:\MinGW64\bin;I:\hugo\bin;
@echo off
title NodeJS Shell
set NVM_HOME=D:\nvm
set NVM_SYMLINK=D:\nvm\nodejs
set LocalNodeJS_DIRBASE=%NVM_HOME%
set LocalNodeJS_DIRBASETMP=%NVM_HOME%
echo LocalNodeJS_DIRBASETMP路径地址为:【%LocalNodeJS_DIRBASETMP%】
pushd %LocalNodeJS_DIRBASETMP%
set LocalNodeJS_DIRBASE=%__CD__%
@rem 去掉尾缀的\
if "%LocalNodeJS_DIRBASE:~-1%"=="\" set LocalNodeJS_DIRBASE=%LocalNodeJS_DIRBASE:~0,-1%
echo LocalNodeJS_DIRBASE路径地址为:【%LocalNodeJS_DIRBASE%】
echo.
echo "------------------------------------------------------------------------"
set LocalNodeJS_DIRBASETMP=
popd

@rem 设置node根目录路径
set LocalNodeJS_DIR=%LocalNodeJS_DIRBASE%\nodejs
set NODE_PATH=%LocalNodeJS_DIR%

@rem 设置node_modules路径变量
set NodeModules_DIR=%LocalNodeJS_DIR%\node_modules
set NodeJSCache_DIR=%NodeModules_DIR%\node_cache

@rem set NodeJsPrefix_DIR=%NodeModules_DIR%\node_global
set NodeJsPrefix_DIR=%LocalNodeJS_DIRBASE%\node_global

set NodeJsCorepack_DIR=%NodeModules_DIR%\corepack
set NodeJsCorepackShim_DIR=%NodeModules_DIR%\corepack\shims
set NodeJsNpm_DIR=%NodeModules_DIR%\npm
set NodeJsNpmBin_DIR=%NodeModules_DIR%\npm\bin



@rem set HOME=%LocalNodeJS_DIRBASE%\WPy64-31160\settings
set HOME=%HOMEDRIVE%%HOMEPATH%
if not exist "%HOME%" mkdir "%HOME%" 
if not exist "%HOME%\AppData" mkdir "%HOME%\AppData" 
if not exist "%HOME%\AppData\Roaming" mkdir "%HOME%\AppData\Roaming" 
set APPDATA=%HOMEDRIVE%%HOMEPATH%\AppData\Roaming

if not exist %HOME%\AppData\Local mkdir %HOME%\AppData\Local
set LOCALAPPDATA=%HOMEDRIVE%%HOMEPATH%\AppData\Local
if not exist %LOCALAPPDATA%\Yarn mkdir %LOCALAPPDATA%\Yarn 
if not exist %LOCALAPPDATA%\Yarn\Berry mkdir %LOCALAPPDATA%\Yarn\Berry
if not exist %LOCALAPPDATA%\Yarn\Berry\cache mkdir %LOCALAPPDATA%\Yarn\Berry\cache
@rem set NODEJSWORKDIR=%LocalNodeJS_DIRBASE%\Code\NodeJS
set NODEJSWORKDIR=%~dp0

@rem 设置nodejs与npm_cmd两个文件路径变量
set NODEJS=%LocalNodeJS_DIR%\node.exe
if exist "%LocalNodeJS_DIR%\npm.cmd" (
    set NPM_CMD=%LocalNodeJS_DIR%\npm.cmd
)

rem Ensure this Node.js and npm are first in the PATH
@rem set "PATH=%APPDATA%\npm;%~dp0;%PATH%"
set PATH=%~dp0;%NODE_HOME%;%NODE_PATH%;%NodeJsCorepackShim_DIR%;%NodeJsCorepack_DIR%;%NodeModules_DIR%;%PATH%;%NodeJsNpmBin_DIR%;%NodeJsNpm_DIR%

set NODEJSVER=20.12.0
if not exist "%LocalNdeJS_DIR%" mkdir "%LocalNodeJS_DIR%"
if not exist "%HOME%" mkdir "%HOME%"
if not exist "%NODEJSWORKDIR%" mkdir "%NODEJSWORKDIR%"
if not exist "%NodeModules_DIR%" mkdir "%NodeModules_DIR%"
if not exist "%NodeJSCache_DIR%" mkdir "%NodeJSCache_DIR%"
if not exist "%NodeJsPrefix_DIR%" mkdir "%NodeJsPrefix_DIR%"

rem default is as before: Winpython ..\Notebooks
set NODEJSWORKDIR1=%NODEJSWORKDIR%

rem if we have a file or directory in %1 parameter, we use that directory 
if not "%~1"=="" (
   if exist "%~1" (
      if exist "%~1\" (
         rem echo it is a directory %~1
	     set NODEJSWORKDIR1=%~1
	  ) else (
	  rem echo  it is a file %~1, so we take the directory %~dp1
	  set NODEJSWORKDIR1=%~dp1
	  )
   )
) else (
rem if it is launched from another directory , we keep it that one echo %__CD__%
if not "%__CD__%"=="%~dp0" set  NODEJSWORKDIR1="%__CD__%"
)
rem remove potential doublequote
set NODEJSWORKDIR1=%NODEJSWORKDIR1:"=%
rem remove some potential last \
if "%NODEJSWORKDIR1:~-1%"=="\" set NODEJSWORKDIR1=%NODEJSWORKDIR1:~0,-1%

if not "%NODEJSWORKDIR%"=="%NODEJSWORKDIR1%" cd %NODEJSWORKDIR1%
setlocal enabledelayedexpansion
pushd %LocalNodeJS_DIR%

rem Figure out the Node.js version.
set print_version=%NODEJS% -p -e "process.versions.node + ' (' + process.arch + ')'"
for /F "usebackq delims=" %%v in (`%print_version%`) do set version=%%v

rem Print message.
if exist "%LocalNodeJS_DIR%\npm.cmd" (
    set NPM_CMD=%LocalNodeJS_DIR%\npm.cmd
    echo.
    echo "------------------------------------------------------------------------"
    echo Your environment has been set up for using Node.js !version! and npm.
    echo "-----------------------"
    echo Your npm prefix path: && %NPM_CMD% config get prefix
    echo "-----------------------"
    echo Your npm cache path: && %NPM_CMD% config get cache
    echo "-----------------------"
    echo Your environment has been set up for using Node.js: && node --version
    echo "-----------------------"
    echo Your environment has been set up for using yarn :V && yarn --version
    echo "-----------------------"
    @rem npm config list
    yarn config
    echo "-----------------------"
    yarn config globalFolder
    yarn config set globalFolder  %LOCALAPPDATA%\Yarn\Berry
    yarn config globalFolder
    echo "-----------------------"
    yarn config cacheFolder
    yarn config set cacheFolder %LOCALAPPDATA%\Yarn\Berry\cache
    yarn config cacheFolder
    echo "-----------------------"
    set 
    echo "------------------------------------------------------------------------"
    @REM @echo "请选择运行环境："
    @REM @echo "     1.【I】:运行 yarn install;"
    @REM @echo "     2.【S】:运行 yarn start;"
    @REM @echo "     3.【B】:运行 yarn build;"
    @REM @echo "     4.【C】退出执行;"
    @REM @echo .
    @REM echo %errorlevel%
    @REM CHOICE /C ISBC /M "请输入ISBC任一字符开始运行对应的脚本..."
    @REM echo %errorlevel%
    @REM if %errorlevel%==0 goto end
    @REM @echo "你选择的是第%errorlevel%个选项"
    @REM if 
    @REM if %errorlevel%==4 goto end
    @REM if %errorlevel%==3 ( yarn build)
    @REM if %errorlevel%==2 ( yarn start)
    @REM if %errorlevel%==1 ( yarn install)
    @REM if %errorlevel%==0 goto end
) else (
    echo.
    echo "2------------------------------------------------------------------------"
    echo Your environment has been set up for using Node.js !version!.
    echo.
)
@REM echo "00"
@REM popd
@REM echo "01"
@REM endlocal
@REM echo "02"

@REM rem If we're in the Node.js directory, change to the user's home dir.
@REM echo "03"
@REM if not "%NODEJSWORKDIR%"=="%NODEJSWORKDIR1%" cd %NODEJSWORKDIR1%
@REM echo "04"
@REM yarn start
@REM echo "05"
@REM goto end
@REM echo "06"


:line_homepc
echo "------------------------------------------------------------------------"
echo '待开发homepc'
echo "homepc"

set NVM_HOME=C:\Develop\nvm
set NVM_SYMLINK=C:\Develop\nvm\nodejs
PATH=C:\Python310\Scripts\;C:\Python310\;%NVM_HOME%;%NVM_SYMLINK%;%NVM_SYMLINK%\node_global;C:\Program Files (x86)\Common Files\Intel\Shared Files\cpp\bin\Intel64;C:\Windows\system32;C:\Windows;C:\Windows\System32\Wbem;C:\Windows\System32\WindowsPowerShell\v1.0\;C:\Windows\System32\OpenSSH\;C:\Program Files\Microsoft SQL Server\130\Tools\Binn\;C:\Program Files\Microsoft SQL Server\Client SDK\ODBC\170\Tools\Binn\;D:\Program Files (x86)\page;D:\Go\bin;C:\ProgramData\chocolatey\bin;C:\Program Files (x86)\NetSarang\Xshell 7\;C:\Program Files\dotnet\;C:\Program Files (x86)\NetSarang\Xftp 7\;C:\Program Files\Microsoft SQL Server\150\Tools\Binn\;D:\Program Files\TortoiseGit\bin;C:\Program Files\PuTTY\;C:\Program Files\Git\cmd;D:\Programs\Microsoft VS Code\bin;%USERPROFILE%\.dotnet\tools;%USERPROFILE%\AppData\Local\GitHubDesktop\bin;%USERPROFILE%\go\bin;%USERPROFILE%\.dotnet\tools;D:\Program Files (x86)\Tencent\QQGameTempest\Hall.57986\
echo "------------------------------"
title 在HomePc创建VuePressHope
set LocalNodeJS_DIRBASE=%NVM_HOME%
set LocalNodeJS_DIRBASETMP=%NVM_HOME%
echo LocalNodeJS_DIRBASETMP路径地址为:【%LocalNodeJS_DIRBASETMP%】
echo.
pushd %LocalNodeJS_DIRBASETMP%
set LocalNodeJS_DIRBASE=%__CD__%
if "%LocalNodeJS_DIRBASE:~-1%"=="\" set LocalNodeJS_DIRBASE=%LocalNodeJS_DIRBASE:~0,-1%
echo LocalNodeJS_DIRBASE路径地址为:【%LocalNodeJS_DIRBASE%】
echo.
echo "------------------------------"
set LocalNodeJS_DIRBASETMP=
@rem popd 为退出刚刚进入的目录，返回之前的目录
popd
echo "------------------------------------------------------------------------"
@rem 设置node根目录路径
set LocalNodeJS_DIR=%LocalNodeJS_DIRBASE%\nodejs
set NODE_PATH=%LocalNodeJS_DIR%

@rem 设置node_modules路径变量
set NodeModules_DIR=%LocalNodeJS_DIR%\node_modules
set NodeJSCache_DIR=%NodeModules_DIR%\node_cache

@rem set NodeJsPrefix_DIR=%NodeModules_DIR%\node_global
set NodeJsPrefix_DIR=%LocalNodeJS_DIRBASE%\node_global

set NodeJsCorepack_DIR=%NodeModules_DIR%\corepack
set NodeJsCorepackShim_DIR=%NodeModules_DIR%\corepack\shims
set NodeJsNpm_DIR=%NodeModules_DIR%\npm
set NodeJsNpmBin_DIR=%NodeModules_DIR%\npm\bin

@rem set HOME=%LocalNodeJS_DIRBASE%\WPy64-31160\settings
set HOME=%HOMEDRIVE%%HOMEPATH%
if not exist "%HOME%" mkdir "%HOME%" 
if not exist "%HOME%\AppData" mkdir "%HOME%\AppData" 
if not exist "%HOME%\AppData\Roaming" mkdir "%HOME%\AppData\Roaming" 
if not exist "%HOME%\AppData\Local" mkdir "%HOME%\AppData\Local"
set APPDATA=%HOMEDRIVE%%HOMEPATH%\AppData\Roaming
set LOCALAPPDATA=%HOMEDRIVE%%HOMEPATH%\AppData\Local
if not exist %LOCALAPPDATA%\Yarn mkdir %LOCALAPPDATA%\Yarn 
if not exist %LOCALAPPDATA%\Yarn\Berry mkdir %LOCALAPPDATA%\Yarn\Berry
if not exist %LOCALAPPDATA%\Yarn\Berry\cache mkdir %LOCALAPPDATA%\Yarn\Berry\cache
set NODEJSWORKDIR=%~dp0
set NODEJS=%LocalNodeJS_DIR%\node.exe
if exist "%LocalNodeJS_DIR%\npm.cmd" (
    set NPM_CMD=%LocalNodeJS_DIR%\npm.cmd
)
set PATH=%~dp0;%NODE_HOME%;%NODE_PATH%;%NodeJsCorepackShim_DIR%;%NodeJsCorepack_DIR%;%NodeModules_DIR%;%PATH%;%NodeJsNpmBin_DIR%;%NodeJsNpm_DIR%
set NODEJSVER=20.12.0
if not exist "%LocalNodeJS_DIR%" mkdir "%LocalNodeJS_DIR%"
if not exist "%HOME%" mkdir "%HOME%"
if not exist "%NODEJSWORKDIR%" mkdir "%NODEJSWORKDIR%"
if not exist "%NodeModules_DIR%" mkdir "%NodeModules_DIR%"
if not exist "%NodeJSCache_DIR%" mkdir "%NodeJSCache_DIR%"
if not exist "%NodeJsPrefix_DIR%" mkdir "%NodeJsPrefix_DIR%"


set NODEJSWORKDIR1=%NODEJSWORKDIR%
rem if we have a file or directory in %1 parameter, we use that directory 
if not "%~1"=="" (
   if exist "%~1" (
      if exist "%~1\" (
         rem echo it is a directory %~1
	     set NODEJSWORKDIR1=%~1
	  ) else (
	  rem echo  it is a file %~1, so we take the directory %~dp1
	  set NODEJSWORKDIR1=%~dp1
	  )
   )
) else (
rem if it is launched from another directory , we keep it that one echo %__CD__%
if not "%__CD__%"=="%~dp0" set  NODEJSWORKDIR1="%__CD__%"
)
set NODEJSWORKDIR1=%NODEJSWORKDIR1:"=%
if "%NODEJSWORKDIR1:~-1%"=="\" set NODEJSWORKDIR1=%NODEJSWORKDIR1:~0,-1%
if not "%NODEJSWORKDIR%"=="%NODEJSWORKDIR1%" cd %NODEJSWORKDIR1%
setlocal enabledelayedexpansion
pushd %LocalNodeJS_DIR%

set print_version=%NODEJS% -p -e "process.versions.node + ' (' + process.arch + ')'"
for /F "usebackq delims=" %%v in (`%print_version%`) do set version=%%v



if exist "%LocalNodeJS_DIR%\npm.cmd" (
    set NPM_CMD=%LocalNodeJS_DIR%\npm.cmd
    echo.
    echo "------------------------------------------------------------------------"
    echo Your environment has been set up for using Node.js !version! and npm.
    echo "-----------------------"
    echo Your npm prefix path: && %NPM_CMD% config get prefix
    echo "-----------------------"
    echo Your npm cache path: && %NPM_CMD% config get cache
    echo "-----------------------"
    echo Your environment has been set up for using Node.js: && node --version
    echo "-----------------------"
    echo Your environment has been set up for using yarn :V && yarn --version
    echo "-----------------------"
    @rem npm config list
    yarn config
    echo "-----------------------"
    yarn config globalFolder
    yarn config set globalFolder  %LOCALAPPDATA%\Yarn\Berry
    yarn config globalFolder
    echo "-----------------------"
    yarn config cacheFolder
    yarn config set cacheFolder %LOCALAPPDATA%\Yarn\Berry\cache
    yarn config cacheFolder
    echo "w001"
    echo "------------------------------------------------------------------------"
    echo "w002"
) else (
    echo "w003"
    echo.
    echo "w004"
    echo "------------------------------------------------------------------------"
    echo "w005"
    echo Your environment has been set up for using Node.js !version!.
    echo "w006"
    echo.
    echo "w007"
)
goto end


:line_UPanPortable
echo '待开发UPanPortable'
title NodeJS Shell
echo.
set PortableNodeJS_DIRBASE=%~d0\Portable
set PortableNodeJS_DIRBASETMP=%~d0\Portable\
if "%PortableNodeJS_DIRBASETMP:~-1%"=="\" set PortableNodeJS_DIRBASETMP=%PortableNodeJS_DIRBASETMP:~0,-1%
echo PortableNodeJS_DIRBASETMP路径地址为:【%PortableNodeJS_DIRBASETMP%】
echo.
if not exist %PortableNodeJS_DIRBASETMP% (echo "not find path ... exit " && goto end)
pushd %PortableNodeJS_DIRBASETMP%
@rem 进入H:\Portable\目录，设置第二个变量PortableNodeJS_DIRBASE
set PortableNodeJS_DIRBASE=%__CD__%
@rem 去掉尾缀的\
if "%PortableNodeJS_DIRBASE:~-1%"=="\" set PortableNodeJS_DIRBASE=%PortableNodeJS_DIRBASE:~0,-1%
echo PortableNodeJS_DIRBASE路径地址为:【%PortableNodeJS_DIRBASE%】
echo.
echo "------------------------------------------------------------------------"
set PortableNodeJS_DIRBASETMP=
@rem popd 为退出刚刚进入的目录，返回之前的目录
popd

@rem 设置node根目录路径
set PortableNodeJS_DIR=%PortableNodeJS_DIRBASE%\WPy64-31160\n
set NODE_HOME=%PortableNodeJS_DIR% 
set NODE_PATH=%PortableNodeJS_DIR%

@rem 设置node_modules路径变量
set NodeModules_DIR=%PortableNodeJS_DIR%\node_modules
set NodeJSCache_DIR=%NodeModules_DIR%\node_cache
set NodeJsPrefix_DIR=%NodeModules_DIR%\node_global
set NodeJsCorepack_DIR=%NodeModules_DIR%\corepack
set NodeJsCorepackShim_DIR=%NodeModules_DIR%\corepack\shims
set NodeJsNpm_DIR=%NodeModules_DIR%\npm
set NodeJsNpmBin_DIR=%NodeModules_DIR%\npm\bin

set HOME=%PortableNodeJS_DIRBASE%\WPy64-31160\settings
set NODEJSWORKDIR=%PortableNodeJS_DIRBASE%\Code\02_NodeJSProject
if not exist "%HOME%" mkdir "%HOME%" 
if not exist "%HOME%\AppData" mkdir "%HOME%\AppData" 
if not exist "%HOME%\AppData\Roaming" mkdir "%HOME%\AppData\Roaming" 

@REM set APPDATA_LOCAL_Folder=%HOME%\AppData\Local
@REM set Yarn_LOCAL_Folder=%HOME%\AppData\Local\Yarn
@REM set Yarn_Berry_globalFolder=%HOME%\AppData\Local\Yarn\Berry
@REM set Yarn_Berry_cacheFolder=%HOME%\AppData\Local\Yarn\Berry\cache

if not exist %HOME%\AppData\Local mkdir %HOME%\AppData\Local
if not exist %HOME%\AppData\Local\Yarn mkdir %HOME%\AppData\Local\Yarn 
if not exist %HOME%\AppData\Local\Yarn\Berry mkdir %HOME%\AppData\Local\Yarn\Berry
if not exist %HOME%\AppData\Local\Yarn\Berry\cache mkdir %HOME%\AppData\Local\Yarn\Berry\cache

set LOCALAPPDATA=%HOME%\AppData\Local
@rem 设置nodejs与npm_cmd两个文件路径变量
set NODEJS=%PortableNodeJS_DIR%\node.exe
if exist "%PortableNodeJS_DIR%\npm.cmd" (
    set NPM_CMD=%PortableNodeJS_DIR%\npm.cmd
)

rem Ensure this Node.js and npm are first in the PATH
@rem set "PATH=%APPDATA%\npm;%~dp0;%PATH%"
set PATH=%~dp0;%NODE_HOME%;%NODE_PATH%;%NodeJsCorepackShim_DIR%;%NodeJsCorepack_DIR%;%NodeModules_DIR%;%PATH%;%NodeJsNpmBin_DIR%;%NodeJsNpm_DIR%

set NODEJSVER=18.20.3
if not exist "%PortableNodeJS_DIR%" mkdir "%PortableNodeJS_DIR%"
if not exist "%HOME%" mkdir "%HOME%"
if not exist "%NODEJSWORKDIR%" mkdir "%NODEJSWORKDIR%"
if not exist "%NodeModules_DIR%" mkdir "%NodeModules_DIR%"
if not exist "%NodeJSCache_DIR%" mkdir "%NodeJSCache_DIR%"
if not exist "%NodeJsPrefix_DIR%" mkdir "%NodeJsPrefix_DIR%"

if not exist %~dp0\.yarnrc.yml type .yarnrc.yml
(
    @REM echo cacheFolder: "%HOME%/AppData/Local/Yarn/Berry/cache"
    @REM echo globalFolder: "%HOME%/AppData/Local/Yarn/Berry"
    echo nodeLinker: node-modules
    echo npmRegistryServer: "https://registry.npmmirror.com"
) >.yarnrc.yml


rem default is as before: Winpython ..\Notebooks
set NODEJSWORKDIR1=%NODEJSWORKDIR%

rem if we have a file or directory in %1 parameter, we use that directory 
if not "%~1"=="" (
   if exist "%~1" (
      if exist "%~1\" (
         rem echo it is a directory %~1
	     set NODEJSWORKDIR1=%~1
	  ) else (
	  rem echo  it is a file %~1, so we take the directory %~dp1
	  set NODEJSWORKDIR1=%~dp1
	  )
   )
) else (
rem if it is launched from another directory , we keep it that one echo %__CD__%
if not "%__CD__%"=="%~dp0" set  NODEJSWORKDIR1="%__CD__%"
)
rem remove potential doublequote
set NODEJSWORKDIR1=%NODEJSWORKDIR1:"=%
rem remove some potential last \
if "%NODEJSWORKDIR1:~-1%"=="\" set NODEJSWORKDIR1=%NODEJSWORKDIR1:~0,-1%
if not "%NODEJSWORKDIR%"=="%NODEJSWORKDIR1%" cd %NODEJSWORKDIR1%
setlocal enabledelayedexpansion
pushd %PortableNodeJS_DIR%

rem Figure out the Node.js version.
set print_version=%NODEJS% -p -e "process.versions.node + ' (' + process.arch + ')'"
for /F "usebackq delims=" %%v in (`%print_version%`) do set version=%%v

rem Print message.
if exist "%PortableNodeJS_DIR%\npm.cmd" (
    set NPM_CMD=%PortableNodeJS_DIR%\npm.cmd
    echo.
    echo "------------------------------------------------------------------------"
    echo Your environment has been set up for using Node.js !version! and npm.
    echo "-----------------------"
    echo Your npm prefix path: && %NPM_CMD% config get prefix
    echo "-----------------------"
    echo Your npm cache path: && %NPM_CMD% config get cache
    echo "-----------------------"
    echo Your environment has been set up for using Node.js: && node --version
    echo "-----------------------"
    echo Your environment has been set up for using yarn :V && yarn --version
    echo "-----------------------"
    @rem npm config list
    yarn config
    echo "-----------------------"
    yarn config globalFolder
    yarn config set globalFolder  %LOCALAPPDATA%\Yarn\Berry
    yarn config globalFolder
    echo "-----------------------"
    yarn config cacheFolder
    yarn config set cacheFolder %LOCALAPPDATA%\Yarn\Berry\cache
    yarn config cacheFolder
    set LOCALAPPDATA=%HOMEDRIVE%%HOMEPATH%\AppData\Local
    echo "------------------------------------------------------------------------"

) else (
    echo.
    echo "------------------------------------------------------------------------"
    echo Your environment has been set up for using Node.js !version!.
    echo.
)
popd
endlocal

rem If we're in the Node.js directory, change to the user's home dir.
if not "%NODEJSWORKDIR%"=="%NODEJSWORKDIR1%" cd %NODEJSWORKDIR1%
@REM @pause
@REM yarn start
@rem yarn create vuepress-theme-hope MyKnowledgeBase
goto end



:end
@rem yarn docs:clean-dev

@REM if not exist %~dp0\MyKnowledgeBase  (
@REM     echo "不存在MyKnowledgeBase目录"
@REM     @rem yarn create vuepress-theme-hope MyKnowledgeBase
@REM ) else (
@REM     echo "已存在MyKnowledgeBase目录"
@REM )

@rem if exist %dp0/.env (set PATH=%dp0%\.env\Scripts;%dp0%\.env;%PATH%)
exit

