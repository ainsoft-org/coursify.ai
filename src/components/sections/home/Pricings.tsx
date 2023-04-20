import React from 'react';
import Image from 'next/image';

export default function Pricings() {
  return (
    <section className="pricing-section relative w-full bg-[#101010] py-20 lg:py-24">
      <div className="mx-auto max-w-[1352px] px-4">
        <div className="mb-14 max-w-[538px]">
          <h1 className="Lg:leading-[71px] mb-6 font-unbounded text-[46px] font-semibold capitalize leading-[59px] text-white lg:text-[57px]">
            😉 Pricing
          </h1>
          <p className="font-inter text-xl font-normal leading-[29px] text-white lg:text-2xl">
            Introducing{' '}
            <span className="gradient-text font-inter font-bold">Flexible Pricing Plans </span>
            to Suit Your Needs
          </p>
        </div>
        <div className="flex flex-col justify-between space-x-0 space-y-4 md:flex-row md:space-x-4 md:space-y-0">
          <div className="pricing-card max-w-full rounded-[12px] bg-[#0D0D0D] px-6 py-[42px] md:max-w-sm">
            <Image src="/assets/images/pricing-img-1.svg" alt="logo" width={96} height={96} />
            <h5 className="my-4 font-unbounded text-xl font-semibold capitalize tracking-tight text-[#D6D6D6] lg:text-[32px] lg:leading-[40px]">
              Starter Plan
            </h5>
            <h5 className="my-4 font-unbounded text-xl font-semibold capitalize tracking-tight text-[#D6D6D6] lg:text-[32px] lg:leading-[40px]">
              $29/month
            </h5>
            <ul className="mb-4 list-disc pl-6 lg:pl-9">
              <li className="font-inter text-[18px] font-normal text-[#D6D6D6] lg:text-2xl">
                Access to core AI-powered course generation features
              </li>
              <li className="font-inter text-[18px] font-normal text-[#D6D6D6] lg:text-2xl">
                1 user account
              </li>
              <li className="font-inter text-[18px] font-normal text-[#D6D6D6] lg:text-2xl">
                Up to 5 active courses
              </li>
              <li className="font-inter text-[18px] font-normal text-[#D6D6D6] lg:text-2xl">
                Standard analytics and insights
              </li>
            </ul>
            <button
              type="button"
              className="join-waitlist-btn mr-3 px-4 py-2 text-center font-unbounded text-xl font-normal text-white md:mr-0"
            >
              Try now
            </button>
          </div>
          <div className="pricing-card max-w-full rounded-[12px] bg-[#0D0D0D] px-6 py-[42px] md:max-w-sm">
            <Image src="/assets/images/pricing-img-2.svg" alt="logo" width={96} height={96} />
            <h5 className="my-4 font-unbounded text-xl font-semibold capitalize tracking-tight text-[#D6D6D6] lg:text-[32px] lg:leading-[40px]">
              Pro Plan
            </h5>
            <h5 className="my-4 font-unbounded text-xl font-semibold capitalize tracking-tight text-[#D6D6D6] lg:text-[32px] lg:leading-[40px]">
              $69/month
            </h5>
            <ul className="mb-4 list-disc pl-6 lg:pl-9">
              <li className="font-inter text-[18px] font-normal text-[#D6D6D6] lg:text-2xl">
                Advanced AI-generated content capabilities
              </li>
              <li className="font-inter text-[18px] font-normal text-[#D6D6D6] lg:text-2xl">
                3 user accounts
              </li>
              <li className="font-inter text-[18px] font-normal text-[#D6D6D6] lg:text-2xl">
                Up to 20 active courses
              </li>
              <li className="font-inter text-[18px] font-normal text-[#D6D6D6] lg:text-2xl">
                Enhanced analytics and insights
              </li>
              <li className="font-inter text-[18px] font-normal text-[#D6D6D6] lg:text-2xl">
                Priority customer support
              </li>
            </ul>
            <button
              type="button"
              className="join-waitlist-btn mr-3 px-4 py-2 text-center font-unbounded text-xl font-normal text-white md:mr-0"
            >
              Get Started
            </button>
          </div>
          <div className="pricing-card max-w-full rounded-[12px] bg-[#0D0D0D] px-6 py-[42px] md:max-w-sm">
            <Image src="/assets/images/pricing-img-3.svg" alt="logo" width={96} height={96} />
            <h5 className="my-4 font-unbounded text-xl font-semibold capitalize tracking-tight text-[#D6D6D6] lg:text-[32px] lg:leading-[40px]">
              Enterprise
            </h5>
            <ul className="mb-4 list-disc pl-6 lg:pl-9">
              <li className="font-inter text-[18px] font-normal text-[#D6D6D6] lg:text-2xl">
                Tailored to your organization&apos;s needs
              </li>
              <li className="font-inter text-[18px] font-normal text-[#D6D6D6] lg:text-2xl">
                Unlimited user accounts
              </li>
              <li className="font-inter text-[18px] font-normal text-[#D6D6D6] lg:text-2xl">
                Unlimited active courses
              </li>
              <li className="font-inter text-[18px] font-normal text-[#D6D6D6] lg:text-2xl">
                Advanced analytics and custom integrations
              </li>
              <li className="font-inter text-[18px] font-normal text-[#D6D6D6] lg:text-2xl">
                Dedicated account manager and priority support
              </li>
            </ul>
            <button
              type="button"
              className="join-waitlist-btn mr-3 px-4 py-2 text-center font-unbounded text-xl font-normal text-white md:mr-0"
            >
              Contact Sales
            </button>
          </div>
        </div>
        <p className="mt-14 text-center font-inter text-xl font-normal leading-[29px] text-white lg:text-2xl">
          All plans include a 14-day free trial. Discover the power of Coursify.AI and elevate your
          course creation today!
        </p>
      </div>
    </section>
  );
}
