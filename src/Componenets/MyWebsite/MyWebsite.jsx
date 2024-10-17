import { Link } from "react-router-dom";
import { IoIosArrowDropupCircle } from "react-icons/io";

import { FaGithub } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";

import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react";

import data from '../Project.json';

import ScrollTrigger from 'react-scroll-trigger';

const MyWebsite = () => {



console.log(data);

const [project ,setProject] = useState([]);


useEffect(() => {
  const newArray = data.slice(0, 3);

setProject(newArray);
},[setProject])

console.log(project);


const handleProject = () => {

setProject(data);


}


const handleProjectSize = () => {

  const newArray = project.slice(0, 3);

  setProject(newArray);

}



// for repeat the animation 

const [visible , setVisible] = useState(false);

console.log(visible);


    return (
        <div id="Projects" className="mt-[30px] ">

{/* <a href="#Nav"><IoIosArrowDropupCircle className="size-[50px] relative  top-[900px] lg:top-[850px] left-[320px] md:left-[650px] lg:left-[1500px] text-white"></IoIosArrowDropupCircle></a> */}
           
            <div  data-aos="flip-left"  data-aos-duration="2000">
            <h1 className=" mt-[30px] text-[35px] text-center text-[#e4aa48] font-bold underline ">My Projects</h1>
            </div>


<ScrollTrigger onEnter={() => setVisible(true)} onExit={() => setVisible(false)}>

     {/* project div */}

     {
      visible ? <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[30px] mt-[50px] ml-[10px] md:ml-[10px] lg:ml-[80px]">
      {
        project.map(item => <div>
               <div className=" bg-[#e4aa48] w-[350px] md:w-[350px] lg:w-[400px]  shadow-xl">
<figure>
<img
src={item.image}
alt="Shoes" />
</figure>
<div className="card-body">
<motion.h2
initial = {{opacity : 0 , y : 30}}
animate = { {opacity : 1 , y : 0}}
transition={{duration : 1 , delay : 1}}
className="text-[30px] font-bold bg-[#4b4f52] text-center py-[10px] relative bottom-[60px] text-[#e4aa48]">{item.name} </motion.h2>
<div className="mt-[20px] flex justify-around">
<motion.a
initial = {{rotate: 360 , x : -100 ,opacity : 0 }}
animate = {{rotate : 0 , x : 0 , opacity : 1}}
transition={{duration : 1, delay : 1 }}
href={item.git_link} target="blank"><FaGithub className="text-white text-[45px]"></FaGithub></motion.a>
<motion.a
initial = {{rotate: 360 , x : 100 ,opacity : 0 }}
animate = {{rotate : 0 , x : 0 , opacity : 1}}
transition={{duration : 1, delay : 1  }}
href={item.live_link} target="blank"><FaExternalLinkAlt  className="text-white text-[45px]"></FaExternalLinkAlt ></motion.a>
</div>

</div>
</div>
        </div>)
      }


     
    </div> : <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[30px] mt-[50px] ml-[10px] md:ml-[10px] lg:ml-[80px]">
              {
                project.map(item => <div>
                       <div className=" bg-[#e4aa48] w-[350px] md:w-[350px] lg:w-[400px]  shadow-xl">
  <figure>
    <img
      src={item.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    
   <div className="mt-[20px] flex justify-around">
 
 
   </div>
 
  </div>
</div>
                </div>)
              }


             
            </div>
     }

     

</ScrollTrigger>

       


{
  project.length > 5 ? <div onClick={handleProjectSize} className="flex justify-center">
  <button className="bg-[#e4aa48] mt-[30px] text-[25px] px-[20px] py-[5px] text-white font-semibold">See Few</button> 
    </div>  : <div onClick={handleProject} className="flex justify-center">
            <button className="bg-[#e4aa48] mt-[30px] text-[25px] px-[20px] py-[5px] text-white font-semibold">See All</button> 
              </div> 
}

<div className="text-[45px] text-white flex justify-end mr-0 md:mr-0 lg:mr-[130px]">
  <IoIosArrowDropupCircle></IoIosArrowDropupCircle>
</div>
        
            

            
        </div>
    );
};

export default MyWebsite;