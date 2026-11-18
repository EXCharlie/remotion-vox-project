import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { VOX_TOKENS, HighlighterText } from "../../../design-system";

export const Shot1_07: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // 年份从 2026 倒退到 1683（前 80 帧完成极速倒带，后 58 帧定格并敲定标签）
  const rewindProgress = interpolate(frame, [10, 80], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // 模拟年份极速倒流数值（2026 ➔ 1683）
  const currentYear = Math.round(interpolate(rewindProgress, [0, 1], [2026, 1683]));

  // 1683 年定格时的震颤冲击
  const lockSnap = spring({
    frame: frame - 80,
    fps,
    config: VOX_TOKENS.spring.punchy,
  });

  // 印章盖下
  const stampSnap = spring({
    frame: frame - 95,
    fps,
    config: VOX_TOKENS.spring.punchy,
  });

  // 时间轴刻度向左极速倒带流动的位移
  const timelineTapeOffset = (frame * 36) % 240;

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
      {/* 顶部横贯的时间轴刻度带（倒带中飞速向左位移） */}
      <div
        style={{
          position: "absolute",
          top: 90,
          left: 0,
          right: 0,
          height: 36,
          backgroundColor: VOX_TOKENS.colors.inkNavy,
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            transform: `translateX(-${timelineTapeOffset}px)`,
            whiteSpace: "nowrap",
            fontFamily: VOX_TOKENS.fonts.typewriterMono,
            fontSize: 16,
            color: VOX_TOKENS.colors.highlightYellow,
            letterSpacing: 4,
          }}
        >
          {Array.from({ length: 30 }).map((_, idx) => (
            <span key={idx} style={{ marginRight: 60 }}>
              ◄◄ TIME REWIND · 340 YEARS AGO · BASEL 1683 ◄◄
            </span>
          ))}
        </div>
      </div>

      {/* 居中巨大年份机械显示器 */}
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#FFF",
          border: `6px solid ${frame >= 80 ? VOX_TOKENS.colors.retroRed : VOX_TOKENS.colors.inkNavy}`,
          boxShadow: "0 24px 60px rgba(0,0,0,0.22)",
          padding: "50px 90px",
          marginTop: 40,
          transform: frame >= 80 ? `scale(${interpolate(lockSnap, [0, 1], [1.06, 1])})` : "none",
        }}
      >
        <div
          style={{
            fontFamily: VOX_TOKENS.fonts.typewriterMono,
            fontSize: 20,
            fontWeight: 800,
            color: VOX_TOKENS.colors.textMuted,
            letterSpacing: 3,
            marginBottom: 8,
          }}
        >
          CHRONOLOGY // 时间倒带
        </div>

        {/* 年份大字 */}
        <div
          style={{
            fontFamily: VOX_TOKENS.fonts.heavyTitle,
            fontSize: 160,
            lineHeight: 1,
            fontWeight: 900,
            color: frame >= 80 ? VOX_TOKENS.colors.retroRed : VOX_TOKENS.colors.inkNavy,
            letterSpacing: 8,
          }}
        >
          {currentYear}
        </div>

        {/* 倒带停定后的印章与标签 */}
        {frame >= 80 && (
          <div
            style={{
              position: "absolute",
              right: -36,
              bottom: -28,
              backgroundColor: VOX_TOKENS.colors.retroRed,
              color: "#FFF",
              border: "3px solid #FFF",
              padding: "10px 24px",
              fontFamily: VOX_TOKENS.fonts.heavyTitle,
              fontSize: 28,
              letterSpacing: 2,
              transform: `scale(${stampSnap}) rotate(8deg)`,
              boxShadow: "0 10px 24px rgba(217,56,41,0.35)",
            }}
          >
            瑞士·巴塞尔 ➔ 伯努利
          </div>
        )}
      </div>

      {/* 底部台词呼应与幕 2 引导 */}
      <div
        style={{
          marginTop: 60,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <span
          style={{
            fontFamily: VOX_TOKENS.fonts.editorialSerif,
            fontSize: 28,
            color: VOX_TOKENS.colors.textMuted,
            letterSpacing: 2,
          }}
        >
          我们把时间往回拨 340 年，回到微积分诞生的破晓前夜。
        </span>
        <div style={{ marginTop: 16 }}>
          <HighlighterText
            entryFrame={90}
            fontSize={42}
            highlightColor={VOX_TOKENS.colors.highlightYellow}
            textColor={VOX_TOKENS.colors.textBlack}
          >
            先做一道小学生也能算的利息题 ➔
          </HighlighterText>
        </div>
      </div>
    </AbsoluteFill>
  );
};
