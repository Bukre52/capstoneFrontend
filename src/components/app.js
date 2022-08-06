import React, { Component } from 'react'
import axios from 'axios'
import Movie from './movie-item'
import Carousel from 'carousel-react-rcdev'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: [],
    }
  }

  componentDidMount() {
    axios
      .get('https://setv-backend.herokuapp.com/movies')
      .then((response) => {
        console.log(response)
        this.setState({ movies: response.data })
      })
      .catch((error) => {
        console.error(error)
      })
  }

  renderMovies() {
    return this.state.movies.map((movie) => {
      console.log(movie.img_url)
      return <Movie key={movie.id} movieData={movie} />
    })
  }

  render() {
    return (
      <div className="app">
        <div className="app-heading">
          <h1>Where Stoners Watch T.V.</h1>
        </div>
        { window.innerWidth > 1007 ?
        <Carousel max_width={1050} className="carrousel-render-movie">
        <div className="render-movie">{this.renderMovies()}</div>
        </Carousel>
        : <div className='render-listed-movie'>{this.renderMovies()}</div>}
      </div>
    )
  }
}
