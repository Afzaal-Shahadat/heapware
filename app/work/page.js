import Header from "@/components/Header";
import React from "react";
import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";
const Work = () => {
  return (
    <>
      <Header />
      <section>
        {/* card 1 */}
        <div className="flex md2:flex-wrap justify-around items-center py-28">
          <div>
            <h1 class="font-bold text-8xl pl-9">
              Let's get in <br /> touch
            </h1>
          </div>
          <div className=" md2:w-full md2:flex md2:justify-end">
            <p class=" inline-block pr-9 md2:py-9">
              Great! We're excited to hear from you <br /> and let's start
              something special <br />
              togerter. call us for any inquery.
            </p>
          </div>
        </div>
        {/* card2 */}
        <div className="flex  md2:flex-wrap w-full ">
          <div className="flex flex-col pl-20 md2:px-20 md2:w-full w-full ">
            <h3 className="font-bold text-3xl">
              Don't be afraid man! <br /> Say Hello
            </h3>
            <ul className="">
              <li className="pt-5 pb-3">
                <Link href="mailto:hello@codeupscale.com" className="underline">
                  hello@codeupscale.com
                </Link>
              </li>
              <li>
                <span>
                  1575, 447 Broadway, 2nd Floor, New York <br /> New York 10013,
                  US
                </span>
              </li>
            </ul>
          </div>

          <div className=" flex flex-col w-full pr-20 md2:px-20">
            <div className="flex lg2:flex-wrap  w-full my-2">
              <div className="w-full px-2">
                <input
                  type="text"
                  name="name"
                  placeholder="Name "
                  className="w-full border-solid border-b-2 outline-none py-4 "
                />
              </div>
              <div className="w-full px-2">
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  className="w-full border-solid border-b-2 outline-none py-4"
                />
              </div>
            </div>
            <div className="flex lg2:flex-wrap my-2">
              <div className="w-full px-2">
                <input
                  type="text"
                  name="field"
                  placeholder="Website Development "
                  className="w-full border-solid border-b-2 outline-none py-4"
                />
              </div>
              <div className="w-full px-2">
                <input
                  type="text"
                  name="incom"
                  placeholder="$1k - $10k"
                  className="w-full border-solid border-b-2 outline-none py-4"
                />
              </div>
            </div>
            <div className="w-full px-2 my-2">
              <input
                type="message"
                placeholder="Messages"
                className="w-full border-solid border-b-2 outline-none py-4"
              />
            </div>
            <div className="my-8">
              <Link
                href="/send message"
                className="hover:bg-sky-700 hover:text-white hover:border-sky-700  hover:transition duration-700 ease-in-out flex justify-center items-center   rounded-full h-36 w-36 border-2 text-stone-400 "
              >
                Send <br />
                Massage <span> {<BsArrowUpRight />}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Work;
