import { motion } from "framer-motion"


const Banner = () => {
    return (
        <div className="dark md:h-[800px] lg:h-[600px]">
            <div  className=" px-[30px]  flex flex-col md:flex-row lg:flex-row items-center gap-[50px] justify-center mt-[80px]">

              <div className=" md:w-[450px] lg:w-[250px] ">
                <motion.h1 
                initial={{opacity : 0 , x : -100}}
                animate ={{opacity : 1 , x : 0}}
                transition={{duration : 2}}
                className="text-[45px] font-bold text-[#f8f9fa] ">ZISAN <br />ISLAM <span className="text-[#e4aa48] text-[45px]">.</span></motion.h1>
                <p className="border-b-4 border-b-[#e4aa48] w-[60%] mt-[30px]"></p>
                <p className="mt-[20px]">
                <a className="text-[#f8f9fa]  text-[23px] font-medium  hover:text-[#e4aa48] transition-text  hover:text-[26px] duration-1000 " href="https://github.com/Zisan05" target="_blank">Git Hub</a>
                <a className="text-[#e4aa48] text-[28px] font-medium ml-[5px]" href="">|</a>
                <a className="text-[#f8f9fa] text-[23px] font-medium ml-[5px] hover:text-[#e4aa48] transition-text  hover:text-[26px] duration-1000" href="https://www.facebook.com/profile.php?id=100092237885166" target="_blank">Facebook</a>
                </p>

                <p className="">
                <a className="text-[#f8f9fa] text-[23px] font-medium hover:text-[#e4aa48] transition-text  hover:text-[26px] duration-1000" href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit" target="_blank">Link Din</a>
                <a className="text-[#e4aa48] text-[28px] font-medium ml-[5px]" href="">|</a>
                <a className="text-[#f8f9fa] text-[23px] font-medium ml-[5px] hover:text-[#e4aa48] transition-all  hover:text-[26px] duration-1000" href="https://wa.me/880170866932" target="_blank">Whats App</a>
                </p>
                <button className="text-[#f8f9fa] border-[3px] px-[15px] py-[10px] text-[20px] font-semibold border-[#e4aa48] mt-[30px] hover:bg-[#e4aa48] ">Contact me</button>
              </div>

              <div>
              <img className="h-[400px] w-[400px] rounded-[30%] mt-[20px] md:mt-0 lg:mt-0" src="https://i.ibb.co/LC9PKY6/Whats-App-Image-2024-01-18-at-12-47-21-AM.png" alt="" />
              </div>

              <div className="md:w-[50%] lg:w-[20%] mt-[30px] md:mt-0 lg:mt-0">
                <h1 className="text-[#e4aa48] text-[25px] font-semibold">Introduction</h1>

                <h1 className="text-[#f8f9fa] text-[35px] font-semibold">Full Stack Web Developer, <br /> Web Designer</h1>

                <p className="text-[#e4aa48] text-[18px]">Hi! My name is Zisan islam anik.I study in BSc.HONS in computer science and Technology in the national university.This is my portfolio.I am a web developer and i am very passionate about my work.My hobby is playing different type of games and sports and seeing different type of movies.</p>
                <a className="text-[20px] text-[#f8f9fa] font-semibold mt-[30px]" href="">Learn More</a>
                <p className="border-b-4 border-b-[#e4aa48] w-[40%]"></p>
              </div>

            </div>


        </div>
    );
};

export default Banner;