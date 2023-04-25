import React from 'react';
import Image from 'next/image';

export default function Features() {
  return (
    <section className="relative w-full bg-[#101010] py-20 lg:py-24">
      <div className="mx-auto max-w-[1352px] px-4">
        <div className="mb-14 max-w-[538px]">
          <h1 className="mb-6 font-unbounded text-[46px] font-semibold capitalize leading-[59px] text-white lg:text-[57px] lg:leading-[71px]">
            🚀 Features
          </h1>
          <p className="font-inter text-xl font-normal leading-[29px] text-white lg:text-2xl">
            Smart <span className="gradient-text font-inter font-bold">Course Design</span>,{' '}
            <span className="gradient-text font-inter font-bold">Personalized Learning</span>,
            Infinite Possibilities
          </p>
        </div>
        <div className="flex flex-col justify-between space-x-0 space-y-4 md:flex-row md:space-x-4 md:space-y-0">
          <div
            className="w-full max-w-full rounded-[12px] bg-[#0D0D0D] px-6 py-[42px] md:max-w-sm"
            style={{ boxShadow: '0px 0px 10px rgba(76, 72, 255, 0.04)' }}
          >
            <Image
              src="/assets/images/adaptive-content-generation.svg"
              alt="logo"
              width={96}
              height={96}
            />
            <h5 className="my-4 font-unbounded text-xl font-semibold tracking-tight text-white lg:text-[32px] lg:leading-[40px]">
              Adaptive Content Generation
            </h5>
            <p className="font-inter text-[18px] font-normal leading-[29px] text-[#D6D6D6] lg:text-2xl">
              Cutting-Edge AI: Generate tailored, engaging content that meets learner needs and
              goals for an enhanced educational experience.
            </p>
          </div>
          <div
            className="w-full max-w-full rounded-[12px] bg-[#0D0D0D] px-6 py-[42px] md:max-w-sm"
            style={{ boxShadow: '0px 0px 10px rgba(76, 72, 255, 0.04)' }}
          >
            <Image
              src="/assets/images/seamless-integration.svg"
              alt="logo"
              width={96}
              height={96}
            />
            <h5 className="my-4 font-unbounded text-xl font-semibold tracking-tight text-white lg:text-[32px] lg:leading-[40px]">
              Seamless Integration
            </h5>
            <p className="font-inter text-[18px] font-normal leading-[29px] text-[#D6D6D6] lg:text-2xl">
              Coursify.AI: Simplify course creation with seamless LMS integration and streamlined
              workflows, saving time and effort.
            </p>
          </div>
          <div
            className="w-full max-w-full rounded-[12px] bg-[#0D0D0D] px-6 py-[42px] md:max-w-sm"
            style={{ boxShadow: '0px 0px 10px rgba(76, 72, 255, 0.04)' }}
          >
            <Image
              src="/assets/images/powerful-analytics-insights.svg"
              alt="logo"
              width={96}
              height={96}
            />
            <h5 className="my-4 font-unbounded text-xl font-semibold tracking-tight text-white lg:text-[32px] lg:leading-[40px]">
              Powerful Analytics & Insights
            </h5>
            <p className="font-inter text-[18px] font-normal leading-[29px] text-[#D6D6D6] lg:text-2xl">
              Boost courses with data-driven insights, optimizing content for greater retention and
              success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
