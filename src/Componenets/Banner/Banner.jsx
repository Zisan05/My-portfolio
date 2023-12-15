

const Banner = () => {
    return (
        <div className="bg-blue-400 md:h-[800px] lg:h-[600px]">
            <div  className=" md:ml-[100px] lg:ml-[250px] flex flex-col-reverse md:flex-row lg:flex-row items-center md:gap-[50px] lg:gap-[150px]">
              <div>
              <h1 className="text-[30px] text-yellow-400 font-bold ml-[70px] md:ml-0 lg:ml-0">Hello, I am<br />Zisan Islam <br /> I am a web developer <br /> And you just seeing my portfolio.</h1>
              <p className="text-[20px] text-purple-500 ml-[20px] md:ml-0 lg:ml-0">Here you can see all my projects, <br /> My dedication for my work, <br /> All the skill i have, <br /> My contact information, <br /> My experiences, <br /> My education information</p>
              <div className="flex flex-col md:flex-row lg:flex-row items-center mt-[30px] gap-[20px]">
              <button className="btn text-white bg-purple-400">About me</button>
              <a href="../../../public/ZisanDoc - Copy.pdf" download><button className="btn bg-amber-500 text-white font-bold">Download CV</button></a>
              <button className="btn bg-orange-600 text-white font-bold">contact</button>
              </div>
              </div>
              <img className="h-[300px] w-[300px] rounded-[30%]" src="https://i.ibb.co/xm5yFhb/Whats-App-Image-2023-12-13-at-5-51-33-PM.jpg" alt="" />
            </div>


        </div>
    );
};

export default Banner;