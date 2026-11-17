import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { VOX_TOKENS } from "../tokens";

interface TornPaperCutoutProps {
  children: React.ReactNode;
  /** 进场帧 */
  entryFrame?: number;
  /** 贴纸旋转角度（微小倾斜增加拼贴手工感，例如 -2 或 1.5） */
  rotation?: number;
  /** 白边宽度，默认 8px */
  borderWidth?: number;
  /** 是否开启老报纸颗粒/黑白对比度滤镜 */
  vintageFilter?: boolean;
  style?: React.CSSProperties;
}

export const TornPaperCutout: React.FC<TornPaperCutoutProps> = ({
  children,
  entryFrame = 0,
  rotation = -1.5,
  borderWidth = 8,
  vintageFilter = true,
  style = {},
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // 模拟剪纸拍在桌面上的干脆手感
  const snap = spring({
    frame: frame - entryFrame,
    fps,
    config: VOX_TOKENS.spring.paperSnap,
  });

  if (frame < entryFrame) return null;

  return (
    <div
      style={{
        display: "inline-block",
        position: "relative",
        transform: `
          scale(${interpolate(snap, [0, 1], [0.85, 1])})
          rotate(${interpolate(snap, [0, 1], [rotation * 2, rotation])}deg)
        `,
        opacity: snap,
        ...style,
      }}
    >
      {/* 真实撕纸白色不规则边框层 + 拼贴立体投影（对标图2货轮轮廓） */}
      <div
        style={{
          position: "relative",
          backgroundColor: VOX_TOKENS.colors.tornEdgeWhite,
          padding: borderWidth,
          borderRadius: 4,
          boxShadow: `
            0 12px 28px rgba(0, 0, 0, 0.28),
            0 3px 8px rgba(0, 0, 0, 0.18)
          `,
          // 模拟手撕纸张的锯齿边缘质感
          outline: "1px dashed rgba(0,0,0,0.08)",
        }}
      >
        <div
          style={{
            overflow: "hidden",
            filter: vintageFilter
              ? "contrast(1.15) brightness(0.98) saturate(0.85)"
              : "none",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
