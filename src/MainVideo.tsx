import React from "react";
import {
  AbsoluteFill,
  Sequence,
  Audio,
  staticFile,
  useVideoConfig,
  useCurrentFrame,
  interpolate,
  spring,
} from "remotion";
import { Part1, PART1_DURATION_IN_FRAMES } from "./parts/part1";
import { Part2, PART2_DURATION_IN_FRAMES } from "./parts/part2";
import { Part3, PART3_DURATION_IN_FRAMES } from "./parts/part3";
import {
  VoxSubtitles,
  PaperBackground,
  HalftoneLayer,
  VOX_TOKENS,
} from "./design-system";

// 片尾制作人员名单时长（4秒 @ 30fps）
export const CREDITS_DURATION_IN_FRAMES = 120;

// 总片时长：11220 + 120 = 11340 帧（06:18 @ 30fps）
export const TOTAL_DURATION_IN_FRAMES =
  PART1_DURATION_IN_FRAMES +
  PART2_DURATION_IN_FRAMES +
  PART3_DURATION_IN_FRAMES +
  CREDITS_DURATION_IN_FRAMES;

const EndCredits: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const cardEnter = spring({
    frame,
    fps,
    config: VOX_TOKENS.spring.paperSnap,
  });

  const fadeIn = interpolate(frame, [0, 15], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const credits = [
    { role: "组长", names: "蔡誉豪" },
    { role: "脚本", names: "庄濡源、赵泓景" },
    { role: "视频渲染、音频生成、剪辑优化", names: "李思陶、王泓博、蔡誉豪" },
    { role: "文书材料", names: "金夕策" },
  ];

  return (
    <AbsoluteFill style={{ opacity: fadeIn }}>
      <PaperBackground showGrid={true} gridSize={48} />

      <div
        style={{
          position: "absolute",
          top: -60,
          right: -40,
          width: 440,
          height: 220,
          opacity: 0.22,
          pointerEvents: "none",
        }}
      >
        <HalftoneLayer
          color={VOX_TOKENS.colors.retroRed}
          dotSize={7}
          rotation={-10}
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      <AbsoluteFill
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: 980,
            backgroundColor: VOX_TOKENS.colors.paperLight,
            border: `4px solid ${VOX_TOKENS.colors.inkNavy}`,
            borderTop: `12px solid ${VOX_TOKENS.colors.highlightYellow}`,
            boxShadow: "14px 16px 0 rgba(21, 37, 53, 0.16)",
            padding: "56px 72px",
            transform: `translateY(${interpolate(cardEnter, [0, 1], [32, 0])}px) rotate(-0.4deg)`,
            opacity: cardEnter,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
              borderBottom: `3px solid ${VOX_TOKENS.colors.inkNavy}`,
              paddingBottom: 22,
              marginBottom: 34,
            }}
          >
            <div
              style={{
                fontFamily: VOX_TOKENS.fonts.editorialSerif,
                fontSize: 64,
                fontWeight: 900,
                color: VOX_TOKENS.colors.inkNavy,
                lineHeight: 1.1,
              }}
            >
              e 的由来
            </div>
            <div
              style={{
                backgroundColor: VOX_TOKENS.colors.inkNavy,
                color: VOX_TOKENS.colors.highlightYellow,
                fontFamily: VOX_TOKENS.fonts.typewriterMono,
                fontSize: 22,
                fontWeight: 800,
                padding: "8px 18px",
                letterSpacing: "0.06em",
              }}
            >
              2026.12 数智大作业
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
            {credits.map((item) => (
              <div
                key={item.role}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  borderBottom: `1px dashed rgba(21, 37, 53, 0.2)`,
                  paddingBottom: 12,
                }}
              >
                <span
                  style={{
                    fontFamily: VOX_TOKENS.fonts.body,
                    fontSize: 24,
                    fontWeight: 700,
                    color: VOX_TOKENS.colors.textMuted,
                  }}
                >
                  {item.role}
                </span>
                <span
                  style={{
                    fontFamily: VOX_TOKENS.fonts.editorialSerif,
                    fontSize: 30,
                    fontWeight: 900,
                    color: VOX_TOKENS.colors.inkNavy,
                  }}
                >
                  {item.names}
                </span>
              </div>
            ))}
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

export interface MainVideoProps {
  /** 音频时间偏移（秒），默认为 0.3 秒；正数表示音频往后延后播放 */
  audioOffsetInSeconds?: number;
  /** 字幕是否跟随音频同步延后偏移，默认为 true */
  syncSubtitles?: boolean;
}

export const MainVideo: React.FC<MainVideoProps> = ({
  audioOffsetInSeconds = 0.3,
  syncSubtitles = true,
}) => {
  const { fps } = useVideoConfig();
  const audioOffsetInFrames = Math.round(audioOffsetInSeconds * fps);

  const part1Start = 0;
  const part2Start = PART1_DURATION_IN_FRAMES; // 4216
  const part3Start = part2Start + PART2_DURATION_IN_FRAMES; // 7752

  return (
    <AbsoluteFill style={{ backgroundColor: "#000" }}>
      {/* 1. 全片统一音频（支持在 Studio 侧边栏实时滑块/数值调试） */}
      {audioOffsetInFrames >= 0 ? (
        <Sequence from={audioOffsetInFrames} name="Voiceover Audio">
          <Audio src={staticFile("assets/shared/audio.wav")} />
        </Sequence>
      ) : (
        <Audio
          src={staticFile("assets/shared/audio.wav")}
          startFrom={-audioOffsetInFrames}
        />
      )}

      {/* 2. 第 1 个人负责：幕 1 ～ 幕 4（00:00 – 02:20.517，共 4216 帧 / 37 镜） */}
      <Sequence
        from={part1Start}
        durationInFrames={PART1_DURATION_IN_FRAMES}
        name="Part 1: Acts 1-4 (Bernoulli & Interest)"
      >
        <Part1 />
      </Sequence>

      {/* 3. 第 2 个人负责：幕 5 ～ 幕 6（02:20.517 – 04:18.384，共 3536 帧 / 32 镜） */}
      <Sequence
        from={part2Start}
        durationInFrames={PART2_DURATION_IN_FRAMES}
        name="Part 2: Acts 5-6 (Euler, Series & Calculus)"
      >
        <Part2 />
      </Sequence>

      {/* 4. 第 3 个人负责：幕 7 ～ 幕 10（04:18.384 – 06:14.000，共 3468 帧 / 32 镜） */}
      <Sequence
        from={part3Start}
        durationInFrames={PART3_DURATION_IN_FRAMES}
        name="Part 3: Acts 7-10 (Applications, Euler Bridge & Close)"
      >
        <Part3 />
      </Sequence>

      {/* 5. 片尾制作人员名单（06:14.000 – 06:18.000，共 120 帧） */}
      <Sequence
        from={part3Start + PART3_DURATION_IN_FRAMES}
        durationInFrames={CREDITS_DURATION_IN_FRAMES}
        name="End Credits"
      >
        <EndCredits />
      </Sequence>

      {/* 6. 全片统一顶层字幕（跟随音频偏移自动同步） */}
      <VoxSubtitles offsetFrame={syncSubtitles ? -audioOffsetInFrames : 0} />
    </AbsoluteFill>
  );
};
