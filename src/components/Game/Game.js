import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const logGuess = guess => {
    console.log(guess);
  };
  
  return (
    <>
      <GuessInput onSubmit={logGuess} />
    </>
  );
}

export default Game;
