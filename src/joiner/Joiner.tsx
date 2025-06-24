import { useState } from 'react';

import { toList, slice, wordAt, startsWith, wordIndexOf } from '../word-list';

import { WordPair } from '../components/WordPair';

const pairsPerPage = 1 << 7;

const numPages = 1 << 4;

export const Joiner = () => {
  const [slider, setSlider] = useState(1);

  const [word, setWord] = useState<[string, number]>([wordAt(0) as string, 0]);

  const [input, setInput] = useState<string>(word[0]);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setSlider(value);
  };

  const words = toList(
    slice((slider - 1) * pairsPerPage, slider * pairsPerPage),
  );

  const handleInputWord = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (startsWith(value)) {
      setInput(value);
      const index = wordIndexOf(value);
      if (index !== undefined) {
        setWord([value, index]);
      }
    }
  };

  return (
    <>
      <h1>Joiner</h1>
      <div className="flex flex-col justify-center items-center">
        <input
          className="border-gray-500 border-1"
          type="text"
          value={input}
          onChange={handleInputWord}
        />
      </div>
      <div className="w-full">
        <input
          className="w-full"
          type="range"
          min="1"
          max={numPages}
          value={slider}
          onChange={handleSliderChange}
        />
        [{(slider - 1) * pairsPerPage + 1}, {slider * pairsPerPage}]
      </div>
      <div className="w-full h-full grid grid-cols-4 md:grid-cols-8 xl:grid-cols-16 gap-4 p-4">
        {words.map((w) => {
          const add =
            wordAt(
              ((wordIndexOf(w) || 0) + (wordIndexOf(word[0]) || 0)) % (1 << 11),
            ) || '';

          return <WordPair key={w} firstWord={w} secondWord={add} />;
        })}
      </div>
    </>
  );
};
