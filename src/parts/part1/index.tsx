/**
 * 【同学 1 负责区】幕 1 ～ 幕 4（帧 0 ～ 4216，共 37 镜）
 * 包含：开场引子、复利计算、伯努利极限与辟谣、三次擦肩卡片
 */

import React from "react";
import { AbsoluteFill, Sequence } from "remotion";
import {
  PaperBackground,
  HighlighterText,
  HistoryTimeline,
  VoxTitle,
  VOX_TOKENS,
} from "../../design-system";
import { Act1 } from "./Act1";
import { Act2 } from "./Act2";

export const PART1_DURATION_IN_FRAMES = 4216; // 00:00 – 02:20.517

export const Part1: React.FC = () => {
  return (
    <AbsoluteFill>
      <PaperBackground showGrid={true} gridSize={48} />

      {/* ─────────────────────────────────────────────
          幕 1：一个比 π 更忙的数字（帧 0 – 825，共 7 镜）
         ───────────────────────────────────────────── */}
      <Sequence from={0} durationInFrames={825} name="Act 1 - More Busy Than Pi">
        <Act1 />
      </Sequence>

      {/* ─────────────────────────────────────────────
          幕 2：一笔算不清的利息（帧 825 – 1814，共 9 镜）
         ───────────────────────────────────────────── */}
      <Sequence from={825} durationInFrames={989} name="Act 2 - Compound Interest">
        <Act2 />
      </Sequence>

      {/* ─────────────────────────────────────────────
          幕 3：把时间切到无穷细（帧 1814 – 2993，共 10 镜）
         ───────────────────────────────────────────── */}
      <Sequence from={1814} durationInFrames={1179} name="Act 3 - Bernoulli Limit">
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
            title="把时间切到无穷细"
            subtitle="ACT 03 · 1683 巴塞尔"
            fontSize={88}
          />
          {/* 重点辟谣分屏 */}
          <div
            style={{
              marginTop: 60,
              padding: "24px 48px",
              backgroundColor: "#FFF",
              border: `4px solid ${VOX_TOKENS.colors.retroRed}`,
              borderRadius: 6,
              boxShadow: "0 12px 32px rgba(0,0,0,0.15)",
              textAlign: "center",
            }}
          >
            <span
              style={{
                fontFamily: VOX_TOKENS.fonts.editorialSerif,
                fontSize: 32,
                fontWeight: 900,
                color: VOX_TOKENS.colors.retroRed,
              }}
            >
              【史实辟谣】伯努利并没有算出 2.71828！
            </span>
            <p
              style={{
                fontFamily: VOX_TOKENS.fonts.body,
                fontSize: 22,
                color: VOX_TOKENS.colors.textBlack,
                marginTop: 12,
              }}
            >
              他用二项式定理，第一次证明了结果必然被夹在 <b>2 和 3 之间</b>。
            </p>
          </div>
        </div>
      </Sequence>

      {/* ─────────────────────────────────────────────
          幕 4：三次擦肩而过（帧 2993 – 4216，共 11 镜）
         ───────────────────────────────────────────── */}
      <Sequence from={2993} durationInFrames={1223} name="Act 4 - Three Near Misses">
        <div
          style={{
            position: "relative",
            zIndex: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: 60,
            width: "100%",
          }}
        >
          <VoxTitle
            title="三次擦肩而过"
            subtitle="ACT 04 · 1618 - 1690"
            fontSize={84}
          />

          <div style={{ marginTop: 40, width: "100%" }}>
            <HistoryTimeline
              entryFrame={20}
              events={[
                {
                  year: "1618",
                  date: "纳皮尔",
                  title: "自然对数表（隐式以 e 为底）",
                },
                {
                  year: "1668",
                  date: "墨卡托",
                  title: "双曲线与自然对数命名",
                },
                {
                  year: "1690",
                  date: "莱布尼茨",
                  title: "致信惠更斯（用字母 b 标记）",
                },
              ]}
            />
          </div>
        </div>
      </Sequence>
    </AbsoluteFill>
  );
};
