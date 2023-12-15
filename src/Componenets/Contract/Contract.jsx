import { MdOutlineContactMail } from "react-icons/md";
import { GrMapLocation } from "react-icons/gr";
const Contract = () => {
    return (
        <div>
            <h1 className=" mt-[30px] text-[35px] text-center text-blue-400 font-bold underline">Contact with Me</h1>


            <div className="flex flex-col md:flex-row lg:flex-row mt-[40px] mb-[40px] gap-[40px] md: lg:ml-[350px]">
            <div className="card w-[300px] md:w-[250px]  lg:w-[300px] bg-lime-300  shadow-xl">
  <figure className="px-10 pt-10">

    <MdOutlineContactMail className="rounded-xl text-[85px]"></MdOutlineContactMail>
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="text-[20px]"><span className="font-bold">Phone Number: </span>0179....32</h2>
    <h2 className="text-[20px]"><span className="font-bold">Email: </span>mdzisanislam69@gmail.com</h2>
   
  </div>
</div>

<div className="card w-[300px]  md:w-[250px] lg:w-[300px] bg-lime-300 shadow-xl">
  <figure className="px-10 pt-10">

    <GrMapLocation className="rounded-xl text-[85px]"></GrMapLocation>
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="text-[20px]"><span className="font-bold">Address: </span>136/F Bochila,<br />Mohammad Pur</h2>
    
   
  </div>
</div>
<div className="card w-[300px] md:w-[250px] lg:w-[300px] bg-lime-300 shadow-xl">
  <figure className="px-10 pt-10">

    <div>
    <h1 className="text-[30px] font-bold">Contact By Email</h1>
    <input type="text" placeholder="Enter your name" className="input input-bordered w-full max-w-xs mb-[10px]" />
    <input type="text" placeholder="Enter your email" className="input input-bordered w-full max-w-xs mb-[10px]" />
    <textarea className="textarea textarea-bordered" placeholder="Message"></textarea>
    <div><button className="btn bg-violet-700 font-bold">Send</button></div>
    </div>
    
  </figure>
  <div className="card-body items-center text-center">
    
    
   
  </div>
</div>
            </div>
        </div>
    );
};

export default Contract;