import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import { FaInstagram, FaToggleOff, FaTwitter } from 'react-icons/fa6'
import Image from 'next/image'
import { GoChevronRight } from 'react-icons/go'
import Pricing_Card from './pricingcard'
import { FAQsCard } from './pricingfaqs'
import { IoLogoFacebook } from 'react-icons/io5'
import { FaLinkedin } from 'react-icons/fa'

export default function Pricing_Section() {
    return (
        <main>
            <div>

                {/* section 01 */}
                <div className='text-center font-sans font-semibold text-gray-500 my-20'>
                    <p>PRICING</p>
                    <h2 className='text-4xl md:text-4xl lg:text-5xl font-serif font-semibold text-[#454545] my-4'>Simple Pricing</h2>
                    <ul className='flex justify-center items-center gap-2'>
                        <li className='text-[#454545]'><Link href={"/"}>Home</Link> </li>
                        <p><GoChevronRight /></p>
                        <p>Pricing</p>
                    </ul>
                </div>

                {/* section 02 */}
                <div className='flex justify-center items-center flex-col bg-[#FAFAFA]'>
                    <div className="text-center font-sans font-semibold text-gray-500 my-16">
                        <h2 className='text-[#454545] text-5xl my-5 font-bold'>Pricing</h2>
                        <p>Problems trying to resolve the conflict between <br />
                            the two major realms of Classical physics: Newtonian mechanics </p>
                        <div className='flex justify-center items-center my-10 gap-3 text-[#454545] text-xl'>
                            <p>Monthly</p>
                            <FaToggleOff size={40} />
                            <p>Yearly</p>
                            <Button className='bg-blue-500 rounded-2xl py-6 hover:bg-white hover:text-black'>Save 25%</Button>
                        </div>
                    </div>
                    <div>
                        <Pricing_Card />
                    </div>
                    <div className='text-center my-20 text-lg'>
                        <h2>Trusted By Over 4000
                            Big Companies</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-14 md:gap-8 lg:gap-2 bg-[#FAFAFA] px-6 md:px-14 lg:px-18 py-10 md:py-10 lg:py-8 justify-items-center items-center">
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
                    </div>
                </div>

                {/* section 02 */}
                <div className='flex flex-col justify-center items-center'>
                    <h2 className='text-5xl font-sans font-bold my-8'>Pricing FAQs</h2>
                    <p className='text-md font-sans font-semibold text-center mb-10 text-gray-500'>Problems trying to resolve the conflict between <br />
                        the two major realms of Classical physics</p>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-5 px-5 md:px-10 lg:px-20'>
                        <FAQsCard />
                        <FAQsCard />
                        <FAQsCard />
                        <FAQsCard />
                        <FAQsCard />
                        <FAQsCard />
                    </div>
                    <p className='text-lg font-sans font-semibold text-center mb-10 text-gray-500 mt-10'>Havent got your answer? Contact our support</p>
                </div>


                {/* section 03 */}
                <div className='flex justify-center items-center flex-col text-center'>
                    <h3 className='text-5xl font-sans font-bold my-8 mx-2'>Start your 14 days free trial</h3>
                    <p className='text-md font-sans font-semibold text-center mb-10 text-gray-500 px-4'>Met minim Mollie non desert Alamo est sit cliquey dolor<br />
                        do met sent. RELIT official consequent.</p>
                    <Button className='bg-blue-500 px-20 text-xl py-7 hover:bg-white hover:text-black'>Try it free now</Button>
                    <div className='flex gap-8 my-10'>
                        <FaTwitter size={30} className='text-blue-500' />
                        <IoLogoFacebook size={30} className='text-blue-900' />
                        <FaInstagram size={30} className='' />
                        <FaLinkedin size={30} className='text-blue-700' />
                    </div>
                </div>
            </div>
        </main>
    );
}
