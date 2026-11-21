/**
 * 【同学 3 负责区】幕 7 ～ 幕 10（共 3468 帧，全局 7752 ～ 11220 帧）
 * 万物里的 e、欧拉恒等式、无理数与超越数，以及全片收束。
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
  HalftoneLayer,
  HighlighterText,
  PaperBackground,
  VOX_TOKENS,
  VoxTitle,
} from "../../design-system";

export const PART3_DURATION_IN_FRAMES = 3468; // 04:18.384 – 06:14.000

const C = VOX_TOKENS.colors;

const ActHeader: React.FC<{
  act: string;
  shot: string;
  title: string;
  accent?: string;
}> = ({ act, shot, title, accent = C.highlightYellow }) => (
  <div
    style={{
      position: "absolute",
      top: 44,
      left: 110,
      right: 110,
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      borderBottom: `3px solid ${C.inkNavy}`,
      paddingBottom: 13,
    }}
  >
    <div>
      <div
        style={{
          color: C.textMuted,
          fontFamily: VOX_TOKENS.fonts.typewriterMono,
          fontSize: 17,
          letterSpacing: "0.12em",
          marginBottom: 4,
        }}
      >
        {act}　·　{shot}
      </div>
      <div
        style={{
          color: C.inkNavy,
          fontFamily: VOX_TOKENS.fonts.heavyTitle,
          fontSize: 36,
          fontWeight: 900,
          lineHeight: 1.1,
        }}
      >
        {title}
      </div>
    </div>
    <div
      style={{
        width: 90,
        height: 12,
        backgroundColor: accent,
        transform: "rotate(-2deg)",
        marginBottom: 3,
      }}
    />
  </div>
);

const PaperCard: React.FC<{
  children: React.ReactNode;
  style?: React.CSSProperties;
  accent?: string;
}> = ({ children, style, accent = C.retroRed }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const enter = spring({
    frame,
    fps,
    config: VOX_TOKENS.spring.paperSnap,
  });

  return (
    <div
      style={{
        backgroundColor: C.paperLight,
        border: `3px solid ${C.inkNavy}`,
        borderTop: `10px solid ${accent}`,
        boxShadow: "10px 12px 0 rgba(21, 37, 53, 0.16)",
        padding: "24px 30px",
        opacity: enter,
        transform: `translateY(${interpolate(enter, [0, 1], [28, 0])}px) rotate(-0.5deg)`,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

const SceneWindow: React.FC<{
  label: string;
  width: number;
  children: React.ReactNode;
  style?: React.CSSProperties;
}> = ({ label, width, children, style }) => (
  <div
    style={{
      width,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 14,
      ...style,
    }}
  >
    <div
      style={{
        position: "relative",
        width,
        height: width,
        borderRadius: "50%",
        border: `11px solid ${C.tornEdgeWhite}`,
        backgroundColor: C.paperWarm,
        boxShadow: "0 14px 30px rgba(21, 37, 53, 0.2)",
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
        fontSize: 22,
        fontWeight: 700,
        color: C.inkNavy,
        backgroundColor: C.highlightYellow,
        padding: "4px 14px",
        transform: "rotate(-1deg)",
      }}
    >
      {label}
    </span>
  </div>
);

const Bacterium: React.FC<{ style?: React.CSSProperties }> = ({ style }) => (
  <svg
    viewBox="0 0 300 200"
    style={{ width: 210, height: 140, overflow: "visible", ...style }}
  >
    <g fill="none" stroke={C.inkNavy} strokeLinecap="round" strokeWidth="7">
      <path d="M45 55 25 35M38 85 10 78M43 120 18 137M70 145 58 174M108 151 105 182M148 150 157 180M190 144 208 170M226 125 253 143M241 91 276 91M232 62 260 40" />
    </g>
    <rect
      x="42"
      y="35"
      width="205"
      height="112"
      rx="56"
      fill={C.retroRed}
      stroke={C.inkNavy}
      strokeWidth="8"
    />
    <path
      d="M78 93c18-28 34 28 52 0s34 28 52 0 31 16 43 2"
      fill="none"
      stroke={C.highlightYellow}
      strokeLinecap="round"
      strokeWidth="9"
    />
    <g fill={C.paperLight}>
      <circle cx="87" cy="68" r="5" />
      <circle cx="132" cy="122" r="5" />
      <circle cx="193" cy="69" r="5" />
      <circle cx="215" cy="116" r="4" />
    </g>
  </svg>
);

const Coffee: React.FC<{ steam: number }> = ({ steam }) => (
  <svg viewBox="0 0 220 220" width="190" height="190">
    <g
      fill="none"
      stroke={C.retroRed}
      strokeLinecap="round"
      strokeWidth="8"
      opacity={steam}
    >
      <path d="M75 91c-18-22 18-28 0-50M110 91c-18-22 18-28 0-50M145 91c-18-22 18-28 0-50" />
    </g>
    <path
      d="M48 91h120v62a25 25 0 0 1-25 25H73a25 25 0 0 1-25-25z"
      fill={C.paperLight}
      stroke={C.inkNavy}
      strokeWidth="8"
    />
    <path
      d="M168 105h18a23 23 0 0 1 0 46h-18"
      fill="none"
      stroke={C.inkNavy}
      strokeWidth="8"
    />
    <path d="M58 119h99" stroke={C.badgeGold} strokeWidth="11" />
  </svg>
);

const Act7GrowthShot: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const split = spring({
    frame: frame - 38,
    fps,
    config: VOX_TOKENS.spring.paperSnap,
  });
  const childOpacity = interpolate(frame, [35, 55], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const spread = interpolate(split, [0, 1], [0, 38]);

  return (
    <AbsoluteFill>
      <ActHeader act="ACT 07" shot="7-01" title="万物里的 e" />
      <div
        style={{
          position: "absolute",
          top: 270,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          gap: 44,
        }}
      >
        <SceneWindow label="细菌分裂" width={330}>
          <Bacterium
            style={{
              position: "absolute",
              opacity: 1 - childOpacity,
              transform: `scale(${interpolate(split, [0, 1], [1, 0.75])})`,
            }}
          />
          <Bacterium
            style={{
              position: "absolute",
              width: 138,
              height: 92,
              opacity: childOpacity,
              transform: `translateX(${-spread}px)`,
            }}
          />
          <Bacterium
            style={{
              position: "absolute",
              width: 138,
              height: 92,
              opacity: childOpacity,
              transform: `translateX(${spread}px)`,
            }}
          />
        </SceneWindow>
        <SceneWindow label="放射性衰变" width={330}>
          <svg viewBox="0 0 220 220" width="205" height="205">
            <circle
              cx="110"
              cy="110"
              r="77"
              fill="none"
              stroke={C.inkNavy}
              strokeOpacity="0.35"
              strokeWidth="4"
              strokeDasharray="8 10"
            />
            <circle cx="110" cy="110" r="52" fill={C.retroRed} />
            <circle cx="91" cy="99" r="17" fill={C.highlightYellow} />
            <circle cx="124" cy="96" r="17" fill={C.textWhite} />
            <circle cx="113" cy="127" r="17" fill={C.highlightYellow} />
            <circle cx="110" cy="110" r="8" fill={C.inkNavy} />
          </svg>
        </SceneWindow>
        <SceneWindow label="咖啡放凉" width={330}>
          <Coffee
            steam={interpolate(frame, [0, 148], [1, 0.25], {
              extrapolateRight: "clamp",
            })}
          />
        </SceneWindow>
      </div>
    </AbsoluteFill>
  );
};

const Act7ExamplesShot: React.FC = () => {
  const frame = useCurrentFrame();
  const cooling = interpolate(frame, [0, 138], [1, 0.2], {
    extrapolateRight: "clamp",
  });
  const growth = interpolate(frame, [0, 100], [0.35, 1], {
    extrapolateRight: "clamp",
  });
  const charge = interpolate(frame, [0, 138], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill>
      <ActHeader act="ACT 07" shot="7-02" title="同一句话，出现在不同尺度" />
      <div
        style={{
          position: "absolute",
          top: 285,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          gap: 18,
        }}
      >
        <SceneWindow label="咖啡散热" width={280}>
          <Coffee steam={cooling} />
        </SceneWindow>
        <SceneWindow label="误差分布" width={280}>
          <svg viewBox="0 0 220 220" width="190" height="190">
            <path
              d="M34 174h154M48 180V45"
              fill="none"
              stroke={C.inkNavy}
              strokeWidth="7"
            />
            <path
              d="M49 160c28 0 25-97 61-97s33 97 61 97"
              fill="none"
              stroke={C.retroRed}
              strokeWidth="11"
              strokeLinecap="round"
            />
            <path d="M110 63v111" stroke={C.highlightYellow} strokeWidth="8" />
          </svg>
        </SceneWindow>
        <SceneWindow label="人口增长" width={280}>
          <svg viewBox="0 0 220 220" width="190" height="190">
            <path
              d="M34 180h154M48 180V42"
              fill="none"
              stroke={C.inkNavy}
              strokeWidth="7"
            />
            {[45, 83, 125].map((height, index) => (
              <rect
                key={height}
                x={67 + index * 44}
                y={180 - height * growth}
                width="29"
                height={height * growth}
                fill={[C.badgeGold, C.retroRed, C.vintageTeal][index]}
              />
            ))}
          </svg>
        </SceneWindow>
        <SceneWindow label="电容充电" width={280}>
          <svg viewBox="0 0 220 220" width="190" height="190">
            <path
              d="M48 110h46M126 110h46"
              stroke={C.inkNavy}
              strokeWidth="8"
            />
            <path
              d="M96 53v114M126 53v114"
              stroke={C.retroRed}
              strokeWidth="13"
            />
            <circle
              cx={52 + 115 * charge}
              cy="110"
              r="15"
              fill={C.highlightYellow}
              stroke={C.inkNavy}
              strokeWidth="5"
            />
            <path
              d="M52 68v-18M43 59h18M168 68v-18M159 59h18"
              stroke={C.badgeGold}
              strokeWidth="6"
            />
          </svg>
        </SceneWindow>
      </div>
    </AbsoluteFill>
  );
};

const Graph: React.FC<{ sign: 1 | -1; frame: number }> = ({ sign, frame }) => {
  const height = 190;
  const samples = 32;
  const progress = interpolate(frame, [0, 90], [0.12, 1], {
    extrapolateRight: "clamp",
  });
  const points = Array.from({ length: samples + 1 }, (_, index) => {
    const x = (index / samples) * 400;
    const t = (index / samples) * 3 * progress;
    const yValue = sign > 0 ? Math.exp(t) : Math.exp(-t);
    const y = height - yValue * 23;
    return `${index === 0 ? "M" : "L"} ${x} ${y}`;
  }).join(" ");

  return (
    <svg viewBox={`0 0 420 ${height + 20}`} width="420" height={height + 20}>
      <path
        d={`M20 0v${height}h390`}
        fill="none"
        stroke={C.inkNavy}
        strokeWidth="5"
      />
      <path
        d={points}
        transform="translate(20, 0)"
        fill="none"
        stroke={sign > 0 ? C.retroRed : C.vintageTeal}
        strokeWidth="9"
        strokeLinecap="round"
      />
      <text
        x="390"
        y="205"
        textAnchor="end"
        fill={C.inkNavy}
        fontFamily={VOX_TOKENS.fonts.typewriterMono}
        fontSize="18"
      >
        t
      </text>
    </svg>
  );
};

const Act7KShot: React.FC = () => {
  const frame = useCurrentFrame();
  const k = frame < 44 ? 1 : -1;
  const knob = interpolate(frame % 90, [0, 45, 89], [330, 510, 330]);

  return (
    <AbsoluteFill>
      <ActHeader act="ACT 07" shot="7-04" title="k 决定方向" />
      <div
        style={{
          position: "absolute",
          top: 260,
          left: 0,
          right: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 28,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 46 }}>
          <PaperCard
            accent={C.retroRed}
            style={{ textAlign: "center", width: 560 }}
          >
            <div
              style={{
                font: `700 28px ${VOX_TOKENS.fonts.body}`,
                color: C.textMuted,
              }}
            >
              {k > 0 ? "k > 0 · 增长" : "k < 0 · 衰减"}
            </div>
            <Graph sign={k} frame={frame} />
          </PaperCard>
          <div
            style={{
              fontFamily: VOX_TOKENS.fonts.editorialSerif,
              fontWeight: 900,
              fontSize: 86,
              color: C.inkNavy,
            }}
          >
            k
          </div>
        </div>
        <div style={{ width: 560 }}>
          <div
            style={{
              height: 8,
              backgroundColor: C.inkNavy,
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                left: knob,
                top: -15,
                width: 36,
                height: 36,
                borderRadius: "50%",
                backgroundColor: C.highlightYellow,
                border: `4px solid ${C.inkNavy}`,
                transform: "translateX(-50%)",
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: 16,
              color: C.textMuted,
              font: `20px ${VOX_TOKENS.fonts.typewriterMono}`,
            }}
          >
            <span>衰减　−</span>
            <span>增长　+</span>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

const Act7FeedbackShot: React.FC = () => {
  const frame = useCurrentFrame();
  const labels = ["现在的数量", "变化速度", "下一刻", "新的数量"];
  const colors = [C.badgeGold, C.retroRed, C.vintageTeal, C.inkNavy];
  const points = [
    [960, 320],
    [1320, 520],
    [960, 720],
    [600, 520],
  ];
  const pulse = interpolate(frame % 45, [0, 22, 44], [0.82, 1.08, 0.82]);

  return (
    <AbsoluteFill>
      <ActHeader act="ACT 07" shot="7-05" title="现在，决定下一刻" />
      <svg viewBox="0 0 1920 900" style={{ position: "absolute", inset: 0 }}>
        <defs>
          <marker
            id="feedback-arrow"
            markerWidth="12"
            markerHeight="12"
            refX="8"
            refY="6"
            orient="auto"
          >
            <path d="M0 0 12 6 0 12z" fill={C.inkNavy} />
          </marker>
        </defs>
        {points.map(([x, y], index) => {
          const [nextX, nextY] = points[(index + 1) % points.length];
          return (
            <path
              key={index}
              d={`M ${x} ${y} Q ${(x + nextX) / 2 + 20} ${(y + nextY) / 2} ${nextX} ${nextY}`}
              fill="none"
              stroke={C.inkNavy}
              strokeWidth="6"
              strokeDasharray="11 12"
              markerEnd="url(#feedback-arrow)"
            />
          );
        })}
        {points.map(([x, y], index) => (
          <g key={labels[index]}>
            <circle
              cx={x}
              cy={y}
              r={74 * pulse}
              fill={colors[index]}
              stroke={C.inkNavy}
              strokeWidth="6"
            />
            <text
              x={x}
              y={y + 8}
              textAnchor="middle"
              fill={index === 2 ? C.textWhite : C.inkNavy}
              fontFamily={VOX_TOKENS.fonts.body}
              fontWeight="700"
              fontSize="23"
            >
              {labels[index]}
            </text>
          </g>
        ))}
      </svg>
      <div
        style={{
          position: "absolute",
          bottom: 140,
          left: 0,
          right: 0,
          textAlign: "center",
          color: C.inkNavy,
          font: `800 32px ${VOX_TOKENS.fonts.editorialSerif}`,
        }}
      >
        一个从利息里冒出来的数，成了自我驱动过程的标准写法
      </div>
    </AbsoluteFill>
  );
};

const Act7DisciplinesShot: React.FC = () => {
  const disciplines = [
    { title: "物理", symbol: "F", color: C.inkNavy },
    { title: "化学", symbol: "H₂O", color: C.vintageTeal },
    { title: "生物", symbol: "✳", color: C.retroRed },
    { title: "金融", symbol: "₿", color: C.badgeGold },
  ];

  return (
    <AbsoluteFill>
      <ActHeader act="ACT 07" shot="7-06" title="四门学科，一个结构" />
      <div
        style={{
          position: "absolute",
          top: 300,
          left: 180,
          right: 180,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {disciplines.map((item, index) => (
          <React.Fragment key={item.title}>
            <PaperCard
              accent={item.color}
              style={{ width: 280, height: 210, textAlign: "center" }}
            >
              <div
                style={{
                  font: `900 55px ${VOX_TOKENS.fonts.heavyTitle}`,
                  color: item.color,
                  marginBottom: 8,
                }}
              >
                {item.symbol}
              </div>
              <div
                style={{
                  font: `700 28px ${VOX_TOKENS.fonts.body}`,
                  color: C.inkNavy,
                }}
              >
                {item.title}
              </div>
            </PaperCard>
            {index < disciplines.length - 1 && (
              <div
                style={{
                  font: `700 36px ${VOX_TOKENS.fonts.editorialSerif}`,
                  color: C.retroRed,
                }}
              >
                ×
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
      <div
        style={{
          position: "absolute",
          top: 670,
          left: 0,
          right: 0,
          textAlign: "center",
          color: C.textMuted,
          font: `28px ${VOX_TOKENS.fonts.editorialSerif}`,
        }}
      >
        不是商量好的，而是碰上了同一种结构
      </div>
    </AbsoluteFill>
  );
};

const Act7NowNextShot: React.FC<{ shot: string; title: string }> = ({
  shot,
  title,
}) => {
  const frame = useCurrentFrame();
  const reveal = interpolate(frame, [0, 45], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill>
      <ActHeader act="ACT 07" shot={shot} title={title} />
      <div
        style={{
          position: "absolute",
          top: 330,
          left: 0,
          right: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 42,
        }}
      >
        <PaperCard
          accent={C.inkNavy}
          style={{ width: 430, textAlign: "center" }}
        >
          <div
            style={{
              font: `900 74px ${VOX_TOKENS.fonts.heavyTitle}`,
              color: C.inkNavy,
            }}
          >
            现在
          </div>
        </PaperCard>
        <div
          style={{
            width: 240,
            height: 8,
            backgroundColor: C.retroRed,
            transform: `scaleX(${reveal})`,
            transformOrigin: "left",
          }}
        />
        <PaperCard
          accent={C.highlightYellow}
          style={{ width: 430, textAlign: "center" }}
        >
          <div
            style={{
              font: `900 74px ${VOX_TOKENS.fonts.heavyTitle}`,
              color: C.inkNavy,
            }}
          >
            下一刻
          </div>
        </PaperCard>
      </div>
      <div
        style={{
          position: "absolute",
          top: 670,
          width: "100%",
          textAlign: "center",
          color: C.textMuted,
          font: `26px ${VOX_TOKENS.fonts.editorialSerif}`,
        }}
      >
        物理　·　化学　·　生物　·　金融
      </div>
    </AbsoluteFill>
  );
};

const ComplexPlane: React.FC<{
  angle: number;
  showHalfTurn?: boolean;
  labelPoint?: string;
}> = ({ angle, showHalfTurn = false, labelPoint = "" }) => {
  const center = 330;
  const radius = 205;
  const pointX = center + Math.cos(angle) * radius;
  const pointY = center - Math.sin(angle) * radius;
  const arcEndX = center + Math.cos(angle) * 86;
  const arcEndY = center - Math.sin(angle) * 86;
  const largeArc = angle > Math.PI ? 1 : 0;
  const pathEnd = showHalfTurn
    ? `A 205 205 0 ${largeArc} 0 ${pointX} ${pointY}`
    : "";

  return (
    <svg viewBox="0 0 660 660" width="620" height="620">
      <path
        d="M70 330h520M330 590V70"
        fill="none"
        stroke={C.inkNavy}
        strokeWidth="5"
      />
      <circle
        cx={center}
        cy={center}
        r={radius}
        fill="none"
        stroke={C.inkNavy}
        strokeOpacity="0.22"
        strokeWidth="3"
        strokeDasharray="8 9"
      />
      <path
        d={`M${center} ${center} L${center + radius} ${center} ${pathEnd}`}
        fill="none"
        stroke={C.retroRed}
        strokeWidth="8"
        strokeLinecap="round"
      />
      <line
        x1={center}
        y1={center}
        x2={pointX}
        y2={pointY}
        stroke={C.retroRed}
        strokeWidth="6"
      />
      <circle
        cx={pointX}
        cy={pointY}
        r="18"
        fill={C.highlightYellow}
        stroke={C.inkNavy}
        strokeWidth="5"
      />
      <circle cx={center} cy={center} r="9" fill={C.inkNavy} />
      <text
        x="564"
        y="360"
        fill={C.inkNavy}
        fontSize="26"
        fontFamily={VOX_TOKENS.fonts.editorialSerif}
      >
        Re
      </text>
      <text
        x="342"
        y="86"
        fill={C.inkNavy}
        fontSize="26"
        fontFamily={VOX_TOKENS.fonts.editorialSerif}
      >
        Im
      </text>
      {labelPoint && (
        <text
          x={pointX + (angle > Math.PI / 2 ? -42 : 20)}
          y={pointY - 20}
          fill={C.inkNavy}
          fontSize="25"
          fontWeight="700"
          fontFamily={VOX_TOKENS.fonts.editorialSerif}
        >
          {labelPoint}
        </text>
      )}
      <text
        x="105"
        y="365"
        fill={C.inkNavy}
        fontSize="27"
        fontFamily={VOX_TOKENS.fonts.editorialSerif}
      >
        −1
      </text>
      <text
        x="528"
        y="365"
        fill={C.inkNavy}
        fontSize="27"
        fontFamily={VOX_TOKENS.fonts.editorialSerif}
      >
        1
      </text>
    </svg>
  );
};

const Act8RotationShot: React.FC<{
  shot: string;
  title: string;
  start: number;
  end: number;
  duration: number;
}> = ({ shot, title, start, end, duration }) => {
  const frame = useCurrentFrame();
  const angle = interpolate(frame, [0, duration], [start, end], {
    extrapolateRight: "clamp",
  });
  const isHalfTurn = end >= Math.PI;

  return (
    <AbsoluteFill>
      <ActHeader act="ACT 08" shot={shot} title={title} accent={C.retroRed} />
      <div
        style={{
          position: "absolute",
          top: 190,
          left: 220,
          right: 220,
          bottom: 80,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <ComplexPlane
          angle={angle}
          showHalfTurn={isHalfTurn}
          labelPoint={isHalfTurn ? "−1" : "eⁱᶿ"}
        />
        <PaperCard
          accent={C.highlightYellow}
          style={{ width: 520, textAlign: "center" }}
        >
          <div
            style={{
              font: `700 43px ${VOX_TOKENS.fonts.editorialSerif}`,
              color: C.inkNavy,
            }}
          >
            e<sup>iθ</sup> = cos θ + i sin θ
          </div>
          <div
            style={{
              marginTop: 22,
              color: C.textMuted,
              font: `24px ${VOX_TOKENS.fonts.body}`,
            }}
          >
            {isHalfTurn ? "θ = π　·　走完半圈" : "指数不再伸长，而是旋转"}
          </div>
        </PaperCard>
      </div>
    </AbsoluteFill>
  );
};

const EulerIdentityShot: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const stamp = spring({
    frame: frame - 30,
    fps,
    config: VOX_TOKENS.spring.punchy,
  });

  return (
    <AbsoluteFill>
      <ActHeader
        act="ACT 08"
        shot="8-05"
        title="五个常数，一条等式"
        accent={C.retroRed}
      />
      <div
        style={{
          position: "absolute",
          top: 330,
          left: 0,
          right: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 36,
        }}
      >
        <div
          style={{
            transform: `scale(${interpolate(stamp, [0, 1], [0.82, 1])}) rotate(-1deg)`,
            backgroundColor: C.highlightYellow,
            padding: "18px 46px 24px",
            boxShadow: "0 12px 0 rgba(21,37,53,0.18)",
            color: C.inkNavy,
            font: `900 76px ${VOX_TOKENS.fonts.editorialSerif}`,
          }}
        >
          e<sup>iπ</sup> + 1 = 0
        </div>
        <div
          style={{
            color: C.textMuted,
            font: `28px ${VOX_TOKENS.fonts.editorialSerif}`,
          }}
        >
          指数　·　旋转　·　加法　·　乘法
        </div>
      </div>
    </AbsoluteFill>
  );
};

const ConstantPortraitShot: React.FC<{ shot: string; title: string }> = ({
  shot,
  title,
}) => {
  const constants = [
    { value: "e", name: "增长", rotate: -5, color: C.retroRed },
    { value: "i", name: "虚数", rotate: 3, color: C.vintageTeal },
    { value: "π", name: "圆周", rotate: -2, color: C.badgeGold },
    { value: "1", name: "乘法单位", rotate: 4, color: C.inkNavy },
    { value: "0", name: "加法单位", rotate: -3, color: C.retroRed },
  ];

  return (
    <AbsoluteFill>
      <ActHeader act="ACT 08" shot={shot} title={title} accent={C.retroRed} />
      <div
        style={{
          position: "absolute",
          top: 300,
          left: 170,
          right: 170,
          display: "flex",
          justifyContent: "center",
          gap: 24,
        }}
      >
        {constants.map((constant) => (
          <div
            key={constant.value}
            style={{
              width: 250,
              height: 300,
              backgroundColor: C.paperLight,
              border: `3px solid ${C.inkNavy}`,
              borderTop: `12px solid ${constant.color}`,
              boxShadow: "8px 10px 0 rgba(21,37,53,0.16)",
              transform: `rotate(${constant.rotate}deg)`,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 24,
            }}
          >
            <span
              style={{
                font: `900 100px ${VOX_TOKENS.fonts.editorialSerif}`,
                color: constant.color,
              }}
            >
              {constant.value}
            </span>
            <span
              style={{
                font: `700 22px ${VOX_TOKENS.fonts.body}`,
                color: C.inkNavy,
              }}
            >
              {constant.name}
            </span>
          </div>
        ))}
      </div>
      <div
        style={{
          position: "absolute",
          top: 700,
          width: "100%",
          textAlign: "center",
          color: C.textMuted,
          font: `27px ${VOX_TOKENS.fonts.editorialSerif}`,
        }}
      >
        一张合影：从利息里来的数，与圆周率和虚数站在一起
      </div>
    </AbsoluteFill>
  );
};

const IdentityHandoffShot: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const flip = spring({
    frame: frame - 24,
    fps,
    config: VOX_TOKENS.spring.paperSnap,
  });

  return (
    <AbsoluteFill>
      <ActHeader
        act="ACT 08"
        shot="8-09"
        title="最后，补一张身份证"
        accent={C.retroRed}
      />
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: 270,
          width: 500,
          height: 300,
          transform: `translateX(-50%) rotateY(${interpolate(flip, [0, 1], [85, 0])}deg) rotate(-2deg)`,
          transformStyle: "preserve-3d",
          backgroundColor: C.paperWarm,
          border: `4px solid ${C.inkNavy}`,
          boxShadow: "14px 16px 0 rgba(21,37,53,0.18)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 32,
        }}
      >
        <div
          style={{
            font: `900 108px ${VOX_TOKENS.fonts.editorialSerif}`,
            color: C.retroRed,
          }}
        >
          e
        </div>
        <div
          style={{
            font: `700 27px ${VOX_TOKENS.fonts.editorialSerif}`,
            color: C.inkNavy,
          }}
        >
          身份证明
          <br />
          无理数？超越数？
        </div>
      </div>
    </AbsoluteFill>
  );
};

const FractionProofShot: React.FC<{ shot: string; year: string }> = ({
  shot,
  year,
}) => (
  <AbsoluteFill>
    <ActHeader
      act="ACT 09"
      shot={shot}
      title={`${year} · 连分数`}
      accent={C.vintageTeal}
    />
    <div
      style={{
        position: "absolute",
        top: 300,
        left: 230,
        right: 230,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <PaperCard
        accent={C.badgeGold}
        style={{ width: 560, textAlign: "center" }}
      >
        <div
          style={{
            color: C.textMuted,
            font: `20px ${VOX_TOKENS.fonts.typewriterMono}`,
          }}
        >
          欧拉的简单连分数
        </div>
        <div
          style={{
            marginTop: 20,
            color: C.inkNavy,
            font: `50px ${VOX_TOKENS.fonts.editorialSerif}`,
          }}
        >
          e = [2; 1, 2, 1, 1, 4, 1, 1, 6, ···]
        </div>
      </PaperCard>
      <div
        style={{
          color: C.inkNavy,
          font: `900 48px ${VOX_TOKENS.fonts.editorialSerif}`,
          lineHeight: 1.7,
          textAlign: "center",
        }}
      >
        e ∉ ℚ
        <br />
        <span style={{ color: C.retroRed, fontSize: 30 }}>不是整数之比</span>
      </div>
    </div>
  </AbsoluteFill>
);

const HermiteShot: React.FC<{ shot: string }> = ({ shot }) => (
  <AbsoluteFill>
    <ActHeader
      act="ACT 09"
      shot={shot}
      title="1873 · 埃尔米特"
      accent={C.vintageTeal}
    />
    <div
      style={{
        position: "absolute",
        top: 285,
        left: 0,
        right: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 70,
      }}
    >
      <div
        style={{
          width: 280,
          height: 370,
          backgroundColor: C.paperWarm,
          border: `12px solid ${C.tornEdgeWhite}`,
          boxShadow: "0 16px 30px rgba(21,37,53,0.2)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            font: `900 120px ${VOX_TOKENS.fonts.editorialSerif}`,
            color: C.inkNavy,
          }}
        >
          H
        </div>
        <div
          style={{
            font: `700 25px ${VOX_TOKENS.fonts.editorialSerif}`,
            color: C.textMuted,
          }}
        >
          CHARLES HERMITE
        </div>
        <div
          style={{
            marginTop: 12,
            font: `18px ${VOX_TOKENS.fonts.typewriterMono}`,
            color: C.retroRed,
          }}
        >
          1822 — 1901
        </div>
      </div>
      <PaperCard accent={C.retroRed} style={{ width: 620 }}>
        <div
          style={{ color: C.textMuted, font: `23px ${VOX_TOKENS.fonts.body}` }}
        >
          e 不是任何非零整系数多项式的根
        </div>
        <div
          style={{
            marginTop: 26,
            color: C.inkNavy,
            font: `900 56px ${VOX_TOKENS.fonts.editorialSerif}`,
          }}
        >
          e 是超越数
        </div>
        <div
          style={{
            marginTop: 16,
            color: C.retroRed,
            font: `30px ${VOX_TOKENS.fonts.editorialSerif}`,
          }}
        >
          代数方程无法“圈住”它
        </div>
      </PaperCard>
    </div>
  </AbsoluteFill>
);

const DigitsShot: React.FC<{ shot: string }> = ({ shot }) => {
  const frame = useCurrentFrame();
  const digits = "2.7182818284590452353602874713527";
  const offset = Math.floor(frame / 5) % 8;

  return (
    <AbsoluteFill>
      <ActHeader
        act="ACT 09"
        shot={shot}
        title="小数点后，无穷无尽"
        accent={C.vintageTeal}
      />
      <div
        style={{
          position: "absolute",
          top: 350,
          left: 180,
          right: 180,
          overflow: "hidden",
          height: 220,
          backgroundColor: C.inkNavy,
          border: `10px solid ${C.tornEdgeWhite}`,
          boxShadow: "0 16px 32px rgba(21,37,53,0.2)",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 52,
            left: 80 - offset * 31,
            whiteSpace: "nowrap",
            color: C.highlightYellow,
            font: `700 70px ${VOX_TOKENS.fonts.typewriterMono}`,
            letterSpacing: "0.08em",
          }}
        >
          {digits.repeat(4)}
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: 630,
          width: "100%",
          textAlign: "center",
          color: C.textMuted,
          font: `27px ${VOX_TOKENS.fonts.editorialSerif}`,
        }}
      >
        每一位之后，还有下一位
      </div>
    </AbsoluteFill>
  );
};

const UnsolvedQuestionShot: React.FC<{ shot: string }> = ({ shot }) => {
  const frame = useCurrentFrame();
  const glow = interpolate(frame % 80, [0, 40, 79], [0.7, 1, 0.7]);

  return (
    <AbsoluteFill>
      <ActHeader
        act="ACT 09"
        shot={shot}
        title="留给未来的谜题"
        accent={C.vintageTeal}
      />
      <div
        style={{
          position: "absolute",
          top: 300,
          left: 0,
          right: 0,
          textAlign: "center",
        }}
      >
        <div
          style={{
            color: C.inkNavy,
            font: `900 100px ${VOX_TOKENS.fonts.editorialSerif}`,
            textShadow: `0 0 ${20 * glow}px ${C.badgeGold}`,
          }}
        >
          e + π = ?
        </div>
        <div
          style={{
            margin: "28px auto 0",
            width: 580,
            borderBottom: `5px dashed ${C.retroRed}`,
          }}
        />
        <div
          style={{
            marginTop: 26,
            color: C.textMuted,
            font: `30px ${VOX_TOKENS.fonts.body}`,
          }}
        >
          它是无理数吗？至今无人能证明
        </div>
      </div>
    </AbsoluteFill>
  );
};

const HistoryRewindShot: React.FC<{ shot: string }> = ({ shot }) => {
  const frame = useCurrentFrame();
  const years = ["1748", "1731", "1690", "1683", "1618"];
  const progress = interpolate(frame, [0, 140], [0, 4], {
    extrapolateRight: "clamp",
  });
  const active = Math.floor(progress);

  return (
    <AbsoluteFill>
      <ActHeader
        act="ACT 10"
        shot={shot}
        title="回头看这一路"
        accent={C.highlightYellow}
      />
      <div
        style={{
          position: "absolute",
          top: 370,
          left: 140,
          right: 140,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {years.map((year, index) => (
          <React.Fragment key={year}>
            <div
              style={{
                width: 235,
                textAlign: "center",
                transform: `scale(${index === active ? 1.18 : 1})`,
                opacity: index <= active ? 1 : 0.35,
              }}
            >
              <div
                style={{
                  width: 104,
                  height: 104,
                  borderRadius: "50%",
                  margin: "0 auto 15px",
                  backgroundColor:
                    index === active ? C.highlightYellow : C.paperWarm,
                  border: `5px solid ${C.inkNavy}`,
                  display: "grid",
                  placeItems: "center",
                  color: C.inkNavy,
                  font: `800 28px ${VOX_TOKENS.fonts.typewriterMono}`,
                }}
              >
                {year}
              </div>
            </div>
            {index < years.length - 1 && (
              <div
                style={{
                  color: C.retroRed,
                  font: `900 40px ${VOX_TOKENS.fonts.body}`,
                }}
              >
                ←
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
      <div
        style={{
          position: "absolute",
          top: 600,
          width: "100%",
          textAlign: "center",
          color: C.textMuted,
          font: `26px ${VOX_TOKENS.fonts.editorialSerif}`,
        }}
      >
        对数表　·　利息　·　区间　·　一个字母
      </div>
    </AbsoluteFill>
  );
};

const BlankTruthShot: React.FC<{ shot: string }> = ({ shot }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const appear = spring({
    frame: frame - 12,
    fps,
    config: VOX_TOKENS.spring.paperSnap,
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: C.paperLight,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 42,
          left: 110,
          color: C.textMuted,
          font: `17px ${VOX_TOKENS.fonts.typewriterMono}`,
        }}
      >
        ACT 10　·　{shot}
      </div>
      <div
        style={{
          opacity: appear,
          transform: `translateY(${interpolate(appear, [0, 1], [24, 0])}px)`,
          color: C.inkNavy,
          font: `900 78px ${VOX_TOKENS.fonts.editorialSerif}`,
          textAlign: "center",
        }}
      >
        没有人设计过 e
      </div>
    </AbsoluteFill>
  );
};

const ClosingLineShot: React.FC<{ shot: string }> = ({ shot }) => {
  return (
    <AbsoluteFill>
      <ActHeader
        act="ACT 10"
        shot={shot}
        title="现在，连向下一刻"
        accent={C.highlightYellow}
      />
      <div
        style={{
          position: "absolute",
          top: 310,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 38,
        }}
      >
        <PaperCard
          accent={C.retroRed}
          style={{ width: 450, textAlign: "center" }}
        >
          <div
            style={{
              color: C.inkNavy,
              font: `900 62px ${VOX_TOKENS.fonts.heavyTitle}`,
            }}
          >
            现在
          </div>
        </PaperCard>
        <div
          style={{
            color: C.retroRed,
            font: `900 56px ${VOX_TOKENS.fonts.body}`,
          }}
        >
          →
        </div>
        <PaperCard
          accent={C.highlightYellow}
          style={{ width: 450, textAlign: "center" }}
        >
          <div
            style={{
              color: C.inkNavy,
              font: `900 62px ${VOX_TOKENS.fonts.heavyTitle}`,
            }}
          >
            下一刻
          </div>
        </PaperCard>
      </div>
      <div
        style={{
          position: "absolute",
          top: 625,
          left: 0,
          right: 0,
          textAlign: "center",
          color: C.textMuted,
          font: `24px ${VOX_TOKENS.fonts.editorialSerif}`,
        }}
      >
        时间切得越细，它就越常出现
      </div>
    </AbsoluteFill>
  );
};

const Act7BridgeComplexShot: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const prog = spring({
    frame: frame - 10,
    fps,
    config: VOX_TOKENS.spring.cameraSmooth,
  });
  const angle = interpolate(prog, [0, 1], [0, Math.PI / 3]);

  return (
    <AbsoluteFill>
      <ActHeader act="ACT 07" shot="7-09" title="把镜头转向复平面" />
      <div
        style={{
          position: "absolute",
          top: 240,
          left: 0,
          right: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 56,
        }}
      >
        <PaperCard accent={C.inkNavy} style={{ padding: "36px 48px", textAlign: "center" }}>
          <div style={{ color: C.inkNavy, font: `900 72px ${VOX_TOKENS.fonts.editorialSerif}` }}>
            eˣ <span style={{ color: C.retroRed, margin: "0 18px" }}>→</span> eⁱᶿ
          </div>
          <div
            style={{
              marginTop: 14,
              color: C.textMuted,
              font: `700 20px ${VOX_TOKENS.fonts.typewriterMono}`,
              letterSpacing: "0.08em",
            }}
          >
            REAL AXIS ➔ COMPLEX PLANE
          </div>
        </PaperCard>
        <ComplexPlane angle={angle} labelPoint="eⁱᶿ" />
      </div>
    </AbsoluteFill>
  );
};

const Act8SubShot: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const arrow = spring({ frame: frame - 15, fps, config: VOX_TOKENS.spring.punchy });

  return (
    <AbsoluteFill>
      <ActHeader act="ACT 08" shot="8-01" title="把 x 换成 iθ" accent={C.retroRed} />
      <div
        style={{
          position: "absolute",
          top: 300,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <PaperCard accent={C.retroRed} style={{ padding: "48px 86px", textAlign: "center" }}>
          <div style={{ color: C.inkNavy, font: `900 84px ${VOX_TOKENS.fonts.editorialSerif}` }}>
            eˣ
            <span
              style={{
                display: "inline-block",
                color: C.retroRed,
                margin: "0 32px",
                transform: `scale(${arrow})`,
              }}
            >
              →
            </span>
            eⁱᶿ
          </div>
          <div
            style={{
              marginTop: 18,
              color: C.textMuted,
              font: `700 20px ${VOX_TOKENS.fonts.typewriterMono}`,
              letterSpacing: "0.1em",
            }}
          >
            IMAGINARY EXPONENT // 虚数次幂
          </div>
        </PaperCard>
      </div>
    </AbsoluteFill>
  );
};

const Act8OneLineShot: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const tags = ["指数", "旋转", "加法", "乘法", "零"];

  return (
    <AbsoluteFill>
      <ActHeader act="ACT 08" shot="8-07" title="运算，被收在一行字里" accent={C.retroRed} />
      <div
        style={{
          position: "absolute",
          top: 280,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <PaperCard accent={C.highlightYellow} style={{ padding: "46px 76px", textAlign: "center" }}>
          <div style={{ color: C.inkNavy, font: `900 82px ${VOX_TOKENS.fonts.editorialSerif}` }}>
            e<sup>iπ</sup> + 1 = 0
          </div>
          <div style={{ marginTop: 28, display: "flex", justifyContent: "center", gap: 14 }}>
            {tags.map((tag, i) => {
              const s = spring({
                frame: frame - 12 - i * 6,
                fps,
                config: VOX_TOKENS.spring.punchy,
              });
              return (
                <span
                  key={tag}
                  style={{
                    backgroundColor: i === 0 ? C.highlightYellow : C.paperWarm,
                    border: `2px solid ${C.inkNavy}`,
                    color: C.inkNavy,
                    font: `700 22px ${VOX_TOKENS.fonts.body}`,
                    padding: "6px 16px",
                    transform: `scale(${s})`,
                    opacity: s,
                  }}
                >
                  {tag}
                </span>
              );
            })}
          </div>
        </PaperCard>
      </div>
    </AbsoluteFill>
  );
};

const Act9HomeworkShot: React.FC = () => (
  <AbsoluteFill>
    <ActHeader act="ACT 09" shot="9-07" title="还在给数学家留作业" accent={C.vintageTeal} />
    <div
      style={{
        position: "absolute",
        top: 300,
        left: 0,
        right: 0,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <PaperCard accent={C.vintageTeal} style={{ padding: "48px 72px", textAlign: "center" }}>
        <div
          style={{
            color: C.retroRed,
            font: `800 22px ${VOX_TOKENS.fonts.typewriterMono}`,
            letterSpacing: "0.1em",
            marginBottom: 14,
          }}
        >
          OPEN PROBLEM // e + π ∈ ℝ \ ℚ ?
        </div>
        <div style={{ color: C.inkNavy, font: `900 56px ${VOX_TOKENS.fonts.editorialSerif}` }}>
          三百多年前的问题，仍未结束
        </div>
      </PaperCard>
    </div>
  </AbsoluteFill>
);

const FinalEncounterShot: React.FC = () => {
  const frame = useCurrentFrame();
  const fadeOut = interpolate(frame, [96, 114], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        opacity: fadeOut,
      }}
    >
      <VoxTitle
        title="不是发明，是撞见。"
        subtitle="ACT 10 · 全片收束"
        fontSize={104}
        accentBarColor={C.highlightYellow}
      />
    </AbsoluteFill>
  );
};

export const Part3: React.FC = () => (
  <AbsoluteFill>
    <PaperBackground showGrid={true} gridSize={46} />

    {/* 右上角统一半色调网点角标装饰（与 Part 1/2 保持一致的报纸拼贴质感） */}
    <div
      style={{
        position: "absolute",
        top: -60,
        right: -40,
        width: 440,
        height: 220,
        opacity: 0.22,
        pointerEvents: "none",
        zIndex: 1,
      }}
    >
      <HalftoneLayer
        color={C.retroRed}
        dotSize={7}
        rotation={-10}
        style={{ width: "100%", height: "100%" }}
      />
    </div>

    <Sequence from={0} durationInFrames={1153} name="Act 7 - All in Nature">
      <Sequence
        from={0}
        durationInFrames={148}
        name="7-01 Six scenes, first three"
      >
        <Act7GrowthShot />
      </Sequence>
      <Sequence
        from={148}
        durationInFrames={138}
        name="7-02 Six scenes, next three"
      >
        <Act7ExamplesShot />
      </Sequence>
      <Sequence
        from={286}
        durationInFrames={74}
        name="7-03 Change depends on now"
      >
        <AbsoluteFill>
          <ActHeader act="ACT 07" shot="7-03" title="同一条规律" />
          <div
            style={{
              position: "absolute",
              top: 320,
              left: 0,
              right: 0,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <PaperCard accent={C.highlightYellow} style={{ padding: "42px 64px", textAlign: "center" }}>
              <HighlighterText entryFrame={5} fontSize={54}>
                变化速度，取决于现在有多少
              </HighlighterText>
              <div
                style={{
                  marginTop: 18,
                  color: C.textMuted,
                  font: `700 19px ${VOX_TOKENS.fonts.typewriterMono}`,
                  letterSpacing: "0.08em",
                }}
              >
                RATE OF CHANGE ∝ CURRENT AMOUNT
              </div>
            </PaperCard>
          </div>
        </AbsoluteFill>
      </Sequence>
      <Sequence
        from={360}
        durationInFrames={131}
        name="7-04 Universal equation"
      >
        <AbsoluteFill>
          <ActHeader act="ACT 07" shot="7-04" title="一个通用模板" />
          <div
            style={{
              position: "absolute",
              top: 300,
              left: 0,
              right: 0,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <PaperCard accent={C.retroRed} style={{ padding: "44px 76px", textAlign: "center" }}>
              <HighlighterText entryFrame={8} fontSize={80}>
                y(t) = y₀ · eᵏᵗ
              </HighlighterText>
              <div
                style={{
                  marginTop: 28,
                  color: C.textMuted,
                  font: `700 24px ${VOX_TOKENS.fonts.body}`,
                }}
              >
                初始值 × 指数变化
              </div>
            </PaperCard>
          </div>
        </AbsoluteFill>
      </Sequence>
      <Sequence
        from={491}
        durationInFrames={95}
        name="7-05 Positive and negative k"
      >
        <Act7KShot />
      </Sequence>
      <Sequence
        from={586}
        durationInFrames={160}
        name="7-06 Self-driven feedback"
      >
        <Act7FeedbackShot />
      </Sequence>
      <Sequence from={746} durationInFrames={110} name="7-07 Four disciplines">
        <Act7DisciplinesShot />
      </Sequence>
      <Sequence
        from={856}
        durationInFrames={150}
        name="7-08 Now determines next"
      >
        <Act7NowNextShot shot="7-08" title="共同的结构：现在" />
      </Sequence>
      <Sequence
        from={1006}
        durationInFrames={147}
        name="7-09 Bridge to complex plane"
      >
        <Act7BridgeComplexShot />
      </Sequence>
    </Sequence>

    <Sequence
      from={1153}
      durationInFrames={899}
      name="Act 8 - Euler's Identity"
    >
      <Sequence
        from={0}
        durationInFrames={99}
        name="8-01 Replace x with i theta"
      >
        <Act8SubShot />
      </Sequence>
      <Sequence
        from={99}
        durationInFrames={97}
        name="8-02 Exponential becomes rotation"
      >
        <Act8RotationShot
          shot="8-02"
          title="不再变大，而是旋转"
          start={0}
          end={Math.PI / 2}
          duration={97}
        />
      </Sequence>
      <Sequence
        from={196}
        durationInFrames={49}
        name="8-03 Walk the unit circle"
      >
        <Act8RotationShot
          shot="8-03"
          title="虚数次幂，绕单位圆走路"
          start={Math.PI / 2}
          end={Math.PI}
          duration={49}
        />
      </Sequence>
      <Sequence
        from={245}
        durationInFrames={99}
        name="8-04 Half turn lands on negative one"
      >
        <Act8RotationShot
          shot="8-04"
          title="走满半圈，落在 −1"
          start={0}
          end={Math.PI}
          duration={99}
        />
      </Sequence>
      <Sequence from={344} durationInFrames={93} name="8-05 Euler identity">
        <EulerIdentityShot />
      </Sequence>
      <Sequence from={437} durationInFrames={159} name="8-06 Five constants">
        <ConstantPortraitShot shot="8-06" title="五个最重要的常数" />
      </Sequence>
      <Sequence
        from={596}
        durationInFrames={118}
        name="8-07 Mathematics in one line"
      >
        <Act8OneLineShot />
      </Sequence>
      <Sequence
        from={714}
        durationInFrames={125}
        name="8-08 A portrait of constants"
      >
        <ConstantPortraitShot shot="8-08" title="一张跨越领域的合影" />
      </Sequence>
      <Sequence
        from={839}
        durationInFrames={60}
        name="8-09 Identity card transition"
      >
        <IdentityHandoffShot />
      </Sequence>
    </Sequence>

    <Sequence from={2052} durationInFrames={784} name="Act 9 - Identity">
      <Sequence from={0} durationInFrames={87} name="9-01 Euler around 1737">
        <FractionProofShot shot="9-01" year="1737" />
      </Sequence>
      <Sequence from={87} durationInFrames={140} name="9-02 Irrational number">
        <FractionProofShot shot="9-02" year="1737" />
      </Sequence>
      <Sequence from={227} durationInFrames={108} name="9-03 Hermite 1873">
        <HermiteShot shot="9-03" />
      </Sequence>
      <Sequence
        from={335}
        durationInFrames={130}
        name="9-04 Transcendental number"
      >
        <HermiteShot shot="9-04" />
      </Sequence>
      <Sequence from={465} durationInFrames={122} name="9-05 Infinite decimals">
        <DigitsShot shot="9-05" />
      </Sequence>
      <Sequence from={587} durationInFrames={135} name="9-06 The unsolved sum">
        <UnsolvedQuestionShot shot="9-06" />
      </Sequence>
      <Sequence
        from={722}
        durationInFrames={62}
        name="9-07 Still giving mathematicians homework"
      >
        <Act9HomeworkShot />
      </Sequence>
    </Sequence>

    <Sequence from={2836} durationInFrames={632} name="Act 10 - Encounter">
      <Sequence from={0} durationInFrames={146} name="10-01 Rewind history">
        <HistoryRewindShot shot="10-01" />
      </Sequence>
      <Sequence
        from={146}
        durationInFrames={110}
        name="10-02 The recurring number"
      >
        <AbsoluteFill>
          <ActHeader act="ACT 10" shot="10-02" title="账本、区间、字母" />
          <div
            style={{
              position: "absolute",
              top: 350,
              left: 0,
              right: 0,
              display: "flex",
              justifyContent: "center",
              gap: 34,
            }}
          >
            {["利息", "极限", "e"].map((item, index) => (
              <PaperCard
                key={item}
                accent={[C.badgeGold, C.retroRed, C.highlightYellow][index]}
                style={{ width: 330, textAlign: "center" }}
              >
                <div
                  style={{
                    color: C.inkNavy,
                    font: `900 54px ${VOX_TOKENS.fonts.editorialSerif}`,
                  }}
                >
                  {item}
                </div>
              </PaperCard>
            ))}
          </div>
        </AbsoluteFill>
      </Sequence>
      <Sequence from={256} durationInFrames={47} name="10-03 Nobody designed e">
        <BlankTruthShot shot="10-03" />
      </Sequence>
      <Sequence from={303} durationInFrames={80} name="10-04 Time cut finer">
        <Act7NowNextShot shot="10-04" title="把时间切得更细" />
      </Sequence>
      <Sequence
        from={383}
        durationInFrames={135}
        name="10-05 Now and the next moment"
      >
        <ClosingLineShot shot="10-05" />
      </Sequence>
      <Sequence
        from={518}
        durationInFrames={114}
        name="10-06 Not invented, encountered"
      >
        <FinalEncounterShot />
      </Sequence>
    </Sequence>
  </AbsoluteFill>
);
