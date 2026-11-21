import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { VOX_TOKENS, HighlighterText } from "../../../design-system";

export const Shot3_01: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // 镜头推进感
  const zoom = interpolate(frame, [0, 119], [0.96, 1.03], {
    extrapolateRight: "clamp",
  });

  // 主档案卡片弹入
  const cardSnap = spring({
    frame,
    fps,
    config: VOX_TOKENS.spring.paperSnap,
  });

  // 烛光光晕微弱呼吸闪烁 (40~60Hz 随机正弦模拟烛光)
  const candleFlicker = 0.85 + Math.sin(frame * 0.4) * 0.12 + Math.cos(frame * 0.7) * 0.05;

  return (
    <AbsoluteFill
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        transform: `scale(${zoom})`,
      }}
    >
      {/* 顶部档案栏 */}
      <div
        style={{
          position: "absolute",
          top: 60,
          left: 100,
          right: 100,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: `2px solid ${VOX_TOKENS.colors.inkNavy}`,
          paddingBottom: 12,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span
            style={{
              backgroundColor: VOX_TOKENS.colors.inkNavy,
              color: "#FFF",
              fontFamily: VOX_TOKENS.fonts.typewriterMono,
              fontSize: 16,
              fontWeight: 800,
              padding: "4px 12px",
            }}
          >
            ACT 03 · 1683
          </span>
          <span
            style={{
              fontFamily: VOX_TOKENS.fonts.heavyTitle,
              fontSize: 22,
              color: VOX_TOKENS.colors.inkNavy,
            }}
          >
            BASEL, SWITZERLAND // 瑞士巴塞尔
          </span>
        </div>
        <span
          style={{
            fontFamily: VOX_TOKENS.fonts.typewriterMono,
            fontSize: 16,
            color: VOX_TOKENS.colors.textMuted,
          }}
        >
          HISTORICAL DOSSIER #03
        </span>
      </div>

      {/* 居中巴塞尔学者档案卡 */}
      <div
        style={{
          position: "relative",
          width: 1000,
          backgroundColor: VOX_TOKENS.colors.paperWarm,
          border: `5px solid ${VOX_TOKENS.colors.inkNavy}`,
          boxShadow: "0 22px 55px rgba(0,0,0,0.22)",
          padding: "50px 60px",
          transform: `scale(${cardSnap}) rotate(-1deg)`,
          opacity: cardSnap,
        }}
      >
        {/* 烛光暖黄色微晕 */}
        <div
          style={{
            position: "absolute",
            top: -40,
            right: 40,
            width: 220,
            height: 220,
            borderRadius: "50%",
            backgroundColor: "rgba(255, 215, 0, 0.28)",
            filter: "blur(40px)",
            opacity: candleFlicker,
            pointerEvents: "none",
          }}
        />

        {/* 档案火漆印章 */}
        <div
          style={{
            position: "absolute",
            top: 24,
            right: 36,
            width: 80,
            height: 80,
            borderRadius: "50%",
            backgroundColor: VOX_TOKENS.colors.retroRed,
            border: "3px solid #FFF",
            boxShadow: "0 6px 16px rgba(217, 56, 41, 0.35)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transform: "rotate(12deg)",
          }}
        >
          <span
            style={{
              fontFamily: VOX_TOKENS.fonts.typewriterMono,
              fontSize: 14,
              fontWeight: 900,
              color: "#FFF",
              textAlign: "center",
              lineHeight: 1.1,
            }}
          >
            BASEL<br />1683
          </span>
        </div>

        <div
          style={{
            fontFamily: VOX_TOKENS.fonts.typewriterMono,
            fontSize: 16,
            color: VOX_TOKENS.colors.retroRed,
            fontWeight: 800,
            letterSpacing: 2,
          }}
        >
          MATHEMATICIAN DOSSIER
        </div>

        <div
          style={{
            fontFamily: VOX_TOKENS.fonts.editorialSerif,
            fontSize: 54,
            fontWeight: 900,
            color: VOX_TOKENS.colors.inkNavy,
            marginTop: 10,
          }}
        >
          雅各布 · 伯努利
        </div>

        <div
          style={{
            fontFamily: VOX_TOKENS.fonts.typewriterMono,
            fontSize: 20,
            color: VOX_TOKENS.colors.textMuted,
            marginTop: 4,
          }}
        >
          Jacob Bernoulli (1655 – 1705) · 伯努利家族数学巨擘
        </div>

        {/* 档案说明与鹅毛笔书桌意象 */}
        <div
          style={{
            marginTop: 26,
            padding: "20px 24px",
            backgroundColor: "#FFF",
            border: `2px dashed ${VOX_TOKENS.colors.inkNavy}`,
            fontFamily: VOX_TOKENS.fonts.body,
            fontSize: 22,
            color: VOX_TOKENS.colors.textBlack,
            lineHeight: 1.7,
          }}
        >
          在巴塞尔大学微弱的烛光书桌前，他敏锐地捕捉到了这道看似世俗的银行账目背后，隐藏着微积分世界最深刻的极限秘密。
        </div>

        <div style={{ marginTop: 24 }}>
          <HighlighterText
            entryFrame={20}
            fontSize={32}
            highlightColor={VOX_TOKENS.colors.highlightYellow}
            textColor={VOX_TOKENS.colors.inkNavy}
          >
            盯上的，正是这道「无限次连续结息」难题
          </HighlighterText>
        </div>
      </div>
    </AbsoluteFill>
  );
};
