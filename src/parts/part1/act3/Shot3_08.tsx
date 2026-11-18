import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { VOX_TOKENS, HighlighterText } from "../../../design-system";

export const Shot3_08: React.FC = () => {
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
      {/* 居中真实史实金光卡片 */}
      <div
        style={{
          position: "relative",
          width: 1200,
          backgroundColor: "#FFF",
          border: `6px solid ${VOX_TOKENS.colors.inkNavy}`,
          boxShadow: "0 24px 60px rgba(0,0,0,0.22)",
          padding: "50px 70px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          transform: `scale(${cardSnap})`,
        }}
      >
        <div
          style={{
            fontFamily: VOX_TOKENS.fonts.typewriterMono,
            fontSize: 18,
            color: VOX_TOKENS.colors.inkNavy,
            fontWeight: 800,
            letterSpacing: 2,
          }}
        >
          ACTUAL HISTORICAL CONTRIBUTION // 真实历史贡献
        </div>

        <div
          style={{
            fontFamily: VOX_TOKENS.fonts.heavyTitle,
            fontSize: 48,
            color: VOX_TOKENS.colors.inkNavy,
            marginTop: 12,
          }}
        >
          他只把这个极限圈在了——
        </div>

        {/* 核心真实区间 2 < L < 3 */}
        <div
          style={{
            marginTop: 24,
            padding: "20px 60px",
            backgroundColor: VOX_TOKENS.colors.highlightYellow,
            border: `4px solid ${VOX_TOKENS.colors.retroRed}`,
            boxShadow: "0 10px 24px rgba(0,0,0,0.15)",
          }}
        >
          <span
            style={{
              fontFamily: VOX_TOKENS.fonts.editorialSerif,
              fontSize: 96,
              fontWeight: 900,
              color: VOX_TOKENS.colors.inkNavy,
              letterSpacing: 6,
            }}
          >
            2 &lt; L &lt; 3
          </span>
        </div>

        {/* 底部升华 */}
        <div style={{ marginTop: 30 }}>
          <HighlighterText
            entryFrame={20}
            fontSize={36}
            highlightColor={VOX_TOKENS.colors.retroRed}
            textColor="#FFF"
          >
            但这一步，已经足够伟大！
          </HighlighterText>
        </div>
      </div>
    </AbsoluteFill>
  );
};
