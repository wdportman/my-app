import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import Rock from '../../docs/Rock.jpg';
import Paper from '../../docs/Paper.jpg';
import Scissors from '../../docs/Scissors.jpg';
import QuestionMark from '../../docs/QuestionMark.jpg';
import { useRPS } from '../../hooks/useRPS.js';

export default function RPS(props) {

  const [yourScore, setYourScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [computerChoice, setComputerChoice] = useState(QuestionMark);

  const { generateRandomChoice, compareChoices } = useRPS();

  const convertToImage = (computerChoice) => {
    if (computerChoice === 'Rock') {
      return Rock;
    };
    if (computerChoice === 'Scissors') {
      return Scissors;
    };
    if (computerChoice === 'Paper') {
      return Paper;
    };
  }

  const handleClick = (userChoice) => {
    const computerChoice = generateRandomChoice();
    const output = compareChoices(userChoice, computerChoice);
    setComputerChoice(convertToImage(computerChoice));
    if (output === true) {
      setYourScore(yourScore + 1);
    };
    if (output === false) {
      setComputerScore(computerScore + 1);
    };
  };

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
          <img className='rps-image' src={computerChoice} alt="Computer choice"/>
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