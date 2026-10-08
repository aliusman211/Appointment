

import { FiSearch } from "react-icons/fi";
import hero from "../assets/hero.png";
import filterIcon from "../assets/Group 13.png";

function About() {
  return (
    <section
      className="relative flex min-h-[600px] w-full items-center justify-center overflow-hidden bg-cover bg-center px-4 py-12 md:min-h-[650px] lg:min-h-[600px]"
      style={{ backgroundImage: `url(${hero})` }}
    >
      <div className="absolute inset-0 "></div>

      <div className="relative z-10 flex w-full max-w-[1000px] flex-col items-center text-center">
        <h1 className="max-w-[900px] text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-5xl lg:leading-[1.15]">
          Discover Top Beauticians <br /> Near You
        </h1>
        <p className="mt-4 max-w-[650px] text-base leading-relaxed text-gray-100 sm:text-lg md:text-xl lg:text-lg">
          Book trusted beauty experts for makeup, skincare, and salon{" "}
          <br className="hidden sm:block" /> services — all in one place.
        </p>
        <div className="mt-8 flex h-[54px] w-full max-w-[550px] items-center rounded-full bg-white px-4 shadow-xl transition-all focus-within:ring-2 focus-within:ring-white/20 md:h-[50px] md:px-5">
          <FiSearch className="mr-3 h-5 w-5 shrink-0 text-gray-500" />
          <input
            type="text"
            placeholder="Search by service, city, or beautician..."
            className="min-w-0 flex-1 bg-transparent text-sm text-gray-800 outline-none placeholder:text-gray-500 sm:text-base"
          />
          <button
            type="button"
            className="ml-2 flex h-8 w-8 shrink-0 items-center justify-center rounded-full hover:bg-gray-100 active:scale-95 transition"
            aria-label="Filter search"
          >
            <img
              src={filterIcon}
              alt="Filter"
              className="h-5 w-5 object-contain"
            />
          </button>
        </div>
        <div className="mt-6 flex w-full flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
          <button
            type="button"
            className="h-12 w-full max-w-[280px] rounded-full bg-[#212120] font-medium text-white transition hover:bg-[#333] active:scale-98 sm:w-[160px]"
          >
            Book Experience
          </button>
          <button
            type="button"
            className="h-12 w-full max-w-[280px] rounded-full bg-white font-medium text-black transition hover:bg-gray-100 active:scale-98 sm:w-[190px]"
          >
            Apply as Professional
          </button>
        </div>
      </div>
    </section>
  );
}

export default About;
