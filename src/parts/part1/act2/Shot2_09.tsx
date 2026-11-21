import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { VOX_TOKENS, HighlighterText } from "../../../design-system";

export const Shot2_09: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // n 变形为 ∞ 动效
  const infinityPop = spring({
    frame: frame - 15,
    fps,
    config: VOX_TOKENS.spring.punchy,
  });

  // 柱头向上撞击极限虚线并轻微回弹
  const barHit = spring({
    frame: frame - 30,
    fps,
    config: { damping: 12, mass: 0.8, stiffness: 180 },
  });

  // 1683 年份印章
  const yearStamp = spring({
    frame: frame - 65,
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
            fontSize: 18,
            color: VOX_TOKENS.colors.retroRed,
            letterSpacing: 3,
            fontWeight: 800,
          }}
        >
          THE LIMIT CEILING // 极限天花板
        </span>
        <div style={{ marginTop: 12 }}>
          <HighlighterText
            entryFrame={10}
            fontSize={44}
            highlightColor={VOX_TOKENS.colors.highlightYellow}
            textColor={VOX_TOKENS.colors.inkNavy}
          >
            当 n 奔向无穷大 ∞ · 这个式子会奔向哪里？
          </HighlighterText>
        </div>
      </div>

      {/* 主展示区：极限公式 + 撞顶柱状图 */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 60,
          marginTop: 60,
          width: "88%",
          maxWidth: 1450,
        }}
      >
        {/* 左侧极限表达 */}
        <div
          style={{
            flex: 1.1,
            backgroundColor: "#FFF",
            border: `5px solid ${VOX_TOKENS.colors.inkNavy}`,
            boxShadow: "0 20px 50px rgba(0,0,0,0.2)",
            padding: "50px 60px",
          }}
        >
          <div
            style={{
              fontFamily: VOX_TOKENS.fonts.editorialSerif,
              fontSize: 70,
              fontWeight: 900,
              color: VOX_TOKENS.colors.inkNavy,
              display: "flex",
              alignItems: "center",
              gap: 20,
            }}
          >
            <span>lim</span>
            <div style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", fontSize: 26, color: VOX_TOKENS.colors.retroRed }}>
              <span>n ➔ ∞</span>
            </div>
            <span>( 1 + 1/n )ⁿ</span>
            <span style={{ color: VOX_TOKENS.colors.retroRed, transform: `scale(${infinityPop})` }}>= ?</span>
          </div>

          <div
            style={{
              marginTop: 30,
              padding: "16px 20px",
              backgroundColor: VOX_TOKENS.colors.paperLight,
              borderLeft: `4px solid ${VOX_TOKENS.colors.retroRed}`,
              fontFamily: VOX_TOKENS.fonts.body,
              fontSize: 20,
              color: VOX_TOKENS.colors.textBlack,
              lineHeight: 1.6,
            }}
          >
            它不会无限膨胀到天文数字，它被一道无形的自然力学穹顶严密阻挡住了。
          </div>
        </div>

        {/* 右侧：撞顶回弹图 */}
        <div
          style={{
            flex: 0.9,
            backgroundColor: "#FFF",
            border: `5px solid ${VOX_TOKENS.colors.inkNavy}`,
            boxShadow: "0 20px 50px rgba(0,0,0,0.2)",
            padding: "30px",
            height: 480,
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          {/* 青绿极限虚线天花板 */}
          <div
            style={{
              position: "absolute",
              top: 110,
              left: 20,
              right: 20,
              borderTop: `4px dashed ${VOX_TOKENS.colors.vintageTeal}`,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingTop: 6,
            }}
          >
            <span
              style={{
                backgroundColor: VOX_TOKENS.colors.vintageTeal,
                color: "#FFF",
                fontFamily: VOX_TOKENS.fonts.typewriterMono,
                fontSize: 14,
                fontWeight: 900,
                padding: "2px 8px",
              }}
            >
              LIMIT CEILING // 极限天花板
            </span>
            <span style={{ fontFamily: VOX_TOKENS.fonts.typewriterMono, fontSize: 16, color: VOX_TOKENS.colors.vintageTeal, fontWeight: 800 }}>
              ≈ 2.71828...
            </span>
          </div>

          {/* 柱体撞击并轻微回弹 */}
          <div
            style={{
              width: 140,
              height: interpolate(barHit, [0, 1], [150, 360]),
              backgroundColor: VOX_TOKENS.colors.retroRed,
              border: `3px solid ${VOX_TOKENS.colors.inkNavy}`,
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: -38,
                left: 0,
                right: 0,
                textAlign: "center",
                fontFamily: VOX_TOKENS.fonts.typewriterMono,
                fontSize: 20,
                fontWeight: 900,
                color: VOX_TOKENS.colors.retroRed,
              }}
            >
              触顶收敛
            </div>
          </div>

          <div style={{ marginTop: 14, fontFamily: VOX_TOKENS.fonts.typewriterMono, fontSize: 18, fontWeight: 800 }}>
            n ➔ ∞ (连续复利)
          </div>
        </div>
      </div>

      {/* 右下角定格年份印章：1683（避开字幕安全区） */}
      <div
        style={{
          position: "absolute",
          bottom: 145,
          right: 80,
          backgroundColor: VOX_TOKENS.colors.inkNavy,
          color: "#FFF",
          border: `3px solid ${VOX_TOKENS.colors.highlightYellow}`,
          padding: "10px 24px",
          fontFamily: VOX_TOKENS.fonts.heavyTitle,
          fontSize: 32,
          letterSpacing: 2,
          transform: `scale(${yearStamp}) rotate(-3deg)`,
          opacity: yearStamp,
          boxShadow: "0 12px 28px rgba(0,0,0,0.25)",
        }}
      >
        1683 年 · 瑞士巴塞尔 ➔
      </div>
    </AbsoluteFill>
  );
};
