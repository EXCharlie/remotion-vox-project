import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { VOX_TOKENS, HighlighterText } from "../../../design-system";

export const Shot4_03: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // 对数表格中半透明 e 的浮现
  const eWatermark = interpolate(frame, [20, 60], [0, 0.3], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const rowHighlight = spring({
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
      {/* 居中对数表格展台 */}
      <div
        style={{
          position: "relative",
          width: 1200,
          backgroundColor: "#FFF",
          border: `5px solid ${VOX_TOKENS.colors.inkNavy}`,
          boxShadow: "0 22px 55px rgba(0,0,0,0.2)",
          padding: "44px 60px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* 背景巨型隐性 e 字符 */}
        <div
          style={{
            position: "absolute",
            fontFamily: VOX_TOKENS.fonts.editorialSerif,
            fontSize: 340,
            fontWeight: 900,
            color: VOX_TOKENS.colors.retroRed,
            opacity: eWatermark,
            pointerEvents: "none",
            userSelect: "none",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          e
        </div>

        <div
          style={{
            fontFamily: VOX_TOKENS.fonts.heavyTitle,
            fontSize: 40,
            color: VOX_TOKENS.colors.inkNavy,
            marginBottom: 20,
          }}
        >
          1618 年自然对数表 · 隐形底数
        </div>

        {/* 表格三列 */}
        <div
          style={{
            width: "100%",
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: 16,
            fontFamily: VOX_TOKENS.fonts.typewriterMono,
            fontSize: 20,
            zIndex: 10,
          }}
        >
          <div style={{ backgroundColor: VOX_TOKENS.colors.paperLight, padding: 16, border: "1px solid #CCC" }}>
            <div>x = 1.000</div>
            <div style={{ color: VOX_TOKENS.colors.retroRed, fontWeight: 900, marginTop: 4 }}>ln(x) = 0.0000</div>
          </div>
          <div
            style={{
              backgroundColor: VOX_TOKENS.colors.highlightYellow,
              padding: 16,
              border: `3px solid ${VOX_TOKENS.colors.retroRed}`,
              transform: `scale(${rowHighlight})`,
            }}
          >
            <div>x = 2.718 (隐形)</div>
            <div style={{ color: VOX_TOKENS.colors.retroRed, fontWeight: 900, marginTop: 4 }}>ln(e) = 1.0000</div>
          </div>
          <div style={{ backgroundColor: VOX_TOKENS.colors.paperLight, padding: 16, border: "1px solid #CCC" }}>
            <div>x = 10.000</div>
            <div style={{ color: VOX_TOKENS.colors.retroRed, fontWeight: 900, marginTop: 4 }}>ln(x) = 2.3025</div>
          </div>
        </div>

        <div style={{ marginTop: 30, zIndex: 10 }}>
          <HighlighterText
            entryFrame={25}
            fontSize={32}
            highlightColor={VOX_TOKENS.colors.highlightYellow}
            textColor={VOX_TOKENS.colors.inkNavy}
          >
            表里每一个数值，其实都悄悄以 e 为底！
          </HighlighterText>
        </div>
      </div>
    </AbsoluteFill>
  );
};
