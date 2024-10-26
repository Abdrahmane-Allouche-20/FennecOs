import { IoMdCloudDownload } from "react-icons/io";
import { IoDocumentText } from "react-icons/io5";

import greyLogo from "../assets/grey.svg";
export default function LandingPage(){
  return (
    <section  className="max-w-5xl mx-auto my-5 p-3 h-[100vh] flex justify-center items-center ">
      <div className="relative z-20">
        <div className="w-full md:w-[75%]  lg:w-[85%] ">
          <h1 className="text-[1.5em] md:text-[2.3em] lg:text-[3.45em] text-[#fc8337] font-bold">
            Fennec OS: A Lightweight and Secure Linux Distribution
          </h1>
          <p className="text-[13px] md:text-[15px] lg:text-[17px] w-full md:w-[95%] font-semibold mt-3 text-white">
            Designed for a smooth user experience, Fennec OS is the perfect
            Linux distribution for universities, homes, and companies.
          </p>
          <div className="flex items-center gap-3 mt-8">
            <button className="hover:scale-105 duration-300 p-1.5 md:p-2 lg:p-3 text-sm md:text-lg lg:text-xl text-white font-black border-2 border-[#fc8337] rounded-xl md:rounded-2xl bg-[#fc8337]    flex gap-3 items-center justify-center">
              <IoMdCloudDownload className="text-lg md:text-2xl" />
              DownLoad
            </button>
            <button className="hover:scale-105 duration-300 p-1.5 md:p-2 lg:p-3 text-sm md:text-lg lg:text-xl text-[#fc8337] bg-black border-2 border-[#fc8337] font-black   rounded-xl md:rounded-2xl     flex gap-3 items-center justify-center">
              <IoDocumentText className="text-lg md:text-2xl" />
              Learn More
            </button>
          </div>
        </div>
        <div className=" -z-10 absolute right-0 bottom-[65%] translate-y-1/2  w-[150px]  lg:w-[400px] h-[150px] md:w-[300px] md:h-[300px] lg:h-[400px]">
          <img
            src={greyLogo}
            className="w-full opacity-20 md:opacity-35"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

