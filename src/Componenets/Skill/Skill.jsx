import { FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";

const Skill = () => {
    return (
        <div className="bg-[#4b4f52] lg:h-[500px]">
            <div  data-aos="fade-right"
     data-aos-offset="300"
     data-aos-duration="800"
     data-aos-easing="ease-in-sine">
         <h1 className="text-[35px] text-[#e4aa48] text-center font-semibold underline">My Skills</h1>
         <h1 className="text-[35px] text-[#d8dbdf] text-center font-semibold ">What I Am Great At</h1>
            </div>

            <div  data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="800" className="mt-[40px] flex gap-[5px] ml-[18%]">

                <div className="h-[250px] w-[200px] bg-[#343a40]">
                    <FaReact className="text-[#e4aa48] text-[155px] container mx-auto"></FaReact>
                    <h1 className="text-[#d8dbdf] text-[35px] font-semibold text-center">React JS</h1>
                </div>

                <div className="h-[250px] w-[200px] bg-[#343a40]">
                    <SiMongodb className="text-[#e4aa48] text-[155px] container mx-auto"></SiMongodb>
                    <h1 className="text-[#d8dbdf] text-[35px] font-semibold text-center">Mongo DB</h1>
                </div>

                <div className="h-[250px] w-[200px] bg-[#343a40]">
                    <SiFirebase className="text-[#e4aa48] text-[155px] container mx-auto"></SiFirebase>
                    <h1 className="text-[#d8dbdf] text-[35px] font-semibold text-center">FireBase</h1>
                </div>
                
                <div className="h-[250px] w-[200px] bg-[#343a40]">
                    <SiTailwindcss className="text-[#e4aa48] text-[155px] container mx-auto"></SiTailwindcss>
                    <h1 className="text-[#d8dbdf] text-[35px] font-semibold text-center">Tailwind</h1>
                </div>
                
                <div className="h-[250px] w-[200px] bg-[#343a40]">
                    <IoLogoJavascript className="text-[#e4aa48] text-[155px] container mx-auto"></IoLogoJavascript>
                    <h1 className="text-[#d8dbdf] text-[35px] font-semibold text-center">Java script</h1>
                </div>

            </div>
        </div>
    );
};

export default Skill;