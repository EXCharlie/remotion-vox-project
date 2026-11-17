/**
 * Vox Design System Tokens
 * 专为中文与 Vox 复古报刊剪辑风格定制的色彩、字体与动效规范
 */

export const VOX_TOKENS = {
  // 全局视频规格（严格统一，防止合并时错位）
  video: {
    width: 1920,
    height: 1080,
    fps: 30,
  },

  // 经典 Vox 复古报纸调色盘
  colors: {
    // 纸张底色
    paperLight: "#F5F2EB",     // 浅米白褶皱纸
    paperWarm: "#ECE4D4",      // 暖色牛皮纸
    paperDark: "#D8CEBC",      // 复古深色旧纸
    gridLine: "rgba(0, 0, 0, 0.06)", // 坐标网格线颜色

    // 标志性强调色
    highlightYellow: "#FFE500", // 核心！荧光马克笔明黄（图1中的高亮黄）
    retroRed: "#D93829",        // 核心！复古印刷红（图2中的半色调底红）
    inkNavy: "#152535",         // 核心！报刊深墨蓝（图2标题海蓝色）
    vintageTeal: "#1D545E",     // 辅助复古孔雀青
    badgeGold: "#E09F3E",       // 辅助复古暖金

    // 文字颜色
    textBlack: "#1A1A1A",       // 报刊炭黑正文
    textMuted: "#5A564E",       // 辅助灰度文字
    textWhite: "#FFFFFF",       // 反白文本（带深色投影）
    
    // 撕纸白边
    tornEdgeWhite: "#FDFDFD",
    tornEdgeShadow: "rgba(0, 0, 0, 0.35)",
  },

  // 针对中文特调的字体规范
  fonts: {
    // 1. 冲击力特粗标题（对标图2 ONE STEEL BOX）：超高超粗，带报纸压迫感
    heavyTitle:
      '"Smiley Sans", "PingFang SC", "Hiragino Sans GB", "Source Han Sans CN", "Noto Sans SC", "Microsoft YaHei", -apple-system, sans-serif',
    
    // 2. 历史/文献复古衬线（对标图1 HISTORY TIMELINE）：雕刻感宋体，高级优雅
    editorialSerif:
      '"Songti SC", "Source Han Serif CN", "Noto Serif SC", "STSong", Georgia, "Times New Roman", serif',

    // 3. 档案打字机/数据标签体：冷峻客观
    typewriterMono:
      '"Courier New", "Noto Sans Mono", Menlo, Consolas, monospace',
    
    // 4. 清晰易读正文/字幕
    body:
      '"PingFang SC", "Hiragino Sans GB", "Source Han Sans CN", "Microsoft YaHei", sans-serif',
  },

  // 动效手感规范（严禁在业务代码中瞎填参数）
  spring: {
    // 快速剪报入场（类似纸张拍在桌上，带微弱弹性）
    paperSnap: { damping: 14, mass: 0.6, stiffness: 140 },
    // 平滑相机移动/推镜头（稳重无晃动）
    cameraSmooth: { damping: 200, mass: 1, stiffness: 80 },
    // 强调性跳动（印章盖下、标签弹出）
    punchy: { damping: 10, mass: 0.5, stiffness: 180 },
  },
};
