import React from "react";
import { useCurrentFrame } from "remotion";
import { HighlighterText, HistoryTimeline } from "../../design-system";
import { C, F, Card, Desk, Note, progress } from "./scene-kit";

// Typographic facsimiles, not reproductions of historical documents.
const page = (year: string, title: string) =>
  `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="480" height="360"><rect width="480" height="360" fill="${C.paperWarm}"/><text x="35" y="65" font-size="24" fill="${C.inkNavy}">EULER / ${year}</text><text x="35" y="155" font-size="46" font-family="serif" fill="${C.inkNavy}">${title}</text>${[210, 235, 260, 285].map((y, i) => `<path d="M35 ${y} H${420 - i * 30}" stroke="${C.textMuted}" stroke-width="3"/>`).join("")}</svg>`)}`;
const events = [
  { year: "1727", title: "开始使用 e", imageSrc: page("1727", "e") },
  { year: "1731", title: "致信哥德巴赫", imageSrc: page("1731", "Epistola") },
  { year: "1736", title: "《力学》出版", imageSrc: page("1736", "Mechanica") },
  {
    year: "1748",
    title: "《无穷分析引论》",
    imageSrc: page("1748", "Introductio"),
  },
];
export const HistoryShots: React.FC = () => {
  const f = useCurrentFrame();
  const absolute = f + 243;
  const active =
    absolute < 372 ? 0 : absolute < 560 ? 1 : absolute < 673 ? 2 : 3;
  const lines = [
    "约 1727 年起，用 e 表示这个常数",
    "1731 年书信：字母 e 留下确凿痕迹",
    "1736 年：e 首次进入正式出版物",
    "1748 年：从一个符号，到一套理论",
  ];
  return (
    <Desk
      start={243}
      title="一个字母，走进数学史"
      chapter="ACT 05 / 欧拉四年份"
    >
      <div style={{ position: "absolute", left: 80, right: 80, top: 310 }}>
        <HistoryTimeline events={events} entryFrame={-60} staggerFrames={0} />
      </div>
      <div
        style={{
          position: "absolute",
          left: 170 + active * 396,
          top: 282,
          width: 320,
          height: 360,
          border: `4px solid ${C.retroRed}`,
          pointerEvents: "none",
          rotate: "-1deg",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: 100,
          top: 725,
          display: "flex",
          gap: 30,
          alignItems: "center",
        }}
      >
        <HighlighterText entryFrame={-30} fontSize={38}>
          {events[active].year}
        </HighlighterText>
        <span style={{ fontSize: 34, fontWeight: 700 }}>
          {absolute < 460
            ? lines[active]
            : absolute < 560
              ? "信纸上的 e，被圈出并留下证据"
              : absolute < 605
                ? "《力学》：符号从书信走向印刷"
                : absolute < 673
                  ? "首次正式出版 / 1736"
                  : absolute < 759
                    ? "《无穷分析引论》 / 1748"
                    : lines[active]}
        </span>
      </div>
      {absolute >= 759 && (
        <div
          style={{
            position: "absolute",
            right: 110,
            top: 245,
            rotate: "-5deg",
            background: C.retroRed,
            color: C.paperLight,
            padding: "12px 24px",
            fontSize: 26,
            opacity: progress(absolute, 759),
          }}
        >
          体系建立 / THEORY
        </div>
      )}
      <Note style={{ top: 825, fontSize: 21 }}>
        文献卡为排版示意，非历史文献原图。
      </Note>
    </Desk>
  );
};
export const NamingShots: React.FC = () => {
  const f = useCurrentFrame();
  const second = f >= 118,
    third = f >= 251,
    unresolved = f >= 390;
  return (
    <Desk
      start={850}
      title="e，是 Euler 的首字母吗？"
      chapter="ACT 05 / 命名之谜"
    >
      <Card
        style={{ position: "absolute", left: 100, top: 330, width: 500 }}
        rotation={-3}
      >
        <div style={{ fontSize: 24, color: C.retroRed }}>流行说法 / 不成立</div>
        <div
          style={{
            position: "relative",
            fontFamily: F.editorialSerif,
            fontSize: 100,
            margin: "28px 0",
          }}
        >
          Euler → e
          <svg
            width="400"
            height="100"
            style={{ position: "absolute", left: 0, top: 0 }}
          >
            <path
              d="M0 85 L390 15"
              stroke={C.retroRed}
              strokeWidth={10}
              pathLength={1}
              strokeDasharray={1}
              strokeDashoffset={1 - progress(f, 10, 30)}
            />
          </svg>
        </div>
        <div style={{ fontSize: 28, lineHeight: 1.5 }}>
          几乎肯定不是
          <br />
          用自己的姓氏命名
        </div>
      </Card>
      <div style={{ opacity: second ? 1 : 0 }}>
        <Card
          style={{ position: "absolute", left: 700, top: 330, width: 500 }}
          rotation={2}
        >
          <div style={{ fontSize: 24, color: C.vintageTeal }}>
            可能的解释 / 01
          </div>
          <div
            style={{
              fontFamily: F.editorialSerif,
              fontSize: 54,
              margin: "40px 0",
            }}
          >
            <span style={{ background: C.highlightYellow }}>e</span>xponential
          </div>
          <div style={{ fontSize: 28, lineHeight: 1.5 }}>
            指数的英文单词
            <br />
            首字母恰好是 e
          </div>
        </Card>
      </div>
      <div style={{ opacity: third ? 1 : 0 }}>
        <Card
          style={{ position: "absolute", left: 1300, top: 330, width: 500 }}
          rotation={-2}
        >
          <div style={{ fontSize: 24, color: C.vintageTeal }}>
            可能的解释 / 02
          </div>
          <div
            style={{
              display: "flex",
              gap: 12,
              margin: "40px 0",
              fontFamily: F.editorialSerif,
              fontSize: 52,
            }}
          >
            {["a", "b", "c", "d", "e"].map((s, i) => (
              <span
                key={s}
                style={{
                  color: i < 4 ? C.textMuted : C.inkNavy,
                  textDecoration: i < 4 ? "line-through" : "none",
                  background: i === 4 ? C.highlightYellow : undefined,
                }}
              >
                {s}
              </span>
            ))}
          </div>
          <div style={{ fontSize: 28, lineHeight: 1.5 }}>
            前面的字母已被占用
            <br />e 是下一个顺手的选择
          </div>
        </Card>
      </div>
      <Note
        style={{
          color: unresolved ? C.retroRed : C.textMuted,
          fontSize: 38,
          fontWeight: 700,
        }}
      >
        {unresolved
          ? "真相至今没有定论。两种解释，都只是推测。"
          : "名字的来历，不能只靠一个巧合。"}
      </Note>
    </Desk>
  );
};
