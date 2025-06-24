import React from 'react';

type Word = {
  word: string;
  className?: string;
};

export const WordBubble: React.FunctionComponent<{
  words: Word[];
}> = ({ words }) => {
  return (
    <div className="flex flex-col justify-between items-center rounded-sm border-gray-500 border-1 bg-white p-1 shadow-lg">
      {words.map(({ word, className }, i) => (
        <div key={i} className={className}>
          <span className="font-bold">{word.slice(0, 4)}</span>
          {word.slice(4)}
        </div>
      ))}
    </div>
  );
};
