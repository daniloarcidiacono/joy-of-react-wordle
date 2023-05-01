import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessResults from '../GuessResults/GuessResults';
import Banner from '../Banner/Banner';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
// Pick a random word on every pageload.
const answer = sample(WORDS);

// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [status, setStatus] = React.useState('running');

  const pushGuess = guess => {
    const nextGuesses = [...guesses];
    nextGuesses.push(guess);
    setGuesses(nextGuesses);

    // Handle endgame
    if (guess === answer) {
      setStatus('won');
    } else if (nextGuesses.length == NUM_OF_GUESSES_ALLOWED) {
      setStatus('lost');
    }
  }
  
  return (
    <>
      { status === 'won' && 
        <Banner status='happy'>
          <strong>Congratulations!</strong> Got it in <strong>{guesses.length} guesses</strong>.
        </Banner> 
      }
      { status === 'lost' && 
        <Banner status='sad'>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </Banner> 
      }

      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput onSubmit={pushGuess} disabled={status !== 'running'} />
    </>
  );
}

export default Game;
