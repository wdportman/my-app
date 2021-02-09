import React from 'react';
import {Link} from "react-router-dom";

export default function NotFound(props) {

  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Not Found!</p>
      <Link to="/">Home</Link>
    </div>
  );
}