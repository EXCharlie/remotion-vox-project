import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { VOX_TOKENS, HighlighterText } from "../../../design-system";

export const Shot2_04: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // 周结 (n=52) 和 日结 (n=365) 依次生长
  const row4Grow = spring({ frame: frame - 10, fps, config: VOX_TOKENS.spring.paperSnap });
  const row5Grow = spring({ frame: frame - 70, fps, config: VOX_TOKENS.spring.paperSnap });

  const val52 = interpolate(frame, [15, 60], [2.613, 2.693], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const val365 = interpolate(frame, [75, 120], [2.693, 2.715], {
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
          top: 50,
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
          STAGE 04 // WEEKLY & DAILY COMPOUNDING
        </span>
        <div style={{ marginTop: 10 }}>
          <HighlighterText
            entryFrame={10}
            fontSize={42}
            highlightColor={VOX_TOKENS.colors.highlightYellow}
            textColor={VOX_TOKENS.colors.inkNavy}
          >
            周结 2.693 ➔ 日结 2.715 · 结算越勤，钱越多
          </HighlighterText>
        </div>
      </div>

      {/* 主展示区 */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          gap: 50,
          marginTop: 60,
          width: "90%",
          maxWidth: 1500,
        }}
      >
        {/* 左侧五行表格 */}
        <div
          style={{
            flex: 1.1,
            backgroundColor: "#FFF",
            border: `4px solid ${VOX_TOKENS.colors.inkNavy}`,
            boxShadow: "0 18px 40px rgba(0,0,0,0.18)",
            padding: "28px 36px",
          }}
        >
          <div
            style={{
              fontFamily: VOX_TOKENS.fonts.heavyTitle,
              fontSize: 28,
              color: VOX_TOKENS.colors.inkNavy,
              borderBottom: `2px solid ${VOX_TOKENS.colors.inkNavy}`,
              paddingBottom: 10,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span>复利进阶表 (n 逐渐增大)</span>
            <span style={{ fontFamily: VOX_TOKENS.fonts.typewriterMono, fontSize: 16, color: VOX_TOKENS.colors.retroRed }}>
              n: 1 ➔ 365
            </span>
          </div>

          <div style={{ marginTop: 14, display: "flex", flexDirection: "column", gap: 8 }}>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 14px", backgroundColor: "#F7F6F2", fontFamily: VOX_TOKENS.fonts.typewriterMono, fontSize: 16, color: "#777" }}>
              <span>一年 1 次 (年结)</span>
              <span>2.000 元</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 14px", backgroundColor: "#F7F6F2", fontFamily: VOX_TOKENS.fonts.typewriterMono, fontSize: 16, color: "#777" }}>
              <span>一年 2 次 (半年结)</span>
              <span>2.250 元</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 14px", backgroundColor: "#F7F6F2", fontFamily: VOX_TOKENS.fonts.typewriterMono, fontSize: 16, color: "#777" }}>
              <span>一年 12 次 (月结)</span>
              <span>2.613 元</span>
            </div>
            {/* 第 4 行周结 */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "10px 14px",
                backgroundColor: frame < 70 ? VOX_TOKENS.colors.highlightYellow : "#F7F6F2",
                border: frame < 70 ? `2px solid ${VOX_TOKENS.colors.retroRed}` : "1px solid #CCC",
                fontFamily: VOX_TOKENS.fonts.typewriterMono,
                fontSize: 18,
                fontWeight: 800,
                color: VOX_TOKENS.colors.inkNavy,
                opacity: row4Grow,
              }}
            >
              <span>一年 52 次 (周结)</span>
              <span>{val52.toFixed(3)} 元</span>
            </div>
            {/* 第 5 行日结 */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "10px 14px",
                backgroundColor: VOX_TOKENS.colors.highlightYellow,
                border: `3px solid ${VOX_TOKENS.colors.retroRed}`,
                fontFamily: VOX_TOKENS.fonts.typewriterMono,
                fontSize: 20,
                fontWeight: 900,
                color: VOX_TOKENS.colors.inkNavy,
                transform: `scale(${interpolate(row5Grow, [0, 1], [0.95, 1])})`,
                opacity: row5Grow,
              }}
            >
              <span>一年 365 次 (天结)</span>
              <span style={{ color: VOX_TOKENS.colors.retroRed }}>{val365.toFixed(3)} 元</span>
            </div>
          </div>
        </div>

        {/* 右侧：5 根递增柱阶梯 */}
        <div
          style={{
            flex: 0.9,
            backgroundColor: "#FFF",
            border: `4px solid ${VOX_TOKENS.colors.inkNavy}`,
            boxShadow: "0 18px 40px rgba(0,0,0,0.18)",
            padding: "24px 20px",
            height: 480,
            display: "flex",
            justifyContent: "space-around",
            alignItems: "flex-end",
          }}
        >
          {/* n=1 */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ width: 44, height: 350, backgroundColor: "#CCC" }} />
            <div style={{ marginTop: 6, fontFamily: VOX_TOKENS.fonts.typewriterMono, fontSize: 13 }}>n=1</div>
          </div>
          {/* n=2 */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ width: 44, height: 395, backgroundColor: "#AAA" }} />
            <div style={{ marginTop: 6, fontFamily: VOX_TOKENS.fonts.typewriterMono, fontSize: 13 }}>n=2</div>
          </div>
          {/* n=12 */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ width: 44, height: 457, backgroundColor: "#888" }} />
            <div style={{ marginTop: 6, fontFamily: VOX_TOKENS.fonts.typewriterMono, fontSize: 13 }}>n=12</div>
          </div>
          {/* n=52 */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", opacity: row4Grow }}>
            <div style={{ width: 44, height: 471, backgroundColor: VOX_TOKENS.colors.vintageTeal }} />
            <div style={{ marginTop: 6, fontFamily: VOX_TOKENS.fonts.typewriterMono, fontSize: 13, fontWeight: 700 }}>n=52</div>
          </div>
          {/* n=365 */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", opacity: row5Grow }}>
            <div style={{ backgroundColor: VOX_TOKENS.colors.retroRed, color: "#FFF", fontFamily: VOX_TOKENS.fonts.typewriterMono, fontSize: 15, fontWeight: 900, padding: "2px 6px", marginBottom: 4 }}>
              2.715
            </div>
            <div style={{ width: 44, height: 475, backgroundColor: VOX_TOKENS.colors.retroRed }} />
            <div style={{ marginTop: 6, fontFamily: VOX_TOKENS.fonts.typewriterMono, fontSize: 13, fontWeight: 900 }}>n=365</div>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
