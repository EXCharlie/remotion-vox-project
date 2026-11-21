import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { VOX_TOKENS, HighlighterText } from "../../../design-system";

export const Shot2_06: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // 切割阶段：0=年, 1=月, 2=周, 3=日, 4=秒, 5=毫秒
  const stages = [
    { label: "1 年 (n = 1)", splits: 1, sub: "ANNUAL" },
    { label: "12 月 (n = 12)", splits: 12, sub: "MONTHLY" },
    { label: "52 周 (n = 52)", splits: 30, sub: "WEEKLY" },
    { label: "365 天 (n = 365)", splits: 60, sub: "DAILY" },
    { label: "31,536,000 秒", splits: 120, sub: "EVERY SECOND" },
    { label: "每时每刻 · 无穷细分", splits: 240, sub: "CONTINUOUS dt ➔ 0" },
  ];

  const currentStageIdx = Math.min(
    stages.length - 1,
    Math.floor(interpolate(frame, [5, 100], [0, stages.length - 1], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }))
  );

  const activeStage = stages[currentStageIdx];

  const stagePulse = spring({
    frame: (frame % 20),
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
            fontFamily: VOX_TOKENS.fonts.editorialSerif,
            fontSize: 26,
            color: VOX_TOKENS.colors.textMuted,
            letterSpacing: 2,
          }}
        >
          终极思想实验 · 把时间切碎
        </span>
        <div style={{ marginTop: 12 }}>
          <HighlighterText
            entryFrame={10}
            fontSize={44}
            highlightColor={VOX_TOKENS.colors.highlightYellow}
            textColor={VOX_TOKENS.colors.inkNavy}
          >
            如果每秒、每毫秒、每时每刻都在结息？
          </HighlighterText>
        </div>
      </div>

      {/* 居中时间轴切割卡片 */}
      <div
        style={{
          width: 1400,
          backgroundColor: "#FFF",
          border: `5px solid ${VOX_TOKENS.colors.inkNavy}`,
          boxShadow: "0 20px 50px rgba(0,0,0,0.2)",
          padding: "50px 60px",
          marginTop: 60,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* 当前切分精度标牌 */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            marginBottom: 36,
            transform: `scale(${interpolate(stagePulse, [0, 1], [0.97, 1])})`,
          }}
        >
          <span
            style={{
              backgroundColor: VOX_TOKENS.colors.retroRed,
              color: "#FFF",
              fontFamily: VOX_TOKENS.fonts.typewriterMono,
              fontSize: 20,
              fontWeight: 900,
              padding: "6px 16px",
            }}
          >
            {activeStage.sub}
          </span>
          <span
            style={{
              fontFamily: VOX_TOKENS.fonts.heavyTitle,
              fontSize: 44,
              color: VOX_TOKENS.colors.inkNavy,
              letterSpacing: 2,
            }}
          >
            {activeStage.label}
          </span>
        </div>

        {/* 动态切割线尺（被不断切细） */}
        <div
          style={{
            position: "relative",
            width: "100%",
            height: 80,
            backgroundColor: VOX_TOKENS.colors.paperLight,
            border: `3px solid ${VOX_TOKENS.colors.inkNavy}`,
            display: "flex",
            overflow: "hidden",
          }}
        >
          {Array.from({ length: activeStage.splits }).map((_, idx) => (
            <div
              key={idx}
              style={{
                flex: 1,
                borderRight: `2px solid ${idx % 2 === 0 ? VOX_TOKENS.colors.retroRed : VOX_TOKENS.colors.inkNavy}`,
                height: "100%",
                backgroundColor: idx % 2 === 0 ? "rgba(217, 56, 41, 0.08)" : "transparent",
              }}
            />
          ))}
        </div>

        {/* 刻度尺底座标注 */}
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            marginTop: 14,
            fontFamily: VOX_TOKENS.fonts.typewriterMono,
            fontSize: 16,
            color: VOX_TOKENS.colors.textMuted,
          }}
        >
          <span>t = 0 (年初)</span>
          <span style={{ color: VOX_TOKENS.colors.retroRed, fontWeight: 800 }}>
            切分间隔 Δt = 1/n ➔ 0
          </span>
          <span>t = 1 (年终)</span>
        </div>
      </div>
    </AbsoluteFill>
  );
};
