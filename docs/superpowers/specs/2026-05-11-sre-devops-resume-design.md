# SRE / DevOps / TechOps 中文简历设计说明

**目标：** 在当前目录创建一份面向 SRE / DevOps / TechOps 实习岗位的中文 LaTeX 简历工程，生成 1 页 A4 PDF，内容突出 Linux、容器、虚拟化、网络、服务部署、开源贡献与排错能力。

**已确认偏好：**

- 版式采用极简单栏方案。
- 教育背景先保留占位符。
- 简历顶部加入精简技术摘要。

## 工程结构

将在工作目录下创建如下结构：

```text
resume/
├── README.md
├── Makefile
├── resume.tex
├── resume.pdf
└── assets/
```

其中：

- `resume.tex`：主简历文件，使用 XeLaTeX 编译。
- `Makefile`：封装编译、清理与彻底清理命令。
- `README.md`：说明依赖、编译、清理和需手动替换的信息。
- `assets/`：预留资源目录，初版可为空。

## LaTeX 方案

采用 `ctexart` 作为文档类，配合以下宏包：

- `geometry`：控制页边距，适配 1 页 A4。
- `hyperref`：处理 GitHub、博客等链接。
- `enumitem`：压缩列表与 bullet 间距。
- `array`、`tabularx`：用于更稳妥地组织局部排版。
- `titlesec`：简化章节标题样式。

设计原则：

- 尽量少依赖复杂模板，降低字体和环境兼容风险。
- 保持黑白、正式、技术导向，不使用图标、进度条和彩色装饰。
- 字体优先使用 `ctex` 的默认 XeLaTeX 方案，避免依赖特定商业字体。

## 页面结构

简历内容按以下顺序组织：

1. 姓名与求职方向
2. 联系方式与链接
3. 技术摘要
4. 教育背景
5. 技术栈
6. 项目与经历

## 内容设计

### 1. 个人信息

- 姓名：杨栋森
- 求职方向：SRE / DevOps / TechOps 实习
- GitHub：`https://github.com/YangYuS8`
- 博客：`https://blog.yangyus8.top`
- 邮箱：占位符
- 电话：占位符

联系方式采用单行紧凑展示，保证顶部不拥挤。

### 2. 技术摘要

摘要控制在 2 到 3 句，重点表达：

- 以 Linux 环境使用和系统排错为主线。
- 具备容器部署、虚拟化与内网服务运维实践。
- 有真实开源协作与 Kubernetes 学习实验经历。

避免主观评价词和营销化表述。

### 3. 教育背景

教育信息先采用占位符：

- 本科在读 / 计算机相关专业 / 2027 届
- 学校名称、学院名称等暂不虚构

### 4. 技术栈

技术栈按岗位相关性分为 5 组，每组采用短句式组织，避免关键词堆叠成一整行：

1. `Linux 与系统运维`
2. `容器与服务部署`
3. `虚拟化与远程访问`
4. `开发与工程工具`
5. `云原生与监控（学习中）`

每组写法以“领域名：关键词列表 + 轻量能力归纳”为主，兼顾可读性与 ATS 关键词覆盖。

### 5. 项目与经历

项目按以下顺序排列：

1. `TencentCloud / CubeSandbox 开源贡献`
2. `个人 Homelab 与虚拟化运维实践`
3. `LWE Linux 动态壁纸项目`
4. `k3s / Kubernetes 学习实验`

#### CubeSandbox

必须明确写成开源贡献，不写成个人主导项目。bullet 重点包括：

- 根据 issue 阅读并定位 CubeSandbox 中 API、CLI、模板镜像相关代码。
- 参与修复错误映射、CLI 参数支持、镜像准备流程优化、阶段化输出等改动。
- 明确引用已合并 PR：#70、#98、#101、#146。
- 提到通过 GitHub Pull Request 参与协作，并结合 Go / Rust 相关测试或验证流程确认修改。

#### Homelab

重点包括：

- 使用 Proxmox VE 运行多台 VM / LXC。
- 在 Linux 环境中部署 Docker 服务。
- 使用 Nginx、Caddy、Tailscale、Headscale 处理反向代理、HTTPS、远程访问和内网服务暴露。
- 强调服务访问、端口、代理、系统与网络排错。

#### LWE

重点包括：

- 这是 Linux 桌面应用项目，不写成普通前端项目。
- 技术栈为 Tauri 2、Rust、Svelte。
- 涉及 Linux 桌面环境适配、应用打包、AppImage、AUR 和 GitHub Actions 自动发布。

#### k3s / Kubernetes 学习实验

必须写清是学习实验，避免误导成生产经验。bullet 重点包括：

- 在本地或 LXC 环境中练习 deployment、service、rollout、scale、history、undo 等操作。
- 排查 `ErrImagePull`、Docker Hub TLS timeout、代理配置与 registry 访问问题。
- 体现从 Docker Compose 向 Kubernetes 对象模型迁移的理解。

## 篇幅控制策略

- 总体目标为 1 页 A4。
- 优先保留 CubeSandbox、Homelab、LWE 的完整表达。
- 若内容接近溢出，则压缩技术摘要和 k3s 部分，不牺牲前 3 段经历质量。

## Makefile 设计

提供以下目标：

- `make`：调用 `latexmk -xelatex resume.tex` 生成 PDF。
- `make clean`：清理 `aux`、`log`、`fls`、`fdb_latexmk` 等中间文件。
- `make distclean`：在 `clean` 基础上删除 `resume.pdf`。

## README 内容

README 需说明：

1. 该工程是一份 SRE / DevOps / TechOps 方向中文简历。
2. 依赖安装建议，包括 `texlive`、`latexmk`、XeLaTeX 相关组件。
3. 编译方法与常用命令。
4. 清理方法。
5. 需要手动替换的信息：邮箱、电话、教育背景占位符。
6. 若 XeLaTeX 失败，如何检查 `xelatex`、`latexmk`、`ctex`、`xeCJK` 是否可用。

## 验证标准

实现后需要验证：

- `resume/resume.tex` 可被 `xelatex` 或 `latexmk -xelatex` 编译。
- 成功生成 `resume/resume.pdf`。
- PDF 版式不溢出到第 2 页。
- README 中的命令与实际工程一致。

## 风险与处理

- 若本机缺少 `xelatex` 或 `latexmk`，需要在最终结果中明确说明。
- 若 `ctex` 环境不完整，优先调整为更兼容的中文方案，而不是切换到复杂模板。
- 当前目录不是 Git 仓库，因此只写入规格文件，不执行技能默认要求的 commit。
