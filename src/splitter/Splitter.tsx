import { useState } from 'react';

import { toList, slice, wordAt, wordIndexOf } from '../word-list';
import { WordBubble } from '../components/WordBubble';

const pairsPerPage = 1 << 7;

const numPages = 1 << 4;

const mask = (1 << 11) - 1;

const wordListSize = 1 << 11;

const randomBits = new Uint16Array(pairsPerPage);

export const SplitPage = () => {
  const [slider, setSlider] = useState(1);

  globalThis.crypto.getRandomValues(randomBits);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setSlider(value);
  };

  const seedWords = toList(
    slice((slider - 1) * pairsPerPage, slider * pairsPerPage),
  );

  return (
    <>
      <h1 className="text-3xl font-bold text-center text-orange-400 my-6 uppercase">
        Split
      </h1>
      <div className="w-full px-10 mr-5 md:mr-8 xl:mr-12">
        <input
          className="w-full accent-orange-500"
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
        {seedWords.map((seed, i) => {
          const wIdx = wordIndexOf(seed) || 0;
          const keyAIdx = randomBits[i] & mask;
          const keyA = wordAt(keyAIdx) || '';
          const keyBIdx = (wIdx - keyAIdx + wordListSize) % wordListSize;
          const keyB = wordAt(keyBIdx) || '';
          return (
            <WordBubble
              key={seed}
              words={[
                { word: seed, className: 'text-orange-400' },
                { word: keyA },
                { word: keyB },
              ]}
            />
          );
        })}
      </div>
    </>
  );
};
