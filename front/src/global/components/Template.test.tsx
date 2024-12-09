import React, { ComponentType } from "react";
import Z from "zod";
// import Dev from "../../DEV/Dev";
// const DEV = Dev.ToolButton;

// Zod 스키마 정의
const ComponentSchema = Z.object({
  component: Z.custom<ComponentType>(),
  containerWidth: Z.string().optional(), // 전체 width값 옵션 추가
  width: Z.string().optional(),
  height: Z.string().optional(),
  shadowWidth: Z.string().optional(),
  shadowHeight: Z.string().optional(),
  shadow: Z.boolean().optional(), // background 옵션 추가
  hScreen: Z.string().optional(), // 템플릿의 hscreen에 대한 옵션 추가
  shadowTop: Z.string().optional(),
  shadowLeft: Z.string().optional(),
});

type ComponentProps = Z.infer<typeof ComponentSchema>;

const Template = ({
  component: Component,
  containerWidth = "w-[clamp(0px,41.25%,792px)]",
  width = "w-[clamp(0px,95.71%,758px)]",
  height = "h-[clamp(0px,89.49%,847px)]",
  shadowWidth = "w-[clamp(0px,95.71%,758px)]",
  shadowHeight = "h-[clamp(0px,89.49%,847px)]",
  shadow = true, // 기본값 true
  hScreen = "min-h-screen",
  shadowTop = "top-[10px]",
  shadowLeft = "left-[25px]",
}: ComponentProps) => {
  // const { component: Component, width = 'w-[clamp(0px,95.71%,758px)]', height = 'h-[clamp(0px,89.49%,758px)]' } = props;
  try {
    ComponentSchema.parse({
      component: Component,
      containerWidth,
      width,
      height,
      shadowWidth,
      shadowHeight,
      shadow,
      hScreen,
      shadowTop,
      shadowLeft,
    });
  } catch (error) {
    console.error("Props validation failed", error);
  }

  return (
    <div className={`flex items-center justify-center ${hScreen}`}>
      {/* <DEV /> */}
      <div className={`relative flex ${containerWidth} h-[calc(100% + 20px)]`}>
        {/* 컨탠츠 영역 */}
        <div className="flex flex-col justify-end w-full">
          <div className="bg-white w-[108.91px] h-[40.58px] rounded-tl-[30px] rounded-tr-[30px]" />
          <div
            className={`flex ${width} ${height} bg-white pr-[clamp(0px,42px,42px)] pl-[clamp(0px,76px,76px)] rounded-tr-[36px] rounded-br-[36px] rounded-bl-[36px]`}
          >
            <Component />
          </div>
          {/* 뒷 배경 영역, background가 true일 때만 적용 */}
          {shadow && (
            <div
              className={`absolute flex flex-col ${shadowTop} ${shadowLeft} z-[-1] w-full h-full`}
            >
              <div className="--status-bg-Color-04 w-[108.91px] h-[40.58px] rounded-tl-[30px] rounded-tr-[30px]" />
              <div
                className={`flex ${shadowWidth} ${shadowHeight} --status-bg-Color-04 rounded-tr-[36px] rounded-br-[36px] rounded-bl-[36px]`}
              ></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Template;
