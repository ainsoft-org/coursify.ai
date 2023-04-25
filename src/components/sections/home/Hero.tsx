import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Hero({ setShowModal }: { setShowModal: (value: boolean) => void }) {
  return (
    <section className="hero-section relative w-full overflow-hidden bg-[#0D0D0D] py-[150px] pb-[50px] text-center lg:py-[226px] lg:text-left">
      <div className="relative z-[1] mx-auto flex max-w-[1352px] flex-col-reverse items-center justify-between px-4 lg:flex-row">
        <div className="max-w-[612px] pr-0 lg:pr-7">
          <h1 className="font-unbounded text-[46px] font-semibold leading-[59px] text-white lg:text-[56px] lg:leading-[69px]">
            Effortless AI-Powered <span className="gradient-text">Course Building</span>
          </h1>
          <p className="my-6 font-inter text-xl font-normal leading-[29px] text-white lg:text-2xl">
            Empowering Educators, Revolutionizing Learning: The Future of Course Creation
          </p>
          <button
            type="button"
            className="join-waitlist-btn mr-3 px-6 py-3 text-center font-unbounded text-[22px] font-medium text-white md:mr-0 lg:text-[28px]"
            onClick={() => {
              setShowModal(true);
            }}
          >
            Join Waitlist Now
          </button>
        </div>
        <div className="relative mb-3 flex h-full max-h-[350px] w-full max-w-[489px] items-center justify-center overflow-hidden rounded-[64px] pl-0 lg:mb-0 lg:max-h-[424px] lg:max-w-[589px] lg:pl-7">
          <Image
            src="/assets/images/video.png"
            alt="logo"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
          />
          <Image
            src="/assets/images/video-play.png"
            alt="logo"
            width={80}
            height={80}
            className="absolute cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
}
