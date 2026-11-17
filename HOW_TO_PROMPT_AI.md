# 💡 组员专用：如何一键向 AI 提问（防翻车模板）

如果你打算使用 ChatGPT、Claude、Cursor 或其他 AI 来帮你写代码，**请直接复制下面框内的提示词模板发给 AI**。

这样 AI 就会严格受控，**绝对不会装乱七八糟的插件、绝对不会改动别人的代码、绝对不会弄乱画风**！

---

### 📋 提问模板（直接复制使用）

```text
你好！我现在正在一个 3 人协作的 Remotion 视频项目《e 的由来》中工作。

我是【填：同学1 / 同学2 / 同学3】，负责【填：幕 1 ～ 幕 4 / 幕 5 ～ 幕 6 / 幕 7 ～ 幕 10】。

请你先阅读项目根目录的《FOR_AI.md》和《STORYBOARD.md》，并严格遵守以下要求：
1. 【严格沙盒隔离】：你只能在 `src/parts/part【1/2/3】/` 目录下编写和修改代码，绝对不要修改 package.json、MainVideo.tsx、Root.tsx 或任何其他目录！
2. 【禁止安装新依赖】：不要叫我运行 npm install 安装任何新包，所有动效全部用项目已有的 Remotion API 和 `src/design-system/` 下的积木组件（PaperBackground, HighlighterText, VoxTitle, TornPaperCutout 等）。
3. 【统一 Vox 画风】：严格遵循复古报刊、撕纸拼贴、网格纸底和荧光黄高亮的风格。
4. 【精确对齐分镜】：我当前需要你帮我实现【填：具体镜号，例如 2-02 半年结复利表格 / 5-13 级数逐项展开】。

这是我当前镜头的具体要求与台词：
【把 STORYBOARD.md 里对应镜头的动作和台词粘贴在这里】

请直接输出符合以上规范的完整 React/Remotion 代码。
```

---

### 💡 组员常见报错与避坑指南

1. **AI 叫你 `npm install xxx`？**
   - ➔ **果断拒绝！** 回复它：“请不要安装第三方库，用原生的 Remotion spring/interpolate 和项目中已有的组件实现”。
2. **AI 把整个 `MainVideo.tsx` 或者 `Root.tsx` 给改了？**
   - ➔ **不要采纳！** 提醒它：“我只负责 `src/parts/partX/`，不要改全局入口”。
3. **改完代码后，浏览器没变动？**
   - ➔ 检查你在 Remotion Studio 播放器左侧选中的是不是你自己的分段（如 `Part1`、`Part2`）。
