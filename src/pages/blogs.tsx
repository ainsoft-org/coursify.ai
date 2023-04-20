import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Joinlist } from "@components/form";
import { Navbar, Footer } from "layout";

export default function Blogs() {
	const blogsList = [
		{
			id: 1,
			imageUrl: "/assets/images/blog-img-1.png",
			category: "Blockcahin",
			time: "5 min read",
			title: "A beginner’s guide to blackchain for engineers",
			disc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
		},
		{
			id: 2,
			imageUrl: "/assets/images/blog-img-2.png",
			category: "People",
			time: "5 min read",
			title: "How to secure have your crypto wallet",
			disc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
		},
		{
			id: 3,
			imageUrl: "/assets/images/blog-img-3.png",
			category: "NFT",
			time: "5 min read",
			title: "New NFT projects to watch : December 2022",
			disc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
		},
		{
			id: 4,
			imageUrl: "/assets/images/blog-img-4.png",
			category: "Engineering",
			time: "5 min read",
			title: "What is a Decentralized Autonomous Organization ?",
			disc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
		},
		{
			id: 5,
			imageUrl: "/assets/images/blog-img-5.png",
			category: "Crypto",
			time: "5 min read",
			title: "Crypto state of play : September 2022",
			disc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
		},
		{
			id: 1,
			imageUrl: "/assets/images/blog-img-6.png",
			category: "Blockcahin",
			time: "5 min read",
			title: "Guide to buy cryptocurrency safly : September 2022",
			disc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
		},
	];

	const [showModal, setShowModal] = useState(false);
	return (
		<div>
			<Navbar setShowModal={setShowModal} />
			<main className="flex min-h-screen flex-col items-center justify-between bg-[#0D0D0D]">
				<section className="w-full blog-hero-section lg:pb-16 lg:pt-[198px] pt-[150px] pb-[50px] relative bg-[#0D0D0D] overflow-hidden text-center lg:text-left">
					<div className="max-w-[1352px] mx-auto flex flex-col items-center justify-center px-4 relative z-[1] text-center">
						<p className="text-white font-apercu font-medium text-base flex items-center mb-3.5">
							Blog{" "}
							<Image
								src="/assets/images/blog-frame.png"
								alt="logo"
								width={16}
								height={16}
							/>
						</p>
						<h1 className="text-white font-apercu font-bold lg:text-[64px] text-4xl lg:leading-[120%] mb-4">
							News and insights
						</h1>
						<p className="text-white font-apercu font-normal lg:text-lg text-base lg:leading-[150%] leading-[135%] max-w-[473px] opacity-60 mb-12">
							Learn about cryptocurrency, NFTs, and blockchain, discover our
							latest product updates, partnership announcements, user stories,
							and more.
						</p>
						<div
							className="bg-[#0D0D0D] border border-solid p-2 rounded-md flex items-center overflow-x-auto max-w-full"
							style={{
								boxShadow: "0px 4px 10px rgba(17, 17, 17, 0.02)",
								borderColor: "rgba(255, 255, 255, 0.08",
							}}
						>
							<div className="py-2 px-4 text-base font-apercu font-normal text-white flex items-center justify-center cursor-pointer whitespace-nowrap blog-category-btn active">
								View all
							</div>
							<div className="py-2 px-4 text-base font-apercu font-normal text-white flex items-center justify-center cursor-pointer whitespace-nowrap blog-category-btn">
								Crypto
							</div>
							<div className="py-2 px-4 text-base font-apercu font-normal text-white flex items-center justify-center cursor-pointer whitespace-nowrap blog-category-btn">
								Blockchain
							</div>
							<div className="py-2 px-4 text-base font-apercu font-normal text-white flex items-center justify-center cursor-pointer whitespace-nowrap blog-category-btn">
								Announcements
							</div>
							<div className="py-2 px-4 text-base font-apercu font-normal text-white flex items-center justify-center cursor-pointer whitespace-nowrap blog-category-btn">
								People
							</div>
							<div className="py-2 px-4 text-base font-apercu font-normal text-white flex items-center justify-center cursor-pointer whitespace-nowrap blog-category-btn">
								Engineering
							</div>
							<div className="py-2 px-4 text-base font-apercu font-normal text-white flex items-center justify-center cursor-pointer whitespace-nowrap blog-category-btn">
								NFT
							</div>
						</div>
					</div>
				</section>
				<section className="w-full mb-16">
					<div className="max-w-[1352px] mx-auto px-4">
						<div
							className="border border-solid bg-[#0D0D0D] rounded-md flex lg:flex-row flex-col overflow-hidden"
							style={{ borderColor: "rgba(255, 255, 255, 0.1" }}
						>
							<div className="max-w-full w-full rounded-md lg:rounded-none overflow-hidden mb-4 lg:mb-0">
								<Image
									src="/assets/images/blog-main-img.png"
									alt="blog-main"
									width={769}
									height={500}
									className="w-full h-full"
								/>
							</div>
							<div className="lg:py-12 lg:px-14 sm:p-6 p-4 max-w-[543px]">
								<div className="flex items-center mb-6">
									<div className="mr-4 bg-white py-1 px-2 rounded-sm text-[#0D0D0D] font-apercu font-medium text-sm flex items-center justify-center">
										Crypto
									</div>
									<p className="font-apercu font-medium text-sm text-white">
										5 min read
									</p>
								</div>
								<h2 className="font-apercu font-bold text-white text-[40px] leading-[120%] mb-4">
									Your passport to the web3 economy
								</h2>
								<p className="font-apercu font-normal text-white opacity-60 text-base leading-[150%] lg:mb-[79px] mb-12">
									If you’ve read this far and you’re wondering what “web3” is
									exactly, this is one of those need-to-knows, and it’s pretty
									simple. We’ll explain more below, but in short web3 is the
									next era of the internet in which blockchain technology will
									play a central role.
								</p>
								<button
									type="button"
									className="flex items-center justify-between border border-solid border-white rounded py-2 px-4 font-apercu font-normal text-white text-base blog-readmore-btn"
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
				<section className="w-full mb-16">
					<div className="max-w-[1352px] mx-auto px-4">
						<div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 lg:gap-y-16 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
							{blogsList.map((blog) => (
								<article
									key={blog.id}
									className="flex max-w-xl flex-col items-start justify-between bg-[#0D0D0D] border border-solid border-white rounded-md lg:mx-0 mx-auto"
									style={{ borderColor: "rgba(255, 255, 255, 0.1)" }}
								>
									<div className="w-full">
										<Image
											src={blog.imageUrl}
											alt="blog-image"
											width={416}
											height={300}
											className="w-full"
										/>
									</div>
									<div className="p-6">
										<div className="flex items-center mb-4">
											<div className="mr-4 bg-white py-1 px-2 rounded-sm text-[#0D0D0D] font-apercu font-medium text-sm flex items-center justify-center">
												{blog.category}
											</div>
											<p className="font-apercu font-medium text-sm text-white">
												{blog.time}
											</p>
										</div>
										<h2 className="font-apercu font-bold text-2xl text-white leading-[139%] mb-2">
											{blog.title}
										</h2>
										<p className="font-apercu font-normal text-white opacity-60 text-base leading-[150%] mb-6">
											{blog.disc}
										</p>
										<button
											type="button"
											className="flex items-center justify-between border border-solid border-white rounded py-2 px-4 font-apercu font-normal text-white text-base blog-readmore-btn"
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
								</article>
							))}
						</div>
						<div className="mt-16 flex justify-center">
							<div className="flex justify-center">
								<div>
									<nav
										className="isolate inline-flex sm:space-x-4 space-x-2"
										aria-label="Pagination"
									>
										<a
											href="#"
											className="bg-[#0D0D0D] border border-solid w-[40px] h-[40px] rounded-sm flex items-center justify-center pagination-btn"
											style={{ borderColor: "rgba(255, 255, 255, 0.1)" }}
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
											className="font-apercu font-normal text-white text-base bg-[#0D0D0D] border border-solid w-[40px] h-[40px] rounded-sm flex items-center justify-center pagination-btn active"
											style={{ borderColor: "rgba(255, 255, 255, 0.1)" }}
										>
											1
										</a>
										<a
											href="#"
											className="font-apercu font-normal text-white text-base bg-[#0D0D0D] border border-solid w-[40px] h-[40px] rounded-sm flex items-center justify-center pagination-btn"
											style={{ borderColor: "rgba(255, 255, 255, 0.1)" }}
										>
											2
										</a>
										<a
											href="#"
											className="font-apercu font-normal text-white text-base bg-[#0D0D0D] border border-solid w-[40px] h-[40px] rounded-sm flex items-center justify-center pagination-btn"
											style={{ borderColor: "rgba(255, 255, 255, 0.1)" }}
										>
											3
										</a>
										<a
											href="#"
											className="font-apercu font-normal text-white text-base bg-[#0D0D0D] border border-solid w-[40px] h-[40px] rounded-sm flex items-center justify-center pagination-btn"
											style={{ borderColor: "rgba(255, 255, 255, 0.1)" }}
										>
											4
										</a>
										<a
											href="#"
											className="font-apercu font-normal text-white text-base bg-[#0D0D0D] border border-solid w-[40px] h-[40px] rounded-sm flex items-center justify-center pagination-btn"
											style={{ borderColor: "rgba(255, 255, 255, 0.1)" }}
										>
											5
										</a>
										<a
											href="#"
											className="bg-[#0D0D0D] border border-solid w-[40px] h-[40px] rounded-sm flex items-center justify-center pagination-btn"
											style={{ borderColor: "rgba(255, 255, 255, 0.1)" }}
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
