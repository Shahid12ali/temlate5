import React from "react";
import Image from "next/image";

export default function Neural() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center px-5 lg:px-20 gap-10">
                <div className="lg:w-1/2 w-full flex justify-center lg:justify-start">
                    <Image
                        src="/neural.png"
                        alt="Hero Image"
                        width={500}
                        height={400}
                        className="object-cover max-w-full h-auto"
                    />
                </div>
                <div className="lg:w-1/2 w-full text-center lg:text-left mb-10 lg:mb-0 py-10 px-6 rounded-lg">
                    <p className="text-sm text-gray-500 mb-2 font-semibold">SUMMER 2020</p>
                    <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 my-5">
                        Part of the Neural Universe
                    </h1>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                        We know how large objects will act, <br />
                        but things on a small scale.
                    </p>
                    <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                        <button className="bg-green-500 text-white font-bold px-6 md:px-8 lg:px-10 py-4 rounded-sm hover:text-blue-500 border hover:border-blue-500 hover:bg-white transition">
                            BUY NOW
                        </button>
                        <button className="border border-green-500 text-green-500 font-bold px-6 md:px-8 lg:px-10 py-4 rounded-sm hover:text-white hover:bg-blue-600 transition">
                            READ MORE
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
