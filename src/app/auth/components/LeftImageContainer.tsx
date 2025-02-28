import React from 'react';
import Image from "next/image";

type Props = {}

const LeftImageContainer = (props: Props) => {
  return (
    <div className="absolute inset-2 md:bg-[url('/assets/images/auth/auth_bg2.png')] bg-cover bg-no-repeat rounded-[10px]">
      {/* <Image
        className="absolute w-[320px] h-[80px]  top-[40px] left-1/2 transform -translate-x-[100%] -translate-y-1/2"
        src="/assets/images/auth/logo.png"
        alt="green"
        width={145}
        height={40}
        priority
      /> */}
      <div className="absolute inset-0 rounded-[10px]"></div>
      <div className="absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center z-10">
      <p className="font-semibold text-[110px] mb-[60px] leading-[20px] tracking-[-0.05em] text-[#ff3131] shrink">予約システム</p>
        <h1 className="flex items-center justify-center font-black text-[95px] leading-[48px] tracking-[-0.06em] text-center text-[#fff235]">Taiy<div className="w-14 h-14 rounded-full bg-[#ECF94B] border-[10px] border-[#ff3131] border-solid"></div>P.U.S</h1>
       
      </div>
      {/* <Image
        className="absolute top-1/2 left-1/3 transform -translate-x-[50%] -translate-y-1/2"
        src="/assets/images/auth/green-effect.png"
        alt="green"
        width={230.6}
        height={60.81}
        priority
      /> */}
    </div>
  )
}

export default LeftImageContainer;