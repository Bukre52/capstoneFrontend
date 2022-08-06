import React, { useState } from 'react'
import axios from 'axios'

export default function addMovie() {
  const [img_url, setImg] = useState('img_url')
  const [name, setName] = useState('name')
  const [price, setPrice] = useState('price')
  const [description, setDescription] = useState('description')

  const clearState = () => {
    
    setImg("")
    setName("")
    setPrice("")
    setDescription("")
    console.log("clearing state", img_url, name, price, description)
  };
  

  const postMovie = (event) => {
    axios
      .post(
        "https://setv-backend.herokuapp.com/add-movie",
        {
          name: name,
          price: price,
          description: description,
          img_url: img_url,
        },
        {
          headers: { "Access-Control-Allow-Origin": "*" },
        }
      )
      .then((response) => {debugger; console.log(response)})
      .catch((error) => {debugger; console.log(error)});
    clearState();
    event.preventDefault();
  };




  return (
    <div className="add-movie">
      <h1 className="add-movie-title">Enter Movie</h1>
      <form className="add-movie-form" onSubmit={postMovie}>
        <input
          className="add-movie-form-input"
          onChange={(event) => setImg(event.target.value)}
          type="text"
          placeholder="img_url"
        />
        <input
          className="add-movie-form-input"
          onChange={(event) => setName(event.target.value)}
          type="text"
          placeholder="name"
        />
        <input
          className="add-movie-form-input"
          onChange={(event) => setPrice(event.target.value)}
          type="number"
          placeholder="price"
        />
        <textarea
          className="add-movie-form-textarea"
          onChange={(event) => setDescription(event.target.value)}
          type="text"
          placeholder="description"
        />
        <button className="add-movie-form-btn">add movie!</button>
      </form>
    </div>
  )
}
