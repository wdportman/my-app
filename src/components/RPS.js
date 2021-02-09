import Button from './Button';
import React from 'react';
import {Link} from "react-router-dom";

export default function RPS(props) {

  return (
    <div>
      <p>Let's play Rock Paper Scissors</p>
      <Link to="/">Home</Link>
    </div>
  );
}