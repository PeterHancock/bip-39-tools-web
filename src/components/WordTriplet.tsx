const Word: React.FC<{ word: string } & React.Attributes> = ({ word }) => (
  <div>
    <span className="font-bold">{word.slice(0, 4)}</span>
    {word.slice(4)}
  </div>
);

export const WordTriplet: React.FunctionComponent<{
  firstWord: string;
  secondWord: string;
  thirdWord: string;
}> = ({ firstWord, secondWord, thirdWord }) => {
  return (
    <div className="flex flex-col justify-between items-center rounded-2xl border-gray-500 border-1 bg-white p-1 shadow-lg text-blue-600/100">
      <Word word={firstWord} />
      <Word word={secondWord} />
      <Word word={thirdWord} />
    </div>
  );
};
