import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function About_Section() {
  return (
    <main>
      <div className='flex flex-col justify-center items-center font-sans font-semibold my-6'>
        <div className='flex justify-center items-center flex-col  md:flex-row gap-10 md:gap-20 lg:gap-48'>
          <div className='font-sans font-semibold text-md text-center md:text-start lg:text-start md:text-lg lg:text-xl'>
            <p>ABOUT COMPANY</p>
            <h2 className='text-5xl font-extrabold text-[#252525] my-8'>ABOUT US</h2>
            <p className='line-clamp-2 my-7 text-gray-400'>We know how large objects will act,<br />
              but things on a small scale</p>
            <Button className='bg-blue-500 px-10 py-7 hover:bg-white hover:text-black'>Get Quete Now</Button>
          </div>
          <div className='bg-[#ffbeff] rounded-full bg-cover'>
            <Image src="/about-image.png" alt="about" height={350} width={350} />
          </div>
        </div>
        <div className='flex justify-center items-center mt-20 flex-col text-center md:text-start lg:text-start md:flex-row lg:flex-row max-w-[1000px] px-16 gap-20'>
          <div className='text-lg'>
            <p className='text-red-500 text-sm mb-2'>Problems typing</p>
            <p className='text-[#333333]'>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.</p>
          </div>
          <div>
            <p className='text-[#5d5d5d]'>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics. </p>
          </div>
        </div>
        <div className='flex justify-center items-center flex-col md:flex-row lg:flex-row gap-28 md:gap-10 lg:gap-32 my-20'>
          <div className='flex justify-center items-center flex-col'><h2 className='text-6xl font-bold mb-2'>15K</h2><p className='text-gray-600'>Happy Customers</p></div>
          <div className='flex justify-center items-center flex-col'><h2 className='text-6xl font-bold mb-2'>150K</h2><p className='text-gray-600'>Monthly Visitors</p></div>
          <div className='flex justify-center items-center flex-col'><h2 className='text-6xl font-bold mb-2'>15</h2><p className='text-gray-600'>Countries  Worldwide</p></div>
          <div className='flex justify-center items-center flex-col'><h2 className='text-6xl font-bold mb-2'>100+</h2><p className='text-gray-600'>Top Partners</p></div>
        </div>
        <div className='px-5 my-20'>
          <Image src={"/videocard.png"} height={600} width={700} alt="video" />
        </div>
        <div>
          <div className='text-center px-2 my-24'>
            <h2 className='text-3xl my-4 font-bold'>Meet Our Team </h2>
            <p className='text-gray-400'>Problems trying to resolve the conflict between <br />
              the two major realms of Classical physics: Newtonian mechanics. </p>
          </div>
          <div className='flex justify-center items-center flex-col md:flex-row lg:flex-row gap-6 '>
            <div className='flex justify-center items-center flex-col my-5'><Image src={"/media1.png"} height={230} width={240} alt='team' /><h3 className='mt-5'>Username</h3><p className='my-3'>Profession</p>
              <div className="flex gap-6">
                <Link
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700 transition"
                >
                  <FaFacebook size={24} />
                </Link>
                <Link
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700 transition"
                >
                  <FaInstagram size={24} />
                </Link>
                <Link
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700 transition"
                >
                  <FaTwitter size={24} />
                </Link>
              </div>
            </div>
            <div className='flex justify-center items-center flex-col my-5'><Image src={"/media2.png"} height={250} width={250} alt='team' /><h3 className='mt-5'>Username</h3><p className='my-3'>Profession</p>
              <div className="flex gap-6">
                <Link
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700 transition"
                >
                  <FaFacebook size={24} />
                </Link>
                <Link
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700 transition"
                >
                  <FaInstagram size={24} />
                </Link>
                <Link
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700 transition"
                >
                  <FaTwitter size={24} />
                </Link>
              </div>
            </div>
            <div className='flex justify-center items-center flex-col my-5'><Image src={"/media3.png"} height={250} width={250} alt='team' /><h3 className='mt-5'>Username</h3><p className='my-3'>Profession</p>
              <div className="flex gap-6">
                <Link
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700 transition"
                >
                  <FaFacebook size={24} />
                </Link>
                <Link
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700 transition"
                >
                  <FaInstagram size={24} />
                </Link>
                <Link
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700 transition"
                >
                  <FaTwitter size={24} />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-[#FAFAFA] text-center pt-10 '>
          <div><h2 className='text-3xl my-4 font-bold px-3'>Big Companies Are Here</h2><p className='text-gray-400 px-2'>Problems trying to resolve the conflict between <br />
            the two major realms of Classical physics: Newtonian mechanics.</p></div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-6 gap-8 md:gap-2 lg:gap-2  px-6 md:px-14 lg:px-18 py-10 md:py-8 lg:py-20 justify-items-center items-center">
            {["logo1.png", "logo2.png", "logo3.png", "logo4.png", "logo5.png", "logo6.png"].map((logo, index) => (
              <div key={index} className="flex justify-center items-center">
                <Image
                  src={`/${logo}`}
                  alt={`Logo ${index + 1}`}
                  width={180}
                  height={130}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
          <div className='flex justify-center items-center flex-col md:flex-row lg:flex-row text-white'>
            <div className='bg-blue-500 font-sans font-semibold text-md w-[350px] md:w-[600px] lg:w-[900px] text-center md:text-start lg:text-start md:text-lg lg:text-xl py-10 md:py-10 lg:py-20 px-10'>
              <p>WORK WITH US</p>
              <h2 className='text-5xl font-extrabold lg:my-8'>Now Lets grow Yours</h2>
              <p className='line-clamp-2 my-4 md:my-4 lg:my-7'>The gradual accumulation of information about atomic and<br /> small-scale behavior during the first quarter of the 20th </p>
              <Button className='border border-white bg-blue-500 px-10 py-7 hover:bg-white hover:text-black'>Get Quete Now</Button>
            </div>
            <div className=''>
              <Image src="/card8.png" alt="about" height={350} width={350} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
