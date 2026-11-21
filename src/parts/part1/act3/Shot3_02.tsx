import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { VOX_TOKENS, HighlighterText } from "../../../design-system";

export const Shot3_02: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const quoteSnap = spring({
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
      {/* 顶部标签 */}
      <div
        style={{
          position: "absolute",
          top: 60,
          left: 0,
          right: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
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
          PHILOSOPHICAL MOTIVATION // 哲学动机
        </span>
        <div style={{ marginTop: 10, fontFamily: VOX_TOKENS.fonts.heavyTitle, fontSize: 36, color: VOX_TOKENS.colors.inkNavy }}>
          他不是银行家，不为钱币的微利所困
        </div>
      </div>

      {/* 居中巨大引言卡片 */}
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
          maxWidth: 1200,
          marginTop: 50,
          transform: `scale(${quoteSnap}) rotate(0.6deg)`,
          opacity: quoteSnap,
        }}
      >
        <div
          style={{
            fontFamily: VOX_TOKENS.fonts.editorialSerif,
            fontSize: 32,
            color: VOX_TOKENS.colors.textMuted,
            marginBottom: 16,
          }}
        >
          他真正好奇的是纯粹数学问答：
        </div>

        <div
          style={{
            fontFamily: VOX_TOKENS.fonts.editorialSerif,
            fontSize: 72,
            fontWeight: 900,
            color: VOX_TOKENS.colors.inkNavy,
            lineHeight: 1.3,
            textAlign: "center",
          }}
        >
          “ 无限分割之后，<br />究竟会剩下什么？ ”
        </div>

        <div style={{ marginTop: 30 }}>
          <HighlighterText
            entryFrame={20}
            fontSize={36}
            highlightColor={VOX_TOKENS.colors.highlightYellow}
            textColor={VOX_TOKENS.colors.inkNavy}
          >
            WHAT REMAINS AFTER INFINITE SUBDIVISION?
          </HighlighterText>
        </div>
      </div>
    </AbsoluteFill>
  );
};
