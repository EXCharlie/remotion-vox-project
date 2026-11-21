import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { VOX_TOKENS, HighlighterText } from "../../../design-system";

export const Shot4_07: React.FC = () => {
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
      {/* 居中翻开的第 3 张档案卡：1690 莱布尼茨 */}
      <div
        style={{
          width: 1050,
          backgroundColor: "#FFF",
          border: `6px solid ${VOX_TOKENS.colors.inkNavy}`,
          boxShadow: "0 24px 60px rgba(0,0,0,0.22)",
          padding: "50px 70px",
          transform: `scale(${cardSnap}) rotate(-1.2deg)`,
          opacity: cardSnap,
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -24,
            left: 40,
            backgroundColor: VOX_TOKENS.colors.inkNavy,
            color: "#FFF",
            fontFamily: VOX_TOKENS.fonts.typewriterMono,
            fontSize: 22,
            fontWeight: 900,
            padding: "6px 20px",
            letterSpacing: 2,
          }}
        >
          YEAR 1690 · 信函记录
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
          戈特弗里德 · 莱布尼茨 (G. W. Leibniz)
        </div>

        <div
          style={{
            fontFamily: VOX_TOKENS.fonts.typewriterMono,
            fontSize: 18,
            color: VOX_TOKENS.colors.textMuted,
            marginTop: 4,
          }}
        >
          致信克里斯蒂安 · 惠更斯 (Leibniz ➔ Huygens, 1690)
        </div>

        <div
          style={{
            marginTop: 24,
            padding: "20px 24px",
            backgroundColor: VOX_TOKENS.colors.paperLight,
            borderLeft: `5px solid ${VOX_TOKENS.colors.inkNavy}`,
            fontFamily: VOX_TOKENS.fonts.body,
            fontSize: 22,
            lineHeight: 1.6,
          }}
        >
          在讨论对数曲线与指数微积分的书信往来中，微积分创始人之一莱布尼茨，终于决定为这个常数设立一个独立符号。
        </div>

        <div style={{ marginTop: 24 }}>
          <HighlighterText
            entryFrame={15}
            fontSize={36}
            highlightColor={VOX_TOKENS.colors.highlightYellow}
            textColor={VOX_TOKENS.colors.inkNavy}
          >
            首次赋予常数符号 · 但他选择的是……
          </HighlighterText>
        </div>
      </div>
    </AbsoluteFill>
  );
};
