import React from 'react';
import { wordAt, wordIndexOf } from '../word-list';
const wordListSize = 1 << 11;

const seedPhrase =
  'pond message bike law hamster sketch awful else trash deliver rapid broken'.split(
    ' ',
  );

const keyA =
  'couch eight defense assist december candy tribe survey crazy kangaroo butter glide'.split(
    ' ',
  );

const keyB = seedPhrase.map((seed, i) => {
  const wIdx = wordIndexOf(seed) || 0;
  const keyAIdx = wordIndexOf(keyA[i]) || 0;
  const keyBIdx = (wIdx - keyAIdx + wordListSize) % wordListSize;
  return wordAt(keyBIdx) || '';
});

const combinedOrder = [8, 10, 5, 2, 9, 4, 12, 3, 7, 1, 6, 11];

export const Guide: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-justify text-gray-800">
        Seed Shares Combiner Guide
      </h1>

      <p className="mb-6 text-gray-700 leading-relaxed">
        This guide will help you securely combine your seed shares (created with
        the Split tool) into your BIP-39 seed phrase.
        <br />
        <br />
        Using the Combine tool outlined in this guide will ensure that the seed
        phrase is recovered without revealing any information on the device.
      </p>
      <ol className="list-inside space-y-8">
        <li>
          <strong className="text-lg">
            Step 1: Generate a combining order
          </strong>
          <br />
          <span className="text-gray-700">
            Shuffle the numbers 1 to 12 (or the length of your seed phrase) to
            create a random order for splitting the seed phrase. The randomness
            of the order is crucial for security.
          </span>

          <div className="overflow-x-auto">
            <table className="table-auto border-collapse border border-gray-300 my-4 mx-auto w-full text-sm">
              <thead>
                <tr>
                  <th className="border border-gray-300 px-3 py-2"></th>
                  <th className="border border-gray-300 px-3 py-2">Key One</th>
                  <th className="border border-gray-300 px-3 py-2">Key Two</th>
                  <th className="border border-gray-300 px-3 py-2">
                    Combine order
                  </th>
                  <th className="border border-gray-300 px-3 py-2  text-orange-500">
                    Seed word
                  </th>
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: 12 }).map((_, i) => (
                  <tr key={i}>
                    <td className="border border-gray-300 px-3 py-2 text-center">
                      {i + 1}
                    </td>
                    <td className="border border-gray-300 px-3 py-2">
                      {keyA[i]}
                    </td>
                    <td className="border border-gray-300 px-3 py-2">
                      {keyB[i]}
                    </td>
                    <td className="border border-gray-300 px-3 py-2 text-center">
                      {combinedOrder[i]}
                    </td>
                    <td className="border border-gray-300 px-3 py-2 text-orange-500"></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </li>
        <li>
          <strong className="text-lg">Step 2: Combine the shares</strong>
          <br />
          <span className="text-gray-700">
            Following the combine order, use the Combine tool to combine each
            share. This is done by inputing one of the share words (either is
            sufficient) and locating the corresponding share word (using the
            slider) and noting the corresponding seed pahrase word.:
          </span>
          <div className="overflow-x-auto">
            <table className="table-auto border-collapse border border-gray-300 my-4 mx-auto w-full text-sm">
              <thead>
                <tr>
                  <th className="border border-gray-300 px-3 py-2"></th>
                  <th className="border border-gray-300 px-3 py-2">Key One</th>
                  <th className="border border-gray-300 px-3 py-2">Key Two</th>
                  <th className="border border-gray-300 px-3 py-2">
                    Combine order
                  </th>
                  <th className="border border-gray-300 px-3 py-2  text-orange-500">
                    Seed word
                  </th>
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: 12 }).map((_, i) => (
                  <tr key={i}>
                    <td className="border border-gray-300 px-3 py-2 text-center">
                      {i + 1}
                    </td>
                    <td className="border border-gray-300 px-3 py-2">
                      {keyA[i]}
                    </td>
                    <td className="border border-gray-300 px-3 py-2">
                      {keyB[i]}
                    </td>
                    <td className="border border-gray-300 px-3 py-2 text-center">
                      {combinedOrder[i]}
                    </td>
                    <td className="border border-gray-300 px-3 py-2 text-orange-500">
                      {combinedOrder[i] === 1 ? seedPhrase[i] : ''}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <span className="text-gray-600 text-xs">
            Repeat for all seed words, strictly following the combine order
          </span>
          <div className="overflow-x-auto">
            <table className="table-auto border-collapse border border-gray-300 my-4 mx-auto w-full text-sm">
              <thead>
                <tr>
                  <th className="border border-gray-300 px-3 py-2"></th>
                  <th className="border border-gray-300 px-3 py-2">Key One</th>
                  <th className="border border-gray-300 px-3 py-2">Key Two</th>
                  <th className="border border-gray-300 px-3 py-2">
                    Combine order
                  </th>
                  <th className="border border-gray-300 px-3 py-2  text-orange-500">
                    Seed word
                  </th>
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: 12 }).map((_, i) => (
                  <tr key={i}>
                    <td className="border border-gray-300 px-3 py-2 text-center">
                      {i + 1}
                    </td>
                    <td className="border border-gray-300 px-3 py-2">
                      {keyA[i]}
                    </td>
                    <td className="border border-gray-300 px-3 py-2">
                      {keyB[i]}
                    </td>
                    <td className="border border-gray-300 px-3 py-2 text-center">
                      {combinedOrder[i]}
                    </td>
                    <td className="border border-gray-300 px-3 py-2 text-orange-500">
                      {seedPhrase[i]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </li>
      </ol>

      <div className="mt-8 p-6 bg-blue-50 border-l-4 border-blue-400 rounded shadow">
        <h2
          id="explanation"
          className="text-xl font-semibold mb-2 text-blue-800"
        >
          How does this work?
        </h2>
        <div className="text-gray-700 mb-2">
          <p>
            The claim that no information about the original seed phrase is
            disclosed is equivalent to the case when splitting the seed. For 24
            word seed phrases, 4 or more decoy combines should be randomly
            included.
          </p>
        </div>
      </div>
    </div>
  );
};
