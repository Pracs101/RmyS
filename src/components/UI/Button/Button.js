import React from 'react';

import classes from './Button.module.css';

const button = (props) => {
  return (
    <div className={classes.Button}>
      <button name={props.name}>{props.children}</button>
    </div>
  );
}
export default button;