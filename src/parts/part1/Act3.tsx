import React from "react";
import { AbsoluteFill, Sequence } from "remotion";
import { Shot3_01 } from "./act3/Shot3_01";
import { Shot3_02 } from "./act3/Shot3_02";
import { Shot3_03 } from "./act3/Shot3_03";
import { Shot3_04 } from "./act3/Shot3_04";
import { Shot3_05 } from "./act3/Shot3_05";
import { Shot3_06 } from "./act3/Shot3_06";
import { Shot3_07 } from "./act3/Shot3_07";
import { Shot3_08 } from "./act3/Shot3_08";
import { Shot3_09 } from "./act3/Shot3_09";
import { Shot3_10 } from "./act3/Shot3_10";

export const Act3: React.FC = () => {
  return (
    <AbsoluteFill>
      {/* ────────────────────────────────────────────────
          镜 3-01 (帧 0 – 119, 相对 1814–1933)：1683 · 巴塞尔
         ──────────────────────────────────────────────── */}
      <Sequence from={0} durationInFrames={119} name="Shot 3-01 - Basel 1683">
        <Shot3_01 />
      </Sequence>

      {/* ────────────────────────────────────────────────
          镜 3-02 (帧 119 – 247, 相对 1933–2061)：无限分割之后会剩下什么
         ──────────────────────────────────────────────── */}
      <Sequence from={119} durationInFrames={128} name="Shot 3-02 - Infinite Subdivision">
        <Shot3_02 />
      </Sequence>

      {/* ────────────────────────────────────────────────
          镜 3-03 (帧 247 – 391, 相对 2061–2205)：二项式展开
         ──────────────────────────────────────────────── */}
      <Sequence from={247} durationInFrames={144} name="Shot 3-03 - Binomial Expansion">
        <Shot3_03 />
      </Sequence>

      {/* ────────────────────────────────────────────────
          镜 3-04 (帧 391 – 453, 相对 2205–2267)：夹在 2 和 3 之间
         ──────────────────────────────────────────────── */}
      <Sequence from={391} durationInFrames={62} name="Shot 3-04 - Between 2 and 3">
        <Shot3_04 />
      </Sequence>

      {/* ────────────────────────────────────────────────
          镜 3-05 (帧 453 – 571, 相对 2267–2385)：单调有界收敛
         ──────────────────────────────────────────────── */}
      <Sequence from={453} durationInFrames={118} name="Shot 3-05 - Monotone Convergence">
        <Shot3_05 />
      </Sequence>

      {/* ────────────────────────────────────────────────
          镜 3-06 (帧 571 – 684, 相对 2385–2498)：别记错了（分屏警示）
         ──────────────────────────────────────────────── */}
      <Sequence from={571} durationInFrames={113} name="Shot 3-06 - Misconception Warning">
        <Shot3_06 />
      </Sequence>

      {/* ────────────────────────────────────────────────
          镜 3-07 (帧 684 – 771, 相对 2498–2585)：划掉 2.71828（辟谣）
         ──────────────────────────────────────────────── */}
      <Sequence from={684} durationInFrames={87} name="Shot 3-07 - Debunk Strike 2.71828">
        <Shot3_07 />
      </Sequence>

      {/* ────────────────────────────────────────────────
          镜 3-08 (帧 771 – 911, 相对 2585–2725)：只圈出区间 2 < L < 3
         ──────────────────────────────────────────────── */}
      <Sequence from={771} durationInFrames={140} name="Shot 3-08 - Interval Real Contribution">
        <Shot3_08 />
      </Sequence>

      {/* ────────────────────────────────────────────────
          镜 3-09 (帧 911 – 1058, 相对 2725–2872)：第一次用极限定义一个数
         ──────────────────────────────────────────────── */}
      <Sequence from={911} durationInFrames={147} name="Shot 3-09 - First Limit Definition">
        <Shot3_09 />
      </Sequence>

      {/* ────────────────────────────────────────────────
          镜 3-10 (帧 1058 – 1179, 相对 2872–2993)：还没有名字
         ──────────────────────────────────────────────── */}
      <Sequence from={1058} durationInFrames={121} name="Shot 3-10 - No Name Yet">
        <Shot3_10 />
      </Sequence>
    </AbsoluteFill>
  );
};
