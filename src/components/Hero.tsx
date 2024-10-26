import { RiHomeWifiFill } from "react-icons/ri";
import { MdCastForEducation } from "react-icons/md";
import { FaChartLine } from "react-icons/fa";
import "../App.css";
function Hero() {
  return (
    <section>
    <section className="bg-orange-400  flex justify-center items-center ">
      <div className="max-w-6xl mx-auto p-2  md:p-3 lg:p-6">
        <h1 className="text-[1.5em] md:text-start text-center md:text-[2em] lg:text-[2.5em] font-black text-Black capitalize">
          Designed for a Smooth User Experience
        </h1>
        <div className="mx-10 lg:mx-0 grid grid-cols-1 lg:grid-cols-3 gap-3 md:gap-6 lg:gap-0 mt-5">
          <div className="  md:p-0 col-span-1 p-3 md:border-none border-b-2 border-orange-600/30">
            <h2 className="text-xl font-bold capitalize mb-2">
              User-Friendly Interfaces
            </h2>
            <p className="  text-sm md:text-lg text-justify   md:w-[85%] w-full capitalize">
              Fennec OS features intuitive and visually appealing interfaces,
              making it easy for users of all skill levels to navigate and
              accomplish their tasks.
            </p>
          </div>
          <div className="  col-span-1 md:p-0 p-3 md:border-none  border-b-2 border-orange-600/30">
            <h2 className="text-xl font-bold capitalize mb-2">
              Advanced Security Features
            </h2>
            <p className=" text-sm md:text-lg text-justify    md:w-[85%] w-full capitalize">
              With its robust security measures, Fennec OS ensures your digital
              activities remain safe and protected from potential threats.
            </p>
          </div>
          <div className="  col-span-1 md:p-0  p-3  ">
            <h2 className="text-xl font-bold capitalize mb-2">
              Extensive Customization Options
            </h2>
            <p className=" text-sm md:text-lg text-justify  md:w-[85%] w-full capitalize">
              Tailor Fennec OS to your specific needs and preferences with a
              wide range of customization options, from visual themes to
              software selections.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className=" py-5 flex justify-center   ">
    <div className="max-w-6xl mx-3 md:my-auto lg:mx-auto  lg:border-4 glass border-orange-500 p-3  md:p-10 ">
      <h1 className="text-[1.5em] md:text-start text-center md:text-[2.5em] font-black text-orange-500 capitalize">
        Perfect for Universities, Homes, and Companies
      </h1>
      <div className="grid grid-cols-1 mx-0 md:mx-10 lg:grid-cols-3 gap-5 md:gap-8 mt-6 md:mt-12">
        <div className=" col-span-1  flex gap-3">
          <div>
            <MdCastForEducation className="text-orange-500 text-2xl  md:text-3xl" />
          </div>
          <div>
            <h2 className="text-lg md:text-xl mb-2 md:mb-4 text-orange-500 font-bold capitalize ">
              Educational Institutions
            </h2>
            <p className=" text-white md:w-[80%] lg:w-full w-full text-base md:text-lg text-justify capitalize">
              Fennec OS is an excellent choice for universities and schools,
              providing a secure and flexible platform for teaching and
              learning.
            </p>
          </div>
        </div>
        <div className="  col-span-1 flex gap-3">
          <div>
            <RiHomeWifiFill className="text-orange-500 text-2xl  md:text-3xl" />
          </div>
          <div>
            <h2 className="text-lg md:text-xl mb-2 md:mb-4 font-bold capitalize text-orange-500 ">
              Home Computing
            </h2>
            <p className="text-white text-base md:text-lg md:w-[80%] lg:w-full w-full text-justify capitalize">
              Families and individuals can enjoy the seamless user experience
              and robust security features of Fennec OS in their home
              environments
            </p>
          </div>
        </div>
        <div className="  col-span-1  flex gap-3">
          <div>
            <FaChartLine className="text-orange-500 text-2xl  md:text-3xl" />
          </div>
          <div>
            <h2 className="text-lg md:text-xl mb-2 md:mb-4   text-orange-500 font-bold capitalize ">
              Corporate Environments
            </h2>
            <p className="text-white text-base md:text-lg md:w-[80%] lg:w-full w-full text-justify capitalize">
              Businesses and organizations can rely on Fennec OS to power
              their digital infrastructure, fostering productivity and
              collaboration.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  </section>
  );
}
export default Hero;
