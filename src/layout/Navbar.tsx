import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { classNames } from '@helpers/index';
import { pathes } from '@/data';

export default function Navbar({ setShowModal }: { setShowModal: (value: boolean) => void }) {
  const [isActive, setIsActive] = useState(false);
  const { pathname } = useRouter();
  return (
    <nav className="fixed left-0 top-0 z-20 h-[100px] w-full bg-[#0D0D0D]">
      <div className="mx-auto flex h-full max-w-[1352px] flex-wrap items-center justify-between p-4 py-7">
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/images/logo.svg"
            alt="logo"
            width={167}
            height={30}
            className="w-[130px] md:w-[167px]"
          />
        </Link>
        <div className="flex lg:order-2">
          <button
            type="button"
            className="join-waitlist-btn mr-3 px-3 py-2 text-center font-unbounded text-base font-normal text-white lg:mr-0 lg:text-xl"
            onClick={() => {
              setShowModal(true);
            }}
          >
            Join Waitlist
          </button>
          <button
            type="button"
            className="inline-flex items-center rounded-lg p-2 text-sm text-gray-500 lg:hidden"
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
                className="h-6 w-6"
                viewBox="-0.18 -0.18 0.72 0.72"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMinYMin"
              >
                <path d="m0.219 0.177 0.106 -0.106A0.03 0.03 0 1 0 0.283 0.028L0.177 0.135 0.071 0.028A0.03 0.03 0 1 0 0.028 0.071l0.106 0.106L0.028 0.283a0.03 0.03 0 1 0 0.042 0.042l0.106 -0.106 0.106 0.106a0.03 0.03 0 1 0 0.042 -0.042L0.219 0.177z" />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
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
          className={`absolute left-0 top-[100px] z-[1] h-screen w-full items-center justify-between bg-[#0D0D0D] opacity-0 transition-all duration-300 ease-in lg:static lg:z-auto lg:order-1 lg:flex lg:h-auto lg:w-auto ${
            isActive ? 'opacity-100' : 'opacity-0 '
          } lg:opacity-100`}
        >
          <ul className="mt-4 flex flex-col p-4 text-xl md:p-0 lg:mt-0 lg:flex-row lg:space-x-6">
            {pathes.map((path, index) => {
              return (
                <li key={index}>
                  <Link
                    href={path.path}
                    className={classNames(
                      'navar-item block rounded py-2 pl-3 pr-4 font-sora font-normal text-white lg:bg-transparent lg:p-0',
                      pathname === path.path ? 'active' : ''
                    )}
                    aria-current="page"
                  >
                    {path.name}
                  </Link>
                </li>
              );
            })}
            {/* <li>
              <Link
                href="/"
                className="navar-item block rounded py-2 pl-3 pr-4 font-sora font-normal text-white lg:bg-transparent lg:p-0"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block py-2 pl-3 pr-4 font-sora font-normal text-white lg:p-0"
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="block py-2 pl-3 pr-4 font-sora font-normal text-white lg:p-0"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block py-2 pl-3 pr-4 font-sora font-normal text-white lg:p-0"
              >
                Testimonials
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block py-2 pl-3 pr-4 font-sora font-normal text-white lg:p-0"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block py-2 pl-3 pr-4 font-sora font-normal text-white lg:p-0"
              >
                Contact us
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}
