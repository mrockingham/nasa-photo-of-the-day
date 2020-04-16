import React from 'react'

const FavPhotos = props =>{
console.log('photo-props',props)
    return(
        <div className = 'Fav-Photos'>
            <h2>{props.photo.title}</h2>
            <div className = 'img-photo'>
                <img src={props.photo.hdurl} alt='First'></img>
            </div>
            <p>{props.photo.date}</p>
        </div>
    )
    
}

export default FavPhotos