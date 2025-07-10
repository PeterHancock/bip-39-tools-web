import React from 'react';
import { NavLink } from 'react-router';
import split from '../assets/split.svg';
import merge from '../assets/merge.svg';

const Card: React.FC<{
  title: string;
  iconSrc: string;
  pageLink: string;
  guideLink: string;
  children?: React.ReactNode;
}> = ({ title, iconSrc, pageLink, guideLink, children }) => (
  <div className="flex-1 bg-white rounded-lg shadow p-6 flex flex-col items-center">
    <NavLink to={pageLink}>
      <div className="flex flex-row items-center mb-4">
        <img src={iconSrc} width="25rem" />
        <h2 className="text-xl font-bold ml-2">{title}</h2>
      </div>
    </NavLink>
    <p className="text-gray-600 text-center">{children}</p>
    <br />
    <NavLink to={guideLink}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
        />
      </svg>
    </NavLink>
  </div>
);

export const Home = () => (
  <section className="flex flex-col items-center justify-center min-h-[60vh] bg-gradient-to-b from-blue-50 to-white py-16">
    <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4 text-center">
      BIP-39 Seed Splitter
    </h1>
    <p className="text-lg md:text-2xl text-gray-700 mb-8 text-center max-w-2xl">
      A tool to help the secure splitting and recombining of a BIP-39 mnemonic
      seed phrase
    </p>
    <div>
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <Card
          iconSrc={split}
          title="Split"
          pageLink="/split"
          guideLink="/split/guide"
        >
          Split your BIP-39 seed phrase into two shares for secure backup and
          recovery.
        </Card>
        <Card
          iconSrc={merge}
          title="Combine"
          pageLink="/combine"
          guideLink="/combine/guide"
        >
          Recombine your shares to restore the original BIP-39 seed phrase
          safely and easily.
        </Card>
      </div>
    </div>
  </section>
);
