import React from 'react';
import {Link} from "react-router-dom";

export default function Home(props) {

  return (
    <div>
      <p>Welcome!</p>
      <Link to="/counter">Counter</Link>
      <br></br>
      <Link to="/rps">Rock Paper Scissors</Link>
    </div>
  );
}