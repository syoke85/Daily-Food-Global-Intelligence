# Daily Intelligence — Phase 2

## 1. 已完成

- 保留现有前端 MVP，并新增原生 Node.js API server。
- PostgreSQL schema：`db/schema.sql`，包含 `articles`、`article_status`、`sources`。
- 可扩展 source adapter：`sources/adapter.mjs`、`sources/generic.mjs`、`sources/registry.mjs`。
- 合法 RSS/API 抓取边界、来源错误处理和 `Source unavailable / Access restricted` 状态。
- AI 分析服务接口：事实、摘要、8+ Key Facts、Business Perspective、Business Signal、Innovation Signal。
- 去重 key 与 Priority Score/priority level 工具。
- Asia/Kuala_Lumpur 06:00 scheduler 配置与 daily update orchestration。
- Notification service 抽象，支持未来 webhook/email/push provider。
- `/api/health`、`/api/sources`、`POST /api/update` API。
- 基本自动化测试：排序、去重、Malaysia 06:00 scheduler。

## 2. 当前实现状态

### Completed

前端、后端 API、schema、adapter architecture、AI service contract、scheduler configuration、notification contract、测试。

### Requires Configuration

GitHub Actions secret `OPENAI_API_KEY`（可选，缺少时标记 `AI_ANALYSIS_PENDING`）、合法来源 feed 配置和可选 notification credentials。PostgreSQL 是 legacy adapter，不是静态生产路径要求。

### Blocked / Not Claiming

由于本环境没有用户的数据库、API key 或来源授权，尚未声称真实新闻已成功抓取、AI 已真实生成、数据库已连接或通知已发出。前端 demo data 继续明确标注为 demo/verification required。

## 3. Environment

复制 `.env.example` 为 `.env`，配置：

```text
DATABASE_URL=postgresql://...
OPENAI_API_KEY=...
SINCHEW_RSS_URL=https://...
NANYANG_RSS_URL=https://...
FOODNAVIGATOR_RSS_URL=https://...
NOTIFICATION_WEBHOOK_URL=https://...
APP_TIMEZONE=Asia/Kuala_Lumpur
DAILY_UPDATE_TIME=06:00
```

不要把 `.env` 或真实 key 提交到 Git。

## 4. Local development

需要 Node.js 20+：

```powershell
npm test
npm start
```

然后打开 `http://localhost:4173`。健康检查：`http://localhost:4173/api/health`。

## 5. Database setup

静态生产路径不需要 PostgreSQL；每日历史保存在 `data/index.json` 与 `data/YYYY-MM-DD.json`。`db/schema.sql` 与 repository 仅作为 legacy optional adapter 保留。

## 6. Source access limitations

适配器只会请求你配置的公开 RSS/API URL，使用正常 User-Agent；不会绕过 paywall、robots.txt、authentication 或 publisher restrictions。如果来源没有合法公开 feed，系统会记录 unavailable，而不会伪造文章或链接。

## 7. Next production step

将 repository 连接到 GitHub，启用 Pages；GitHub Actions 会生成版本化 daily JSON。OpenAI 与通知属于可选外部能力，缺少时系统仍可发布真实已验证文章。

## 8. Final execution status

The server exposes `/api/system-status` and a development manual trigger at `POST /api/admin/run-now`. Each configured source is retried up to three times; one source failure produces a partial-failure report without stopping other sources. The in-process timer is only a local fallback. Production must invoke the same job from a platform cron or scheduled function at `0 6 * * *` with timezone `Asia/Kuala_Lumpur`, because browser timers and a sleeping local process are not reliable production schedulers.

## 9. Simplified GitHub Pages architecture

The static publishing path uses `data/index.json` and versioned `data/YYYY-MM-DD.json` files. `.github/workflows/daily-intelligence.yml` runs at `22:00 UTC`, which is `06:00 Asia/Kuala_Lumpur`, fetches configured legitimate feeds, retries transient failures three times, and refuses to overwrite the previous data when no valid articles are collected. `.github/workflows/pages.yml` publishes the static app to GitHub Pages. PostgreSQL is retained only as a legacy optional adapter and is not required by the static publishing path.

FoodNavigator has a verified official RSS default: `https://www.foodnavigator.com/arc/outboundfeeds/rss/`. Sin Chew and Nanyang remain optional configuration variables because no official feed URL was confirmed in this environment. Production GitHub Actions never uses the frontend demo records; it publishes only validated feed records, with `AI_ANALYSIS_PENDING` when `OPENAI_API_KEY` is absent.
