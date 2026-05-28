# DK-Lang for VS Code

[![VS Code](https://img.shields.io/badge/VS%20Code-1.60+-blue)](https://code.visualstudio.com)
[![Version](https://img.shields.io/badge/version-1.4.0-green)](https://github.com/gateway-cloud/dk-lang)

> **DK-Lang VS Code 扩展** — 语法高亮 + 代码片段 + F5 运行

## ✨ 功能

### 🎨 语法高亮（8 色方案）

| 元素 | 颜色 | 示例 |
|------|------|------|
| 关键字 | 🔵 `#569cd6` | `VAR` `SET` `IF` `FUNC` `SERVER` |
| 类型 | 🟢 `#4ec9b0` | `int` `str` `bool` `real` |
| 字符串 | 🟠 `#ce9178` | `"hello"` `` `multi` `` |
| 数字 | 🟢 `#b5cea8` | `42` `3.14` |
| 注释 | 🟢 `#6a9955` | `//` `/* */` |
| 函数 | 🟡 `#dcdcaa` | `main` `greet` |
| 运算符 | ⚪ `#d4d4d4` | `add` `sub` `gt` `eq` |
| 内置 | 🟣 `#c586c0` | `CALC` `CALL func` |

### 📝 23 个代码片段

| 前缀 | 生成 |
|------|------|
| `main` | 完整主函数模板 |
| `func` / `func0` | 带参/无参函数定义 |
| `var` / `set` | 变量定义/赋值 |
| `if` / `ifelse` | 条件判断 |
| `loop` / `while` | 循环 |
| `switch` | 多分支 |
| `server` | HTTP 服务器模板 |
| `try` | 异常处理 |
| `strjoin` | 字符串拼接 |

### ⌨️ 快捷键

| 键 | 功能 |
|----|------|
| `F5` | 运行当前 .dk 文件 |

### 🔧 语言配置

- 自动闭合 `{}` `[]` `()` `""` `` ` ` ``
- 代码折叠 (`// region` / `// endregion`)
- 自动缩进
- 行注释 `//` / 块注释 `/* */`

---

## 📦 安装

### 方式 1：VSIX 安装（推荐）

1. 下载 [dk-lang-1.4.0.vsix](https://github.com/gateway-cloud/dk-lang/releases/latest)
2. VS Code → `Ctrl+Shift+P` → "Extensions: Install from VSIX..."
3. 选择下载的 .vsix 文件
4. 重启 VS Code

### 方式 2：一键安装

```bash
# 运行安装脚本
install.bat
```

### 方式 3：手动安装

```bash
# 复制到 VS Code 扩展目录
xcopy /E /Y * "%USERPROFILE%\.vscode\extensions\dk-lang.dk-lang-1.4.0\"
```

---

## ⚙️ 配置

```json
{
  "dk-lang.interpreterPath": "dk"
}
```

设置 DK-Lang 解释器路径：
- 安装版: `"dk"` (如果已添加到 PATH)
- 源码版: `"python C:\\path\\to\\dk_cli.py"`

---

## 📸 效果预览

打开 `.dk` 文件即可看到语法高亮：

```dk
VERSION "1.0.0" ;

FUNC greet | name | str | str | {
    RET STR_JOIN "" | "Hello, " | name | "!" ;
} ;

FUNC main | str | {
    PRINT CALL greet | "DK-Lang" ;
    RET "OK" ;
} ;

CALL main ;
```

按 `F5` 运行 → 输出 `Hello, DK-Lang!`

---

## 🔗 相关

- [dk-lang](https://github.com/gateway-cloud/dk-lang) — DK-Lang 解释器
- [DK-LANG-SPEC.md](https://github.com/gateway-cloud/dk-lang/blob/main/DK-LANG-SPEC.md) — 完整语言规范

---

## 📄 许可证

MIT License
