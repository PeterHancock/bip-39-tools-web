import { useState } from "react";

import { WordPair } from "../components/WordPair";

const pairsPerPage = 1 << 7;

const numPages = 1 << 4;

export const Splitter = () => {

    const [slider, setSlider] = useState(1);

    const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value);
        setSlider(value);
    };

    return (
        <>
            <h1>Splitter</h1>
            <div className="flex flex-col justify-center items-center">
                <input  className=" border-gray-500 border-1" type="text" value="aaaaa" />
            </div> 
            <div className="w-full">
                <input className="w-full" type="range" min="1" max={numPages} value={slider} onChange={handleSliderChange} />
                [{(slider -1)*pairsPerPage + 1}, {slider*pairsPerPage}]
            </div>
            <div className="w-full h-full grid grid-cols-4 md:grid-cols-8 xl:grid-cols-16 gap-4 p-4">
                {Array(pairsPerPage).fill(0).map((_, i) => <WordPair key={i} firstWord="aaaaa" secondWord="bbbb" />)}
            </div>
        </>
    );

};