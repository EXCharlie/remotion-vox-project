import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { VOX_TOKENS, HighlighterText } from "../../../design-system";

export const Shot3_10: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // 背景虚化对数表浮现
  const tableOpacity = interpolate(frame, [15, 60], [0, 0.25], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const cardSnap = spring({
    frame,
    fps,
    config: VOX_TOKENS.spring.paperSnap,
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
      {/* 背景半透明隐约浮现的古老对数表格 */}
      <div
        style={{
          position: "absolute",
          inset: 40,
          opacity: tableOpacity,
          backgroundImage: `repeating-linear-gradient(0deg, #333 0, #333 1px, transparent 1px, transparent 32px), repeating-linear-gradient(90deg, #333 0, #333 1px, transparent 1px, transparent 120px)`,
          pointerEvents: "none",
        }}
      />

      {/* 居中悬念卡片 */}
      <div
        style={{
          position: "relative",
          backgroundColor: "#FFF",
          border: `5px solid ${VOX_TOKENS.colors.inkNavy}`,
          boxShadow: "0 22px 55px rgba(0,0,0,0.2)",
          padding: "50px 80px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: 1200,
          transform: `scale(${cardSnap})`,
        }}
      >
        <div
          style={{
            fontFamily: VOX_TOKENS.fonts.heavyTitle,
            fontSize: 54,
            color: VOX_TOKENS.colors.inkNavy,
            letterSpacing: 2,
            textAlign: "center",
          }}
        >
          但它当时，还没有名字
        </div>

        <div style={{ marginTop: 20 }}>
          <HighlighterText
            entryFrame={15}
            fontSize={36}
            highlightColor={VOX_TOKENS.colors.highlightYellow}
            textColor={VOX_TOKENS.colors.inkNavy}
          >
            甚至没有人把它，与「对数 (Logarithm)」联系在一起
          </HighlighterText>
        </div>

        <div
          style={{
            marginTop: 26,
            fontFamily: VOX_TOKENS.fonts.typewriterMono,
            fontSize: 18,
            color: VOX_TOKENS.colors.retroRed,
            fontWeight: 800,
          }}
        >
          ACT 04 PREVIEW // 接下来：三次致命的擦肩而过 ➔
        </div>
      </div>
    </AbsoluteFill>
  );
};
