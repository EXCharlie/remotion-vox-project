import React from "react";
import { interpolate, useCurrentFrame } from "remotion";
import {
  HalftoneLayer,
  PaperBackground,
  TornPaperCutout,
  VoxTitle,
  VOX_TOKENS,
} from "../../design-system";
import { SUBTITLES } from "../../data/subtitles";

export const { colors: C, fonts: F } = VOX_TOKENS;
export const clamp = {
  extrapolateLeft: "clamp",
  extrapolateRight: "clamp",
} as const;
export const progress = (frame: number, start: number, length = 24) =>
  interpolate(frame, [start, start + length], [0, 1], clamp);
export const PART2_SHOTS = SUBTITLES.filter(
  (s) => s.id >= 38 && s.id <= 69,
).map((s, i, all) => ({
  id:
    i < 19
      ? `5-${String(i + 1).padStart(2, "0")}`
      : `6-${String(i - 18).padStart(2, "0")}`,
  from: s.startFrame - 4216,
  to: i === all.length - 1 ? 3536 : all[i + 1].startFrame - 4216,
}));

export const Desk: React.FC<{
  title: string;
  chapter: string;
  start: number;
  children: React.ReactNode;
}> = ({ title, chapter, start, children }) => {
  const frame = useCurrentFrame() + start;
  const shot = PART2_SHOTS.find((s) => frame >= s.from && frame < s.to);
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        color: C.inkNavy,
        fontFamily: F.body,
      }}
    >
      <PaperBackground showGrid gridSize={48} />
      <HalftoneLayer
        color={C.retroRed}
        rotation={-8}
        style={{
          position: "absolute",
          right: -80,
          top: -100,
          width: 500,
          height: 350,
          opacity: 0.2,
        }}
      />
      <div style={{ position: "absolute", left: 100, top: 70 }}>
        <VoxTitle
          title={title}
          subtitle={chapter}
          fontSize={78}
          entryFrame={-30}
        />
      </div>
      {children}
      <div
        style={{
          position: "absolute",
          left: 100,
          right: 100,
          bottom: 170,
          display: "flex",
          justifyContent: "space-between",
          fontFamily: F.typewriterMono,
          fontSize: 22,
          letterSpacing: 3,
          color: C.textMuted,
        }}
      >
        <span>档案 / THE STORY OF e</span>
        <span>
          {shot?.id} / {chapter}
        </span>
      </div>
    </div>
  );
};
export const Card: React.FC<{
  children: React.ReactNode;
  style?: React.CSSProperties;
  rotation?: number;
  entryFrame?: number;
}> = ({ children, style, rotation = -1.5, entryFrame = -30 }) => (
  <TornPaperCutout
    rotation={rotation}
    entryFrame={entryFrame}
    vintageFilter={false}
    style={style}
  >
    <div
      style={{
        background: C.paperLight,
        padding: 32,
        boxSizing: "border-box",
        borderTop: `6px solid ${C.inkNavy}`,
      }}
    >
      {children}
    </div>
  </TornPaperCutout>
);
export const Note: React.FC<{
  children: React.ReactNode;
  style?: React.CSSProperties;
}> = ({ children, style }) => (
  <div
    style={{
      position: "absolute",
      left: 100,
      right: 100,
      top: 780,
      fontSize: 30,
      color: C.textMuted,
      ...style,
    }}
  >
    {children}
  </div>
);
