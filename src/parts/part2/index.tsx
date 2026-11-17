/**
 * 【同学 2 负责区】幕 5 ～ 幕 6（共 3536 帧，全局 4216 ～ 7752 帧）
 * 包含：欧拉四年份、命名辟谣、级数展开、18位手算小数、e^x导数自指、双曲线面积
 */

import React from "react";
import { AbsoluteFill, Sequence } from "remotion";
import {
  PaperBackground,
  VoxTitle,
  HighlighterText,
  HalftoneLayer,
  VOX_TOKENS,
} from "../../design-system";

export const PART2_DURATION_IN_FRAMES = 3536; // 02:20.517 – 04:18.384

export const Part2: React.FC = () => {
  return (
    <AbsoluteFill>
      <PaperBackground showGrid={false} />

      {/* ─────────────────────────────────────────────
          幕 5：欧拉给它一个字母（相对帧 0 – 2057，共 19 镜）
         ───────────────────────────────────────────── */}
      <Sequence from={0} durationInFrames={2057} name="Act 5 - Euler & Series">
        {/* 背景右上角半色调波点装饰 */}
        <div
          style={{
            position: "absolute",
            right: -60,
            top: -80,
            width: "50%",
            height: "120%",
            transform: "rotate(-5deg)",
            zIndex: 1,
          }}
        >
          <HalftoneLayer color={VOX_TOKENS.colors.retroRed} />
        </div>

        <div
          style={{
            position: "relative",
            zIndex: 10,
            padding: "80px 100px",
          }}
        >
          <VoxTitle
            title="欧拉给它一个字母"
            subtitle="ACT 05 · 1727 - 1748"
            fontSize={96}
            accentBarColor={VOX_TOKENS.colors.highlightYellow}
          />

          <div style={{ marginTop: 50, maxWidth: 900 }}>
            <p
              style={{
                fontFamily: VOX_TOKENS.fonts.body,
                fontSize: 26,
                lineHeight: 1.8,
              }}
            >
              e 并不是欧拉姓氏的首字母。更可能只是 exponential 或下一个可用符号。
            </p>

            <div style={{ marginTop: 30 }}>
              <span style={{ fontSize: 24, fontWeight: 700 }}>欧拉级数手算 18 位：</span>
              <div style={{ marginTop: 10 }}>
                <HighlighterText entryFrame={15} fontSize={38}>
                  2.718281828459045235
                </HighlighterText>
              </div>
            </div>
          </div>
        </div>
      </Sequence>

      {/* ─────────────────────────────────────────────
          幕 6：为什么是「自然」的（相对帧 2057 – 3536，共 13 镜）
         ───────────────────────────────────────────── */}
      <Sequence from={2057} durationInFrames={1479} name="Act 6 - Derivative & Natural">
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
            title="为什么叫「自然」？"
            subtitle="ACT 06 · 微积分与自我驱动"
            fontSize={90}
            accentBarColor={VOX_TOKENS.colors.inkNavy}
          />

          <div style={{ marginTop: 50, textAlign: "center", maxWidth: 1000 }}>
            <div style={{ marginBottom: 24 }}>
              <HighlighterText entryFrame={10} fontSize={54} rotation={0}>
                d(eˣ) / dx = eˣ
              </HighlighterText>
            </div>
            <p
              style={{
                fontFamily: VOX_TOKENS.fonts.body,
                fontSize: 28,
                color: VOX_TOKENS.colors.textBlack,
                lineHeight: 1.6,
              }}
            >
              它的斜率永远等于当前值。长得快，因为现在多；现在多，又长得更快。
            </p>
          </div>
        </div>
      </Sequence>
    </AbsoluteFill>
  );
};
