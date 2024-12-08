import React, { useState } from "react";
// import { Button } from "./ui/button";
import { Button } from "@/components/ui/button"
import DarkMode from "./DarkMode";


function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <>
      <nav className="bg-transparent">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded={isMenuOpen}
                onClick={() => setMenuOpen(!isMenuOpen)}
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <svg
                    className="size-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="size-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                )}
              </button>
            </div>

              <div className='flex items-center justify-start sm:justify-start'>
                <h1 className={`text-gray content-start flex-start ml-5 ${
                  isMenuOpen ? "justify-center pl-14" : ""
                }`}>
                Tailwind css
                </h1>
              </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch space-between">
              <div className="hidden sm:ml-6 sm:block content-center">
                <div className="flex space-x-4 content-center">
                    
                <div className="relative ml-3">
              <button
                type="button"
                className="flex rounded-full bg-transparent text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                onClick={() => setDropdownOpen(!isDropdownOpen)}
              >
                <span className="sr-only">Open user menu</span>
                <p className="rounded-md px-3 py-2 text-sm font-medium text-gray hover:bg-gray-700 hover:text-white">Features</p>
              </button>
              {isDropdownOpen && (
                <div
                  className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu-button"
                >
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                  >
                    Your Profile
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                  >
                    Settings
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                  >
                    Sign out
                  </a>
                </div>
              )}
            </div>

                  <a
                    href="#"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray- hover:bg-gray-700 hover:text-white"
                  >
                    About   
                  </a>
                  <a
                    href="#"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray hover:bg-gray-700 hover:text-white"
                  >
                    Blog
                  </a>
                  <a
                    href="#"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray hover:bg-gray-700 hover:text-white"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>

            {/* Profile dropdown */}
            <div className={`flex ${isMenuOpen ? "hidden" : ""}`}>
  <Button
    className={`${
      isMenuOpen ? "hidden" : ""
    }`}
    variant="outline"
  >
    Button
  </Button>

  <Button
    className={`bg-gray-900 hover:bg-gray-800 hover:text-white mx-3 text-white ${
      isMenuOpen ? "hidden" : ""
    }`}
    variant="outline"
  >
    Button
  </Button>
  <DarkMode />
</div>

          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="sm:hidden" id="mobile-menu">
            <div className="space-y-1 px-2 pb-3 pt-2 w-56 shadow-xl	">
            <button
                type="button"
                className="flex rounded-full bg-transparent text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                onClick={() => setDropdownOpen(!isDropdownOpen)}
              >
                <span className="sr-only">Open user menu</span>
                <p className="rounded-md px-3 py-2 text-sm font-medium text-gray hover:bg-gray-700 hover:text-white">Features</p>
              </button>
              <a
                href="#"
                className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
                aria-current="page"
              >
                About
              </a>
              <a
                href="#"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray- hover:bg-gray-700 hover:text-white"
              >
                Blog
              </a>
              <a
                href="#"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray- hover:bg-gray-700 hover:text-white"
              >
                Contact
              </a>
              <hr />
              <a
                href="#"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray- hover:bg-gray-700 hover:text-white"
              >
                Action
              </a>
              <a
                href="#"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray- hover:bg-gray-700 hover:text-white"
              >
                Another action
              </a>
              <a
                href="#"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray- hover:bg-gray-700 hover:text-white"
              >
                Dropdown Submenu
              </a>
              <a
                href="#"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray- hover:bg-gray-700 hover:text-white"
              >
                404 page
              </a>
              <div className="flex-wrap	">

              <Button className=""w-full variant="outline">Button</Button>
            <Button variant="outline" className="bg-gray-900 hover:bg-gray-800 hover:text-white mx-3 text-white">Button</Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
