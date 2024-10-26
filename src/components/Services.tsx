import Screen from "../assets/screen.webp";
import Security from "../assets/Security.webp";
import Desk from "../assets/desk.webp";
import { FaDraftingCompass, FaShieldVirus } from "react-icons/fa";
import "../App.css";

import { IoMdResize } from "react-icons/io";
import { BiSolidCustomize } from "react-icons/bi";
import { RiFlowChart } from "react-icons/ri";
import { FaShieldHalved } from "react-icons/fa6";
import { GiDialPadlock, GiFirewall } from "react-icons/gi";
function Services() {
  return (
    <section className="my-3">
      <div className="max-w-6xl mx-auto ">
        <div className="flex justify-center mx-0 md:mx-5 lg:mx-0 lg:items-center gap-3 md:gap-5 lg:gap-8">
          <div className=" overflow-hidden rounded-lg hidden md:block basis-[45%]">
            <h1 className="text-orange-500 mb-7 md:mb-10 md:block lg:hidden hidden md:text-start text-center text-[1.5em]  md:text-[2.5em] font-black">
              User-Friendly Interfaces
            </h1>
            <img src={Screen} className="w-full object-cover" alt="" />
          </div>
          <div className="flex-1">
            <h1 className="text-orange-500 block md:hidden lg:block mb-7 md:mb-10 md:text-start text-center text-[1.5em]  md:text-[2.5em] font-black">
              User-Friendly Interfaces
            </h1>
            <div className="md:mx-0 mx-5 grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5">
              <div className="md:hidden col-span-1 overflow-hidden rounded-2xl hover:scale-105  cursor-pointer duration-300 border-2 border-orange-500 ">
                <img src={Screen} alt="" />
              </div>
              <div className="col-span-1 hover:scale-105 hover:bg-white/15 cursor-pointer duration-300  rounded-2xl border-2 border-orange-500 p-4 md:p-6">
                <div className="flex gap-3 items-center">
                  <FaDraftingCompass className="text-xl text-orange-500" />
                  <h2 className="font-bold text-xl text-white">
                    Intuitive Navigation
                  </h2>
                </div>

                <p className="font-semibold mt-3 md:text-base text-sm text-white text-justify">
                  Fennec OS features a clean and streamlined interface, making
                  it easy for users to find and access the tools and
                  applications they need.
                </p>
              </div>

              <div className="col-span-1 rounded-2xl hover:scale-105 hover:bg-white/15 cursor-pointer duration-300 border-2 border-orange-500 p-4 md:p-6">
                <div className="flex gap-3 items-center">
                  <IoMdResize className="text-xl text-orange-500" />
                  <h2 className="font-bold text-xl text-white">
                    Responsive Design
                  </h2>
                </div>
                <p className="font-semibold mt-3 md:text-base text-sm text-white text-justify">
                  The user interface of Fennec OS adapts seamlessly across
                  different devices, ensuring a consistent and optimized
                  experience.
                </p>
              </div>
              <div className="col-span-1 rounded-2xl hover:scale-105 hover:bg-white/15 cursor-pointer duration-300 border-2 border-orange-500 p-4 md:p-6">
                <div className="flex gap-3 items-center">
                  <BiSolidCustomize className="text-xl text-orange-500" />
                  <h2 className="font-bold text-xl text-white">
                    Customizable Themes
                  </h2>
                </div>
                <p className="font-semibold mt-3 md:text-base text-sm text-white text-justify">
                  Users can personalize the look and feel of Fennec OS by
                  choosing from a variety of visually appealing and stylish
                  themes.
                </p>
              </div>
              <div className="col-span-1 rounded-2xl hover:scale-105 hover:bg-white/15 cursor-pointer duration-300 border-2 border-orange-500 p-4 md:p-6">
                <div className="flex gap-3 items-center">
                  <RiFlowChart className="text-xl text-orange-500" />
                  <h2 className="font-bold text-xl text-white">
                    Intuitive Workflow
                  </h2>
                </div>
                <p className="font-semibold mt-3 md:text-base text-sm text-white text-justify">
                  The interface of Fennec OS is designed to enhance productivity
                  and efficiency, enabling users to accomplish their tasks with
                  ease.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mx-0 md:mx-5 lg:mx-0 lg:items-center gap-3 md:gap-8 mt-10">
          <div className="hidden md:block overflow-hidden rounded-lg basis-[45%]">
            <h1 className="text-orange-500  md:mb-10 lg:hidden md:block hidden md:text-start text-center text-[1.5em]  lg:text-[2.5em] font-black">
              Advanced Security Features
            </h1>

            <img src={Security} className="w-full object-cover" alt="" />
          </div>
          <div className="flex-1">
            <h1 className="text-orange-500 block md:hidden lg:block mb-7 md:mb-10 md:text-start text-center text-[1.5em]  md:text-[2.5em] font-black">
              Advanced Security Features
            </h1>

            <div className="grid mx-5 md:mx-0 grid-cols-1 lg:grid-cols-2 gap-5 mt-5">
              <div className="md:hidden col-span-1 overflow-hidden rounded-2xl hover:scale-105  cursor-pointer duration-300 border-2 border-orange-500 ">
                <img src={Security} alt="" />
              </div>
              <div className="col-span-1 hover:scale-105 cursor-pointer duration-300  rounded-2xl border-transparent border-2 hover:border-orange-500 p-6">
                <FaShieldHalved className="text-3xl text-orange-500 mb-3 " />
                <h2 className="font-bold text-xl text-white block">
                  Robust Security
                </h2>

                <p className="font-semibold text-sm md:text-base mt-1 md:mt-3 text-white text-justify">
                  Fennec OS incorporates advanced security measures to protect
                  your data and ensure the integrity of your digital
                  environment.
                </p>
              </div>
              <div className="col-span-1 rounded-2xl hover:scale-105  cursor-pointer duration-300 border-transparent border-2 hover:border-orange-500 p-6">
                <GiDialPadlock className="text-3xl mb-3 text-orange-500" />
                <h2 className="font-bold text-xl text-white block">
                  Encryption
                </h2>

                <p className="font-semibold text-sm md:text-base mt-1 md:mt-3 text-white text-justify">
                  Built-in encryption tools safeguard sensitive information,
                  keeping your data secure and private.
                </p>
              </div>
              <div className="col-span-1 rounded-2xl hover:scale-105  cursor-pointer duration-300 border-transparent border-2 hover:border-orange-500 p-6">
                <GiFirewall className="text-3xl mb-3 text-orange-500" />
                <h2 className="font-bold text-xl text-white block">
                  Firewall Protection
                </h2>

                <p className="font-semibold text-sm md:text-base mt-1 md:mt-3 text-white text-justify">
                  The comprehensive firewall system in Fennec OS monitors and
                  controls network traffic, providing an additional layer of
                  security.
                </p>
              </div>
              <div className="col-span-1 rounded-2xl hover:scale-105  cursor-pointer duration-300 border-transparent border-2 hover:border-orange-500 p-6">
                <FaShieldVirus className="text-3xl mb-3 text-orange-500" />
                <h2 className="font-bold text-xl text-white block">
                  Malware Protection
                </h2>

                <p className="font-semibold text-sm md:text-base mt-1 md:mt-3 text-white text-justify">
                  Fennec OS is equipped with robust antivirus and anti-malware
                  tools to safeguard your system from potential threats.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mx-0 md:mx-5 lg:mx-0 lg:items-center gap-3 md:gap-6 lg:gap-8 mt-10">
          <div className="hidden md:block overflow-hidden rounded-lg basis-[45%]">
            <h1 className="text-orange-500 lg:hidden  md:mb-10 md:block hidden md:text-start text-center text-[1.5em]  lg:text-[2.5em] font-black">
              Extensive Customization Options
            </h1>

            <img src={Desk} className="w-full object-cover rounded-lg" alt="" />
          </div>
          <div className="mx-5 md:mx-0 flex-1">
            <h1 className="text-orange-500 block md:hidden lg:block mb-7 md:mb-10 md:text-start text-center text-[1.5em]  md:text-[2.5em] font-black">
              Extensive Customization Options
            </h1>
            <div className="md:hidden  overflow-hidden rounded-2xl hover:scale-105  cursor-pointer duration-300 border-2 border-orange-500 ">
              <img src={Desk} alt="" />
            </div>
            <ul className=" flex flex-col gap-4 md:mt-0 mt-7 relative before:absolute before:top-0 before:left-3.5 md:before:left-10 before:h-full before:w-[2px] before:bg-slate-400/30">
              <li className="flex p-0  md:p-5">
                <div className="basis-[20%]">
                  <span className=" relative before:absolute before:w-[25px] lg:before:w-[55px] before:h-0.5 z-20 before:-z-10 before:bg-orange-500 before:top-1/2 before:-translate-y-1/2 before:-right-[25px]  lg:before:-right-[55px] w-[30px] h-[30px] md:w-[40px] md:h-[40px] border-2 rounded-full bg-black text-base md:text-xl border-orange-500 text-white font-black flex justify-center items-center">
                    1
                  </span>
                </div>
                <div className="flex-1 lg:mt-0 mt-0.5 md:mt-1.5">
                  <h2 className="text-base md:text-xl lg:text-2xl font-black mb-1 md:mb-3 text-white">
                    Visual Themes
                  </h2>
                  <p className="text-xs md:text-base lg:text-xl text-justify text-white font-">
                    Fennec OS offers a wide selection of visually appealing
                    themes, allowing users to personalize the look and feel of
                    their desktop.
                  </p>
                </div>
              </li>
              <li className="flex p-0  md:p-5">
                <div className="basis-[20%]">
                  <span className=" relative before:absolute before:w-[25px] lg:before:w-[55px] before:h-0.5 z-20 before:-z-10 before:bg-orange-500 before:top-1/2 before:-translate-y-1/2 before:-right-[25px] lg:before:-right-[55px] w-[30px] h-[30px] md:w-[40px] md:h-[40px] border-2 rounded-full bg-black text-base md:text-xl border-orange-500 text-white font-black flex justify-center items-center">
                    2
                  </span>
                </div>
                <div className="flex-1 lg:mt-0 mt-0.5 md:mt-1.5">
                  <h2 className="text-base md:text-xl lg:text-2xl font-black mb-1 md:mb-3 text-white">
                    Software Selection
                  </h2>
                  <p className="text-xs md:text-base lg:text-xl text-justify text-white font-">
                    Users can curate their software suite by choosing from a
                    diverse range of applications and tools, tailoring Fennec OS
                    to their needs.
                  </p>
                </div>
              </li>
              <li className="flex p-0  md:p-5">
                <div className="basis-[20%]">
                  <span className=" relative before:absolute before:w-[25px] lg:before:w-[55px] before:h-0.5 z-20 before:-z-10 before:bg-orange-500 before:top-1/2 before:-translate-y-1/2 before:-right-[25px] lg:before:-right-[55px] w-[30px] h-[30px] md:w-[40px] md:h-[40px] border-2 rounded-full bg-black text-sm md:text-xl border-orange-500 text-white font-black flex justify-center items-center">
                    3
                  </span>
                </div>
                <div className="flex-1 lg:mt-0 mt-0.5 md:mt-1.5">
                  <h2 className="text-base md:text-xl lg:text-2xl font-black mb-1 md:mb-3 text-white">
                    System Configurations
                  </h2>
                  <p className="text-xs md:text-base lg:text-xl text-justify text-white font-">
                    Advanced users can delve into the robust system settings,
                    fine-tuning Fennec OS to optimize performance and
                    functionality.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
