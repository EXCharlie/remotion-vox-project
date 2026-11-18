import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { VOX_TOKENS, HighlighterText } from "../../../design-system";

export const Shot3_06: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // 红色警示标贴猛烈弹入
  const alertSnap = spring({
    frame: frame - 10,
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
      {/* 居中巨大警示分屏预警 */}
      <div
        style={{
          position: "relative",
          backgroundColor: VOX_TOKENS.colors.retroRed,
          color: "#FFF",
          border: `6px solid ${VOX_TOKENS.colors.inkNavy}`,
          boxShadow: "0 24px 60px rgba(217, 56, 41, 0.35)",
          padding: "50px 90px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          transform: `scale(${alertSnap}) rotate(-1.5deg)`,
          opacity: alertSnap,
        }}
      >
        <span
          style={{
            backgroundColor: "#FFF",
            color: VOX_TOKENS.colors.retroRed,
            fontFamily: VOX_TOKENS.fonts.typewriterMono,
            fontSize: 20,
            fontWeight: 900,
            padding: "4px 18px",
            letterSpacing: 3,
            marginBottom: 16,
          }}
        >
          🚨 COMMON MISCONCEPTION // 史实大误区
        </span>

        <div
          style={{
            fontFamily: VOX_TOKENS.fonts.heavyTitle,
            fontSize: 88,
            letterSpacing: 4,
            textAlign: "center",
          }}
        >
          别 记 错 了 ！
        </div>

        <div
          style={{
            marginTop: 20,
            fontFamily: VOX_TOKENS.fonts.editorialSerif,
            fontSize: 32,
            color: "#FFF",
            letterSpacing: 2,
          }}
        >
          这里有一个在教科书和网络上特别常见的致命误会 ➔
        </div>
      </div>
    </AbsoluteFill>
  );
};
