const vscode = require('vscode');
const cp = require('child_process');
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
        const cmd = `"${interpreter}" run "${filePath}"`;

        let terminal = vscode.window.terminals.find(t => t.name === terminalName);
        if (!terminal) terminal = vscode.window.createTerminal(terminalName);
        terminal.show();
        terminal.sendText('cls');
        terminal.sendText(cmd);
    });

    context.subscriptions.push(runFile);
}

function deactivate() {}

module.exports = { activate, deactivate };
