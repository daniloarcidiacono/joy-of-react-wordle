import React from "react";
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

const LENGTH = 5;

function Guess({ guess, answer }) {  
  let checks = checkGuess(guess, answer);
  if (!checks) {
    checks = range(LENGTH).map(index => ({ letter: '', status: '' }));
  }
    
  return (
    <p className="guess">
      {
        checks.map((check, index) => <span className={`cell ${check.status}`} key={index}>{check.letter}</span>)
      }
    </p>
  );
}

export default Guess;
