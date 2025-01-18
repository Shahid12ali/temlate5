"use client"

import React from 'react';
import Image from "next/image"


export interface ProductCard {
  id: number,
  image: string;
  title: string;
  description: string,
  price: number;
  priceStrikeThrough?: number;
}
export default function Heart_Card({
  image,
  title,
  description,
  price,
  priceStrikeThrough,
}: ProductCard) {
  return (
    <div className="w-full max-w-xs h-[430px] overflow-hidden bg-white">

      <div className="h-[280px] flex justify-center items-center">
        <Image
          src={image}
          alt={title}
          width={239}
          height={280}
          className="object-cover"
        />
      </div>


      <div className="p-4 flex flex-col gap-2 justify-center items-center">

        <h3 className="text-base font-semibold text-gray-800 truncate">
          {title}
        </h3>


        <p className="text-sm text-gray-600 truncate">
          {description}
        </p>


        <div className="flex gap-2 items-center">
          {priceStrikeThrough && (
            <p className="text-sm text-gray-400">
              ${priceStrikeThrough}
            </p>
          )}
          <p className="text-lg text-[#23856D] font-bold">${price}</p>
        </div>

      </div>
    </div>
  );
};