

const EducationInfo = () => {
    return (
        <div className="mt-[80px]">
            <h1 className=" mt-[30px] text-[35px] text-center text-purple-400 font-bold underline ">My Education information</h1>
          

           <div className="flex flex-col md:flex-row lg:flex-row gap-[60px] lg:ml-[200px]">
           <div className="border-orange-400 border-2 w-[310px] md:w-[500px] lg:w-[600px] mt-[30px] bg-orange-400 p-[20px]">
           <h1 className="text-[25px] font-bold">BSc.(HONS) in Computer Science and Engineering</h1>
           <h1 className="text-[23px] font-semibold">Institute of Science and Technology, Bangladesh</h1> 
           <p className="text-[20px] font-semibold"><span className="font-bold">Current Status:</span> 5th Semester,Third Year</p>
          <p className="text-[18px]">Currently in my third year of Computer Science and Engineering studies at Institute of Science and Technology, I combine theoretical knowledge with hands-on experience, laying a robust foundation for my web development endeavors.</p>
           </div>
           <div className="border-blue-400 border-2 w-[310px] md:w-[500px] lg:w-[600px] mt-[30px] bg-blue-400 p-[20px]">
           <h1 className="text-[25px] font-bold">Higher Secondary Certificate (HSC)</h1>
           <h1 className="text-[23px] font-semibold">Mohammad pur Kendriya College, Bangladesh</h1> 
           <p className="text-[20px] font-semibold">Year of Completion: 2019</p>
           <p className="text-[18px]">Embarking on my educational journey, I successfully completed my Higher Secondary Certificate (HSC) in 2019, laying the groundwork for my subsequent pursuit of excellence in computer science and engineering.</p>
           </div>
           </div>

        </div>
    );
};

export default EducationInfo;