import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { VOX_TOKENS, HighlighterText } from "../../../design-system";

export const Shot4_05: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

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
      {/* 居中翻开的第 2 张档案卡：1668 墨卡托 */}
      <div
        style={{
          width: 1050,
          backgroundColor: "#FFF",
          border: `6px solid ${VOX_TOKENS.colors.inkNavy}`,
          boxShadow: "0 24px 60px rgba(0,0,0,0.22)",
          padding: "50px 70px",
          transform: `scale(${cardSnap}) rotate(1deg)`,
          opacity: cardSnap,
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -24,
            left: 40,
            backgroundColor: VOX_TOKENS.colors.vintageTeal,
            color: "#FFF",
            fontFamily: VOX_TOKENS.fonts.typewriterMono,
            fontSize: 22,
            fontWeight: 900,
            padding: "6px 20px",
            letterSpacing: 2,
          }}
        >
          YEAR 1668 · 命名诞生
        </div>

        <div
          style={{
            fontFamily: VOX_TOKENS.fonts.editorialSerif,
            fontSize: 50,
            fontWeight: 900,
            color: VOX_TOKENS.colors.inkNavy,
            marginTop: 10,
          }}
        >
          尼古拉斯 · 墨卡托 (Nicholas Mercator)
        </div>

        <div
          style={{
            fontFamily: VOX_TOKENS.fonts.typewriterMono,
            fontSize: 18,
            color: VOX_TOKENS.colors.textMuted,
            marginTop: 4,
          }}
        >
          《对数术》(Logarithmotechnia) · 双曲线 y = 1/(1+x)
        </div>

        <div
          style={{
            marginTop: 24,
            padding: "20px 24px",
            backgroundColor: VOX_TOKENS.colors.paperLight,
            borderLeft: `5px solid ${VOX_TOKENS.colors.vintageTeal}`,
            fontFamily: VOX_TOKENS.fonts.body,
            fontSize: 22,
            lineHeight: 1.6,
          }}
        >
          墨卡托研究双曲线下的面积积分时，第一次创造性地将这类对数命名为——「自然对数 (Logarithmus Naturalis)」。
        </div>

        <div style={{ marginTop: 24 }}>
          <HighlighterText
            entryFrame={15}
            fontSize={36}
            highlightColor={VOX_TOKENS.colors.highlightYellow}
            textColor={VOX_TOKENS.colors.inkNavy}
          >
            首次定名「自然对数」· 却依旧未见 e
          </HighlighterText>
        </div>
      </div>
    </AbsoluteFill>
  );
};
