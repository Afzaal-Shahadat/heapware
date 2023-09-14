import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { BsArrowUpRight } from "react-icons/bs";
import Link from "next/link";
const Grid = () => {
  return (
    <div className="grid  sm:grid-cols-2 lg2:grid-cols-6 grid-cols-8 ml-2  w-[80%]">
      <div className="col-span-2 sm:col-span-2 lg2:col-span-2 lg:col-span-2 ">
        <div className="">
          <div>
            <img
              className=" mt-[100px] h-50 w-24  "
              src="/images/heapware-logo.png"
              alt=""
            />
          </div>
          <p className="mt-[51px]  text-black sm:text-center">
            When do they work well, and when do they on us and finally, when do
            we actually need how can we avoid them.
          </p>
          <div className="  mt-[20px] text-slate-200 flex sm:justify-center mb-2">
            <div className=" text-2xl mx-3 hover:transition duration-300 ease-in hover:text-sky-400 hover:text-3xl">
              <AiFillInstagram />
            </div>
            <div className=" text-2xl mx-3 hover:transition duration-300 ease-in hover:text-sky-400 hover:text-3xl">
              <FaFacebook />
            </div>
            <div className=" text-2xl mx-3 hover:transition duration-300 ease-in hover:text-sky-400 hover:text-3xl ">
              <FaTwitter />
            </div>
            <div className=" text-2xl mx-3 hover:transition duration-300 ease-in hover:text-sky-400 hover:text-3xl">
              <AiFillLinkedin />
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-2 sm:col-span-2 lg2:col-span-2 lg:col-span-2  ">
        <div className="mt-36 sm:mt-5  flex flex-col items-center ">
          <div>
            <h2 className="font-bold text-black">Information</h2>
          </div>
          <div className="mt-[20px] w-full flex justify-center">
            <ul className="text-black ">
              <li className=" hover:text-white hover:font-bold ">
                <Link href="/">About Company</Link>
              </li>
              <li className=" hover:text-white hover:font-bold ">
                <Link href="/casestudy">Case Study</Link>
              </li>
              <li className=" hover:text-white hover:font-bold">
                <Link href="/career">Career</Link>
              </li>
              <li className=" hover:text-white hover:font-bold">
                <Link href="/blog">Blog</Link>
              </li>
              <li className=" hover:text-white hover:font-bold">
                <Link href="/contact">Contact</Link>{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-span-2 sm:col-span-2 lg2:col-span-2 lg:col-span-2  ">
        <div className=" mt-36 sm:mt-5 flex flex-col items-center">
          <div>
            <h2 className="font-bold text-black">Contact us </h2>
          </div>
          <div className="mt-4">
            <ul className="text-black">
              <li className=" my-3  hover:text-white">
                Valentin, Street Road 24,
                <br /> New York, USA - 67452
              </li>
              <li className="my-2  hover:text-white hover:underline">
                <a href="tel:02574328301" class="phone">
                  +02) 574 - 328 - 301{" "}
                </a>
              </li>
              <li className="my-2  hover:text-white">
                <a href="mailto:info@buildyexample.com">
                  info@buildyexample.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-span-2 sm:col-span-2 lg2:col-span-3 lg:col-span-2 bg  row-span-2">
        <div className="flex flex-col items-center justify-evenly text-center">
          <div>
            <h2 className="font-bold text-4xl mt-[100px] text-black ">
              Have a project in your mind
            </h2>
          </div>
          <div>
            <Link
              href="/contact"
              className="hover:bg-sky-700 hover:text-white hover:border-sky-700  hover:transition duration-700 ease-in-out flex justify-center items-center  my-9 rounded-full h-40 w-40 border-2 text-stone-300 "
            >
              Contact us <span> {<BsArrowUpRight />}</span>
            </Link>
          </div>
          <div>
            <h3 className="text-white font-bold my-11 ">
              09: 00 AM - 10 : 30 PM
            </h3>
            <span className="text-stone-300 mb-[40px]">Saturday- Thursday</span>
          </div>
        </div>
      </div>
      <div className="col-span-3 sm:col-span-3 lg2:col-span-3 lg:col-span-3 b ">
        <div className="flex justify-center items-center h-full">
          <h2 className="text-stone-300  ">
            © 2022 - 2025 | Alrights reserved <br />
            by
            <span className="font-bold">Wealcoder</span>
          </h2>
        </div>
      </div>
      <div className="col-span-3 sm:col-span-3 lg2:col-span-3 lg:col-span-3 bg ">
        <div class="flex justify-center items-center h-full lg2:h-20  mx-2">
          <input
            type="email"
            placeholder="Enter your email here..."
            id="email"
            name="email"
            class="w-full h-[50%] bg-sky-600 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
      </div>
    </div>
  );
};

export default Grid;
