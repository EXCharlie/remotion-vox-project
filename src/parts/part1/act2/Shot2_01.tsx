import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { VOX_TOKENS, HighlighterText } from "../../../design-system";

export const Shot2_01: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // 卡片入场
  const cardSnap = spring({
    frame,
    fps,
    config: VOX_TOKENS.spring.paperSnap,
  });

  // 金额滚动：从 1.00 滚动到 2.00
  const amountProgress = interpolate(frame, [25, 75], [1.0, 2.0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // 柱状图高度生长 (高度比例基准: 1.00 = 180px, 2.00 = 360px)
  const barHeight = interpolate(frame, [25, 75], [180, 360], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // 硬币弹跳
  const coinBounce = spring({
    frame: frame - 20,
    fps,
    config: { damping: 10, mass: 0.6, stiffness: 180 },
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
          STAGE 01 // ANNUAL COMPOUNDING
        </span>
        <div style={{ marginTop: 10 }}>
          <HighlighterText
            entryFrame={10}
            fontSize={44}
            highlightColor={VOX_TOKENS.colors.highlightYellow}
            textColor={VOX_TOKENS.colors.inkNavy}
          >
            存 1 元，年利率 100% · 一年结一次息
          </HighlighterText>
        </div>
      </div>

      {/* 主展示区：账本表格 + 柱状图 */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          gap: 60,
          marginTop: 60,
          width: "85%",
          maxWidth: 1400,
          transform: `scale(${cardSnap})`,
          opacity: cardSnap,
        }}
      >
        {/* 左侧：复利结算账本表格 */}
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
              n = 1 [一年一次]
            </span>
          </div>

          <div style={{ marginTop: 24, display: "flex", flexDirection: "column", gap: 16 }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "16px 20px",
                backgroundColor: VOX_TOKENS.colors.paperLight,
                border: `2px solid ${VOX_TOKENS.colors.inkNavy}`,
                fontFamily: VOX_TOKENS.fonts.typewriterMono,
                fontSize: 22,
                fontWeight: 700,
              }}
            >
              <span>初始本金 (Principal)</span>
              <span>1.000 元</span>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "16px 20px",
                backgroundColor: VOX_TOKENS.colors.highlightYellow,
                border: `2px solid ${VOX_TOKENS.colors.inkNavy}`,
                fontFamily: VOX_TOKENS.fonts.typewriterMono,
                fontSize: 22,
                fontWeight: 900,
                color: VOX_TOKENS.colors.inkNavy,
              }}
            >
              <span>一年后本息和 (1 + 100%)¹</span>
              <span>{amountProgress.toFixed(3)} 元</span>
            </div>
          </div>
        </div>

        {/* 右侧：单根对比柱状图 */}
        <div
          style={{
            flex: 0.8,
            backgroundColor: "#FFF",
            border: `4px solid ${VOX_TOKENS.colors.inkNavy}`,
            boxShadow: "0 18px 40px rgba(0,0,0,0.18)",
            padding: "30px",
            height: 480,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "center",
            position: "relative",
          }}
        >
          {/* 柱顶数字与硬币 */}
          <div
            style={{
              position: "absolute",
              bottom: barHeight + 40,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              transform: `scale(${coinBounce})`,
            }}
          >
            <div
              style={{
                backgroundColor: VOX_TOKENS.colors.retroRed,
                color: "#FFF",
                fontFamily: VOX_TOKENS.fonts.typewriterMono,
                fontSize: 26,
                fontWeight: 900,
                padding: "4px 16px",
                borderRadius: 4,
                marginBottom: 10,
              }}
            >
              ¥ {amountProgress.toFixed(3)}
            </div>
          </div>

          {/* 柱体 */}
          <div
            style={{
              width: 140,
              height: barHeight,
              backgroundColor: VOX_TOKENS.colors.inkNavy,
              border: `3px solid ${VOX_TOKENS.colors.inkNavy}`,
              position: "relative",
              backgroundImage: `repeating-linear-gradient(45deg, rgba(255,255,255,0.08) 0, rgba(255,255,255,0.08) 10px, transparent 10px, transparent 20px)`,
            }}
          />

          <div
            style={{
              marginTop: 14,
              fontFamily: VOX_TOKENS.fonts.typewriterMono,
              fontSize: 18,
              fontWeight: 800,
              color: VOX_TOKENS.colors.inkNavy,
            }}
          >
            n = 1 (年结)
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
