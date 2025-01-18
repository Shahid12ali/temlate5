import Image from "next/image";
import { FaRegClock } from "react-icons/fa";
import { GoChevronRight } from "react-icons/go";
import { LuChartColumnIncreasing } from "react-icons/lu";

export default function CenteredDetails() {
    return (
        <section className="bg-gray-100 py-16">
            <div className="container mx-auto px-5 text-center">
                <div className="mb-10">
                    <p className="font-semibold font-sans text-blue-500">Practice Advice</p>
                    <h1 className="text-4xl font-bold mb-4">Featured Posts</h1>
                    <p className="text-lg text-gray-600">
                        Problems trying to resolve the conflict between<br />
                        the two major realms of Classical physics: Newtonian mechanics
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                    {[1, 2, 3].map((item) => (
                        <div
                            key={item}
                            className="bg-white shadow-lg rounded-lg overflow-hidden"
                        >
                            <Image
                                src={`/image${item}.png`}
                                alt={`Gallery Image ${item}`}
                                width={400}
                                height={300}
                                className="object-cover w-full"
                            />
                            <div className="p-5 text-left">

                                <div className="flex items-center gap-4 mb-4">
                                    <span className="text-blue-500 font-bold text-lg">Google</span>
                                    <span className="text-gray-500 text-sm">Trending</span>
                                    <span className="text-gray-500 text-sm">New</span>
                                </div>
                                <h2 className="text-xl font-semibold mb-2">
                                    Loudest à la Madison #1 (L&#39;integral)
                                </h2>
                                <p className="text-gray-600 mb-4">
                                    We focus on ergonomics and meeting you where you work. It&#39;s
                                    only a keystroke away.
                                </p>

                                <div className="flex items-center justify-between text-sm text-gray-500">
                                    <div className="flex items-center gap-2">
                                        <FaRegClock size={18} className="text-blue-500" />
                                        <span>22 April 2021</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <LuChartColumnIncreasing size={20} className="text-green-500" />
                                        <span>10 comments</span>
                                    </div>
                                </div>
                                <p className="mt-4 font-semibold cursor-pointer hover:underline flex items-center gap-2">
                                    Learn More <GoChevronRight size={24} className="text-blue-500" />
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
