import { useState } from 'react';

import { toList, slice, wordAt, startsWith, wordIndexOf } from '../word-list';
import { WordBubble } from '../components/WordBubble';

const pairsPerPage = 1 << 7;

const numPages = 1 << 4;

export const CombinePage = () => {
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
      <h1 className="text-3xl font-bold text-center text-orange-400 my-6 uppercase">
        Combine
      </h1>
      <div className="flex flex-col justify-center items-center">
        <input
          className="border border-gray-500 focus:border-orange-600 text-center font-bold"
          type="text"
          value={input}
          onChange={handleInputWord}
        />
      </div>
      <div className="w-full px-10 mr-5 md:mr-8 xl:mr-12">
        <input
          className="w-full accent-orange-500 "
          type="range"
          min="1"
          max={numPages}
          value={slider}
          onChange={handleSliderChange}
        />
        <span className="ml-2">
          Words {(slider - 1) * pairsPerPage + 1} to {slider * pairsPerPage}
        </span>
      </div>
      <div className="w-full h-full grid grid-cols-4 md:grid-cols-8 xl:grid-cols-16 gap-4 p-4">
        {words.map((keyB) => {
          const seed =
            wordAt(
              ((wordIndexOf(keyB) || 0) + (wordIndexOf(word[0]) || 0)) %
                (1 << 11),
            ) || '';

          return (
            <WordBubble
              key={keyB}
              words={[
                { word: keyB },
                { word: seed, className: 'text-orange-400' },
              ]}
            />
          );
        })}
      </div>
    </>
  );
};
