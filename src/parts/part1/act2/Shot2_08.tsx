import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { VOX_TOKENS, HighlighterText } from "../../../design-system";

export const Shot2_08: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // 公式字符逐个跳出弹入
  const char1 = spring({ frame: frame - 5, fps, config: VOX_TOKENS.spring.punchy });
  const char2 = spring({ frame: frame - 15, fps, config: VOX_TOKENS.spring.punchy });
  const char3 = spring({ frame: frame - 25, fps, config: VOX_TOKENS.spring.punchy });
  const char4 = spring({ frame: frame - 40, fps, config: VOX_TOKENS.spring.punchy });
  const char5 = spring({ frame: frame - 55, fps, config: VOX_TOKENS.spring.punchy });
  const exponentN = spring({ frame: frame - 70, fps, config: VOX_TOKENS.spring.punchy });

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
            fontFamily: VOX_TOKENS.fonts.typewriterMono,
            fontSize: 18,
            color: VOX_TOKENS.colors.retroRed,
            letterSpacing: 3,
            fontWeight: 800,
          }}
        >
          ALGEBRAIC FORMULATION // 代数建模
        </span>
        <div style={{ marginTop: 12 }}>
          <HighlighterText
            entryFrame={10}
            fontSize={42}
            highlightColor={VOX_TOKENS.colors.highlightYellow}
            textColor={VOX_TOKENS.colors.inkNavy}
          >
            本息和公式：括号一加 n 分之一，括号的 n 次方
          </HighlighterText>
        </div>
      </div>

      {/* 居中巨大公式展台 */}
      <div
        style={{
          position: "relative",
          backgroundColor: "#FFF",
          border: `6px solid ${VOX_TOKENS.colors.inkNavy}`,
          boxShadow: "0 24px 60px rgba(0,0,0,0.22)",
          padding: "70px 110px",
          display: "flex",
          alignItems: "center",
          marginTop: 60,
        }}
      >
        {/* 公式主体 (1 + 1/n)^n */}
        <div
          style={{
            fontFamily: VOX_TOKENS.fonts.editorialSerif,
            fontSize: 130,
            fontWeight: 900,
            color: VOX_TOKENS.colors.inkNavy,
            display: "flex",
            alignItems: "center",
          }}
        >
          <span style={{ transform: `scale(${char1})`, opacity: char1 }}>(</span>
          <span style={{ transform: `scale(${char2})`, opacity: char2, margin: "0 10px" }}>1</span>
          <span style={{ transform: `scale(${char3})`, opacity: char3, margin: "0 10px" }}>+</span>

          {/* 分数 1/n */}
          <div
            style={{
              display: "inline-flex",
              flexDirection: "column",
              alignItems: "center",
              margin: "0 14px",
              transform: `scale(${char4})`,
              opacity: char4,
            }}
          >
            <span style={{ fontSize: 75, lineHeight: 1 }}>1</span>
            <div style={{ width: 64, height: 6, backgroundColor: VOX_TOKENS.colors.inkNavy, margin: "6px 0" }} />
            <span style={{ fontSize: 75, lineHeight: 1, color: VOX_TOKENS.colors.badgeGold, fontWeight: 900 }}>n</span>
          </div>

          <span style={{ transform: `scale(${char5})`, opacity: char5 }}>)</span>

          {/* 上标指数 n (琥珀金高亮) */}
          <span
            style={{
              fontSize: 88,
              color: VOX_TOKENS.colors.badgeGold,
              fontWeight: 900,
              marginLeft: 10,
              marginTop: -60,
              transform: `scale(${exponentN})`,
              opacity: exponentN,
              backgroundColor: "rgba(224, 159, 62, 0.15)",
              padding: "4px 14px",
              border: `2px dashed ${VOX_TOKENS.colors.badgeGold}`,
              borderRadius: 6,
            }}
          >
            n
          </span>
        </div>
      </div>

      {/* 底部结构解析标签 */}
      <div
        style={{
          marginTop: 40,
          display: "flex",
          gap: 30,
          fontFamily: VOX_TOKENS.fonts.typewriterMono,
          fontSize: 18,
          color: VOX_TOKENS.colors.textMuted,
        }}
      >
        <span style={{ backgroundColor: VOX_TOKENS.colors.paperLight, padding: "6px 14px", border: "1px solid #CCC" }}>
          底数内 1/n ➔ 趋向于 0（每次所得利息极其微弱）
        </span>
        <span style={{ backgroundColor: VOX_TOKENS.colors.paperLight, padding: "6px 14px", border: "1px solid #CCC" }}>
          指数 n ➔ 趋向于 ∞（复利结算次数无穷多）
        </span>
      </div>
    </AbsoluteFill>
  );
};
