import 'react';
import { Route, Routes } from 'react-router';

import './App.css';
import { CombinePage, CombineGuide } from './combiner';
import { SplitPage, SplitGuide } from './splitter';
import { Page } from './components/common/Page.tsx';
import { Home } from './home/home.tsx';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Page />}>
        <Route index element={<Home />} />
        <Route path="split" element={<SplitPage />} />
        <Route path="split/guide" element={<SplitGuide />} />
        <Route path="combine" element={<CombinePage />} />
        <Route path="combine/guide" element={<CombineGuide />} />
      </Route>
    </Routes>
  );
}
