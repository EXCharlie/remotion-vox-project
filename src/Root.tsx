import React from "react";
import { Composition, Audio, staticFile } from "remotion";
import { MainVideo, TOTAL_DURATION_IN_FRAMES } from "./MainVideo";
import { Part1, PART1_DURATION_IN_FRAMES } from "./parts/part1";
import { Part2, PART2_DURATION_IN_FRAMES } from "./parts/part2";
import { Part3, PART3_DURATION_IN_FRAMES } from "./parts/part3";
import { VOX_TOKENS, VoxSubtitles } from "./design-system";

/**
 * 组员单人预览包装器：
 * 自动为各 Part 注入对应时间段的音频与字幕，组员无需在自己的目录里添加音频或字幕代码！
 */
const PartPreview: React.FC<{
  children: React.ReactNode;
  offsetFrame: number;
}> = ({ children, offsetFrame }) => {
  return (
    <>
      {children}
      {/* 自动定位到当前 Part 对应起点的音频 */}
      <Audio
        src={staticFile("assets/shared/audio.wav")}
        startFrom={offsetFrame}
      />
      {/* 自动展示当前 Part 时间范围内的对齐字幕（调试时还可传 debug={true} 查看当前帧） */}
      <VoxSubtitles offsetFrame={offsetFrame} />
    </>
  );
};

export const RemotionRoot: React.FC = () => {
  const { width, height, fps } = VOX_TOKENS.video;

  const part1Offset = 0;
  const part2Offset = PART1_DURATION_IN_FRAMES; // 4216
  const part3Offset = part2Offset + PART2_DURATION_IN_FRAMES; // 7752

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

      {/* 2. 同学 1 专属预览 Composition（自带前 0~4216 帧的音频与字幕） */}
      <Composition
        id="Part1"
        component={() => (
          <PartPreview offsetFrame={part1Offset}>
            <Part1 />
          </PartPreview>
        )}
        durationInFrames={PART1_DURATION_IN_FRAMES}
        fps={fps}
        width={width}
        height={height}
      />

      {/* 3. 同学 2 专属预览 Composition（自带 4216~7752 帧的音频与字幕） */}
      <Composition
        id="Part2"
        component={() => (
          <PartPreview offsetFrame={part2Offset}>
            <Part2 />
          </PartPreview>
        )}
        durationInFrames={PART2_DURATION_IN_FRAMES}
        fps={fps}
        width={width}
        height={height}
      />

      {/* 4. 同学 3 专属预览 Composition（自带 7752~11220 帧的音频与字幕） */}
      <Composition
        id="Part3"
        component={() => (
          <PartPreview offsetFrame={part3Offset}>
            <Part3 />
          </PartPreview>
        )}
        durationInFrames={PART3_DURATION_IN_FRAMES}
        fps={fps}
        width={width}
        height={height}
      />
    </>
  );
};
