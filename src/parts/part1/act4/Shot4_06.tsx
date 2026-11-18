import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { VOX_TOKENS, HighlighterText } from "../../../design-system";

export const Shot4_06: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const slotSnap = spring({
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
      {/* 留空凹槽展示卡 */}
      <div
        style={{
          width: 900,
          backgroundColor: "#FFF",
          border: `5px solid ${VOX_TOKENS.colors.inkNavy}`,
          boxShadow: "0 22px 55px rgba(0,0,0,0.2)",
          padding: "50px 70px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          transform: `scale(${slotSnap})`,
        }}
      >
        <div
          style={{
            fontFamily: VOX_TOKENS.fonts.heavyTitle,
            fontSize: 52,
            color: VOX_TOKENS.colors.inkNavy,
          }}
        >
          还是没点出那个「底」！
        </div>

        {/* 留空的凹槽方框 */}
        <div
          style={{
            marginTop: 30,
            width: 240,
            height: 100,
            border: `4px dashed ${VOX_TOKENS.colors.retroRed}`,
            backgroundColor: VOX_TOKENS.colors.paperLight,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              fontFamily: VOX_TOKENS.fonts.typewriterMono,
              fontSize: 32,
              fontWeight: 900,
              color: VOX_TOKENS.colors.retroRed,
            }}
          >
            [ 空 缺 ]
          </span>
        </div>

        <div style={{ marginTop: 24 }}>
          <HighlighterText
            entryFrame={5}
            fontSize={28}
            highlightColor={VOX_TOKENS.colors.highlightYellow}
            textColor={VOX_TOKENS.colors.inkNavy}
          >
            自然对数的名字有了，底数依然下落不明
          </HighlighterText>
        </div>
      </div>
    </AbsoluteFill>
  );
};
