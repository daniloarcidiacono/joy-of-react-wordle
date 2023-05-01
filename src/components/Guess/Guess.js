import React from "react";
import { range } from '../../utils';

const LENGTH = 5;

function Guess({ guess }) {
  const chars = (guess || '').split('');

  return (
    <p className="guess">
      {
        range(LENGTH)
          .map(index => <span className="cell" key={index}>{chars[index]}</span>)
      }
    </p>
  );
}

export default Guess;
