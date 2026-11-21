/** Part2: 32 shots, global frames [4216, 7752), 1920×1080 @ 30 fps. */
import React from "react";
import { AbsoluteFill, Sequence, useVideoConfig } from "remotion";
import { OpeningShots } from "./OpeningShots";
import { HistoryShots, NamingShots } from "./HistoryShots";
import { SeriesShots, PrecisionShots } from "./SeriesShots";
import { DerivativeShots, GrowthShots, AreaShots } from "./CalculusShots";
export const PART2_DURATION_IN_FRAMES = 3536;
export const Part2: React.FC = () => {
  const { fps } = useVideoConfig();
  return (
    <AbsoluteFill>
      <Sequence
        from={0}
        durationInFrames={243}
        premountFor={fps}
        name="5-01–02 / 线索与欧拉"
      >
        <OpeningShots />
      </Sequence>
      <Sequence
        from={243}
        durationInFrames={607}
        premountFor={fps}
        name="5-03–08 / 欧拉四年份"
      >
        <HistoryShots />
      </Sequence>
      <Sequence
        from={850}
        durationInFrames={516}
        premountFor={fps}
        name="5-09–12 / 命名辟谣"
      >
        <NamingShots />
      </Sequence>
      <Sequence
        from={1366}
        durationInFrames={486}
        premountFor={fps}
        name="5-13–17 / 级数展开"
      >
        <SeriesShots />
      </Sequence>
      <Sequence
        from={1852}
        durationInFrames={205}
        premountFor={fps}
        name="5-18–19 / 十八位小数"
      >
        <PrecisionShots />
      </Sequence>
      <Sequence
        from={2057}
        durationInFrames={485}
        premountFor={fps}
        name="6-01–04 / 导数自指"
      >
        <DerivativeShots />
      </Sequence>
      <Sequence
        from={2542}
        durationInFrames={509}
        premountFor={fps}
        name="6-05–08 / 增长反馈"
      >
        <GrowthShots />
      </Sequence>
      <Sequence
        from={3051}
        durationInFrames={485}
        premountFor={fps}
        name="6-09–13 / 自然对数与收束"
      >
        <AreaShots />
      </Sequence>
    </AbsoluteFill>
  );
};
