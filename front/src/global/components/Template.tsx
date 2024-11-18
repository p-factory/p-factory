import React, { ComponentType } from 'react';
import Z from 'zod';
// import Dev from '../../DEV/Dev';
// const DEV = Dev.ToolButton;

// Zod 스키마 정의
const ComponentSchema = Z.object({
  component: Z.custom<ComponentType<any>>(),
  width: Z.string().optional(),
  height: Z.string().optional(),
  backgroundWidth: Z.string().optional(),
  backgroundHeight: Z.string().optional(),
  shadowTop: Z.string().optional(),
  shadowLeft: Z.string().optional(),
});

type ComponentProps = Z.infer<typeof ComponentSchema>;

const Template = ({
  component: Component,
  width = 'w-[clamp(0px,95.71%,758px)]',
  height = 'h-[clamp(0px,89.49%,758px)]',
  backgroundWidth = 'w-[clamp(0px,95.71%,758px)]',
  backgroundHeight = 'h-[clamp(0px,89.49%,847px)]',
  shadowTop = 'top-[10px]',
  shadowLeft = 'left-[25px]',
}: ComponentProps) => {
  // h-[clamp(0px,89.49%,847px)]
  // const { component: Component, width = 'w-[clamp(0px,95.71%,758px)]', height = 'h-[clamp(0px,89.49%,758px)]' } = props;
  try {
    // props 전체를 파싱하도록 변경
    ComponentSchema.parse({
      component: Component,
      width,
      height,
      backgroundWidth,
      backgroundHeight,
      shadowTop,
      shadowLeft,
    });
  } catch (error) {
    console.error('Props validation failed', error);
  }

  return (
    <div className="flex items-center justify-center h-screen">
      {/* <DEV /> */}
      <div className="relative flex w-[clamp(0px,41.25%,792px)] h-[clamp(0px,89.49%,758px)]">
        {/* 컨탠츠 영역 */}
        <div className="flex flex-col justify-center w-full">
          {/* 귀 영역을 뺀 height 값을 주면 정상적을 동작할 예정 */}
          <div className="bg-white w-[108.91px] h-[40.58px] rounded-tl-[30px] rounded-tr-[30px]" />
          <div
            className={`flex ${width} bg-white pr-[clamp(0px,5.54%,42px)] pl-[clamp(0px,10.03%,76px)] rounded-tr-[36px] rounded-br-[36px] rounded-bl-[36px]`}
            style={{
              maxHeight: `${height}px`,
              height: 'calc(100dvh - 40.58px)',
            }}
          >
            {/* w-[clamp(0px,95.71%,758px)] h-[clamp(0px,89.49%,758px)] */}
            <Component />
          </div>
        </div>
        {/* 뒷 배경 영역 */}
        <div
          className={`absolute flex flex-col ${shadowTop} ${shadowLeft} z-[-1] w-full`}
        >
          <div className="bg-slate-400 w-[108.91px] h-[40.58px] rounded-tl-[30px] rounded-tr-[30px]" />
          <div
            className={`flex ${backgroundWidth}  bg-slate-400 rounded-tr-[36px] rounded-br-[36px] rounded-bl-[36px]`}
          />
          {/* w-[clamp(0px,95.71%,758px)] h-[clamp(0px,89.49%,847px)] */}
        </div>
      </div>
    </div>
  );
};

export default Template;
