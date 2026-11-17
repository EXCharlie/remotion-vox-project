import React from "react";
import { AbsoluteFill, Sequence } from "remotion";
import { Shot1_01 } from "./act1/Shot1_01";
import { Shot1_02 } from "./act1/Shot1_02";
import { Shot1_03 } from "./act1/Shot1_03";
import { VoxTitle, HighlighterText, VOX_TOKENS } from "../../design-system";

export const Act1: React.FC = () => {
  return (
    <AbsoluteFill>
      {/* ────────────────────────────────────────────────
          镜 1-01 (帧 0 – 127, ~4.2s)：π 出场
         ──────────────────────────────────────────────── */}
      <Sequence from={0} durationInFrames={127} name="Shot 1-01 - Pi Entrance">
        <Shot1_01 />
      </Sequence>

      {/* ────────────────────────────────────────────────
          镜 1-02 (帧 127 – 243, ~3.8s)：台前与台后 · 色带与生活切片
         ──────────────────────────────────────────────── */}
      <Sequence from={127} durationInFrames={116} name="Shot 1-02 - Behind The Curtain">
        <Shot1_02 />
      </Sequence>

      {/* ────────────────────────────────────────────────
          镜 1-03 (帧 243 – 366, ~4.1s)：小数位长河 · 逐位打出与末位滚动
         ──────────────────────────────────────────────── */}
      <Sequence from={243} durationInFrames={123} name="Shot 1-03 - Decimal River">
        <Shot1_03 />
      </Sequence>

      {/* ────────────────────────────────────────────────
          镜 1-04 ～ 1-07 (帧 366 – 825, ~15.3s)：日常场景、它凭什么与时间倒带
         ──────────────────────────────────────────────── */}
      <Sequence from={366} durationInFrames={459} name="Shot 1-04-07 - Bridge to Act 2">
        <div
          style={{
            position: "relative",
            zIndex: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: 100,
            width: "100%",
          }}
        >
          <VoxTitle
            title="它凭什么无处不在？"
            subtitle="ACT 01 · 探寻源头"
            fontSize={96}
            accentBarColor={VOX_TOKENS.colors.highlightYellow}
          />

          <div style={{ marginTop: 60, maxWidth: 1000, textAlign: "center" }}>
            <p
              style={{
                fontFamily: VOX_TOKENS.fonts.body,
                fontSize: 28,
                color: VOX_TOKENS.colors.textMuted,
                lineHeight: 1.8,
              }}
            >
              更奇怪的是——这个贯穿现代科学的核心常数，最早居然是被一笔银行利息算出来的。
            </p>
            <div style={{ marginTop: 40 }}>
              <HighlighterText entryFrame={20} fontSize={44}>
                我们把时间往回拨 340 年 ➔ 1683 年瑞士巴塞尔
              </HighlighterText>
            </div>
          </div>
        </div>
      </Sequence>
    </AbsoluteFill>
  );
};
