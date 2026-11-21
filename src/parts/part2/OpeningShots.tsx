import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import {
  HalftoneLayer,
  HighlighterText,
  PaperBackground,
  TornPaperCutout,
  VoxTitle,
  VOX_TOKENS,
} from "../../design-system";

const { colors, fonts } = VOX_TOKENS;
const clamp = { extrapolateLeft: "clamp", extrapolateRight: "clamp" } as const;

/** 5-01 / 5-02 share one desk so the narration changes the focus, not the whole screen. */
export const OpeningShots: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const reveal = spring({
    frame: frame - 126,
    fps,
    config: VOX_TOKENS.spring.cameraSmooth,
  });
  const clues = [
    {
      year: "1618",
      name: "对数表",
      formula: "log",
      x: 100,
      y: 335,
      rotation: -5,
    },
    {
      year: "1668",
      name: "双曲线下面积",
      formula: "y = 1/x",
      x: 710,
      y: 335,
      rotation: 3,
    },
    {
      year: "1683",
      name: "复利的极限",
      formula: "2 < L < 3",
      x: 1320,
      y: 335,
      rotation: -3,
    },
  ];
  return (
    <AbsoluteFill style={{ color: colors.inkNavy, fontFamily: fonts.body }}>
      <PaperBackground showGrid gridSize={48} />
      <HalftoneLayer
        color={colors.retroRed}
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
          title="把线索串起来"
          subtitle="ACT 05 / 一个常数，终于有了名字"
          fontSize={82}
        />
      </div>
      <svg
        width={1920}
        height={1080}
        style={{ position: "absolute", inset: 0 }}
      >
        {clues.map((clue, i) => (
          <path
            key={clue.year}
            d={`M ${clue.x + 220} 540 Q ${clue.x + 220} 730 960 755`}
            fill="none"
            stroke={colors.vintageTeal}
            strokeWidth={5}
            pathLength={1}
            strokeDasharray={1}
            strokeDashoffset={
              1 - interpolate(frame, [28 + i * 14, 65 + i * 14], [0, 1], clamp)
            }
          />
        ))}
      </svg>
      {clues.map((clue, i) => (
        <div
          key={clue.year}
          style={{
            position: "absolute",
            left: clue.x,
            top: clue.y - reveal * 35,
            opacity: 1 - reveal * 0.55,
            scale: 1 - reveal * 0.1,
          }}
        >
          <TornPaperCutout
            entryFrame={i * 7}
            rotation={clue.rotation}
            vintageFilter={false}
          >
            <div
              style={{
                width: 410,
                height: 220,
                padding: 24,
                boxSizing: "border-box",
                background: colors.paperLight,
                borderTop: `6px solid ${colors.inkNavy}`,
              }}
            >
              <div
                style={{
                  fontFamily: fonts.typewriterMono,
                  fontSize: 26,
                  color: colors.retroRed,
                }}
              >
                {clue.year} / 线索 {i + 1}
              </div>
              <div style={{ fontSize: 32, marginTop: 12, fontWeight: 700 }}>
                {clue.name}
              </div>
              <div
                style={{
                  fontFamily: fonts.editorialSerif,
                  fontSize: 48,
                  marginTop: 10,
                }}
              >
                {clue.formula}
              </div>
            </div>
          </TornPaperCutout>
        </div>
      ))}
      <div
        style={{
          position: "absolute",
          top: 690 - reveal * 100,
          width: "100%",
          textAlign: "center",
          opacity: interpolate(frame, [72, 92], [0, 1], clamp),
        }}
      >
        {frame < 126 ? (
          <div
            style={{
              display: "inline-block",
              background: colors.inkNavy,
              color: colors.paperLight,
              padding: "24px 55px",
              fontSize: 43,
              rotate: "-1deg",
            }}
          >
            同一个数，等待一个名字。
          </div>
        ) : (
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 50,
              background: colors.paperLight,
              padding: "25px 55px",
              borderBottom: `5px solid ${colors.inkNavy}`,
              scale: 0.94 + reveal * 0.06,
            }}
          >
            <div style={{ textAlign: "left" }}>
              <div
                style={{
                  fontFamily: fonts.typewriterMono,
                  fontSize: 26,
                  letterSpacing: 5,
                  marginBottom: 15,
                }}
              >
                LEONHARD EULER
              </div>
              <VoxTitle title="莱昂哈德 · 欧拉" fontSize={62} />
              <div
                style={{ fontSize: 25, marginTop: 18, color: colors.textMuted }}
              >
                为散落的线索，建立统一的语言
              </div>
            </div>
            <HighlighterText
              entryFrame={140}
              fontSize={160}
              fontFamily={fonts.editorialSerif}
            >
              e
            </HighlighterText>
          </div>
        )}
      </div>
      <div
        style={{
          position: "absolute",
          left: 100,
          bottom: 170,
          fontFamily: fonts.typewriterMono,
          fontSize: 22,
          letterSpacing: 3,
          color: colors.textMuted,
        }}
      >
        档案 / THE STORY OF e{" "}
        <span style={{ marginLeft: 850 }}>
          {frame < 126 ? "5—01 / 线索汇合" : "5—02 / 欧拉登场"}
        </span>
      </div>
    </AbsoluteFill>
  );
};
