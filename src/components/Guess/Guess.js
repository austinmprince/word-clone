import React from "react";
import { range } from "../../utils";

function Guess({ word }) {
  return (
    <p className="guess">
      {word
        ? word.map((letter, index) => <span key={index} className={`cell ${letter.status}`}>{letter.letter}</span>)
        : range(5).map((index) => <span key={index} className="cell"></span>)}
    </p>
  );
}

export default Guess;
