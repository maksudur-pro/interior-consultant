import { FaLongArrowAltRight } from "react-icons/fa";
const Hero = () => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h1 className="font-Lora text-5xl font-medium text-white">
          Modern interior
        </h1>
        <p className="font-Montserrat mt-5 text-2xl font-normal text-white w-[410px]">
          A full-Service residential & commercial interior design and staging
          company offering professional organizing & eco-services.
        </p>
        <h2 className="font-Montserrat cursor-pointer mt-5 text-lg flex items-center gap-4 font-bold text-white">
          Read more <FaLongArrowAltRight />
        </h2>
      </div>
      <div className="relative">
        <img
          src="https://i.ibb.co/8czZkdY/photo1.png"
          className="h-[586.531px] w-[821.114px] p-12"
          alt=""
        />
        <div className="bg-black w-[410px] h-[189px] p-6 absolute right-[79px] top-[470px]">
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
          <h1 className="font-Lora mt-4 font-bold text-2xl text-white">
            Designed in 2020 by <br /> Aliza Webber
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
