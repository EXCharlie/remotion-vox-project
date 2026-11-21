import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { VOX_TOKENS, HighlighterText } from "../../../design-system";

export const Shot4_09: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // 三张卡向中心叠合
  const stackSnap = spring({
    frame,
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
      {/* 居中叠牌视觉 */}
      <div
        style={{
          position: "relative",
          width: 500,
          height: 320,
          marginTop: -40,
        }}
      >
        {/* 底层卡 1618 */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: VOX_TOKENS.colors.paperDark,
            border: `4px solid ${VOX_TOKENS.colors.inkNavy}`,
            transform: `rotate(${interpolate(stackSnap, [0, 1], [-14, -4])}deg)`,
            boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
          }}
        />
        {/* 中层卡 1668 */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: VOX_TOKENS.colors.paperWarm,
            border: `4px solid ${VOX_TOKENS.colors.inkNavy}`,
            transform: `rotate(${interpolate(stackSnap, [0, 1], [12, 3])}deg)`,
            boxShadow: "0 12px 30px rgba(0,0,0,0.18)",
          }}
        />
        {/* 顶层卡 1690 */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "#FFF",
            border: `5px solid ${VOX_TOKENS.colors.inkNavy}`,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            transform: `rotate(${interpolate(stackSnap, [0, 1], [-2, 0])}deg)`,
            boxShadow: "0 18px 45px rgba(0,0,0,0.22)",
          }}
        >
          <span
            style={{
              fontFamily: VOX_TOKENS.fonts.heavyTitle,
              fontSize: 36,
              color: VOX_TOKENS.colors.inkNavy,
            }}
          >
            三次显现 · 三度错过
          </span>
          <span
            style={{
              fontFamily: VOX_TOKENS.fonts.typewriterMono,
              fontSize: 16,
              color: VOX_TOKENS.colors.retroRed,
              marginTop: 6,
              fontWeight: 800,
            }}
          >
            1618 · 1668 · 1690
          </span>
        </div>
      </div>

      {/* 底部提炼 */}
      <div style={{ marginTop: 60, textAlign: "center" }}>
        <HighlighterText
          entryFrame={10}
          fontSize={48}
          highlightColor={VOX_TOKENS.colors.highlightYellow}
          textColor={VOX_TOKENS.colors.inkNavy}
        >
          一个常数要被真正认出来 · 光出现还远远不够
        </HighlighterText>
      </div>
    </AbsoluteFill>
  );
};
