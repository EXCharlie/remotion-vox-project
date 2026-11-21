import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { VOX_TOKENS, HighlighterText } from "../../../design-system";

export const Shot4_11: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // 时间轴生长
  const timelineProgress = spring({
    frame,
    fps,
    config: VOX_TOKENS.spring.paperSnap,
  });

  // 跨度 65 年标贴弹入
  const gapSnap = spring({
    frame: frame - 25,
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
      {/* 居中 65 年跨度时间轴 */}
      <div
        style={{
          width: 1300,
          backgroundColor: "#FFF",
          border: `6px solid ${VOX_TOKENS.colors.inkNavy}`,
          boxShadow: "0 24px 60px rgba(0,0,0,0.22)",
          padding: "50px 80px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            fontFamily: VOX_TOKENS.fonts.heavyTitle,
            fontSize: 54,
            color: VOX_TOKENS.colors.inkNavy,
          }}
        >
          从第一张对数表，到伯努利的利息题
        </div>

        {/* 65 年时间跨度横轴 */}
        <div
          style={{
            position: "relative",
            width: "100%",
            height: 12,
            backgroundColor: VOX_TOKENS.colors.paperDark,
            marginTop: 60,
            marginBottom: 60,
          }}
        >
          {/* 左端点：1618 纳皮尔 */}
          <div
            style={{
              position: "absolute",
              left: 0,
              top: -24,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <div style={{ width: 6, height: 60, backgroundColor: VOX_TOKENS.colors.inkNavy }} />
            <span style={{ fontFamily: VOX_TOKENS.fonts.typewriterMono, fontSize: 28, fontWeight: 900, marginTop: 8 }}>
              1618 年
            </span>
            <span style={{ fontFamily: VOX_TOKENS.fonts.body, fontSize: 16, color: VOX_TOKENS.colors.textMuted }}>
              纳皮尔对数表
            </span>
          </div>

          {/* 动态生长的时间线 */}
          <div
            style={{
              position: "absolute",
              left: 0,
              height: "100%",
              backgroundColor: VOX_TOKENS.colors.retroRed,
              width: `${interpolate(timelineProgress, [0, 1], [0, 100])}%`,
            }}
          />

          {/* 右端点：1683 伯努利 */}
          <div
            style={{
              position: "absolute",
              right: 0,
              top: -24,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
            }}
          >
            <div style={{ width: 6, height: 60, backgroundColor: VOX_TOKENS.colors.inkNavy }} />
            <span style={{ fontFamily: VOX_TOKENS.fonts.typewriterMono, fontSize: 28, fontWeight: 900, color: VOX_TOKENS.colors.retroRed, marginTop: 8 }}>
              1683 年
            </span>
            <span style={{ fontFamily: VOX_TOKENS.fonts.body, fontSize: 16, color: VOX_TOKENS.colors.textMuted }}>
              伯努利极限题
            </span>
          </div>

          {/* 居中巨大 65 年标签 */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: -46,
              transform: `translate(-50%, 0) scale(${gapSnap})`,
              backgroundColor: VOX_TOKENS.colors.highlightYellow,
              border: `4px solid ${VOX_TOKENS.colors.inkNavy}`,
              padding: "8px 28px",
              boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
            }}
          >
            <span
              style={{
                fontFamily: VOX_TOKENS.fonts.heavyTitle,
                fontSize: 40,
                color: VOX_TOKENS.colors.inkNavy,
                letterSpacing: 2,
              }}
            >
              整整相隔 65 年！
            </span>
          </div>
        </div>

        {/* 底部接力预告 */}
        <div style={{ marginTop: 20 }}>
          <HighlighterText
            entryFrame={30}
            fontSize={36}
            highlightColor={VOX_TOKENS.colors.highlightYellow}
            textColor={VOX_TOKENS.colors.inkNavy}
          >
            直到下一个世纪，人类历史上最多产的数学天才终于登场 ➔
          </HighlighterText>
        </div>
      </div>
    </AbsoluteFill>
  );
};
