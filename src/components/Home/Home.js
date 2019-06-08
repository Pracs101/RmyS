import React, { Component } from 'react';

import classes from './Home.module.css';
import MoviePoster from './MoviePoster/MoviePoster';

class Home extends Component {

    render() {
        let movies = null;
        if(this.props.movies.length > 0) {
            movies = this.props.movies.map((movie, i) => {
                return <MoviePoster 
                    imageURL={movie.image} 
                    title={movie.movieName} 
                    key={i}
                    onClick={() => this.props.onClickMovie(i)}
                    />
            });
        }
        return(
            <div className={classes.mainDiv}>
                <div className={classes.titlecolor}>
                    <div className={classes.title}>
                        ReserveMySeat
                    </div>
                </div> 
                <div className={classes.divider} />
                <div className={classes.Conatainer} >
                 {movies}
                </div>
                
            </div>
        );
    }
}

export default Home;