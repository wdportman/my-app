import Button from '../Button';
import React from 'react';
import {Link} from 'react-router-dom';
import Rock from '../../docs/Rock.jpg'
import Paper from '../../docs/Paper.jpg'
import Scissors from '../../docs/Scissors.jpg'

const handleClick = function(imageName) {
  console.log("Click!", imageName)
}

export default function RPS(props) {

  const {yourScore, computerScore} = props;

  return (
    <div>
      <h3>Rock Paper Scissors</h3>
      <div className='rps'>
        <div className='rps-column'>
          <p>Pick an option</p>
          <div className='rps-images'>
            <img className='rps-image' src={Rock} alt="Rock" onClick={() => handleClick("Rock")} />
            <img className='rps-image' src={Paper} alt="Paper" onClick={() => handleClick("Paper")} />
            <img className='rps-image' src={Scissors} alt="Scissors" onClick={() => handleClick("Scissors")} />
          </div>
        </div>
        <div className='rps-column'>
          <p>The computer chose...</p>

        </div>
        <div className='rps-column'>
          <p>Scoreboard:</p>
          <p><b>You:</b> {yourScore}</p>
          <p><b>Computer:</b> {computerScore}</p>
        </div>
      </div>
      <Link to="/">Home</Link>
    </div>
  );
}