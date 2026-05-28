# DK-Lang for VS Code

[![VS Code](https://img.shields.io/badge/VS%20Code-1.60+-blue)](https://code.visualstudio.com)
[![Version](https://img.shields.io/badge/version-1.4.0-green)](https://github.com/gateway-cloud/dk-lang)

> **DK-Lang VS Code 鎵╁睍** 鈥?璇硶楂樹寒 + 浠ｇ爜鐗囨 + F5 杩愯

## 鉁?鍔熻兘

### 馃帹 璇硶楂樹寒锛? 鑹叉柟妗堬級

| 鍏冪礌 | 棰滆壊 | 绀轰緥 |
|------|------|------|
| 鍏抽敭瀛?| 馃數 `#569cd6` | `VAR` `SET` `IF` `FUNC` `SERVER` |
| 绫诲瀷 | 馃煝 `#4ec9b0` | `int` `str` `bool` `real` |
| 瀛楃涓?| 馃煚 `#ce9178` | `"hello"` `` `multi` `` |
| 鏁板瓧 | 馃煝 `#b5cea8` | `42` `3.14` |
| 娉ㄩ噴 | 馃煝 `#6a9955` | `//` `/* */` |
| 鍑芥暟 | 馃煛 `#dcdcaa` | `main` `greet` |
| 杩愮畻绗?| 鈿?`#d4d4d4` | `add` `sub` `gt` `eq` |
| 鍐呯疆 | 馃煟 `#c586c0` | `CALC` `CALL func` |

### 馃摑 23 涓唬鐮佺墖娈?
| 鍓嶇紑 | 鐢熸垚 |
|------|------|
| `main` | 瀹屾暣涓诲嚱鏁版ā鏉?|
| `func` / `func0` | 甯﹀弬/鏃犲弬鍑芥暟瀹氫箟 |
| `var` / `set` | 鍙橀噺瀹氫箟/璧嬪€?|
| `if` / `ifelse` | 鏉′欢鍒ゆ柇 |
| `loop` / `while` | 寰幆 |
| `switch` | 澶氬垎鏀?|
| `server` | HTTP 鏈嶅姟鍣ㄦā鏉?|
| `try` | 寮傚父澶勭悊 |
| `strjoin` | 瀛楃涓叉嫾鎺?|

### 鈱笍 蹇嵎閿?
| 閿?| 鍔熻兘 |
|----|------|
| `F5` | 杩愯褰撳墠 .dk 鏂囦欢 |

### 馃敡 璇█閰嶇疆

- 鑷姩闂悎 `{}` `[]` `()` `""` `` ` ` ``
- 浠ｇ爜鎶樺彔 (`// region` / `// endregion`)
- 鑷姩缂╄繘
- 琛屾敞閲?`//` / 鍧楁敞閲?`/* */`

---

## 馃摝 瀹夎

### 鏂瑰紡 1锛歏SIX 瀹夎锛堟帹鑽愶級

1. 涓嬭浇 [dk-lang-1.4.0.vsix](https://github.com/gateway-cloud/dk-lang/releases/latest)
2. VS Code 鈫?`Ctrl+Shift+P` 鈫?"Extensions: Install from VSIX..."
3. 閫夋嫨涓嬭浇鐨?.vsix 鏂囦欢
4. 閲嶅惎 VS Code

### 鏂瑰紡 2锛氫竴閿畨瑁?
```bash
# 杩愯瀹夎鑴氭湰
install.bat
```

### 鏂瑰紡 3锛氭墜鍔ㄥ畨瑁?
```bash
# 澶嶅埗鍒?VS Code 鎵╁睍鐩綍
xcopy /E /Y * "%USERPROFILE%\.vscode\extensions\dk-lang.dk-lang-1.4.0\"
```

---

## 鈿欙笍 閰嶇疆

```json
{
  "dk-lang.interpreterPath": "dk"
}
```

璁剧疆 DK-Lang 瑙ｉ噴鍣ㄨ矾寰勶細
- 瀹夎鐗? `"dk"` (濡傛灉宸叉坊鍔犲埌 PATH)
- 婧愮爜鐗? `"python C:\\path\\to\\dk_cli.py"`

---

## 馃摳 鏁堟灉棰勮

鎵撳紑 `.dk` 鏂囦欢鍗冲彲鐪嬪埌璇硶楂樹寒锛?
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

鎸?`F5` 杩愯 鈫?杈撳嚭 `Hello, DK-Lang!`

---

## 馃敆 鐩稿叧

- [dk-lang](https://github.com/gateway-cloud/dk-lang) 鈥?DK-Lang 瑙ｉ噴鍣?- [DK-LANG-SPEC.md](https://github.com/gateway-cloud/dk-lang/blob/main/DK-LANG-SPEC.md) 鈥?瀹屾暣璇█瑙勮寖

---

## 馃搫 璁稿彲璇?
MIT License
