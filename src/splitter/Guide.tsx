import React from 'react';

export const Guide: React.FC = () => (
  <div style={{ maxWidth: 700, margin: '2rem auto', padding: '1rem' }}>
    <h1>Seed Phrase Splitter Guide</h1>
    <ol>
      <li>
        <strong>Enter Your Seed Phrase:</strong>
        <br />
        Paste or type your BIP-39 seed phrase into the input field. Make sure it
        is correct and complete.
      </li>
      <li>
        <strong>Choose Number of Shares:</strong>
        <br />
        Select how many parts you want to split your seed phrase into. This
        determines how many pieces will be generated.
      </li>
      <li>
        <strong>Set Recovery Threshold:</strong>
        <br />
        Decide how many shares are required to recover the original seed phrase.
        For example, with 5 shares and a threshold of 3, any 3 shares can
        reconstruct the seed.
      </li>
      <li>
        <strong>Split the Seed:</strong>
        <br />
        Click the "Split" button. The tool will generate the specified number of
        shares.
      </li>
      <li>
        <strong>Distribute Shares Securely:</strong>
        <br />
        Save and distribute each share to trusted parties or locations. Do not
        store all shares together.
      </li>
      <li>
        <strong>Recovering the Seed:</strong>
        <br />
        To recover your seed phrase, collect the required number of shares and
        use the "Recover" function in this tool.
      </li>
    </ol>
    <p>
      <strong>Warning:</strong> Losing too many shares or exposing them to
      untrusted parties can compromise your security. Handle all shares with
      care.
    </p>
  </div>
);
