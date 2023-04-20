import React, { useState } from 'react';
import Image from 'next/image';
import { Joinlist } from '@components/form';
import { Navbar, Footer } from '@layout';
import { blogsList } from '@/data';
import { Article } from '@components/sections/blog';

export default function Blogs() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <Navbar setShowModal={setShowModal} />
      <main className="flex min-h-screen flex-col items-center justify-between bg-[#0D0D0D]">
        <section className="blog-hero-section relative w-full overflow-hidden bg-[#0D0D0D] pb-[50px] pt-[150px] text-center lg:pb-16 lg:pt-[198px] lg:text-left">
          <div className="relative z-[1] mx-auto flex max-w-[1352px] flex-col items-center justify-center px-4 text-center">
            <p className="mb-3.5 flex items-center font-apercu text-base font-medium text-white">
              Blog <Image src="/assets/images/blog-frame.png" alt="logo" width={16} height={16} />
            </p>
            <h1 className="mb-4 font-apercu text-4xl font-bold text-white lg:text-[64px] lg:leading-[120%]">
              News and insights
            </h1>
            <p className="mb-12 max-w-[473px] font-apercu text-base font-normal leading-[135%] text-white opacity-60 lg:text-lg lg:leading-[150%]">
              Learn about cryptocurrency, NFTs, and blockchain, discover our latest product updates,
              partnership announcements, user stories, and more.
            </p>
            <div
              className="flex max-w-full items-center overflow-x-auto rounded-md border border-solid bg-[#0D0D0D] p-2"
              style={{
                boxShadow: '0px 4px 10px rgba(17, 17, 17, 0.02)',
                borderColor: 'rgba(255, 255, 255, 0.08',
              }}
            >
              <div className="blog-category-btn active flex cursor-pointer items-center justify-center whitespace-nowrap px-4 py-2 font-apercu text-base font-normal text-white">
                View all
              </div>
              <div className="blog-category-btn flex cursor-pointer items-center justify-center whitespace-nowrap px-4 py-2 font-apercu text-base font-normal text-white">
                Crypto
              </div>
              <div className="blog-category-btn flex cursor-pointer items-center justify-center whitespace-nowrap px-4 py-2 font-apercu text-base font-normal text-white">
                Blockchain
              </div>
              <div className="blog-category-btn flex cursor-pointer items-center justify-center whitespace-nowrap px-4 py-2 font-apercu text-base font-normal text-white">
                Announcements
              </div>
              <div className="blog-category-btn flex cursor-pointer items-center justify-center whitespace-nowrap px-4 py-2 font-apercu text-base font-normal text-white">
                People
              </div>
              <div className="blog-category-btn flex cursor-pointer items-center justify-center whitespace-nowrap px-4 py-2 font-apercu text-base font-normal text-white">
                Engineering
              </div>
              <div className="blog-category-btn flex cursor-pointer items-center justify-center whitespace-nowrap px-4 py-2 font-apercu text-base font-normal text-white">
                NFT
              </div>
            </div>
          </div>
        </section>
        <section className="mb-16 w-full">
          <div className="mx-auto max-w-[1352px] px-4">
            <div
              className="flex flex-col overflow-hidden rounded-md border border-solid bg-[#0D0D0D] lg:flex-row"
              style={{ borderColor: 'rgba(255, 255, 255, 0.1' }}
            >
              <div className="mb-4 w-full max-w-full overflow-hidden rounded-md lg:mb-0 lg:rounded-none">
                <Image
                  src="/assets/images/blog-main-img.png"
                  alt="blog-main"
                  width={769}
                  height={500}
                  className="h-full w-full"
                />
              </div>
              <div className="max-w-[543px] p-4 sm:p-6 lg:px-14 lg:py-12">
                <div className="mb-6 flex items-center">
                  <div className="mr-4 flex items-center justify-center rounded-sm bg-white px-2 py-1 font-apercu text-sm font-medium text-[#0D0D0D]">
                    Crypto
                  </div>
                  <p className="font-apercu text-sm font-medium text-white">5 min read</p>
                </div>
                <h2 className="mb-4 font-apercu text-[40px] font-bold leading-[120%] text-white">
                  Your passport to the web3 economy
                </h2>
                <p className="mb-12 font-apercu text-base font-normal leading-[150%] text-white opacity-60 lg:mb-[79px]">
                  If you’ve read this far and you’re wondering what “web3” is exactly, this is one
                  of those need-to-knows, and it’s pretty simple. We’ll explain more below, but in
                  short web3 is the next era of the internet in which blockchain technology will
                  play a central role.
                </p>
                <button
                  type="button"
                  className="blog-readmore-btn flex items-center justify-between rounded border border-solid border-white px-4 py-2 font-apercu text-base font-normal text-white"
                >
                  Read more
                  <svg
                    className="ml-1"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10.7937 7.85072C10.9743 8.03134 10.9743 8.32413 10.7937 8.50474L6.0784 13.22C5.89778 13.4006 5.605 13.4006 5.42438 13.22L5.20633 13.002C5.02571 12.8214 5.02571 12.5285 5.20633 12.3479L9.37654 8.17773L5.20633 4.00752C5.02571 3.8269 5.02571 3.53411 5.20633 3.35349L5.42438 3.13544C5.60499 2.95482 5.89778 2.95482 6.0784 3.13544L10.7937 7.85072Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="mb-16 w-full">
          <div className="mx-auto max-w-[1352px] px-4">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
              {blogsList.map((blog) => (
                <Article key={blog?.id} {...blog} />
              ))}
            </div>
            <div className="mt-16 flex justify-center">
              <div className="flex justify-center">
                <div>
                  <nav
                    className="isolate inline-flex space-x-2 sm:space-x-4"
                    aria-label="Pagination"
                  >
                    <a
                      href="#"
                      className="pagination-btn flex h-[40px] w-[40px] items-center justify-center rounded-sm border border-solid bg-[#0D0D0D]"
                      style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M5.20632 7.85074C5.0257 8.03136 5.0257 8.32415 5.20632 8.50477L9.9216 13.22C10.1022 13.4006 10.395 13.4006 10.5756 13.22L10.7937 13.002C10.9743 12.8214 10.9743 12.5286 10.7937 12.3479L6.62346 8.17775L10.7937 4.00754C10.9743 3.82692 10.9743 3.53413 10.7937 3.35351L10.5756 3.13546C10.395 2.95485 10.1022 2.95485 9.9216 3.13546L5.20632 7.85074Z"
                          fill="white"
                        />
                      </svg>
                    </a>
                    <a
                      href="#"
                      aria-current="page"
                      className="pagination-btn active flex h-[40px] w-[40px] items-center justify-center rounded-sm border border-solid bg-[#0D0D0D] font-apercu text-base font-normal text-white"
                      style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}
                    >
                      1
                    </a>
                    <a
                      href="#"
                      className="pagination-btn flex h-[40px] w-[40px] items-center justify-center rounded-sm border border-solid bg-[#0D0D0D] font-apercu text-base font-normal text-white"
                      style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}
                    >
                      2
                    </a>
                    <a
                      href="#"
                      className="pagination-btn flex h-[40px] w-[40px] items-center justify-center rounded-sm border border-solid bg-[#0D0D0D] font-apercu text-base font-normal text-white"
                      style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}
                    >
                      3
                    </a>
                    <a
                      href="#"
                      className="pagination-btn flex h-[40px] w-[40px] items-center justify-center rounded-sm border border-solid bg-[#0D0D0D] font-apercu text-base font-normal text-white"
                      style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}
                    >
                      4
                    </a>
                    <a
                      href="#"
                      className="pagination-btn flex h-[40px] w-[40px] items-center justify-center rounded-sm border border-solid bg-[#0D0D0D] font-apercu text-base font-normal text-white"
                      style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}
                    >
                      5
                    </a>
                    <a
                      href="#"
                      className="pagination-btn flex h-[40px] w-[40px] items-center justify-center rounded-sm border border-solid bg-[#0D0D0D]"
                      style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M10.7937 7.85074C10.9743 8.03136 10.9743 8.32415 10.7937 8.50477L6.0784 13.22C5.89778 13.4006 5.605 13.4006 5.42438 13.22L5.20633 13.002C5.02571 12.8214 5.02571 12.5286 5.20633 12.3479L9.37654 8.17775L5.20633 4.00754C5.02571 3.82692 5.02571 3.53413 5.20633 3.35351L5.42438 3.13546C5.60499 2.95485 5.89778 2.95485 6.0784 3.13546L10.7937 7.85074Z"
                          fill="white"
                        />
                      </svg>
                    </a>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
        {showModal && <Joinlist setOpenModal={setShowModal} />}
      </main>
    </div>
  );
}
