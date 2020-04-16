// ice

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import FavPhotos from './FavPhotos'

const PhotoList = () => {
const [photo, setPhoto] = useState([])    
useEffect(() =>{
axios.get('https://api.nasa.gov/planetary/apod?api_key=X5TROqaB3LhYgVqrhS4FYHoPmFEazj02rbVWJz4a&date=1995-06-16')
.then(response =>{
    console.log(response)
    setPhoto(response.data)
})

.catch(error => console.log('error!', error));
},[])
return(

 <div className='photo'> 
 
    <FavPhotos photo ={photo} />
    

</div>

);
};

export default PhotoList;


{/* <div className='photo'> 
 {photo.map(photo => (
    <FavPhotos photo ={photo} /> */}