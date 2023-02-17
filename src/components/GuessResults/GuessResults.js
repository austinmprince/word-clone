import React from "react";
import Guess from "../Guess";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessResults({ history }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((index) => 
       ( history[index] !== undefined ? <Guess key={index} word={history[index].word}/> : <Guess key={index}/>)
      )}
    </div>
  );
}

export default GuessResults;
