# 🎬 8分钟 Vox 风格科普视频《e 的由来》协同工程指南

> 💡 **核心提示**：
> 如果你打算使用 **AI（Cursor / ChatGPT / Claude 等）** 帮你写代码：
> 请先阅读 **[HOW_TO_PROMPT_AI.md](HOW_TO_PROMPT_AI.md)**，直接复制里面的【防翻车提问模板】丢给 AI，
> 并让 AI 严格遵守 **[FOR_AI.md](FOR_AI.md)** 的行为铁律！绝对不会搞乱仓库或产生冲突！

---

## 👥 团队分工与时间码速查

| 成员 | 负责目录 | 负责幕次 | 帧数范围 (30fps) | 时间码 | 核心任务 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **同学 1** | `src/parts/part1/` | **幕 1 ～ 幕 4** | **0 ～ 4216 帧** | 00:00 – 02:20.5 | 复利表格、伯努利极限与**辟谣**、三次擦肩卡片 |
| **同学 2** | `src/parts/part2/` | **幕 5 ～ 幕 6** | **4216 ～ 7752 帧** | 02:20.5 – 04:18.4 | 欧拉四年份、命名辟谣、级数展开与 18 位小数、导数自指 |
| **同学 3** | `src/parts/part3/` | **幕 7 ～ 幕 10** | **7752 ～ 11220 帧** | 04:18.4 – 06:14.0 | 万物场景、欧拉恒等式复平面、无理数/超越数身份证、收束 |

---

## 🚀 组员极速上手（3 分钟入门）

你不需要精通编程，更不用从零手写特效，把它当作**“用代码拼乐高积木”**即可！

### 1. 启动预览播放器
在项目目录下打开终端运行：
```bash
npm install   # 首次运行安装依赖
npm run dev   # 启动网页预览器
```
浏览器会自动打开 `http://localhost:3000`。在左侧列表中：
- 点击 **Part1**：同学 A 的专属镜头；
- 点击 **Part2**：同学 B 的专属镜头；
- 点击 **Part3**：同学 C 的专属镜头；
- 点击 **MainVideo**：最终 8 分钟合并成片。

---

## 🎨 现成 Vox 风格积木组件（直接复制填空）

在你的 `src/parts/partX/index.tsx` 中直接引入使用：

### 1. 纸张网格背景（对标参考图 1）
```tsx
import { PaperBackground } from "../../design-system";

// 带有复古牛皮纸质感与坐标网格线
<PaperBackground showGrid={true} gridSize={48} />
```

### 2. 马克笔荧光黄高亮字（对标参考图 1）
```tsx
import { HighlighterText } from "../../design-system";

<HighlighterText entryFrame={10} fontSize={64}>
  这里填写需要高亮划重点的中文标题
</HighlighterText>
```

### 3. 历史时间轴（对标参考图 1）
只需填空修改事件数组即可：
```tsx
import { HistoryTimeline } from "../../design-system";

<HistoryTimeline
  entryFrame={20}
  events={[
    { year: "1935", date: "9月15日", title: "技术规范初定" },
    { year: "1939", date: "9月1日", title: "全球供应链扩张" },
    { year: "1941", date: "12月7日", title: "标准化正式确立" },
  ]}
/>
```

### 4. 特粗报刊主标题（对标参考图 2 ONE STEEL BOX）
```tsx
import { VoxTitle } from "../../design-system";

<VoxTitle
  title="一个钢制箱子"
  subtitle="改变世界经济的发明"
  fontSize={100}
  entryFrame={5}
/>
```

### 5. 撕纸白毛边剪报（对标参考图 2 货轮）
包裹任意图片，自动生成手工撕纸白边与立体投影：
```tsx
import { TornPaperCutout } from "../../design-system";

<TornPaperCutout entryFrame={15} rotation={-2}>
  <img src={staticFile("assets/partX/your-photo.png")} style={{ width: 400 }} />
</TornPaperCutout>
```

---

## 🛡️ 团队防冲突开发守则（请务必遵守！）

1. **各自守好自留地**：
   - 同学 1 只修改：`src/parts/part1/` 与 `public/assets/part1/`
   - 同学 2 只修改：`src/parts/part2/` 与 `public/assets/part2/`
   - 同学 3 只修改：`src/parts/part3/` 与 `public/assets/part3/`
   - **不要私自修改** `src/MainVideo.tsx` 和根目录配置文件。
2. **音频与字幕全局统一管理（组员无需手写字幕/音频）**：
   - 配音与 100 句完整 SRT 字幕已统一存放在 `public/assets/shared/`，由主控层统一注入；
   - **请勿在各自的 `src/parts/partX/` 中引入 `<Audio>` 或自制字幕**，防止合并时产生双重音轨或样式冲突；
   - **单人调试无忧**：在本地运行 `npm run dev` 后，在 Studio 侧边栏点击你的 `PartX`，系统已**自动为你挂载了当前片段对应的原声配音与同步字幕**，方便精准卡点！
3. **大素材文件不要提交 Git**：
   - 如果有超过 50MB 的未压缩高清视频或音频，请通过网盘同步给组长，不要直接 push 到 GitHub。
4. **分辨率与帧率锁死**：
   - 全片统一为 **1920x1080**、**30 fps**。

---

## 🖱️ 组员免命令行上传指南（使用 GitHub Desktop）

如果你不想在黑框框里敲 Git 命令，建议使用官方图形软件 **[GitHub Desktop](https://desktop.github.com/)**：

1. **下载克隆**：打开 GitHub Desktop，登录后点击 `Clone a repository`，选择组长给的项目仓库。
2. **切换专属分支**：
   - 在软件顶部点击 `Current Branch` ➔ 点击 `New Branch`；
   - 同学 A 起名 `feature/part1`，同学 B 起名 `feature/part2`。
3. **日常提交上传**：
   - 改好文件后，GitHub Desktop 左侧会自动列出修改项；
   - 在左下角 `Summary` 框里写一句话（例如：“添加了时间轴组件”）；
   - 点击蓝色的 **Commit to feature/partX**；
   - 点击顶部的 **Push origin**，搞定！
4. **合并通知**：
   - 在软件顶部点击 **Create Pull Request**，告诉组长合并即可。
