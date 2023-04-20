import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full lg:py-24 py-20 relative bg-[#101010]">
      <div className="max-w-[1352px] mx-auto px-4">
        <div className="max-w-[538px]">
          <h1 className="text-white lg:text-[57px] text-[42px] leading-[56px] Lg:leading-[71px] capitalize mb-6 font-unbounded font-semibold">
            🚀 Contact us
          </h1>
          <p className="lg:text-2xl text-xl leading-[29px] text-white font-inter font-normal">
            Tailor your plan to your specific business needs with our enterprise
            offering.
          </p>
          <p className="text-white lg:text-2xl text-xl leading-[29px] font-inter font-semibold">
            +1 (509) 903 6943
          </p>
          <p className="text-white lg:text-2xl text-xl leading-[29px] mb-[40px] font-inter font-semibold">
            info@writersbrain.ai
          </p>
          <p className="text-[#D6D6D6] lg:text-2xl text-xl leading-[29px] mb-2 font-inter font-normal">
            At Coursify.AI we are committed to protecting the privacy of our
            costumers.
          </p>
          <ul className="flex mt-4 text-xl md:space-x-3 space-x-2 md:mt-0 mb-6">
            <li>
              <Link
                href="#"
                className="block md:p-0 text-[#6462FF] lg:text-2xl text-xl font-inter font-semibold"
              >
                Privacy policy
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block md:p-0 text-[#6462FF] lg:text-2xl text-xl font-inter font-semibold"
              >
                Tems & Conditions
              </Link>
            </li>
          </ul>
          <div className="flex items-center">
            <Image
              src="/assets/images/github.svg"
              alt="logo"
              width={32}
              height={32}
              className="mr-3 cursor-pointer"
            />
            <Image
              src="/assets/images/twitter.svg"
              alt="logo"
              width={32}
              height={32}
              className="mr-3 cursor-pointer"
            />
            <Image
              src="/assets/images/instagram.svg"
              alt="logo"
              width={32}
              height={32}
              className="mr-3 cursor-pointer"
            />
            <Image
              src="/assets/images/linkdin.svg"
              alt="logo"
              width={32}
              height={32}
              className="mr-3 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
