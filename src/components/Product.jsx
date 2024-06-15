import AppLayout from "./AppLayout";

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Productmock from "./MockData/Productmock";
// import required modules
import { Keyboard, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div className="my-4 mx-6" id="products">
      <AppLayout>
        <h2 className=" font-bold text-[30px] text-center">Products</h2>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          keyboard={{
            enabled: true,
          }}
          breakpoints={{
            340: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            500: {
              slidesPerView: 2,
              spaceBetween: 0,
            },
            700: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
            1000: {
              slidesPerView: 4,
              spaceBetween: 15,
            },
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Keyboard, Pagination]}
          className="mySwiper"
        >
          {Productmock.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="w-[250px] h-[400px] flex-col mt-8 mb-10 group mx-auto pb-4">
                <div className="relative">
                  <Link to="productpage">
                    <img src={slide.img} alt="" className="" />
                  </Link>
                  <div className="mt-[-40px] mx-10">
                    <button className="bg-[#000] py-2 rounded text-white px-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Add to cart
                    </button>
                  </div>
                </div>
                <p className="pt-2 text-start text-[15px] ">
                  <Link to="productpage">{slide.description}</Link>
                </p>
                <h2 className="font-bold text-[20px]">&#8377;{slide.price}</h2>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </AppLayout>
    </div>
  );
};

export default Product;
