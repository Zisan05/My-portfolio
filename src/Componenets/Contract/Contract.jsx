import { MdOutlineMailOutline } from "react-icons/md";
import { MdAddCall } from "react-icons/md";
import { RiMessengerFill } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { IoIosArrowDropupCircle } from "react-icons/io";

const Contract = () => {
  return (
    <div id="Contract" className="">

      <a href="#Nav"><IoIosArrowDropupCircle className="size-[50px] relative left-[320px] md:left-[650px] lg:left-[1400px] top-[750px] md:top-[700px] lg:top-[400px]  text-white"></IoIosArrowDropupCircle></a>
      <div className="" data-aos="flip-left"  data-aos-duration="2000">
      <h1 className="text-[#e4aa48] text-[30px] font-bold  text-center underline">Contract me</h1>

    
<h1 className="text-white text-[32px] text-center font-semibold">Way to contract me</h1>

<p className="text-[18px] font-normal text-white text-center">Here you can use all this information to contract with me. <br /> just contract me and  i will ensure that i<br /> will respons of your request .</p>
      </div>


  <div data-aos="fade-right" className="flex flex-col md:flex-col lg:flex-row gap-[25px]  mt-[30px] justify-center ml-[30px] md:ml-[170px] lg:ml-0">
    <a href="mailto:mdzisanislam69@gmail.com" target="_blank"  className="bg-[#4b4f52] w-[320px] md:w-[400px] lg:w-[400px]  py-[15px] flex flex-row-reverse justify-around items-center  transition hover:scale-110 duration-500">
      <p className="text-[#e4aa48] text-[22px] font-semibold ">mdzisanislam69@gmail.com</p>
      <MdOutlineMailOutline className="text-white text-[45px]"></MdOutlineMailOutline>

    </a>

    <div className="bg-[#4b4f52] w-[280px] md:w-[300px] lg:w-[300px]  p-[15px] flex flex-row-reverse justify-around items-center ml-[20px] md:ml-[50px] lg:ml-0 transition hover:scale-110 duration-500">
      <p className="text-[#e4aa48] text-[22px] font-semibold ">+88 01790866932</p>
      <MdAddCall className="text-white text-[45px]"></MdAddCall>

    </div>

    <a href="https://wa.me/8801790866932" target="_blank" className="bg-[#4b4f52] w-[200px] md:w-[200px] lg:w-[200px]  py-[15px] flex flex-row-reverse justify-around items-center ml-[60px] md:ml-[100px] lg:ml-0 transition hover:scale-110 duration-500">
      <p className="text-[#e4aa48] text-[22px] font-semibold ">Whats app</p>
      <IoLogoWhatsapp className="text-white text-[45px]"></IoLogoWhatsapp>

    </a>

  </div>

  <div data-aos="fade-right"  className="flex flex-col md:flex-col lg:flex-row gap-[25px]  mt-[30px] mb-[50px] justify-center ml-[30px] md:ml-[170px] lg:ml-0">
  <a href="https://m.me/100092237885166" target="_blank"  className="bg-[#4b4f52] w-[200px] md:w-[200px] lg:w-[200px] py-[15px] flex flex-row-reverse justify-around items-center ml-[60px] md:ml-[100px] lg:ml-0 transition hover:scale-110 duration-500">
      <p className="text-[#e4aa48] text-[22px] font-semibold ">Zisan Islam</p>
      <RiMessengerFill className="text-white text-[45px]"></RiMessengerFill>

    </a >
  <a href="https://github.com/Zisan05" target="_blank" className="bg-[#4b4f52] w-[200px] md:w-[200px] lg:w-[200px]  py-[15px] flex flex-row-reverse justify-around items-center ml-[60px] md:ml-[100px] lg:ml-0 transition hover:scale-110 duration-500">
      <a  className="text-[#e4aa48] text-[22px] font-semibold ">Git Hub</a>
      <FaGithub className="text-white text-[45px]"></FaGithub>

    </a>
  </div>
 

    </div>
  );
};

export default Contract;