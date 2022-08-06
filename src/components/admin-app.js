import React, { Component } from 'react'
import axios from 'axios'
import AdminMovie from './admin-movie-item'
import Carousel from 'carousel-react-rcdev'

export default class AdminApp extends Component {
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
      return <AdminMovie key={movie.id} movieData={movie} />
    })
  }

  render() {
    return (
      <div className="admin-app">
        <div className="admin-app-heading">
          <h1>Where Stoners Watch T.V.</h1>
        </div>
        { window.innerWidth > 850 ?
        <Carousel max_width={1050} className="admin-carrousel-render-movie">
        <div className="admin-render-movie">{this.renderMovies()}</div>
        </Carousel>
        : <div className='admin-render-listed-movie'>{this.renderMovies()}</div>}
      </div>
    )
  }
}
