import React from "react";
import { Link } from "react-router-dom";

function PhoneSection() {
  return (
    <div id="reels" className="h-auto -mt-28 sm:-mt-2 z-0">
      <div className="text-white h-auto">
        <section className="mx-2 md:mx-10 min-h-[350px] md:min-h-[900px] bg-[#0038c7] relative">
          <div className="relative">
            <img
              className="border min-h-[350px] md:min-h-[900px] rounded-[50px] border-none w-full"
              src="/gridd.png"
              alt=""
            />
          </div>

          <div className="absolute inset-0 top-3 sm:top-0 flex flex-col justify-center items-center overflow-hidden">
            <div className="absolute top-[10%] md:top-[3%] bg-[#a7ff00] text-black py-2 md:py-5 flex items-center justify-center border-[2px] border-black w-full">
              <span className="text-black font-brasika text-xs sm:text-3xl md:text-6xl mr-8 md:mr-20">
                Reels
              </span>
              <span className="text-black font-brasika text-xs sm:text-3xl md:text-6xl mr-8 md:mr-20">
                Reels
              </span>
              <span className="text-black font-brasika text-xs sm:text-3xl md:text-6xl mr-8 md:mr-20">
                Reels
              </span>
              <span className="text-black font-brasika text-xs sm:text-3xl md:text-6xl mr-8 md:mr-20">
                Reels
              </span>
              <span className="block md:hidden text-black font-brasika text-xs sm:text-3xl md:text-6xl mr-8 md:mr-20">
                Reels
              </span>
              {/* Repeat Reels spans as per your design */}
            </div>

            {/* The middle "Reels" section */}
            <div className="absolute top-[40%] sm:top-[35%] bg-[#a7ff00] text-black py-2 md:py-5 flex items-center justify-center border-[2px] border-black w-full">
              <span className="text-black font-brasika text-xs sm:text-3xl md:text-6xl mr-8 md:mr-20">
                Reels
              </span>
              <span className="text-black font-brasika text-xs sm:text-3xl md:text-6xl mr-8 md:mr-20">
                Reels
              </span><span className="text-black font-brasika text-xs sm:text-3xl md:text-6xl mr-8 md:mr-20">
                Reels
              </span><span className="text-black font-brasika text-xs sm:text-3xl md:text-6xl mr-8 md:mr-20">
                Reels
              </span><span className=" text-black font-brasika text-xs sm:text-3xl md:text-6xl mr-8 md:mr-20">
                Reels
              </span>
              {/* Repeat Reels spans as per your design */}
            </div>

            {/* The bottom "Reels" section */}
            <div className="absolute top-[65%] sm:top-[70%] bg-[#a7ff00] text-black py-2 md:py-5 flex items-center justify-center border-[2px] border-black w-full">
              <span className="text-black font-brasika text-xs sm:text-3xl md:text-6xl mr-8 md:mr-20">
                Reels
              </span>
              <span className="text-black font-brasika text-xs sm:text-3xl md:text-6xl mr-8 md:mr-20">
                Reels
              </span><span className="text-black font-brasika text-xs sm:text-3xl md:text-6xl mr-8 md:mr-20">
                Reels
              </span><span className="text-black font-brasika text-xs sm:text-3xl md:text-6xl mr-8 md:mr-20">
                Reels
              </span><span className="block md:hidden text-black font-brasika text-xs sm:text-3xl md:text-6xl mr-8 md:mr-20">
                Reels
              </span>
              {/* Repeat Reels spans as per your design */}
            </div>

            <div className="relative flex justify-center items-center -mt-12 md:-mt-36 space-x-4">
              <div className="relative w-[60px] h-[120px] sm:w-[100px] sm:h-[200px] md:w-56 md:h-[440px] translate-x-2/3 z-4">
                {/* Video with WebM format */}
                <video
                  className="p-0.5 md:p-2 absolute inset-0 w-full h-full object-cover rounded-xl md:rounded-[50px] z-0"
                  src="https://res.cloudinary.com/dwwd1oncs/video/upload/v1727631512/CAAS/video4_flbd2y.webm"
                  autoPlay
                  loop
                  muted
                />
                {/* Phone image overlay */}
                <img
                  className="absolute inset-0 w-full h-full object-contain z-10"
                  src="/phone.png"
                  alt="Phone"
                />
              </div>

              <div className="relative w-[70px] h-[140px] sm:w-[120px] sm:h-[240px] md:w-64 md:h-[510px] translate-x-1/3 z-30">
                {/* Video with WebM format */}
                <video
                  className="p-0.5 md:p-2 absolute inset-0 w-full h-full object-cover rounded-xl md:rounded-[50px] z-0"
                  src="https://res.cloudinary.com/dwwd1oncs/video/upload/v1727631523/CAAS/video2_g0yulw.webm"
                  autoPlay
                  loop
                  muted
                />
                {/* Phone image overlay */}
                <img
                  className="absolute inset-0 w-full h-full object-contain z-10"
                  src="/phone.png"
                  alt="Phone"
                />
              </div>

              <div className="relative w-[80px] h-[160px] sm:w-[140px] sm:h-[280px] md:w-72 md:h-[570px] z-50">
                {/* Video with WebM format */}
                <video
                  className="p-0.5 md:p-2 absolute inset-0 w-full h-full object-cover rounded-xl md:rounded-[50px] z-0"
                  src="https://res.cloudinary.com/dwwd1oncs/video/upload/v1727631520/CAAS/video5_lmvhv6.webm"
                  autoPlay
                  loop
                  muted
                />
                {/* Phone image overlay */}
                <img
                  className="absolute inset-0 w-full h-full object-contain z-10"
                  src="/phone.png"
                  alt="Phone"
                />
              </div>

              <div className="relative w-[70px] h-[140px] sm:w-[120px] sm:h-[240px] md:w-64 md:h-[510px] -translate-x-1/3 z-30">
                {/* Video with WebM format */}
                <video
                  className="p-0.5 md:p-2 absolute inset-0 w-full h-full object-cover rounded-xl md:rounded-[50px] z-0"
                  src="https://res.cloudinary.com/dwwd1oncs/video/upload/v1727631518/CAAS/video3_s9a1a2.webm"
                  autoPlay
                  loop
                  muted
                />
                {/* Phone image overlay */}
                <img
                  className="absolute inset-0 w-full h-full object-contain z-10"
                  src="/phone.png"
                  alt="Phone"
                />
              </div>

              <div className="relative w-[60px] h-[120px] sm:w-[100px] sm:h-[200px] md:w-56 md:h-[450px] -translate-x-2/3 z-4">
                {/* Video with WebM format */}
                <video
                  className="p-0.5 md:p-2 absolute inset-0 w-full h-full object-cover rounded-xl md:rounded-[50px] z-0"
                  src="https://res.cloudinary.com/dwwd1oncs/video/upload/v1727631248/CAAS/hanumanVideo_uud0a5.webm"
                  autoPlay
                  loop
                  muted
                />
                {/* Phone image overlay */}
                <img
                  className="absolute inset-0 w-full h-full object-contain z-10"
                  src="/phone.png"
                  alt="Phone"
                />
              </div>
            </div>

            {/* Button */}
            <Link to={"/reels"}>
              <div className="flex justify-center items-center">
                <button className="group absolute z-500 top-[80%] sm:top-[88%] px-12 py-2 border-[2px] border-[#a7ff00] rounded-3xl bg-white text-black flex items-center justify-center space-x-2 transform transition-all duration-200 hover:scale-105 hover:bg-black hover:text-[#a7ff00]">
                  <span>Check’em All</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 transform transition-all duration-300 group-hover:translate-x-8 group-hover:scale-150"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </button>
              </div>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

export default PhoneSection;
