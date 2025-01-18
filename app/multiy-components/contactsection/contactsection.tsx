import React from 'react'
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { IoIosMailUnread, IoLogoFacebook } from 'react-icons/io'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { LuPhone } from 'react-icons/lu'
import { IoLocationSharp } from 'react-icons/io5'

export default function Contact_Section() {
    return (
        <main>

            {/* section 01 */}
            <div className='flex justify-center items-center flex-col md:flex-row lg:flex-row gap-20'>
                <div className='flex flex-col mx-3'>
                    <p className='text-lg font-sans font-semibold mb-5 text-gray-500  text-center md:text-start lg:text-start'>CONTACT US</p>
                    <h2 className='text-5xl font-sans font-bold mb-8'>Get in touch<br /> today!</h2>
                    <p className='text-lg font-sans font-semibold text-gray-500 mb-5'>We know how large objects will act,<br />
                        but things on a small scale</p>
                    <h4 className='text-2xl font-serif font-semibold'>Phone ; +451 215 215 </h4>
                    <h4 className='text-2xl font-serif font-semibold'>Fax : +451 215 215</h4>
                    <div className='flex gap-4 my-8'>
                        <FaTwitter size={30} />
                        <IoLogoFacebook size={30} />
                        <FaInstagram size={30} />
                        <FaLinkedin size={30} />
                    </div>
                </div>
                <div className='bg-[#ffb1b1] rounded-full'>
                    <p className='bg-[#ffb1b1] rounded-full w-4 h-4'></p>
                    <p className='bg-[#ffb1b1] rounded-full w-8 h-8 m-2'></p>
                    <Image src={"/contactimg.png"} height={400} width={500} alt='contact-img' />
                </div>
            </div>

            {/* section 02 */}

            <div className='flex justify-center items-center flex-col my-32 text-lg font-sans font-semibold text-gray-800'>
                <div className='text-center'>
                    <p className=' mb-5'> VISIT OUR OFFICE</p>
                    <h3 className='text-5xl text-[#3c3c3c] font-sans font-bold mb-8 mx-3'>We help small businesses<br />
                        with big ideas</h3>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 mt-24'>
                    <div className='flex justify-center items-center flex-col gap-2 px-6'>
                        <LuPhone size={90} className='text-blue-500 mb-6 '/>
                        <p>georgia.young@example.com</p>
                        <p>georgia.young@ple.com</p>
                        <h4 className='mt-5'>Get support</h4>
                        <Button className='border border-blue-500 bg-white text-blue-500 text-lg rounded-3xl py-6 px-8'>Submit request</Button>
                    </div>
                    <div className='flex justify-center items-center text-white flex-col gap-2 rounded-md bg-[#252B42] py-20 px-6'>
                        <IoLocationSharp  size={100} className='text-blue-500 mb-6'/>
                        <p>georgia.young@example.com</p>
                        <p>georgia.young@ple.com</p>
                        <h4 className='mt-5'>Get support</h4>
                        <Button className='border border-blue-500 bg-[#252B42] text-blue-500 text-lg rounded-3xl py-6 px-8'>Submit request</Button>
                    </div>
                    <div className='flex justify-center items-center flex-col gap-2 px-6'>
                        <IoIosMailUnread  size={120} className='text-blue-500 '/>
                        <p>georgia.young@example.com</p>
                        <p>georgia.young@ple.com</p>
                        <h4 className='mt-5'>Get support</h4>
                        <Button className='border border-blue-500 bg-white text-blue-500 text-lg rounded-3xl py-6 px-8'>Submit request</Button>
                    </div>
                </div>
            </div>

            <div className='flex justify-center items-center flex-col mb-10'>
                <p className='text-lg font-sans font-semibold text-gray-500 mb-5'>WE Can&#39;t WAIT TO MEET YOU</p>
                <h3 className='text-5xl text-[#3c3c3c] font-sans font-bold mb-8 mx-3'>Lets talk</h3>
                <Button className='bg-blue-500 px-10 py-7 text-lg hover:bg-white hover:text-black'>Try it free now</Button>
            </div>
        </main>
    )
}
