import React from 'react';
import Image from 'next/image';

export default function Reviews() {
  return (
    <section className="reviews-section relative w-full bg-[#101010] py-20 lg:py-24">
      <div className="mx-auto max-w-[1352px] px-4">
        <div className="mb-14 max-w-[538px]">
          <h1 className="mb-6 font-unbounded text-[46px] font-semibold capitalize leading-[59px] text-white lg:text-[57px] lg:leading-[71px]">
            👨🏻‍💻 Reviews
          </h1>
          <p className="font-inter text-xl font-normal leading-[29px] text-white lg:text-2xl">
            <span className="gradient-text font-inter font-bold">Empowering Educators</span>,{' '}
            <span
              className="gradient-text font-inter font-bold"
              style={{
                background:
                  'linear-gradient(130.03deg, #2F76FF 7.3%, #7270FF 53.65%, #FF2FF7 96.62%)',
              }}
            >
              Transforming Courses:{' '}
            </span>
            See What Our Users Have to Say
          </p>
        </div>
        <div className="flex flex-col justify-between space-x-0 space-y-4 md:flex-row md:space-x-4 md:space-y-0">
          <div
            className="max-w-full rounded-[12px] bg-[#0D0D0D] px-6 py-[42px] md:max-w-sm"
            style={{ boxShadow: '0px 0px 10px rgba(76, 72, 255, 0.04)' }}
          >
            <Image src="/assets/images/reviews-img-1.svg" alt="logo" width={96} height={96} />
            <Image
              src="/assets/images/reviews-stars.png"
              alt="logo"
              width={120}
              height={25}
              className="mt-4"
            />
            <h5 className="my-4 font-inter text-[18px] font-bold tracking-tight text-white lg:text-2xl">
              Sarah K. University Professor
            </h5>
            <p className="font-inter text-[18px] font-normal leading-[29px] text-[#D6D6D6] lg:text-2xl">
              Coursify.AI has completely revolutionized the way I design my courses. The
              AI-generated content adapts to my students needs, making learning more engaging and
              enjoyable. I have seen a noticeable improvement in knowledge retention and overall
              success.
            </p>
          </div>
          <div
            className="max-w-full rounded-[12px] bg-[#0D0D0D] px-6 py-[42px] md:max-w-sm"
            style={{ boxShadow: '0px 0px 10px rgba(76, 72, 255, 0.04)' }}
          >
            <Image src="/assets/images/reviews-img-2.svg" alt="logo" width={96} height={96} />
            <Image
              src="/assets/images/reviews-stars.png"
              alt="logo"
              width={120}
              height={25}
              className="mt-4"
            />
            <h5 className="my-4 font-inter text-[18px] font-bold tracking-tight text-white lg:text-2xl">
              David L. Instructional Designer
            </h5>
            <p className="font-inter text-[18px] font-normal leading-[29px]  text-[#D6D6D6] lg:text-2xl">
              As an instructional designer, Coursify.AI has been a game-changer for me. The seamless
              integration with our LMS and the time-saving features have made course creation a
              breeze. I can now focus on creating more impactful learning experiences for my
              clients.
            </p>
          </div>
          <div
            className="max-w-full rounded-[12px] bg-[#0D0D0D] px-6 py-[42px] md:max-w-sm"
            style={{ boxShadow: '0px 0px 10px rgba(76, 72, 255, 0.04)' }}
          >
            <Image src="/assets/images/reviews-img-3.svg" alt="logo" width={96} height={96} />
            <Image
              src="/assets/images/reviews-stars.png"
              alt="logo"
              width={120}
              height={25}
              className="mt-4"
            />
            <h5 className="my-4 font-inter text-[18px] font-bold tracking-tight text-white lg:text-2xl">
              Jessica R. E-Learning Specialist
            </h5>
            <p className="font-inter text-[18px] font-normal leading-[29px]  text-[#D6D6D6] lg:text-2xl">
              I&apos;ve tried multiple course creation platforms, but Coursify.AI stands out for its
              powerful analytics and insights. The data-driven approach has enabled me to optimize
              my courses and achieve better learning outcomes for my students. I highly recommend
              it!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
