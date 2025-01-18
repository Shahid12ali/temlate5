import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Header_2 from '../headers/header2';
import Link from 'next/link';

const TeamSection: React.FC = () => {
    return (
        
        <div className="container mx-auto px-8 py-10">
            <Header_2 />
            {/* Header Section */}
            <div className="text-center mb-8">
                <p className="text-gray-500 uppercase tracking-wide">What We Do</p>
                <h2 className="text-3xl font-bold">Innovation tailored for you</h2>
                <nav className="text-gray-500 mt-2">
                    <span>Home</span> &gt; <span>Team</span>
                </nav>
            </div>

            {/* Team Images Section */}
            <div className="grid grid-cols-5 gap-4">
                <div className="col-span-3">
                    <img
                        src="/team1.png"
                        alt="Large Image"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="col-span-2 grid grid-cols-2 gap-4">
                    {['team2.png', 'team3.png', 'team4.png', 'team5.png'].map((image, index) => (
                        <div key={index}>
                            <img
                                src={`/${image}`}
                                alt={`Image ${index + 2}`}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Meet Our Team Section */}
            <div className="text-center mt-12 mb-8">
                <h3 className="text-2xl font-bold">Meet Our Team</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
                    <div key={item} className="flex flex-col items-center">
                        <img
                            src={`/media${item}.png`}
                            alt={`Team Member ${item}`}
                            className="w-80 h-80 object-cover"
                        />
                        <h4 className="text-xl font-bold mt-4">Username</h4>
                        <p className="text-gray-600">Profession</p>
                        <div className="flex justify-center gap-4 mt-2">
                            <Link href="/" target="_blank" rel="noopener noreferrer">
                                <FaFacebookF className="text-blue-600 text-2xl" />
                            </Link>
                            <Link href="/" target="_blank" rel="noopener noreferrer">
                                <FaInstagram className="text-pink-600 text-2xl" />
                            </Link>
                            <Link href="/" target="_blank" rel="noopener noreferrer">
                                <FaTwitter className="text-blue-400 text-2xl" />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            {/* Call to Action Section */}
            <div className="flex flex-col items-center justify-center p-6 bg-white text-center mt-12">
                <h2 className="text-2xl font-bold mb-4">Start your 14 days free trial</h2>
                <p className="text-gray-600 mb-6">
                    Met minim Mollie non deserunt Alamo est sit aliqua dolor do amet sint.
                    Reult official consequat.
                </p>
                <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition">
                    Try it free now
                </button>
                <div className="flex space-x-4 mt-6">
                    <Link href="/" aria-label="Twitter" className="hover:text-blue-500">
                        <FaTwitter className="text-blue-400 text-2xl" />
                    </Link>
                    <Link href="/" aria-label="Facebook" className="hover:text-blue-700">
                        <FaFacebookF className="text-blue-600 text-2xl" />
                    </Link>
                    <Link href="/" aria-label="Instagram" className="hover:text-pink-500">
                        <FaInstagram className="text-pink-600 text-2xl" />
                    </Link>
                    <Link href="/" aria-label="Instagram" className="hover:text-pink-500">
                        <FaLinkedin className="text-blue-600 text-2xl" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TeamSection;
