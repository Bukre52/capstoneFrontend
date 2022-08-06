import axios from 'axios'
import React from 'react'

export default function Movie(props) {
  const deleteMovie = () => {
    axios
      .delete(`https://setv-backend.herokuapp.com//movie/${props.movieData.id}`,{
        headers: { "Access-Control-Allow-Origin": "*" },
      }
)
      .then((response) => console.log('success', response))
  }

  return (
    <div className="movie-item">
      <img className="movie-img" src={props.movieData.img_url} />
      <h1 className="movie-info">{props.movieData.name}</h1>
      <button onClick={deleteMovie}>Delete</button>
      {/* <p  className="movie-info">{props.movieData.description}</p> */}
      {/* <h5  className="movie-info">{props.movieData.price}</h5> */}
    </div>
  )
}
