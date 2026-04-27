/* eslint-disable */

import { PiMonitorDuotone } from "react-icons/pi";
import { MdCloudDone } from "react-icons/md";
import { TbRouteAltLeft } from "react-icons/tb";
import { FaCode } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiReactjsLine } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { SiNetlify } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { GiArtificialIntelligence } from "react-icons/gi";
import { BsTypescript } from "react-icons/bs";


import './aboutme.css'
import { Helmet } from 'react-helmet-async';


const Aboutme = () => {
  
  return (


    <div className='aboutme'>
      <Helmet>
        <title>About Me</title>
      </Helmet>
      <h2>I am a Computer Science Engineering graduate with a strong interest in Web Development.   
I enjoy building real world projects and learning how things work behind the scenes.   
Currently I am focused on improving my React skills and moving towards full-stack development.</h2>
<h3>What I Can Do:</h3>
<div className='part1'>
  



 <div>
  <h4><PiMonitorDuotone className='icons1' /> Responsive UI</h4>
  <p>Build Responsive and interactive UI using react</p>
  </div>
  <div>
  <h4><MdCloudDone className='icons1' /> Api Intregration</h4>
  <p>Work with API and display dynamic data</p>
  </div>
  <div>
  <h4><TbRouteAltLeft className='icons1' />React Router</h4>
  <p>Create Multiple page using React Router</p>
  </div>
  <div>
  <h4><FaCode className='icons1' />Clean Code</h4>
 <p>Write simple and clean Code</p>
 </div>
</div>

      <div className='part2'>
<h3>Tech Stack</h3>
<div>
 
<h4 className='frontendhead'>Front-End:</h4>

<div className='frontendskill'>
<div>
<h4><FaHtml5 className='icons2'/> HTML</h4>
</div>
<div>
<h4><FaCss3Alt className='icons2'/> CSS3</h4>
</div>
<div>
<h4><IoLogoJavascript className='icons2'/> Javascript(ES6+)</h4>
</div>
<div>
<h4><RiReactjsLine className='icons2'/> React.js</h4>
</div>
<div>
  <h4><BsTypescript className='icons2'/>React-Typescript</h4>
</div>
</div>
</div>
<div>
<h4 className='tools'>Tools:</h4>
<div className='alltools'>
<h4><FaGitAlt className='icons2'/> Git</h4>
<h4><FaGithub className='icons2'/> GitHub</h4>
<h4><SiNetlify className='icons2'/> Netlify</h4>
<h4><VscVscode className='icons2'/> VS Code</h4>
<h4><GiArtificialIntelligence className='icons2'/> AI(ChatGpt, Copilot, Gemini)</h4>

</div>
</div>
      </div>
    </div>
  )
}

export default Aboutme