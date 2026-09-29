import  { useState } from "react";

type City = {
  name: string;
};

const cities: City[] = [
  { name: "New York" },
  { name: "Los Angeles" },
  { name: "Chicago" },
  { name: "Houston" },
  { name: "Phoenix" },
  { name: "Philadelphia" },

  { name: "San Antonio" },
  { name: "San Diego" },
  { name: "Dallas" },
  { name: "San Jose" },
  { name: "Austin" },

  { name: "San Francisco" },
  { name: "Fort Worth" },
  { name: "Indianapolis" },
  { name: "Charlotte" },
  { name: "Seattle" },

  { name: "Denver" },
  { name: "Boston" },
  { name: "El Paso" },
  { name: "Detroit" },
  { name: "Nashville" },

  { name: "Oklahoma City" },
  { name: "Las Vegas" },
  { name: "Milwaukee" },
  { name: "Albuquerque" },
  { name: "Tucson" },

  { name: "Fresno" },
  { name: "Long Beach" },
  { name: "Kansas City" },
  { name: "Mesa" },
  { name: "Virginia Beach" },

  { name: "Jacksonville" },
  { name: "Columbus" },
  { name: "Washington" },
  { name: "Portland" },
  { name: "Sacramento" },
];

const services = [
  "Barbershop",
  "Hair Salon",
  "Massage",
  "Makeup",
  "Nail Care",
  "Skin Care",
  "Facials",
  "Waxing",
  "Hair Color",
];

const serviceDescriptions: Record<string, string> = {
  Barbershop:
    "Discover premium barbershops offering refined cuts, grooming and styling experiences.",

  "Hair Salon":
    "Find professional hair salons for styling, coloring, treatments and complete hair care.",

  Massage:
    "Explore relaxing massage experiences designed to help you refresh and unwind.",

  Makeup:
    "Discover professional makeup artists for everyday looks, events and special occasions.",

  "Nail Care":
    "Find premium nail care experiences including manicures, pedicures and modern nail styling.",

  "Skin Care":
    "Explore professional skincare experiences focused on healthy, glowing and refreshed skin.",

  Facials:
    "Discover facial treatments designed for relaxation, hydration and professional skincare.",

  Waxing:
    "Find trusted waxing professionals for smooth and comfortable grooming experiences.",

  "Hair Color":
    "Explore professional hair color specialists for highlights, coloring and creative styles.",
};

export default function ElevateExperience() {
  const [selectedCity, setSelectedCity] = useState<string | null>(null);

  const [selectedService, setSelectedService] = useState<string | null>(null);

  // CITY CLICK
  const handleCityClick = (city: string) => {
    if (selectedCity === city) {
      // Same button clicked again = close
      setSelectedCity(null);
      setSelectedService(null);
    } else {
      // New city clicked = open only this city
      setSelectedCity(city);
      setSelectedService(null);
    }
  };

  // SERVICE CLICK
  const handleServiceClick = (service: string) => {
    if (selectedService === service) {
      setSelectedService(null);
    } else {
      setSelectedService(service);
    }
  };

  return (
    <main className="w-full ">

  

      <section
        className="
          relative
          mt-[80px]
          flex
          min-h-[330px]
          w-full
          items-center
          justify-center
          overflow-hidden
          bg-cover
          bg-center
          bg-no-repeat
          sm:min-h-[340px]
          md:min-h-[360px]
        "
        style={{
          backgroundImage: "url('/Rectangle 38.png')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0" />

        {/* Content */}
        <div
          className="
            relative
            z-10
            mx-auto
            flex
            w-full
            max-w-[950px]
            flex-col
            items-center
            justify-center
            px-5
            py-16
            text-center
            sm:px-8
            md:py-20
          "
        >
          <h1
            className="
            
              text-[30px]
              font-bold
              leading-[1.15]
              tracking-[-0.5px]
              text-white
              sm:text-[34px]
              md:text-[30px]
            "
          >
            Ready to elevate your experience?
          </h1>

          <p
            className="
              mt-3
              max-w-[760px]
              text-[15px]
              leading-[1.5]
              text-white
              sm:text-[16px]
            "
          >
            Whether you're booking your next appointment or growing your
            business,
            <br className="hidden sm:block" />
            AppointSet is built for you.
          </p>

          <div
            className="
              mt-7
              flex
              w-full
              flex-col
              items-center
              gap-4
              sm:w-auto
              sm:flex-row
              sm:gap-2
            "
          >
            <button
              type="button"
              className="
                flex
                h-[50px]
                w-full
                items-center
                justify-center
                rounded-full
                bg-white
                cursor-pointer
                px-8
                text-[16px]
                font-medium
                text-black
                transition
                hover:bg-[#eeeeee]
                sm:w-[190px]
              "
            >
              Book Experience
            </button>

            <button
              type="button"
              className="
                flex
                h-[50px]
                w-full
                items-center
                justify-center
                rounded-full
                border
                border-white
                bg-transparent
                px-8
                text-[16px]
                cursor-pointer
                font-medium
                text-white
                transition
                hover:bg-white
                hover:text-black
                sm:w-[220px]
              "
            >
              Apply as Professional
            </button>
          </div>
        </div>
      </section>

      {/* =========================================
          CITY SECTION
      ========================================= */}

      <section
        className="
          w-full
          
          px-5
          pb-[100px]
          pt-[110px]
          sm:px-8
          sm:pt-[130px]
          md:px-10
          lg:px-[50px]
          lg:pt-[170px]
        "
      >
        {/* HEADING */}

        <h2
          className="
            text-center
            text-[26px]
            font-bold
            leading-tight
            text-black
            sm:text-[30px]
            md:text-[34px]
          "
        >
          Discover refined experiences in your city
        </h2>

        {/* CITIES */}

         <div
    className="
      mx-auto
      mt-[50px]
      w-full
      max-w-[1100px]
      overflow-visible
    "
  >
    <div
      className="
        hidden
        gap-x-[18px]
        md:flex
        xl:gap-x-[20px]
      "
    >
      {[
        cities.slice(0, 6),
        cities.slice(6, 12),
        cities.slice(12, 18),
        cities.slice(18, 24),
        cities.slice(24, 30),
        cities.slice(30),
      ].map((columnCities, columnIndex) => (
        <div
          key={columnIndex}
          className="
            flex
            w-full
            min-w-0
            flex-col
            gap-[18px]
            self-start
          "
        >
          {columnCities.map((city) => {
            const isOpen = selectedCity === city.name;

            return (
              <div
                key={city.name}
                className="
                  relative
                  w-full
                  self-start
                "
              >
                {/* =====================================
                    CITY BUTTON
                ===================================== */}

                <button
                  type="button"
                  onClick={() => handleCityClick(city.name)}
                  aria-expanded={isOpen}
                  className="
                    relative
                    z-20
                    flex
                    h-[45px]
                    w-full
                    shrink-0
                    cursor-pointer
                    items-center
                    justify-center
                    gap-2
                    rounded-full
                    bg-gradient-to-b
                    from-[#080808]
                    via-[#222222]
                    to-[#444444]
                    px-3
                    text-[15px]
                    font-normal
                    text-white
                    shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]
                    transition
                    duration-300
                    hover:from-[#181818]
                    hover:via-[#333333]
                    hover:to-[#555555]
                    sm:h-[44px]
                    sm:text-[16px]
                  "
                >
                  <span className="truncate">
                    {city.name}
                  </span>

                  {/* ONLY CLICKED CITY GETS PLUS */}

                  {isOpen && (
                    <span
                      className="
                        flex
                        h-[18px]
                        w-[18px]
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-white
                        text-[15px]
                        font-bold
                        leading-none
                        text-black
                      "
                    >
                      +
                    </span>
                  )}
                </button>

                {isOpen && (
                  <div
                    className="
                      mt-[10px]
                      w-full
                    "
                  >
                    <div
                      className="
                        w-full
                        rounded-[12px]
                        bg-white
                        px-2
                        py-2
                        shadow-[0_10px_30px_rgba(0,0,0,0.15)]
                      "
                    >
                      {/* SERVICES */}

                      <div className="flex flex-col">
                        {services.map((service) => {
                          const serviceOpen =
                            selectedService === service;

                          return (
                            <div
                              key={service}
                              className="w-full"
                            >
                              {/* SERVICE BUTTON */}

                              <button
                                type="button"
                                onClick={() =>
                                  handleServiceClick(service)
                                }
                                className="
                                  flex
                                  min-h-[38px]
                                  w-full
                                  items-center
                                  justify-between
                                  rounded-[6px]
                                  px-3
                                  text-left
                                  text-[13px]
                                  font-bold
                                  text-black
                                  transition
                                  hover:bg-[#f3f3f3]
                                "
                              >
                                <span>
                                  {service}
                                </span>

                                {/* ONLY SELECTED SERVICE GETS PLUS */}

                                {serviceOpen && (
                                  <span
                                    className="
                                      flex
                                      h-[18px]
                                      w-[18px]
                                      shrink-0
                                      items-center
                                      justify-center
                                      rounded-full
                                      text-[15px]
                                      font-bold
                                      leading-none
                                      text-black
                                    "
                                  >
                                    +
                                  </span>
                                )}
                              </button>

                              {/* SERVICE DESCRIPTION */}

                              {serviceOpen && (
                                <div
                                  className="
                                    mx-1
                                    mb-2
                                    rounded-[8px]
                                    bg-[#202020]
                                    px-3
                                    py-3
                                  "
                                >
                                  <p
                                    className="
                                      text-[12px]
                                      leading-[1.6]
                                      text-[#bdbdbd]
                                    "
                                  >
                                    {
                                      serviceDescriptions[
                                        service
                                      ]
                                    }
                                  </p>

                                  <button
                                    type="button"
                                    className="
                                      mt-3
                                      rounded-full
                                      bg-white
                                      px-4
                                      py-2
                                      text-[11px]
                                      font-semibold
                                      text-black
                                      transition
                                      hover:bg-[#dddddd]
                                    "
                                  >
                                    Explore {service}
                                  </button>
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ))}
    </div>

    {/* ===================================================
        MOBILE

        On mobile one column is displayed.
    =================================================== */}

    <div
      className="
        flex
        flex-col
        gap-[18px]
        md:hidden
      "
    >
      {cities.map((city) => {
        const isOpen = selectedCity === city.name;

        return (
          <div
            key={city.name}
            className="
              relative
              w-full
            "
          >
            {/* CITY BUTTON */}

            <button
              type="button"
              onClick={() => handleCityClick(city.name)}
              aria-expanded={isOpen}
              className="
                flex
                h-[45px]
                w-full
                items-center
                justify-center
                gap-2
                rounded-full
                bg-gradient-to-b
                from-[#080808]
                via-[#222222]
                to-[#444444]
                px-4
                text-[16px]
                text-white
                shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]
                transition
                sm:h-[44px]
              "
            >
              <span>
                {city.name}
              </span>

              {isOpen && (
                <span
                  className="
                    flex
                    h-[18px]
                    w-[18px]
                    items-center
                    justify-center
                    rounded-full
                    bg-white
                    text-[15px]
                    font-bold
                    text-black
                  "
                >
                  +
                </span>
              )}
            </button>

            {/* CONTENT */}

            {isOpen && (
              <div
                className="
                  mt-[10px]
                  w-full
                  rounded-[12px]
                  bg-white
                  p-2
                  shadow-[0_10px_30px_rgba(0,0,0,0.15)]
                "
              >
                {services.map((service) => {
                  const serviceOpen =
                    selectedService === service;

                  return (
                    <div key={service}>
                      <button
                        type="button"
                        onClick={() =>
                          handleServiceClick(service)
                        }
                        className="
                          flex
                          min-h-[38px]
                          w-full
                          items-center
                          justify-between
                          px-3
                          text-left
                          text-[13px]
                          font-bold
                          text-black
                          hover:bg-[#f3f3f3]
                        "
                      >
                        <span>{service}</span>

                        {serviceOpen && (
                          <span
                            className="
                              flex
                              h-[18px]
                              w-[18px]
                              items-center
                              justify-center
                              text-[15px]
                              font-bold
                            "
                          >
                            +
                          </span>
                        )}
                      </button>

                      {serviceOpen && (
                        <div
                          className="
                            mx-1
                            mb-2
                            rounded-[8px]
                            bg-[#202020]
                            px-3
                            py-3
                          "
                        >
                          <p
                            className="
                              text-[12px]
                              leading-[1.6]
                              text-[#bdbdbd]
                            "
                          >
                            {
                              serviceDescriptions[
                                service
                              ]
                            }
                          </p>

                          <button
                            type="button"
                            className="
                              mt-3
                              rounded-full
                              bg-white
                              px-4
                              py-2
                              text-[11px]
                              font-semibold
                              text-black
                            "
                          >
                            Explore {service}
                          </button>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  </div>
      </section>
    </main>
  );
}