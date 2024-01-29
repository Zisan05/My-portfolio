import { MdOutlineMailOutline } from "react-icons/md";
import { MdAddCall } from "react-icons/md";
import { FaSkype } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Contract = () => {
  return (
    <div className="">
      <div className="" data-aos="flip-left"  data-aos-duration="2000">
      <h1 className="text-[#e4aa48] text-[30px] font-bold  text-center underline">Contract me</h1>

    
<h1 className="text-white text-[32px] text-center font-semibold">Way to contract me</h1>

<p className="text-[18px] font-normal text-white text-center">Here you can use all this information to contract with me. <br /> just contract me and  i will ensure that i<br /> will complete the work that you give</p>
      </div>


  <div data-aos="fade-right" className="flex flex-col md:flex-col lg:flex-row gap-[25px]  mt-[30px] md:ml-[200px] lg:ml-[400px]">
    <div className="bg-[#4b4f52] w-[320px] md:w-[400px] lg:w-[400px]  py-[15px] flex flex-row-reverse justify-around items-center">
      <p className="text-[#e4aa48] text-[22px] font-semibold ">mdzisanislam69@gmail.com</p>
      <MdOutlineMailOutline className="text-white text-[45px]"></MdOutlineMailOutline>

    </div>

    <div className="bg-[#4b4f52] w-[280px] md:w-[300px] lg:w-[300px]  p-[15px] flex flex-row-reverse justify-around items-center ml-[20px] md:ml-[50px] lg:ml-0">
      <p className="text-[#e4aa48] text-[22px] font-semibold ">+88 01790866932</p>
      <MdAddCall className="text-white text-[45px]"></MdAddCall>

    </div>

    <div className="bg-[#4b4f52] w-[200px] md:w-[200px] lg:w-[200px]  py-[15px] flex flex-row-reverse justify-around items-center ml-[60px] md:ml-[100px] lg:ml-0">
      <p className="text-[#e4aa48] text-[22px] font-semibold ">Zisan:islam_</p>
      <FaSkype className="text-white text-[45px]"></FaSkype>

    </div>

  </div>

  <div data-aos="fade-right"  className="flex flex-col md:flex-col lg:flex-row gap-[25px]  mt-[30px] mb-[50px] md:ml-[200px] lg:ml-[660px]">
  <div className="bg-[#4b4f52] w-[200px] md:w-[200px] lg:w-[200px] py-[15px] flex flex-row-reverse justify-around items-center ml-[60px] md:ml-[100px] lg:ml-0">
      <p className="text-[#e4aa48] text-[22px] font-semibold ">@Zisan</p>
      <FaTwitter className="text-white text-[45px]"></FaTwitter>

    </div>
  <div className="bg-[#4b4f52] w-[200px] md:w-[200px] lg:w-[200px]  py-[15px] flex flex-row-reverse justify-around items-center ml-[60px] md:ml-[100px] lg:ml-0">
      <p className="text-[#e4aa48] text-[22px] font-semibold ">Git Hub</p>
      <FaGithub className="text-white text-[45px]"></FaGithub>

    </div>
  </div>
 

    </div>
  );
};

export default Contract;