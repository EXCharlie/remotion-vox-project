import React from "react";
import { interpolate, useCurrentFrame } from "remotion";
import { HighlighterText } from "../../design-system";
import { C, F, Card, Desk, Note, clamp, progress } from "./scene-kit";

const ox = 180,
  oy = 800,
  sx = 280,
  sy = 100;
const px = (x: number) => ox + x * sx,
  py = (y: number) => oy - y * sy;
const curve = (fn: (x: number) => number, end: number) =>
  Array.from({ length: 101 }, (_, i) => {
    const x = (end * i) / 100;
    return `${i === 0 ? "M" : "L"}${px(x)},${py(fn(x))}`;
  }).join(" ");
const Axes: React.FC<{ hyperbola?: boolean }> = ({ hyperbola = false }) => (
  <g stroke={C.inkNavy} strokeWidth={3} fill="none">
    <path d="M150 800 H1000 M180 825 V295" />
    <g strokeWidth={1} opacity={0.13}>
      {[1, 2, 3, 4].map((y) => (
        <path key={y} d={`M180 ${py(y)} H980`} />
      ))}
    </g>
    <g
      fill={C.inkNavy}
      stroke="none"
      fontSize={23}
      fontFamily={F.typewriterMono}
    >
      <text x={995} y={830}>
        x
      </text>
      <text x={145} y={300}>
        y
      </text>
      <text x={px(1) - 8} y={835}>
        1
      </text>
      <text x={px(2) - 8} y={835}>
        2
      </text>
      <text x={ox - 40} y={py(hyperbola ? 2 : 1) + 8}>
        {hyperbola ? "1" : ""}
      </text>
    </g>
  </g>
);

export const DerivativeShots: React.FC = () => {
  const f = useCurrentFrame();
  const x = interpolate(f, [120, 310], [0.3, 1.35], clamp),
    y = Math.exp(x);
  const compare = f >= 334;
  return (
    <Desk
      start={2057}
      title="为什么，偏偏叫「自然」？"
      chapter="ACT 06 / 斜率就是当前值"
    >
      <svg
        width={1920}
        height={1080}
        style={{ position: "absolute", inset: 0 }}
      >
        <Axes />
        <path
          d={curve(Math.exp, 1.6)}
          fill="none"
          stroke={C.vintageTeal}
          strokeWidth={7}
          pathLength={1}
          strokeDasharray={1}
          strokeDashoffset={1 - progress(f, 10, 75)}
        />
        <text
          x={610}
          y={300}
          fill={C.vintageTeal}
          fontSize={36}
          fontFamily={F.editorialSerif}
        >
          y = eˣ
        </text>
        {f >= 107 && (
          <g opacity={progress(f, 107)}>
            <path
              d={`M${px(x)} 800 V${py(y)}`}
              stroke={C.inkNavy}
              strokeWidth={3}
              strokeDasharray="10 8"
            />
            <path
              d={`M${px(x - 0.45)} ${py(y - y * 0.45)} L${px(x + 0.35)} ${py(y + y * 0.35)}`}
              stroke={C.retroRed}
              strokeWidth={5}
            />
            <path
              d={`M${px(x)} ${py(y)} H${px(x + 0.25)} V${py(y + y * 0.25)}`}
              fill="none"
              stroke={C.retroRed}
              strokeWidth={3}
            />
            <circle
              cx={px(x)}
              cy={py(y)}
              r={10}
              fill={C.highlightYellow}
              stroke={C.inkNavy}
              strokeWidth={3}
            />
            <text x={px(x) + 25} y={py(y) + 45} fill={C.inkNavy} fontSize={27}>
              高度 = {y.toFixed(2)}
            </text>
          </g>
        )}
      </svg>
      <Card
        style={{ position: "absolute", left: 1070, top: 330, width: 720 }}
        rotation={2}
      >
        <div style={{ fontSize: 26, color: C.retroRed }}>
          微积分 / 自指的曲线
        </div>
        <div
          style={{
            fontFamily: F.editorialSerif,
            fontSize: 64,
            margin: "30px 0",
          }}
        >
          {f < 107 ? "y = eˣ" : "d(eˣ)/dx = eˣ"}
        </div>
        <HighlighterText entryFrame={-30} fontSize={42}>
          {f < 235 ? "导数，仍然是自己" : "切线斜率 = 当前高度"}
        </HighlighterText>
        <div style={{ fontSize: 29, lineHeight: 1.7, marginTop: 25 }}>
          {compare ? (
            <>
              d(aˣ)/dx = aˣ · ln a<br />
              只有 ln e = 1，系数消失。
            </>
          ) : (
            <>
              黄色点沿曲线移动
              <br />
              红色切线随高度一起变陡
            </>
          )}
        </div>
      </Card>
      <Note
        style={{
          left: 1070,
          right: 130,
          top: 810,
          fontSize: 26,
          lineHeight: 1.5,
        }}
      >
        {compare
          ? "其它底数多出 ln a；e 恰好让这个系数等于 1。"
          : "同一条曲线：变化有多快，取决于此刻有多少。"}
      </Note>
    </Desk>
  );
};

export const GrowthShots: React.FC = () => {
  const f = useCurrentFrame();
  const count = Math.min(
    64,
    Math.floor(8 * 2 ** interpolate(f, [0, 310], [0, 3], clamp)),
  );
  const banking = f >= 224,
    merged = f >= 355;
  return (
    <Desk
      start={2542}
      title="现在越多，长得越快"
      chapter="ACT 06 / 数量与变化率"
    >
      <Card
        style={{ position: "absolute", left: 100, top: 320, width: 790 }}
        rotation={-2}
      >
        <div style={{ fontSize: 29, color: C.retroRed }}>
          {banking
            ? "每秒结息的钱 / 连续复利"
            : "菌群模型 / 每个个体都参与增长"}
        </div>
        <div
          style={{
            position: "relative",
            width: 650,
            height: 260,
            marginTop: 25,
          }}
        >
          {Array.from({ length: count }, (_, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                left: (i % 12) * 52,
                top: Math.floor(i / 12) * 42,
                width: banking ? 30 : 24,
                height: banking ? 30 : 24,
                borderRadius: banking ? "50%" : "45% 55%",
                background: banking ? C.badgeGold : C.vintageTeal,
                border: `2px solid ${C.inkNavy}`,
                rotate: `${i * 31}deg`,
              }}
            />
          ))}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontFamily: F.typewriterMono,
            fontSize: 26,
          }}
        >
          <span>现有量 N = {count}</span>
          <span>变化率 ∝ N</span>
        </div>
      </Card>
      <svg
        width={1920}
        height={1080}
        style={{ position: "absolute", inset: 0 }}
      >
        <defs>
          <marker
            id="growth-arrow"
            markerWidth="8"
            markerHeight="8"
            refX="6"
            refY="3"
            orient="auto"
          >
            <path d="M0 0 L6 3 L0 6" fill={C.retroRed} />
          </marker>
        </defs>
        <path
          d="M980 420 Q1440 240 1710 470 M1710 680 Q1280 880 980 620"
          fill="none"
          stroke={C.retroRed}
          strokeWidth={5}
          markerEnd="url(#growth-arrow)"
          opacity={progress(f, 0)}
        />
      </svg>
      <div
        style={{
          position: "absolute",
          left: 1080,
          top: 410,
          width: 610,
          textAlign: "center",
          fontSize: 46,
          fontWeight: 700,
        }}
      >
        <HighlighterText entryFrame={-30} fontSize={54}>
          数量更多
        </HighlighterText>
        <div style={{ margin: "32px 0", fontSize: 62 }}>↓</div>
        <div>新增更快</div>
        <div style={{ fontSize: 27, marginTop: 30, color: C.textMuted }}>
          更多个体，共同贡献增长
        </div>
      </div>
      <Note
        style={{
          top: 795,
          color: C.inkNavy,
          fontSize: merged ? 43 : 36,
          fontFamily: merged ? F.editorialSerif : F.body,
        }}
      >
        {merged
          ? "银行的极限 = 微积分的底数　　y = y₀eˣ"
          : banking
            ? "连续复利：每一刻，都按当下的本息继续增长。"
            : "变化率正比于当下数量：dN/dt = kN"}
      </Note>
    </Desk>
  );
};

export const AreaShots: React.FC = () => {
  const f = useCurrentFrame();
  const upper = interpolate(f, [112, 190], [1, Math.E], clamp);
  const area = Array.from({ length: 81 }, (_, i) => {
    const x = 1 + ((upper - 1) * i) / 80;
    return `L${px(x)} ${py(2 / x)}`;
  }).join(" ");
  return (
    <Desk start={3051} title="一块面积，恰好等于 1" chapter="ACT 06 / 自然对数">
      <svg
        width={1920}
        height={1080}
        style={{ position: "absolute", inset: 0 }}
      >
        {/* Vertical scale is 200 px per unit for the hyperbola panel. */}
        <Axes hyperbola />
        <path
          d={`M${px(1)} 800 ${area} L${px(upper)} 800 Z`}
          fill={C.highlightYellow}
          opacity={0.8}
        />
        <path
          d={Array.from({ length: 101 }, (_, i) => {
            const x = 0.45 + (2.35 * i) / 100;
            return `${i === 0 ? "M" : "L"}${px(x)} ${py(2 / x)}`;
          }).join(" ")}
          fill="none"
          stroke={C.vintageTeal}
          strokeWidth={7}
        />
        <path
          d={`M${px(1)} 800 V${py(2)} M${px(Math.E)} 800 V${py(2 / Math.E)}`}
          stroke={C.inkNavy}
          strokeWidth={3}
          strokeDasharray="8 8"
        />
        <g fontFamily={F.editorialSerif} fontSize={35} fill={C.inkNavy}>
          <text x={px(Math.E) - 10} y={845}>
            e
          </text>
          <text x={340} y={390}>
            y = 1/x
          </text>
          <text x={560} y={740} opacity={progress(f, 150)}>
            面积 = 1
          </text>
        </g>
      </svg>
      <Card
        style={{ position: "absolute", left: 1080, top: 330, width: 700 }}
        rotation={2}
      >
        <div style={{ fontSize: 25, color: C.retroRed }}>从 1 积到 e</div>
        <div
          style={{
            fontSize: 65,
            fontFamily: F.editorialSerif,
            margin: "30px 0",
          }}
        >
          ∫₁ᵉ 1/x dx = 1
        </div>
        <HighlighterText entryFrame={-30} fontSize={45}>
          {f >= 228 ? "ln e = 1" : "对数，也在这里相遇"}
        </HighlighterText>
        <div style={{ fontSize: 30, marginTop: 30, lineHeight: 1.7 }}>
          {f >= 262
            ? "不是人为规定的自然，是运算里最省事的选择。"
            : "以 e 为底的对数，叫作「自然对数」。"}
        </div>
      </Card>
      <Note
        style={{
          left: 1080,
          right: 130,
          top: 795,
          color: C.inkNavy,
          fontSize: 26,
          lineHeight: 1.5,
        }}
      >
        {f >= 368
          ? "从账本里走出来，走向万物中的增长与变化。"
          : "导数没有多余系数；对数让这块面积恰好等于 1。"}
      </Note>
      {f >= 368 && (
        <div
          style={{
            position: "absolute",
            left: 800,
            top: 390,
            rotate: "-4deg",
            scale: 1 + progress(f, 368, 100) * 0.15,
          }}
        >
          <HighlighterText entryFrame={-30} fontSize={90}>
            e →
          </HighlighterText>
        </div>
      )}
    </Desk>
  );
};
