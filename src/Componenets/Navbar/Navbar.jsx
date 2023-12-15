
import {  NavLink } from 'react-router-dom';


import { TbSunHigh } from "react-icons/tb";
import { MdDarkMode } from "react-icons/md";
import { useDarkMode } from '../Use Dark Mood/Mood';

const Navbar = () => {
     const { handleDark, mode } = useDarkMode();

     const navLists = (
          <>
               <li>
                    <NavLink
                         to="/"
                         className={({ isActive, isPending }) =>
                              isPending
                                   ? "pending"
                                   : isActive
                                   ? "text-[#ff6900] underline"
                                   : ""
                         }
                    >
                         Home
                    </NavLink>
               </li>
               <li>
                    <NavLink
                         to="/contact"
                         className={({ isActive, isPending }) =>
                              isPending
                                   ? "pending"
                                   : isActive
                                   ? "text-[#ff6900] underline"
                                   : ""
                         }
                    >
                         Contact Us
                    </NavLink>
               </li>
               <li>
                    <NavLink
                         to="/about"
                         className={({ isActive, isPending }) =>
                              isPending
                                   ? "pending"
                                   : isActive
                                   ? "text-[#ff6900] underline"
                                   : ""
                         }
                    >
                         About us
                    </NavLink>
               </li>
          </>
     );
     return (
          <div>
               
          <div>
               <div>
                    <div className=" navbar bg-base-100 bg-blue-400">
                         <div className="navbar-start">
                              <div className="dropdown">
                                   <label
                                        tabIndex={0}
                                        className="btn btn-ghost lg:hidden"
                                   >
                                        <svg
                                             xmlns="http://www.w3.org/2000/svg"
                                             className="h-5 w-5"
                                             fill="none"
                                             viewBox="0 0 24 24"
                                             stroke="currentColor"
                                        >
                                             <path
                                                  strokeLinecap="round"
                                                  strokeLinejoin="round"
                                                  strokeWidth="2"
                                                  d="M4 6h16M4 12h8m-8 6h16"
                                             />
                                        </svg>
                                   </label>
                                   <ul
                                        tabIndex={0}
                                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 "
                                   >
                                        {navLists}
                                   </ul>
                              </div>
                              <img
                                   className="rounded-full h-[50px] w-[50px]"
                                   src="https://i.ibb.co/L09NTyW/images.png"
                                   alt=""
                              />

                              <p className="btn btn-ghost text-xl md:text-2xl text-white font-extrabold italic">
                                   Zisan
                              </p>
                         </div>
                         <div className="navbar-center hidden lg:flex">
                              <ul className="menu menu-horizontal px-1 text-white">
                                   {navLists}
                              </ul>
                         </div>

                         <div className="navbar-end ">
                              <div className="mr-2">
                                   {mode === "light" ? (
                                        <button
                                             className="text-3xl text-white"
                                             onClick={handleDark}
                                        >
                                             <TbSunHigh></TbSunHigh>
                                        </button>
                                   ) : (
                                        <button
                                             onClick={handleDark}
                                             className="text-3xl"
                                        >
                                             <MdDarkMode></MdDarkMode>
                                        </button>
                                   )}
                              </div>
                              <input
                                   type="checkbox"
                                   className="toggle"
                                   onClick={handleDark}
                                   checked={mode === "light" ? false : true}
                              />
                            
                              
                              <div className="dropdown dropdown-end">
                                   
                              </div>
                         </div>
                    </div>
               </div>
          </div>
          </div>
     );
};

export default Navbar;