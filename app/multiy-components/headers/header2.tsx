import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import React from "react";
import { IoSearch } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { HiBars3BottomRight } from "react-icons/hi2";
import { Button } from "@/components/ui/button";
import { HiArrowSmRight } from "react-icons/hi";

export default function Header_2() {
    return (
        <div className="w-full px-4 md:px-24 py-4 bg-white font-sans font-semibold sticky top-0 z-50 ">
            <div className="flex justify-between items-center">

                <div className="flex items-center gap-3 md:gap-2 lg:gap-12">

                    <h2 className="text-2xl font-bold">Bandage</h2>


                    <nav className="hidden md:flex">
                        <ul className="flex gap-x-6 text-gray-500">
                            <li>
                                <Link href={"/"} className="hover:text-blue-500">
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link href={"/multiy-components/teamsection"} className="hover:text-blue-500">
                                    Product
                                </Link>
                            </li>
                            <li>
                                <Link href={"/pricing"} className="hover:text-blue-500">
                                    Pricing
                                </Link>
                            </li>
                            <li>
                                <Link href={"/contact"} className="hover:text-blue-500">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>


                <div className="flex items-center gap-x-4">

                    <div className="hidden md:flex items-center gap-x-6">

                        <div className="flex items-center gap-x-2 text-[#23A6F0]">
                            <p>Login </p>
                        </div>
                        <div className="">
                            <Button className="p-5 bg-blue-500">Become a member<HiArrowSmRight /></Button>
                        </div>
                    </div>


                    <div className="flex md:hidden items-center gap-x-4">

                        <Link href={"/productpage"}>
                            <IoSearch size={24} className="text-gray-500" />
                        </Link>

                        <Link href={'/heartcard'} className="flex items-center">
                            <FiShoppingCart size={24} className="text-gray-500" />
                        </Link>


                        <Sheet>
                            <SheetTrigger>
                                <HiBars3BottomRight size={30} className="text-black" />
                            </SheetTrigger>
                            <SheetContent>
                                <SheetHeader>
                                    <SheetTitle></SheetTitle>
                                    <SheetDescription>
                                        <div className="flex flex-col justify-center items-center gap-y-6 text-2xl font-sans font-semibold text-[#39393a]">
                                            <ul className="flex flex-col justify-center h-screen items-center gap-8 text-gray-500">

                                                <li>
                                                    <Link href={"/"} className="hover:text-blue-500">
                                                        Home
                                                    </Link>
                                                </li>

                                                <li>
                                                    <Link href={"/productpage"} className="hover:text-blue-500">
                                                        Product
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href={"/pricing"} className="hover:text-blue-500">
                                                        Pricing
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href={"/contact"} className="hover:text-blue-500">
                                                        Contact
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </SheetDescription>
                                </SheetHeader>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div >
        </div >
    );
}
