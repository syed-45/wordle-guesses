import markWordleGuesses from "./markWordleGuesses";

test("marks wordle guesses", () => {
  expect(markWordleGuesses('apple','party')).toStrictEqual([
    {letter: 'a', score: 'partially correct'},
    {letter: 'p', score: 'partially correct'},
    {letter: 'p', score: 'incorrect'},
    {letter: 'l', score: 'incorrect'},
    {letter: 'e', score: 'incorrect'}
  ])
  expect(markWordleGuesses('apple','party')).toStrictEqual([
    {letter: 'a', score: 'partially correct'},
    {letter: 'p', score: 'partially correct'},
    {letter: 'p', score: 'incorrect'},
    {letter: 'l', score: 'incorrect'},
    {letter: 'e', score: 'incorrect'}
  ])
});
