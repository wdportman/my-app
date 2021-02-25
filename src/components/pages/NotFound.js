import React from 'react';
import {Link} from "react-router-dom";

export default function NotFound(props) {

  return (
    <div>
      <p>Not Found!</p>
      <Link to="/">Home</Link>
    </div>
  );
}