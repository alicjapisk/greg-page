import React from "react";
import music from "../../assets/img/music2.png";

function Header() {
  return (
    <div class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div class="lg:container lg:mx-auto text-center">
        <div class="relative">
          <div class="flex justify-center lg:pt-24 lg:px-0 md:pt-32 md:px-10 lg:pb-28 mx-10 pt-20 pb-10">
            <div class="flex lg:flex-row text-gray-100 flex-col w-128 lg:gap-36 gap-10">
              {/* tekst 1 segmentu */}
              <div class="text-left z-10 md:w-112">
                <h1 class="md:text-6xl text-4xl pb-4 font-bold leading-12">
                  DOSKONAŁE DOŚWIADCZENIE KLIENTA
                </h1>
                <div class="leading-9 text-lg">
                  <p>
                    Rozwiązania wykorzystujące sklepowe nośniki informacyjne,
                    które pomogą stworzyć więź z klientami, rozwinąć biznes i
                    wzmocnić wizerunek marki
                  </p>
                </div>
                {/* przyciski */}
                <div class="flex flex-col gap-5">
                  <a
                    href="#_"
                    class="relative inline-flex items-center justify-start px-6 py-3 mt-5 overflow-hidden font-medium transition-all bg-white rounded-full hover:bg-white group"
                  >
                    <span class="w-48 h-48 rounded rotate-[-40deg] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-12 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                    <span class="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                      POZNAJ MOZLIWOŚCI
                    </span>
                  </a>

                  <a
                    href="#_"
                    class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 borderwhite rounded-full shadow-md group"
                  >
                    <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-transparent group-hover:translate-x-0 ease">
                      <svg
                        class="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        ></path>
                      </svg>
                    </span>
                    <span class="absolute flex items-center justify-left w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease ml-9">
                      POPROŚ O WIĘCEJ INFORMACJI
                    </span>
                    <span class="relative invisible">Button Text</span>
                  </a>
                </div>
              </div>
              <div>
                <img src={music} alt="icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
