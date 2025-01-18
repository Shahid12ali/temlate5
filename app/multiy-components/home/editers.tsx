import Image from "next/image";

export default function Editers() {
  return (
    <div className="px-4 md:px-6 py-14 overflow-hidden bg-[#FAFAFA]">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-2">EDITORS PICK</h2>
        <p className="text-gray-600">
          Problems trying to resolve the conflict between
        </p>
      </div>
      <div className="flex justify-center flex-col md:flex-row lg:flex-row gap-4">
        <div className="">
          <Image
            src="/first-1.png"
            alt="Wide Image"
            width={350}
            height={400}
            className="w-full md:w-[350px] lg:w-[400px] h-auto md:h-[400px] lg:h-[400px] object-cover"
          />
        </div>
        <div className="">
          <Image
            src="/second.png"
            alt="Square Image"
            width={250}
            height={400}
            className="w-full md:w-[250px] lg:w-full h-auto md:h-[400px] lg:h-[400px] object-cover"
          />
        </div>

  
        <div className="flex flex-col gap-4">
        
          <div className="w-full">
            <Image
              src="/third.png"
              alt="Rectangle Image"
              width={200}
              height={250}
              className="w-full h-auto md:h-[180px] lg:h-[180px] object-cover"
            />
          </div>

      
          <div className="w-full relative">
            <Image
              src="/four.png"
              alt="Rectangle Image"
              width={200}
              height={230}
              className="w-full h-auto md:h-[200px] lg:h-[200px] object-cover"
            />
        
            <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-[#404650] font-semibold py-2 px-6">
              Kides
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
