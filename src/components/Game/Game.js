import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import Input from "../Input";
import GuessResults from "../GuessResults";
import { checkGuess } from "../../game-helpers";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Banner from "../Banner/Banner";
// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  function submitGuess(word) {
    const newHistory = [...history];
    
    const newGuess = {
      word: checkGuess(word, answer),
      id: crypto.randomUUID(),
    };
    console.log(word === answer)
    
    setDone(word === answer);
    newHistory.push(newGuess);
    setHistory(newHistory);
  }

  const [history, setHistory] = React.useState([]);
  const [done, setDone] = React.useState("");
  return (
    <>
      <GuessResults history={history} />

      {history.length >= NUM_OF_GUESSES_ALLOWED ? (
        <>
          <Input submitGuess={submitGuess} gameIsOver={true} />
          <Banner style={{ emotion: "sad"}}  />
        </>
      ) : (
        <Input submitGuess={submitGuess} gameIsOver={false} />
      )}
      {done ? (
        <>
          <Input submitGuess={submitGuess} gameIsOver={true}  />
          <Banner style={{emotion: "happy"}} guesses={history.length} />
        </>
      ) : undefined}
    </>
  );
}

export default Game;
