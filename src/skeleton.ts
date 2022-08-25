interface MarkedGuess {
  lettersWithScores: LetterWithScore[]
}

interface LetterWithScore {
  letter: string,
  score: OneLetterScore
}

type OneLetterScore = "fully correct" | "partially correct" | "incorrect"

/**
 * Adds together two numbers
 * @param a - the first number to add
 * @param b - the second number to add
 * @returns the total
 */

/* PSEUDOCODE
  create returnGuess = {}
  for i in guess
    if guess[i] === hiddenGuess[i]  then 
      add to returnGuess guess[i] with 'fully correct'
      else if hiddenTarget.includes(guess[i]) {
        add to returnGuess guess[i] with 'partially correct'
      }
      else add to returnGuess guess[i] with ' incorrect'
    }
    


*/
function markWordleGuess(guess: string, hiddenTarget: string): MarkedGuess {

  const guessArr = guess.split("")
  const hiddenTargetArr = hiddenTarget.split("")
  const returnGuess: MarkedGuess = {lettersWithScores: []}
    for (let i in guessArr) {
      if (guessArr[i] === hiddenTargetArr[i]) {
              returnGuess.lettersWithScores.push({letter: guessArr[i], score: "fully correct"})
      }
      else if (hiddenTarget.includes(guessArr[i])) {
        returnGuess.lettersWithScores.push({letter: guessArr[i], score: "partially correct"})
      }
      else {
        returnGuess.lettersWithScores.push({letter: guessArr[i], score: "incorrect"})
      }
    }


  return returnGuess;
}

export default markWordleGuess;

const guess = "apples"
const hiddenTarget = "party"
const result = markWordleGuess(guess, hiddenTarget)
console.log(result)
