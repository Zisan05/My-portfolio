import { FaFacebookSquare } from "react-icons/fa";
import { ImGithub } from "react-icons/im";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
  <nav className="grid grid-flow-col gap-4">
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <div className="grid grid-flow-col gap-4">

      <Link target="_blank" to ={'https://www.facebook.com/profile.php?id=100092237885166'}><FaFacebookSquare className="text-[45px]"></FaFacebookSquare></Link>
      <Link target="_blank" to ={"https://github.com/Zisan05"}><ImGithub className="text-[45px]"></ImGithub></Link>
    </div>
  </nav> 
  <aside>
    <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
  </aside>
</footer>
        </div>
    );
};

export default Footer;