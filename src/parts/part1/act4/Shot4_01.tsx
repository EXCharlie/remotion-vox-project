import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { VOX_TOKENS, HighlighterText } from "../../../design-system";

export const Shot4_01: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // 三张卡片依次从桌面拍入（背面朝上）
  const card1 = spring({ frame: frame - 10, fps, config: VOX_TOKENS.spring.paperSnap });
  const card2 = spring({ frame: frame - 30, fps, config: VOX_TOKENS.spring.paperSnap });
  const card3 = spring({ frame: frame - 50, fps, config: VOX_TOKENS.spring.paperSnap });

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
          ACT 04 // THREE NEAR MISSES
        </span>
        <div style={{ marginTop: 12 }}>
          <HighlighterText
            entryFrame={15}
            fontSize={44}
            highlightColor={VOX_TOKENS.colors.highlightYellow}
            textColor={VOX_TOKENS.colors.inkNavy}
          >
            三次擦肩而过 · 它早就露过脸，却未被认出
          </HighlighterText>
        </div>
      </div>

      {/* 三张泛黄档案卡背面横向排开 */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 50,
          marginTop: 70,
          width: "85%",
          maxWidth: 1400,
        }}
      >
        {[
          { num: "01", delay: card1, rot: -2 },
          { num: "02", delay: card2, rot: 1.5 },
          { num: "03", delay: card3, rot: -1 },
        ].map((item, idx) => (
          <div
            key={idx}
            style={{
              flex: 1,
              height: 440,
              backgroundColor: VOX_TOKENS.colors.paperDark,
              border: `5px solid ${VOX_TOKENS.colors.inkNavy}`,
              boxShadow: "0 18px 45px rgba(0,0,0,0.18)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              transform: `scale(${interpolate(item.delay, [0, 1], [0.85, 1])}) rotate(${item.rot}deg)`,
              opacity: item.delay,
            }}
          >
            {/* 卡牌背面火漆印记 */}
            <div
              style={{
                width: 90,
                height: 90,
                borderRadius: "50%",
                backgroundColor: VOX_TOKENS.colors.inkNavy,
                border: "3px solid #FFF",
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
                  color: VOX_TOKENS.colors.highlightYellow,
                }}
              >
                #{item.num}
              </span>
            </div>

            <span
              style={{
                marginTop: 24,
                fontFamily: VOX_TOKENS.fonts.typewriterMono,
                fontSize: 16,
                letterSpacing: 2,
                color: VOX_TOKENS.colors.textBlack,
                fontWeight: 800,
              }}
            >
              SEALED ARCHIVE // 绝密档案
            </span>
          </div>
        ))}
      </div>
    </AbsoluteFill>
  );
};
