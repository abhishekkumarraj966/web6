import React from "react";
import AppLayout from "./AppLayout";
import man from "./assites/logO.jpeg";

import what from "./assites/whatsapp.png";
import fac from "./assites/facebook.png";
import you from "./assites/YouTube.png";
import inst from "./assites/instagram.png";
import amo from "./assites/Amazon.png";
import big from "./assites/bigbasket.png";
import im from "./assites/Ebay.png";
import link from "./assites/linkedin.png";
import flip from "./assites/flipkart.png";
import Xi from "./assites/x.png";
import sw from "./assites/Swiggy (1).png";
import zo from "./assites/zomato.png";
import me from "./assites/indiamart.png";
import ju from "./assites/Justdial.png";
const Hero = () => {
  return (
    <AppLayout>
      <div
        class="grid  sm:grid-cols-3  gap-2  h-full my-[5%] bg-[#141414] rounded-md drop-shadow-xl "
        id="about"
      >
        <div class=" p-1 ">
          <div className="flex justify-center items-center sm:mt-[8%]">
            <img
              src={man}
              className="rounded-full h-[120px] w-[120px] sm:h-52 sm:w-52 object-cover"
              alt="Description of image"
            />
          </div>
        </div>
        <div class="  sm:col-span-2 p-4  sm:mt-[30px] lg:ml-[-100px] text-[#FAA800]">
          <h2 className=" font-bold text-[25px] text-center sm:text-start pb-2">
            {" "}
            AAYUSH PANDYA
          </h2>
          <p className=" font-bold text-[20px] text-center sm:text-start pb-2">
            {" "}
            Electronice Shop
          </p>
          <p className="lg:h-[237px]  h-[110px]   lg:text-[24px] sm:text-[20px] text-[18px] font-normal">
            “It is a long established fact that a reader will be tracked
            distracted by the readable content of a page is when looking at its
            layout. The point of using Lorem of distribution it look like
            readable English “
          </p>
        </div>

        <div className=" ml-2 mt-5 md:hidden block   pb-10 sm:ml-[50%]">
          <div className="flex gap-2 pb-1 mx-[5%] sm:mx-2 sm:gap-4">
            <img
              src={what}
              alt="facebook logo"
              className="h-[40px] w-[38px]  "
            />
            <img src={fac} alt="facebook logo" className="h-[40px] w-[38px] " />
            <img src={you} alt="facebook logo" className="h-[40px] w-[38px] " />
            <img
              src={inst}
              alt="facebook logo"
              className="h-[40px] w-[38px] "
            />
            <img src={amo} alt="facebook logo" className="h-[40px] w-[38px] " />
            <img src={big} alt="facebook logo" className="h-[40px] w-[38px] " />
            <img src={Xi} alt="facebook logo" className="h-[40px] w-[38px]  " />
          </div>

          <div className="flex gap-2 pt-2 mx-[5%] sm:mx-2 sm:gap-4">
            <img src={im} alt="facebook logo" className="h-[40px] w-[38px] " />
            <img
              src={link}
              alt="facebook logo"
              className="h-[40px] w-[38px] "
            />
            <img
              src={flip}
              alt="facebook logo"
              className="h-[40px] w-[38px] "
            />
            <img src={sw} alt="facebook logo" className="h-[40px] w-[38px] " />
            <img src={zo} alt="facebook logo" className="h-[40px] w-[60px] " />
            <img src={me} alt="facebook logo" className="h-[40px] w-[60px] " />
            <img src={ju} alt="facebook logo" className="h-[40px] w-[60px] " />
          </div>
        </div>

        <div className="items-center mt-[-5%]   mb-4  hidden md:block lg:mx-[25%] lg:mt-[-18%]">
          <ul className="flex gap-[10px] lg:gap-[8px] px-2">
            <img src={what} className="h-[48px] " alt="whataap" />
            <img src={fac} alt="facbook" className="h-[43px]  mt-1" />
            <img src={inst} alt="instagram" className="h-[48px] mt-1" />
            <img src={you} alt="youtube" className="h-[48px]  mt-1" />
            <img src={flip} alt="youtube" className="h-[55px]" />
            <img src={big} alt="youtube" className="h-[50px]  mt-1" />
            <img src={im} alt="youtube" className="h-[48px]  mt-1 " />
            <img src={amo} alt="youtube" className="h-[38px]  mt-2" />
            <img src={Xi} alt="youtube" className="h-[48px]  mt-1 " />
            <img src={link} alt="youtube" className="h-[50px]  mt-1" />
            <img src={sw} alt="youtube" className="h-[48px] " />
            <img src={zo} alt="youtube" className="h-[55px] " />
            <img src={me} alt="youtube" className="h-[48px] " />
            <img src={ju} alt="youtube" className="h-[60px] " />
          </ul>
        </div>
      </div>
    </AppLayout>
  );
};

export default Hero;
