# SRE / DevOps / TechOps 中文简历

这是一份面向 `SRE / DevOps / TechOps` 实习岗位的中文技术简历工程，使用 LaTeX 编写，内容重点围绕 Linux、容器、虚拟化、服务部署、开源贡献和排错能力展开。

## 依赖安装

推荐使用支持 XeLaTeX 的 TeX Live 环境，并安装 `latexmk`。

在 Arch Linux 或其他基于 Arch 的发行版上，可参考：

```bash
sudo pacman -S texlive-basic texlive-latex texlive-latexrecommended texlive-langchinese texlive-fontsextra latexmk
```

如果你的发行版拆包方式不同，请确保至少具备：

- `xelatex`
- `latexmk`
- `ctex`
- `xeCJK`

## 编译

在仓库根目录运行：

```bash
make
```

该命令会执行：

```bash
latexmk -xelatex resume.tex
```

成功后会生成 `resume.pdf`。

## 清理

清理中间文件：

```bash
make clean
```

清理中间文件和 PDF：

```bash
make distclean
```

## 需要手动替换的信息

当前简历中仍保留了以下占位信息，建议在投递前手动替换：

- 电话：`[待补充]`
- 邮箱：`[your-email@example.com]`
- 学校名称：`[学校名称待补充]`
- 预计毕业时间：`[预计毕业时间待补充]`
- 如有需要，也可补充更准确的学院、专业方向或教育经历细节

## XeLaTeX 编译失败时的检查方法

如果 `make` 失败，可以按下面顺序检查：

1. 检查 `xelatex` 是否存在：

```bash
xelatex --version
```

2. 检查 `latexmk` 是否存在：

```bash
latexmk --version
```

3. 检查 `ctex` 和 `xeCJK` 是否随 TeX Live 正常安装。

通常可以通过重新运行 XeLaTeX 并查看日志确认：

```bash
latexmk -xelatex resume.tex
```

若日志中提示缺少 `ctex`、`xeCJK`、字体或相关宏包，请安装对应的 TeX Live 组件后重试。

4. 如仍失败，请查看同目录下的 `resume.log`，重点关注：

- 缺少宏包
- 字体不可用
- 未定义命令
- 页面溢出警告是否需要进一步压缩版式
