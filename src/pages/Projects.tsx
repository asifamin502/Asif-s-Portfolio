
import productingimage from '../images/productlisting.png'
import todoimage from '../images/todoss.png'
import './project.css';
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import { Helmet } from 'react-helmet-async';


const Projects = () => {
  return (
    <div className='projects'>
      <Helmet>
        <title>Asif's Projects</title>
      </Helmet>
<div className='1'>
  <h2>Product Listing App</h2>
  <img className='projectimage' src={productingimage}/>
  
  <p>A Product Listing App with product Listing using API, cart, search and responsive Design</p>
<div className='projectbuttons'>

<a href='https://cartify-product-app.netlify.app/' target='_blank'><FaExternalLinkAlt />Live Demo</a>
<a href='https://github.com/asifamin502/Product-listing-app' target='_blank'><FaCode />Source Code</a>
</div>
</div>
<div className='2'>
   <h2>Todo App</h2>
  <img className='projectimage' src={todoimage}/>
 
<p>A simple Todo App. User Can Add , delete , and change todos status Using Local Storage</p>

<div className='projectbuttons'>

<a href='https://todo-app-localstore.netlify.app/' target='_blank'><FaExternalLinkAlt />Live Demo</a>
<a href='https://github.com/asifamin502/Todo-app' target='_blank'><FaCode />Source Code</a>
</div>
    </div>
    </div>
  )
}

export default Projects