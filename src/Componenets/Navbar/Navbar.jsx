import { FiTwitter } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { BsSkype } from "react-icons/bs";

const Navbar = () => {
     return (
          <div className="w-[80%] container mx-auto">
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
          <li className=" text-[#e4aa48] font-bold text-[20px]"><a>Home</a></li>
          <li className=" text-[#e4aa48] font-bold text-[20px]"><a>My Information</a></li>
          <li className=" text-[#e4aa48] font-bold text-[20px]"><a>|</a></li>
          <li className="text-[#e4aa48] text-[25px]"><a href=""><FiTwitter></FiTwitter></a></li>
          <li className="text-[#e4aa48] text-[25px]"><a href=""><FaFacebookF></FaFacebookF></a></li>
          <li className="text-[#e4aa48] text-[25px]"><a href=""><BsSkype></BsSkype></a></li>
          
        </ul>
      </div>
    </div>  
  </div> 
  <div className="drawer-side ">
    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 h-[70%] bg-[#6c757d]">
      {/* Sidebar content here */}
      <li className=" text-[#e4aa48] font-bold text-[20px]"><a>Home</a></li>
      <li className=" text-[#e4aa48] font-bold text-[20px]"><a>My Information</a></li>
      <p className="border-b-4 border-b-[#e4aa48] w-[60%]"></p>
      <li className=" flex-row text-[#e4aa48] font-bold text-[20px]">
        
          <a className="text-[25px]" href=""><FiTwitter></FiTwitter></a>
      <a className="text-[25px]" href=""><FaFacebookF></FaFacebookF></a>
      <a className="text-[25px]" href=""><BsSkype></BsSkype></a>
      
      </li>
      
    </ul>
  </div>
</div>
          </div>
     );
};

export default Navbar;