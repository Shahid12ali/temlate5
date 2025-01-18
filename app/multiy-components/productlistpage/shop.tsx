'use client';

import React from "react";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import Pagination from "@/components/Pagination";
import { useState } from "react";


import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import JustForYou from "./shop-cart";
import Green_Header from "../headers/green-header";
import Header from "../headers/header";
import Footer from "../footer-2";


const homePage = [
  {
    id: 1,
    priceStrikeThrough: 5.38,
    image: "/card1.png",
    title: "Graphic Design",
    description: "English Department",
    price: 7.54
  },
  {
    id: 2,
    priceStrikeThrough: 5.38,
    image: "/card2.png",
    title: "Graphic Design",
    description: "English Department",
    price: 7.54
  },
  {
    id: 3,
    priceStrikeThrough: 5.38,
    image: "/card4.png",
    title: "Graphic Design",
    description: "English Department",
    price: 7.54
  },
  {
    id: 4,
    priceStrikeThrough: 5.38,
    image: "/card3.png",
    title: "Graphic Design",
    description: "English Department",
    price: 7.54
  },
  {
    id: 5,
    priceStrikeThrough: 5.38,
    image: "/card5.png",
    title: "Graphic Design",
    description: "English Department",
    price: 7.54
  },
  {
    id: 6,
    priceStrikeThrough: 5.38,
    image: "/card6.png",
    title: "Graphic Design",
    description: "English Department",
    price: 7.54
  },
  {
    id: 7,
    priceStrikeThrough: 5.38,
    image: "/card7.png",
    title: "Graphic Design",
    description: "English Department",
    price: 7.54
  },
  {
    id: 8,
    priceStrikeThrough: 5.38,
    image: "/card8.png",
    title: "Graphic Design",
    description: "English Department",
    price: 7.54
  },
  {
    id: 9,
    priceStrikeThrough: 5.38,
    image: "/card9.png",
    title: "Graphic Design",
    description: "English Department",
    price: 7.54
  },
  {
    id: 10,
    priceStrikeThrough: 5.38,
    image: "/card10.png",
    title: "Graphic Design",
    description: "English Department",
    price: 7.54
  },
  {
    id: 11,
    priceStrikeThrough: 5.38,
    image: "/card11.png",
    title: "Graphic Design",
    description: "English Department",
    price: 7.54
  },
  {
    id: 12,
    priceStrikeThrough: 5.38,
    image: "/card12.png",
    title: "Graphic Design",
    description: "English Department",
    price: 7.54
  },

]
function Shop() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3; 

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  return (
    <main>
      
      <Green_Header />
      <Header />
    <div className="bg-[#FAFAFA] space-y-4 font-sans font-semibold"> 
    
      <div className="flex justify-between items-center md:px-9">
        <div className="my-8 mx-6 md:flex">
          
          <h1 className="font-bold text-lg">SHOP</h1>
        </div>

        <div className="flex flex-col md:flex-row lg:flex-row md:p-7 ">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Shop</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
     
      <div className="flex justify-center items-center flex-col py-6">
        <div className="grid grid-cols md:grid-cols-5 gap-4">
          <div>
            <Image
              src={"/shopimg1.png"}
              alt="shop 1"
              width={206}
              height={223}
            />
          </div>
          <div>
            <Image
              src={"/shop-img2.png"}
              alt="shop 2"
              width={206}
              height={223}
            />
          </div>

          <div className="">
            <Image
              src={"/shop-img3.png"}
              alt="shop 3"
              width={206}
              height={223}
            />
          </div>
          <div className="">
            <Image
              src={"/shop-img4.png"}
              alt="shop 4"
              width={206}
              height={223}
            />
          </div>
          <div className="">
            <Image
              src={"/shop-img5.png"}
              alt="shop 5"
              width={206}
              height={223}
            />
          </div>
        </div>
      </div>

      {/* section three */}
      <div className="flex flex-col gap-5 md:flex-row  justify-between items-center py-10 md:py-5 lg:py-5 bg-white px-16 md:px-20 lg:px-32">
        <div>Showing all 12 results</div>
        <div className="flex gap-5 items-center">
          <p>View:</p>
          <Image
            src={"/vector2.png"}
            alt="vector"
            width={40}
            height={40}
          />

          <Image
            src={"/vector1.png"}
            alt="vector"
            width={40}
            height={40}
          />
        </div>
        <div className="flex gap-3">
          <Button variant={"outline"} className="py-3 text-gray-500">
            Popularity
            <span>
              <IoIosArrowDown />
            </span>
          </Button>
          <Button variant={"outline"} className="text-white bg-blue-500 px-4">Filter</Button>
        </div>
      </div>

      
      {/* Section Four */}
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-6 gap-8 md:gap-2 lg:gap-2 bg-[#FAFAFA] px-6 md:px-14 lg:px-18 py-10 md:py-8 lg:py-8 justify-items-center items-center">
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
        <Footer />

      
      <div className="flex justify-center py-5 bg-white">
        <div
          className="grid grid-cols md:grid-cols-4 gap-8
          "
        >
          {homePage.map((product, index) => (
            <JustForYou key={index} {...product} />
          ))}
        </div>
      </div>
    </div>
    <div className="flex justify-center py-5 bg-white">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>

    </main>
  );
}

export default Shop;