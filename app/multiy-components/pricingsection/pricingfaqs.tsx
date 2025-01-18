import React from "react";
import { FaAngleRight } from "react-icons/fa";

export function FAQsCard() {
  return (
    <div className="flex text-md font-sans font-semibold text-center mb-10 ">
      <p>
        <FaAngleRight size={24} className="text-blue-500"/>
      </p>
      <div className="text-justify">
        <h1 className="font-bold ">
          the quick fox jumps over the lazy dog
        </h1>
        <p className="text-[#737373] ">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          RELIT official consequent door ENIM RELIT Mollie. Excitation venial
          consequent sent nostrum met.
        </p>
      </div>
    </div>
  );
}