const vscode = require('vscode');
const path = require('path');

function activate(context) {
    const terminalName = 'DK-Lang';

    const runFile = vscode.commands.registerCommand('dk-lang.runFile', async () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor || editor.document.languageId !== 'dk') return;

        const filePath = editor.document.uri.fsPath;
        await editor.document.save();

        const config = vscode.workspace.getConfiguration('dk-lang');
        const interpreter = config.get('interpreterPath') || 'dk';

        let terminal = vscode.window.terminals.find(t => t.name === terminalName);
        if (!terminal) terminal = vscode.window.createTerminal(terminalName);
        terminal.show();

        // PowerShell 兼容：不带引号的命令名 + 带引号的文件路径
        // Windows 路径含空格需双引号包裹
        terminal.sendText(`cls`);
        terminal.sendText(`${interpreter} run "${filePath}"`);
    });

    context.subscriptions.push(runFile);
}

function deactivate() {}

module.exports = { activate, deactivate };
