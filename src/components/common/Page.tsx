import { useState } from 'react';
import { NavLink, Outlet } from 'react-router';

const renderNavlLinkClass = (isActive: boolean) =>
  `block mt-4 lg:inline-block lg:mt-0 text-orange-200 hover:text-orange-800 mr-4 ${isActive ? 'text-orange-500' : 'text-black'}`;

export const Page = () => {
  const [hidden, setHidden] = useState(true);

  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-gray-500 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">
            Seed Splitter
          </span>
        </div>
        <div className="block lg:hidden">
          <button
            className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
            onClick={() => {
              setHidden((h) => !h);
            }}
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${hidden ? 'hidden' : ''}`}
        >
          <div className="text-sm lg:flex-grow">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${renderNavlLinkClass(isActive)} mr-4`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/split"
              className={({ isActive }) =>
                `${renderNavlLinkClass(isActive)} mr-4`
              }
            >
              Split
            </NavLink>
            <NavLink
              to="/combine"
              className={({ isActive }) =>
                `${renderNavlLinkClass(isActive)} mr-4`
              }
            >
              Combine
            </NavLink>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};
