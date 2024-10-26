import Download from "../assets/Download.webp";
import { FaCloudDownloadAlt } from "react-icons/fa";
function DownLoad() {
  return (
    <section className=" flex justify-center items-center ">
      <div className="max-w-6xl mx-auto  p-4">
        <div className="flex flex-col-reverse md:flex-row  gap-8 justify-center items-center">
          <div className="basis-[40%]  overflow-hidden rounded-2xl hidden md:flex justify-center items-center h-[250px] md:h-[350px]">
            <img src={Download} loading="lazy" className="" alt="" />
          </div>
          <div className="flex-1">
            <h1 className="text-3xl  lg:text-4xl md:text-start text-center font-black text-white">
              Download Fennec OS
            </h1>
            <button className="hover:scale-105 duration-300 flex gap-3 items-center py-2.5 px-3  text-base md:text-lg font-black text-black bg-orange-500 rounded-xl md:rounded-2xl mt-6">
              <FaCloudDownloadAlt className="text-xl md:text-2xl " />
              DownLoad Now
            </button>
            <p className="text-white text-sm md:text-base lg:text-lg text-justify font-semibold mt-4 leading-loose">
              Experience the power and versatility of Fennec OS by downloading
              it today. Join the growing community of users and explore the
              endless possibilities of this innovative Linux distribution.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DownLoad;
