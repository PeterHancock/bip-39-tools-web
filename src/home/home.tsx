import React from 'react';
import { NavLink } from 'react-router';

const Card: React.FC<{
  title: string;
  guideLink: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
}> = ({ title, guideLink, icon, children }) => (
  <div className="flex-1 bg-white rounded-lg shadow p-6 flex flex-col items-center">
    {icon}
    <h2 className="text-xl font-bold mb-2">{title}</h2>
    <p className="text-gray-600 text-center">{children}</p>

    <NavLink to={guideLink}>More info</NavLink>
  </div>
);

function SplitSquareIcon({ size = 32, color = '#f97316' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      aria-label="Rounded square splitting icon"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer rounded square */}
      <rect
        x="4"
        y="4"
        width="24"
        height="24"
        rx="6"
        stroke={color}
        strokeWidth="2"
        fill="none"
      />
      {/* Split line */}
      <line
        x1="16"
        y1="8"
        x2="16"
        y2="24"
        stroke={color}
        strokeWidth="2"
        strokeDasharray="2 2"
      />
      {/* Left half highlight */}
      <rect
        x="4"
        y="4"
        width="10"
        height="24"
        rx="6"
        fill={color}
        opacity="0.12"
      />
      {/* Right half highlight */}
      <rect
        x="18"
        y="4"
        width="10"
        height="24"
        rx="6"
        fill={color}
        opacity="0.12"
      />
    </svg>
  );
}

export const Home = () => (
  <section className="flex flex-col items-center justify-center min-h-[60vh] bg-gradient-to-b from-blue-50 to-white py-16">
    <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4 text-center">
      BIP-39 Seed Splitter
    </h1>
    <p className="text-lg md:text-2xl text-gray-700 mb-8 text-center max-w-2xl">
      A tool to help the secure splitting and rejoining of BIP-39 mnemonic seed
      phrases
    </p>
    <div>
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <Card title="Split" guideLink="/split/guide" icon={<SplitSquareIcon />}>
          Divide your BIP-39 seed phrase into multiple shares for secure backup
          and recovery.
        </Card>
        <Card
          title="Combine"
          guideLink="/combine/guide"
          icon={<SplitSquareIcon />}
        >
          Recombine your shares to restore the original BIP-39 seed phrase
          safely and easily.
        </Card>
      </div>
    </div>
  </section>
);
