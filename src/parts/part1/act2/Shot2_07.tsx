import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { VOX_TOKENS, HighlighterText } from "../../../design-system";

export const Shot2_07: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const cardSnap = spring({
    frame,
    fps,
    config: VOX_TOKENS.spring.punchy,
  });

  return (
    <AbsoluteFill
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* 居中巨大灵魂拷问卡片 */}
      <div
        style={{
          position: "relative",
          backgroundColor: "#FFF",
          border: `6px solid ${VOX_TOKENS.colors.inkNavy}`,
          boxShadow: "0 24px 60px rgba(0,0,0,0.22)",
          padding: "60px 90px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: 1300,
          transform: `scale(${cardSnap}) rotate(0.8deg)`,
          opacity: cardSnap,
        }}
      >
        <span
          style={{
            backgroundColor: VOX_TOKENS.colors.retroRed,
            color: "#FFF",
            fontFamily: VOX_TOKENS.fonts.typewriterMono,
            fontSize: 16,
            fontWeight: 800,
            padding: "4px 16px",
            letterSpacing: 2,
            marginBottom: 20,
          }}
        >
          INFINITY PARADOX // 无穷悖论
        </span>

        <div
          style={{
            fontFamily: VOX_TOKENS.fonts.heavyTitle,
            fontSize: 84,
            color: VOX_TOKENS.colors.inkNavy,
            letterSpacing: 4,
            textAlign: "center",
          }}
        >
          钱会涨到天上去吗？
        </div>

        <div style={{ marginTop: 24 }}>
          <HighlighterText
            entryFrame={15}
            fontSize={38}
            highlightColor={VOX_TOKENS.colors.highlightYellow}
            textColor={VOX_TOKENS.colors.inkNavy}
          >
            把一年切成 n 份 · 利率是 1/n · 结算 n 次
          </HighlighterText>
        </div>

        {/* 底部悬念小字 */}
        <div
          style={{
            marginTop: 30,
            fontFamily: VOX_TOKENS.fonts.editorialSerif,
            fontSize: 24,
            color: VOX_TOKENS.colors.textMuted,
          }}
        >
          次数趋向无穷多，但每次给的利息趋向无穷小。谁会赢？
        </div>
      </div>
    </AbsoluteFill>
  );
};
