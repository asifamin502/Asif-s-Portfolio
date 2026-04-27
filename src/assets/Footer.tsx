/* eslint-disable */

import './footer.css'
const Footer = () => {
  const date= new Date();
  const year= date.getFullYear()
  return (
    <div className='footer'>
        <p>&copy; {year} Created by Asif Amin</p>
    </div>
  )
}

export default Footer