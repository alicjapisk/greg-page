import React, {useState} from 'react';
import './Menu.css';

function Menu(){
  // Mobile version trzeba naprawić
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const handleMenuToggle = () => {
      setIsMenuVisible(!isMenuVisible);
    };
    return (
        <nav class="sticky top-0 z-50 bg-white shadow-md">
    <div class="max-w-6xl mx-auto xl:px-0 px-10">
      <div class="flex justify-between">
        {/* logo */}
        <div>
          <a href="#" class="flex items-center py-5">
            <svg class="h-8 w-8 mr-2 text-purple-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" />
            </svg>
            <span class="font-bold text-2xl">Greg's Music</span>
          </a>
        </div>

        {/* primary nav */}
        <div class="hidden sm:flex items-center space-x-1">
          <a href="#"
            class="py-1 px-3 text-gray-700 link link-underline link-underline-black no-underline">Rozwiązania</a>
          <a href="#" class="py-1 px-3 text-gray-700 link link-underline link-underline-black no-underline">Branże</a>
          <a href="#" class="py-1 px-3 text-gray-700 link link-underline link-underline-black no-underline">Demo</a>
          <a href="#" class="py-1 px-3 text-gray-700 link link-underline link-underline-black no-underline">Baza
            wiedzy</a>
        </div>
        {/* mobile version */}
        <div class="sm:hidden flex items-center">
          <button class="mobile-menu-button" onClick={handleMenuToggle}>
            <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </div>
      <div className={`mobile-menu ${isMenuVisible ? '' : 'hidden'}`} class="mobile-menu hidden sm:hidden pb-4">
        <a href="#"
          class="block py-3 px-4 text-base text-gray-700 link link-underline link-underline-black">Rozwiązania</a>
        <a href="#" class="block py-2 px-4 text-base text-gray-700 link link-underline link-underline-black">Branże</a>
        <a href="#" class="block py-2 px-4 text-base text-gray-700 link link-underline link-underline-black">Demo</a>
        <a href="#" class="block py-2 px-4 text-base text-gray-700 link link-underline link-underline-black">Baza</a>
      </div>
    </div>
  </nav>
    );
}

export default Menu;