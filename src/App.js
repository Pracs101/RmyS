import React, { Component } from 'react';

import firebase from './firebase';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import Home from './components/Home/Home';
import Movie from './components/Movie/Movie';
import Payment from './components/Payment/Payment';

class App extends Component {
  state = {
    movies: [],
    cuurentMovie: null
  }

  componentDidMount() {
    const movieRef = firebase.database().ref('movies');
    movieRef.on('value', (snapshpt) => {
      let movies = snapshpt.val();
      let newMoviesState = [];
      for (let movie in movies) {
        newMoviesState.push(movies[movie]);
      }
      this.setState({ movies: newMoviesState });
    });
  }
  onSeatS = () => {
    const movieRef = firebase.database().ref('movies');
    movieRef.on('value', (snapshpt) => {
      let movies = snapshpt.val();
      let newMoviesState = [];
      for (let movie in movies) {
        newMoviesState.push(movies[movie]);
      }
      this.setState({ movies: newMoviesState });
    });
  }

  onClickMovie = (movie) => {
    this.setState({ cuurentMovie: this.state.movies[movie] });
    this.props.history.replace('/' + this.state.movies[movie].movieName);
  }

  render() {
    let routes = (
		  <Switch>
        <Route path="/" exact component={() => <Home 
          movies={this.state.movies} 
          onClickMovie={this.onClickMovie}
          />} />
          <Route path="/payment" component={() => 
          <Payment />
        } />
        <Route path="/" component={() => 
          <Movie movie={this.state.cuurentMovie}
          movies={this.state.movies}
          onSeatS={this.onSeatS} />
        } />
        
        <Redirect to="/" />
		  </Switch>
	  );
    return (
      <div className="App">
        {routes}
      </div>
    );
  }
}

export default withRouter(App);
