import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { VOX_TOKENS, HighlighterText } from "../../../design-system";

export const Shot1_04: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // 镜头缓缓推进
  const zoom = interpolate(frame, [0, 150], [0.97, 1.03], {
    extrapolateRight: "clamp",
  });

  // 三个场景卡片依次弹入
  const card1 = spring({ frame: frame - 8, fps, config: VOX_TOKENS.spring.paperSnap });
  const card2 = spring({ frame: frame - 38, fps, config: VOX_TOKENS.spring.paperSnap });
  const card3 = spring({ frame: frame - 68, fps, config: VOX_TOKENS.spring.paperSnap });

  // 水印印章显现
  const watermark1 = interpolate(frame, [25, 45], [0, 0.18], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const watermark2 = interpolate(frame, [55, 75], [0, 0.18], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const watermark3 = interpolate(frame, [85, 105], [0, 0.18], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

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
      {/* 顶部档案分类 */}
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
        <span
          style={{
            fontFamily: VOX_TOKENS.fonts.heavyTitle,
            fontSize: 22,
            color: VOX_TOKENS.colors.inkNavy,
            letterSpacing: 2,
          }}
        >
          [EVIDENCE // 生活切片中的数学常数]
        </span>
        <span
          style={{
            fontFamily: VOX_TOKENS.fonts.typewriterMono,
            fontSize: 16,
            color: VOX_TOKENS.colors.retroRed,
            fontWeight: 700,
          }}
        >
          EXACT WATERMARK // 精确潜伏
        </span>
      </div>

      {/* 居中 3 组生活场景卡片 */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "stretch",
          gap: 36,
          width: "90%",
          maxWidth: 1600,
          marginTop: 40,
        }}
      >
        {/* 卡片 1：每一次转账 */}
        <div
          style={{
            flex: 1,
            position: "relative",
            backgroundColor: "#FFF",
            border: `4px solid ${VOX_TOKENS.colors.inkNavy}`,
            boxShadow: "0 16px 36px rgba(0,0,0,0.14)",
            padding: "36px 30px",
            overflow: "hidden",
            transform: `scale(${interpolate(card1, [0, 1], [0.85, 1])}) rotate(-1.5deg)`,
            opacity: card1,
          }}
        >
          {/* 背景巨型 e 水印 */}
          <div
            style={{
              position: "absolute",
              right: -20,
              bottom: -40,
              fontFamily: VOX_TOKENS.fonts.editorialSerif,
              fontSize: 220,
              fontWeight: 900,
              color: VOX_TOKENS.colors.retroRed,
              opacity: watermark1,
              pointerEvents: "none",
              userSelect: "none",
            }}
          >
            e
          </div>

          <div
            style={{
              display: "inline-block",
              padding: "4px 10px",
              backgroundColor: VOX_TOKENS.colors.inkNavy,
              color: "#FFF",
              fontFamily: VOX_TOKENS.fonts.typewriterMono,
              fontSize: 13,
              fontWeight: 800,
              letterSpacing: 1,
            }}
          >
            CASE 01 · 资产结算
          </div>

          <div
            style={{
              fontFamily: VOX_TOKENS.fonts.heavyTitle,
              fontSize: 42,
              color: VOX_TOKENS.colors.inkNavy,
              marginTop: 20,
            }}
          >
            每一次转账
          </div>

          {/* 模拟银行转账小票信息 */}
          <div
            style={{
              marginTop: 24,
              padding: "16px",
              backgroundColor: VOX_TOKENS.colors.paperLight,
              border: `1px dashed ${VOX_TOKENS.colors.inkNavy}`,
              fontFamily: VOX_TOKENS.fonts.typewriterMono,
              fontSize: 16,
              color: VOX_TOKENS.colors.textBlack,
              lineHeight: 1.8,
            }}
          >
            <div>TX_TYPE: COMPOUND_FLOW</div>
            <div>STATUS: ACCREDITED</div>
            <div style={{ color: VOX_TOKENS.colors.retroRed, fontWeight: 800 }}>
              CONTINUOUS LIMIT: lim (1+r/n)^n
            </div>
          </div>
        </div>

        {/* 卡片 2：每一次发烧 */}
        <div
          style={{
            flex: 1,
            position: "relative",
            backgroundColor: "#FFF",
            border: `4px solid ${VOX_TOKENS.colors.inkNavy}`,
            boxShadow: "0 16px 36px rgba(0,0,0,0.14)",
            padding: "36px 30px",
            overflow: "hidden",
            transform: `scale(${interpolate(card2, [0, 1], [0.85, 1])}) rotate(1.2deg)`,
            opacity: card2,
          }}
        >
          {/* 背景巨型 e 水印 */}
          <div
            style={{
              position: "absolute",
              right: -20,
              bottom: -40,
              fontFamily: VOX_TOKENS.fonts.editorialSerif,
              fontSize: 220,
              fontWeight: 900,
              color: VOX_TOKENS.colors.badgeGold,
              opacity: watermark2,
              pointerEvents: "none",
              userSelect: "none",
            }}
          >
            e
          </div>

          <div
            style={{
              display: "inline-block",
              padding: "4px 10px",
              backgroundColor: VOX_TOKENS.colors.retroRed,
              color: "#FFF",
              fontFamily: VOX_TOKENS.fonts.typewriterMono,
              fontSize: 13,
              fontWeight: 800,
              letterSpacing: 1,
            }}
          >
            CASE 02 · 生物指数
          </div>

          <div
            style={{
              fontFamily: VOX_TOKENS.fonts.heavyTitle,
              fontSize: 42,
              color: VOX_TOKENS.colors.inkNavy,
              marginTop: 20,
            }}
          >
            每一次发烧
          </div>

          {/* 模拟体温计/细菌记录 */}
          <div
            style={{
              marginTop: 24,
              padding: "16px",
              backgroundColor: VOX_TOKENS.colors.paperLight,
              border: `1px dashed ${VOX_TOKENS.colors.inkNavy}`,
              fontFamily: VOX_TOKENS.fonts.typewriterMono,
              fontSize: 16,
              color: VOX_TOKENS.colors.textBlack,
              lineHeight: 1.8,
            }}
          >
            <div>TEMP: 39.4°C [FEVER]</div>
            <div>GROWTH: BACTERIAL SPLIT</div>
            <div style={{ color: VOX_TOKENS.colors.retroRed, fontWeight: 800 }}>
              RATE: dN/dt = k · N(t)
            </div>
          </div>
        </div>

        {/* 卡片 3：每一杯放凉的咖啡 */}
        <div
          style={{
            flex: 1,
            position: "relative",
            backgroundColor: "#FFF",
            border: `4px solid ${VOX_TOKENS.colors.inkNavy}`,
            boxShadow: "0 16px 36px rgba(0,0,0,0.14)",
            padding: "36px 30px",
            overflow: "hidden",
            transform: `scale(${interpolate(card3, [0, 1], [0.85, 1])}) rotate(-0.8deg)`,
            opacity: card3,
          }}
        >
          {/* 背景巨型 e 水印 */}
          <div
            style={{
              position: "absolute",
              right: -20,
              bottom: -40,
              fontFamily: VOX_TOKENS.fonts.editorialSerif,
              fontSize: 220,
              fontWeight: 900,
              color: VOX_TOKENS.colors.vintageTeal,
              opacity: watermark3,
              pointerEvents: "none",
              userSelect: "none",
            }}
          >
            e
          </div>

          <div
            style={{
              display: "inline-block",
              padding: "4px 10px",
              backgroundColor: VOX_TOKENS.colors.vintageTeal,
              color: "#FFF",
              fontFamily: VOX_TOKENS.fonts.typewriterMono,
              fontSize: 13,
              fontWeight: 800,
              letterSpacing: 1,
            }}
          >
            CASE 03 · 热力对流
          </div>

          <div
            style={{
              fontFamily: VOX_TOKENS.fonts.heavyTitle,
              fontSize: 42,
              color: VOX_TOKENS.colors.inkNavy,
              marginTop: 20,
            }}
          >
            放凉的咖啡
          </div>

          {/* 模拟牛顿冷却定律记录 */}
          <div
            style={{
              marginTop: 24,
              padding: "16px",
              backgroundColor: VOX_TOKENS.colors.paperLight,
              border: `1px dashed ${VOX_TOKENS.colors.inkNavy}`,
              fontFamily: VOX_TOKENS.fonts.typewriterMono,
              fontSize: 16,
              color: VOX_TOKENS.colors.textBlack,
              lineHeight: 1.8,
            }}
          >
            <div>TEMP_START: 85°C ➔ 24°C</div>
            <div>EXPONENT: NEWTON COOLING</div>
            <div style={{ color: VOX_TOKENS.colors.vintageTeal, fontWeight: 800 }}>
              DECAY: T(t) ∝ e^(-kt)
            </div>
          </div>
        </div>
      </div>

      {/* 底部醒目总结 */}
      <div style={{ marginTop: 44 }}>
        <HighlighterText
          entryFrame={70}
          fontSize={32}
          highlightColor={VOX_TOKENS.colors.highlightYellow}
          textColor={VOX_TOKENS.colors.textBlack}
        >
          精确地潜伏在自然与人类社会的每一次动态变化之中
        </HighlighterText>
      </div>
    </AbsoluteFill>
  );
};
