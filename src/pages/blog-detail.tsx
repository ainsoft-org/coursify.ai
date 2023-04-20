import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Joinlist } from "@components/form";
import { Navbar, Footer } from "layout";

export default function BlogDetail() {
	const [showModal, setShowModal] = useState(false);
	return (
		<div>
			<Navbar setShowModal={setShowModal} />
			<main className="flex min-h-screen flex-col items-center justify-between bg-[#0D0D0D]">
				<section className="w-full blog-hero-section lg:pb-24 lg:pt-[324px] pt-[150px] pb-[50px] relative bg-[#0D0D0D] overflow-hidden text-center lg:text-left">
					<div className="max-w-[1352px] mx-auto flex flex-col items-center justify-center px-4 relative z-[1] text-center">
						<div className="max-w-[700px]">
							<h1 className="text-white font-unbounded font-bold lg:text-[56px] text-4xl lg:leading-[69px] mb-6 text-left">
								10 Secrets for managing a remote team{" "}
							</h1>
							<div className="flex items-center">
								<Image
									className="inline-block h-[56px] w-[56px] rounded-full mr-6"
									src="/assets/images/avatar.png"
									alt=""
									width={56}
									height={56}
								/>
								<p className="font-mulish text-[#6D7D8B] text-sm font-semibold">
									Shedrack eze
								</p>
								<div className="font-mulish text-[#6D7D8B] text-sm font-semibold mx-6">
									I
								</div>
								<p className="font-mulish text-[#6D7D8B] text-sm font-semibold">
									2nd January,2022
								</p>
							</div>
						</div>
					</div>
				</section>
				<section className="w-full mb-10">
					<div className="max-w-[1352px] mx-auto px-4">
						<div className="max-w-[900px] mx-auto">
							<div className="w-full sm:mb-24 mb-16">
								<Image
									src="/assets/images/blog-detail-img.png"
									alt=""
									width={900}
									height={450}
								/>
							</div>
							<p className="font-inter text-[#C3CFDA] font-semibold leading-[29.37px] text-lg mb-[29.37px]">
								If you’re thinking of starting a blog of your own, but just
								don’t have a clue on what to blog about, then fear not!
							</p>
							<p className="font-inter text-[#C3CFDA] font-semibold leading-[29.37px] text-lg mb-[29.37px]">
								In this article, I have included a whole load of blog examples
								from a wide variety of different niches, all run on different
								blogging platforms like WordPress, Joomla! and Drupal.
							</p>
							<p className="font-inter text-[#C3CFDA] font-semibold leading-[29.37px] text-lg mb-[29.37px]">
								Since the beginning of the internet, millions and millions and
								millions of blogs have been created. Many have died due to lost
								interest or their owners giving up on the idea, while others
								have thrived and continue to grow, making money and earning
								their owners a steady income. It’s a constant evolution of
								content that keeps people coming back for more, especially if
								these blogs contact highly resourceful material that people find
								useful and interesting.
							</p>
							<p className="font-inter text-[#C3CFDA] font-semibold leading-[29.37px] text-lg mb-[29.37px]">
								Each example listed in this blog post are all different in some
								way and all bring something unique to their readers &
								subscribers. I want to show you what is possible and how you can
								take inspiration from them and create an awesome blog of your
								own.
							</p>
							<p className="font-inter text-[#C3CFDA] font-semibold leading-[29.37px] text-lg mb-[29.37px]">
								Some of these blogs make over $100k a month, others are just a
								hobby for their owners, but all have the same purpose at their
								core… the love of writing and sharing information. Some of these
								blogs make over $100k a month, others are just a hobby for their
								owners, but all have the same purpose at their core… the love of
								writing and
							</p>
							<p className="font-inter text-[#C3CFDA] font-semibold leading-[29.37px] text-lg">
								Some of these blogs make over $100k a month, others are just a
								hobby for their owners, but all have the same purpose at their
								core… the love of writing and sharing information. Some of these
								blogs make over $100k a month, others are just a hobby for their
								owners, but all have the same purpose at their core… the love of
								writing and sharing information.
							</p>
							<div className="sm:my-24 my-16 flex items-center justify-center">
								<Image
									className="inline-block h-[56px] w-[56px] rounded-full mr-[15px]"
									src="/assets/images/avatar.png"
									alt=""
									width={56}
									height={56}
								/>
								<div>
									<p className="font-inter text-[#BDC7E1] font-semibold leading-[21.08px] text-sm">
										Written by
									</p>
									<p className="font-inter text-[#C3CFDA] font-normal leading-[29px] text-2xl my-[5px]">
										Shedrack Eze
									</p>
									<p className="font-inter text-[#989898] font-semibold leading-[21.08px] text-sm">
										CEO Team App
									</p>
								</div>
							</div>
							<div
								className="max-w-[700px] h-px mx-auto"
								style={{ background: "rgba(109, 125, 139, 0.22)" }}
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
