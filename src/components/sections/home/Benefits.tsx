import React from 'react';
import Image from 'next/image';

export default function Benefits() {
  return (
    <section className="benefits-section relative w-full bg-[#101010] py-20 lg:py-[73px]">
      <div className="mx-auto max-w-[1352px] px-4">
        <div className="mb-14 max-w-[538px]">
          <h1 className="mb-6 font-unbounded text-[46px] font-semibold capitalize leading-[59px] text-white lg:text-[57px] lg:leading-[71px]">
            😉 Benefits
          </h1>
          <p className="font-inter text-xl font-normal leading-[29px] text-white lg:text-2xl">
            Elevate Learning Experiences,{' '}
            <span className="gradient-text font-inter font-bold">Maximize Engagement</span>, and
            Achieve{' '}
            <span
              className="gradient-text font-inter font-bold"
              style={{
                background:
                  'linear-gradient(130.03deg, #2F76FF 7.3%, #7270FF 53.65%, #FF2FF7 96.62%)',
              }}
            >
              Unparalleled Success
            </span>
          </p>
        </div>
        <div className="flex flex-col justify-between space-x-0 space-y-4 md:flex-row md:space-x-4 md:space-y-0">
          <div className="benefit-card max-w-full rounded-[12px] bg-[#0D0D0D] px-6 py-[42px] md:max-w-sm">
            <Image
              src="/assets/images/enhanced-learner-engagement.svg"
              alt="logo"
              width={96}
              height={96}
            />
            <h5 className="my-4 font-unbounded text-xl font-semibold tracking-tight text-white lg:text-[32px] lg:leading-[40px]">
              Enhanced Learner Engagement
            </h5>
            <p className="font-inter text-[18px] font-normal leading-[29px] text-[#D6D6D6] lg:text-2xl">
              Captivate your audience with AI-generated content that adapts to their needs, ensuring
              a personalized and immersive learning journey.
            </p>
          </div>
          <div className="benefit-card max-w-full rounded-[12px] bg-[#0D0D0D] px-6 py-[42px] md:max-w-sm">
            <Image
              src="/assets/images/improved-learning-outcomes.svg"
              alt="logo"
              width={96}
              height={96}
            />
            <h5 className="my-4 font-unbounded text-xl font-semibold tracking-tight text-white lg:text-[32px] lg:leading-[40px]">
              Improved Learning Outcomes
            </h5>
            <p className="font-inter text-[18px] font-normal leading-[29px] text-[#D6D6D6] lg:text-2xl">
              Harness the power of AI to create effective courses that lead to increased knowledge
              retention, skill development, and learner success.
            </p>
          </div>
          <div className="benefit-card max-w-full rounded-[12px] bg-[#0D0D0D] px-6 py-[42px] md:max-w-sm">
            <Image
              src="/assets/images/streamlined-course-creation.svg"
              alt="logo"
              width={96}
              height={96}
            />
            <h5 className="my-4 font-unbounded text-xl font-semibold tracking-tight text-white lg:text-[32px] lg:leading-[40px]">
              Streamlined Course Creation
            </h5>
            <p className="font-inter text-[18px] font-normal leading-[29px] text-[#D6D6D6] lg:text-2xl">
              Save valuable time and resources with our user-friendly platform, enabling you to
              focus on delivering the highest quality educational experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
