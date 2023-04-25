import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#101010] py-20 lg:py-24">
      <div className="mx-auto max-w-[1352px] px-4">
        <div className="max-w-[538px]">
          <h1 className="mb-6 font-unbounded text-[42px] font-semibold capitalize leading-[56px] text-white lg:text-[57px] lg:leading-[71px]">
            🚀 Contact us
          </h1>
          <p className="font-inter text-xl font-normal leading-[29px] text-white lg:text-2xl">
            Tailor your plan to your specific business needs with our enterprise offering.
          </p>
          <p className="font-inter text-xl font-semibold leading-[29px] text-white lg:text-2xl">
            +1 (509) 903 6943
          </p>
          <p className="mb-[40px] font-inter text-xl font-semibold leading-[29px] text-white lg:text-2xl">
            info@writersbrain.ai
          </p>
          <p className="mb-2 font-inter text-xl font-normal leading-[29px] text-[#D6D6D6] lg:text-2xl">
            At Coursify.AI we are committed to protecting the privacy of our costumers.
          </p>
          <ul className="mb-6 mt-4 flex space-x-2 text-xl md:mt-0 md:space-x-3">
            <li>
              <Link
                href="#"
                className="block font-inter text-xl font-semibold text-[#6462FF] md:p-0 lg:text-2xl"
              >
                Privacy policy
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block font-inter text-xl font-semibold text-[#6462FF] md:p-0 lg:text-2xl"
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
