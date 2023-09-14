"use client";
import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
const Counter = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
    >
      <div className="w-full h-screen flex flex-col  justify-center  px-32 lg2:px-9 pb-5">
        <div className="  py-20 lg2:pl-5 ">
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
  );
};

export default Counter;
{
  /* <div className="flex h-4/5 lg:h-full lg2:flex-wrap  ">
<div className="w-full flex sm:flex-wrap">
  <div className="w-full ">
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
    <div className="h-2/4 flex flex-col justify-center sm:items-center text-black">
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
  <div className="w-full">
    <div className="h-2/4 flex justify-center flex-col sm:items-center text-black">
      <h1 className="text-6xl pb-3">
        {counterOn && (
          <CountUp start={0} end={150} duration={2} delay={0} />
        )}
        +
      </h1>
      <p>
        Happy <br /> customers
      </p>
    </div>
    <div className="h-2/4 flex flex-col justify-center sm:items-center text-black">
      <h1 className="text-6xl pb-3">
        {counterOn && (
          <CountUp start={0} end={300} duration={2} delay={0} />
        )}
        +
      </h1>
      <p>
        Awards <br /> achievement
      </p>
    </div>
  </div>
</div>
<div className="bg-gray-100 h-full w-full ">
  <img
    src="https://cdn.pixabay.com/photo/2023/08/26/12/28/tiger-8214815_1280.png"
    alt=""
  />
</div>  
</div> */
}
