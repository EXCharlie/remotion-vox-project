/**
 * 【同学 1 负责区】幕 1 ～ 幕 4（帧 0 ～ 4216，共 37 镜）
 * 包含：开场引子、复利计算、伯努利极限与辟谣、三次擦肩卡片
 */

import React from "react";
import { AbsoluteFill, Sequence } from "remotion";
import {
  PaperBackground,
  HalftoneLayer,
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

      {/* 右上角统一半色调网点角标装饰（与 Part 2 保持一致的报纸拼贴质感） */}
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
          color="#D93829"
          dotSize={7}
          rotation={-10}
          style={{ width: "100%", height: "100%" }}
        />
      </div>

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
