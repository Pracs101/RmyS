import React, { Component } from 'react';

import Button from '../Button/Button';
import module from './Payment.module.css';
import MovieDetail from '../Movie/MovieDetails/MovieDetail';

class UserDetail extends Component {
    state = {
        movie: {
            movieName: 'Avengers EndGame',
            duration: '3Hrs 02Mins',
            language: 'English',
            genre: 'Action, Adventure, Fantasy',
            url: 'https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg',
            synopsis: 'The grave course of events set in motion by Thanos that wiped out half the universe and fractured the Avengers ranks compels the remaining Avengers to take one final stand in Marvel Studios` grand conclusion to twenty-two films, "Avengers: Endgame."'
        }
    }
    render() {
        return (
            <div className={module.mainDiv}>
                <div className={module.titlecolor}>
                    <div className={module.title}>
                        ReserveMySeat
                    </div>
                </div>
                <div className={module.movieDetail}>
                    <MovieDetail 
                        movieName={this.state.movie.movieName}
                        imageURL={this.state.movie.url}
                        duration={this.state.movie.duration}
                        genre={this.state.movie.genre}
                        language={this.state.movie.language}
                        synopsis={this.state.movie.synopsis}
                        flag={false} />
                </div>
                <div className={module.tagContent}>
                    <div className={module.titles}>
                        <div className={module.tag}>Number of Tickets:</div>
                        <div className={module.tag}>Payment:</div>
                    </div>
                    <div className={module.content}>
                        <div className={module.tag1}>2</div>
                        <div className={module.tag1}>450</div>
                    </div>
                </div>
                <div className={module.inputs}>
                    <input type="text" placeholder="Enter Name" />
                    <input type="email" placeholder="Enter Email" />
                    <input type="number" placeholder="Enter Phone Number" />
                    <div className={module.button}>
                        <Button>Submit</Button>
                    </div>
                </div>
            </div>
        ); 
    }
}

export default UserDetail;