import React, { Component } from 'react';

import classes from './MovieDetail.module.css';
import Button from '../../Button/Button';

const movieDetail = (props) => {
    let temp = null;
    if(props.flag) {
        temp = (
            <div className={classes.button}>
                        <Button onClick={props.onClick} >Reserve Seat</Button>
                    </div>
        );
    }
    return(
        <div className={classes.root}>
            <div className={classes.image}>
                <img src={props.imageURL} alt="Image"></img>
                <div className={classes.detail}>
                    <div className={classes.movieName}>{props.movieName}</div>
                    <div className={classes.divider} />
                    <div className={classes.tagContent}>
                        <div className={classes.titles}>
                            <div className={classes.tag}>Duration:</div>
                            <div className={classes.tag}>Language:</div>
                            <div className={classes.tag}>Genre:</div>
                        </div>
                        <div className={classes.content}>
                            <div className={classes.tag1}>{props.duration}</div>
                            <div className={classes.tag1}>{props.language}</div>
                            <div className={classes.tag1}>{props.genre}</div>
                        </div>
                    </div>
                    <div className={classes.synop}>
                        <div className={classes.heading}>
                            Synopsis
                        </div>
                        <div className={classes.synopContent}>
                            {props.synopsis}
                        </div>
                    </div>
                    {temp}
                </div>
            </div>
        </div>
    );
}

export default movieDetail;