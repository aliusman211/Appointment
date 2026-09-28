

import { FiSearch } from "react-icons/fi";
import hero from "../assets/hero.png";
import filterIcon from "../assets/Group 13.png";

function About() {
  return (
    <section
      className="relative flex min-h-[620px] w-full items-center justify-center overflow-hidden bg-cover bg-center px-4 sm:min-h-[650px] md:px-6 lg:min-h-[550px]"
      style={{
        backgroundImage: `url(${hero})`,
      }}
    >
      <div className="absolute inset-0 "></div>
      <div className="relative z-10 flex w-full max-w-[1000px] flex-col items-center px-2 text-center ">
        <h1
          className="
            
            max-w-[900px]
            text-[20px]
            font-bold
            leading-13
            text-white
            sm:mt-8
            sm:text-[34px]
            md:mt-4
            tracking-tight
            md:text-[40px]
            lg:text-[55px]
          "
        >
          Discover Top Beauticians <br /> Near You
        </h1>
        <p
          className="
            
            max-w-[850px]
            text-[16px]
            leading-4
            text-white
            sm:mt-1
            sm:text-[20px]
            sm:leading-8
            md:text-[24px]
            md:leading-7
            lg:text-[17px]
          "
        >
          Book trusted beauty experts for makeup, skincare, and salon
          <br className="hidden sm:block" />
          services — all in one place.
        </p>
        <div
          className="
            
            flex
            h-[58px]
            w-full
            max-w-[600px]
            items-center
            rounded-[14px]
            bg-white
            px-4
            shadow-lg
            sm:mt-6
            tracking-tight
            sm:h-[45px]
            sm:rounded-full
            sm:px-5
          "
        >
          <FiSearch
            size={10}
            strokeWidth={1.5}
            className="mr-3 shrink-0 text-[#6E6E6E] sm:mr-2 sm:h-[28px] sm:w-[17px]"
          />
          <input
            type="text"
            placeholder="Search by service, city, or beautician name..."
            className="
              min-w-0
              flex-1
              bg-transparent
              text-[14px]
              cursor-pointer
              text-gray-800
              outline-none
              placeholder:text-[#6E6E6E]
              sm:text-[17px]
              md:text-[15px]
            "
          />
          <button
            type="button"
            className="
              ml-2
              flex
              shrink-0
              items-center
              justify-center
              sm:ml-3
            "
            aria-label="Filter search"
          >
            <img
              src={filterIcon}
              alt="Filter"
              className="h-[20px] w-[20px] object-contain sm:h-[21px] sm:w-[21px]"
            />
          </button>
        </div>
        <div
          className="
            mt-2
            flex
            w-full
            flex-col
            items-center
            gap-3
            sm:mt-6
            sm:flex-row
            sm:justify-center
            sm:gap-4
          "
        >
          <button
            type="button"
            className="
              h-[52px]
              w-full
              max-w-[280px]
              rounded-full
              bg-[#212120]
              px-6
              text-[16px]
              cursor-pointer
              text-white
              transition
              hover:bg-[#333]
              sm:h-[40px]
              sm:w-[150px]
              sm:text-[14px]
            "
          >
            Book Experience
          </button>

          <button
            type="button"
            className="
              h-[52px]
              w-full
              max-w-[280px]
              rounded-full
              bg-white
              px-6
              font-medium
              text-[16px]
              text-black
              transition
              cursor-pointer
              hover:bg-gray-200
              sm:h-[40px]
              sm:w-[183px]
              sm:text-[14px]
            "
          >
            Apply as Professional
          </button>
        </div>
      </div>
    </section>
  );
}

export default About;