import Link from "next/link";
import Image from "next/image";

export default function ClassicSection() {
  return (
    <section className="bg-[#23856D] py-20">
      <div className="container mx-auto flex flex-col lg:flex-row items-center px-5 lg:px-20 gap-10">
    
        <div className="lg:w-1/2 w-full text-center lg:text-left mb-10 lg:mb-0 py-10 px-6 rounded-lg">
          <p className="text-white text-sm mb-2 font-semibold">SUMMER 2020</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-white my-6">
            Vita Classic Product
          </h1>
          <p className="text-lg text-gray-200 mb-6">
            We know how large objects will act, We know how are objects will act, We know
          </p>
          
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <p className="text-white text-xl font-semibold">$16.48</p>
            <Link href="/heartcard">
            <button className="bg-green-500 text-white font-bold px-6 py-4 rounded-sm hover:bg-green-600 transition">
              ADD TO CART
            </button>
            </Link>
          </div>
        </div>

        
        <div className="lg:w-1/2 w-full flex justify-center">
          <Image
            src="/person.png"
            alt="Hero Image"
            width={500}
            height={400}
            className="object-cover max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
