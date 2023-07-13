import { FaLongArrowAltRight } from "react-icons/fa";
const Hero = () => {
  return (
    <div className="flex-row lg:flex justify-between items-center p-4 lg:p-0">
      <div>
        <h1 className="font-Lora text-4xl lg:text-5xl font-medium text-white">
          Modern interior
        </h1>
        <p className="font-Montserrat mt-5 text-sm lg:text-2xl font-normal text-white w-[250px] lg:w-[410px]">
          A full-Service residential & commercial interior design and staging
          company offering professional organizing & eco-services.
        </p>
        <h2 className="font-Montserrat cursor-pointer mt-5 text-lg flex items-center gap-4 font-bold text-white">
          Read more <FaLongArrowAltRight />
        </h2>
      </div>
      <div className="relative mt-5 lg:mt-0">
        <img
          src="https://i.ibb.co/8czZkdY/photo1.png"
          className="w-[391.06px] h-[279.338px] lg:h-[586.531px] lg:w-[821.114px] p-0 lg:p-12"
          alt=""
        />
        <div className="bg-[#181719] shadow-bottomShadow w-[300px] h-[150px] lg:w-[410px] lg:h-[189px] p-4 lg:p-6 absolute right-[19px] top-[224px] lg:right-[79px] lg:top-[470px]">
          <div className="flex items-center gap-4">
            <img
              src="https://i.ibb.co/jvTrHRj/photo2.png"
              className="rounded-full h-14 w-14"
              alt=""
            />
            <div>
              <h1 className="text-sm font-Montserrat text-white">
                Aliza Webber
              </h1>
              <p className="font-Montserrat text-xs font-medium">
                Interior designer
              </p>
            </div>
          </div>
          <h1 className="font-Lora mt-2 lg:mt-4 font-bold text-lg lg:text-2xl text-white">
            Designed in 2020 by <br /> Aliza Webber
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
