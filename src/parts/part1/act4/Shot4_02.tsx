import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { VOX_TOKENS, HighlighterText } from "../../../design-system";

export const Shot4_02: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // 卡片翻正动效 (3D 翻转模拟)
  const flipProgress = spring({
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
      {/* 居中翻开的第 1 张档案卡 */}
      <div
        style={{
          width: 960,
          backgroundColor: "#FFF",
          border: `6px solid ${VOX_TOKENS.colors.inkNavy}`,
          boxShadow: "0 24px 60px rgba(0,0,0,0.22)",
          padding: "50px 70px",
          transform: `scale(${interpolate(flipProgress, [0, 1], [0.9, 1])}) rotate(-1deg)`,
          opacity: flipProgress,
          position: "relative",
        }}
      >
        {/* 左上角年份标签 */}
        <div
          style={{
            position: "absolute",
            top: -24,
            left: 40,
            backgroundColor: VOX_TOKENS.colors.retroRed,
            color: "#FFF",
            fontFamily: VOX_TOKENS.fonts.typewriterMono,
            fontSize: 24,
            fontWeight: 900,
            padding: "6px 20px",
            letterSpacing: 2,
          }}
        >
          YEAR 1618 · 附录显影
        </div>

        <div
          style={{
            fontFamily: VOX_TOKENS.fonts.editorialSerif,
            fontSize: 52,
            fontWeight: 900,
            color: VOX_TOKENS.colors.inkNavy,
            marginTop: 10,
          }}
        >
          约翰 · 纳皮尔 (John Napier)
        </div>

        <div
          style={{
            fontFamily: VOX_TOKENS.fonts.typewriterMono,
            fontSize: 18,
            color: VOX_TOKENS.colors.textMuted,
            marginTop: 6,
          }}
        >
          《奇妙对数定律说明书》英译本附录 (Descriptio)
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
          在人类历史上第一部对数专著附录中，记载了一张由匿名学者整理的自然对数表。
        </div>

        <div style={{ marginTop: 24 }}>
          <HighlighterText
            entryFrame={15}
            fontSize={34}
            highlightColor={VOX_TOKENS.colors.highlightYellow}
            textColor={VOX_TOKENS.colors.inkNavy}
          >
            人类首次与常数 e 产生触碰的地方
          </HighlighterText>
        </div>
      </div>
    </AbsoluteFill>
  );
};
