import React from "react";

const Hero = () => {
  return (
    <>
      <section className="flex mx-20 md1:flex-wrap lg2:mx-0 ">
        <div className="w-full  flex flex-col">
          <div className="my-9">
            <h3 className="text-l font-bold">
              WHY
              <br />
              CHOOSE US
            </h3>
          </div>
          <div className=" mb-5">
            <h1 className="inline-block text-[50px] font-medium w-full">
              KEWORD, RESEARCH STRATEGY, SURVEY,
              <br /> & ANALYTICS
            </h1>
          </div>
          <div className="w-full m-auto py-4">
            <p className="">
              Attention, we take out our round glasses and our sweater with
              elbow patches to go back to the origins of the user experience:
              the first mention of the user and its importance was born in the
            </p>
          </div>
          <div className="flex items-center justify-center my-[17px]">
            <button className="rounded-full border-2 px-3">button</button>
            <button className="rounded-full mx-2 border-2 px-3">button</button>
            <button className="rounded-full border-2 px-3">button</button>
          </div>
        </div>
        <div className="w-full flex flex-col justify-evenly">
          <div className=" flex justify-center items-center mt-9 ml-6 md1:ml-0 md1:mt-0">
            <div className=" ">
              <h1 className="border-2  border-black rounded-full h-[100px] w-[100px] flex justify-center items-center text-center text-xl font-bold">
                60%
              </h1>
            </div>
            <div className="ml-5">
              <h1 className="text-[26px] font-medium">STRATEGY</h1>
              <p className="w-4/6">
                Your marketing strategy optimizing performances doesn’t have to
                be a guessing game.
              </p>
            </div>
          </div>
          <div className=" flex justify-center items-center md1:my-2">
            <div className=" ">
              <h1 className="border-2  border-black rounded-full h-[100px] w-[100px] flex justify-center items-center text-center text-xl font-bold">
                60%
              </h1>
            </div>
            <div className="ml-5">
              <h1 className="text-[26px] font-medium">STRATEGY</h1>
              <p className="w-4/6">
                Your marketing strategy optimizing performances doesn’t have to
                be a guessing game.
              </p>
            </div>
          </div>
          <div className=" flex justify-center items-center ml-6 md1:ml-0">
            <div className=" ">
              <h1 className="border-2  border-black rounded-full h-[100px] w-[100px] flex justify-center items-center text-center text-xl font-bold">
                60%
              </h1>
            </div>
            <div className="ml-5">
              <h1 className="text-[26px] font-medium">STRATEGY</h1>
              <p className="w-4/6">
                Your marketing strategy optimizing performances doesn’t have to
                be a guessing game.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
