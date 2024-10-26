import fennec from "../assets/fennec.webp";
import Accordion from "./Accordion";
import blackLogo from "../assets/HeroFennec.svg";
function About() {
  const tab = [
    {
      id: 1,
      header: "Seamless Integration with Algerian Software",
      description:
        "Fennec OS seamlessly integrates with a wide range of software and services developed by Algerian companies and organizations, making it a perfect choice for users in the region.",
    },
    {
      id: 2,
      header: "Collaboration with Local Developers",
      description:
        "Fennec OS is the result of a collaborative effort between the Fennec team and Algerian software developers, ensuring a strong local presence and support.",
    },
    {
      id: 3,
      header: "Tailored for the Algerian Market",
      description:
        "The features and functionalities of Fennec OS have been carefully crafted to cater to the specific needs and preferences of users in Algeria, making it a truly domestic Linux distribution.",
    },
  ];
  return (
  <section>
    <section className="my-8 md:my-16 lg:my-8 mx-0 md:mx-5 lg:mt-0">
      <div className="max-w-5xl mx-auto ">
        <div className="flex flex-col mx-5 md:mx-0 md:flex-row  justify-between items-center gap-6">
          <div className="my-3 flex-1">
            <h1 className="text-center text-2xl md:text-start lg:text-4xl text-white font-black md:leading-[3.4rem]">
              Integration with Algerian Software
            </h1>
            {tab.map((item) => (
              <Accordion
                key={item.id}
                title={item.header}
                content={item.description}
              />
            ))}
          </div>
          <div className="my-3 basis-[40%]">
            <img src={fennec} alt="" className=" object-cover rounded-xl" />
          </div>
        </div>
      </div>
    </section>
    <section className=" lg:h-[70vh] flex justify-center items-center ">
      <div className="max-w-5xl mx-auto  p-4">
        <h1 className=" lg:text-start text-center text-[1.5em] md:text-[2em] lg:text-[2.5em] font-black text-white capitalize">
          Empowering Your Digital Ecosystem
        </h1>
        <div className="grid grid-cols-1 mx-3 md:mx-0 md:grid-cols-3 gap-5 md:gap-8 mt-8">
          <div className=" col-span-1 border-2 border-orange-500 rounded-2xl hover:scale-110 hover:bg-white/5 duration-300 md:p-3 p-4 lg:p-6">
            <h2 className="text-xl  text-orange-500 font-bold capitalize text-center mb-2">
              Productivity
            </h2>
            <p className="  text-sm md:text-base lg:text-lg text-justify text-white capitalize">
              Fennec OS enhances productivity by providing a streamlined and
              efficient digital workspace, enabling users to achieve their goals
              with ease.
            </p>
          </div>
          <div className=" col-span-1 border-2 border-orange-500 rounded-2xl hover:scale-110 hover:bg-white/5 duration-300 md:p-3 p-4 lg:p-6 ">
            <h2 className="text-xl text-orange-500 text-center font-bold capitalize mb-2">
              Collaboration
            </h2>
            <p className=" text-sm md:text-base lg:text-lg text-white text-justify capitalize">
              The seamless integration of Fennec OS with Algerian software
              promotes collaborative efforts, fostering a thriving digital
              ecosystem.
            </p>
          </div>
          <div className=" col-span-1 border-2 border-orange-500 rounded-2xl hover:scale-110 hover:bg-white/5 duration-300 md:p-3 p-4 lg:p-6 ">
            <h2 className="text-xl text-orange-500 text-center font-bold capitalize mb-2">
              Innovation
            </h2>
            <p className=" text-sm md:text-base lg:text-lg text-white text-justify capitalize">
              By empowering users with a secure and customizable platform,
              Fennec OS encourages innovation and the development of new ideas.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className=" md:h-[70vh] flex justify-center items-center ">
      <div className="max-w-6xl mx-auto  p-4">
        <h1 className="text-center md:text-start text-[2em]  md:text-[2.5em] font-black text-orange-500 capitalize">
          Our Team
        </h1>
        <div className="grid w-full grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-4 md:mt-8">
          <div className=" col-span-1 ">
            <div className="w-full overflow-hidden p-3 flex justify-center items-center h-[150px] bg-slate-500 rounded-2xl">
              <img
                src={blackLogo}
                alt=""
                className="w-full opacity-50 object-cover"
              />
            </div>
            <h1 className="text-lg lg:text-xl mt-2 md:mt-3 font-black text-white">
              John Doe
            </h1>
            <p className=" text-base lg:text-lg font-bold text-white">
              Founder & CEO
            </p>
          </div>
          <div className=" col-span-1  ">
            <div className="w-full p-3  overflow-hidden flex justify-center items-center h-[150px] bg-slate-500 rounded-2xl">
              <img
                src={blackLogo}
                alt=""
                className="w-full opacity-50 object-cover"
              />
            </div>
            <h1 className="text-lg lg:text-xl mt-2 md:mt-3 font-black text-white">
              Jane Doe
            </h1>
            <p className="text-base lg:text-lg font-bold text-white">
              Head of Marketing
            </p>
          </div>
          <div className=" col-span-1  ">
            <div className="w-full  overflow-hidden p-3 flex justify-center items-center h-[150px] bg-slate-500 rounded-2xl">
              <img
                src={blackLogo}
                alt=""
                className="w-full opacity-50 object-cover"
              />
            </div>
            <h1 className="text-lg lg:text-xl mt-2 md:mt-3 font-black text-white">
              Peter Pan
            </h1>
            <p className="text-base lg:text-lg font-bold text-white">
              Lead Engineer
            </p>
          </div>
          <div className=" col-span-1  ">
            <div className="w-full  overflow-hidden p-3 flex justify-center items-center h-[150px] bg-slate-500 rounded-2xl">
              <img
                src={blackLogo}
                alt=""
                className="w-full opacity-50 object-cover"
              />
            </div>
            <h1 className="text-lg lg:text-xl mt-2 md:mt-3 font-black text-white">
              New Member
            </h1>
            <p className="text-base lg:text-lg font-bold text-white">
              New Role
            </p>
          </div>
        </div>
      </div>
    </section>
    </section>
  );
}

export default About;
