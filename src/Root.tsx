import React from "react";
import { Composition } from "remotion";
import { MainVideo, TOTAL_DURATION_IN_FRAMES } from "./MainVideo";
import { Part1, PART1_DURATION_IN_FRAMES } from "./parts/part1";
import { Part2, PART2_DURATION_IN_FRAMES } from "./parts/part2";
import { Part3, PART3_DURATION_IN_FRAMES } from "./parts/part3";
import { VOX_TOKENS } from "./design-system";

export const RemotionRoot: React.FC = () => {
  const { width, height, fps } = VOX_TOKENS.video;

  return (
    <>
      {/* 1. 全片总成片（8分钟联合渲染） */}
      <Composition
        id="MainVideo"
        component={MainVideo}
        durationInFrames={TOTAL_DURATION_IN_FRAMES}
        fps={fps}
        width={width}
        height={height}
      />

      {/* 2. 同学 A 专属预览 Composition */}
      <Composition
        id="Part1"
        component={Part1}
        durationInFrames={PART1_DURATION_IN_FRAMES}
        fps={fps}
        width={width}
        height={height}
      />

      {/* 3. 同学 B 专属预览 Composition */}
      <Composition
        id="Part2"
        component={Part2}
        durationInFrames={PART2_DURATION_IN_FRAMES}
        fps={fps}
        width={width}
        height={height}
      />

      {/* 4. 同学 C 专属预览 Composition */}
      <Composition
        id="Part3"
        component={Part3}
        durationInFrames={PART3_DURATION_IN_FRAMES}
        fps={fps}
        width={width}
        height={height}
      />
    </>
  );
};
