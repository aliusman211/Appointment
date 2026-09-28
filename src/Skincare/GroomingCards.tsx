
import React, { useRef } from "react";

import grooming1 from "../assets/Skincare/Grooming-1.jpg";
import grooming2 from "../assets/Skincare/Grooming-2.jpg";
import grooming3 from "../assets/Skincare/Grooming-3.jpg";
import grooming4 from "../assets/Skincare/Grooming-4.jpg";
import grooming5 from "../assets/Skincare/Grooming-5.jpg";

const cards = [
  {
    id: 1,
    image: grooming1,
    title: "Vanguard Grooming",
    address: "884 Heritage Oak Way, Suite 12, Winter Park...",
    category: "Precision Grooming",
    rating: "4.9",
    reviews: "117 review",
  },
  {
    id: 2,
    image: grooming2,
    title: "Vanguard Grooming",
    address: "884 Heritage Oak Way, Suite 12, Winter Park...",
    category: "Precision Grooming",
    rating: "4.9",
    reviews: "117 review",
  },
  {
    id: 3,
    image: grooming3,
    title: "Vanguard Grooming",
    address: "884 Heritage Oak Way, Suite 12, Winter Park...",
    category: "Precision Grooming",
    rating: "4.9",
    reviews: "117 review",
  },
  {
    id: 4,
    image: grooming4,
    title: "Vanguard Grooming",
    address: "884 Heritage Oak Way, Suite 12, Winter Park...",
    category: "Precision Grooming",
    rating: "4.9",
    reviews: "117 review",
  },
  {
    id: 5,
    image: grooming5,
    title: "Vanguard Grooming",
    address: "884 Heritage Oak Way, Suite 12, Winter Park...",
    category: "Precision Grooming",
    rating: "4.9",
    reviews: "117 review",
  },
];

export default function GroomingCards({ openClinicPage }) {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({
      left: -285,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({
      left: 285,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-45">

      {/* Heading */}
      <p className="px-4 text-[16px] font-semibold text-black sm:px-6 sm:text-[17px] md:px-10 lg:px-[60px] lg:text-[18px]">
        Skin Care Salon for Los Angeles, CA - Book Hair Stylist Near you (65)
      </p>

      <div className="relative mt-[38px]">

        {/* Cards */}
        <div
          ref={sliderRef}
          className="
            grid
            grid-cols-1
            gap-4
            px-4
            sm:grid-cols-2
            md:gap-2
            md:px-10
            lg:flex
            lg:gap-[13px]
            lg:px-[60px]
            [-ms-overflow-style:none]
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
          "
        >

          {cards.map((card) => (
            <div
              key={card.id}
              onClick={() => openClinicPage(card)}
              className="
                w-full
                cursor-pointer
                overflow-hidden
                rounded-[12px]
                border
                border-0.5
                bg-[#e8edf1]
                
                transition
                duration-300
                hover:scale-[1.02]

              
                h-[500px]

                lg:min-w-[270px]
                lg:max-w-[270px]
                lg:h-[410px]
              "
            >

              {/* Image */}
              <div className="h-[240px] rounded-lg overflow-hidden sm:h-[280px] lg:h-[222px]">
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="px-3 pb-4 pt-3">

                {/* Title + Favorite */}
                <div className="flex items-center justify-between gap-3">

                  <h2 className="truncate text-[16px] font-bold text-[#20252a] sm:text-[18px]">
                    {card.title}
                  </h2>

                  {/* Favorite Button */}
                  <button
                    onClick={(e) => e.stopPropagation()}
                    aria-label="Add to favorites"
                    className="flex h-9 w-9 shrink-0 items-center justify-center"
                  >
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                      fill="#E6E6E6"
                    >
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                  </button>

                </div>

                {/* Address */}
                <p className="mt-1 truncate text-[13px] font-semibold text-black sm:text-[14px]">
                  {card.address}
                </p>

                {/* Category */}
                <div className="mt-5">
                  <span className="inline-flex rounded-full border border-[#7D7D7D] bg-[#DBDBDB] px-3 py-2 text-[13px] font-medium text-black">
                    {card.category}
                  </span>
                </div>

                {/* Rating */}
                <div className="mt-4 flex items-center gap-2">
                  <span className="text-[16px] text-black">
                    {card.rating} ★
                  </span>

                  <span>
                    ({card.reviews})
                  </span>
                </div>

              </div>
            </div>
          ))}

        </div>

        {/* LEFT BUTTON */}
        <button
          onClick={scrollLeft}
          className="
            absolute
            left-[72px]
            top-1/2
            z-20
            hidden
            h-[35px]
            w-[35px]
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            bg-black
            text-white
            shadow-xl
            transition
            hover:scale-105
            lg:flex
          "
          aria-label="Previous cards"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>

        {/* RIGHT BUTTON */}
        <button
          onClick={scrollRight}
          className="
            absolute
            right-[73px]
            top-1/2
            z-20
            hidden
            h-[35px]
            w-[35px]
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            bg-black
            text-white
            shadow-xl
            transition
            hover:scale-105
            lg:flex
          "
          aria-label="Next cards"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>

      </div>

      {/* Bottom Line */}
      <hr className="mt-[64px] border-t border-[#7878783D]" />

    </section>
  );
}

