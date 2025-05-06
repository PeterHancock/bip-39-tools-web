import 'react';

import './App.css';
import { Splitter } from './splitter/Splitter.tsx';

export function App() {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <Splitter />
      </div>
    </>
  );
};
