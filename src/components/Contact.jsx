import React from "react";
import AppLayout from "./AppLayout";

const Contact = () => {
  return (
    <div
      className="w-auto min-h-[368px] lg:min-h-[500px] bg-[#141414] mt-1"
      id="Contact"
    >
      <AppLayout>
        <h2 className="font-bold text-[30px]  text-[#D89203]  text-center pt-[20px] lg:pt-[50px]">
          Contact 
        </h2>
       
        <div className="w-[85%] mx-auto mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row flex-wrap gap-y-[12px] lg:gap-x-[40px]">
          <div className="w-320px rounded-[24px] lg:rounded-[70px] bg-[#3B3C41] min-h-[52px] lg:min-h-[111px] lg:w-[46%]">
            <div className="min-h-[52px] lg:min-h-[111px]  flex lg:items-center">
              <img
                src="1.png"
                className="w-[30px] lg:w-[75px] h-[30px] lg:h-[75px] rounded-[50%] ml-[15px] my-auto"
              />
              <div className="ml-[11px] lg:ml-[25px] mt-[2px] ">
                <p className="text-[#D89203] font-[700] text-[14px] lg:text-[24px] p-0">
                  Location
                </p>
                <p className="font-[400] text-[14px] lg:text-[24px] text-[#AF790C] p-0">
                  <a href="https://www.google.com/maps/place/BTM+Layout,+Bengaluru,+Karnataka/@12.9142141,77.6041209,15.93z/data=!4m15!1m8!3m7!1s0x3bae14fc91a93031:0xf0afe62576cbdc3f!2sBTM+Layout,+Bengaluru,+Karnataka!3b1!8m2!3d12.9165757!4d77.6101163!16s%2Fm%2F02rqxr3!3m5!1s0x3bae14fc91a93031:0xf0afe62576cbdc3f!8m2!3d12.9165757!4d77.6101163!16s%2Fm%2F02rqxr3?entry=ttu">
                    Bangalore , Karnataka
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="w-320px rounded-[24px] lg:rounded-[70px] bg-[#3B3C41] min-h-[52px] lg:min-h-[111px] lg:w-[46%]">
            <div className="min-h-[52px] lg:min-h-[111px]  flex lg:items-center">
              <img
                src="4.png"
                className="w-[30px] lg:w-[75px] h-[30px] lg:h-[75px] rounded-[50%] ml-[15px] my-auto"
              />
              <div className="ml-[11px] lg:ml-[25px] mt-[2px] ">
                <p className="text-[#D89203] font-[700] text-[14px] lg:text-[24px] p-0">
                  Mobile No.
                </p>
                <p className="font-[400] text-[14px] lg:text-[24px] text-[#AF790C] p-0">
                  +91 8955439028
                </p>
              </div>
            </div>
          </div>

          <div className="w-320px rounded-[24px] lg:rounded-[70px] bg-[#3B3C41] min-h-[52px] lg:min-h-[111px] lg:w-[46%]">
            <div className="min-h-[52px] lg:min-h-[111px]  flex lg:items-center">
              <img
                src="5.png"
                className="w-[30px] lg:w-[75px] h-[30px] lg:h-[75px] rounded-[50%] ml-[15px] my-auto"
              />
              <div className="ml-[11px] lg:ml-[25px] mt-[2px] ">
                <p className="text-[#D89203] font-[700] text-[14px] lg:text-[24px] p-0">
                  Email
                </p>
                <p className="font-[400] text-[14px] lg:text-[24px] text-[#AF790C] p-0">
                  {" "}
                  <a href="mailto:anyintech@anyintech.com?subject = Feedback&body = Message">
                    anyintech@anyintech.com{" "}
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="w-320px rounded-[24px] lg:rounded-[70px] bg-[#3B3C41] min-h-[52px] lg:min-h-[111px] lg:w-[46%]">
            <div className="min-h-[52px] lg:min-h-[111px]  flex lg:items-center">
              <img
                src="6.png"
                className="w-[30px] lg:w-[75px] h-[30px] lg:h-[75px] rounded-[50%] ml-[15px] my-auto"
              />
              <div className="ml-[11px] lg:ml-[25px] mt-[2px] ">
                <p className="text-[#D89203] font-[700] text-[14px] lg:text-[24px] p-0">
                  Category
                </p>
                <p className="font-[400] text-[14px] lg:text-[24px] text-[#AF790C] p-0">
                  <a href="https://www.anyintech.com/service.html">
                    Information Technology
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </AppLayout>
    </div>
  );
};

export default Contact;
