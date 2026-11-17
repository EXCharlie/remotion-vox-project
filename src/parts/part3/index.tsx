/**
 * 【同学 3 负责区】幕 7 ～ 幕 10（共 3468 帧，全局 7752 ～ 11220 帧）
 * 包含：万物应用场景、复平面欧拉公式、无理数/超越数身份证、最终总结收束
 */

import React from "react";
import { AbsoluteFill, Sequence } from "remotion";
import {
  PaperBackground,
  VoxTitle,
  HighlighterText,
  VOX_TOKENS,
} from "../../design-system";

export const PART3_DURATION_IN_FRAMES = 3468; // 04:18.384 – 06:14.000

export const Part3: React.FC = () => {
  return (
    <AbsoluteFill>
      <PaperBackground showGrid={true} gridSize={46} />

      {/* ─────────────────────────────────────────────
          幕 7：万物里的 e（相对帧 0 – 1153，共 9 镜）
         ───────────────────────────────────────────── */}
      <Sequence from={0} durationInFrames={1153} name="Act 7 - All in Nature">
        <div
          style={{
            position: "relative",
            zIndex: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: 80,
            width: "100%",
          }}
        >
          <VoxTitle
            title="万物里的 e"
            subtitle="ACT 07 · 自我驱动的通用解"
            fontSize={90}
            accentBarColor={VOX_TOKENS.colors.highlightYellow}
          />
          <div style={{ marginTop: 40, textAlign: "center" }}>
            <HighlighterText entryFrame={10} fontSize={48}>
              y(t) = y₀ · eᵏᵗ
            </HighlighterText>
            <p
              style={{
                fontFamily: VOX_TOKENS.fonts.body,
                fontSize: 24,
                color: VOX_TOKENS.colors.textMuted,
                marginTop: 20,
              }}
            >
              物理、化学、生物、金融：现在，决定下一刻。
            </p>
          </div>
        </div>
      </Sequence>

      {/* ─────────────────────────────────────────────
          幕 8：最漂亮的一座桥（相对帧 1153 – 2052，共 9 镜）
         ───────────────────────────────────────────── */}
      <Sequence from={1153} durationInFrames={899} name="Act 8 - Euler Identity">
        <div
          style={{
            position: "relative",
            zIndex: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: 80,
            width: "100%",
          }}
        >
          <VoxTitle
            title="最漂亮的一座桥"
            subtitle="ACT 08 · 欧拉恒等式"
            fontSize={88}
            accentBarColor={VOX_TOKENS.colors.retroRed}
          />
          <div style={{ marginTop: 40, textAlign: "center" }}>
            <div style={{ marginBottom: 20 }}>
              <HighlighterText
                entryFrame={15}
                fontSize={64}
                highlightColor={VOX_TOKENS.colors.highlightYellow}
              >
                e^(iπ) + 1 = 0
              </HighlighterText>
            </div>
            <p style={{ fontFamily: VOX_TOKENS.fonts.body, fontSize: 26 }}>
              五个常数，一张最美合影。
            </p>
          </div>
        </div>
      </Sequence>

      {/* ─────────────────────────────────────────────
          幕 9：身份证明（相对帧 2052 – 2836，共 7 镜）
         ───────────────────────────────────────────── */}
      <Sequence from={2052} durationInFrames={784} name="Act 9 - Identity Proof">
        <div
          style={{
            position: "relative",
            zIndex: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: 80,
            width: "100%",
          }}
        >
          <VoxTitle
            title="身份证明"
            subtitle="ACT 09 · 无理数与超越数"
            fontSize={84}
          />
          <div style={{ marginTop: 40, textAlign: "center" }}>
            <p style={{ fontFamily: VOX_TOKENS.fonts.body, fontSize: 26 }}>
              1737 欧拉证明无理数 ➔ 1873 埃尔米特证明超越数
            </p>
            <div style={{ marginTop: 20 }}>
              <HighlighterText
                entryFrame={10}
                fontSize={32}
                highlightColor={VOX_TOKENS.colors.retroRed}
                textColor="#FFF"
              >
                未解之谜：e + π 究竟是不是无理数？
              </HighlighterText>
            </div>
          </div>
        </div>
      </Sequence>

      {/* ─────────────────────────────────────────────
          幕 10：不是发明，是撞见（相对帧 2836 – 3468，共 7 镜）
         ───────────────────────────────────────────── */}
      <Sequence from={2836} durationInFrames={632} name="Act 10 - Encounter">
        <div
          style={{
            position: "relative",
            zIndex: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            textAlign: "center",
            padding: "0 100px",
          }}
        >
          <span
            style={{
              fontFamily: VOX_TOKENS.fonts.editorialSerif,
              fontSize: 36,
              color: VOX_TOKENS.colors.textMuted,
              marginBottom: 20,
            }}
          >
            没有人设计过 e
          </span>
          <VoxTitle
            title="不是发明，是撞见。"
            fontSize={104}
            accentBarColor={VOX_TOKENS.colors.highlightYellow}
          />
        </div>
      </Sequence>
    </AbsoluteFill>
  );
};
