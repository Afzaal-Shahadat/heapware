import React from "react";
import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";
import Header from "@/components/Header";
const About = () => {
  return (
    <>
      <Header />
      <div className="bg-[url('https://codeupscale.com/_next/static/media/about_sec.5d62e18c.svg')] bg-cover bg-no-repeat bg-bottom">
        {/* section 1 start */}
        <div className=" flex justify-around sm:flex-col mt-10 sm:flex-wrap sm:px-10">
          <div>
            <h1 className="font-bold text-5xl">
              Powering business growth <br /> need integration with <br />{" "}
              innovation
            </h1>
            <p className="text-2xl mt-10">
              Successfully scaling your tech startup and <br /> achieving
              long-term success is hard. Getting <br /> all of it with a global
              talent, isn't.
            </p>
          </div>
          <div className="mt-20 sm:mt-10">
            <Link
              href="/work"
              className="hover:bg-sky-700 hover:text-white hover:border-sky-700  hover:transition duration-700 ease-in-out flex justify-center items-center   rounded-full h-32 w-32 border-2 text-stone-400 "
            >
              Work with us <span> {<BsArrowUpRight />}</span>
            </Link>
          </div>
        </div>
        {/* section 1 end */}
        {/* section 2 start */}
        <div className="flex justify-center py-20 h-screen lg2:flex-col lg2:mt-20 lg2:items-center lg2:gap-2 md2:mt-0">
          {/* 1st card */}
          <div className="flex flex-col justify-end px-3">
            <h1 className="font-bold text-1xl text-gray-900 mb-2 text-base ">
              Lively, by design
            </h1>
            <p className=" text-gray-900 font-serif text-sm text-base lg2:w-full">
              We work only with clients whose ideas we <br /> believe in. This
              means analyzing your needs <br /> together (remotely) before we
              start, and <br /> digitizing your business to cope with the <br />{" "}
              market with affordable customized solutions.
            </p>
          </div>
          {/* 2nd card */}
          <div className="flex flex-col justify-center px-3">
            <h1 className="font-bold text-1xl text-gray-900 mb-2 text-base">
              Round The Clock Support
            </h1>
            <p className=" mt-1 text-gray-900 font-serif text-sm">
              Nothing strikes an endorsed and secured <br /> website that
              safeguards your information <br /> online. At Code UpScale, we
              know the value of <br /> ensuring a protected and monitored
              website.
            </p>
          </div>
          {/* 3rd card */}
          <div className="flex flex-col justify-start px-3">
            <h1 className="font-bold text-1xl text-gray-900  mb-2 text-base">
              Selective and Budget-friendly
            </h1>
            <p className=" mt-1 text-gray-900 font-serif  text-sm">
              We work only with clients whose ideas we <br /> believe in. This
              means analyzing your needs <br /> together (remotely) before we
              start, and <br /> digitizing your business to cope with the <br />{" "}
              market with affordable customized solutions.
            </p>
          </div>
          {/* cards end */}
        </div>
        {/* 2nd section end */}
      </div>
    </>
  );
};
export default About;
