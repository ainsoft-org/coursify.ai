import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar({
  setShowModal,
}: {
  setShowModal: (value: boolean) => void;
}) {
  const [isActive, setIsActive] = useState(false);
  return (
    <nav className="bg-[#0D0D0D] fixed w-full z-20 top-0 left-0 h-[100px]">
      <div className="max-w-[1352px] flex flex-wrap items-center justify-between mx-auto p-4 py-7 h-full">
        <a href="#" className="flex items-center">
          <Image
            src="/assets/images/logo.svg"
            alt="logo"
            width={167}
            height={30}
            className="w-[130px] md:w-[167px]"
          />
        </a>
        <div className="flex lg:order-2">
          <button
            type="button"
            className="join-waitlist-btn text-white font-unbounded font-normal lg:text-xl text-base px-3 py-2 text-center mr-3 lg:mr-0"
            onClick={() => {
              setShowModal(true);
            }}
          >
            Join Waitlist
          </button>
          <button
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg lg:hidden"
            aria-controls="navbar-sticky"
            aria-expanded="false"
            onClick={() => {
              setIsActive(!isActive);
            }}
          >
            <span className="sr-only">Open main menu</span>
            {isActive ? (
              <svg
                fill="#fff"
                className="w-6 h-6"
                viewBox="-0.18 -0.18 0.72 0.72"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMinYMin"
              >
                <path d="m0.219 0.177 0.106 -0.106A0.03 0.03 0 1 0 0.283 0.028L0.177 0.135 0.071 0.028A0.03 0.03 0 1 0 0.028 0.071l0.106 0.106L0.028 0.283a0.03 0.03 0 1 0 0.042 0.042l0.106 -0.106 0.106 0.106a0.03 0.03 0 1 0 0.042 -0.042L0.219 0.177z" />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="#fff"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            )}
          </button>
        </div>
        <div
          className={`h-screen lg:h-auto bg-[#0D0D0D] items-center justify-between w-full lg:flex lg:w-auto lg:order-1 absolute z-[1] top-[100px] lg:z-auto lg:static left-0 transition-all ease-in duration-300 opacity-0 ${
            isActive ? 'opacity-100' : 'opacity-0 '
          } lg:opacity-100`}
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 text-xl lg:flex-row lg:space-x-6 lg:mt-0">
            <li>
              <Link
                href="#"
                className="navar-item block py-2 pl-3 pr-4 text-white rounded lg:bg-transparent lg:p-0 font-sora font-normal active"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block py-2 pl-3 pr-4 lg:p-0 text-white font-sora font-normal"
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block py-2 pl-3 pr-4 lg:p-0 text-white font-sora font-normal"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block py-2 pl-3 pr-4 lg:p-0 text-white font-sora font-normal"
              >
                Testimonials
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block py-2 pl-3 pr-4 lg:p-0 text-white font-sora font-normal"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block py-2 pl-3 pr-4 lg:p-0 text-white font-sora font-normal"
              >
                Contact us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
