import React from "react";
import { Img, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { VOX_TOKENS } from "../tokens";

export interface TimelineEvent {
  year: string;
  date?: string;
  title: string;
  imageSrc?: string;
}

interface HistoryTimelineProps {
  /** 事件列表（图1为3个节点） */
  events: TimelineEvent[];
  /** 整体进场起始帧 */
  entryFrame?: number;
  /** 每个节点依次出现的帧间隔（例如相隔15帧） */
  staggerFrames?: number;
}

export const HistoryTimeline: React.FC<HistoryTimelineProps> = ({
  events,
  entryFrame = 10,
  staggerFrames = 15,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // 时间轴黄线横向拉伸进场
  const lineProgress = spring({
    frame: frame - entryFrame,
    fps,
    config: { damping: 20, mass: 0.8, stiffness: 100 },
  });

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* 节点卡片容器 */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "flex-end",
          width: "90%",
          maxWidth: 1600,
          marginBottom: 36,
        }}
      >
        {events.map((evt, idx) => {
          const itemStart = entryFrame + 10 + idx * staggerFrames;
          const enter = spring({
            frame: frame - itemStart,
            fps,
            config: VOX_TOKENS.spring.paperSnap,
          });

          if (frame < itemStart) {
            return (
              <div key={idx} style={{ flex: 1, minWidth: 260, visibility: "hidden" }} />
            );
          }

          return (
            <div
              key={idx}
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                opacity: enter,
                transform: `translateY(${interpolate(enter, [0, 1], [30, 0])}px)`,
                padding: "0 16px",
              }}
            >
              {/* 照片卡片（带醒目的荧光黄边框，对标图1） */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  maxWidth: 320,
                  aspectRatio: "4/3",
                  backgroundColor: "#E2DDD5",
                  border: `8px solid ${VOX_TOKENS.colors.highlightYellow}`,
                  borderRadius: 4,
                  overflow: "hidden",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
                }}
              >
                {evt.imageSrc ? (
                  <Img
                    src={evt.imageSrc}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      filter: "contrast(1.2) grayscale(0.8)",
                    }}
                  />
                ) : (
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: VOX_TOKENS.colors.textMuted,
                      fontFamily: VOX_TOKENS.fonts.typewriterMono,
                      fontSize: 18,
                    }}
                  >
                    [ 历史文献 / 照片 ]
                  </div>
                )}
              </div>

              {/* 事件名称（荧光黄胶带标签包裹，对标图1） */}
              <div
                style={{
                  marginTop: -12,
                  zIndex: 2,
                  backgroundColor: VOX_TOKENS.colors.highlightYellow,
                  color: VOX_TOKENS.colors.textBlack,
                  fontFamily: VOX_TOKENS.fonts.editorialSerif,
                  fontWeight: 800,
                  fontSize: 22,
                  padding: "6px 18px",
                  borderRadius: 3,
                  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                  textAlign: "center",
                  maxWidth: "92%",
                  lineHeight: 1.3,
                }}
              >
                {evt.title}
              </div>

              {/* 倒三角指示标 */}
              <div
                style={{
                  width: 0,
                  height: 0,
                  borderLeft: "10px solid transparent",
                  borderRight: "10px solid transparent",
                  borderTop: `14px solid ${VOX_TOKENS.colors.textBlack}`,
                  marginTop: 8,
                }}
              />
            </div>
          );
        })}
      </div>

      {/* 贯穿全宽的明黄时间线（对标图1） */}
      <div
        style={{
          width: "100%",
          height: 12,
          backgroundColor: VOX_TOKENS.colors.highlightYellow,
          transformOrigin: "left center",
          transform: `scaleX(${lineProgress})`,
          boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
        }}
      />

      {/* 底部年份与日期标签 */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "90%",
          maxWidth: 1600,
          marginTop: 20,
        }}
      >
        {events.map((evt, idx) => {
          const itemStart = entryFrame + 10 + idx * staggerFrames;
          const enter = spring({
            frame: frame - itemStart,
            fps,
            config: VOX_TOKENS.spring.paperSnap,
          });

          if (frame < itemStart) {
            return (
              <div key={idx} style={{ flex: 1, minWidth: 260, visibility: "hidden" }} />
            );
          }

          return (
            <div
              key={idx}
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                opacity: enter,
              }}
            >
              {/* 年份：粗衬线大字（对标图1中的 1935、1939、1941） */}
              <div
                style={{
                  fontFamily: VOX_TOKENS.fonts.editorialSerif,
                  fontSize: 54,
                  fontWeight: 900,
                  color: VOX_TOKENS.colors.textBlack,
                  lineHeight: 1.1,
                }}
              >
                {evt.year}
              </div>

              {/* 日期小字 */}
              {evt.date && (
                <div
                  style={{
                    fontFamily: VOX_TOKENS.fonts.editorialSerif,
                    fontSize: 20,
                    fontWeight: 600,
                    color: VOX_TOKENS.colors.textMuted,
                    marginTop: 4,
                  }}
                >
                  {evt.date}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
