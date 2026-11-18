import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { VOX_TOKENS, HighlighterText } from "../../../design-system";

export const Shot3_07: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // 错误数值弹入
  const wrongNumberSnap = spring({
    frame,
    fps,
    config: VOX_TOKENS.spring.punchy,
  });

  // 鲜红斜线划杀动画
  const strikeProgress = spring({
    frame: frame - 20,
    fps,
    config: { damping: 10, mass: 0.5, stiffness: 220 },
  });

  // 辟谣印章盖下
  const stampSnap = spring({
    frame: frame - 35,
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
      {/* 居中辟谣卡片 */}
      <div
        style={{
          position: "relative",
          width: 1200,
          backgroundColor: "#FFF",
          border: `6px solid ${VOX_TOKENS.colors.retroRed}`,
          boxShadow: "0 24px 60px rgba(0,0,0,0.22)",
          padding: "60px 80px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          transform: `scale(${wrongNumberSnap})`,
        }}
      >
        <div
          style={{
            fontFamily: VOX_TOKENS.fonts.heavyTitle,
            fontSize: 48,
            color: VOX_TOKENS.colors.retroRed,
            letterSpacing: 2,
          }}
        >
          伯努利 当年并没有算出——
        </div>

        {/* 错误的 2.71828 及其划线 */}
        <div
          style={{
            position: "relative",
            marginTop: 30,
            padding: "20px 40px",
            backgroundColor: VOX_TOKENS.colors.paperLight,
            border: `3px solid #DDD`,
          }}
        >
          <span
            style={{
              fontFamily: VOX_TOKENS.fonts.typewriterMono,
              fontSize: 84,
              fontWeight: 900,
              color: "#888",
              letterSpacing: 4,
            }}
          >
            2.718281828……
          </span>

          {/* 鲜红斜粗划线 (Strike-through) */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: -20,
              right: -20,
              height: 12,
              backgroundColor: VOX_TOKENS.colors.retroRed,
              transform: `rotate(-8deg) scaleX(${strikeProgress})`,
              transformOrigin: "left center",
              boxShadow: "0 4px 10px rgba(217, 56, 41, 0.4)",
            }}
          />
        </div>

        {/* 红色辟谣印章 */}
        <div
          style={{
            position: "absolute",
            right: 60,
            bottom: -30,
            backgroundColor: VOX_TOKENS.colors.retroRed,
            color: "#FFF",
            border: "4px solid #FFF",
            padding: "10px 30px",
            fontFamily: VOX_TOKENS.fonts.heavyTitle,
            fontSize: 40,
            fontWeight: 900,
            transform: `scale(${stampSnap}) rotate(14deg)`,
            opacity: stampSnap,
            boxShadow: "0 10px 30px rgba(217, 56, 41, 0.4)",
          }}
        >
          史 实 辟 谣 ✖
        </div>
      </div>
    </AbsoluteFill>
  );
};
