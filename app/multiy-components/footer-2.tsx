import { Input } from "@/components/ui/input";
import Link from "next/link";
import { FaFacebook,FaInstagram,FaTwitter } from "react-icons/fa";


export default function Footer() {
  return (
    <footer className="font-sans font-semibold">
      <div className="max-w-[1440px] w-full pt-3 px-4 space-y-8 md:px-11 ">
        <div className="mx-auto max-w-[1170px] w-full ">
          <div className="flex gap-3 justify-between items-center mb-5 py-6 border-b border-gray-300">
            <div className="font-bold text-2xl">
              Bandage
            </div>
            <div className="flex gap-6">
              <Link
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 transition"
              >
                <FaFacebook size={24} />
              </Link>
              <Link
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 transition"
              >
                <FaInstagram size={24} />
              </Link>
              <Link
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 transition"
              >
                <FaTwitter size={24} />
              </Link>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 px-4 md:text-left py-4">
            <div>
              <h3 className="text-Text2 text-md font-bold mb-4 ">Company Info</h3>
              <div className="flex text-Text text-md font-medium flex-col space-y-3">
                <p>About Us</p>
                <p>Carrier</p>
                <p>We are hiring</p>
                <p>Blog</p>
              </div>
            </div>
            <div>
              <h3 className="text-Text2 text-md font-bold mb-4">Legal</h3>
              <div className="flex text-Text text-md font-medium flex-col space-y-3">
                <p>About Us</p>
                <p>Carrier</p>
                <p>We are hiring</p>
                <p>Blog</p>
              </div>
            </div>
            <div>
              <h3 className="text-Text2 text-md font-bold mb-4">
                Features
              </h3>
              <div className="flex text-Text text-md font-medium flex-col space-y-3">
                <p>Business Marketing</p>
                <p>User Analytic</p>
                <p>Live Chat</p>
                <p>Unlimited Support</p>
              </div>
            </div>
            <div>
              <h3 className="text-Text2 text-md font-bold mb-4">
                Resources
              </h3>
              <div className="flex text-Text2 text-md font-medium flex-col space-y-3">
                <p>IOS & Android</p>
                <p>Watch a Demo</p>
                <p>Customers</p>
                <p>API</p>
              </div>
            </div>
            <div className="flex justify-center  items-center flex-col  md:items-start md:justify-start">
              <p className="font-bold mb-3 text-Text2 ">Get In Touch</p>

              <div className=" p-4 flex justify-between">

                <Input type="text" placeholder="Email" className="text-left bg-gray-100 border-none outline-none" />

                <p className="bg-blue-500 rounded-r-md text-white items-center px-3 flex justify-end">Subscribe</p>
              </div>
              <p className="text-sm">Lore imp sum dolor Amit</p>
            </div>

          </div>
        </div>

      </div>
      
      <div className="py-6 md:mx-auto px-2  md:px-20 lg:px-24 bg-[#FAFAFA] flex items-center justify-start">
        <div className="flex items-center text-center text-Text1 gap-1 text-sm ">
          <p>Made With Love By Finland All Right Reserved </p>
        </div>
      </div>
    </footer>
  );
}