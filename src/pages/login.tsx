import Image from 'next/image';
import { useState } from 'react';

export default function Login() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive((current) => !current);
  };

  return (
    <div className="login-container relative flex h-screen w-full items-center justify-center p-4">
      <div
        className="w-full max-w-[536px] bg-[#151515] px-4 py-4 text-center md:px-[42px] md:py-14"
        style={{ boxShadow: '0px 0px 10px rgba(76, 72, 255, 0.04)' }}
      >
        <h1 className="mb-3 text-3xl font-bold leading-[42px] text-white md:mb-6 md:text-[42px] md:leading-[52px]">
          Login
        </h1>
        <p className="mb-3 text-xl leading-6 text-white md:mb-6 md:text-2xl md:leading-[30px]">
          Login using one of your social accounts
        </p>
        <button
          type="button"
          className="btn active relative mb-3 flex w-full items-center justify-center bg-[#111111] px-3 py-3 text-base font-bold text-white md:px-6 md:py-5 md:text-xl"
        >
          <Image
            src="/assets/images/google-icon.svg"
            alt="logo"
            width={24}
            height={24}
            className="absolute left-5 mr-2"
          />
          Log in using Google
        </button>
        <button
          type="button"
          className="btn relative mb-3 flex w-full items-center justify-center bg-[#111111] px-3 py-3 text-base font-bold text-white md:px-6 md:py-5 md:text-xl"
        >
          <Image
            src="/assets/images/apple-icon.svg"
            alt="logo"
            width={24}
            height={24}
            className="absolute left-5 mr-2"
          />
          Log in using Apple
        </button>
        <button
          type="button"
          className="btn relative mb-3 flex w-full items-center justify-center bg-[#111111] px-3 py-3 text-base font-bold text-white md:px-6 md:py-5 md:text-xl"
        >
          <Image
            src="/assets/images/github-icon.svg"
            alt="logo"
            width={24}
            height={24}
            className="absolute left-5 mr-2"
          />
          Log in using GitHub
        </button>
        <p className="mt-3 text-base text-white md:mt-6 md:text-xl">Powered by ainsoft™️</p>
      </div>
    </div>
  );
}
