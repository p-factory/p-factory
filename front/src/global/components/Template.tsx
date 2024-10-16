import React, { ComponentType } from 'react';
import Z from 'zod';
import Dev from '../../DEV/Dev';
const DEV = Dev.ToolButton;

// Zod 스키마 정의
const ComponentSchema = Z.object({
  component: Z.custom<ComponentType>(),
  width: Z.string().optional(),
  height: Z.string().optional(),
  widthBackground: Z.string().optional(),
  heightBackground: Z.string().optional(),
});

type ComponentProps = Z.infer<typeof ComponentSchema>;

const Template = ({
  component: Component,
  width = 'w-[clamp(0px,95.71%,758px)]',
  height = 'h-[clamp(0px,89.49%,758px)]',
  widthBackground = 'w-[clamp(0px,95.71%,758px)]',
  heightBackground = 'h-[clamp(0px,89.49%,847px)]',
}: ComponentProps) => {
  // const { component: Component, width = 'w-[clamp(0px,95.71%,758px)]', height = 'h-[clamp(0px,89.49%,758px)]' } = props;
  try {
    ComponentSchema.parse(Component);
  } catch (error) {
    console.error('Props validation failed', error);
  }

  return (
    <div className="relative flex items-center justify-center h-screen mx-auto my-auto">
      <DEV />
      <div className="relative flex w-[clamp(0px,41.25%,792px)]">
        {/* 컨탠츠 영역 */}
        <div className="flex flex-col justify-end w-full">
          <div className="bg-white w-[108.91px] h-[40.58px] rounded-tl-[30px] rounded-tr-[30px]" />
          <div
            className={`flex ${width} ${height} bg-white pr-[clamp(0px,42px,42px)] pl-[clamp(0px,76px,76px)] rounded-tr-[36px] rounded-br-[36px] rounded-bl-[36px]`}
          >
            {/* w-[clamp(0px,95.71%,758px)] h-[clamp(0px,89.49%,758px)] */}
            <Component />
          </div>
        </div>
        {/* 뒷 배경 영역 */}
        <div className="absolute flex flex-col top-[10px] left-[25px] z-[-1] w-full h-full">
          <div className="bg-slate-400 w-[108.91px] h-[40.58px] rounded-tl-[30px] rounded-tr-[30px]" />
          <div
            className={`flex ${widthBackground} ${heightBackground} bg-slate-400 rounded-tr-[36px] rounded-br-[36px] rounded-bl-[36px]`}
          ></div>
          {/* w-[clamp(0px,95.71%,758px)] h-[clamp(0px,89.49%,847px)] */}
        </div>
      </div>
    </div>
  );
};

export default Template;
