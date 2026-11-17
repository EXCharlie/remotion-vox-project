import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { VOX_TOKENS } from "../tokens";

interface HighlighterTextProps {
  children: React.ReactNode;
  /** 开始高亮动画的帧数 */
  entryFrame?: number;
  /** 高亮颜色，默认经典荧光黄 */
  highlightColor?: string;
  /** 文字颜色，默认炭黑 */
  textColor?: string;
  /** 字体种类 */
  fontFamily?: string;
  /** 字号 */
  fontSize?: number;
  /** 贴纸胶带微小倾斜角（度数，例如 -1.5） */
  rotation?: number;
  /** 是否展示记号笔扫过的高亮涂抹动画 */
  animateSweep?: boolean;
  style?: React.CSSProperties;
}

export const HighlighterText: React.FC<HighlighterTextProps> = ({
  children,
  entryFrame = 0,
  highlightColor = VOX_TOKENS.colors.highlightYellow,
  textColor = VOX_TOKENS.colors.textBlack,
  fontFamily = VOX_TOKENS.fonts.editorialSerif,
  fontSize = 64,
  rotation = -1.2,
  animateSweep = true,
  style = {},
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // 记号笔涂抹进度动画
  const sweepProgress = animateSweep
    ? spring({
        frame: frame - entryFrame,
        fps,
        config: { damping: 18, mass: 0.5, stiffness: 120 },
      })
    : 1;

  if (frame < entryFrame && animateSweep) {
    return null;
  }

  return (
    <span
      style={{
        position: "relative",
        display: "inline-block",
        margin: "0 8px",
        transform: `rotate(${rotation}deg)`,
        transformOrigin: "center center",
        ...style,
      }}
    >
      {/* 荧光马克笔底色块（从左到右刷出来） */}
      <span
        style={{
          position: "absolute",
          top: "12%",
          bottom: "10%",
          left: -12,
          right: -12,
          backgroundColor: highlightColor,
          zIndex: 0,
          transformOrigin: "left center",
          transform: `scaleX(${sweepProgress})`,
          boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
        }}
      />

      {/* 文字层（置顶保证绝对清晰，针对中文优化加粗） */}
      <span
        style={{
          position: "relative",
          zIndex: 1,
          fontFamily,
          fontSize,
          fontWeight: 800,
          color: textColor,
          letterSpacing: "0.05em",
          lineHeight: 1.2,
          padding: "2px 6px",
          display: "inline-block",
        }}
      >
        {children}
      </span>
    </span>
  );
};
