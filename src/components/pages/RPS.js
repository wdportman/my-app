import Button from '../Button';
import React from 'react';
import {Link} from 'react-router-dom';
import Rock from '../../docs/Rock.jpg'
import Paper from '../../docs/Paper.jpg'
import Scissors from '../../docs/Scissors.jpg'

export default function RPS(props) {

  return (
    <div>
      <h3>Rock Paper Scissors</h3>
      <p>Pick an option</p>
      <div className='rps-images'>
        <img className='rps-image' src={Rock} alt="Rock" />
        <img className='rps-image' src={Paper} alt="Paper" />
        <img className='rps-image' src={Scissors} alt="Scissors" />
      </div>
      <Link to="/">Home</Link>
    </div>
  );
}