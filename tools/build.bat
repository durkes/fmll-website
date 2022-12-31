@echo off

REM rmdir ..\build /s /q

cd gulp
call gulp

cd ..
timeout 120