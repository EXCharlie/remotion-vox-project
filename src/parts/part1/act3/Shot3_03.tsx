import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { VOX_TOKENS, HighlighterText } from "../../../design-system";

export const Shot3_03: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const line1 = spring({ frame: frame - 5, fps, config: VOX_TOKENS.spring.punchy });
  const line2 = spring({ frame: frame - 40, fps, config: VOX_TOKENS.spring.punchy });
  const line3 = spring({ frame: frame - 80, fps, config: VOX_TOKENS.spring.punchy });

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
      {/* 顶部标题 */}
      <div
        style={{
          position: "absolute",
          top: 50,
          left: 0,
          right: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          zIndex: 10,
        }}
      >
        <span
          style={{
            fontFamily: VOX_TOKENS.fonts.typewriterMono,
            fontSize: 16,
            color: VOX_TOKENS.colors.retroRed,
            letterSpacing: 3,
            fontWeight: 800,
          }}
        >
          BINOMIAL THEOREM PROOF // 二项式定理强力拆解
        </span>
        <div style={{ marginTop: 10 }}>
          <HighlighterText
            entryFrame={10}
            fontSize={42}
            highlightColor={VOX_TOKENS.colors.highlightYellow}
            textColor={VOX_TOKENS.colors.inkNavy}
          >
            用二项式定理拆开公式 · 证明了关键铁律
          </HighlighterText>
        </div>
      </div>

      {/* 居中数学推演展台 */}
      <div
        style={{
          width: 1400,
          backgroundColor: "#FFF",
          border: `5px solid ${VOX_TOKENS.colors.inkNavy}`,
          boxShadow: "0 22px 55px rgba(0,0,0,0.22)",
          padding: "44px 50px",
          marginTop: 60,
          display: "flex",
          flexDirection: "column",
          gap: 20,
        }}
      >
        {/* 第 1 行：原始式子 */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "16px 24px",
            backgroundColor: VOX_TOKENS.colors.paperLight,
            border: `2px solid ${VOX_TOKENS.colors.inkNavy}`,
            fontFamily: VOX_TOKENS.fonts.editorialSerif,
            fontSize: 36,
            fontWeight: 800,
            transform: `scale(${line1})`,
            opacity: line1,
          }}
        >
          <span style={{ color: VOX_TOKENS.colors.retroRed, marginRight: 20 }}>[1]</span>
          <span>( 1 + 1/n )ⁿ = 1 + n·(1/n) + [n(n-1)/2!]·(1/n)² + …</span>
        </div>

        {/* 第 2 行：整理化简 */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "16px 24px",
            backgroundColor: "#FFF",
            border: `2px solid ${VOX_TOKENS.colors.inkNavy}`,
            fontFamily: VOX_TOKENS.fonts.editorialSerif,
            fontSize: 34,
            fontWeight: 800,
            transform: `scale(${line2})`,
            opacity: line2,
          }}
        >
          <span style={{ color: VOX_TOKENS.colors.badgeGold, marginRight: 20 }}>[2]</span>
          <span>= 1 + 1 + (1 - 1/n)/2! + (1 - 1/n)(1 - 2/n)/3! + …</span>
        </div>

        {/* 第 3 行：结论铁律 */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "18px 24px",
            backgroundColor: VOX_TOKENS.colors.highlightYellow,
            border: `3px solid ${VOX_TOKENS.colors.retroRed}`,
            fontFamily: VOX_TOKENS.fonts.typewriterMono,
            fontSize: 26,
            fontWeight: 900,
            color: VOX_TOKENS.colors.inkNavy,
            transform: `scale(${line3})`,
            opacity: line3,
          }}
        >
          <span>无论 n 增大到几亿几兆：</span>
          <span style={{ color: VOX_TOKENS.colors.retroRed }}>每一项都恒正，且永远小于几何级数！</span>
        </div>
      </div>
    </AbsoluteFill>
  );
};
