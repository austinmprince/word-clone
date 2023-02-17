import React from "react";

function Input({ submitGuess, gameIsOver }) {
  

  function validateInput(word) {
    submitGuess(word);
    setWord('');
  }

  const [word, setWord ] = React.useState('');
  return (
    <form className="guess-input-wrapper"
    onSubmit={(event) => {
      event.preventDefault();
      validateInput(word);
      
    }}>
      <label htmlFor="guess-input" className="get-input">Enter Guess:</label>
      <input
        disabled={gameIsOver}
        autoComplete="off"
        title="5 letter word 💪"
        required
        pattern="[A-Z]{5}"
        id="guess-type"
        type="text"
        value={word}
        onChange={(event) => {
          setWord(event.target.value.toUpperCase())
        }}
        
      />
    </form>
  );
}

export default Input;
