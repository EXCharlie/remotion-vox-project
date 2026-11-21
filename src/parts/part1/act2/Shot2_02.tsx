import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { VOX_TOKENS, HighlighterText } from "../../../design-system";

export const Shot2_02: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // 第二行数据与第二根柱子生长
  const row2Grow = spring({
    frame: frame - 15,
    fps,
    config: VOX_TOKENS.spring.paperSnap,
  });

  const value2 = interpolate(frame, [25, 75], [2.0, 2.25], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const bar2Height = interpolate(frame, [25, 75], [360, 405], {
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
          STAGE 02 // SEMI-ANNUAL COMPOUNDING
        </span>
        <div style={{ marginTop: 10 }}>
          <HighlighterText
            entryFrame={10}
            fontSize={44}
            highlightColor={VOX_TOKENS.colors.highlightYellow}
            textColor={VOX_TOKENS.colors.inkNavy}
          >
            若是半年结一次？利率减半，利滚利 ➔ 2.250 元
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
              n = 2 [半年一次]
            </span>
          </div>

          <div style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 14 }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "14px 20px",
                backgroundColor: VOX_TOKENS.colors.paperLight,
                border: `2px solid #CCC`,
                fontFamily: VOX_TOKENS.fonts.typewriterMono,
                fontSize: 20,
              }}
            >
              <span>年结 (n = 1)</span>
              <span>2.000 元</span>
            </div>

            {/* 第 2 行生长 */}
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
                transform: `scale(${interpolate(row2Grow, [0, 1], [0.95, 1])})`,
                opacity: row2Grow,
              }}
            >
              <span>半年结 (1 + 50%)²</span>
              <span>{value2.toFixed(3)} 元 (+0.25)</span>
            </div>
          </div>
        </div>

        {/* 右侧：两根对比柱状图 */}
        <div
          style={{
            flex: 0.8,
            backgroundColor: "#FFF",
            border: `4px solid ${VOX_TOKENS.colors.inkNavy}`,
            boxShadow: "0 18px 40px rgba(0,0,0,0.18)",
            padding: "30px",
            height: 480,
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
            gap: 40,
            position: "relative",
          }}
        >
          {/* 柱 1 */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div
              style={{
                backgroundColor: "#777",
                color: "#FFF",
                fontFamily: VOX_TOKENS.fonts.typewriterMono,
                fontSize: 16,
                fontWeight: 800,
                padding: "2px 8px",
                marginBottom: 8,
              }}
            >
              2.000
            </div>
            <div
              style={{
                width: 90,
                height: 360,
                backgroundColor: "#888",
                border: `2px solid ${VOX_TOKENS.colors.inkNavy}`,
              }}
            />
            <div style={{ marginTop: 10, fontFamily: VOX_TOKENS.fonts.typewriterMono, fontSize: 16 }}>
              n = 1
            </div>
          </div>

          {/* 柱 2 */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div
              style={{
                backgroundColor: VOX_TOKENS.colors.retroRed,
                color: "#FFF",
                fontFamily: VOX_TOKENS.fonts.typewriterMono,
                fontSize: 20,
                fontWeight: 900,
                padding: "4px 12px",
                marginBottom: 8,
              }}
            >
              ¥ {value2.toFixed(3)}
            </div>
            <div
              style={{
                width: 90,
                height: bar2Height,
                backgroundColor: VOX_TOKENS.colors.retroRed,
                border: `2px solid ${VOX_TOKENS.colors.inkNavy}`,
              }}
            />
            <div style={{ marginTop: 10, fontFamily: VOX_TOKENS.fonts.typewriterMono, fontSize: 16, fontWeight: 800 }}>
              n = 2
            </div>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
