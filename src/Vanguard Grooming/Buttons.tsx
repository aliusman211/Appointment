import React, { useState } from "react";

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
    "Professional haircuts, beard grooming, styling, and classic barber services.",
  "Hair Salon":
    "Professional hair styling, cutting, treatments, and personalized salon services.",
  Massage:
    "Relaxing and therapeutic massage treatments designed to refresh your body and mind.",
  Makeup:
    "Professional makeup services for events, special occasions, and everyday looks.",
  "Nail Care":
    "Manicure, pedicure, nail styling, and complete nail care services.",
  "Skin Care":
    "Personalized skincare treatments designed to refresh and improve your skin.",
  Facials:
    "Professional facial treatments focused on cleansing, hydration, and skin renewal.",
  Waxing:
    "Professional waxing services for smooth and long-lasting results.",
  "Hair Color":
    "Professional hair coloring, highlights, balayage, and color treatments.",
};

export default function Buttons() {
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState<string | null>(null);

  // CITY CLICK
  const handleCityClick = (city: string) => {
    if (selectedCity === city) {
      setSelectedCity(null);
      setSelectedService(null);
    } else {
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
    <section
      className="
        w-full
        px-5
        
        pt-[10px]
        sm:px-8
        sm:pt-[px]
        md:px-10
        lg:px-[10px]
        lg:pt-[10px]
      "
    >
      {/* Heading */}
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

      {/* Cities Container */}
      <div
        className="
          mx-auto
          mt-[50px]
          w-full
          max-w-[1100px]
          overflow-visible
        "
      >
        {/* DESKTOP */}
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
                    {/* CITY BUTTON */}
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

                    {/* SERVICES */}
                    {isOpen && (
                      <div className="mt-[10px] w-full">
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
                          <div className="flex flex-col">
                            {services.map((service) => {
                              const serviceOpen =
                                selectedService === service;

                              return (
                                <div
                                  key={service}
                                  className="w-full"
                                >
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
                                    <span>{service}</span>

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

        {/* MOBILE */}
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
                className="relative w-full"
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
                  <span>{city.name}</span>

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

                {/* SERVICES */}
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
  );
}