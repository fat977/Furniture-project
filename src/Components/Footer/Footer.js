import React from 'react'
import './Footer.css'
const Footer = () => {
    return (
        <div className ="container my-5">
           <div className ="text-center">
               <i class="fas fa-star mb-3 star"></i>
               <span className ="text-muted ml-2">Follow us</span>
           </div>
           <div className ="text-center">
              <i className="fa fa-facebook mx-2 social"></i>
              <i className="fa fa-twitter mx-2 social"></i>
              <i class="fa fa-instagram mx-2 social"></i>
              <i class="fa fa-google-plus-g mx-2 social"></i>
           </div>
            
        </div>
    )
}

export default Footer
