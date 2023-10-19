@echo off
:x
echo es sollte etwas geaendert werden > test.txt
git add .
git commit -m "added things"
git push
echo.
echo -------------------------------
echo.
echo es funktioniert nicht so wie es sollte > test.txt
git add . 
git commit -m "added other things"
git push
goto x