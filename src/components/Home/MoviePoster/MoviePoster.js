import React from 'react';

import classes from './MoviePoster.module.css';

const moviePoster = (props) => {
    return(
        <div className={classes.Container} onClick={props.onClick} >
            <img src={props.imageURL} alt="Image" />
            <div className={classes.title}>{props.title}</div>
        </div>
    );
}

export default moviePoster;