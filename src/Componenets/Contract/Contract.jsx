import { MdOutlineMailOutline } from "react-icons/md";
import { MdAddCall } from "react-icons/md";
import { FaSkype } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Contract = () => {
  return (
    <div>
      <div data-aos="flip-left"  data-aos-duration="2000">
      <h1 className="text-[#e4aa48] text-[30px] font-bold text-center mt-[30px] underline">Contract me</h1>

    
<h1 className="text-white text-[40px] text-center font-semibold">Way to contract me</h1>

<p className="text-[18px] font-normal text-center text-white ">Here you can use all this information to contract with me. <br /> just contract me and  i will ensure that i<br /> will complete the work that you give</p>
      </div>


  <div data-aos="fade-right" className="flex flex-col md:flex-col lg:flex-row gap-[25px] container md:ml-[300px] lg:ml-[350px] mt-[30px]">
    <div className="bg-[#4b4f52] w-[300px] p-[15px] flex flex-row-reverse justify-around items-center">
      <p className="text-[#e4aa48] text-[22px] font-semibold ">mdzisanislam69@</p>
      <MdOutlineMailOutline className="text-white text-[45px]"></MdOutlineMailOutline>

    </div>

    <div className="bg-[#4b4f52] w-[300px] p-[15px] flex flex-row-reverse justify-around items-center">
      <p className="text-[#e4aa48] text-[22px] font-semibold ">+88  01790866932</p>
      <MdAddCall className="text-white text-[45px]"></MdAddCall>

    </div>

    <div className="bg-[#4b4f52] w-[250px] p-[15px] flex flex-row-reverse justify-around items-center">
      <p className="text-[#e4aa48] text-[22px] font-semibold ">Zisan:islam_</p>
      <FaSkype className="text-white text-[45px]"></FaSkype>

    </div>

  </div>

  <div data-aos="fade-left"  className="flex flex-col md:flex-col lg:flex-row gap-[25px] container md:ml-[300px] lg:ml-[600px] mt-[30px] mb-[50px]">
  <div className="bg-[#4b4f52] w-[200px] p-[15px] flex flex-row-reverse justify-around items-center">
      <p className="text-[#e4aa48] text-[22px] font-semibold ">@Zisan</p>
      <FaTwitter className="text-white text-[45px]"></FaTwitter>

    </div>
  <div className="bg-[#4b4f52] w-[200px] p-[15px] flex flex-row-reverse justify-around items-center">
      <p className="text-[#e4aa48] text-[22px] font-semibold ">Git Hub</p>
      <FaGithub className="text-white text-[45px]"></FaGithub>

    </div>
  </div>
 

    </div>
  );
};

export default Contract;