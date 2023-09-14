import React, { useState } from "react";

import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
const Scrollingsection = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <div>
      <div className=" w-full flex items-center justify-center bg-[#F3ECEC] flex flex-col font-bold text-8xl md2:text-7xl xsm:text-5xl py-5">
        <h1>WHY</h1>
        <h1>CHOOSE US</h1>
      </div>
      <div>
        <section className="flex mx-20 md1:flex-wrap lg2:mx-0 lg2:flex-col ">
          <div className="w-full  flex flex-col">
            <div className="my-9 lg2:ml-5">
              <h3 className="text-l font-bold">
                WHY
                <br />
                CHOOSE US
              </h3>
            </div>
            <div className=" mb-5 lg2:text-center">
              <h1 className="inline-block text-[50px] font-medium w-full">
                KEWORD, RESEARCH STRATEGY, SURVEY,
                <br /> & ANALYTICS
              </h1>
            </div>
            <div className="w-full m-auto py-4 lg2:text-center ">
              <p className="lg2:mx-20">
                Attention, we take out our round glasses and our sweater with
                elbow patches to go back to the origins of the user experience:
                the first mention of the user and its importance was born in the
              </p>
            </div>
            <div className="flex items-center justify-center my-[17px]">
              <button className="rounded-full border-2 px-3">button</button>
              <button className="rounded-full mx-2 border-2 px-3">
                button
              </button>
              <button className="rounded-full border-2 px-3">button</button>
            </div>
          </div>
          <div className="w-full flex flex-col justify-evenly">
            <div className=" flex justify-center items-center mt-9 ml-6 lg2:ml-0 lg2:mt-0">
              <div className="">
                <h1 className="border-2  border-black rounded-full h-[100px] w-[100px] flex justify-center items-center text-center text-xl font-bold">
                  60%
                </h1>
              </div>
              <div className="ml-5">
                <h1 className="text-[26px] font-medium">STRATEGY</h1>
                <p className="w-4/6">
                  Your marketing strategy optimizing performances doesn’t have
                  to be a guessing game.
                </p>
              </div>
            </div>
            <div className=" flex justify-center items-center md1:my-2 my-2">
              <div className=" ">
                <h1 className="border-2  border-black rounded-full h-[100px] w-[100px] flex justify-center items-center text-center text-xl font-bold">
                  60%
                </h1>
              </div>
              <div className="ml-5">
                <h1 className="text-[26px] font-medium">STRATEGY</h1>
                <p className="w-4/6">
                  Your marketing strategy optimizing performances doesn’t have
                  to be a guessing game.
                </p>
              </div>
            </div>
            <div className=" flex justify-center items-center ml-6 lg2:ml-0">
              <div className=" ">
                <h1 className="border-2  border-black rounded-full h-[100px] w-[100px] flex justify-center items-center text-center text-xl font-bold">
                  60%
                </h1>
              </div>
              <div className="ml-5">
                <h1 className="text-[26px] font-medium">STRATEGY</h1>
                <p className="w-4/6">
                  Your marketing strategy optimizing performances doesn’t have
                  to be a guessing game.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div>
        <ScrollTrigger
          onEnter={() => setCounterOn(true)}
          onExit={() => setCounterOn(false)}
        >
          <div className="w-full   bg-[#F3ECEC] px-32 lg2:px-9 pb-5">
            <div className="  py-5 lg2:pl-5">
              <h1 className="text-l font-bold ">
                WHY <br /> CHOOSE US
              </h1>
            </div>
            <div className="flex sm:flex-wrap">
              <div className=" w-full flex space-x-2">
                <div className="w-full flex flex-col space-y-7">
                  <div className="h-2/4 flex  flex-col justify-center sm:items-center text-black ">
                    <h1 className="text-6xl pb-3">
                      {counterOn && (
                        <CountUp start={0} end={100} duration={2} delay={0} />
                      )}
                      +
                    </h1>

                    <p>
                      Project <br /> completed
                    </p>
                  </div>
                  <div className="flex flex-col justify-center sm:items-center text-black">
                    <h1 className="text-6xl pb-3">
                      {counterOn && (
                        <CountUp start={0} end={200} duration={2} delay={0} />
                      )}
                      +
                    </h1>
                    <p>
                      Years <br /> experiences
                    </p>
                  </div>
                </div>
                <div className="w-full flex flex-col space-y-7">
                  <div className="h-2/4 flex  flex-col justify-center sm:items-center text-black">
                    <h1 className="text-6xl pb-3">
                      {counterOn && (
                        <CountUp start={0} end={100} duration={2} delay={0} />
                      )}
                      +
                    </h1>

                    <p>
                      Project <br /> completed
                    </p>
                  </div>
                  <div className="flex flex-col justify-center sm:items-center text-black">
                    <h1 className="text-6xl pb-3">
                      {counterOn && (
                        <CountUp start={0} end={200} duration={2} delay={0} />
                      )}
                      +
                    </h1>
                    <p>
                      Years <br /> experiences
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-red-400 w-full">
                <img
                  className="h-full w-full"
                  src="https://cdn.pixabay.com/photo/2012/02/24/16/59/swan-16736_640.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </ScrollTrigger>
      </div>
      <div className="text-center  bg-[#E0E3CC]  texT-black flex flex-col">
        <h5 className="font-medium text-l py-5">Have you project in mind?</h5>
        <div className=" py-9 lg:my-5">
          <h1 className="font-medium text-5xl text">
            Let’s make something great together!
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Scrollingsection;
