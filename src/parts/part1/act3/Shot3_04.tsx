import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { VOX_TOKENS, HighlighterText } from "../../../design-system";

export const Shot3_04: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // 数轴展开与区间刷亮
  const lineSnap = spring({ frame, fps, config: VOX_TOKENS.spring.paperSnap });
  const highlightSweep = spring({ frame: frame - 15, fps, config: VOX_TOKENS.spring.punchy });

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
          top: 70,
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
          BOUNDED INTERVAL // 区间夹逼
        </span>
        <div style={{ marginTop: 12 }}>
          <HighlighterText
            entryFrame={8}
            fontSize={52}
            highlightColor={VOX_TOKENS.colors.highlightYellow}
            textColor={VOX_TOKENS.colors.inkNavy}
          >
            结果永远死死夹在 2 和 3 之间！
          </HighlighterText>
        </div>
      </div>

      {/* 居中巨大数轴卡片 */}
      <div
        style={{
          width: 1400,
          backgroundColor: "#FFF",
          border: `6px solid ${VOX_TOKENS.colors.inkNavy}`,
          boxShadow: "0 24px 60px rgba(0,0,0,0.22)",
          padding: "70px 80px",
          marginTop: 60,
          position: "relative",
          transform: `scale(${lineSnap})`,
          opacity: lineSnap,
        }}
      >
        {/* 数轴基准主线 */}
        <div
          style={{
            position: "relative",
            width: "100%",
            height: 8,
            backgroundColor: VOX_TOKENS.colors.inkNavy,
            marginTop: 40,
            marginBottom: 60,
          }}
        >
          {/* 刻度 0, 1, 2, 3, 4 */}
          {[0, 1, 2, 3, 4].map((tick) => {
            const leftPercent = `${tick * 25}%`;
            return (
              <div
                key={tick}
                style={{
                  position: "absolute",
                  left: leftPercent,
                  top: -16,
                  transform: "translateX(-50%)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div style={{ width: 4, height: 40, backgroundColor: VOX_TOKENS.colors.inkNavy }} />
                <span
                  style={{
                    fontFamily: VOX_TOKENS.fonts.typewriterMono,
                    fontSize: 32,
                    fontWeight: 900,
                    color: tick === 2 || tick === 3 ? VOX_TOKENS.colors.retroRed : VOX_TOKENS.colors.inkNavy,
                    marginTop: 10,
                  }}
                >
                  {tick}
                </span>
              </div>
            );
          })}

          {/* 2 到 3 之间的荧光黄高亮区间色块 */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              width: "25%",
              top: -30,
              height: 68,
              backgroundColor: VOX_TOKENS.colors.highlightYellow,
              border: `3px solid ${VOX_TOKENS.colors.retroRed}`,
              transform: `scaleX(${highlightSweep})`,
              transformOrigin: "left center",
              opacity: 0.9,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                fontFamily: VOX_TOKENS.fonts.typewriterMono,
                fontSize: 28,
                fontWeight: 900,
                color: VOX_TOKENS.colors.retroRed,
              }}
            >
              2 &lt; L &lt; 3
            </span>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
