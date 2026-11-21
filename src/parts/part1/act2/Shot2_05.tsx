import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { VOX_TOKENS, HighlighterText } from "../../../design-system";

export const Shot2_05: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // 极速推向柱头特写
  const zoomIn = interpolate(frame, [0, 38], [1.0, 1.45], {
    extrapolateRight: "clamp",
  });

  const deltaFlash = spring({
    frame: frame - 5,
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
      }}
    >
      {/* 顶部标语 */}
      <div
        style={{
          position: "absolute",
          top: 60,
          left: 0,
          right: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          zIndex: 20,
        }}
      >
        <HighlighterText
          entryFrame={4}
          fontSize={52}
          highlightColor={VOX_TOKENS.colors.retroRed}
          textColor="#FFF"
        >
          但 多 得 很 勉 强 ！
        </HighlighterText>
      </div>

      {/* 柱顶特写展台 */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          gap: 30,
          transform: `scale(${zoomIn}) translateY(80px)`,
          position: "relative",
          zIndex: 10,
        }}
      >
        {/* n=12 柱顶 */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <span style={{ fontFamily: VOX_TOKENS.fonts.typewriterMono, fontSize: 16, marginBottom: 6 }}>2.613</span>
          <div style={{ width: 80, height: 260, backgroundColor: "#888", border: "3px solid #333" }} />
          <span style={{ fontFamily: VOX_TOKENS.fonts.typewriterMono, fontSize: 16, marginTop: 8 }}>n=12</span>
        </div>

        {/* 增量落差标线 1 */}
        <div
          style={{
            position: "absolute",
            left: "32%",
            top: 60,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            opacity: deltaFlash,
          }}
        >
          <div style={{ borderLeft: `2px dashed ${VOX_TOKENS.colors.retroRed}`, height: 40 }} />
          <span style={{ backgroundColor: VOX_TOKENS.colors.retroRed, color: "#FFF", fontSize: 12, padding: "2px 4px", fontWeight: 800 }}>
            +0.080
          </span>
        </div>

        {/* n=52 柱顶 */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <span style={{ fontFamily: VOX_TOKENS.fonts.typewriterMono, fontSize: 16, marginBottom: 6 }}>2.693</span>
          <div style={{ width: 80, height: 284, backgroundColor: VOX_TOKENS.colors.vintageTeal, border: "3px solid #333" }} />
          <span style={{ fontFamily: VOX_TOKENS.fonts.typewriterMono, fontSize: 16, marginTop: 8 }}>n=52</span>
        </div>

        {/* 增量落差标线 2：更小 */}
        <div
          style={{
            position: "absolute",
            left: "64%",
            top: 80,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            opacity: deltaFlash,
          }}
        >
          <div style={{ borderLeft: `2px dashed ${VOX_TOKENS.colors.retroRed}`, height: 12 }} />
          <span style={{ backgroundColor: VOX_TOKENS.colors.highlightYellow, color: "#000", fontSize: 12, padding: "2px 4px", fontWeight: 900 }}>
            +0.022 ➔ 极微小
          </span>
        </div>

        {/* n=365 柱顶 */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <span style={{ fontFamily: VOX_TOKENS.fonts.typewriterMono, fontSize: 18, fontWeight: 900, color: VOX_TOKENS.colors.retroRed, marginBottom: 6 }}>
            2.715
          </span>
          <div style={{ width: 80, height: 292, backgroundColor: VOX_TOKENS.colors.retroRed, border: "3px solid #333" }} />
          <span style={{ fontFamily: VOX_TOKENS.fonts.typewriterMono, fontSize: 16, fontWeight: 800, marginTop: 8 }}>n=365</span>
        </div>
      </div>
    </AbsoluteFill>
  );
};
