import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Joinlist } from '@components/form';
import { Navbar, Footer } from 'layout';

export default function BlogDetail() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <Navbar setShowModal={setShowModal} />
      <main className="flex min-h-screen flex-col items-center justify-between bg-[#0D0D0D]">
        <section className="blog-hero-section relative w-full overflow-hidden bg-[#0D0D0D] pb-[50px] pt-[150px] text-center lg:pb-24 lg:pt-[324px] lg:text-left">
          <div className="relative z-[1] mx-auto flex max-w-[1352px] flex-col items-center justify-center px-4 text-center">
            <div className="max-w-[700px]">
              <h1 className="mb-6 text-left font-unbounded text-4xl font-bold text-white lg:text-[56px] lg:leading-[69px]">
                10 Secrets for managing a remote team{' '}
              </h1>
              <div className="flex items-center">
                <Image
                  className="mr-6 inline-block h-[56px] w-[56px] rounded-full"
                  src="/assets/images/avatar.png"
                  alt=""
                  width={56}
                  height={56}
                />
                <p className="font-mulish text-sm font-semibold text-[#6D7D8B]">Shedrack eze</p>
                <div className="mx-6 font-mulish text-sm font-semibold text-[#6D7D8B]">I</div>
                <p className="font-mulish text-sm font-semibold text-[#6D7D8B]">2nd January,2022</p>
              </div>
            </div>
          </div>
        </section>
        <section className="mb-10 w-full">
          <div className="mx-auto max-w-[1352px] px-4">
            <div className="mx-auto max-w-[900px]">
              <div className="mb-16 w-full sm:mb-24">
                <Image src="/assets/images/blog-detail-img.png" alt="" width={900} height={450} />
              </div>
              <p className="mb-[29.37px] font-inter text-lg font-semibold leading-[29.37px] text-[#C3CFDA]">
                If you’re thinking of starting a blog of your own, but just don’t have a clue on
                what to blog about, then fear not!
              </p>
              <p className="mb-[29.37px] font-inter text-lg font-semibold leading-[29.37px] text-[#C3CFDA]">
                In this article, I have included a whole load of blog examples from a wide variety
                of different niches, all run on different blogging platforms like WordPress, Joomla!
                and Drupal.
              </p>
              <p className="mb-[29.37px] font-inter text-lg font-semibold leading-[29.37px] text-[#C3CFDA]">
                Since the beginning of the internet, millions and millions and millions of blogs
                have been created. Many have died due to lost interest or their owners giving up on
                the idea, while others have thrived and continue to grow, making money and earning
                their owners a steady income. It’s a constant evolution of content that keeps people
                coming back for more, especially if these blogs contact highly resourceful material
                that people find useful and interesting.
              </p>
              <p className="mb-[29.37px] font-inter text-lg font-semibold leading-[29.37px] text-[#C3CFDA]">
                Each example listed in this blog post are all different in some way and all bring
                something unique to their readers & subscribers. I want to show you what is possible
                and how you can take inspiration from them and create an awesome blog of your own.
              </p>
              <p className="mb-[29.37px] font-inter text-lg font-semibold leading-[29.37px] text-[#C3CFDA]">
                Some of these blogs make over $100k a month, others are just a hobby for their
                owners, but all have the same purpose at their core… the love of writing and sharing
                information. Some of these blogs make over $100k a month, others are just a hobby
                for their owners, but all have the same purpose at their core… the love of writing
                and
              </p>
              <p className="font-inter text-lg font-semibold leading-[29.37px] text-[#C3CFDA]">
                Some of these blogs make over $100k a month, others are just a hobby for their
                owners, but all have the same purpose at their core… the love of writing and sharing
                information. Some of these blogs make over $100k a month, others are just a hobby
                for their owners, but all have the same purpose at their core… the love of writing
                and sharing information.
              </p>
              <div className="my-16 flex items-center justify-center sm:my-24">
                <Image
                  className="mr-[15px] inline-block h-[56px] w-[56px] rounded-full"
                  src="/assets/images/avatar.png"
                  alt=""
                  width={56}
                  height={56}
                />
                <div>
                  <p className="font-inter text-sm font-semibold leading-[21.08px] text-[#BDC7E1]">
                    Written by
                  </p>
                  <p className="my-[5px] font-inter text-2xl font-normal leading-[29px] text-[#C3CFDA]">
                    Shedrack Eze
                  </p>
                  <p className="font-inter text-sm font-semibold leading-[21.08px] text-[#989898]">
                    CEO Team App
                  </p>
                </div>
              </div>
              <div
                className="mx-auto h-px max-w-[700px]"
                style={{ background: 'rgba(109, 125, 139, 0.22)' }}
              ></div>
            </div>
          </div>
        </section>
        <Footer />
        {showModal && <Joinlist setOpenModal={setShowModal} />}
      </main>
    </div>
  );
}
