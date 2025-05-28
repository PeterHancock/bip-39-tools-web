import 'react';

import './App.css';
import { Joiner } from './joiner/Joiner.tsx';
import { Splitter } from './splitter/Splitter.tsx';

export function App() {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <Splitter />
        <Joiner />
      </div>
    </>
  );
};
