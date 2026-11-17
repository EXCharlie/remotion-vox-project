import React from "react";
import { useCurrentFrame } from "remotion";
import { SUBTITLES } from "../../data/subtitles";
import { VOX_TOKENS } from "../tokens";

export interface VoxSubtitlesProps {
  /** 全局时间偏移（各 Part 单独测试预览时传入） */
  offsetFrame?: number;
  /** 是否在字幕上方显示当前帧和台词序号（调试用，默认 false） */
  debug?: boolean;
}

export const VoxSubtitles: React.FC<VoxSubtitlesProps> = ({
  offsetFrame = 0,
  debug = false,
}) => {
  const frame = useCurrentFrame();
  const globalFrame = frame + offsetFrame;

  // 匹配当前帧对应的字幕
  const currentSub = SUBTITLES.find(
    (sub) => globalFrame >= sub.startFrame && globalFrame <= sub.endFrame
  );

  if (!currentSub) {
    return null;
  }

  return (
    <div
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 56,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
        pointerEvents: "none",
      }}
    >
      {debug && (
        <div
          style={{
            marginBottom: 8,
            padding: "2px 8px",
            backgroundColor: "rgba(0,0,0,0.6)",
            color: VOX_TOKENS.colors.highlightYellow,
            fontSize: 16,
            fontFamily: VOX_TOKENS.fonts.typewriterMono,
            borderRadius: 4,
          }}
        >
          #{currentSub.id} | 全局帧: {globalFrame} | 片段帧: {frame}
        </div>
      )}

      <div
        style={{
          display: "inline-block",
          maxWidth: "80%",
          padding: "10px 24px",
          backgroundColor: "rgba(21, 37, 53, 0.88)", // 墨蓝半透遮罩胶带
          borderRadius: 8,
          boxShadow: "0 4px 16px rgba(0,0,0,0.25)",
          textAlign: "center",
        }}
      >
        <span
          style={{
            fontFamily: VOX_TOKENS.fonts.heavyTitle,
            fontSize: 40,
            fontWeight: 700,
            color: VOX_TOKENS.colors.textWhite,
            letterSpacing: "0.04em",
            lineHeight: 1.35,
            textShadow: "0 2px 4px rgba(0,0,0,0.4)",
          }}
        >
          {currentSub.text}
        </span>
      </div>
    </div>
  );
};
