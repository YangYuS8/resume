# 杨栋森｜中文简历

这是一份面向 **运维 / DevOps / 云原生 / SRE / 平台工程实习** 的中文简历仓库。

当前维护方式很简单：

- `resume.md`：主简历内容，日常只改这个文件。
- `site/index.html`：可直接部署到 GitHub Pages 的静态在线简历。
- `site/styles.css`：页面样式。
- `reactive-resume.json` / `reactive-resume-import.json`：旧版 Reactive Resume 数据，仅作参考。

## 本地查看

```bash
python -m http.server 8000 -d site
```

然后访问：

```text
http://127.0.0.1:8000
```

## 投递前待补充

- 竞赛经历与获奖证书的正式名称、级别、时间。
- 是否有 GPA、专业排名或核心课程成绩可写。
- Kube-Sentinel / Ocean / CubeSandbox 等项目是否有可公开链接、PR 链接或部署截图。
- 是否需要导出 PDF：可以后续用浏览器打印 `site/index.html` 为 PDF，或再接入更轻量的 Markdown 转 PDF 工具。

## 不再推荐的旧流程

旧仓库使用 LaTeX + GitHub Actions 编译 PDF，对日常维护不友好。现在默认以 Markdown + 静态 HTML 维护，避免为了改几行简历去排查 TeX Live 依赖。
