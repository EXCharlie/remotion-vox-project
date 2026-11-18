import React from "react";
import { interpolate, useCurrentFrame } from "remotion";
import { HighlighterText } from "../../design-system";
import { C, F, Card, Desk, Note, progress } from "./scene-kit";

export const SeriesShots: React.FC = () => {
  const f = useCurrentFrame();
  const count =
    f < 120 ? 0 : f < 250 ? Math.min(5, 1 + Math.floor((f - 120) / 22)) : 6;
  const factorial = [1, 1, 2, 6, 24, 120, 720, 5040];
  const n = Math.min(
    14,
    Math.max(
      1,
      Math.floor(
        interpolate(f, [283, 397], [1, 14], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        }),
      ),
    ),
  );
  let sum = 0,
    fact = 1;
  for (let i = 0; i <= n; i++) {
    if (i > 0) fact *= i;
    sum += 1 / fact;
  }
  return (
    <Desk
      start={1366}
      title="把极限，拆成可以相加的数"
      chapter="ACT 05 / 欧拉的级数"
    >
      <div
        style={{
          position: "absolute",
          left: 100,
          top: 290,
          fontFamily: F.editorialSerif,
          fontSize: 45,
          color: C.textMuted,
        }}
      >
        lim (1 + 1/n)ⁿ{" "}
        <span style={{ fontFamily: F.body, fontSize: 28 }}>　n → ∞</span>
      </div>
      <div
        style={{
          position: "absolute",
          left: 100,
          top: 410,
          display: "flex",
          alignItems: "center",
          gap: 24,
          fontFamily: F.editorialSerif,
          fontSize: 72,
        }}
      >
        <HighlighterText entryFrame={-30} fontSize={95}>
          e
        </HighlighterText>
        <span>=</span>
        {["1", "+ 1", "+ 1/2!", "+ 1/3!", "+ 1/4!", "+ ⋯"].map((t, i) => (
          <span
            key={t}
            style={{
              opacity: i < count ? 1 : 0.12,
              translate: `0 ${i < count ? 0 : 15}px`,
            }}
          >
            {t}
          </span>
        ))}
      </div>
      {f >= 283 ? (
        <>
          <Card
            style={{ position: "absolute", left: 100, top: 600, width: 740 }}
            rotation={-1}
          >
            <div style={{ fontSize: 24, color: C.retroRed }}>
              阶乘迅速变大 / 倒数迅速变小
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "end",
                gap: 22,
                height: 120,
                marginTop: 10,
              }}
            >
              {factorial.map((v, i) => (
                <div
                  key={i}
                  style={{
                    width: 60,
                    textAlign: "center",
                    fontFamily: F.typewriterMono,
                    fontSize: 18,
                  }}
                >
                  <div
                    style={{
                      height:
                        Math.max(3, 90 / v) * progress(f, 283 + i * 6, 12),
                      background: C.vintageTeal,
                      marginBottom: 8,
                    }}
                  />
                  {i}!
                </div>
              ))}
            </div>
          </Card>
          <Card
            style={{ position: "absolute", left: 960, top: 610, width: 820 }}
            rotation={1}
          >
            <div style={{ fontSize: 24 }}>累加到 n = {n} / Σ 1/k!</div>
            <div
              style={{
                fontFamily: F.typewriterMono,
                fontSize: 46,
                marginTop: 28,
                background: C.highlightYellow,
                padding: 12,
              }}
            >
              {sum.toFixed(10)}
            </div>
          </Card>
        </>
      ) : (
        <Note style={{ top: 650, fontSize: 38 }}>
          从复利的极限，到一项一项可以算出的级数。
        </Note>
      )}
    </Desk>
  );
};
const digits = "2.718281828459045235";
export const PrecisionShots: React.FC = () => {
  const f = useCurrentFrame();
  const length = Math.min(digits.length, Math.floor(f / 2) + 2);
  return (
    <Desk
      start={1852}
      title="十八位小数，欧拉手算出来"
      chapter="ACT 05 / 填上确切的数字"
    >
      <Card
        style={{ position: "absolute", left: 150, top: 320, width: 1620 }}
        rotation={-1}
      >
        <div
          style={{
            fontFamily: F.typewriterMono,
            fontSize: 25,
            letterSpacing: 5,
            color: C.retroRed,
          }}
        >
          EULER / SERIES / 18 DECIMAL PLACES
        </div>
        <div
          style={{
            fontFamily: F.typewriterMono,
            fontSize: 92,
            letterSpacing: 4,
            margin: "40px 0",
            minHeight: 120,
          }}
        >
          {digits.slice(0, length)}
          <span style={{ opacity: Math.floor(f / 10) % 2 ? 0 : 1 }}>▏</span>
        </div>
        <div style={{ fontSize: 27, color: C.textMuted }}>
          e = 1 + 1 + 1/2! + 1/3! + ⋯
        </div>
      </Card>
      <svg
        width={1920}
        height={1080}
        style={{ position: "absolute", inset: 0, opacity: progress(f, 84) }}
      >
        <path d="M220 760 H1690" stroke={C.inkNavy} strokeWidth={4} />
        <path
          d="M220 740 V780 M1690 740 V780"
          stroke={C.inkNavy}
          strokeWidth={4}
        />
        <path
          d="M220 760 H1690"
          stroke={C.highlightYellow}
          strokeWidth={18}
          opacity={0.6}
        />
        <circle
          cx={220 + (1690 - 220) * (Math.E - 2)}
          cy={760}
          r={12}
          fill={C.retroRed}
        />
        <g fill={C.inkNavy} fontSize={35} fontFamily={F.editorialSerif}>
          <text x={205} y={820}>
            2
          </text>
          <text x={1680} y={820}>
            3
          </text>
          <text x={1150} y={720}>
            e ≈ 2.71828…
          </text>
        </g>
      </svg>
      <Note style={{ top: 840, fontSize: 26 }}>
        伯努利给出 2 &lt; L &lt; 3；欧拉用级数填入确切的数值。
      </Note>
    </Desk>
  );
};
