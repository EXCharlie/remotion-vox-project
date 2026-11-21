import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { VOX_TOKENS, HighlighterText } from "../../../design-system";

export const Shot1_03: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // 标尺与主画卷推进
  const containerZoom = interpolate(frame, [0, 123], [0.98, 1.03], {
    extrapolateRight: "clamp",
  });

  // 逐位打出 2 . 7 1 8 2 8 1 8 2 8
  const fullDigits = "2.718281828459045";
  // 前 11 个字符 (2.718281828) 在前 45 帧内逐字打出
  const typedCount = Math.min(
    11,
    Math.max(1, Math.floor(interpolate(frame, [5, 45], [1, 11], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    })))
  );
  const displayedPrefix = fullDigits.slice(0, typedCount);

  // 打字光标闪烁
  const showCursor = Math.floor(frame / 6) % 2 === 0;

  // 末位滚动数字（0~9 高速滚动轮播动画）
  const rollingOffset = (frame * 32) % 360;

  // 标签弹入动画
  const badgeSpring = spring({
    frame: frame - 40,
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
        transform: `scale(${containerZoom})`,
      }}
    >
      {/* 顶部复古刻度标尺 */}
      <div
        style={{
          position: "absolute",
          top: 80,
          left: 100,
          right: 100,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          opacity: 0.6,
        }}
      >
        <div
          style={{
            width: "100%",
            height: 12,
            backgroundImage: `repeating-linear-gradient(90deg, ${VOX_TOKENS.colors.inkNavy} 0, ${VOX_TOKENS.colors.inkNavy} 2px, transparent 2px, transparent 20px)`,
          }}
        />
        <div
          style={{
            fontFamily: VOX_TOKENS.fonts.typewriterMono,
            fontSize: 14,
            color: VOX_TOKENS.colors.inkNavy,
            letterSpacing: 4,
            marginTop: 6,
          }}
        >
          MEASUREMENT // INFINITE NON-REPEATING DECIMAL STREAM
        </div>
      </div>

      {/* 主展台：巨大的复古数位卡片 */}
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#FFF",
          border: `5px solid ${VOX_TOKENS.colors.inkNavy}`,
          boxShadow: "0 20px 50px rgba(0,0,0,0.18)",
          padding: "50px 70px",
          maxWidth: 1600,
        }}
      >
        {/* 左上角印章 */}
        <div
          style={{
            position: "absolute",
            top: -18,
            left: 36,
            backgroundColor: VOX_TOKENS.colors.inkNavy,
            color: "#FFF",
            fontFamily: VOX_TOKENS.fonts.typewriterMono,
            fontSize: 14,
            fontWeight: 800,
            padding: "4px 14px",
            letterSpacing: 2,
          }}
        >
          DECIMAL EXPANSION
        </div>

        {/* 核心数字长河 */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontFamily: VOX_TOKENS.fonts.typewriterMono,
            fontSize: 88,
            fontWeight: 900,
            color: VOX_TOKENS.colors.inkNavy,
            letterSpacing: 4,
          }}
        >
          {/* 打字机打出的确定部分 */}
          <span>{displayedPrefix}</span>

          {/* 打字光标 */}
          {frame < 55 && (
            <span
              style={{
                display: "inline-block",
                width: 8,
                height: 80,
                backgroundColor: VOX_TOKENS.colors.retroRed,
                marginLeft: 4,
                opacity: showCursor ? 1 : 0,
              }}
            />
          )}

          {/* 55 帧后出现：末位飞速轮播滚动的数位与省略号 */}
          {frame >= 45 && (
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                marginLeft: 8,
              }}
            >
              {/* 滚轮窗口 */}
              <div
                style={{
                  display: "inline-block",
                  height: 100,
                  overflow: "hidden",
                  position: "relative",
                  width: 60,
                  backgroundColor: VOX_TOKENS.colors.paperLight,
                  border: `2px dashed ${VOX_TOKENS.colors.retroRed}`,
                  borderRadius: 4,
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: -rollingOffset,
                    left: 0,
                    right: 0,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    color: VOX_TOKENS.colors.retroRed,
                  }}
                >
                  {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(
                    (digit, idx) => (
                      <span key={idx} style={{ height: 100, lineHeight: "100px" }}>
                        {digit}
                      </span>
                    )
                  )}
                </div>
              </div>

              {/* 无穷长省略号 */}
              <span
                style={{
                  color: VOX_TOKENS.colors.retroRed,
                  marginLeft: 12,
                  letterSpacing: 8,
                }}
              >
                ……
              </span>
            </div>
          )}
        </div>

        {/* 底部属性解析标签 */}
        <div
          style={{
            marginTop: 36,
            display: "flex",
            alignItems: "center",
            gap: 24,
            transform: `scale(${badgeSpring})`,
            opacity: badgeSpring,
          }}
        >
          <div
            style={{
              backgroundColor: VOX_TOKENS.colors.retroRed,
              color: "#FFF",
              padding: "6px 16px",
              fontFamily: VOX_TOKENS.fonts.heavyTitle,
              fontSize: 24,
              letterSpacing: 1.5,
            }}
          >
            无限不循环
          </div>

          <div
            style={{
              backgroundColor: VOX_TOKENS.colors.inkNavy,
              color: "#FFF",
              padding: "6px 16px",
              fontFamily: VOX_TOKENS.fonts.heavyTitle,
              fontSize: 24,
              letterSpacing: 1.5,
            }}
          >
            毫无循环节
          </div>

          <HighlighterText
            entryFrame={50}
            fontSize={26}
            highlightColor={VOX_TOKENS.colors.highlightYellow}
            textColor={VOX_TOKENS.colors.textBlack}
          >
            自然界的内在节奏常数 e
          </HighlighterText>
        </div>
      </div>

      {/* 底部说明性档案栏 */}
      <div
        style={{
          position: "absolute",
          bottom: 70,
          left: 100,
          right: 100,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderTop: `1px solid ${VOX_TOKENS.colors.gridLine}`,
          paddingTop: 16,
          opacity: interpolate(frame, [50, 70], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        <span
          style={{
            fontFamily: VOX_TOKENS.fonts.editorialSerif,
            fontSize: 22,
            color: VOX_TOKENS.colors.textMuted,
          }}
        >
          看起来如噪声般混沌，却在极限微积分中拥有最高对称性。
        </span>
        <span
          style={{
            fontFamily: VOX_TOKENS.fonts.typewriterMono,
            fontSize: 18,
            color: VOX_TOKENS.colors.retroRed,
            fontWeight: 800,
          }}
        >
          1683 ➔ 2026 // 343 YEARS OF CALCULUS
        </span>
      </div>
    </AbsoluteFill>
  );
};
