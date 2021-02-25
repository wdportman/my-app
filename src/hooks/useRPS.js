const useRPS = () => {

  const generateRandomChoice = () => {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    return randomChoice;
  };

  

};

export {useRPS}