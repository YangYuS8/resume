# SRE / DevOps / TechOps 中文简历工程实现计划

> **面向 AI 代理的工作者：** 必需子技能：使用 superpowers:subagent-driven-development（推荐）或 superpowers:executing-plans 逐任务实现此计划。步骤使用复选框（`- [ ]`）语法来跟踪进度。

**目标：** 创建一份可用 XeLaTeX 编译的中文技术简历工程，并生成面向 SRE / DevOps / TechOps 实习岗位的 1 页 PDF。

**架构：** 在工作目录下新建 `resume/` 子目录，采用单文件 `resume.tex` 管理版式与内容，使用 `Makefile` 封装 `latexmk -xelatex` 编译流程，并在 `README.md` 中记录依赖、命令和手动替换项。文档类使用 `ctexart`，避免复杂模板依赖，优先保障兼容性与可维护性。

**技术栈：** XeLaTeX、ctex、geometry、enumitem、hyperref、latexmk、Makefile

---

### 任务 1：创建工程目录与占位文件

**文件：**
- 创建：`resume/`
- 创建：`resume/assets/`

- [ ] **步骤 1：创建目录结构**

运行：`mkdir -p "/home/yangyus8/Code/resume/resume/assets"`
预期：创建 `resume/` 与 `resume/assets/` 目录，无报错。

- [ ] **步骤 2：验证目录存在**

运行：`rtk ls "/home/yangyus8/Code/resume/resume"`
预期：输出中包含 `assets/`。

### 任务 2：编写 `resume.tex`

**文件：**
- 创建：`resume/resume.tex`

- [ ] **步骤 1：写入 LaTeX 主文件**

实现内容应包含：

```tex
\documentclass[11pt,a4paper]{ctexart}
\usepackage[margin=1.45cm]{geometry}
\usepackage[colorlinks=true,urlcolor=black,linkcolor=black]{hyperref}
\usepackage{enumitem}
\usepackage{tabularx}
\usepackage{array}
\usepackage{titlesec}
\pagestyle{empty}
```

以及以下内容结构：

```tex
\begin{document}
% 姓名、求职方向、联系方式、摘要、教育背景、技术栈、项目与经历
\end{document}
```

要求：

- 姓名为 `杨栋森`，方向为 `SRE / DevOps / TechOps 实习`。
- 邮箱、电话、教育背景使用明确占位符。
- `CubeSandbox` 放在第一个项目，且准确写为开源贡献。
- `k3s / Kubernetes` 明确标注为学习实验。
- 版面尽量控制在 1 页内。

- [ ] **步骤 2：检查主文件已写入**

运行：`test -f "/home/yangyus8/Code/resume/resume/resume.tex"`
预期：退出码为 0。

### 任务 3：编写 `Makefile` 与 `README.md`

**文件：**
- 创建：`resume/Makefile`
- 创建：`resume/README.md`

- [ ] **步骤 1：写入 `Makefile`**

应包含以下目标：

```make
.PHONY: all clean distclean

all:
	latexmk -xelatex resume.tex

clean:
	latexmk -c

distclean:
	latexmk -C
	rm -f resume.pdf
```

- [ ] **步骤 2：写入 `README.md`**

README 应说明：

- 这是 SRE / DevOps / TechOps 方向中文简历。
- 依赖安装建议。
- `make`、`make clean`、`make distclean` 的用法。
- 需手动替换的邮箱、电话、教育背景占位信息。
- XeLaTeX 失败时如何检查 `xelatex`、`latexmk`、`ctex`、`xeCJK`。

- [ ] **步骤 3：检查辅助文件已写入**

运行：`test -f "/home/yangyus8/Code/resume/resume/Makefile" && test -f "/home/yangyus8/Code/resume/resume/README.md"`
预期：退出码为 0。

### 任务 4：编译并修复 LaTeX 问题

**文件：**
- 验证：`resume/resume.tex`
- 验证：`resume/Makefile`
- 产物：`resume/resume.pdf`

- [ ] **步骤 1：运行编译命令**

运行：`make`
工作目录：`/home/yangyus8/Code/resume/resume`
预期：`latexmk -xelatex resume.tex` 成功执行并生成 `resume.pdf`。

- [ ] **步骤 2：如果失败则根据日志修复**

检查：`resume.log`、`latexmk` 输出
修复方向：

- 缺少宏包时，优先避免新增复杂依赖。
- 页面溢出时，优先压缩段间距、bullet 间距和摘要长度。
- 中文字体问题时，优先使用 `ctex` 默认配置。

- [ ] **步骤 3：验证 PDF 存在**

运行：`test -f "/home/yangyus8/Code/resume/resume/resume.pdf"`
预期：退出码为 0。

### 任务 5：最终核对输出

**文件：**
- 验证：`resume/resume.pdf`
- 验证：`resume/README.md`

- [ ] **步骤 1：核对工程文件齐全**

运行：`rtk ls "/home/yangyus8/Code/resume/resume"`
预期：输出包含 `README.md`、`Makefile`、`resume.tex`、`resume.pdf`、`assets/`。

- [ ] **步骤 2：整理需手动补充的信息**

需要在最终报告中明确：

- 邮箱占位符
- 电话占位符
- 教育背景占位符

- [ ] **步骤 3：报告编译命令与结果**

在最终回复中报告：

- 创建或修改了哪些文件
- 是否成功生成 `resume.pdf`
- 使用的编译命令
- 若失败则说明原因与下一步建议
