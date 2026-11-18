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
import { Act3 } from "./Act3";
import { Act4 } from "./Act4";

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
        <Act3 />
      </Sequence>

      {/* ─────────────────────────────────────────────
          幕 4：三次擦肩而过（帧 2993 – 4216，共 11 镜）
         ───────────────────────────────────────────── */}
      <Sequence from={2993} durationInFrames={1223} name="Act 4 - Three Near Misses">
        <Act4 />
      </Sequence>
    </AbsoluteFill>
  );
};
