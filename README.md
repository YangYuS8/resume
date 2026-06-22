# 杨栋森｜中文简历

这是一份面向 **运维 / DevOps / 云原生 / SRE / 平台工程实习** 的中文简历仓库。

当前维护方式很简单：

- `resume.md`：主简历内容，日常只改这个文件。
- `site/resume-print.html`：PDF 投递版源文件，使用纯 HTML/CSS 显式控制 A4 一页精简版式。
- `scripts/build-pdf.js`：无依赖 PDF 构建脚本，使用本机 Chrome 从 `site/resume-print.html` 生成 `site/resume.pdf`。
- `site/index.html`：可直接部署到 GitHub Pages 的静态在线简历。
- `site/styles.css`：页面样式。
- `site/resume.pdf`：网页提供下载的 PDF 投递版产物。
- `reactive-resume.json` / `reactive-resume-import.json`：旧版 Reactive Resume 数据，仅作参考。

## 本地查看

```bash
python -m http.server 8000 -d site
```

然后访问：

```text
http://127.0.0.1:8000
```

## 生成 PDF

```bash
node scripts/build-pdf.js
pdfinfo site/resume.pdf
```

PDF 版由 `site/resume-print.html` 生成，采用显式 A4 一页精简投递版式；网页首页继续承担详细项目、证书墙和补充材料展示。

## 部署与同步

仓库当前配置了三条发布链路：

- **GitHub Pages**：`.github/workflows/deploy.yml` 将 `site/` 发布到 GitHub Pages。
- **CNB 同步**：GitHub Actions 在 Pages 发布成功后，将 `main` 强制同步到 `https://cnb.cool/Nesoriel/YangYuS8/resume`。
- **EdgeOne Pages**：`.cnb.yml` 在 CNB push 后校验静态文件，并用 `tencentcom/deploy-eopages` 发布 `site/`。

在 Hermes / agent 沙箱里查询 CNB 登录态或流水线时，显式使用真实用户 HOME，避免读不到 CNB CLI 登录信息：

```bash
HOME=/home/yangyus8 cnb status
HOME=/home/yangyus8 cnb build get-build-logs --repo Nesoriel/YangYuS8/resume --page-size 10 --verbose
```

## 投递前待补充

- 竞赛经历与获奖证书的正式名称、级别、时间。
- 是否有 GPA、专业排名或核心课程成绩可写。
- Kube-Sentinel / Ocean / CubeSandbox 等项目是否有可公开链接、PR 链接或部署截图。
- PDF 版投递内容需要随项目和奖项变化定期同步，保持 1-2 页以内。

## 不再推荐的旧流程

旧仓库使用 LaTeX + GitHub Actions 编译 PDF，对日常维护不友好。现在默认以 Markdown + 静态 HTML 维护，避免为了改几行简历去排查 TeX Live 依赖。
