@echo off

cd gulp
call gulp minify

cd ..

echo.
echo Remember to fix Xmaps on contact page.
echo.
timeout 120