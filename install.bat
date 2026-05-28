@echo off
echo ======================================
echo   DK-Lang VS Code Extension Installer
echo ======================================
echo.

set "EXT_DIR=%USERPROFILE%\.vscode\extensions\dk-lang.dk-lang-1.4.0"

if exist "%EXT_DIR%" (
    echo [*] Removing old version...
    rmdir /S /Q "%EXT_DIR%" 2>nul
)

echo [*] Installing to %EXT_DIR%...
xcopy /E /Y /Q "%~dp0*" "%EXT_DIR%\" >nul
del "%EXT_DIR%\install.bat" 2>nul
del "%EXT_DIR%\package-lock.json" 2>nul

echo.
echo ======================================
echo   Installation Complete!
echo.
echo   Open .dk files in VS Code to see
echo   syntax highlighting and snippets.
echo.
echo   Press F5 to run current .dk file.
echo ======================================
echo.
pause
