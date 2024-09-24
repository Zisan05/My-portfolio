import { Link } from "react-router-dom";
import { IoIosArrowDropupCircle } from "react-icons/io";

const MyWebsite = () => {
    return (
        <div id="Projects" className="mt-[30px] ">

<a href="#Nav"><IoIosArrowDropupCircle className="size-[50px] relative  top-[900px] lg:top-[850px] left-[320px] md:left-[650px] lg:left-[1400px] text-white"></IoIosArrowDropupCircle></a>
           
            <div  data-aos="flip-left"  data-aos-duration="2000">
            <h1 className=" mt-[30px] text-[35px] text-center text-[#e4aa48] font-bold underline ">My Projects</h1>
            </div>

            <div  data-aos="flip-up" data-aos-duration="2500" className="carousel w-[80%] md:w-[80%] lg:w-[75%] ml-[30px] md:ml-[80px] lg:ml-[200px]">
  <div id="slide1" className="carousel-item relative w-full h-[700px] mt-[40px] ">

    <Link target="_blank" to ={"https://divergent-monkey.surge.sh/"}><img src="https://i.ibb.co/Ky92spF/Screenshot-64.png" className=" h-[700px]" /></Link>
    
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full h-[700px] mt-[40px] ">
    <Link target="_blank" to = {'https://technology-electronics-21a3f.web.app/'}><img src="https://i.ibb.co/THtGVx1/Screenshot-65.png" className=" h-[700px]" /></Link>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full h-[700px] mt-[40px] ">
    <Link target="_blank" to ={'https://zisan05.github.io/fruit-burst/'}><img src="https://i.ibb.co/7QMcK2S/Screenshot-66.png" className=" h-[700px]" /></Link>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full h-[700px] mt-[40px] ">
    <Link target="_blank" to ={'https://final-effort-7979a.web.app/'}>
    <img src="https://i.ibb.co/mCGdzGH/Screenshot-67.png" className=" h-[700px]" /></Link>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default MyWebsite;