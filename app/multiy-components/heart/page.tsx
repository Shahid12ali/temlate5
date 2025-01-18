import {
    Breadcrumb,
    BreadcrumbList,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
    BreadcrumbPage,
  } from "@/components/ui/breadcrumb";
  import React from "react";
  import Image from "next/image";
  import ProductDetailsCard from "./heart-card";
  import { FaAngleRight, FaRegStar } from "react-icons/fa";
  import { IoMdStar } from "react-icons/io";
  import { Button } from "@/components/ui/button";
  import { CiHeart } from "react-icons/ci";
  import { PiShoppingCartSimpleThin } from "react-icons/pi"; 
  import { IoEye } from "react-icons/io5";
import Green_Header from "../headers/green-header";
import Header from "../headers/header";
  
  const homePage = [
    {
      id: 1,
      priceStrikeThrough: 16.48,
      image: "/product1.png",
      title: "Graphic Design",
      description: "English Department",
      price: 6.48,
    },
    {
      id: 2,
      priceStrikeThrough: 16.48,
      image: "/product2.png",
      title: "Graphic Design",
      description: "English Department",
      price: 6.48,
    },
    {
      id: 3,
      priceStrikeThrough: 16.48,
      image: "/product3.png",
      title: "Graphic Design",
      description: "English Department",
      price: 6.48,
    },
    {
      id: 4,
      priceStrikeThrough: 16.48,
      image: "/product4.png",
      title: "Graphic Design",
      description: "English Department",
      price: 6.48,
    },
    {
      id: 5,
      priceStrikeThrough: 16.48,
      image: "/product5.png",
      title: "Graphic Design",
      description: "English Department",
      price: 6.48,
    },
    {
      id: 6,
      priceStrikeThrough: 16.48,
      image: "/product6.png",
      title: "Graphic Design",
      description: "English Department",
      price: 6.48,
    },
    {
      id: 7,
      priceStrikeThrough: 16.48,
      image: "/product1.png",
      title: "Graphic Design",
      description: "English Department",
      price: 6.48,
    },
    {
      id: 8,
      priceStrikeThrough: 16.48,
      image: "/product2.png",
      title: "Graphic Design",
      description: "English Department",
      price: 6.48,
    },
  ];
  function ProductDetail() {
    return (
      
      <div>
        <Green_Header />
        <Header />
        <div className="flex flex-col font-sans font-semibold bg-[#FAFAFA] gap-6 py-2">
          <div className="p-7">
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
          <div className="flex flex-col md:flex-row py-4 justify-center  items-center md:p-9">
            <div className="md:w-1/2 w-full flex flex-col gap-3 items-center md:justify-start">
              <div>
                <Image
                  src={"/carousel1.png"}
                  alt="detail"
                  width={504}
                  height={450}
                />
              </div>
              <div className="flex gap-3 justify-start">
                <Image
                  src={"/carousel2.png"}
                  alt="detail"
                  width={100}
                  height={75}
                />
                <Image
                  src={"/carousel1.png"}
                  alt="detail"
                  width={100}
                  height={75}
                />
              </div>
            </div>
            <div className="md:w-1/2 w-full text-[#858585] space-y-5 flex flex-col justify-center font-sans font-semibold items-start md:justify-start px-9">
              <h1 className=" text-2xl text-black">Floating Phone</h1>
              <p className="flex text-yellow-500 gap-2 items-center">
                <IoMdStar size={20} />
                <IoMdStar size={20} />
                <IoMdStar size={20} />
                <IoMdStar size={20}/>
                <FaRegStar />
                <span className="text-black">10 Reviews</span>
              </p>
              <p className="font-bold font-serif text-2xl text-black">$1,139.33</p>
              <p>
                Availability : <span className="text-Button">In Stock </span>
              </p>
              <p className="border-b border-gray-500 pb-4">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
                venial consequent sent nostrum met.
              </p>
              <div className="flex gap-4 py-4">
                <p className="w-[30px] h-[30px] rounded-full bg-blue-500"></p>
                <p className="w-[30px] h-[30px] rounded-full bg-[#23856D]"></p>
                <p className="w-[30px] h-[30px] rounded-full bg-[#E77C40]"></p>
                <p className="w-[30px] h-[30px] rounded-full bg-[#252B42]"></p>
              </div>
  
              <div className="flex gap-5 py-4 items-center">
                <Button className="bg-blue-500 py-6 hover:bg-white hover:text-black">Select Options</Button>
                <div className="flex gap-3">
  
                  <CiHeart size={40} className="bg-white p-2 rounded-full text-black"/>
                  <PiShoppingCartSimpleThin size={40} className="bg-white p-2 rounded-full text-black" />
  
                <IoEye size={30}  className="bg-white p-2 rounded-full text-black"/>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <main>
        <div className="flex flex-col justify-center items-center py-3">
        <div className="flex items-center font-sans font-semibold flex-col md:flex-row lg:flex-row text-center space-y-3 md:gap-4 mb-3">
          <p className="mt-3">Description</p>
          <p>Additional Information</p>
          <p>Reviews</p>
  
        </div>
        <div className="grid grid-cols-1  md:grid-cols-3 gap-4 p-3 md:p-6">
          <div className=" flex items-center justify-center">
            <Image
              src={"/price1.png"}
              alt="image 1"
              width={332}
              height={392}
            />
          </div>
          <div className="flex flex-col gap-6">
            <h1 className="font-bold  text-black text-2xl">
              The quick fox jumps over{" "}
            </h1>
            <p className="mb-2">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
              RELIT official consequent door ENIM RELIT Mollie. Excitation venial
              consequent sent nostrum met.
            </p>
            <p className="mb-2">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
              RELIT official consequent door ENIM RELIT Mollie. Excitation venial
              consequent sent nostrum met.
            </p>
            <p className="mb-2">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
              RELIT official consequent door ENIM RELIT Mollie. Excitation venial
              consequent sent nostrum met.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex text-justify flex-col gap-2">
              <h1 className="font-bold text-black text-2xl ">The quick fox jumps over </h1>
              <p className="flex items-ceter">
                <span>
                  <FaAngleRight size={28} />
                </span>
                the quick fox jumps over the lazy dog
              </p>
              <p className="flex items-ceter">
                <span>
                  <FaAngleRight size={28} />
                </span>
                the quick fox jumps over the lazy dog
              </p>
              <p className="flex items-ceter">
                <span>
                  <FaAngleRight size={28} />
                </span>
                the quick fox jumps over the lazy dog
              </p>
              <p className="flex items-ceter">
                <span>
                  <FaAngleRight size={28} />
                </span>
                the quick fox jumps over the lazy dog
              </p>
            </div>
            <div className="flex text-justify flex-col gap-2">
              <h1 className="font-bold text-black text-2xl">The quick fox jumps over </h1>
              <p className="flex items-ceter">
                <span>
                  <FaAngleRight size={28} />
                </span>
                the quick fox jumps over the lazy dog
              </p>
              <p className="flex file:items-ceter">
                <span>
                  <FaAngleRight size={28} />
                </span>
                the quick fox jumps over the lazy dog
              </p>
              <p className="flex items-ceter">
                <span>
                  <FaAngleRight size={28} />
                </span>
                the quick fox jumps over the lazy dog
              </p>
            </div>
          </div>
        </div>
        </div>
        </main>
  
    
        <div className="flex flex-col justify-center items-center py-6 bg-Primary">
          <div className="mb-8 flex flex-col w-full text-center border-b border-gray-300 pb-3 max-w-[463px]">
            <h1 className="font-bold text-Text2 text-3xl">BESTSELLER PRODUCTS</h1>
          </div>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5
            "
          >
            {homePage.map((product, index) => (
              <ProductDetailsCard key={index} {...product} />
            ))}
          </div>
        </div>
    
        <div className="grid grid-cols-1 md:grid-cols-6 gap-20 md:gap-3 lg:gap-4 bg-[#FAFAFA] px-9 justify-items-center items-center py-6">
          <div>
            <Image
              src={"/logo1.png"}
              alt="logo 1"
              height={100}
              width={180}
            />
          </div>
          <div>
            <Image
              src={"/logo2.png"}
              alt="logo 1"
              height={100}
              width={180}
            />
          </div>
          <div>
            <Image
              src={"/logo3.png"}
              alt="logo 1"
              height={100}
              width={180}
            />
          </div>
          <div>
            <Image
              src={"/logo4.png"}
              alt="logo 1"
              height={100}
              width={180}
            />
          </div>
          <div>
            <Image
              src={"/logo5.png"}
              alt="logo 1"
              height={100}
              width={180}
            />
          </div>
          <div>
            <Image
              src={"/logo6.png"}
              alt="logo 1"
              height={100}
              width={180}
            />
          </div>
        </div>
      </div>
    );
  }
  
  export default ProductDetail;