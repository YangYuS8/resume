# 杨栋森｜运维 / DevOps / 云原生实习生

- 手机：18683236881
- 邮箱：yangyus8@163.com
- GitHub：https://github.com/YangYuS8
- 博客：https://blog.yangyus8.top
- 求职方向：运维 / DevOps / 云原生 / SRE / 平台工程实习

## 个人简介

辽宁科技大学网络工程专业 2027 届本科生，关注 Linux 运维、DevOps、云原生与平台工程方向。熟悉 Linux 日常使用与故障排查，具备 Docker/Podman、Kubernetes、CI/CD、Nginx、Redis、MySQL/MariaDB、Prometheus 等工具的项目实践经验。能够借助 AI Agents 提升工程交付效率，同时持续补足 Go、Shell、系统网络与云原生基础能力，适合从运维开发、平台工具、云原生基础设施等方向切入实习工作。

## 教育经历

**辽宁科技大学｜网络工程｜本科**  
2023.09 - 2027.07

- 2027 届本科在读
- 校三等奖学金
- CET-4

## 技术能力

- **操作系统与运维**：Linux、systemd、SSH、日志排查、服务部署、反向代理、常见网络问题诊断
- **云原生与容器**：Kubernetes、CRD/Controller、Docker/Podman、Docker Compose、Helm、RBAC、Prometheus Metrics
- **后端开发**：Go、Gin、Gorm、RESTful API、JWT、PHP Laravel、Python FastAPI
- **数据库与中间件**：MySQL/MariaDB、SQLite、Redis
- **前端与工程化**：Vue 3、React、TypeScript、Vite、ECharts、pnpm、Git、GitHub Actions、Makefile
- **AI 辅助工程**：熟悉使用 Claude Code、Codex/OpenCode、Antigravity/Gemini 等 Agents 辅助完成需求拆解、代码审查、文档生成与自动化验证

## 项目经历

### Kube-Sentinel｜Kubernetes 夜间值班自动处置哨兵

**技术栈**：Go、Kubernetes Controller、CRD、Alertmanager Webhook、Prometheus、Helm、Docker、RBAC

- 设计并实现面向 Kubernetes 值班场景的自动恢复控制器，通过 Alertmanager Webhook 接收告警，并生成自定义资源 `HealingRequest` 作为处置任务入口。
- 实现 Reconciler 编排流程，覆盖告警去重、状态流转、自动恢复、人工接管与结果记录等环节，形成从告警到处置的闭环。
- 在自动写操作前加入维护窗口、速率限制、熔断、爆炸半径控制与快照校验等安全门禁，降低自动化误操作风险。
- 输出 Kubernetes Event、结构化审计日志和 Prometheus 指标，便于通过 kubectl、Grafana 或日志系统追踪处置链路。
- 项目包含单元测试、race/vet/lint、CRD 与 Helm 一致性检查等质量门禁，体现云原生项目的工程化交付能力。

### Ocean｜海洋生态样本与设备巡检管理平台

**技术栈**：Laravel、React、TypeScript、MariaDB、Redis、Python Worker、Docker Compose、Nginx

- 构建前后端分离的业务管理系统，覆盖巡检任务、样本登记、检测结果、异常处理、分析任务和首页统计看板等核心流程。
- 使用 Laravel 承载业务规则、REST API、数据库迁移和状态流转逻辑，前端基于 React + TypeScript + Vite 实现交互页面。
- 通过 Redis + Python Worker 解耦耗时分析任务，避免分析流程阻塞主业务接口。
- 使用 Docker Compose 编排 Nginx、Laravel、MariaDB、Redis 和 Worker 服务，降低本地部署、联调与演示成本。
- 维护中英文技术文档，沉淀项目概览、部署说明、接口说明和系统设计材料。

### 钢材表面缺陷智能检测分析系统

**技术栈**：FastAPI、Vue 3、Vite、Pinia、ECharts、Python、YOLO/目标检测模型、Excel/Word 报告

- 基于 FastAPI + Vue 3 实现前后端分离的工业缺陷检测平台，支持图像检测、视频检测和批量检测等使用场景。
- 实现检测历史、结果查询、Excel 导出、Word 报告生成、趋势分析、异常检测和批次分析等功能。
- 使用 ECharts 构建检测结果与统计分析看板，提升检测结果的可读性和演示效果。
- 设计统一文件访问接口，避免前端直接暴露服务端本地绝对路径，提升系统部署与访问安全性。
- 配套整理软件说明、源代码说明与软著申请相关文档，具备项目交付和材料归档经验。

### MedKnow｜养生知识科普短视频平台后端参与

**技术栈**：Go、Gin、Gorm、MySQL、JWT、Docker、Vue 3、UniApp、TypeScript、微信小程序

- 参与同学创建的“梦溪比特”小团队项目开发，主要围绕养生知识科普短视频平台的小程序后端与业务功能实现。
- 使用 Go Gin + Gorm + MySQL 实现用户、专家、视频、评论、收藏、浏览历史等业务模块，并通过 JWT 完成基础认证。
- 配合前端完成接口联调与本地部署验证，参与 Docker 化运行环境整理和问题排查。
- 项目因微信官方资质审核限制未能正式上线，但完整参与了从需求拆解、接口开发到联调验证的工程流程。

## 开源与工程实践

### CubeSandbox 开源贡献

- 参与 TencentCloud/CubeSandbox 开源项目贡献，提交并合并多个 PR，修改范围覆盖 CubeAPI、CubeMaster 与 cubemastercli 等模块。
- 为模板创建命令增加可重复传入的 DNS 参数，并将配置传递到模板容器流程；同时修复缺失 sandbox template 时的 API 错误映射。
- 优化模板镜像准备与观察流程，在本地已有源镜像时跳过不必要的拉取，并将 `tpl watch` 输出调整为阶段化状态展示，便于排查构建问题。

### 个人博客与开发环境维护

- 维护个人技术博客 `blog.yangyus8.top`，使用 Astro + Fuwari + pnpm 构建，记录 Linux、开发工具、项目实践与学习笔记。
- 长期维护个人 Linux 工作站与 dotfiles，涉及 zsh、Neovim、Git/GPG、代理、容器、开发工具链和多语言环境配置。

## 奖项与证书

- 辽宁科技大学优秀学生三等奖学金
- CET-4
- 其他竞赛与获奖证书：待整理补充

## 自我评价

- 对 Linux、云原生、自动化运维和平台工程有持续兴趣，愿意从基础运维、工具开发和工程效率方向深入。
- 能够主动使用 AI Agents 提升项目交付效率，但也清楚自身代码基础仍需加强，正在通过 Go、Shell、Kubernetes 与项目实践持续补足工程能力。
- 做事偏实践导向，愿意承担环境搭建、部署联调、日志排查、文档沉淀和自动化流程建设等工作。
