import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './home.css'
import img1 from './96a437f8d6e1a69f9be8a4236bd7d24d.jpg'
import img2 from './c262b71f8a6ca56b6c8e539d13fbfee5.jpg'
const Home = () => {
   AOS.init();
    return (
        <div className ="container mt-5">
           <div className ="row align-items-center">
              <div className ="col-lg-6" data-aos = "fade-right">
                 <img src ={img1} alt="" width="100%"/>
              </div>
              <div className ="col-lg-6" data-aos = "fade-left">
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt ac tellus 
                    vitae ullamcorper. Vivamus congue vel dolor at lobortis. Nunc laoreet libero sed sem
                    interdum mattis. Vestibulum non urna nisl. Donec sollicitudin iaculis aliquam. 
                    Etiam blandit felis condimentum consequat tincidunt. Curabitur et libero ultrices, 
                    tristique nibh ut, tincidunt odio.
                  </p>
              </div>
              <hr className ="text-dark"/>
              <div className ="col-lg-6 mt-5" data-aos = "fade-right">
                 <img src ={img2} alt="" width="100%"/>
              </div>
              <div className ="col-lg-6" data-aos = "fade-left">
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt ac tellus 
                    vitae ullamcorper. Vivamus congue vel dolor at lobortis. Nunc laoreet libero sed sem
                    interdum mattis. Vestibulum non urna nisl. Donec sollicitudin iaculis aliquam. 
                    Etiam blandit felis condimentum consequat tincidunt. Curabitur et libero ultrices, 
                    tristique nibh ut, tincidunt odio.
                  </p>
              </div>

           </div>

           <div className ="text-center mt-5">
              <button type="button" className ="btn text-white">View More</button>
           </div>
            
        </div>
    )
}

export default Home
