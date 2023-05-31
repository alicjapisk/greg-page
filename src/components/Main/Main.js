import React from "react";
import bgTiles from "../../images/bgTiles.jpg";
import people from "../../images/people.jpg";
import phone from "../../images/harmony-phone.png";

function Main() {
  return (
    <div>
      {/* tiles */}
      <div class="lg:container lg:mx-auto text-center">
        <p class="md:text-2xl text-xl pt-16 text-gray-700">Pełny zakres</p>
        <h2 class="md:text-4xl text-3xl mt-2 text-gray-700 mx-10">
          <b>Rozwiązania digitalowe</b>
        </h2>
        <p class="md:text-xl text-base text-center pt-4 text-gray-700 mx-10">
          Eksperci muzyczni, artyści digitalowi, twórcy contentu i mistrzowie
          obsługi klienta – wszyscy zmotywowani, by wnieść świeże spojrzenie do
          każdego projektowanego Doświadczenia Klienta. Pełne sukcesów
          dziedzictwo wspierane przez globalną sieć serwisową jest najlepszym
          świadectwem o naszej pozycji rynkowej. Sukces zawdzięczamy naszej
          pasji.
        </p>
        <div class="flex justify-center mx-10">
          <div class="grid lg:grid-cols-3 my-8 md:grid-cols-2 grid-cols-1 gap-8 text-gray-550 w-128">
            {/* 1 tile */}
            <a
              href="music.html"
              class="border-none shadow-3xl text-center leading-8 basis-1/2 flex flex-col justify-center items-center
            relative scale-100 hover:scale-105 ease-in duration-200"
            >
              <img class="rounded-xl" src={bgTiles} alt="bg" />

              <div class="absolute text-gray-100 px-8">
                <p class="text-xl">
                  <b>MUZYKA</b>
                </p>
                <p>
                  Znajdź swój dźwięk. Mood ma idealne rozwiązanie muzyczne dla
                  Twojej marki i budżetu.
                </p>
              </div>
            </a>

            {/* 2 tile */}
            <div class="border-none shadow-3xl text-center leading-8 basis-1/2 flex flex-col justify-center items-center relative scale-100 hover:scale-105 ease-in duration-200">
              <img class="rounded-xl" src={bgTiles} alt="bg" />
              <div class="absolute text-gray-100 px-8">
                <p class="text-xl">
                  <b>KOMUNIKATY GŁOSOWE</b>
                </p>
                <p>
                  Wykorzystaj każdą chwilę dzięki markowym komunikatom w sklepie
                  i na poczcie.
                </p>
              </div>
            </div>
            {/* 3 tile */}
            <div class="border-none shadow-3xl text-center leading-8 basis-1/2 flex flex-col justify-center items-center relative scale-100 hover:scale-105 ease-in duration-200">
              <img class="rounded-xl" src={bgTiles} alt="bg" />
              <div class="absolute text-gray-100 px-8">
                <p class="text-xl">
                  <b>ZAPACH</b>
                </p>
                <p>
                  Wykorzystaj moc pamięci zapachowej, aby stworzyć niezapomniane
                  wrażenia.
                </p>
              </div>
            </div>
            {/* 4 tile */}
            <div class="border-none shadow-3xl text-center leading-8 basis-1/2 flex flex-col justify-center items-center relative scale-100 hover:scale-105 ease-in duration-200">
              <img class="rounded-xl" src={bgTiles} alt="bg" />
              <div class="absolute text-gray-100 px-8">
                <p class="text-xl">
                  <b>OZNAKOWANIE CYFROWE</b>
                </p>
                <p>
                  Zaangażuj swoich odbiorców i sprzedawaj więcej dzięki
                  atrakcyjnym i informacyjnym rozwiązaniom wizualnym.
                </p>
              </div>
            </div>
            {/* 5 tile */}
            <div class="border-none shadow-3xl text-center leading-8 basis-1/2 flex flex-col justify-center items-center relative scale-100 hover:scale-105 ease-in duration-200">
              <img class="rounded-xl" src={bgTiles} alt="bg" />
              <div class="absolute text-gray-100 px-8">
                <p class="text-xl">
                  <b>MUSIC</b>
                </p>
                <p>
                  Find your sound. Mood has the perfect music solution for your
                  brand and budget.
                </p>
              </div>
            </div>
            {/* 6 tile */}
            <div class="border-none shadow-3xl md:text-left text-center leading-8 basis-1/2 flex flex-col justify-center md:items-start items-center md:pl-4 pl-0 pt-2">
              <p class="text-gray-700 md:text-3xl text-2xl font-bold">
                Skontaktuj się z nami już dziś, aby dowiedzieć się, co nasze
                rozwiązania mogą zrobić dla Twojej firmy.
              </p>
              <div class="flex flex-col">
                <a
                  href="#_"
                  class="relative inline-flex items-center justify-start px-6 py-3 mt-5 overflow-hidden font-medium transition-all bg-white rounded-full hover:bg-white group border-2 border-pink-500 hover:border-transparent"
                >
                  <span class="w-48 h-48 rounded rotate-[-40deg] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-14 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                  <span class="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                    Skontaktuj się z nami!
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="lg:container lg:mx-auto">
        <div class="relative">
          <div class="flex justify-center lg:pt-20 lg:pb-20 lg:px-0 md:pt-32 md:pb-28 md:px-10 pb-10 mx-10 pt-10">
            <div class="flex lg:flex-row flex-col w-128 gap-10">
              {/* tekst 1 segmentu */}
              <div class="md:text-left z-10 md:w-114 basis-1/2">
                <div class="md:text-6xl text-4xl pb-4 leading-12">
                  <h2 class="md:text-7xl text-4xl font-bold leading-12 pb-3">
                    O MOOD MEDIA
                  </h2>
                  <p class="text-lg pb-2 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 font-semibold">
                    ŚWIATOWY LIDER W BUDOWIE DOŚWIADCZEŃ KLIENTA
                  </p>
                  <p class="md:text-lg text-base leading-7 text-left">
                    Mood Media to światowy lider w dziedzinie rozwiązań
                    mediowych ukierunkowanych na rozwój Doświadczenia Klienta
                    dedykowanych dla sklepów. Wzmacniamy więzi emocjonalne
                    powstałe między markami a konsumentami dzięki zastosowaniu
                    odpowiedniej mieszanki rozwiązań wizualnych, dźwiękowych,
                    zapachowych i systemowych. Każdego dnia docieramy do ponad
                    150 milionów konsumentów za pośrednictwem ponad 500 000
                    punktów w ponad 100 krajach na świecie.
                  </p>
                </div>
              </div>
              <div class="basis-1/2">
                <img class="rounded-xl" src={people} alt="working people" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* One solution */}
      <div class="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
        <div class="lg:container lg:mx-auto text-center mx-10">
          <div class="relative">
            <div class="flex justify-center lg:pt-20 lg:pb-10 lg:px-0 md:pt-32 md:pb-28 md:px-10 pb-10 mx-10 pt-10">
              <div class="flex md:flex-row flex-col w-128">
                {/* tekst 1 segmentu */}
                <div class="text-left z-10 md:w-114">
                  <div class="md:text-6xl text-4xl pb-4 font-bold">
                    <h1 class="text-white">
                      JEDNO ROZWIĄZANIE.
                      <span class="text-black">NIESKOŃCZONE MOŻLIWOŚCI.</span>
                    </h1>
                  </div>
                  <div class="leading-7 text-white text-left md:text-lg text-base">
                    <p>
                      Pożegnaj się z wieloma dostawcami i panelami
                      administracyjnymi. Oto Harmony, platforma Brand Experience
                      nowej generacji. To kompleksowe rozwiązanie brandingowe
                      obsługujące obszary wizualny, dzwiękowy, zapachowy,
                      społecznościowy i systemowy. Zarządzanie mediami w sklepie
                      nigdy nie było tak łatwe, inteligentne i bardziej
                      przystępne cenowo. Twórz i kontroluj Doświadczenia
                      Klientów za pomocą Harmony.
                    </p>
                  </div>
                  {/* przyciski */}

                  <div class="flex flex-col mt-5">
                    <a
                      href="#_"
                      class="relative inline-flex items-center justify-center  p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 borderwhite rounded-full shadow-md group"
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
                  <img
                    src={phone}
                    alt="phone"
                    class="wp-image-22474 lg:pt-0 pt-8 scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
