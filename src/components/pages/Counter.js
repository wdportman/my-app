import Button from '../Button';
import React, { useState } from 'react';
import {Link} from "react-router-dom";

export default function Counter(props) {

  const [count, setCount] = useState(0);

  return (
    <div>
      <h3>The Mighty Counter</h3>
      <p>You clicked {count} times</p>
      <Button onClick={() => setCount(count + 1)}>
        Click me
    </Button>
    <br></br>
    <Link to="/">Home</Link>
    </div>
  );
}