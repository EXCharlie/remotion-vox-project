import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { VOX_TOKENS } from "../tokens";

interface PaperBackgroundProps {
  /** 纸张底色，默认米白 */
  backgroundColor?: string;
  /** 是否开启坐标网格线（图1风格） */
  showGrid?: boolean;
  /** 网格大小，默认 48px */
  gridSize?: number;
  /** 是否开启复古四周暗角 */
  vignette?: boolean;
  /** 是否开启微小镜头呼吸感漂移 */
  drift?: boolean;
}

export const PaperBackground: React.FC<PaperBackgroundProps> = ({
  backgroundColor = VOX_TOKENS.colors.paperLight,
  showGrid = true,
  gridSize = 48,
  vignette = true,
  drift = true,
}) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  // 极轻微的慢镜头漂移，让纸张背景有生命力
  const scale = drift
    ? interpolate(frame, [0, durationInFrames], [1.0, 1.03], {
        extrapolateRight: "clamp",
      })
    : 1;

  const moveX = drift
    ? interpolate(frame, [0, durationInFrames], [0, -8], {
        extrapolateRight: "clamp",
      })
    : 0;

  return (
    <AbsoluteFill
      style={{
        backgroundColor,
        overflow: "hidden",
      }}
    >
      {/* 坐标网格线（对标图1坐标系网格背景） */}
      {showGrid && (
        <div
          style={{
            position: "absolute",
            inset: -40,
            transform: `scale(${scale}) translate(${moveX}px, 0px)`,
            backgroundImage: `
              linear-gradient(to right, ${VOX_TOKENS.colors.gridLine} 1px, transparent 1px),
              linear-gradient(to bottom, ${VOX_TOKENS.colors.gridLine} 1px, transparent 1px)
            `,
            backgroundSize: `${gridSize}px ${gridSize}px`,
            pointerEvents: "none",
          }}
        />
      )}

      {/* 模拟纸张纤维与轻微噪点 */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.4) 0%, rgba(0,0,0,0.03) 100%)",
          mixBlendMode: "multiply",
          pointerEvents: "none",
        }}
      />

      {/* 边缘复古暗角（增强胶片质感） */}
      {vignette && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            boxShadow: "inset 0 0 160px rgba(45, 35, 20, 0.28)",
            pointerEvents: "none",
          }}
        />
      )}
    </AbsoluteFill>
  );
};
