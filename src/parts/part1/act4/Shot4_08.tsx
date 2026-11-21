import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { VOX_TOKENS, HighlighterText } from "../../../design-system";

export const Shot4_08: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // 字母 b 的圈出动画
  const circleSnap = spring({
    frame: frame - 15,
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
      {/* 居中书信特写卡片 */}
      <div
        style={{
          width: 1100,
          backgroundColor: "#FFF",
          border: `6px solid ${VOX_TOKENS.colors.inkNavy}`,
          boxShadow: "0 24px 60px rgba(0,0,0,0.22)",
          padding: "50px 70px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <span
          style={{
            backgroundColor: VOX_TOKENS.colors.retroRed,
            color: "#FFF",
            fontFamily: VOX_TOKENS.fonts.typewriterMono,
            fontSize: 16,
            fontWeight: 800,
            padding: "4px 16px",
            letterSpacing: 2,
            marginBottom: 16,
          }}
        >
          HISTORICAL SYMBOL // 符号抉择
        </span>

        <div
          style={{
            fontFamily: VOX_TOKENS.fonts.heavyTitle,
            fontSize: 48,
            color: VOX_TOKENS.colors.inkNavy,
          }}
        >
          他给这个数安了个符号，不过——
        </div>

        {/* 巨大的字母 b 被红圈圈出 */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 60,
            marginTop: 30,
          }}
        >
          <div
            style={{
              position: "relative",
              width: 180,
              height: 180,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* 红色手绘风格圆圈 */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: "50%",
                border: `6px solid ${VOX_TOKENS.colors.retroRed}`,
                transform: `scale(${circleSnap}) rotate(-8deg)`,
                opacity: circleSnap,
              }}
            />
            <span
              style={{
                fontFamily: VOX_TOKENS.fonts.editorialSerif,
                fontSize: 120,
                fontWeight: 900,
                color: VOX_TOKENS.colors.retroRed,
                lineHeight: 1,
              }}
            >
              b
            </span>
          </div>

          <div
            style={{
              fontFamily: VOX_TOKENS.fonts.typewriterMono,
              fontSize: 60,
              color: "#BBB",
              fontWeight: 800,
            }}
          >
            ≠ e ?
          </div>
        </div>

        <div style={{ marginTop: 30 }}>
          <HighlighterText
            entryFrame={25}
            fontSize={38}
            highlightColor={VOX_TOKENS.colors.highlightYellow}
            textColor={VOX_TOKENS.colors.inkNavy}
          >
            看 见 了 吗 ？
          </HighlighterText>
        </div>
      </div>
    </AbsoluteFill>
  );
};
