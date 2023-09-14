import React from "react";
import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";
const page = () => {
  return (
    <div className="main-div">
      {/* section 1 start */}
      <div className="sec-1 flex lg2:flex-col px-9 py-24  justify-around ">
        <div>
          <h1 className="font-bold font-serif text-6xl CUS_Career-hero-Text">
            Join our team & let's work <br />
            together
          </h1>
        </div>
        <div className="lg2:my-9">
          <Link
            href="/explore"
            className="hover:bg-sky-700 hover:text-white hover:border-sky-700  hover:transition duration-700 ease-in-out flex justify-center items-center   rounded-full h-40 w-40 border-2 text-stone-400 "
          >
            Explore Job <br />
            Vacancies <span> {<BsArrowUpRight />}</span>
          </Link>
        </div>
      </div>
      {/* section 2 */}
      <div className="bg-black py-32 lg:py-20 ">
        <div className="grid grid-cols-12  border-t-solid border-t-[1px] border-[#a8a8a8] py-3 mx-5">
          <div className="col-span-2  flex justify-center items-center py-5">
            <p className="text-base text-[#a8a8a8]">01</p>
          </div>
          <div className="col-span-8 flex justify-start items-center py-2">
            <h3 className="text-3xl  text-[#a8a8a8]">Fullstack Developer</h3>
          </div>
          <div className="col-span-2  flex justify-start items-center py-2 text-3xl text-[#a8a8a8]">
            <BsArrowUpRight />
          </div>
        </div>
        <div className="grid grid-cols-12  border-t-solid border-t-[1px] border-[#a8a8a8] py-3 mx-5">
          <div className="col-span-2  flex justify-center items-center py-5">
            <p className="text-base text-[#a8a8a8]">02</p>
          </div>
          <div className="col-span-8 flex justify-start items-center py-2">
            <h3 className="text-3xl  text-[#a8a8a8]">Bussiness Developer</h3>
          </div>
          <div className="col-span-2  flex justify-start items-center py-2 text-3xl text-[#a8a8a8]">
            <BsArrowUpRight />
          </div>
        </div>
        <div className="grid grid-cols-12  border-t-solid border-t-[1px] border-[#a8a8a8] py-3 mx-5">
          <div className="col-span-2  flex justify-center items-center py-5">
            <p className="text-base text-[#a8a8a8]">03</p>
          </div>
          <div className="col-span-8 flex justify-start items-center py-2">
            <h3 className="text-3xl  text-[#a8a8a8]"> UI/UX Developer</h3>
          </div>
          <div className="col-span-2  flex justify-start items-center py-2 text-3xl text-[#a8a8a8]">
            <BsArrowUpRight />
          </div>
        </div>
        <div className="grid grid-cols-12  border-t-solid border-t-[1px] border-[#a8a8a8] py-3 mx-5">
          <div className="col-span-2  flex justify-center items-center py-5">
            <p className="text-base text-[#a8a8a8]">04</p>
          </div>
          <div className="col-span-8 flex justify-start items-center py-2">
            <h3 className="text-3xl  text-[#a8a8a8]">Powerapp Developer</h3>
          </div>
          <div className="col-span-2  flex justify-start items-center py-2 text-3xl text-[#a8a8a8]">
            <BsArrowUpRight />
          </div>
        </div>
      </div>
      {/* section 3 */}
    </div>
  );
};
export default page;
