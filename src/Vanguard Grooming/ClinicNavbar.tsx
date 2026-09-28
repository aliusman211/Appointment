
import React, { useEffect, useState } from "react";
import clinicImage from "../assets/Vanguard grooming/clinic.png";

interface ClinicNavbarProps {
  open: () => void;
  onBookNow: () => void;
}

function ClinicNavbar({ open, onBookNow }: ClinicNavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
  <nav
      className={`
        fixed
        top-[4px]
        left-1/2
        -translate-x-1/2
        z-50

        flex
        items-center
        justify-between

        w-[calc(100%-24px)]
        min-h-[54px]
        px-3
        rounded-[8px]

        sm:w-[calc(100%-32px)]
        sm:min-h-[58px]
        sm:px-4

        md:w-[90%]
        md:min-h-[60px]
        md:px-5

        lg:w-[88%]
        lg:min-h-[64px]
        lg:px-6

        xl:w-[1200px]
        xl:min-h-[66px]
        xl:px-6

        border
        border-white/20
        shadow-lg
        transition-all
        duration-300

        ${
          isScrolled
            ? "bg-black/60 shadow-2xl backdrop-blur-md"
            : "bg-black"
        }
      `}
    >
      {/* LEFT SIDE */}
      <div
        className="
          flex
          min-w-0
          flex-1
          items-center
          gap-2

          sm:gap-2.5
          md:gap-3
        "
      >
        {/* LOGO */}
        <img
          src={clinicImage}
          alt="Lumina Dermal Lab"
          className="
            h-[36px]
            w-[36px]
            shrink-0
            rounded-full
            border
            border-white/70
            object-cover

            sm:h-[42px]
            sm:w-[42px]

            md:h-[46px]
            md:w-[46px]

            lg:h-[50px]
            lg:w-[50px]
          "
        />

        {/* TITLE + DESCRIPTION */}
        <div className="min-w-0 flex-1">
          <h2
            className="
              truncate
              font-bold
              leading-tight
              text-white

              text-[10px]

              sm:text-[12px]

              md:text-[14px]

              lg:text-[15px]
            "
          >
            Lumina Dermal Lab
          </h2>

          <p
            className="
              mt-[2px]
              truncate
              leading-tight
              text-[#d9d9d9]

              max-w-[150px]
              text-[7px]

              sm:max-w-[220px]
              sm:text-[9px]

              md:max-w-[300px]
              md:text-[11px]

              lg:max-w-none
              lg:text-[13px]
            "
          >
            Precision aesthetics. Refined clinical care
          </p>
        </div>
      </div>

      {/* BOOK NOW BUTTON */}
      <button
        type="button"
        onClick={onBookNow}
        className="
          flex
          shrink-0
          items-center
          justify-center

          rounded-full
          bg-white
          font-semibold
          text-black

          transition-all
          duration-200

          hover:bg-gray-200
          active:scale-95

          /* MOBILE */
          h-[30px]
          w-[68px]
          text-[8px]

          /* SMALL MOBILE */
          sm:h-[33px]
          sm:w-[78px]
          sm:text-[10px]

          /* TABLET */
          md:h-[36px]
          md:w-[90px]
          md:text-[12px]

          /* DESKTOP */
          lg:h-[40px]
          lg:w-[105px]
          lg:text-[14px]
        "
      >
        Book Now
      </button>
    </nav>
  );
}

export default ClinicNavbar;

