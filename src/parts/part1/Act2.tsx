import React from "react";
import { AbsoluteFill, Sequence } from "remotion";
import { Shot2_01 } from "./act2/Shot2_01";
import { Shot2_02 } from "./act2/Shot2_02";
import { Shot2_03 } from "./act2/Shot2_03";
import { Shot2_04 } from "./act2/Shot2_04";
import { Shot2_05 } from "./act2/Shot2_05";
import { Shot2_06 } from "./act2/Shot2_06";
import { Shot2_07 } from "./act2/Shot2_07";
import { Shot2_08 } from "./act2/Shot2_08";
import { Shot2_09 } from "./act2/Shot2_09";

export const Act2: React.FC = () => {
  return (
    <AbsoluteFill>
      {/* ────────────────────────────────────────────────
          镜 2-01 (帧 0 – 154, 相对 825–979)：一年结一次
         ──────────────────────────────────────────────── */}
      <Sequence from={0} durationInFrames={154} name="Shot 2-01 - Annual Compound">
        <Shot2_01 />
      </Sequence>

      {/* ────────────────────────────────────────────────
          镜 2-02 (帧 154 – 292, 相对 979–1117)：半年结 2.25
         ──────────────────────────────────────────────── */}
      <Sequence from={154} durationInFrames={138} name="Shot 2-02 - Semi Annual">
        <Shot2_02 />
      </Sequence>

      {/* ────────────────────────────────────────────────
          镜 2-03 (帧 292 – 346, 相对 1117–1171)：每月结 2.613
         ──────────────────────────────────────────────── */}
      <Sequence from={292} durationInFrames={54} name="Shot 2-03 - Monthly">
        <Shot2_03 />
      </Sequence>

      {/* ────────────────────────────────────────────────
          镜 2-04 (帧 346 – 504, 相对 1171–1329)：每周、每天
         ──────────────────────────────────────────────── */}
      <Sequence from={346} durationInFrames={158} name="Shot 2-04 - Weekly and Daily">
        <Shot2_04 />
      </Sequence>

      {/* ────────────────────────────────────────────────
          镜 2-05 (帧 504 – 542, 相对 1329–1367)：多得很勉强（落差特写）
         ──────────────────────────────────────────────── */}
      <Sequence from={504} durationInFrames={38} name="Shot 2-05 - Diminishing Returns">
        <Shot2_05 />
      </Sequence>

      {/* ────────────────────────────────────────────────
          镜 2-06 (帧 542 – 658, 相对 1367–1483)：每时每刻都在结息（时间无限切细）
         ──────────────────────────────────────────────── */}
      <Sequence from={542} durationInFrames={116} name="Shot 2-06 - Continuous Slicing">
        <Shot2_06 />
      </Sequence>

      {/* ────────────────────────────────────────────────
          镜 2-07 (帧 658 – 744, 相对 1483–1569)：钱会涨到天上吗
         ──────────────────────────────────────────────── */}
      <Sequence from={658} durationInFrames={86} name="Shot 2-07 - Will It Grow Forever">
        <Shot2_07 />
      </Sequence>

      {/* ────────────────────────────────────────────────
          镜 2-08 (帧 744 – 861, 相对 1569–1686)：本息和公式 (1 + 1/n)^n
         ──────────────────────────────────────────────── */}
      <Sequence from={744} durationInFrames={117} name="Shot 2-08 - Formula Assembly">
        <Shot2_08 />
      </Sequence>

      {/* ────────────────────────────────────────────────
          镜 2-09 (帧 861 – 989, 相对 1686–1814)：n 奔向无穷，触顶回弹
         ──────────────────────────────────────────────── */}
      <Sequence from={861} durationInFrames={128} name="Shot 2-09 - Hit Limit Ceiling">
        <Shot2_09 />
      </Sequence>
    </AbsoluteFill>
  );
};
