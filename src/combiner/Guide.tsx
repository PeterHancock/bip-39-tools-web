import React from 'react';

export const Guide: React.FC = () => (
  <div style={{ maxWidth: 700, margin: '2rem auto', padding: '1rem' }}>
    <h1>Combiner Guide</h1>
    <p>
      The Combiner tool helps you combine multiple BIP-39 mnemonic phrases or
      word lists into a single, valid mnemonic. This can be useful for advanced
      wallet recovery, collaborative key management, or experimenting with
      BIP-39 word lists.
    </p>
    <h2>How to Use the Combiner</h2>
    <ol>
      <li>
        <strong>Enter Phrases:</strong> Paste or type each BIP-39 mnemonic
        phrase or word list into the provided input fields. You can add or
        remove fields as needed.
      </li>
      <li>
        <strong>Combine:</strong> Click the <b>Combine</b> button. The tool will
        merge the words according to the selected method (e.g., interleaving,
        concatenation).
      </li>
      <li>
        <strong>Result:</strong> The resulting mnemonic will be displayed. You
        can copy or export it for use in compatible wallets or tools.
      </li>
    </ol>
    <h2>Tips</h2>
    <ul>
      <li>Ensure all input phrases use valid BIP-39 words.</li>
      <li>
        Check the resulting mnemonic for validity before using it for wallet
        recovery.
      </li>
      <li>
        Keep your mnemonics secure and never share them with untrusted parties.
      </li>
    </ul>
    <h2>Learn More</h2>
    <ul>
      <li>
        <a
          href="https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki"
          target="_blank"
          rel="noopener noreferrer"
        >
          BIP-39 Specification
        </a>
      </li>
      <li>
        <a
          href="https://iancoleman.io/bip39/"
          target="_blank"
          rel="noopener noreferrer"
        >
          BIP-39 Mnemonic Tool
        </a>
      </li>
    </ul>
  </div>
);
