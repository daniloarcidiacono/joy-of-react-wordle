import React from "react";

function GuessInput({ onSubmit }) {
  const [guess, setGuess] = React.useState('');
  const sanitizeGuess = text => text.toLocaleUpperCase().trim();
  const submitGuess = event => {
    event.preventDefault();
    onSubmit && onSubmit(guess);
    setGuess('');
  };

  return (
    <form className="guess-input-wrapper" onSubmit={submitGuess}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input id="guess-input"
        type="text" 
        required
        minLength={5}
        maxLength={5}
        pattern="^[A-Z]{5}$" 
        title="5 letter word"
        value={guess} 
        onChange={event => setGuess(sanitizeGuess(event.target.value))}              
      />
    </form>
  );
}

export default GuessInput;
