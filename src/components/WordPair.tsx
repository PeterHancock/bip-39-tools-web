export const WordPair: React.FunctionComponent<{ firstWord: string, secondWord: string }> = ({ firstWord, secondWord }) => {
  const first4 = firstWord.slice(0, 4);
  const firstRest = firstWord.slice(4);
  const second4 = secondWord.slice(0, 4);
  const secondRest = secondWord.slice(4);

  return (
    <div className="flex flex-col justify-between items-center rounded-2xl border-gray-500 border-1 bg-white p-1 shadow-lg text-blue-600/100">
      <div ><span className="font-bold">{first4}</span>{firstRest}</div>
      <div ><span className="font-bold">{second4}</span>{secondRest}</div>
    </div>
  );
};