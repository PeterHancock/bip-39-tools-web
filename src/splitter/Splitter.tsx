import { useState } from "react";

import { toList, slice,  wordAt, wordIndexOf  }  from '../word-list';
import { WordTriplet } from "../components/WordTriplet";

const pairsPerPage = 1 << 7;

const numPages = 1 << 4;

const mask = (1 << 11) - 1;

const wordListSize = 1 << 11;

const randomBits = new Uint16Array(pairsPerPage);

export const Splitter = () => {

    const [slider, setSlider] = useState(1);


    globalThis.crypto.getRandomValues(randomBits);

    const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value);
        setSlider(value);
    };

    const words = toList(slice((slider - 1) * pairsPerPage, slider * pairsPerPage));


    return (
        <>
            <h1>Splitter</h1>
            <div className="w-full">
                <input className="w-full" type="range" min="1" max={numPages} value={slider} onChange={handleSliderChange} />
                [{(slider -1) * pairsPerPage + 1}, {slider * pairsPerPage}]
            </div>
            <div className="w-full h-full grid grid-cols-4 md:grid-cols-8 xl:grid-cols-16 gap-4 p-4">
                {words.map((word, i) => {
                    const wIdx = wordIndexOf(word) || 0;
                    const keyIdx =  randomBits[i] & mask;
                    const splitIdx = (wIdx - keyIdx + wordListSize) % wordListSize;
                    return <WordTriplet key={word} firstWord={word} secondWord={wordAt(keyIdx) || ''} thirdWord={wordAt(splitIdx) || ''} />;
                })}
            </div>
        </>
    );

};