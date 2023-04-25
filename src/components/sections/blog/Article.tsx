import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Article(props: Record<string, any>) {
  const router = useRouter();
  return (
    <article
      key={props.id}
      className="mx-auto flex max-w-xl flex-col items-start justify-between rounded-md border border-solid border-white bg-[#0D0D0D] lg:mx-0"
      style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}
    >
      <div className="w-full">
        <Image src={props.imageUrl} alt="blog-image" width={416} height={300} className="w-full" />
      </div>
      <div className="p-6">
        <div className="mb-4 flex items-center">
          <div className="mr-4 flex items-center justify-center rounded-sm bg-white px-2 py-1 font-apercu text-sm font-medium text-[#0D0D0D]">
            {props.category}
          </div>
          <p className="font-apercu text-sm font-medium text-white">{props.time}</p>
        </div>
        <h2 className="mb-2 font-apercu text-2xl font-bold leading-[139%] text-white">
          {props.title}
        </h2>
        <p className="mb-6 font-apercu text-base font-normal leading-[150%] text-white opacity-60">
          {props.disc}
        </p>
        <button
          type="button"
          onClick={() => {
            router.push(`/blog/${props.id}`);
          }}
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
    </article>
  );
}
