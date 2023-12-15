import Banner from "../Banner/Banner";
import Contract from "../Contract/Contract";
import EducationInfo from "../EducationInfo/EducationInfo";
import Experience from "../Experience/Experience";
import Footer from "../Footer/Footer";
import Website from "../Helmat/Website";
import MyWebsite from "../MyWebsite/MyWebsite";
import Navbar from "../Navbar/Navbar";
import Skill from "../Skill/Skill";


const Home = () => {
    return (
        <div>
            <Website title={'Home Page'}></Website>
            <Navbar></Navbar>
            <Banner></Banner>
            <Skill></Skill>
            <MyWebsite></MyWebsite>
            <Experience></Experience>
            <EducationInfo></EducationInfo>
            <Contract></Contract>
            <Footer></Footer>
        </div>
    );
};

export default Home;