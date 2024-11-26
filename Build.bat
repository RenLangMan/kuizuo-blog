@echo off
@rem This file is UTF-8 encoded, so we need to update the current code page while executing it
@rem 创建指定名称的pyton虚拟环境
@rem 记录旧的编码代号并修改新的编码方式为UTF-8
for /f "tokens=2 delims=:." %%a in ('"%SystemRoot%\System32\chcp.com"') do (
    set _OLD_CODEPAGE=%%a
)
if defined _OLD_CODEPAGE (
    "%SystemRoot%\System32\chcp.com" 65001 > nul
)
echo "文件编码已经由%_OLD_CODEPAGE%更改为UTF-8(65001)"

cd /d %~dp0
echo %__CD__%
if %~dp0 neq %__CD__% (
    goto end
)

cmd /k "%~dp0/RUN.bat & yarn clear & yarn build"


:end
if exist %dp0/.env (set PATH=%dp0%\.env\Scripts;%dp0%\.env;%PATH%)
exit