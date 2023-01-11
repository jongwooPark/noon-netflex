import React from 'react'

const Banner = (props) => {
  return (
    <div  className='Banner' style={{backgroundImage: "url(" + `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${props.movie.backdrop_path}` + ")",
    
    }} >

       <div className='banner-info'>
        <h1>{props.movie.title}</h1>
        <p>{props.movie.overview}</p>
       </div>
    </div>
  )
}

export default Banner
