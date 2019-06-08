import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';

import module from './Movie.module.css';
import Seats from './Seats/Seats';
import firebase from '../../firebase';
import MovieDetail from './MovieDetails/MovieDetail';


class Movie extends Component {
  state = {
    selectedSeats: []
  }
  onSeatClick = (i, seats) => {
    if(seats[i].status === 0) {
      this.setState(prevState => {
        let newArr = prevState.selectedSeats;
        newArr.push(i)
        return {
          selectedSeats: newArr
        }
      })
    }
  }
  onProcced = () => {
    console.log(this.props)
    const db = firebase.database();
    let newSeats = this.props.movie.seats;
    this.state.selectedSeats.forEach(s => {
      newSeats[s].status = 1;
    })
    db.ref("movies/"+this.props.movie.key).update({ seats: newSeats });
  }
  render() {
    let ren = null;

    if(this.props.movie) {
      ren = (
        <div>
          <div className={module.titlecolor}>
              <div className={module.title}>
                  ReserveMySeat
              </div>
          </div> 
          <div className={module.movieDetail}>
              <MovieDetail 
                  movieName={this.props.movie.movieName}
                  imageURL={this.props.movie.image}
                  duration={this.props.movie.duration}
                  genre={this.props.movie.genre}
                  language={this.props.movie.language}
                  synopsis={this.props.movie.synopsis}
                  onClick={this.onProcced}
                  flag={true} />
          </div>
          <Seats 
            noSeats={this.props.movie.numberSeats}
            seats={this.props.movie.seats}
            selectedSeats={this.state.selectedSeats}
            onSeatClick={this.onSeatClick}
          />
        </div>
      )
    }
    return ren;
  }
}

export default withRouter(Movie);