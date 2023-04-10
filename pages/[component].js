import Image from 'next/image'
import { useState } from 'react';

export default function Login() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(current => !current);
  };

  return (
    <div className='login-container w-full h-screen relative flex items-center justify-center p-4'>
      <div className='bg-[#151515] md:py-14 py-4 md:px-[42px] px-4 max-w-[536px] w-full text-center' style={{ boxShadow: '0px 0px 10px rgba(76, 72, 255, 0.04)' }}>
        <h1 className='md:text-[42px] md:leading-[52px] leading-[42px] text-3xl text-white font-bold md:mb-6 mb-3'>Login</h1>
        <p className='md:text-2xl text-xl md:leading-[30px] leading-6 text-white md:mb-6 mb-3'>Login using one of your social accounts</p>
        <button type='button' className='btn active relative w-full flex items-center justify-center md:py-5 py-3 md:px-6 px-3 bg-[#111111] text-white md:text-xl text-base font-bold mb-3'>
          <Image
            src="/assets/images/google-icon.svg"
            alt="logo"
            width={24}
            height={24}
            className='mr-2 absolute left-5'
          />
          Log in using Google
        </button>
        <button type='button' className='btn relative w-full flex items-center justify-center md:py-5 py-3 md:px-6 px-3 bg-[#111111] text-white md:text-xl text-base font-bold mb-3'>
          <Image
            src="/assets/images/apple-icon.svg"
            alt="logo"
            width={24}
            height={24}
            className='mr-2 absolute left-5'
          />
          Log in using Apple
        </button>
        <button type='button' className='btn relative w-full flex items-center justify-center md:py-5 py-3 md:px-6 px-3 bg-[#111111] text-white md:text-xl text-base font-bold mb-3'>
          <Image
            src="/assets/images/github-icon.svg"
            alt="logo"
            width={24}
            height={24}
            className='mr-2 absolute left-5'
          />
          Log in using GitHub
        </button>
        <p className='md:mt-6 mt-3 text-white md:text-xl text-base'>Powered by ainsoft™️</p>
      </div>
    </div>
  )
}
