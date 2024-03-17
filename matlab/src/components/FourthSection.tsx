import React from "react";

export const FourthSection = () => {
  return (
    <div className="h-[706px] opacity-[71%] text-center md:bg-[url('/bg4bg.svg')] bg-cover sm:bg-[url('/mb4.svg')]">
      <p className="p-[55px] text-[44px] leading-[52.36px] text-[#ED0137] ">
        Tokenomics
      </p>
      {/* <div className=" "> */}
      <div className="md:flex md:justify-between md:mx-[100px] md:gap-10">
        <div>
          <div className=" w-[244px] h-[70px] text-[18px] leading-[23.84px] ml-[168px] bg-[#ED0137] rounded-[20px]">
            <p className="pt-[20px]">Token Details</p>
          </div>
          <div className="mt-[-35px] border-[#DF180A] border border-[1.5px] rounded-[20px] h-[306px] w-[412px] ml-[90px] pt-[100px]">
            <div className="flex gap-6 justify-evenly">
              <p>Name</p>
              <p>Saviour</p>
            </div>
            <div className="flex gap-6 justify-evenly">
              <p>Symbol</p>
              <p>SVR</p>
            </div>
            <div className="flex gap-6 justify-evenly">
              <p>Total Supply</p>
              <p>1000 Trillion</p>
            </div>
            <div className="flex gap-6 justify-evenly">
              <p>Decimals</p>
              <p>18</p>
            </div>
          </div>
        </div>
        <div className="h-[372px] w-[885.42px]">
          <img src="/logo4.svg" alt="" />
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};
