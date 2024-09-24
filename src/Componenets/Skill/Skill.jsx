import { FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";

const Skill = () => {


    return (
        <div id="Skill" className="bg-[#4b4f52] lg:h-[500px] mt-[50px]">
            <div data-aos="flip-right"  data-aos-duration="2000">
         <h1 className="text-[35px] text-[#e4aa48] text-center font-semibold underline">My Skills</h1>
         <h1 className="text-[35px] text-[#d8dbdf] text-center font-semibold ">What I Am Great At</h1>
            </div>

            <div  data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="800" className=" mt-[40px] flex flex-col md:flex-row lg:flex-row gap-[5px] justify-center ml-[90px] md:ml-0 pb-[30px]">

                <div className="h-[250px] w-[200px] bg-[#343a40] pt-[30px]">
                    <FaReact className="text-[#e4aa48] text-[155px] container mx-auto"></FaReact>
                    <h1 className="text-[#d8dbdf] text-[30px] font-semibold text-center">React JS</h1>
                </div>

                <div className="h-[250px] w-[200px] bg-[#343a40] pt-[30px]">
                    <SiMongodb className="text-[#e4aa48] text-[155px] container mx-auto"></SiMongodb>
                    <h1 className="text-[#d8dbdf] text-[30px] font-semibold text-center">Mongo DB</h1>
                </div>

                <div className="h-[250px] w-[200px] bg-[#343a40] pt-[30px]">
                    <SiFirebase className="text-[#e4aa48] text-[155px] container mx-auto"></SiFirebase>
                    <h1 className="text-[#d8dbdf] text-[30px] font-semibold text-center">FireBase</h1>
                </div>
                
                <div className="h-[250px] w-[200px] bg-[#343a40] pt-[30px]">
                    <SiTailwindcss className="text-[#e4aa48] text-[155px] container mx-auto"></SiTailwindcss>
                    <h1 className="text-[#d8dbdf] text-[30px] font-semibold text-center">Tailwind</h1>
                </div>
                
                <div className="h-[250px] w-[200px] bg-[#343a40] pt-[30px]">
                    <IoLogoJavascript className="text-[#e4aa48] text-[155px] container mx-auto"></IoLogoJavascript>
                    <h1 className="text-[#d8dbdf] text-[30px] font-semibold text-center">Java script</h1>
                </div>

            </div>
        </div>
    );
};

export default Skill;