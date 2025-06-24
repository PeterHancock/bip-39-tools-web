import 'react';
import { Route, Routes } from 'react-router';

import './App.css';
import { Joiner } from './joiner/Joiner.tsx';
import { Splitter } from './splitter/Splitter.tsx';
import { Page } from './components/common/Page.tsx';
import { Home } from './home/home.tsx';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Page />}>
        <Route index element={<Home />} />
        <Route path="joiner" element={<Joiner />} />
        <Route path="splitter" element={<Splitter />} />
      </Route>
    </Routes>
  );
}
