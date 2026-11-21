import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { VOX_TOKENS, HighlighterText } from "../../../design-system";

export const Shot2_03: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const row3Grow = spring({
    frame: frame - 5,
    fps,
    config: VOX_TOKENS.spring.paperSnap,
  });

  const value3 = interpolate(frame, [10, 45], [2.25, 2.613], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const bar3Height = interpolate(frame, [10, 45], [405, 470], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
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
            fontFamily: VOX_TOKENS.fonts.typewriterMono,
            fontSize: 16,
            color: VOX_TOKENS.colors.retroRed,
            letterSpacing: 2,
            fontWeight: 800,
          }}
        >
          STAGE 03 // MONTHLY COMPOUNDING
        </span>
        <div style={{ marginTop: 10 }}>
          <HighlighterText
            entryFrame={5}
            fontSize={44}
            highlightColor={VOX_TOKENS.colors.highlightYellow}
            textColor={VOX_TOKENS.colors.inkNavy}
          >
            每月结一次 (n = 12) ➔ 2.613 元
          </HighlighterText>
        </div>
      </div>

      {/* 主展示区 */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          gap: 60,
          marginTop: 60,
          width: "85%",
          maxWidth: 1400,
        }}
      >
        {/* 左侧表格 */}
        <div
          style={{
            flex: 1.2,
            backgroundColor: "#FFF",
            border: `4px solid ${VOX_TOKENS.colors.inkNavy}`,
            boxShadow: "0 18px 40px rgba(0,0,0,0.18)",
            padding: "36px 40px",
          }}
        >
          <div
            style={{
              fontFamily: VOX_TOKENS.fonts.heavyTitle,
              fontSize: 32,
              color: VOX_TOKENS.colors.inkNavy,
              borderBottom: `2px solid ${VOX_TOKENS.colors.inkNavy}`,
              paddingBottom: 12,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span>利息演算账本</span>
            <span style={{ fontFamily: VOX_TOKENS.fonts.typewriterMono, fontSize: 18, color: VOX_TOKENS.colors.retroRed }}>
              n = 12 [每月一次]
            </span>
          </div>

          <div style={{ marginTop: 16, display: "flex", flexDirection: "column", gap: 10 }}>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 16px", backgroundColor: "#F0EFEB", fontFamily: VOX_TOKENS.fonts.typewriterMono, fontSize: 18, color: "#666" }}>
              <span>年结 (n = 1)</span>
              <span>2.000 元</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 16px", backgroundColor: "#F0EFEB", fontFamily: VOX_TOKENS.fonts.typewriterMono, fontSize: 18, color: "#666" }}>
              <span>半年结 (n = 2)</span>
              <span>2.250 元</span>
            </div>
            {/* 第 3 行生长 */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "14px 20px",
                backgroundColor: VOX_TOKENS.colors.highlightYellow,
                border: `3px solid ${VOX_TOKENS.colors.retroRed}`,
                fontFamily: VOX_TOKENS.fonts.typewriterMono,
                fontSize: 22,
                fontWeight: 900,
                color: VOX_TOKENS.colors.inkNavy,
                transform: `scale(${interpolate(row3Grow, [0, 1], [0.95, 1])})`,
                opacity: row3Grow,
              }}
            >
              <span>每月结 (1 + 1/12)¹²</span>
              <span>{value3.toFixed(3)} 元</span>
            </div>
          </div>
        </div>

        {/* 右侧：3 根柱对比 */}
        <div
          style={{
            flex: 0.8,
            backgroundColor: "#FFF",
            border: `4px solid ${VOX_TOKENS.colors.inkNavy}`,
            boxShadow: "0 18px 40px rgba(0,0,0,0.18)",
            padding: "30px",
            height: 500,
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
            gap: 28,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ width: 70, height: 360, backgroundColor: "#AAA", border: `2px solid #555` }} />
            <div style={{ marginTop: 8, fontFamily: VOX_TOKENS.fonts.typewriterMono, fontSize: 14 }}>n=1</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ width: 70, height: 405, backgroundColor: "#888", border: `2px solid #555` }} />
            <div style={{ marginTop: 8, fontFamily: VOX_TOKENS.fonts.typewriterMono, fontSize: 14 }}>n=2</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ backgroundColor: VOX_TOKENS.colors.retroRed, color: "#FFF", fontFamily: VOX_TOKENS.fonts.typewriterMono, fontSize: 18, fontWeight: 900, padding: "2px 8px", marginBottom: 6 }}>
              {value3.toFixed(3)}
            </div>
            <div style={{ width: 70, height: bar3Height, backgroundColor: VOX_TOKENS.colors.retroRed, border: `2px solid ${VOX_TOKENS.colors.inkNavy}` }} />
            <div style={{ marginTop: 8, fontFamily: VOX_TOKENS.fonts.typewriterMono, fontSize: 14, fontWeight: 800 }}>n=12</div>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
