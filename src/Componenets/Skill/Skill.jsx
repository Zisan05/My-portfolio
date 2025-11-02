import { FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { motion } from "framer-motion"

const Skill = () => {


    return (
        <div id="Skill" className="bg-[#4b4f52] lg:h-[500px] mt-[50px] md:pb-[50px] lg:pb-0">
            <div data-aos="flip-right"  data-aos-duration="2000">
         <h1 className="text-[35px] text-[#e4aa48] text-center font-semibold underline">My Skills</h1>
         <h1 className="text-[35px] text-[#d8dbdf] text-center font-semibold ">What I Am Great At</h1>
            </div>

            <div  className=" mt-[40px] flex flex-col md:flex-row lg:flex-row md:gap-[15px] lg:gap-[50px] justify-center  md:ml-0 pb-[30px]">

                <motion.div
                
                initial={{rotateY : 180}}
                
                whileInView= { {rotateY: 360}}

                transition={{duration : 1 }}
                
                className="h-[160px] md:h-[130px] lg:h-[160px] w-[160px] md:w-[130px] lg:w-[160px] bg-[#343a40] pt-[30px] rounded-[150px] mx-auto md:mx-0">
                    <FaReact className="text-[#e4aa48] text-[80px] md:text-[70px] lg:text-[100px] container mx-auto "></FaReact>
                     <h1 className="text-[#d8dbdf] text-[18px] md:text-[20px] lg:text-[30px] font-semibold text-center md:mt-[30px] lg:mt-[40px]">React js</h1>
                </motion.div>

                <motion.div
                
                  initial={{rotateY : 180}}
                
                whileInView= { {rotateY: 360}}

                transition={{duration : 1 }}
                
                className="h-[160px] md:h-[130px] lg:h-[160px] w-[160px] md:w-[130px] lg:w-[160px] bg-[#343a40] pt-[30px] rounded-[150px] mt-[20px] md:mt-0 mx-auto md:mx-0">
                    <SiMongodb className="text-[#e4aa48] text-[80px] md:text-[80px] lg:text-[100px] container mx-auto"></SiMongodb>
                    <h1 className="text-[#d8dbdf] text-[18px] md:text-[20px] lg:text-[30px] font-semibold text-center md:mt-[20px] lg:mt-[40px]">Mongo DB</h1>
                </motion.div>

                <motion.div
                
                  initial={{rotateY : 180}}
                
                whileInView= { {rotateY: 360}}

                transition={{duration : 1 }}
                
                className="h-[160px] md:h-[130px] lg:h-[160px] w-[160px] md:w-[130px] lg:w-[160px] bg-[#343a40] pt-[30px] rounded-[150px] mt-[20px] md:mt-0 mx-auto md:mx-0">
                    <SiFirebase className="text-[#e4aa48] text-[80px] md:text-[80px] lg:text-[100px] container mx-auto"></SiFirebase>
                    <h1 className="text-[#d8dbdf] text-[18px] md:text-[20px] lg:text-[30px] font-semibold text-center md:mt-[20px] lg:mt-[40px]">FireBase</h1>
                </motion.div>
                
                <motion.div
                
                  initial={{rotateY : 180}}
                
                whileInView= { {rotateY: 360}}

                transition={{duration : 1 }}
                
                className="h-[160px] md:h-[130px] lg:h-[160px] w-[160px] md:w-[130px] lg:w-[160px] bg-[#343a40] pt-[30px] rounded-[150px] mt-[20px] md:mt-0 mx-auto md:mx-0">
                    <SiTailwindcss className="text-[#e4aa48] text-[80px] md:text-[80px] lg:text-[100px] container mx-auto"></SiTailwindcss>
                    <h1 className="text-[#d8dbdf] text-[18px] md:text-[20px] lg:text-[30px] font-semibold text-center md:mt-[20px] lg:mt-[40px]">Tailwind</h1>
                </motion.div>
                
                <motion.div

                  initial={{rotateY : 180}}
                
                whileInView= { {rotateY: 360}}

                transition={{duration : 1 }}

                className="h-[160px] md:h-[130px] lg:h-[160px] w-[160px] md:w-[130px] lg:w-[160px] bg-[#343a40] pt-[30px] rounded-[150px] mt-[20px] md:mt-0 mx-auto md:mx-0">
                    <IoLogoJavascript className="text-[#e4aa48] text-[80px] md:text-[80px] lg:text-[100px] container mx-auto"></IoLogoJavascript>
                    <h1 className="text-[#d8dbdf] text-[18px] md:text-[20px] lg:text-[30px] font-semibold text-center md:mt-[20px] lg:mt-[40px]">Java script</h1>
                </motion.div>

            </div>
        </div>
    );
};

export default Skill;