"use client";

import React from 'react';
import Image from "next/image"


export interface ProductCardProps {
  id:number,
  image: string;
  title: string;
  description:string,
  price: number;
  priceStrikeThrough?: number;
}
export default function JustForYou({
  image,
  title,
  description,
  price,
  priceStrikeThrough,
}:ProductCardProps){
  return (
    <div className="w-full bg-white overflow-hidden">
      {/* Product Image */}
      <div className="w-full h-[380px] flex justify-center items-center">
        <Image
          src={image}
          alt={title}
          width={238}
          height={380}
          className="w-full h-[380px] object-cover"
        />
      </div>
      
      {/* Product Details */}
      <div className="flex flex-col gap-2 justify-center items-center m-0 py-4">
        {/* Product Title */}
        <h3 className="text-base font-semibold text-gray-800 ">
          {title}
        </h3>

        {/* Product Description */}
        <p className="text-sm text-gray-600 ">
          {description}
        </p>

        {/* Product Price */}
        <div className="flex gap-2 items-center">
          {priceStrikeThrough && (
            <p className="text-sm text-gray-400">
              ${priceStrikeThrough}
            </p>
          )}
          <p className="text-lg text-[#23856D] font-bold">${price}</p>
        </div>
        <div className='flex gap-4'>
          <p className='w-4 h-4 rounded-full bg-blue-500'></p>
          <p className='w-4 h-4 rounded-full bg-[#23856D]'></p>
          <p className='w-4 h-4 rounded-full bg-[#E77C40]'></p>
          <p className='w-4 h-4 rounded-full bg-[#252B42]'></p>
        </div>
      </div>
    </div>
  );
};