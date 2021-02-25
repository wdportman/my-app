const useRPS = () => {

  const generateRandomChoice = () => {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    return randomChoice;
  };

  const compareChoices = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return;
    };
    if ((userChoice === 'Rock' && computerChoice === 'Scissors') || 
        (userChoice === 'Scissors' && computerChoice === 'Paper') ||
        (userChoice === 'Paper' && computerChoice === 'Rock')) {
      // User gets a point
      return true;
    } else {
      // Computer gets a point
      return false;
    }
  };

  return {generateRandomChoice, compareChoices}

};

export {useRPS};