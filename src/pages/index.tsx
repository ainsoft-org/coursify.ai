import React from 'react';
import { useState } from 'react';
import { Joinlist } from '@components/form';
import { Navbar, Footer } from '@layout';
import { Hero, Features, Benefits, Reviews, Pricings } from '@components/sections/home/';

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <Navbar setShowModal={setShowModal} />
      <main className="flex min-h-screen flex-col items-center justify-between">
        <Hero setShowModal={setShowModal} />
        <Features />
        <Benefits />
        <Reviews />
        <Pricings />
        <Footer />
        {showModal && <Joinlist setOpenModal={setShowModal} />}
      </main>
      {/* <div className='login-container w-full h-screen relative flex items-center justify-center p-4'>
      <div className='bg-[#151515] md:py-14 py-4 md:px-[42px] px-4 max-w-[536px] w-full text-center' style={{ boxShadow: '0px 0px 10px rgba(76, 72, 255, 0.04)' }}>
        <h1 className='md:text-[42px] md:leading-[52px] leading-[42px] text-3xl text-white font-unbounded font-semibold md:mb-6 mb-3'>Login</h1>
        <p className='md:text-2xl text-xl md:leading-[30px] leading-6 text-white md:mb-6 mb-3 font-sora font-normal'>Login using one of your social accounts</p>
        <button type='button' className='btn active font-unbounded font-bold relative w-full flex items-center justify-center md:py-5 py-3 md:px-6 px-3 bg-[#111111] text-white md:text-xl text-base mb-3'>
          <Image
            src="/assets/images/google-icon.svg"
            alt="logo"
            width={24}
            height={24}
            className='mr-2 absolute left-5'
          />
          Log in using Google
        </button>
        <button type='button' className='btn font-unbounded font-bold relative w-full flex items-center justify-center md:py-5 py-3 md:px-6 px-3 bg-[#111111] text-white md:text-xl text-base mb-3'>
          <Image
            src="/assets/images/apple-icon.svg"
            alt="logo"
            width={24}
            height={24}
            className='mr-2 absolute left-5'
          />
          Log in using Apple
        </button>
        <button type='button' className='btn font-unbounded font-bold relative w-full flex items-center justify-center md:py-5 py-3 md:px-6 px-3 bg-[#111111] text-white md:text-xl text-base mb-3'>
          <Image
            src="/assets/images/github-icon.svg"
            alt="logo"
            width={24}
            height={24}
            className='mr-2 absolute left-5'
          />
          Log in using GitHub
        </button>
        <p className='md:mt-6 mt-3 text-white md:text-xl text-base font-sora font-normal'>Powered by <span className='font-sora font-bold'>ainsoft™️</span></p>
      </div>
    </div> */}
    </div>
  );
}
