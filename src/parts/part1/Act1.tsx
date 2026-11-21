import React from "react";
import { AbsoluteFill, Sequence } from "remotion";
import { Shot1_01 } from "./act1/Shot1_01";
import { Shot1_02 } from "./act1/Shot1_02";
import { Shot1_03 } from "./act1/Shot1_03";
import { Shot1_04 } from "./act1/Shot1_04";
import { Shot1_05 } from "./act1/Shot1_05";
import { Shot1_06 } from "./act1/Shot1_06";
import { Shot1_07 } from "./act1/Shot1_07";

export const Act1: React.FC = () => {
  return (
    <AbsoluteFill>
      {/* ────────────────────────────────────────────────
          镜 1-01 (帧 0 – 127, ~4.2s)：π 出场
         ──────────────────────────────────────────────── */}
      <Sequence from={0} durationInFrames={127} name="Shot 1-01 - Pi Entrance">
        <Shot1_01 />
      </Sequence>

      {/* ────────────────────────────────────────────────
          镜 1-02 (帧 127 – 243, ~3.8s)：台前与台后 · 色带与生活切片
         ──────────────────────────────────────────────── */}
      <Sequence from={127} durationInFrames={116} name="Shot 1-02 - Behind The Curtain">
        <Shot1_02 />
      </Sequence>

      {/* ────────────────────────────────────────────────
          镜 1-03 (帧 243 – 366, ~4.1s)：小数位长河 · 逐位打出与末位滚动
         ──────────────────────────────────────────────── */}
      <Sequence from={243} durationInFrames={123} name="Shot 1-03 - Decimal River">
        <Shot1_03 />
      </Sequence>

      {/* ────────────────────────────────────────────────
          镜 1-04 (帧 366 – 516, ~5.0s)：三个日常场景 · 转账/发烧/放凉咖啡
         ──────────────────────────────────────────────── */}
      <Sequence from={366} durationInFrames={150} name="Shot 1-04 - Three Daily Scenes">
        <Shot1_04 />
      </Sequence>

      {/* ────────────────────────────────────────────────
          镜 1-05 (帧 516 – 564, ~1.6s)：它凭什么 · 画面收束核心提问
         ──────────────────────────────────────────────── */}
      <Sequence from={516} durationInFrames={48} name="Shot 1-05 - Why Everywhere">
        <Shot1_05 />
      </Sequence>

      {/* ────────────────────────────────────────────────
          镜 1-06 (帧 564 – 687, ~4.1s)：被一笔利息算出来 · 羊皮账本与金币掉落
         ──────────────────────────────────────────────── */}
      <Sequence from={564} durationInFrames={123} name="Shot 1-06 - Ledger and Coin">
        <Shot1_06 />
      </Sequence>

      {/* ────────────────────────────────────────────────
          镜 1-07 (帧 687 – 825, ~4.6s)：往回拨 340 年 · 年份倒带 2026 到 1683
         ──────────────────────────────────────────────── */}
      <Sequence from={687} durationInFrames={138} name="Shot 1-07 - Year Rewind 1683">
        <Shot1_07 />
      </Sequence>
    </AbsoluteFill>
  );
};
