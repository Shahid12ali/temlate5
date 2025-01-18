import { Button } from '@/components/ui/button'
import React from 'react'
import { FaCheck } from 'react-icons/fa6'

export default function Pricing_Card() {
    return (
        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 justify-center items-center  gap-10 md:gap-10 lg:gap-0 flex-col md:flex-row lg:flex-row mx-2'>

            {/* card 1 */}
            <div className='border border-blue-500 bg-white flex justify-center items-center flex-col py-8 px-10 font-sans font-semibold rounded-md'>
                <h2 className='text-3xl font-sans font-semibold my-6'>
                    Free
                </h2>
                <p className='text-center text-lg text-gray-500 mb-6'>
                    Organize across all<br />
                    apps by hand
                </p>
                <div className='flex items-center text-xl gap-2 text-blue-500'>
                    <h3 className='text-5xl'>0</h3>
                    <div>
                        <p>$</p>
                        <p>Per Month</p>
                    </div>
                </div>
                <div className=' my-8 space-y-3'>
                    <div className='flex gap-3 text-xl'>
                        <FaCheck size={23} className='bg-green-400 text-white rounded-full p-1 ' />
                        <p>Unlimited product updates</p>
                    </div>
                    <div className='flex gap-3 text-xl'>
                        <FaCheck size={23} className='bg-green-400 text-white rounded-full p-1 ' />
                        <p>Unlimited product updates</p>
                    </div>
                    <div className='flex gap-3 text-xl'>
                        <FaCheck size={23} className='bg-green-400 text-white rounded-full p-1 ' />
                        <p>Unlimited product updates</p>
                    </div>
                    <div className='flex gap-3 text-xl'>
                        <FaCheck size={23} className='bg-gray-400 text-white rounded-full p-1 ' />
                        <p>1GB  Cloud storage
                        </p>
                    </div>
                    <div className='flex gap-3 text-xl'>
                        <FaCheck size={23} className='bg-gray-400 text-white rounded-full p-1 ' />
                        <p>Email and community<br />
                            support
                        </p>
                    </div>
                </div>
                <div>
                    <Button className='bg-blue-500 px-20 text-xl py-7 '>Try for free</Button>
                </div>
            </div>



            {/* card 2 */}
            <div className='border border-blue-500 bg-[#252B42] text-white flex justify-center items-center flex-col py-20 px-10 font-sans font-semibold rounded-md'>
                <h2 className='text-3xl font-sans font-semibold my-6'>
                   STANDARD
                </h2>
                <p className='text-center text-lg text-gray-500 mb-6'>
                    Organize across all<br />
                    apps by hand
                </p>
                <div className='flex items-center text-xl gap-2 text-blue-500'>
                    <h3 className='text-5xl'>9.99</h3>
                    <div>
                        <p>$</p>
                        <p>Per Month</p>
                    </div>
                </div>
                <div className=' my-8 space-y-3'>
                    <div className='flex gap-3 text-xl'>
                        <FaCheck size={23} className='bg-green-400 text-white rounded-full p-1 ' />
                        <p>Unlimited product updates</p>
                    </div>
                    <div className='flex gap-3 text-xl'>
                        <FaCheck size={23} className='bg-green-400 text-white rounded-full p-1 ' />
                        <p>Unlimited product updates</p>
                    </div>
                    <div className='flex gap-3 text-xl'>
                        <FaCheck size={23} className='bg-green-400 text-white rounded-full p-1 ' />
                        <p>Unlimited product updates</p>
                    </div>
                    <div className='flex gap-3 text-xl'>
                        <FaCheck size={23} className='bg-gray-400 text-white rounded-full p-1 ' />
                        <p>1GB  Cloud storage
                        </p>
                    </div>
                    <div className='flex gap-3 text-xl'>
                        <FaCheck size={23} className='bg-gray-400 text-white rounded-full p-1 ' />
                        <p>Email and community<br />
                            support
                        </p>
                    </div>
                </div>
                <div>
                    <Button className='bg-blue-500 px-20 text-xl py-7 '>Try for free</Button>
                </div>
            </div>


            {/* card 03 */}
            <div className='border border-blue-500 bg-white flex justify-center items-center flex-col py-8 px-10 font-sans font-semibold rounded-md'>
                <h2 className='text-3xl font-sans font-semibold my-6'>
                PREMIUM
                </h2>
                <p className='text-center text-lg text-gray-500 mb-6'>
                    Organize across all<br />
                    apps by hand
                </p>
                <div className='flex items-center text-xl gap-2 text-blue-500'>
                    <h3 className='text-5xl'>19.99</h3>
                    <div>
                        <p>$</p>
                        <p>Per Month</p>
                    </div>
                </div>
                <div className=' my-8 space-y-3'>
                    <div className='flex gap-3 text-xl'>
                        <FaCheck size={23} className='bg-green-400 text-white rounded-full p-1 ' />
                        <p>Unlimited product updates</p>
                    </div>
                    <div className='flex gap-3 text-xl'>
                        <FaCheck size={23} className='bg-green-400 text-white rounded-full p-1 ' />
                        <p>Unlimited product updates</p>
                    </div>
                    <div className='flex gap-3 text-xl'>
                        <FaCheck size={23} className='bg-green-400 text-white rounded-full p-1 ' />
                        <p>Unlimited product updates</p>
                    </div>
                    <div className='flex gap-3 text-xl'>
                        <FaCheck size={23} className='bg-gray-400 text-white rounded-full p-1 ' />
                        <p>1GB  Cloud storage
                        </p>
                    </div>
                    <div className='flex gap-3 text-xl'>
                        <FaCheck size={23} className='bg-gray-400 text-white rounded-full p-1 ' />
                        <p>Email and community<br />
                            support
                        </p>
                    </div>
                </div>
                <div>
                    <Button className='bg-blue-500 px-20 text-xl py-7 '>Try for free</Button>
                </div>
            </div>
        </div>
    )
}
