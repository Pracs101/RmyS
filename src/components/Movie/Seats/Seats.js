import React, { Component } from 'react';

import module from './Seats.module.css';

class Seats extends Component {
  // state = {
  //   selectedSeats: []
  // }
  // onSeatClick = (i, seats) => {
  //   if(this.props.seats[i].status === 0) {
  //     this.setState(prevState => {
  //       let newArr = prevState.selectedSeats;
  //       newArr.push(i)
  //       return {
  //         selectedSeats: newArr
  //       }
  //     })
  //   }
    
  // }
  render() {
    console.log(this.props)
    let ren = null;
    if(this.props.seats) {
      let ses = this.props.seats.map((s, i) => {
        let classes = [module.Seat];
        if(s.status == 1) {
          classes = [module.Seat, module.Booking];
        } else if(s.status == 2) {
          classes = [module.Seat, module.Booked];
        }
        this.props.selectedSeats.forEach(k => {
          if(k == i) {
            classes = [module.Seat, module.Selected]
          }
        })
        return (
          <div className={classes.join(' ')} key={i} onClick={() => this.props.onSeatClick(i, this.props.seats)}  >
            {i}
          </div>
        );
      });
      ren = (
        <div className={module.Container} >
          {ses}
          <div className={module.Screen} >
            Screen This Way!
          </div>
        </div>
      );
    }
    return ren;
  }
}

export default Seats;