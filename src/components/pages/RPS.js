import Button from '../Button';
import React from 'react';
import {Link} from "react-router-dom";

export default function RPS(props) {

  return (
    <div>
      <h3>Rock Paper Scissors</h3>
      <p>Pick an option</p>
      <Link to="/">Home</Link>
    </div>
  );
}