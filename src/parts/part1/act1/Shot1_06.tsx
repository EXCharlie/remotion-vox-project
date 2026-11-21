import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { VOX_TOKENS, HighlighterText } from "../../../design-system";

export const Shot1_06: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // 羊皮账本收拢聚合入场
  const ledgerSnap = spring({
    frame,
    fps,
    config: VOX_TOKENS.spring.paperSnap,
  });

  // 金币从上方掉落与弹跳
  const coinDrop = spring({
    frame: frame - 28,
    fps,
    config: { damping: 9, mass: 0.8, stiffness: 160 },
  });

  // 金币阴影扩散
  const coinShadow = interpolate(coinDrop, [0, 1], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
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
      {/* 顶部冲击标题 */}
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
          更奇怪、更荒诞的源头是——
        </span>
        <div style={{ marginTop: 12 }}>
          <HighlighterText
            entryFrame={15}
            fontSize={50}
            highlightColor={VOX_TOKENS.colors.highlightYellow}
            textColor={VOX_TOKENS.colors.inkNavy}
          >
            它最早，是被一笔银行利息算出来的
          </HighlighterText>
        </div>
      </div>

      {/* 居中羊皮账本（17世纪巴塞尔复古银行账册） */}
      <div
        style={{
          position: "relative",
          width: 880,
          backgroundColor: VOX_TOKENS.colors.paperWarm,
          border: `5px solid ${VOX_TOKENS.colors.inkNavy}`,
          boxShadow: "0 22px 50px rgba(0,0,0,0.22)",
          padding: "44px 50px",
          marginTop: 90,
          transform: `scale(${ledgerSnap}) rotate(-1deg)`,
          opacity: ledgerSnap,
        }}
      >
        {/* 账本红色复古印章 */}
        <div
          style={{
            position: "absolute",
            top: 24,
            right: 32,
            border: `2px dashed ${VOX_TOKENS.colors.retroRed}`,
            padding: "4px 12px",
            fontFamily: VOX_TOKENS.fonts.typewriterMono,
            fontSize: 14,
            fontWeight: 800,
            color: VOX_TOKENS.colors.retroRed,
            transform: "rotate(4deg)",
          }}
        >
          ANNUAL LEDGER // 1683
        </div>

        <div
          style={{
            fontFamily: VOX_TOKENS.fonts.editorialSerif,
            fontSize: 32,
            fontWeight: 900,
            color: VOX_TOKENS.colors.inkNavy,
            borderBottom: `2px solid ${VOX_TOKENS.colors.inkNavy}`,
            paddingBottom: 12,
          }}
        >
          BANKING RECKONING · 本金与利息演算册
        </div>

        {/* 账本表格两列 */}
        <div
          style={{
            marginTop: 20,
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 20,
            fontFamily: VOX_TOKENS.fonts.typewriterMono,
            fontSize: 18,
            color: VOX_TOKENS.colors.textBlack,
          }}
        >
          <div style={{ backgroundColor: "#FFF", padding: 14, border: "1px solid #CCC" }}>
            <div>PRINCIPAL: 1.00 GUILDER</div>
            <div style={{ color: VOX_TOKENS.colors.retroRed, marginTop: 4 }}>
              ANNUAL RATE: 100% / YEAR
            </div>
          </div>
          <div style={{ backgroundColor: "#FFF", padding: 14, border: "1px solid #CCC" }}>
            <div>SETTLEMENT: COMPOUND</div>
            <div style={{ color: VOX_TOKENS.colors.inkNavy, marginTop: 4 }}>
              FREQUENCY: INFINITE n ➔ ∞
            </div>
          </div>
        </div>

        {/* 金币掉落动画与阴影 */}
        <div
          style={{
            position: "absolute",
            top: "58%",
            left: "50%",
            transform: `translate(-50%, -50%)`,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* 金币阴影 */}
          <div
            style={{
              position: "absolute",
              bottom: -20,
              width: 140,
              height: 24,
              borderRadius: "50%",
              backgroundColor: "rgba(0, 0, 0, 0.35)",
              filter: "blur(6px)",
              transform: `scale(${coinShadow})`,
              opacity: coinShadow,
            }}
          />

          {/* 金币本体 */}
          <div
            style={{
              position: "relative",
              width: 130,
              height: 130,
              borderRadius: "50%",
              backgroundColor: "#E6B800",
              backgroundImage: "radial-gradient(circle at 35% 35%, #FFF099 0%, #D4A017 60%, #997300 100%)",
              border: `4px solid ${VOX_TOKENS.colors.inkNavy}`,
              boxShadow: "inset 0 0 10px rgba(0,0,0,0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transform: `
                translateY(${interpolate(coinDrop, [0, 1], [-450, 0])}px)
                rotate(${interpolate(coinDrop, [0, 1], [-180, 0])}deg)
              `,
              zIndex: 20,
            }}
          >
            <div
              style={{
                width: 106,
                height: 106,
                borderRadius: "50%",
                border: "2px dashed #806000",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  fontFamily: VOX_TOKENS.fonts.editorialSerif,
                  fontSize: 40,
                  fontWeight: 900,
                  color: VOX_TOKENS.colors.inkNavy,
                  lineHeight: 1,
                }}
              >
                1.00
              </span>
              <span
                style={{
                  fontFamily: VOX_TOKENS.fonts.typewriterMono,
                  fontSize: 10,
                  fontWeight: 800,
                  color: "#594300",
                  letterSpacing: 1,
                  marginTop: 4,
                }}
              >
                GOLD COIN
              </span>
            </div>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
