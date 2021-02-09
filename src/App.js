import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';
import {useState} from 'react';

function App() {

  const [count, setCount] = useState(0);

  return (
    <Counter/>
  );
}

export default App;