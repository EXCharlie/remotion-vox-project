import React from "react";
import { AbsoluteFill, Sequence } from "remotion";
import { Part1, PART1_DURATION_IN_FRAMES } from "./parts/part1";
import { Part2, PART2_DURATION_IN_FRAMES } from "./parts/part2";
import { Part3, PART3_DURATION_IN_FRAMES } from "./parts/part3";

// 总片时长严格锁定 11220 帧（06:14 @ 30fps）
export const TOTAL_DURATION_IN_FRAMES =
  PART1_DURATION_IN_FRAMES +
  PART2_DURATION_IN_FRAMES +
  PART3_DURATION_IN_FRAMES; // 4216 + 3536 + 3468 = 11220

export const MainVideo: React.FC = () => {
  const part1Start = 0;
  const part2Start = PART1_DURATION_IN_FRAMES; // 4216
  const part3Start = part2Start + PART2_DURATION_IN_FRAMES; // 7752

  return (
    <AbsoluteFill style={{ backgroundColor: "#000" }}>
      {/* 第 1 个人负责：幕 1 ～ 幕 4（00:00 – 02:20.517，共 4216 帧 / 37 镜） */}
      <Sequence
        from={part1Start}
        durationInFrames={PART1_DURATION_IN_FRAMES}
        name="Part 1: Acts 1-4 (Bernoulli & Interest)"
      >
        <Part1 />
      </Sequence>

      {/* 第 2 个人负责：幕 5 ～ 幕 6（02:20.517 – 04:18.384，共 3536 帧 / 32 镜） */}
      <Sequence
        from={part2Start}
        durationInFrames={PART2_DURATION_IN_FRAMES}
        name="Part 2: Acts 5-6 (Euler, Series & Calculus)"
      >
        <Part2 />
      </Sequence>

      {/* 第 3 个人负责：幕 7 ～ 幕 10（04:18.384 – 06:14.000，共 3468 帧 / 32 镜） */}
      <Sequence
        from={part3Start}
        durationInFrames={PART3_DURATION_IN_FRAMES}
        name="Part 3: Acts 7-10 (Applications, Euler Bridge & Close)"
      >
        <Part3 />
      </Sequence>
    </AbsoluteFill>
  );
};
