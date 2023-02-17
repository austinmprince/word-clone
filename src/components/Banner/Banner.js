import React from "react";

function Banner({ style, answer, guesses}) {
  return (
    <div className={`${style.emotion} banner`}>
      <p>
        {style.emotion === "happy" ? (
          <>
            <strong>Congratulations!</strong> Got it in
            <strong> {guesses} guesses</strong>.
          </>
        ) : (
          <>
            {" "}
            Sorry, the correct answer is <strong>{answer}</strong>.
          </>
        )}
      </p>
    </div>
  );
}

export default Banner;
