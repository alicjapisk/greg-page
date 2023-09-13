import React, { useEffect } from "react";
import bgTiles from "../../assets/img/bgTiles.jpg";
import people from "../../assets/img/people.jpg";
import phone from "../../assets/img/harmony-phone.png";
import person1 from "../../assets/img/person1.jpg";
import person2 from "../../assets/img/person2.jpg";
import person3 from "../../assets/img/person3.jpg";
import stars from "../../assets/img/stars.png";
import arrow from "../../assets/img/arrow.svg";
import digitalSignage from "../../assets/img/tailwind.config.jpeg";
import Glide from "@glidejs/glide";
import "../../assets/img/glide.core.min.css";
import "../../assets/img/glide.theme.min.css";

function Main() {
  useEffect(() => {
    window.addEventListener("load", (event) => {
      new Glide(".glide", {
        type: "carousel",
        perView: 1,
        focusAt: "center",
        autoplay: 15000,
      }).mount();
    });
  });

  return (
    <div>
      {/* tiles */}
      <div class="lg:container lg:mx-auto text-center">
        <p class="md:text-2xl text-xl pt-16 text-gray-700">Pełny zakres</p>
        <h2 class="md:text-4xl text-3xl mt-2 text-gray-700 mx-10">
          <b>Rozwiązania digitalowe</b>
        </h2>
        <p class="md:text-xl text-base text-center pt-4 text-gray-700 mx-10 ">
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
                    <h1 class="text-white">JEDNO ROZWIĄZANIE.</h1>
                    <h1 class="text-black">NIESKOŃCZONE MOŻLIWOŚCI.</h1>
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
                        <img src={arrow} alt="arrow" class="w-6 h-6 " />
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
      <p class="text-center text-4xl font-semibold px-10 pt-20">
        What Our Customers Say
      </p>
      {/* Opinie klientów */}
      <div class="mx-auto w-11/12 bg-white pt-10 sm:pl-10 sm:pr-10 sm:pb-10 pb-0">
        <div class="glide">
          <div class="glide__track" data-glide-el="track">
            <ul class="glide__slides">
              {/* 1 person */}
              <li class="glide__slide">
                <div class="flex justify-center">
                  <div class="flex flex-col">
                    <img
                      src={person1}
                      alt="person"
                      class="rounded-full h-42 w-40 sm:mr-1 border-4 border-cyan-600 shadow-lg"
                    />
                    <img
                      src={stars}
                      alt="stars"
                      class="rounded-full scale-75 h-42 w-40 mt-5"
                    />
                  </div>
                </div>
                <div class="flex flex-col items-center xl:flex-row xl:justify-center text-center lg:relative md:px-16 px-0 py-3">
                  <div class="sm:text-center">
                    <p class="px-10 pb-16 text-lg italic text-[#293a40]">
                      „Wybraliśmy Mood Media, ponieważ system CMS (Harmony)
                      spełnia wszystkie nasze wymagania, jeśli chodzi o
                      elastyczność i proaktywne zarządzanie contentem w sklepie.
                      Harmony to również dobry kompromis pomiędzy kosztem a
                      funkcjonalnością, co potwierdza fakt, że platforma została
                      wybrana przez nas w postępowaniu przetargowym. Warto
                      zaznaczyć, że równie ważne jak powyższe są relacje, jakie
                      mamy z Mood Media. Zespół ds. obsługi klienta zawsze służy
                      wsparciem i reaguje szybko. Dużą zaletą jest również
                      obsługa klienta w kwestiach technicznych. Bardzo doceniamy
                      to, jak sprawnie sklepy otrzymują potrzebne im wsparcie.”
                    </p>
                    <p class="text-lg italic text-center lg:absolute lg:-bottom-5 lg:text-lg lg:right-0 lg:pr-32 lg:pb-10 lg:italic">
                      <span class="font-bold text-[#293a40]">
                        Lucyna Tomczyk -
                      </span>{" "}
                      Auto Gaz Serwis Dariusz Tomczyk -
                      <a href="#" class="text-cyan-600">
                        Kliknij i zweryfikuj ➜
                      </a>
                    </p>
                  </div>
                </div>
              </li>
              {/* 2 person  */}
              <li class="glide__slide">
                <div class="flex justify-center">
                  <div class="flex flex-col">
                    <img
                      src={person2}
                      alt="person"
                      class="rounded-full h-42 w-40 sm:mr-1 border-4 border-cyan-600 shadow-lg"
                    />
                    <img
                      src={stars}
                      alt="stars"
                      class="rounded-full scale-75 h-42 w-40 mt-5"
                    />
                  </div>
                </div>
                <div class="flex flex-col items-center xl:flex-row xl:justify-center text-center lg:relative md:px-16 px-0 py-3">
                  <div class="sm:text-center">
                    <p class="px-10 pb-16 text-lg italic text-[#293a40]">
                      „Dzięki zastosowaniu marketingu zapachowego w głównym
                      wejściu, nasi goście i pracownicy, wchodząc do hubu czują
                      się odprężeni, co odzwierciedla atmosferę, którą chcemy
                      tworzyć w Microsoft. Muzyka w tle również sprawia, że
                      ludzie czują się szczęśliwsi i nadaje zarówno strefie
                      lobby jak restauracji przyjaznego i domowego charakteru.”
                    </p>
                    <p class="text-lg italic text-center lg:absolute lg:-bottom-5 lg:text-lg lg:right-0 lg:pr-32 lg:pb-10 lg:italic">
                      <span class="font-bold text-[#293a40]">
                        Robert T. Zaborowski -
                      </span>{" "}
                      KARO - agencja reklamowa -
                      <a href="#" class="text-cyan-600">
                        Kliknij i zweryfikuj ➜
                      </a>
                    </p>
                  </div>
                </div>
              </li>
              {/* 3 pearson */}
              <li class="glide__slide">
                <div class="flex justify-center">
                  <div class="flex flex-col">
                    <img
                      src={person3}
                      alt="person"
                      class="rounded-full h-42 w-40 sm:mr-1 border-4 border-cyan-600 shadow-lg"
                    />
                    <img
                      src={stars}
                      alt="stars"
                      class="rounded-full scale-75 h-42 w-40 mt-5"
                    />
                  </div>
                </div>
                <div class="flex flex-col items-center xl:flex-row xl:justify-center text-center lg:relative md:px-16 px-0 py-3">
                  <div class="sm:text-center">
                    <p class="px-10 pb-16 text-lg italic text-[#293a40]">
                      „Jeśli chodzi o doświadczenie klientów w naszych
                      placówkach, potrzebowaliśmy dostawcy, który zapewni nam
                      świetną muzykę i elastyczne formy komunikatów w
                      przystępnej cenie. Muzyka jest często aktualizowana, a
                      naszym pracownikom i klientom bardzo podoba się to, co
                      słyszą. Komunikaty wywarły pozytywny wpływ na wynik firmy,
                      a firma Mood jest bardzo responsywna. Otrzymaliśmy spójną
                      całość – i jest on niezmiennie doskonały we wszystkich
                      naszych lokalizacjach. Gorąco polecam firmę Mood –
                      ułatwili mi pracę, ułatwią ją również Tobie.”
                    </p>
                    <p class="text-lg italic text-center lg:absolute lg:-bottom-5 lg:text-lg lg:right-0 lg:pr-32 lg:pb-12 lg:italic">
                      <span class="font-bold text-[#293a40]">
                        Łukasz Milewski -
                      </span>{" "}
                      Łukasz Milewski Consulting-
                      <a href="#" class="text-cyan-600">
                        Kliknij i zweryfikuj ➜
                      </a>
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div
            class="glide__arrows invisible md:visible"
            data-glide-el="controls"
          >
            <button class="glide__arrow glide__arrow--left" data-glide-dir="<">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11"
                height="20"
                id="arrow"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.634.292a1.063 1.063 0 0 0-1.464 0L.607 8.556a1.95 1.95 0 0 0 0 2.827l8.625 8.325c.4.385 1.048.39 1.454.01a.975.975 0 0 0 .01-1.425l-7.893-7.617a.975.975 0 0 1 0-1.414l7.83-7.557a.974.974 0 0 0 0-1.413"
                ></path>
              </svg>{" "}
            </button>
            <button class="glide__arrow glide__arrow--right" data-glide-dir=">">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11"
                height="20"
                id="arrow"
              >
                <path
                  fill-rule="evenodd"
                  d="M.366 19.708c.405.39 1.06.39 1.464 0l8.563-8.264a1.95 1.95 0 0 0 0-2.827L1.768.292A1.063 1.063 0 0 0 .314.282a.976.976 0 0 0-.011 1.425l7.894 7.617a.975.975 0 0 1 0 1.414L.366 18.295a.974.974 0 0 0 0 1.413"
                ></path>
              </svg>
            </button>
          </div>
          <div class="flex justify-center">
            <div
              class="absolute sm:-bottom-5 flex-none -bottom-10 glide__bullets"
              data-glide-el="controls[nav]"
            >
              <button class="glide__bullet" data-glide-dir="=0"></button>
              <button class="glide__bullet" data-glide-dir="=1"></button>
              <button class="glide__bullet" data-glide-dir="=2"></button>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-gray-150">
        <div class="lg:container lg:mx-auto text-center mx-10 mt-10">
          <div class="relative">
            <div class="flex justify-center lg:pt-20 lg:pb-10 lg:px-0 md:pt-32 md:pb-28 md:px-10 pb-10 mx-10 pt-10">
              <div class="flex md:flex-row-reverse flex-col gap-6 w-128">
                {/* tekst 1 segmentu */}
                <div class="text-left z-10 md:w-114">
                  <div class="md:text-6xl text-4xl pb-4 font-bold">
                    <h1>Zasoby branżowe</h1>
                  </div>
                  <div class="leading-7 md:text-lg text-base">
                    <p>
                      Zapoznaj się z naszymi artykułami i białymi księgami, aby
                      być na bieżąco z najnowszymi trendami w Customer
                      Experience
                    </p>
                  </div>
                  {/* przyciski */}
                  <div class="flex flex-col">
                    <a
                      href="#_"
                      class="relative inline-flex items-center justify-start px-6 py-3 mt-5 overflow-hidden font-medium transition-all bg-white rounded-full hover:bg-white group"
                    >
                      <span class="w-48 h-48 rounded rotate-[-40deg] bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-12 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                      <span class="relative w-full md:text-left text-center text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                        NASZE ZASOBY
                      </span>
                    </a>
                    <a
                      href="#_"
                      class="relative inline-flex items-center justify-start px-6 py-3 mt-5 overflow-hidden font-medium transition-all bg-white rounded-full hover:bg-white group"
                    >
                      <span class="w-48 h-48 rounded rotate-[-40deg] bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 md:ml-12 ml-14 md:group-hover:ml-0 group-hover:ml-2 group-hover:mb-32 group-hover:translate-x-0"></span>
                      <span class="relative w-full md:text-left text-center text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                        STUDIA PRZYPADKÓW
                      </span>
                    </a>
                  </div>
                </div>
                <div>
                  <img
                    decoding="async"
                    width="500"
                    height="504"
                    src={digitalSignage}
                    alt=""
                    title="resource-home-m"
                    srcset="https://moodmedia.com/wp-content/uploads/2021/11/resource-home-m.jpg 500w, https://moodmedia.com/wp-content/uploads/2021/11/resource-home-m-480x484.jpg 480w"
                    sizes="(min-width: 0px) and (max-width: 480px) 480px, (min-width: 481px) 500px, 100vw"
                    class="wp-image-116841 lg:pt-0 pt-8 scale-105 mr-28 pb-10"
                    loading="lazy"
                    fetchpriority="low"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Twoja podróż zaczyna się tutaj */}
      <div class="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
        <div class="flex flex-col text-center px-10 py-20">
          <h1 class="md:text-5xl text-4xl font-bold pb-5 text-white">
            Twoja podróż zaczyna się tutaj
          </h1>
          <a
            href="#_"
            class="relative inline-flex items-center justify-center p-4 px-6 py-3 xl:mx-96 my-3 mx-10 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 borderwhite rounded-full shadow-md group"
          >
            <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-transparent group-hover:translate-x-0 ease">
              <img src={arrow} alt="arrow" class="w-6 h-6" />
            </span>
            <span class="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">
              DOWIEDZ SIĘ WIĘCEJ
            </span>
            <span class="relative invisible">Button Text</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Main;
