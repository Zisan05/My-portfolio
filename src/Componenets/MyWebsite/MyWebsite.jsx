import { Link } from "react-router-dom";


const MyWebsite = () => {
    return (
        <div className="mt-[30px]">
            <h1 className=" mt-[30px] text-[35px] text-center text-yellow-600 font-bold underline ">My Projects</h1>


            <div>
            <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full h-[700px] mt-[40px] ">

    <Link target="_blank" to ={"https://divergent-monkey.surge.sh/"}><img src="https://i.ibb.co/Ky92spF/Screenshot-64.png" className="w-[1700px] h-[700px]" /></Link>
    
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full h-[700px] mt-[40px] ">
    <Link target="_blank" to = {'https://technology-electronics-21a3f.web.app/'}><img src="https://i.ibb.co/THtGVx1/Screenshot-65.png" className="w-[1700px] h-[700px]" /></Link>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full h-[700px] mt-[40px] ">
    <Link target="_blank" to ={'https://zisan05.github.io/fruit-burst/'}><img src="https://i.ibb.co/7QMcK2S/Screenshot-66.png" className="w-[1700px] h-[700px]" /></Link>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full h-[700px] mt-[40px] ">
    <Link target="_blank" to ={'https://final-effort-7979a.web.app/'}>
    <img src="https://i.ibb.co/mCGdzGH/Screenshot-67.png" className="w-[1700px] h-[700px]" /></Link>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
            </div>
        </div>
    );
};

export default MyWebsite;