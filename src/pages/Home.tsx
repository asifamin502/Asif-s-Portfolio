/* eslint-disable */
import { useContext } from "react";
import './home.css';
import mypic from '../images/mypic.jpg'
import { FaCode } from "react-icons/fa";
import { LuBrain } from "react-icons/lu";
import { FaBriefcase } from "react-icons/fa";
import { GrLocationPin } from "react-icons/gr";
import { SiMinutemailer } from "react-icons/si";
import { ThemeContext } from "../assets/Context.tsx";

import facebookicon from '../images/facebook.png';
import githubicon from '../images/github.png';
import linkedinicon from '../images/linkedin.png'
const Home = () => {
  const {theme}= useContext(ThemeContext)
  return <div>
    <div className="home">
    <div className="image">
      <img src={mypic} alt="My Picture" width="100%" className="my-pic" />
    </div>
    <div className="intro">
      <div>
      <h1>Hi, I'm<span className={theme? "spanlight" : "spandark"}> Asif-Al-Amin</span></h1>
      <h3>I'm a frontend Developer</h3>
      </div>
      <div>
      <p><FaCode className="icon1" /> Building Responsive Web apps using React</p>
      </div>
      <div>
        <p><LuBrain className="icon1" /> Skilled in HTML, CSS, Javascript, React</p>
      </div>
      <div>
        <p><FaBriefcase className="icon1" /> Open to Internship / Junior Frontend Roles</p>
      </div>
      <div>
       <p><GrLocationPin className="icon1" /> Bogura, Bangladesh</p> 
      </div>
      <div>
       <SiMinutemailer className="icon1"/>
        <a href="mailto:asifamin502@gmail.com" target="_blank"> Send Me Email</a> Or
       <a href="tel:+8801608454597" target="_blank"> Call Me</a>
      </div>
      <div className="contract-links">
       <a href="https://www.facebook.com/aminasif83/" target="_blank"><img className="pngicon" src={facebookicon}/></a>
      <a href="https://github.com/asifamin502" target="_blank"><img className="pngicon" src={githubicon}/></a>
      <a href="https://www.linkedin.com/in/asifamin502/" target="_blank"><img className="pngicon" src={linkedinicon}/></a>
      </div>
    </div>
    </div>
  </div>;
};

export default Home;
