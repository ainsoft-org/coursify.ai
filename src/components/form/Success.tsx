import Link from 'next/link';
import React, { SetStateAction } from 'react';

const Success = ({ setOpenModal }: { setOpenModal: React.Dispatch<SetStateAction<boolean>> }) => {
  return (
    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div className="fixed inset-0 h-full w-full bg-[#1E1E1E]"></div>
      <div className="flex min-h-screen items-center px-4 py-8">
        <div
          className="relative mx-auto w-full max-w-[545px] rounded-lg border border-solid border-[#242A30] bg-[#0D0D0D] p-4 md:px-10 md:py-9"
          style={{
            boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.12), 0px 20px 20px rgba(0, 0, 0, 0.08)',
          }}
        >
          <button
            onClick={() => setOpenModal(false)}
            type="button"
            className="absolute right-[10px] top-[10px] flex h-6 w-6 items-center justify-center rounded-full bg-[#272727]"
          >
            <svg
              width="11"
              height="10"
              viewBox="0 0 11 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.58716 3.88906L9.47622 0L10.5872 1.11094L6.69809 5L10.5872 8.88906L9.47622 10L5.58716 6.11094L1.69809 10L0.587158 8.88906L4.47622 5L0.587158 1.11094L1.69809 0L5.58716 3.88906Z"
                fill="#4F4F4F"
              />
            </svg>
          </button>
          <div className="flex">
            <div className="mr-6 flex h-[56px] w-[56px] items-center justify-center rounded-lg bg-[#161616]">
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.9999 25.6667C17.2216 25.6667 20.1382 24.3609 22.2495 22.2496C24.3607 20.1383 25.6666 17.2217 25.6666 14C25.6666 10.7784 24.3607 7.86174 22.2495 5.75046C20.1382 3.63921 17.2216 2.33337 13.9999 2.33337C10.7783 2.33337 7.86162 3.63921 5.75034 5.75046C3.63909 7.86174 2.33325 10.7784 2.33325 14C2.33325 17.2217 3.63909 20.1383 5.75034 22.2496C7.86162 24.3609 10.7783 25.6667 13.9999 25.6667Z"
                  fill="#161616"
                />
                <path
                  d="M13.9999 25.6667C17.2216 25.6667 20.1382 24.3609 22.2495 22.2496C24.3607 20.1383 25.6666 17.2217 25.6666 14C25.6666 10.7784 24.3607 7.86174 22.2495 5.75046C20.1382 3.63921 17.2216 2.33337 13.9999 2.33337C10.7783 2.33337 7.86162 3.63921 5.75034 5.75046C3.63909 7.86174 2.33325 10.7784 2.33325 14C2.33325 17.2217 3.63909 20.1383 5.75034 22.2496C7.86162 24.3609 10.7783 25.6667 13.9999 25.6667Z"
                  stroke="url(#paint0_linear_174_962)"
                  stroke-width="2"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.9999 25.6667C17.2216 25.6667 20.1382 24.3609 22.2495 22.2496C24.3607 20.1383 25.6666 17.2217 25.6666 14C25.6666 10.7784 24.3607 7.86174 22.2495 5.75046C20.1382 3.63921 17.2216 2.33337 13.9999 2.33337C10.7783 2.33337 7.86162 3.63921 5.75034 5.75046C3.63909 7.86174 2.33325 10.7784 2.33325 14C2.33325 17.2217 3.63909 20.1383 5.75034 22.2496C7.86162 24.3609 10.7783 25.6667 13.9999 25.6667Z"
                  stroke="url(#paint1_radial_174_962)"
                  stroke-opacity="0.75"
                  stroke-width="2"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.33325 14L12.8333 17.5L19.8333 10.5"
                  stroke="url(#paint2_linear_174_962)"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.33325 14L12.8333 17.5L19.8333 10.5"
                  stroke="url(#paint3_radial_174_962)"
                  stroke-opacity="0.75"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_174_962"
                    x1="2.33325"
                    y1="6.06671"
                    x2="25.6666"
                    y2="25.6667"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#2F76FF" />
                    <stop offset="0.5" stop-color="#7270FF" />
                    <stop offset="0.963542" stop-color="#FF2FF7" />
                  </linearGradient>
                  <radialGradient
                    id="paint1_radial_174_962"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(0.583252 16.45) rotate(29.4537) scale(34.1658)"
                  >
                    <stop stop-color="#2FCDFF" />
                    <stop offset="1" stop-color="#915CD5" stop-opacity="0.17" />
                  </radialGradient>
                  <linearGradient
                    id="paint2_linear_174_962"
                    x1="9.33325"
                    y1="11.62"
                    x2="16.2543"
                    y2="20.3405"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#2F76FF" />
                    <stop offset="0.5" stop-color="#7270FF" />
                    <stop offset="0.963542" stop-color="#FF2FF7" />
                  </linearGradient>
                  <radialGradient
                    id="paint3_radial_174_962"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(8.54575 14.735) rotate(20.6299) scale(14.3048 11.0163)"
                  >
                    <stop stop-color="#2FCDFF" />
                    <stop offset="1" stop-color="#915CD5" stop-opacity="0.17" />
                  </radialGradient>
                </defs>
              </svg>
            </div>
            <div>
              <h1 className="mb-2 font-inter text-base font-semibold leading-5 text-[#CFCFCF] md:text-xl md:leading-6">
                Successfully applied!
              </h1>
              <p className="mb-2 font-inter text-sm font-normal leading-[22px] text-[#4F4F4F]">
                We will send you and email, when the app is ready for you!
              </p>
              <Link
                href="#"
                className="block font-inter text-sm font-bold leading-6 text-[#4C48FF]"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
