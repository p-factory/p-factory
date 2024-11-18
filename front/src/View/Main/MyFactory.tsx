import React, { useState } from 'react';
import spannerIconBlack from '../../global/Img/spannerIconBlack.svg';
import circleSingleIcon from '../../global/Img/circleSingleIcon.svg';
import Template from '../../global/components/Template.test';
import MyFactoryComponent from './component/MyFactory.component';
import toryTop from '../../global/Img/toryTop.svg';
import Modal from 'react-modal';

// 모달의 root 엘리먼트를 설정합니다 (접근성 요구사항에 필요).
Modal.setAppElement('#root');

const MyFactory = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div className="mt-[200px] mb-[200px]">
      {/* 제목 부분 */}
      <div className="relative flex flex-col items-center justify-end">
        <div className="text-[60px] --JejuDoldam font-bold relative z-10">
          나만의 단어공장
        </div>
        <div className="--primary-bg-Color absolute z-0 w-[450px] h-[clamp(0px,49.25%,33px)]" />
      </div>
      {/* 토리가 말하는 부분 */}
      <div className="relative flex items-end justify-center">
        <div className="relative flex items-end justify-start pl-[108.91px] --medium --Pretendard bottom-[-50.58px] w-[clamp(0px,59.74%,1142px)]">
          <div>
            <img src={toryTop} alt="" />
          </div>
          <div className="mb-[18px]">
            <div className="--font-m">내가 직접 작성하는 단어 공장</div>
            <div className="--font-xs --status-font-Color-05 whitespace-nowrap">
              아 좀 작성하라고!!
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <Template
          component={MyFactoryComponent}
          containerWidth="w-[clamp(0px,59.74%,1142px)]"
          width="w-[clamp(0px, 86.66%, 994px)]"
          height="h-[1069px]"
          shadow={false}
        />
        {/* 인덱스 부분 */}
        <div className="absolute flex justify-center w-full top-[112px] right-[58px]">
          <div className="w-[clamp(0px,59.74%,1142px)]">
            <div className="flex items-center justify-center w-[116px] h-[83px] --primary-bg-Color mb-[17px]">
              <div className="flex --JejuDoldam --font-m">내공장</div>
            </div>
            <div className="relative flex items-center justify-center w-[116px] h-[83px] bg-black z-[-100] right-[20px]">
              <div className="flex text-white --JejuDoldam --font-m">
                외부공장
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 버튼 부분 */}
      <div className="flex flex-col items-center w-full mt-[108px]">
        <div className="w-[clamp(0px,35.52%,682px)] h-[102px]">
          <div
            className="--bold btn-secondary --Pretendard pt-[clamp(0px,3.33%,36px)] pb-[clamp(0px,3.61%,39px)] pl-[clamp(0px,10.83%,208px)] pr-[clamp(0px,13.59%,261px)] cursor-pointer"
            onClick={() => {
              console.log('click');
              openModal();
            }}
          >
            <div className="flex items-center">
              <div className="--font-l whitespace-nowrap">공장 생성하기</div>
            </div>
          </div>
          <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            contentLabel="Modal"
            // 스크롤 활성화 이벤트
            onAfterOpen={() => {
              document.body.style.overflow = 'hidden'; // 모달 열릴 때 스크롤 비활성화
            }}
            onAfterClose={() => {
              document.body.style.overflow = 'auto'; // 모달 닫힐 때 스크롤 활성화
            }}
            style={{
              overlay: {
                backgroundColor: 'rgba(0, 0, 0, 0.6)', // #000000 배경색에 60% 불투명도
              },
              // 모달 기본 설정을 위한 매개변수
              // React-Modal은 content를 통해서 설정 할 수 있다.
              content: {
                display: 'flex',
                justifyContent: 'center',
                // padding: '36px 46px', // 여기에 padding 값 설정
                padding: 0,
                width: '821.5px',
                height: '338px',
                borderRadius: '49px', // rounded-lg에 해당하는 radius 값
                fontFamily: 'Pretendard',
                fontWeight: 'SemiBold',
                outline: 'none',
                margin: 0,
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)', // 중앙 정렬을 위한 transform
                fontSize: '25px',
              },
            }}
          >
            <div className="flex-col w-[100%]">
              <div className="flex w-[100%] border-b border-black px-[46px] py-[30px]">
                <div className="flex w-[100%]">
                  <span className="">공장 생성하기</span>
                  <img src={spannerIconBlack} alt="" />
                </div>
                <div>
                  <img src={circleSingleIcon} alt="" />
                </div>
              </div>
              <div className="w-[100%] px-[46px] mt-[30px] mb-[63px]">
                <div className="w-[100%] border border-black py-[20px] px-[30px]">
                  <input
                    type="text"
                    className="w-[100%]"
                    placeholder="공장 이름"
                  />
                </div>
              </div>
              <div className="flex w-[100%] justify-between border-t border-black">
                <div
                  onClick={closeModal}
                  className="flex w-[50%] h-[65.9px] pt-[10px] border-r border-black justify-center outline-none cursor-pointer"
                >
                  취소
                </div>
                <div
                  onClick={() => {
                    console.log('단어장 생성: POST');
                  }}
                  className="flex w-[50%] h-[65.9px] pt-[10px] justify-center outline-none cursor-pointer"
                >
                  확인
                </div>
              </div>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default MyFactory;
