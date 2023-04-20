import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Hero({
	setShowModal,
}: {
	setShowModal: (value: boolean) => void;
}) {
	return (
		<section className="w-full hero-section lg:py-[226px] py-[150px] pb-[50px] relative bg-[#0D0D0D] overflow-hidden text-center lg:text-left">
			<div className="max-w-[1352px] mx-auto flex flex-col-reverse lg:flex-row items-center justify-between px-4 relative z-[1]">
				<div className="lg:pr-7 pr-0 max-w-[612px]">
					<h1 className="lg:text-[56px] text-[46px] leading-[59px] lg:leading-[69px] text-white font-unbounded font-semibold">
						Effortless AI-Powered{" "}
						<span className="gradient-text">Course Building</span>
					</h1>
					<p className="lg:text-2xl text-xl leading-[29px] text-white my-6 font-inter font-normal">
						Empowering Educators, Revolutionizing Learning: The Future of Course
						Creation
					</p>
					<button
						type="button"
						className="join-waitlist-btn font-unbounded text-white font-medium lg:text-[28px] text-[22px] px-6 py-3 text-center mr-3 md:mr-0"
						onClick={() => {
							setShowModal(true);
						}}
					>
						Join Waitlist Now
					</button>
				</div>
				<div className="lg:pl-7 pl-0 lg:max-w-[589px] max-w-[489px] lg:mb-0 mb-3 w-full lg:max-h-[424px] max-h-[350px] h-full rounded-[64px] overflow-hidden relative flex items-center justify-center">
					<Image
						src="/assets/images/video.png"
						alt="logo"
						width={0}
						height={0}
						sizes="100vw"
						style={{ width: "100%", height: "auto" }}
					/>
					<Image
						src="/assets/images/video-play.png"
						alt="logo"
						width={80}
						height={80}
						className="absolute cursor-pointer"
					/>
				</div>
			</div>
		</section>
	);
}
