import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { VOX_TOKENS, HighlighterText } from "../../../design-system";

export const Shot1_02: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // 四道复古色带交错扫过的位移动画
  const ribbon1 = spring({ frame: frame - 5, fps, config: VOX_TOKENS.spring.paperSnap });
  const ribbon2 = spring({ frame: frame - 12, fps, config: VOX_TOKENS.spring.paperSnap });
  const ribbon3 = spring({ frame: frame - 18, fps, config: VOX_TOKENS.spring.paperSnap });
  const ribbon4 = spring({ frame: frame - 25, fps, config: VOX_TOKENS.spring.paperSnap });

  // 3 张生活切片卡片的弹入
  const card1 = spring({ frame: frame - 25, fps, config: VOX_TOKENS.spring.paperSnap });
  const card2 = spring({ frame: frame - 38, fps, config: VOX_TOKENS.spring.paperSnap });
  const card3 = spring({ frame: frame - 50, fps, config: VOX_TOKENS.spring.paperSnap });

  return (
    <AbsoluteFill style={{ overflow: "hidden" }}>
      {/* 4 条交错扫过的斜色带 (Vox 标志性视觉) */}
      <div
        style={{
          position: "absolute",
          top: -120,
          left: -200,
          right: -200,
          bottom: -120,
          pointerEvents: "none",
          transform: "skewY(-6deg)",
        }}
      >
        {/* 色带 1: 印刷红 */}
        <div
          style={{
            position: "absolute",
            top: "14%",
            left: 0,
            right: 0,
            height: 18,
            backgroundColor: VOX_TOKENS.colors.retroRed,
            transform: `translateX(${interpolate(ribbon1, [0, 1], [-1920, 0])}px)`,
            opacity: 0.85,
          }}
        />
        {/* 色带 2: 荧光黄 */}
        <div
          style={{
            position: "absolute",
            top: "18%",
            left: 0,
            right: 0,
            height: 24,
            backgroundColor: VOX_TOKENS.colors.highlightYellow,
            transform: `translateX(${interpolate(ribbon2, [0, 1], [1920, 0])}px)`,
            opacity: 0.9,
          }}
        />
        {/* 色带 3: 深墨蓝 */}
        <div
          style={{
            position: "absolute",
            bottom: "20%",
            left: 0,
            right: 0,
            height: 16,
            backgroundColor: VOX_TOKENS.colors.inkNavy,
            transform: `translateX(${interpolate(ribbon3, [0, 1], [-1920, 0])}px)`,
            opacity: 0.7,
          }}
        />
        {/* 色带 4: 孔雀青细线 */}
        <div
          style={{
            position: "absolute",
            bottom: "16%",
            left: 0,
            right: 0,
            height: 8,
            backgroundColor: VOX_TOKENS.colors.vintageTeal,
            transform: `translateX(${interpolate(ribbon4, [0, 1], [1920, 0])}px)`,
            opacity: 0.75,
          }}
        />
      </div>

      {/* 顶部冲击力大标题 */}
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
        <div
          style={{
            fontFamily: VOX_TOKENS.fonts.heavyTitle,
            fontSize: 52,
            color: VOX_TOKENS.colors.inkNavy,
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          出场频次远胜于 π · 却隐于幕后
        </div>
        <div style={{ marginTop: 10 }}>
          <HighlighterText
            entryFrame={15}
            fontSize={36}
            highlightColor={VOX_TOKENS.colors.retroRed}
            textColor="#FFF"
          >
            从 不 站 在 台 前
          </HighlighterText>
        </div>
      </div>

      {/* 中间 3 张生活切片剪报 (报纸拼贴风格) */}
      <div
        style={{
          position: "absolute",
          top: 250,
          left: 120,
          right: 120,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 36,
          zIndex: 20,
        }}
      >
        {/* 切片 1：每一次转账 */}
        <div
          style={{
            flex: 1,
            backgroundColor: "#FFF",
            border: `3px solid ${VOX_TOKENS.colors.inkNavy}`,
            boxShadow: "0 14px 28px rgba(0,0,0,0.16)",
            padding: "28px 24px",
            transform: `
              scale(${interpolate(card1, [0, 1], [0.8, 1])})
              rotate(-2deg)
            `,
            opacity: card1,
          }}
        >
          <div
            style={{
              fontFamily: VOX_TOKENS.fonts.typewriterMono,
              fontSize: 14,
              color: VOX_TOKENS.colors.retroRed,
              fontWeight: 800,
              borderBottom: `1px dashed ${VOX_TOKENS.colors.inkNavy}`,
              paddingBottom: 8,
              letterSpacing: 1,
            }}
          >
            [CASE 01] BANKING // 复利累积
          </div>
          <div
            style={{
              fontFamily: VOX_TOKENS.fonts.heavyTitle,
              fontSize: 38,
              color: VOX_TOKENS.colors.inkNavy,
              marginTop: 16,
            }}
          >
            每一次转账
          </div>
          <div
            style={{
              fontFamily: VOX_TOKENS.fonts.body,
              fontSize: 18,
              color: VOX_TOKENS.colors.textMuted,
              marginTop: 8,
              lineHeight: 1.5,
            }}
          >
            银行复利、资产折旧与贴现流
          </div>
          <div
            style={{
              marginTop: 20,
              display: "inline-block",
              padding: "4px 10px",
              backgroundColor: VOX_TOKENS.colors.paperWarm,
              fontFamily: VOX_TOKENS.fonts.typewriterMono,
              fontSize: 20,
              fontWeight: 900,
              color: VOX_TOKENS.colors.inkNavy,
            }}
          >
            A = P · e^(rt)
          </div>
        </div>

        {/* 切片 2：每一次发烧 */}
        <div
          style={{
            flex: 1,
            backgroundColor: "#FFF",
            border: `3px solid ${VOX_TOKENS.colors.inkNavy}`,
            boxShadow: "0 14px 28px rgba(0,0,0,0.16)",
            padding: "28px 24px",
            transform: `
              scale(${interpolate(card2, [0, 1], [0.8, 1])})
              rotate(1.5deg)
            `,
            opacity: card2,
          }}
        >
          <div
            style={{
              fontFamily: VOX_TOKENS.fonts.typewriterMono,
              fontSize: 14,
              color: VOX_TOKENS.colors.badgeGold,
              fontWeight: 800,
              borderBottom: `1px dashed ${VOX_TOKENS.colors.inkNavy}`,
              paddingBottom: 8,
              letterSpacing: 1,
            }}
          >
            [CASE 02] BIOLOGY // 细菌与感染
          </div>
          <div
            style={{
              fontFamily: VOX_TOKENS.fonts.heavyTitle,
              fontSize: 38,
              color: VOX_TOKENS.colors.inkNavy,
              marginTop: 16,
            }}
          >
            每一次发烧
          </div>
          <div
            style={{
              fontFamily: VOX_TOKENS.fonts.body,
              fontSize: 18,
              color: VOX_TOKENS.colors.textMuted,
              marginTop: 8,
              lineHeight: 1.5,
            }}
          >
            病菌指数分裂与人体免疫应答
          </div>
          <div
            style={{
              marginTop: 20,
              display: "inline-block",
              padding: "4px 10px",
              backgroundColor: VOX_TOKENS.colors.paperWarm,
              fontFamily: VOX_TOKENS.fonts.typewriterMono,
              fontSize: 20,
              fontWeight: 900,
              color: VOX_TOKENS.colors.inkNavy,
            }}
          >
            N(t) = N₀ · e^(kt)
          </div>
        </div>

        {/* 切片 3：每一杯放凉的咖啡 */}
        <div
          style={{
            flex: 1,
            backgroundColor: "#FFF",
            border: `3px solid ${VOX_TOKENS.colors.inkNavy}`,
            boxShadow: "0 14px 28px rgba(0,0,0,0.16)",
            padding: "28px 24px",
            transform: `
              scale(${interpolate(card3, [0, 1], [0.8, 1])})
              rotate(-1deg)
            `,
            opacity: card3,
          }}
        >
          <div
            style={{
              fontFamily: VOX_TOKENS.fonts.typewriterMono,
              fontSize: 14,
              color: VOX_TOKENS.colors.vintageTeal,
              fontWeight: 800,
              borderBottom: `1px dashed ${VOX_TOKENS.colors.inkNavy}`,
              paddingBottom: 8,
              letterSpacing: 1,
            }}
          >
            [CASE 03] PHYSICS // 牛顿冷却
          </div>
          <div
            style={{
              fontFamily: VOX_TOKENS.fonts.heavyTitle,
              fontSize: 38,
              color: VOX_TOKENS.colors.inkNavy,
              marginTop: 16,
            }}
          >
            每一杯放凉的咖啡
          </div>
          <div
            style={{
              fontFamily: VOX_TOKENS.fonts.body,
              fontSize: 18,
              color: VOX_TOKENS.colors.textMuted,
              marginTop: 8,
              lineHeight: 1.5,
            }}
          >
            温差衰减速度正比于即时温差
          </div>
          <div
            style={{
              marginTop: 20,
              display: "inline-block",
              padding: "4px 10px",
              backgroundColor: VOX_TOKENS.colors.paperWarm,
              fontFamily: VOX_TOKENS.fonts.typewriterMono,
              fontSize: 20,
              fontWeight: 900,
              color: VOX_TOKENS.colors.inkNavy,
            }}
          >
            T(t) = T_env + ΔT · e^(-kt)
          </div>
        </div>
      </div>

      {/* 底部小注（避开字幕安全区） */}
      <div
        style={{
          position: "absolute",
          bottom: 145,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          opacity: interpolate(frame, [60, 80], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        <span
          style={{
            fontFamily: VOX_TOKENS.fonts.editorialSerif,
            fontSize: 24,
            color: VOX_TOKENS.colors.textMuted,
            letterSpacing: 2,
          }}
        >
          无声支配着现实世界中所有「以自身为速率」的连续变化过程
        </span>
      </div>
    </AbsoluteFill>
  );
};
