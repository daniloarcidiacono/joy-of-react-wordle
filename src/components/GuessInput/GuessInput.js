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
             value={guess} 
             onChange={event => setGuess(sanitizeGuess(event.target.value))} 
             pattern="^[A-Z]{5}$" 
      />
    </form>
  );
}

export default GuessInput;
