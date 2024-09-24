import { FiTwitter } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { BsSkype } from "react-icons/bs";
import { RiMessengerFill } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io";
import { useRef } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

  const sectionRef = useRef(null);


  const scrollToSection = () => {
    if (sectionRef.current) {
    const obj =  sectionRef.current.scrollIntoView({ behavior: 'smooth' });

      console.log(obj);
    }
  };

     return (
          <div id="Nav"  className="w-[80%] container mx-auto">
               <div className="drawer">
  <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
  <div className="drawer-content flex flex-col">
    {/* Navbar */}
    <div className="w-full navbar dark">
      <div className="flex-none lg:hidden text-white">
        <label  htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div> 
      <div className="flex-1 text-[#e4aa48] font-bold text-[35px] ">ZI <span className="text-[45px] text-white">.</span></div>
      <div className="flex-none hidden lg:block">
        <ul className="menu menu-horizontal">
          {/* Navbar menu content here */}
          <li className=" text-[#e4aa48] font-bold text-[20px] transition-text hover:text-[23px] duration-1000"><a>Home</a></li>
      <li className=" text-[#e4aa48] font-bold text-[20px] transition-text hover:text-[23px] duration-1000" ><a href="#Skill">My Skill</a></li>
          <li className=" text-[#e4aa48] font-bold text-[20px] transition-text hover:text-[23px] duration-1000"><a href="#Projects">My Projects</a></li>
          <li className=" text-[#e4aa48] font-bold text-[20px] transition-text hover:text-[23px] duration-1000"><a href="#Experience">My Work Experience</a></li>
          <li className=" text-[#e4aa48] font-bold text-[20px] transition-text hover:text-[23px] duration-1000"><a href="#Contract">Contract</a></li>
      
          <li className=" text-[#e4aa48] font-bold text-[20px]"><a>|</a></li>
          <li className="text-[#e4aa48] text-[25px] transition-text hover:text-[30px] duration-1000"><a href="https://m.me/100092237885166" target="_blank" ><RiMessengerFill></RiMessengerFill></a></li>
          <li className="text-[#e4aa48] text-[25px] transition-text hover:text-[30px] duration-1000"><a href="https://www.facebook.com/profile.php?id=100092237885166" target="_blank"><FaFacebookF></FaFacebookF></a></li>
          <li className="text-[#e4aa48] text-[25px] transition-text hover:text-[30px] duration-1000"><a href="https://wa.me/8801790866932" target="_blank"><IoLogoWhatsapp ></IoLogoWhatsapp ></a></li>
          
        </ul>
      </div>
    </div>  
  </div> 
  <div className="drawer-side ">
    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-[300px] h-[70%] bg-[#6c757d]">
      {/* Sidebar content here */}
      <li className=" text-[#e4aa48] font-bold text-[25px] dark w-[100px]"><a>Home</a></li>
    <li className=" text-[#e4aa48] font-bold text-[25px] dark w-[140px] mt-[20px]"><a href="#Skill">My Skill</a></li>
    <li className=" text-[#e4aa48] font-bold text-[25px] dark w-[180px] mt-[20px]"><a href="#Projects">My Projects</a></li>
    <li className=" text-[#e4aa48] font-bold text-[25px] dark w-[240px] mt-[20px]"><a href="#Experience">Work Experience</a></li>
    <li className=" text-[#e4aa48] font-bold text-[25px] dark w-[140px] mt-[20px]"><a href="#Contract">Contract</a></li>
   
    
    </ul>
  </div>
</div>
          </div>
     );
};

export default Navbar;