import React from 'react';
import { wordAt, wordIndexOf } from '../word-list';
const wordListSize = 1 << 11;

const seedPhrases =
  'pond message bike law hamster sketch awful else trash deliver rapid broken'.split(
    ' ',
  );

const keyA =
  'couch eight defense assist december candy tribe survey crazy kangaroo butter glide'.split(
    ' ',
  );

const keyB = seedPhrases.map((seed, i) => {
  const wIdx = wordIndexOf(seed) || 0;
  const keyAIdx = wordIndexOf(keyA[i]) || 0;
  const keyBIdx = (wIdx - keyAIdx + wordListSize) % wordListSize;
  return wordAt(keyBIdx) || '';
});

const shuffledOrder = [7, 3, 12, 1, 9, 5, 11, 2, 8, 6, 10, 4];

export const Guide: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-justify text-gray-800">
        Seed Phrase Splitter Guide
      </h1>

      <p className="mb-6 text-gray-700 leading-relaxed">
        This guide will help you securely split your BIP-39 seed phrase into 2
        phrases that <em>individually</em> share zero information with the seed
        phrase. See{' '}
        <a
          href="https://en.wikipedia.org/wiki/One-time_pad"
          className="text-blue-600 underline hover:text-blue-800"
        >
          One-time pad
        </a>{' '}
        for more information on how the Split tool works.
        <br />
        <br />
        Using the Split tool outlined in this guide will ensure that the seed
        phrase is split without revealing any information about the original
        seed phrase on the device.
        <br />
        <br />
        The following steps outline how to split a 12-word seed phrase into two
        keys, each of which can be used to reconstruct the original seed phrase.
        For 24 word phrases, see the{' '}
        <a
          href="#explanation"
          className="text-blue-600 underline hover:text-blue-800"
        >
          explanation
        </a>{' '}
        below
        <br />
        <br />
        <span className="mt-8 text-red-700 font-semibold">
          Warning: This method is not a recommended way to store your seed
          phrase, and should only be used if you understand the risks involved.
        </span>
      </p>
      <ol className="list-inside space-y-8">
        <li>
          <strong className="text-lg">
            Step 1: Generate a splitting order
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
                  <th className="border border-gray-300 px-3 py-2  text-orange-500">
                    Seed word
                  </th>
                  <th className="border border-gray-300 px-3 py-2">
                    Split order
                  </th>
                  <th className="border border-gray-300 px-3 py-2">Key One</th>
                  <th className="border border-gray-300 px-3 py-2">Key Two</th>
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: 12 }).map((_, i) => (
                  <tr key={i}>
                    <td className="border border-gray-300 px-3 py-2 text-center">
                      {i + 1}
                    </td>
                    <td className="border border-gray-300 px-3 py-2 text-orange-500">
                      {seedPhrases[i]}
                    </td>
                    <td className="border border-gray-300 px-3 py-2 text-center">
                      {shuffledOrder[i]}
                    </td>
                    <td className="border border-gray-300 px-3 py-2"></td>
                    <td className="border border-gray-300 px-3 py-2"></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <span className="text-gray-600 text-xs">
            Note: this method is insufficient for seed phrases of longer length
            - see end.
          </span>
        </li>

        <li>
          <strong className="text-lg">Step 2: Generate the split keys</strong>
          <br />
          <span className="text-gray-700">
            Following the split order, use the Split tool to generate two keys
            from each seed word. This is done by locating the seed word (the
            slider paginates through the words) and writing down corresponding
            key words (order not important):
          </span>
          <div className="overflow-x-auto">
            <table className="table-auto border-collapse border border-gray-300 my-4 mx-auto w-full text-sm">
              <thead>
                <tr>
                  <th className="border border-gray-300 px-3 py-2"></th>
                  <th className="border border-gray-300 px-3 py-2  text-orange-500">
                    Seed word
                  </th>
                  <th className="border border-gray-300 px-3 py-2">
                    Split order
                  </th>
                  <th className="border border-gray-300 px-3 py-2">Key One</th>
                  <th className="border border-gray-300 px-3 py-2">Key Two</th>
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: 12 }).map((_, i) => (
                  <tr key={i}>
                    <td className="border border-gray-300 px-3 py-2 text-center">
                      {i + 1}
                    </td>
                    <td className="border border-gray-300 px-3 py-2  text-orange-500">
                      {seedPhrases[i]}
                    </td>
                    <td className="border border-gray-300 px-3 py-2 text-center">
                      {shuffledOrder[i]}
                    </td>
                    <td className="border border-gray-300 px-3 py-2">
                      {shuffledOrder[i] === 1 ? keyA[i] : ''}
                    </td>
                    <td className="border border-gray-300 px-3 py-2">
                      {shuffledOrder[i] === 1 ? keyB[i] : ''}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <span className="text-gray-600 text-xs">
            Repeat for all words, strictly following the split order
          </span>
          <div className="overflow-x-auto">
            <table className="table-auto border-collapse border border-gray-300 my-4 mx-auto w-full text-sm">
              <thead>
                <tr>
                  <th className="border border-gray-300 px-3 py-2"></th>
                  <th className="border border-gray-300 px-3 py-2  text-orange-500">
                    Seed word
                  </th>
                  <th className="border border-gray-300 px-3 py-2">
                    Split order
                  </th>
                  <th className="border border-gray-300 px-3 py-2">Key One</th>
                  <th className="border border-gray-300 px-3 py-2">Key Two</th>
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: 12 }).map((_, i) => (
                  <tr key={i}>
                    <td className="border border-gray-300 px-3 py-2 text-center">
                      {i + 1}
                    </td>
                    <td className="border border-gray-300 px-3 py-2  text-orange-500">
                      {seedPhrases[i]}
                    </td>
                    <td className="border border-gray-300 px-3 py-2 text-center">
                      {shuffledOrder[i]}
                    </td>
                    <td className="border border-gray-300 px-3 py-2">
                      {keyA[i]}
                    </td>
                    <td className="border border-gray-300 px-3 py-2">
                      {keyB[i]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </li>
        <li>
          <strong className="text-lg">Step 3: Verify</strong>
          <br />
          <span className="text-gray-700">
            Use the Combine tool to verify that the two keys can reconstruct the
            original seed phrase.
          </span>
        </li>
        <li>
          <strong className="text-lg">Step 3: Store keys</strong>
          <br />
          <span className="text-gray-700">
            Store the two keys in separate and <strong>physical</strong>{' '}
            locations.
            <br />
            <br />
            Since original seed phrase is recoverable from these two keys (as
            verified), the original can be destroyed.
            <br />
            <br />
            <p className="mt-8 text-red-700 font-semibold">
              Warning: Note: Both keys are required to reconstruct the original
              seed phrase and thus the risk of loss is increased. This risk can
              be mitigated by storing multiple copies of the keys in different
              locations.
            </p>
            <p className="mt-8 text-red-700 font-semibold">
              Warning: Losing too many shares or exposing them to untrusted
              parties can compromise your security. Handle all shares with care.
            </p>
          </span>
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
            revealed requires justification.
          </p>
          <br />
          <p>
            Whilst the seed word is not input directly, the user does navigate
            to seed words using a slider, which could potentially leak
            information about the seed phrase. If the page for each word was
            discoverable, the entropy per word would reduce by a factor of 16
            since there are 16 pages of words. If each seed word was split in
            the order of the phrase, the difficulty in guessing the seed phrase
            would be reduced by a factor of 16<sup>12</sup> (≈ 3 million) - a
            significant reduction. Since the split order is random, however, the
            12! (≈ 479 million) possible orderings compensate for this, yielding
            zero knowledge to an unintended observer.
          </p>
          <br />
          <p>
            For 24 words, there is upto 15 bits of information that could be
            disclosed when applying the basic protocol. This can be avoided by
            randomly including additional <em>decoy</em> uses of the Split tool
            step. This involves picking 4 or more random seed words (28! &gt; 16
            <sup>24</sup>) to be randomly interleaved into the 24 desired uses
            of the Split tool step.
          </p>
        </div>
      </div>
    </div>
  );
};
