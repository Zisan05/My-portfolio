import { Outlet } from "react-router-dom";



const Root = () => {
    return (
        <div className="bg-[#343a40]">
            <Outlet></Outlet>
            
        </div>
    );
};

export default Root;