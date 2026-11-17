/**
 * 【同学 3 负责区】幕 7 ～ 幕 10（共 3468 帧，全局 7752 ～ 11220 帧）
 * 包含：万物应用场景、复平面欧拉公式、无理数/超越数身份证、最终总结收束
 */

import React from "react";
import {
  AbsoluteFill,
  interpolate,
  Sequence,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import {
  PaperBackground,
  VoxTitle,
  HighlighterText,
  VOX_TOKENS,
} from "../../design-system";

const Bacterium: React.FC<{ style?: React.CSSProperties }> = ({ style }) => (
  <svg
    viewBox="0 0 300 200"
    style={{ width: 280, height: 190, overflow: "visible", ...style }}
  >
    <g
      fill="none"
      stroke={VOX_TOKENS.colors.inkNavy}
      strokeLinecap="round"
      strokeWidth="7"
    >
      <path d="M45 55 25 35M38 85 10 78M43 120 18 137M70 145 58 174M108 151 105 182M148 150 157 180M190 144 208 170M226 125 253 143M241 91 276 91M232 62 260 40" />
    </g>
    <rect
      x="42"
      y="35"
      width="205"
      height="112"
      rx="56"
      fill={VOX_TOKENS.colors.retroRed}
      stroke={VOX_TOKENS.colors.inkNavy}
      strokeWidth="8"
    />
    <path
      d="M78 93c18-28 34 28 52 0s34 28 52 0 31 16 43 2"
      fill="none"
      stroke={VOX_TOKENS.colors.highlightYellow}
      strokeLinecap="round"
      strokeWidth="9"
    />
    <g fill={VOX_TOKENS.colors.paperLight}>
      <circle cx="87" cy="68" r="5" />
      <circle cx="132" cy="122" r="5" />
      <circle cx="193" cy="69" r="5" />
      <circle cx="215" cy="116" r="4" />
    </g>
  </svg>
);

const ActSevenHeader: React.FC<{ subtitle: string }> = ({ subtitle }) => (
  <div
    style={{
      position: "absolute",
      top: 54,
      width: "100%",
      display: "flex",
      justifyContent: "center",
    }}
  >
    <VoxTitle
      title="万物里的 e"
      subtitle={subtitle}
      fontSize={76}
      accentBarColor={VOX_TOKENS.colors.highlightYellow}
    />
  </div>
);

const SceneWindow: React.FC<{
  label: string;
  width: number;
  children: React.ReactNode;
}> = ({ label, width, children }) => (
  <div
    style={{
      width,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 18,
    }}
  >
    <div
      style={{
        position: "relative",
        width,
        height: width,
        borderRadius: "50%",
        border: `12px solid ${VOX_TOKENS.colors.tornEdgeWhite}`,
        backgroundColor: VOX_TOKENS.colors.paperWarm,
        boxShadow: "0 16px 36px rgba(21, 37, 53, 0.2)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {children}
    </div>
    <span
      style={{
        fontFamily: VOX_TOKENS.fonts.editorialSerif,
        fontSize: 24,
        fontWeight: 700,
        color: VOX_TOKENS.colors.inkNavy,
        backgroundColor: VOX_TOKENS.colors.highlightYellow,
        padding: "5px 16px",
        transform: "rotate(-1deg)",
      }}
    >
      {label}
    </span>
  </div>
);

const BacteriaScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const split = spring({
    frame: frame - 38,
    fps,
    config: VOX_TOKENS.spring.paperSnap,
  });
  const daughterOpacity = interpolate(frame, [35, 55], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const parentScale = interpolate(split, [0, 1], [1, 0.45]);
  const daughterScale = interpolate(split, [0, 1], [0.35, 0.72]);
  const separation = interpolate(split, [0, 1], [0, 28]);

  return (
    <AbsoluteFill>
      <ActSevenHeader subtitle="ACT 07 · 7-01 万物的变化" />
      <div
        style={{
          position: "absolute",
          top: 270,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          gap: 44,
        }}
      >
        <SceneWindow label="细菌分裂" width={330}>
          <Bacterium
            style={{
              position: "absolute",
              width: 190,
              height: 130,
              opacity: 1 - daughterOpacity,
              transform: `scale(${parentScale})`,
            }}
          />
          <Bacterium
            style={{
              position: "absolute",
              width: 132,
              height: 88,
              opacity: daughterOpacity,
              transform: `translateX(${-separation}px) scale(${daughterScale})`,
            }}
          />
          <Bacterium
            style={{
              position: "absolute",
              width: 132,
              height: 88,
              opacity: daughterOpacity,
              transform: `translateX(${separation}px) scale(${daughterScale})`,
            }}
          />
        </SceneWindow>
        <SceneWindow label="放射性衰变" width={330}>
          <svg viewBox="0 0 220 220" width="210" height="210">
            <circle
              cx="110"
              cy="110"
              r="77"
              fill="none"
              stroke={VOX_TOKENS.colors.inkNavy}
              strokeOpacity="0.35"
              strokeWidth="4"
              strokeDasharray="8 10"
            />
            <circle
              cx="110"
              cy="110"
              r="52"
              fill={VOX_TOKENS.colors.retroRed}
            />
            <circle
              cx="91"
              cy="99"
              r="17"
              fill={VOX_TOKENS.colors.highlightYellow}
            />
            <circle
              cx="124"
              cy="96"
              r="17"
              fill={VOX_TOKENS.colors.textWhite}
            />
            <circle
              cx="113"
              cy="127"
              r="17"
              fill={VOX_TOKENS.colors.highlightYellow}
            />
            <circle cx="110" cy="110" r="8" fill={VOX_TOKENS.colors.inkNavy} />
          </svg>
        </SceneWindow>
        <SceneWindow label="咖啡放凉" width={330}>
          <svg viewBox="0 0 220 220" width="210" height="210">
            <path
              d="M75 91c-18-22 18-28 0-50M110 91c-18-22 18-28 0-50M145 91c-18-22 18-28 0-50"
              fill="none"
              stroke={VOX_TOKENS.colors.retroRed}
              strokeLinecap="round"
              strokeWidth="8"
            />
            <path
              d="M48 91h120v62a25 25 0 0 1-25 25H73a25 25 0 0 1-25-25z"
              fill={VOX_TOKENS.colors.paperLight}
              stroke={VOX_TOKENS.colors.inkNavy}
              strokeWidth="8"
            />
            <path
              d="M168 105h18a23 23 0 0 1 0 46h-18"
              fill="none"
              stroke={VOX_TOKENS.colors.inkNavy}
              strokeWidth="8"
            />
            <path
              d="M58 119h99"
              stroke={VOX_TOKENS.colors.badgeGold}
              strokeWidth="11"
            />
            <path
              d="M77 198h70"
              stroke={VOX_TOKENS.colors.inkNavy}
              strokeWidth="7"
              strokeLinecap="round"
            />
          </svg>
        </SceneWindow>
      </div>
    </AbsoluteFill>
  );
};

const OtherNaturalExamplesScene: React.FC = () => {
  const frame = useCurrentFrame();
  const cooling = interpolate(frame, [0, 138], [1, 0.25], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const population = interpolate(frame, [0, 90], [0.35, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const charge = interpolate(frame, [0, 138], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill>
      <ActSevenHeader subtitle="ACT 07 · 7-02 同一句话" />
      <div
        style={{
          position: "absolute",
          top: 285,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          gap: 20,
        }}
      >
        <SceneWindow label="咖啡散热" width={280}>
          <svg viewBox="0 0 220 220" width="190" height="190">
            <path
              d="M75 88c-18-22 18-28 0-50M110 88c-18-22 18-28 0-50M145 88c-18-22 18-28 0-50"
              fill="none"
              stroke={VOX_TOKENS.colors.retroRed}
              strokeLinecap="round"
              strokeWidth="8"
              opacity={cooling}
            />
            <path
              d="M48 91h120v62a25 25 0 0 1-25 25H73a25 25 0 0 1-25-25z"
              fill={VOX_TOKENS.colors.paperLight}
              stroke={VOX_TOKENS.colors.inkNavy}
              strokeWidth="8"
            />
            <path
              d="M168 105h18a23 23 0 0 1 0 46h-18"
              fill="none"
              stroke={VOX_TOKENS.colors.inkNavy}
              strokeWidth="8"
            />
            <path
              d="M58 119h99"
              stroke={VOX_TOKENS.colors.badgeGold}
              strokeWidth="11"
            />
          </svg>
        </SceneWindow>
        <SceneWindow label="误差分布" width={280}>
          <svg viewBox="0 0 220 220" width="190" height="190">
            <path
              d="M34 174h154M48 180V45"
              fill="none"
              stroke={VOX_TOKENS.colors.inkNavy}
              strokeWidth="7"
            />
            <path
              d="M49 160c28 0 25-97 61-97s33 97 61 97"
              fill="none"
              stroke={VOX_TOKENS.colors.retroRed}
              strokeWidth="11"
              strokeLinecap="round"
            />
            <path
              d="M110 63v111"
              stroke={VOX_TOKENS.colors.highlightYellow}
              strokeWidth="8"
            />
          </svg>
        </SceneWindow>
        <SceneWindow label="人口增长" width={280}>
          <svg viewBox="0 0 220 220" width="190" height="190">
            <path
              d="M34 180h154M48 180V42"
              fill="none"
              stroke={VOX_TOKENS.colors.inkNavy}
              strokeWidth="7"
            />
            <rect
              x="67"
              y={180 - 45 * population}
              width="29"
              height={45 * population}
              fill={VOX_TOKENS.colors.badgeGold}
            />
            <rect
              x="111"
              y={180 - 83 * population}
              width="29"
              height={83 * population}
              fill={VOX_TOKENS.colors.retroRed}
            />
            <rect
              x="155"
              y={180 - 125 * population}
              width="29"
              height={125 * population}
              fill={VOX_TOKENS.colors.vintageTeal}
            />
          </svg>
        </SceneWindow>
        <SceneWindow label="电容充电" width={280}>
          <svg viewBox="0 0 220 220" width="190" height="190">
            <path
              d="M48 110h46M126 110h46"
              stroke={VOX_TOKENS.colors.inkNavy}
              strokeWidth="8"
            />
            <path
              d="M96 53v114M126 53v114"
              stroke={VOX_TOKENS.colors.retroRed}
              strokeWidth="13"
            />
            <circle
              cx={52 + 115 * charge}
              cy="110"
              r="15"
              fill={VOX_TOKENS.colors.highlightYellow}
              stroke={VOX_TOKENS.colors.inkNavy}
              strokeWidth="5"
            />
            <path
              d="M52 68v-18M43 59h18M168 68v-18M159 59h18"
              stroke={VOX_TOKENS.colors.badgeGold}
              strokeWidth="6"
            />
          </svg>
        </SceneWindow>
      </div>
    </AbsoluteFill>
  );
};

export const PART3_DURATION_IN_FRAMES = 3468; // 04:18.384 – 06:14.000

export const Part3: React.FC = () => {
  return (
    <AbsoluteFill>
      <PaperBackground showGrid={true} gridSize={46} />

      {/* ─────────────────────────────────────────────
          幕 7：万物里的 e（相对帧 0 – 1153，共 9 镜）
         ───────────────────────────────────────────── */}
      <Sequence from={0} durationInFrames={1153} name="Act 7 - All in Nature">
        <Sequence from={0} durationInFrames={148} name="7-01 Bacteria">
          <BacteriaScene />
        </Sequence>
        <Sequence from={148} durationInFrames={138} name="7-02 Other Examples">
          <OtherNaturalExamplesScene />
        </Sequence>
        <Sequence from={286} durationInFrames={74} name="7-03 Current Amount">
          <AbsoluteFill
            style={{
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              padding: "0 120px",
            }}
          >
            <HighlighterText entryFrame={4} fontSize={58}>
              变化速度，取决于现在有多少
            </HighlighterText>
          </AbsoluteFill>
        </Sequence>
        <Sequence
          from={360}
          durationInFrames={793}
          name="7-04 Exponential Template"
        >
          <div
            style={{
              position: "relative",
              zIndex: 10,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              paddingTop: 80,
              width: "100%",
            }}
          >
            <VoxTitle
              title="万物里的 e"
              subtitle="ACT 07 · 自我驱动的通用解"
              fontSize={90}
              accentBarColor={VOX_TOKENS.colors.highlightYellow}
            />
            <div style={{ marginTop: 40, textAlign: "center" }}>
              <HighlighterText entryFrame={10} fontSize={48}>
                y(t) = y₀ · eᵏᵗ
              </HighlighterText>
              <p
                style={{
                  fontFamily: VOX_TOKENS.fonts.body,
                  fontSize: 24,
                  color: VOX_TOKENS.colors.textMuted,
                  marginTop: 20,
                }}
              >
                物理、化学、生物、金融：现在，决定下一刻。
              </p>
            </div>
          </div>
        </Sequence>
      </Sequence>

      {/* ─────────────────────────────────────────────
          幕 8：最漂亮的一座桥（相对帧 1153 – 2052，共 9 镜）
         ───────────────────────────────────────────── */}
      <Sequence
        from={1153}
        durationInFrames={899}
        name="Act 8 - Euler Identity"
      >
        <div
          style={{
            position: "relative",
            zIndex: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: 80,
            width: "100%",
          }}
        >
          <VoxTitle
            title="最漂亮的一座桥"
            subtitle="ACT 08 · 欧拉恒等式"
            fontSize={88}
            accentBarColor={VOX_TOKENS.colors.retroRed}
          />
          <div style={{ marginTop: 40, textAlign: "center" }}>
            <div style={{ marginBottom: 20 }}>
              <HighlighterText
                entryFrame={15}
                fontSize={64}
                highlightColor={VOX_TOKENS.colors.highlightYellow}
              >
                e^(iπ) + 1 = 0
              </HighlighterText>
            </div>
            <p style={{ fontFamily: VOX_TOKENS.fonts.body, fontSize: 26 }}>
              五个常数，一张最美合影。
            </p>
          </div>
        </div>
      </Sequence>

      {/* ─────────────────────────────────────────────
          幕 9：身份证明（相对帧 2052 – 2836，共 7 镜）
         ───────────────────────────────────────────── */}
      <Sequence
        from={2052}
        durationInFrames={784}
        name="Act 9 - Identity Proof"
      >
        <div
          style={{
            position: "relative",
            zIndex: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: 80,
            width: "100%",
          }}
        >
          <VoxTitle
            title="身份证明"
            subtitle="ACT 09 · 无理数与超越数"
            fontSize={84}
          />
          <div style={{ marginTop: 40, textAlign: "center" }}>
            <p style={{ fontFamily: VOX_TOKENS.fonts.body, fontSize: 26 }}>
              1737 欧拉证明无理数 ➔ 1873 埃尔米特证明超越数
            </p>
            <div style={{ marginTop: 20 }}>
              <HighlighterText
                entryFrame={10}
                fontSize={32}
                highlightColor={VOX_TOKENS.colors.retroRed}
                textColor="#FFF"
              >
                未解之谜：e + π 究竟是不是无理数？
              </HighlighterText>
            </div>
          </div>
        </div>
      </Sequence>

      {/* ─────────────────────────────────────────────
          幕 10：不是发明，是撞见（相对帧 2836 – 3468，共 7 镜）
         ───────────────────────────────────────────── */}
      <Sequence from={2836} durationInFrames={632} name="Act 10 - Encounter">
        <div
          style={{
            position: "relative",
            zIndex: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            textAlign: "center",
            padding: "0 100px",
          }}
        >
          <span
            style={{
              fontFamily: VOX_TOKENS.fonts.editorialSerif,
              fontSize: 36,
              color: VOX_TOKENS.colors.textMuted,
              marginBottom: 20,
            }}
          >
            没有人设计过 e
          </span>
          <VoxTitle
            title="不是发明，是撞见。"
            fontSize={104}
            accentBarColor={VOX_TOKENS.colors.highlightYellow}
          />
        </div>
      </Sequence>
    </AbsoluteFill>
  );
};
