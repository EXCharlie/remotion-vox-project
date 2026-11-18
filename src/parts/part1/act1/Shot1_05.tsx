import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { VOX_TOKENS, HighlighterText } from "../../../design-system";

export const Shot1_05: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // 画面急剧向内收束拉近 (Punch-in 冲击力)
  const zoomIn = interpolate(frame, [0, 48], [0.92, 1.08], {
    extrapolateRight: "clamp",
  });

  // 主发问卡片重重拍入
  const cardSnap = spring({
    frame,
    fps,
    config: VOX_TOKENS.spring.punchy,
  });

  // 红色问号印章盖下的震颤
  const stampSnap = spring({
    frame: frame - 12,
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
        transform: `scale(${zoomIn})`,
      }}
    >
      {/* 报纸黑色边框定格 */}
      <div
        style={{
          position: "absolute",
          inset: 60,
          border: `4px solid ${VOX_TOKENS.colors.inkNavy}`,
          pointerEvents: "none",
        }}
      />

      {/* 居中巨大提问卡片 */}
      <div
        style={{
          position: "relative",
          backgroundColor: "#FFF",
          border: `6px solid ${VOX_TOKENS.colors.inkNavy}`,
          boxShadow: "0 24px 60px rgba(0,0,0,0.25)",
          padding: "60px 100px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          transform: `scale(${cardSnap}) rotate(-0.8deg)`,
          opacity: cardSnap,
        }}
      >
        {/* 顶部标签 */}
        <div
          style={{
            position: "absolute",
            top: -20,
            backgroundColor: VOX_TOKENS.colors.retroRed,
            color: "#FFF",
            fontFamily: VOX_TOKENS.fonts.typewriterMono,
            fontSize: 16,
            fontWeight: 900,
            padding: "4px 20px",
            letterSpacing: 3,
          }}
        >
          CORE QUESTION // 核心终极追问
        </div>

        {/* 提问大字 */}
        <div
          style={{
            fontFamily: VOX_TOKENS.fonts.heavyTitle,
            fontSize: 88,
            color: VOX_TOKENS.colors.inkNavy,
            letterSpacing: 4,
            textAlign: "center",
            lineHeight: 1.2,
          }}
        >
          它凭什么无处不在？
        </div>

        {/* 划重点副标 */}
        <div style={{ marginTop: 24 }}>
          <HighlighterText
            entryFrame={14}
            fontSize={36}
            highlightColor={VOX_TOKENS.colors.highlightYellow}
            textColor={VOX_TOKENS.colors.textBlack}
          >
            WHY IS IT EVERYWHERE IN NATURE?
          </HighlighterText>
        </div>

        {/* 红色特大问号斜盖印章 */}
        <div
          style={{
            position: "absolute",
            right: 40,
            bottom: -30,
            border: `5px solid ${VOX_TOKENS.colors.retroRed}`,
            padding: "8px 24px",
            fontFamily: VOX_TOKENS.fonts.heavyTitle,
            fontSize: 64,
            fontWeight: 900,
            color: VOX_TOKENS.colors.retroRed,
            transform: `scale(${stampSnap}) rotate(14deg)`,
            opacity: stampSnap,
            backgroundColor: "rgba(255, 255, 255, 0.95)",
            boxShadow: "0 8px 20px rgba(217, 56, 41, 0.25)",
          }}
        >
          谜 题 ➔
        </div>
      </div>
    </AbsoluteFill>
  );
};
