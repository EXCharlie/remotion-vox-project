# 《e 的由来》Remotion 科普视频工程

基于 Remotion 4.0 构建的 Vox 风格数学史科普视频（总时长 06:14，374 秒，11220 帧 @ 30fps，1920x1080，共 101 镜）。

---

## 项目状态：已全部完成并合流

全片三部分开发、审阅与主干合并已全部完成，音频、字幕与全部 101 个镜头已集成至 `main` 分支。

- **GitHub 提交历史**：[查看完整 Commit 记录](https://github.com/EXCharlie/remotion-vox-project/commits/main)
- **团队成员贡献统计**：[查看各成员修改历史与贡献度](https://github.com/EXCharlie/remotion-vox-project/graphs/contributors)

---

## 团队分工与交付清单

| 成员 | 负责目录 | 负责幕次 | 帧数范围 (30fps) | 时间码 | 核心内容 | 状态 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| EXCharlie | `src/parts/part1/` | 幕 1 – 幕 4 | 0 – 4216 帧 (37 镜) | 00:00 – 02:20.5 | 复利表格、伯努利极限与辟谣、三次擦肩卡片 | 已完成 |
| Miller David | `src/parts/part2/` | 幕 5 – 幕 6 | 4216 – 7752 帧 (32 镜) | 02:20.5 – 04:18.4 | 欧拉四年份、命名辟谣、级数展开、导数自指 | 已完成 |
| S1lverShade0224 | `src/parts/part3/` | 幕 7 – 幕 10 | 7752 – 11220 帧 (32 镜) | 04:18.4 – 06:14.0 | 万物场景、欧拉恒等式复平面、超越数与收束 | 已完成 |

---

## 本地运行与成片渲染

### 1. 安装依赖与启动预览
```bash
npm install
npm run dev
```
启动后访问 `http://localhost:3000`，左侧列表可选择：
- `MainVideo`：全片完整成片（支持在右侧 Props 面板实时微调 `audioOffsetInSeconds` 音画偏移与 `syncSubtitles` 字幕同步）
- `Part1` / `Part2` / `Part3`：各分段独立预览（自动挂载对应时段的音频与字幕）

### 2. 导出成片与检查
```bash
npm run lint    # TypeScript 类型检查
npm run build   # 打包检查
npm run render  # 导出完整成片至 out/final_video.mp4
```

---

## 工程结构与规范

- `src/MainVideo.tsx`：全片总合成入口，统一注入公共配音 `public/assets/shared/audio.wav` 与字幕 `VoxSubtitles`。
- `src/Root.tsx`：注册 `MainVideo` 与各分段预览 Composition。
- `src/design-system/`：统一 Vox 视觉系统（`PaperBackground`、`HighlighterText`、`VoxTitle`、`TornPaperCutout`、`HalftoneLayer`、`HistoryTimeline`、`VOX_TOKENS`）。
- `src/parts/part1/`、`part2/`、`part3/`：各部分独立模块，不包含独立 `<Audio>` 或硬编码字幕。
- 详细分镜见 [STORYBOARD.md](STORYBOARD.md)，协作铁律见 [FOR_AI.md](FOR_AI.md)。
