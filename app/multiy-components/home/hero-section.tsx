import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <main className="relative h-[750px]">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={"/bg-img.png"}
          alt="Background"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      {/* Content Section */}
      <div className="h-full flex flex-col justify-center items-center text-center md:items-start md:text-start px-8 md:px-16 text-white">
        <p className="text-sm md:text-lg">SUMMER 2020</p>
        <h1 className="text-4xl md:text-4xl lg:text-6xl font-bold my-10">
          NEW COLLECTION
        </h1>
        <p className="text-lg md:text-lg font-semibold mb-10">
          We know how large objects will act,<br />
          but things on a small scale.
        </p>

        <Link href={"/productpage"}>
        <button className="px-8 py-3 text-base md:text-lg font-bold bg-green-500 text-white rounded hover:bg-green-600 transition duration-300">
          SHOP NOW
        </button>
        </Link>
      </div>
    </main>
  );
}
