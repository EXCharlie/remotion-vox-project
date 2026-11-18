import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { VOX_TOKENS, HighlighterText } from "../../../design-system";

export const Shot4_04: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const questionSnap = spring({
    frame: frame - 10,
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
      {/* 居中困惑卡片 */}
      <div
        style={{
          position: "relative",
          width: 1100,
          backgroundColor: "#FFF",
          border: `6px solid ${VOX_TOKENS.colors.inkNavy}`,
          boxShadow: "0 22px 55px rgba(0,0,0,0.2)",
          padding: "50px 70px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          transform: `scale(${questionSnap})`,
        }}
      >
        <span
          style={{
            backgroundColor: "#777",
            color: "#FFF",
            fontFamily: VOX_TOKENS.fonts.typewriterMono,
            fontSize: 16,
            fontWeight: 800,
            padding: "4px 16px",
            letterSpacing: 2,
            marginBottom: 16,
          }}
        >
          HISTORICAL LIMITATION // 历史局限
        </span>

        <div
          style={{
            fontFamily: VOX_TOKENS.fonts.heavyTitle,
            fontSize: 58,
            color: VOX_TOKENS.colors.inkNavy,
            textAlign: "center",
          }}
        >
          底 数 是 谁 ？
        </div>

        <div style={{ marginTop: 20 }}>
          <HighlighterText
            entryFrame={15}
            fontSize={36}
            highlightColor={VOX_TOKENS.colors.retroRed}
            textColor="#FFF"
          >
            当时的人类，甚至连「对数的底」是什么都不知道！
          </HighlighterText>
        </div>

        <div
          style={{
            marginTop: 24,
            fontFamily: VOX_TOKENS.fonts.body,
            fontSize: 22,
            color: VOX_TOKENS.colors.textMuted,
            textAlign: "center",
            lineHeight: 1.6,
          }}
        >
          纳皮尔依靠两质点速度运动学来定义对数，尚未将对数看作指数的逆运算。
        </div>
      </div>
    </AbsoluteFill>
  );
};
