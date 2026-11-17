import React from "react";
import { VOX_TOKENS } from "../tokens";

interface HalftoneLayerProps {
  /** 底色（如复古红 #D93829 或 深墨蓝） */
  color?: string;
  /** 网点大小（像素），默认 6px */
  dotSize?: number;
  /** 网点颜色，默认深色 */
  dotColor?: string;
  /** 旋转角度（例如倾斜 12deg 做斜撕纸层） */
  rotation?: number;
  style?: React.CSSProperties;
}

export const HalftoneLayer: React.FC<HalftoneLayerProps> = ({
  color = VOX_TOKENS.colors.retroRed,
  dotSize = 6,
  dotColor = "rgba(0, 0, 0, 0.22)",
  rotation = 0,
  style = {},
}) => {
  return (
    <div
      style={{
        backgroundColor: color,
        transform: rotation ? `rotate(${rotation}deg)` : undefined,
        overflow: "hidden",
        position: "relative",
        boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
        ...style,
      }}
    >
      {/* 半色调网点图案（模拟老报纸印刷四色网点） */}
      <div
        style={{
          position: "absolute",
          inset: -40,
          backgroundImage: `radial-gradient(${dotColor} 1.6px, transparent 1.6px)`,
          backgroundSize: `${dotSize}px ${dotSize}px`,
          pointerEvents: "none",
        }}
      />
    </div>
  );
};
