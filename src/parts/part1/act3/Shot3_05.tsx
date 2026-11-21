import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { VOX_TOKENS, HighlighterText } from "../../../design-system";

export const Shot3_05: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const stampSnap = spring({
    frame: frame - 20,
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
      {/* 顶部标题 */}
      <div
        style={{
          position: "absolute",
          top: 60,
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
            fontSize: 18,
            color: VOX_TOKENS.colors.retroRed,
            letterSpacing: 3,
            fontWeight: 800,
          }}
        >
          MONOTONE CONVERGENCE // 单调有界定理
        </span>
        <div style={{ marginTop: 12 }}>
          <HighlighterText
            entryFrame={10}
            fontSize={44}
            highlightColor={VOX_TOKENS.colors.highlightYellow}
            textColor={VOX_TOKENS.colors.inkNavy}
          >
            数列单调递增，却有个上界 ➔ 它必须停下来！
          </HighlighterText>
        </div>
      </div>

      {/* 居中双印章卡片 */}
      <div
        style={{
          width: 1200,
          backgroundColor: "#FFF",
          border: `5px solid ${VOX_TOKENS.colors.inkNavy}`,
          boxShadow: "0 22px 55px rgba(0,0,0,0.22)",
          padding: "50px 70px",
          marginTop: 60,
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        {/* 特征 1：单调递增 */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "24px 36px",
            backgroundColor: VOX_TOKENS.colors.paperLight,
            border: `3px solid ${VOX_TOKENS.colors.inkNavy}`,
            transform: `scale(${stampSnap})`,
          }}
        >
          <span style={{ fontFamily: VOX_TOKENS.fonts.typewriterMono, fontSize: 16, color: VOX_TOKENS.colors.retroRed, fontWeight: 800 }}>
            PROPERTY 01
          </span>
          <span style={{ fontFamily: VOX_TOKENS.fonts.heavyTitle, fontSize: 44, color: VOX_TOKENS.colors.inkNavy, marginTop: 8 }}>
            单调递增
          </span>
          <span style={{ fontFamily: VOX_TOKENS.fonts.body, fontSize: 18, color: VOX_TOKENS.colors.textMuted, marginTop: 6 }}>
            xₙ₊₁ &gt; xₙ (一步步往上爬)
          </span>
        </div>

        {/* 碰撞相遇符号 */}
        <div style={{ fontFamily: VOX_TOKENS.fonts.heavyTitle, fontSize: 50, color: VOX_TOKENS.colors.retroRed }}>
          +
        </div>

        {/* 特征 2：严格有上界 */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "24px 36px",
            backgroundColor: VOX_TOKENS.colors.highlightYellow,
            border: `3px solid ${VOX_TOKENS.colors.retroRed}`,
            transform: `scale(${stampSnap})`,
          }}
        >
          <span style={{ fontFamily: VOX_TOKENS.fonts.typewriterMono, fontSize: 16, color: VOX_TOKENS.colors.retroRed, fontWeight: 900 }}>
            PROPERTY 02
          </span>
          <span style={{ fontFamily: VOX_TOKENS.fonts.heavyTitle, fontSize: 44, color: VOX_TOKENS.colors.inkNavy, marginTop: 8 }}>
            严格有上界
          </span>
          <span style={{ fontFamily: VOX_TOKENS.fonts.body, fontSize: 18, color: VOX_TOKENS.colors.inkNavy, marginTop: 6, fontWeight: 700 }}>
            xₙ &lt; 3 (头顶有天花板阻挡)
          </span>
        </div>
      </div>
    </AbsoluteFill>
  );
};
