import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { VOX_TOKENS, HighlighterText } from "../../../design-system";

export const Shot1_01: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // 镜头微推推进感 (Ken Burns 效果)
  const cameraZoom = interpolate(frame, [0, 127], [0.96, 1.04], {
    extrapolateRight: "clamp",
  });

  // π 徽章入场 spring 弹跳
  const piSpring = spring({
    frame,
    fps,
    config: VOX_TOKENS.spring.paperSnap,
  });

  // 标线与文字淡入延时
  const detailsOpacity = interpolate(frame, [15, 35], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // 虚线圆圈旋转与几何感
  const circleRotation = interpolate(frame, [0, 127], [0, 24]);

  return (
    <AbsoluteFill
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transform: `scale(${cameraZoom})`,
      }}
    >
      {/* 顶部复古档案分类条 */}
      <div
        style={{
          position: "absolute",
          top: 60,
          left: 80,
          right: 80,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: `2px solid ${VOX_TOKENS.colors.inkNavy}`,
          paddingBottom: 14,
          opacity: detailsOpacity,
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
              padding: "4px 10px",
              letterSpacing: 2,
            }}
          >
            CONST-01
          </span>
          <span
            style={{
              fontFamily: VOX_TOKENS.fonts.heavyTitle,
              fontSize: 20,
              color: VOX_TOKENS.colors.inkNavy,
              letterSpacing: 1.5,
            }}
          >
            MATHEMATICAL CONSTANTS // 数学常数档案
          </span>
        </div>
        <span
          style={{
            fontFamily: VOX_TOKENS.fonts.typewriterMono,
            fontSize: 16,
            color: VOX_TOKENS.colors.textMuted,
          }}
        >
          ACT 01 · SHOT 1-01 [00:00–00:04]
        </span>
      </div>

      {/* 中央主视区：巨大的 π 几何印记与圆周关系 */}
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          transform: `scale(${piSpring})`,
          opacity: piSpring,
        }}
      >
        {/* 背景虚线几何圆与旋转刻度 */}
        <div
          style={{
            position: "absolute",
            width: 440,
            height: 440,
            borderRadius: "50%",
            border: `3px dashed ${VOX_TOKENS.colors.inkNavy}`,
            opacity: 0.28,
            transform: `translate(-50%, -50%) rotate(${circleRotation}deg)`,
            top: "50%",
            left: "50%",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 500,
            height: 500,
            borderRadius: "50%",
            border: `1px solid ${VOX_TOKENS.colors.retroRed}`,
            opacity: 0.2,
            transform: "translate(-50%, -50%)",
            top: "50%",
            left: "50%",
            pointerEvents: "none",
          }}
        />

        {/* 巨大的 π 符号主体 */}
        <div
          style={{
            position: "relative",
            width: 320,
            height: 320,
            backgroundColor: VOX_TOKENS.colors.paperWarm,
            border: `6px solid ${VOX_TOKENS.colors.inkNavy}`,
            boxShadow: "0 18px 40px rgba(21, 37, 53, 0.22)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transform: "rotate(-1.5deg)",
          }}
        >
          <span
            style={{
              fontFamily: VOX_TOKENS.fonts.editorialSerif,
              fontSize: 240,
              fontWeight: 900,
              color: VOX_TOKENS.colors.inkNavy,
              lineHeight: 1,
              marginTop: -20,
              userSelect: "none",
            }}
          >
            π
          </span>

          {/* 右上角印章标贴 */}
          <div
            style={{
              position: "absolute",
              top: -16,
              right: -24,
              backgroundColor: VOX_TOKENS.colors.highlightYellow,
              color: VOX_TOKENS.colors.textBlack,
              fontFamily: VOX_TOKENS.fonts.typewriterMono,
              fontSize: 18,
              fontWeight: 900,
              padding: "4px 12px",
              border: `2px solid ${VOX_TOKENS.colors.inkNavy}`,
              transform: "rotate(6deg)",
              boxShadow: "2px 4px 10px rgba(0,0,0,0.15)",
            }}
          >
            ≈ 3.14159
          </div>
        </div>

        {/* 底部副标与引子台词提示 */}
        <div
          style={{
            marginTop: 48,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            opacity: detailsOpacity,
          }}
        >
          <div
            style={{
              fontFamily: VOX_TOKENS.fonts.editorialSerif,
              fontSize: 32,
              fontWeight: 700,
              color: VOX_TOKENS.colors.textMuted,
              letterSpacing: 2,
            }}
          >
            说到数学常数，你的第一反应大概是——
          </div>
          <div style={{ marginTop: 12 }}>
            <HighlighterText
              entryFrame={25}
              fontSize={48}
              highlightColor={VOX_TOKENS.colors.highlightYellow}
              textColor={VOX_TOKENS.colors.inkNavy}
            >
              圆 周 率 ( Pi )
            </HighlighterText>
          </div>
        </div>
      </div>

      {/* 右下角转折悬念：“但有一个数……” */}
      <div
        style={{
          position: "absolute",
          bottom: 145,
          right: 90,
          display: "flex",
          alignItems: "center",
          gap: 12,
          opacity: interpolate(frame, [80, 110], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        <span
          style={{
            fontFamily: VOX_TOKENS.fonts.heavyTitle,
            fontSize: 34,
            color: VOX_TOKENS.colors.retroRed,
            letterSpacing: 1,
          }}
        >
          但还有另一个数 ➔
        </span>
      </div>
    </AbsoluteFill>
  );
};
