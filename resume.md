# 杨栋森｜DevOps / SRE / 运维开发实习生

- 手机：18683236881
- 邮箱：yangyus8@163.com
- GitHub：https://github.com/YangYuS8
- 博客：https://blog.yangyus8.top
- 求职方向：DevOps 实习 / SRE 实习 / 运维开发实习 / 云原生运维实习 / 部署联调实习

## 个人简介

辽宁科技大学网络工程专业 2027 届本科生，求职方向为 DevOps / SRE / 运维开发。长期维护个人 PVE Homelab 与多台 Linux 服务器，具备 Docker Compose 服务部署、Nginx 反向代理、远程组网、基础监控、日志排查与文档沉淀经验；熟悉 Linux 常用操作、容器化部署、服务状态检查、接口连通性验证和多组件项目本地联调。能够使用 AI Agent 辅助日志分析、脚本编写、代码阅读和文档初稿整理，并通过本地运行、接口验证和部署结果进行人工复核。相比“只写业务功能”，更关注系统能否稳定启动、问题能否定位、部署步骤能否复现、交接材料是否可用。

## 教育经历

**辽宁科技大学｜网络工程｜本科**  
2023.09 - 2027.07

- 2027 届本科在读
- 校三等奖学金
- CET-4

## 实习经历

### 梦溪比特（鞍山）软件信息技术有限公司｜Go 后端开发实习生

**实习时间**：2025.09 - 2026.03<br>
**行业 / 性质**：计算机软件 / 实习<br>
**实习项目**：MedKnow 养生知识科普短视频平台<br>
**接触技术**：Go、Gin、Gorm、MySQL、Docker、Git、接口联调、服务部署、问题排查、文档整理

- 参与 MedKnow 后端项目结构梳理，理解用户、专家、视频、评论、收藏、浏览历史等模块的数据关系与接口调用流程。
- 配合前端进行接口联调，验证接口返回、参数传递和核心业务流程，协助定位配置、参数、数据库连接和接口返回问题。
- 参与本地运行环境搭建，协助处理数据库连接、端口占用、配置文件、依赖安装等常见运行问题。
- 使用 Docker 整理并验证项目运行环境，降低团队成员因本地环境差异导致的部署与联调成本。
- 整理项目运行说明、配置注意事项和问题记录，为后续演示、部署和维护提供文档支持。

## 技术能力

- **Linux / 运维基础**：熟悉 Linux 日常使用，能使用 `systemctl`、`journalctl`、`ss`、`curl`、`df`、`free` 等命令进行服务状态、日志、端口、接口连通性和资源占用检查；具备 PVE / 自托管服务器维护、1Panel 面板部署、静态站点发布和故障记录整理经验。
- **容器与部署**：熟悉 Docker / Docker Compose / Podman 基础使用，能编写和整理 Compose 编排文件、环境变量、端口映射、数据目录、服务依赖和部署文档；接触 Nginx 反向代理、MariaDB / MySQL、Redis、Python Worker 等常见组件联调。
- **网络与远程访问**：了解 TCP/IP、HTTP、DNS、反向代理和常见端口排查思路；实践过 Tailscale、WireGuard / OpenWrt 旁路网关、Nginx / OpenResty 反代和内网服务访问配置。
- **云原生 / 监控学习**：了解 Kubernetes / k3s、Helm、Prometheus、Grafana 等基础概念，实践过 Deployment、Service、Pod、镜像更新、版本回滚、Helm 组件部署和常见镜像拉取问题排查。
- **开发与自动化基础**：了解 Python / FastAPI、Go / Gin / Gorm、Shell、Laravel、Vue、React、TypeScript 等项目结构，能阅读已有代码、理解接口职责，配合定位配置、参数、数据库连接和接口返回问题。
- **工程协作与 AI 工具**：熟悉 Git/GitHub、README、部署说明、接口说明、检查清单和博客复盘整理；使用 AI 工具辅助代码阅读、日志分析、命令生成和文档初稿，但会进行人工验证。

## 项目经历

### 个人 Homelab 运维与服务迁移实践

**角色**：项目负责人 / 运维实践<br>
**接触技术**：PVE、Debian、Docker Compose、Dockge、Nginx / OpenResty、Tailscale、WireGuard / OpenWrt、1Panel、Git

- 基于 PVE 搭建个人 Homelab 环境，长期维护 Linux 虚拟机、Docker 服务机、代理网关和多类自托管服务，作为 DevOps、SRE 与云原生技术的实践平台。
- 将 PVE 宿主机直接承载 Docker、面板、媒体、代理和反代服务的混合架构，逐步整理为 `PVE 宿主机 / infra-docker-01 / net-gateway-01 / 业务 VM` 的分层结构，降低排障边界混乱和宿主机暴露风险。
- 使用 Docker Compose / Dockge 管理多个自托管服务，规范 Stack、`.env`、配置目录、数据目录和 Git 版本化流程，形成可迁移、可回滚、可复查的服务管理方式。
- 配置 Tailscale、WireGuard / OpenWrt 旁路网关和 Nginx / OpenResty 反向代理，处理远程访问、Docker Hub 拉取、代理链路、IP 冲突、端口暴露和服务迁移等问题。
- 将部署、迁移和排障过程整理为博客文章与检查清单，沉淀可复用的服务器维护、Compose 管理和故障定位经验。

### Kube-Sentinel｜Kubernetes 夜间值班哨兵工具

**角色**：开发者 / 云原生运维实践<br>
**接触技术**：Go、Kubernetes、Controller Runtime、CRD、Helm、Alertmanager、Prometheus、Grafana、Telegram Bot

- 面向 Kubernetes 夜间值班场景实现轻量哨兵工具，接收 Alertmanager Webhook 告警并映射为 `HealingRequest`，形成从告警、分诊、最小处置到审计记录的闭环。
- 围绕 Deployment L1 自动处置设计安全边界，在自动写操作前加入维护窗口、速率限制、爆炸半径、熔断和写前快照校验，避免把 Agent 或自动化脚本直接放到高风险执行路径。
- 输出 Kubernetes Event、结构化审计、Prometheus 指标和 Telegram incident card，为值班人员提供可解释、可人工接管的处置证据。
- 编写 Helm / YAML 安装清单、Grafana Dashboard、ServiceMonitor、发布与回滚文档，并通过 `go test`、race、vet、lint 和最小安装脚本验证交付质量。

### Astralith｜轻量级自动化运维平台

**项目题目**：基于 FastAPI 与 Ansible 的轻量级自动化运维平台设计与实现<br>
**接触技术**：FastAPI、Ansible Runner、SQLAlchemy、SQLite、Celery、Redis、APScheduler、JWT、Vue 3、Docker Compose、AI Agent 辅助分析

- 面向个人 PVE / Homelab 和中小型 Linux 服务器环境，设计并实现轻量级自动化运维平台，覆盖登录认证、主机管理、内置运维模块、任务创建、定时巡检、执行日志保存和前端日志展示。
- 远程操作统一通过 Ansible Runner 执行，Celery + Redis 负责异步任务，APScheduler 负责定时触发，SQLite 保存任务状态、每台主机 stdout / stderr 和原始事件，便于后续排障与答辩演示。
- 扩展 GitOps desired-state sync、Desired / Actual diff、Apply Plan、Docker Compose Apply 记录和回滚元数据，强调人工审批、策略校验、审计日志和可回退边界。
- 预留 Agent 辅助运维设计：将任务输出、错误日志和执行事件整理为 Evidence Pack，由 Agent 生成故障分析、Runbook 或变更建议；平台侧保留人工确认和受控执行边界。

### Ocean｜海洋生态样本与设备巡检管理平台

**接触技术**：Docker Compose、Nginx、Laravel、MariaDB、Redis、Python Worker、React、TypeScript

- 参与前后端分离业务系统的本地运行、部署联调和文档整理，项目覆盖巡检任务、样本登记、检测结果、异常处理、分析任务和统计看板等流程。
- 根据项目文档与配置文件梳理服务启动流程，使用 Docker Compose 编排 Nginx、Laravel、MariaDB、Redis 和 Python Worker 等组件，整理端口、环境变量、数据库初始化、缓存队列和服务依赖关系。
- 配合后端接口、数据库、缓存队列和异步 Worker 进行本地联调，通过容器状态、服务日志、HTTP 返回和页面访问结果定位配置或依赖问题。
- 维护项目概览、部署说明、接口说明、分工记录和交付检查清单，形成可复现的运行步骤和交接材料。

### 目标检测论文与项目材料支持

- 参与 2 篇目标检测相关论文及竞赛项目材料整理，主要负责实验环境部署、依赖配置、训练环境排障、部分数据处理和文档归档，避免将算法方向作为主求职线索。
- 参与钢材表面缺陷检测平台运行、联调、功能验证和软著材料整理，积累前后端启动、报告导出、功能验证和交付说明撰写经验。

## 开源与工程实践

### lwe｜Linux Wallpaper Engine 桌面工具

- 个人维护的 Linux 桌面开源项目，用于浏览、管理和应用 Wallpaper Engine 内容，作为开源发布、Linux 适配和工程维护实践保留。
- 维护 GitHub Releases、AUR 包、中英文在线文档和用户反馈记录，接触 Linux 桌面兼容、打包发布、版本说明、文档同步和开源项目维护流程。

### CubeSandbox 开源贡献

- 参与 TencentCloud/CubeSandbox 开源项目贡献，修改范围涉及 CubeAPI、CubeMaster 与 cubemastercli 等模块，包括参数传递、错误映射和命令输出优化等小范围改动。
- 通过 PR、代码审查反馈、命令行验证和文档阅读熟悉开源协作流程，能在限定范围内完成修改、运行验证并回应反馈。

## 奖项与证书

- 2024 年辽宁省大学生智能技术应用大赛一等奖（项目：智能化在线程序测评系统）
- 2024 年第六届全球校园人工智能算法精英大赛东北赛区一等奖、全国总决赛三等奖（赛题：超声乳腺影像的 BIRADS 分类及特征识别）
- 2024 年辽宁省“中软国际--卓越杯”大数据挑战赛二等奖；2025 年辽宁省 iCAN 创新创业大赛二等奖
- 辽宁科技大学优秀学生三等奖学金；CET-4

## 自我评价

- 对 Linux、DevOps / SRE、自动化运维和云原生方向有持续兴趣，能够从服务部署、日志排查、接口验证、文档交付、监控告警学习和自动化脚本 / 平台工具维护等工作切入。
- 做事偏实践导向，重视可运行、可验证、可复现和可交接，习惯通过本地运行、接口验证、页面访问和日志结果确认修改是否有效。
- 能够使用 AI 工具提高代码阅读、日志分析和文档整理效率，同时保持人工复核和结果验证，避免直接照搬未经验证的结论。
