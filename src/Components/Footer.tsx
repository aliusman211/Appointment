import React from "react";

const navigation = [
  "Blog",
  "About Us",
  "FAQ",
  "Privacy Policy",
  "Terms of Service",
  "Contact",
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#1b1b1b] text-white">
      <div className="border-b border-[#444]">
        <div
          className="
            mx-auto
            flex
            min-h-[10px]
            w-full
            max-w-[1500px]
            items-center
            justify-between
            px-6
            py-4
            sm:px-10
            lg:px-[45px]
          "
        >
          <a
            href="/"
            className="flex flex-col items-center"
          >
            <div className="mb-[-5px] flex items-center justify-center">
              <img
                src="/icon1.png"
                alt="AppointSet"
                className="h-[35px] w-[35px] object-contain"
              />
            </div>

            {/* Logo Text */}
            <span
              className="
                font-serif
                text-[34px]
                leading-none
                tracking-[-1.5px]
                sm:text-[38px]
                lg:text-[42px]
              "
            >
              AppointSet
            </span>
          </a>

          {/* DESKTOP NAVIGATION */}
          <nav
            className="
              hidden
              items-center
              gap-7
              md:flex
              lg:gap-10
              xl:gap-[45px]
            "
          >
            {navigation.map((item) => (
              <a
                key={item}
                href="#"
                className="
                  whitespace-nowrap
                  text-[17px]
                  text-white
                  transition
                  duration-200
                  hover:text-[#bdbdbd]
                "
              >
                {item}
              </a>
            ))}
          </nav>

          {/* MOBILE MENU */}
          <button
            type="button"
            aria-label="Open menu"
            className="
              flex
              h-[42px]
              w-[42px]
              flex-col
              items-center
              justify-center
              gap-[5px]
              rounded-full
              border
              border-[#555]
              md:hidden
            "
          >
            <span className="h-[2px] w-5 bg-white" />
            <span className="h-[2px] w-5 bg-white" />
            <span className="h-[2px] w-5 bg-white" />
          </button>
        </div>
      </div>

      {/* ================= BOTTOM FOOTER ================= */}
      <div
        className="
          mx-auto
          flex
          min-h-[100px]
          w-full
          max-w-[1500px]
          items-center
          justify-between
          gap-8
          px-6
          py-4
          sm:px-10
          lg:px-[45px]
        "
      >
        {/* SOCIAL ICONS */}
        <div className="flex items-center gap-4">

          {/* FACEBOOK */}
          <a
            href="#"
            aria-label="Facebook"
            className="
              flex
              h-[41px]
              w-[41px]
              items-center
              justify-center
              rounded-full
              bg-white
              transition
              duration-200
              hover:scale-105
            "
          >
            <img
              src="/icon2.png"
              alt="Facebook"
              className="h-[22px] w-[22px] object-contain"
            />
          </a>

          {/* INSTAGRAM */}
          <a
            href="#"
            aria-label="Instagram"
            className="
              flex
              h-[41px]
              w-[41px]
              items-center
              justify-center
              rounded-full
              bg-white
              transition
              duration-200
              hover:scale-105
            "
          >
            <img
              src="/icon3.png"
              alt="Instagram"
              className="h-[22px] w-[22px] object-contain"
            />
          </a>

          {/* TWITTER */}
          <a
            href="#"
            aria-label="Twitter"
            className="
              flex
              h-[41px]
              w-[41px]
              items-center
              justify-center
              rounded-full
              bg-white
              transition
              duration-200
              hover:scale-105
            "
          >
            <img
              src="/icon4.png"
              alt="Twitter"
              className="h-[22px] w-[22px] object-contain"
            />
          </a>

          {/* LINKEDIN */}
          <a
            href="#"
            aria-label="LinkedIn"
            className="
              flex
              h-[41px]
              w-[41px]
              items-center
              justify-center
              rounded-full
              bg-white
              transition
              duration-200
              hover:scale-105
            "
          >
            <img
              src="/icon5.png"
              alt="LinkedIn"
              className="h-[22px] w-[22px] object-contain"
            />
          </a>
        </div>

        {/* APP DOWNLOAD BUTTONS */}
        <div className="flex items-center gap-3">

          {/* APP STORE */}
          <a
            href="#"
            className="
              flex
              h-[50px]
              w-[130px]
              items-center
              gap-2
              rounded-[8px]
              border
              border-white
              px-3
              text-white
              transition
              duration-200
              hover:bg-white
              hover:text-black
            "
          >
            <img
              src="/apple1.png"
              alt="App Store"
              className="h-[25px] w-[25px] object-contain"
            />

            <div className="flex flex-col leading-none">
              <span className="text-[9px]">
                Download from
              </span>

              <span className="mt-1 text-[13px] font-medium">
                App Store
              </span>
            </div>
          </a>

          {/* GOOGLE PLAY */}
          <a
            href="#"
            className="
              flex
              h-[50px]
              w-[130px]
              items-center
              gap-2
              rounded-[8px]
              border
              border-white
              px-3
              text-white
              transition
              duration-200
              hover:bg-white
              hover:text-black
            "
          >
            <img
              src="/googleplay3.png"
              alt="Google Play"
              className="h-[25px] w-[25px] object-contain"
            />

            <div className="flex flex-col leading-none">
              <span className="text-[9px]">
                Download from
              </span>

              <span className="mt-1 text-[13px] font-medium">
                Google Play
              </span>
            </div>
          </a>
        </div>
      </div>

      {/* ================= MOBILE NAVIGATION ================= */}
      <div className="border-t border-[#333] px-6 py-6 md:hidden">
        <div className="grid grid-cols-2 gap-x-6 gap-y-4">
          {navigation.map((item) => (
            <a
              key={item}
              href="#"
              className="
                text-[15px]
                text-[#ddd]
                transition
                hover:text-white
              "
            >
              {item}
            </a>
          ))}
        </div>
      </div>

    </footer>
  );
}