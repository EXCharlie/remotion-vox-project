import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { VOX_TOKENS, HighlighterText } from "../../../design-system";

export const Shot3_09: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleSnap = spring({
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
      {/* 居中里程碑大字卡片 */}
      <div
        style={{
          position: "relative",
          backgroundColor: "#FFF",
          border: `6px solid ${VOX_TOKENS.colors.inkNavy}`,
          boxShadow: "0 24px 60px rgba(0,0,0,0.22)",
          padding: "60px 100px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: 1350,
          transform: `scale(${titleSnap})`,
        }}
      >
        <span
          style={{
            backgroundColor: VOX_TOKENS.colors.inkNavy,
            color: "#FFF",
            fontFamily: VOX_TOKENS.fonts.typewriterMono,
            fontSize: 18,
            fontWeight: 800,
            padding: "4px 18px",
            letterSpacing: 3,
            marginBottom: 20,
          }}
        >
          HISTORICAL MILESTONE // 数学史里程碑
        </span>

        <div
          style={{
            fontFamily: VOX_TOKENS.fonts.heavyTitle,
            fontSize: 76,
            color: VOX_TOKENS.colors.inkNavy,
            letterSpacing: 4,
            textAlign: "center",
            lineHeight: 1.2,
          }}
        >
          数学史上第一次
        </div>

        <div style={{ marginTop: 24 }}>
          <HighlighterText
            entryFrame={15}
            fontSize={52}
            highlightColor={VOX_TOKENS.colors.highlightYellow}
            textColor={VOX_TOKENS.colors.inkNavy}
          >
            用「一个极限过程」来定义一个数
          </HighlighterText>
        </div>

        <div
          style={{
            marginTop: 30,
            fontFamily: VOX_TOKENS.fonts.editorialSerif,
            fontSize: 24,
            color: VOX_TOKENS.colors.textMuted,
            textAlign: "center",
          }}
        >
          不再依赖几何圆盘或代数根式，而是直接诞生于动态变化与时间分割的极限。
        </div>
      </div>
    </AbsoluteFill>
  );
};
