import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { VOX_TOKENS, HighlighterText } from "../../../design-system";

export const Shot4_10: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const lineSnap = spring({
    frame: frame - 15,
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
            fontFamily: VOX_TOKENS.fonts.editorialSerif,
            fontSize: 26,
            color: VOX_TOKENS.colors.textMuted,
            letterSpacing: 2,
          }}
        >
          数学大统一的关键顿悟
        </span>
        <div style={{ marginTop: 12 }}>
          <HighlighterText
            entryFrame={10}
            fontSize={52}
            highlightColor={VOX_TOKENS.colors.highlightYellow}
            textColor={VOX_TOKENS.colors.inkNavy}
          >
            得有人意识到——「它是同一个东西」！
          </HighlighterText>
        </div>
      </div>

      {/* 三点连接线 */}
      <div
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: 1200,
          marginTop: 80,
        }}
      >
        {/* 青绿贯穿线 */}
        <div
          style={{
            position: "absolute",
            left: 50,
            right: 50,
            height: 6,
            backgroundColor: VOX_TOKENS.colors.vintageTeal,
            transform: `scaleX(${lineSnap})`,
            transformOrigin: "center center",
            zIndex: 1,
          }}
        />

        {/* 节点 1：对数表 */}
        <div
          style={{
            backgroundColor: "#FFF",
            border: `4px solid ${VOX_TOKENS.colors.inkNavy}`,
            padding: "16px 24px",
            zIndex: 10,
            fontFamily: VOX_TOKENS.fonts.typewriterMono,
            fontWeight: 800,
            boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
          }}
        >
          1618 对数表
        </div>

        {/* 核心同一个东西徽章 */}
        <div
          style={{
            backgroundColor: VOX_TOKENS.colors.retroRed,
            color: "#FFF",
            border: "4px solid #FFF",
            borderRadius: "50%",
            width: 150,
            height: 150,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 20,
            transform: `scale(${lineSnap})`,
            boxShadow: "0 12px 30px rgba(217, 56, 41, 0.4)",
          }}
        >
          <span style={{ fontFamily: VOX_TOKENS.fonts.heavyTitle, fontSize: 32, lineHeight: 1.1 }}>同一</span>
          <span style={{ fontFamily: VOX_TOKENS.fonts.heavyTitle, fontSize: 32, lineHeight: 1.1 }}>常数</span>
        </div>

        {/* 节点 2：复利极限 */}
        <div
          style={{
            backgroundColor: "#FFF",
            border: `4px solid ${VOX_TOKENS.colors.inkNavy}`,
            padding: "16px 24px",
            zIndex: 10,
            fontFamily: VOX_TOKENS.fonts.typewriterMono,
            fontWeight: 800,
            boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
          }}
        >
          1683 复利极限
        </div>
      </div>
    </AbsoluteFill>
  );
};
