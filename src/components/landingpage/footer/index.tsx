import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    
    <main>
      <div className="w-[1440px] h-[357.75px] px-[88px] py-[104px]  flex-col justify-start items-start gap-20 inline-flex">
        <div className="self-stretch justify-between items-center inline-flex">
          <div className="py-[5px] flex-col justify-start items-start gap-2 inline-flex">
            <div className="w-[110.38px] h-[35.75px] justify-start items-center gap-2.5 inline-flex">
              <div className="w-[35.75px] h-[35.75px] justify-center items-center flex">
                <div className="w-[35.75px] h-[35.75px] relative">
                </div>
              </div>
              <div className="text-primary text-2xl font-semibold font-['Inter']">tilebit</div>
            </div>
          </div>
          <div className="text-primary text-base font-normal font-['Inter'] leading-normal">Long Link Name</div>
          <div className="text-primary text-base font-normal font-['Inter'] leading-normal">Long Link Name</div>
          <div className="text-primary text-base font-normal font-['Inter'] leading-normal">Long Link Name</div>
          <div className="text-primary text-base font-normal font-['Inter'] leading-normal">Long Link Name</div>
        </div>
        <div className="self-stretch justify-between items-start inline-flex">
          <div className="justify-start items-start gap-8 flex">
            <div className="text-primary text-base font-normal font-['Inter'] leading-normal">©2023</div>
            <div className="text-primary text-base font-normal font-['Inter'] leading-normal">Tilebit.io</div>
          </div>
          <div className="justify-start items-start gap-8 flex">
            <div className="text-primary text-base font-normal font-['Inter'] leading-normal">Privacy Policy</div>
            <div className="text-primary text-base font-normal font-['Inter'] leading-normal">Terms & Conditions</div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Footer