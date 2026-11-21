import React from "react";
import { AbsoluteFill, Sequence } from "remotion";
import { Shot4_01 } from "./act4/Shot4_01";
import { Shot4_02 } from "./act4/Shot4_02";
import { Shot4_03 } from "./act4/Shot4_03";
import { Shot4_04 } from "./act4/Shot4_04";
import { Shot4_05 } from "./act4/Shot4_05";
import { Shot4_06 } from "./act4/Shot4_06";
import { Shot4_07 } from "./act4/Shot4_07";
import { Shot4_08 } from "./act4/Shot4_08";
import { Shot4_09 } from "./act4/Shot4_09";
import { Shot4_10 } from "./act4/Shot4_10";
import { Shot4_11 } from "./act4/Shot4_11";

export const Act4: React.FC = () => {
  return (
    <AbsoluteFill>
      {/* ────────────────────────────────────────────────
          镜 4-01 (帧 0 – 148, 相对 2993–3141)：三次擦肩 · 三张卡片排开
         ──────────────────────────────────────────────── */}
      <Sequence from={0} durationInFrames={148} name="Shot 4-01 - Three Cards Face Down">
        <Shot4_01 />
      </Sequence>

      {/* ────────────────────────────────────────────────
          镜 4-02 (帧 148 – 251, 相对 3141–3244)：1618 纳皮尔
         ──────────────────────────────────────────────── */}
      <Sequence from={148} durationInFrames={103} name="Shot 4-02 - 1618 Napier">
        <Shot4_02 />
      </Sequence>

      {/* ────────────────────────────────────────────────
          镜 4-03 (帧 251 – 376, 相对 3244–3369)：悄悄以 e 为底
         ──────────────────────────────────────────────── */}
      <Sequence from={251} durationInFrames={125} name="Shot 4-03 - Hidden Base E">
        <Shot4_03 />
      </Sequence>

      {/* ────────────────────────────────────────────────
          镜 4-04 (帧 376 – 475, 相对 3369–3468)：还没有底这个概念
         ──────────────────────────────────────────────── */}
      <Sequence from={376} durationInFrames={99} name="Shot 4-04 - No Base Concept">
        <Shot4_04 />
      </Sequence>

      {/* ────────────────────────────────────────────────
          镜 4-05 (帧 475 – 619, 相对 3468–3612)：1668 墨卡托《对数术》
         ──────────────────────────────────────────────── */}
      <Sequence from={475} durationInFrames={144} name="Shot 4-05 - 1668 Mercator">
        <Shot4_05 />
      </Sequence>

      {/* ────────────────────────────────────────────────
          镜 4-06 (帧 619 – 668, 相对 3612–3661)：还是没点出那个底
         ──────────────────────────────────────────────── */}
      <Sequence from={619} durationInFrames={49} name="Shot 4-06 - Empty Slot">
        <Shot4_06 />
      </Sequence>

      {/* ────────────────────────────────────────────────
          镜 4-07 (帧 668 – 772, 相对 3661–3765)：1690 莱布尼茨致信惠更斯
         ──────────────────────────────────────────────── */}
      <Sequence from={668} durationInFrames={104} name="Shot 4-07 - 1690 Leibniz">
        <Shot4_07 />
      </Sequence>

      {/* ────────────────────────────────────────────────
          镜 4-08 (帧 772 – 913, 相对 3765–3906)：用的是 b · 看见了吗
         ──────────────────────────────────────────────── */}
      <Sequence from={772} durationInFrames={141} name="Shot 4-08 - Used Letter B">
        <Shot4_08 />
      </Sequence>

      {/* ────────────────────────────────────────────────
          镜 4-09 (帧 913 – 1004, 相对 3906–3997)：光出现不够
         ──────────────────────────────────────────────── */}
      <Sequence from={913} durationInFrames={91} name="Shot 4-09 - Card Stack">
        <Shot4_09 />
      </Sequence>

      {/* ────────────────────────────────────────────────
          镜 4-10 (帧 1004 – 1126, 相对 3997–4119)：是同一个东西
         ──────────────────────────────────────────────── */}
      <Sequence from={1004} durationInFrames={122} name="Shot 4-10 - Same Thing Connection">
        <Shot4_10 />
      </Sequence>

      {/* ────────────────────────────────────────────────
          镜 4-11 (帧 1126 – 1223, 相对 4119–4216)：隔了 65 年（引出欧拉）
         ──────────────────────────────────────────────── */}
      <Sequence from={1126} durationInFrames={97} name="Shot 4-11 - 65 Years Gap">
        <Shot4_11 />
      </Sequence>
    </AbsoluteFill>
  );
};
