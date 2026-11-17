import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { VOX_TOKENS } from "../tokens";

interface VoxTitleProps {
  /** 主标题文字（中文或英文） */
  title: string;
  /** 副标题或小标（可选） */
  subtitle?: string;
  /** 下划粗条颜色，默认复古红 */
  accentBarColor?: string;
  /** 主标题字体颜色，默认墨蓝 */
  titleColor?: string;
  /** 开始出现的帧 */
  entryFrame?: number;
  fontSize?: number;
  style?: React.CSSProperties;
}

export const VoxTitle: React.FC<VoxTitleProps> = ({
  title,
  subtitle,
  accentBarColor = VOX_TOKENS.colors.retroRed,
  titleColor = VOX_TOKENS.colors.inkNavy,
  entryFrame = 0,
  fontSize = 96,
  style = {},
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // 文字进场弹力（纸张拍入感）
  const enter = spring({
    frame: frame - entryFrame,
    fps,
    config: VOX_TOKENS.spring.paperSnap,
  });

  const barScale = spring({
    frame: frame - entryFrame - 4,
    fps,
    config: { damping: 16, mass: 0.5, stiffness: 140 },
  });

  if (frame < entryFrame) return null;

  return (
    <div
      style={{
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "flex-start",
        opacity: enter,
        transform: `translateY(${interpolate(enter, [0, 1], [30, 0])}px) scale(${interpolate(
          enter,
          [0, 1],
          [0.96, 1]
        )})`,
        ...style,
      }}
    >
      {subtitle && (
        <span
          style={{
            fontFamily: VOX_TOKENS.fonts.editorialSerif,
            fontSize: fontSize * 0.28,
            fontWeight: 700,
            color: VOX_TOKENS.colors.textMuted,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            marginBottom: 8,
          }}
        >
          {subtitle}
        </span>
      )}

      {/* 极紧凑、高冲击力的大标题 */}
      <h1
        style={{
          margin: 0,
          padding: 0,
          fontFamily: VOX_TOKENS.fonts.heavyTitle,
          fontSize,
          fontWeight: 900,
          color: titleColor,
          lineHeight: 1.05,
          letterSpacing: "-0.02em",
          transform: "scaleY(1.08)", // 模拟超高压缩版式的视觉张力
          transformOrigin: "bottom left",
          textShadow: "0 2px 10px rgba(0,0,0,0.06)",
        }}
      >
        {title}
      </h1>

      {/* 标志性下划粗条（对标图2 ONE STEEL BOX 下面的红粗线） */}
      {accentBarColor && (
        <div
          style={{
            width: "36%",
            minWidth: 80,
            height: 10,
            backgroundColor: accentBarColor,
            marginTop: 14,
            transformOrigin: "left center",
            transform: `scaleX(${Math.max(0, barScale)})`,
            borderRadius: 2,
          }}
        />
      )}
    </div>
  );
};
