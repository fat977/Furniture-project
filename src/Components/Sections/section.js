import React , {useEffect,useState} from 'react'
import axios from 'axios'
import './section.css'
const Section = () => {
   const [images , setImages] = useState ([])
   useEffect ( () => {
       axios.get('js/data.json').then(res => {setImages( res.data.Chairs)});

   }, [])
   const ChairImages = images.map((item)=>{
       return(
         <div className ="col-6 col-sm-6 col-xl-3 col-xs-6" key ={item.id}>
            <img src ={item.image} alt ="" width ="100%"/>
            <p className="text-center">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
               
            </p>

      </div>         
       )
   })
   const [imagesRoom , setImagesRoom] = useState ([])
   useEffect ( () => {
       axios.get('js/data.json').then(res => {setImagesRoom( res.data.Rooms)});

   }, [])
   const RoomImages = imagesRoom.map((item)=>{
      return(
        <div className ="col-6 col-sm-6 col-xl-3" key ={item.id}>
           <img src ={item.image} alt ="" width ="100%"/>
           <p className="text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              
           </p>

     </div>         
      )
  })
    return (
        <div className ="container mt-5">
            <h3 id ="chair">Chairs</h3>
            <div className ="row mt-5">
               {ChairImages}
                
            </div>
            <div className ="text-center mt-5">
               <button type="button" className ="btn text-white">View More</button>
            </div>

            <h3 className="mt-5" id="room">Rooms</h3>
            <div className ="row mt-5">
                {RoomImages}
            </div>
            <div className ="text-center mt-5">
               <button type="button" className ="btn text-white">View More</button>
            </div>
            
        </div>
        
    )
}

export default Section
