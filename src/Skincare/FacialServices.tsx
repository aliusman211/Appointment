import React, { useState } from "react";

import facialImage from "../assets/Skincare/facial-service.jpg";
import facial2 from "../assets/Skincare/facial-2.jpg";
import facial3 from "../assets/Skincare/facial-3.jpg";
import facial4 from "../assets/Skincare/facial-4.jpg";
import facial5 from "../assets/Skincare/facial-5.jpg";
import facial6 from "../assets/Skincare/facial-6.jpg";
import facial7 from "../assets/Skincare/facial-7.jpg";

const categories = [
  "Facial",
  "Dermaplanning",
  "Facial Peels",
  "Back Facial",
  
];

const services = [
  {
    id: 1,
    title: "Deep hydration & renewal",
    description: "Deep hydration & renewal",
    price: "$120",
    duration: "60 min",
  },
  {
    id: 2,
    title: "Skin Precision Treatment",
    description: "Targeted correction & advanced care",
    price: "$120",
    duration: "60 min",
  },
];

const cards = [
  // FACIAL
  {
    id: 1,
    category: "Facial",
    image: facialImage,
    businessName: "Lumina Dermal Lab",
    tagline: "Precision aesthetics. Refined clinical care",
    rating: "★ 5.0 (142)",
    services,
  },
  {
    id: 2,
    category: "Facial",
    image: facial2,
    businessName: "Glow Skin Studio",
    tagline: "Professional facial treatments",
    rating: "★ 4.9 (120)",
    services,
  },

  // DERMAPLANNING
  {
    id: 3,
    category: "Dermaplanning",
    image: facial3,
    businessName: "Dermaplanning Studio",
    tagline: "Smooth and refreshed skin",
    rating: "★ 5.0 (98)",
    services,
  },
  {
    id: 4,
    category: "Dermaplanning",
    image: facial4,
    businessName: "Skin Renewal Lab",
    tagline: "Advanced dermaplanning care",
    rating: "★ 4.9 (110)",
    services,
  },

  // FACIAL PEELS
  {
    id: 5,
    category: "Facial Peels",
    image: facial5,
    businessName: "Peel Aesthetic Lab",
    tagline: "Advanced facial peel treatment",
    rating: "★ 5.0 (140)",
    services,
  },
  {
    id: 6,
    category: "Facial Peels",
    image: facial6,
    businessName: "Clear Skin Clinic",
    tagline: "Professional skin resurfacing",
    rating: "★ 4.9 (88)",
    services,
  },

  // BACK FACIAL
  {
    id: 7,
    category: "Back Facial",
    image: facial7,
    businessName: "Back Care Studio",
    tagline: "Deep cleansing back treatment",
    rating: "★ 5.0 (102)",
    services,
  },


];

export default function FacialServices() {
  const [activeCategory, setActiveCategory] = useState("Facial");

  const filteredCards = cards.filter(
    (card) => card.category === activeCategory
  );

  return (
   <section className="  text-white">
  <div className="px-4 mt-[2px] sm:px-6 xl:px-[60px]">
    <h2 className="text-[10px] font-bold text-black md:text-[27px]">
      Explore Skin Sub-Categories
    </h2>

    <div className="mt-[20px] flex flex-wrap gap-[12px]">
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          onClick={() => setActiveCategory(category)}
          className={`h-[45px] cursor-pointer rounded-[12px] px-[20px] text-[16px] transition-all duration-300 sm:text-[20px] ${
            activeCategory === category
              ? "bg-[#000000AB] text-white"
              : "bg-[#0000000A] text-black"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  </div>

  {/* Cards section */}
  <div className="mt-[50px]">
    {filteredCards.map((card, index) => (
      <React.Fragment key={card.id}>
        <div className="flex flex-col gap-[35px] px-4 sm:px-6 lg:px-10 xl:flex-row xl:px-[60px]">

          {/* Image */}
          <div className="w-full xl:w-[48%]">
            <img
              src={card.image}
              alt={card.businessName}
              className="
                h-[300px]
                w-full
                rounded-[10px]
                object-cover
                sm:h-[400px]
                md:h-[500px]
                xl:h-[446px]
              "
            />
          </div>

          {/* Content */}
          <div className="w-full xl:w-[51%]">
            <h3 className="text-[18px] font-bold text-black sm:text-[20px]">
              {card.businessName}
            </h3>

            <p className="mt-1 text-[15px] font-bold text-[#5e5e5e] sm:text-[18px]">
              {card.tagline}
            </p>

            <div className="mt-[18px] flex flex-wrap items-center gap-3 sm:gap-[16px]">
              <span className="text-[14px] font-bold text-black sm:text-[16px]">
                {card.rating}
              </span>

              <span className="cursor-pointer rounded-full border border-[#0000006E] bg-[#0F0F0F26] px-4 py-[5px] text-[13px] text-black sm:text-[16px]">
                Elite Partner
              </span>
            </div>

            <div className="mt-[25px] h-[1px] w-full max-w-[440px] bg-[#7878783D]" />

            <div className="mt-[28px] w-full max-w-[440px] space-y-3">
              {card.services.map((service) => (
                <div
                  key={service.id}
                  className="min-h-[117px] rounded-[18px] bg-[#EFF9FF] p-4 text-black sm:p-[18px]"
                >
                  <div className="flex items-start justify-between gap-3 sm:gap-4">
                    <div className="min-w-0 flex-1">
                      <h4 className="text-[16px] font-bold sm:text-[20px]">
                        {service.title}
                      </h4>

                      <p className="mt-1 text-[13px] leading-relaxed text-[#525960] sm:text-[16px]">
                        {service.description}
                      </p>
                    </div>

                    <div className="flex min-w-[70px] shrink-0 flex-col items-end sm:min-w-[85px]">
                      <span className="text-[16px] font-bold sm:text-[20px]">
                        {service.price}
                      </span>

                      <span className="text-[13px] text-[#555c63] sm:text-[16px]">
                        {service.duration}
                      </span>

                      <button
                        type="button"
                        className="mt-[10px] h-[25px] w-[60px] cursor-pointer rounded-full bg-[#0F0F0FEB] text-[12px] text-white transition hover:scale-105"
                      >
                        Book
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              type="button"
              className="mt-[14px] flex items-center gap-2 text-[14px] font-semibold text-[#2E2E2E] sm:text-[16px]"
            >
              Explore more services

              <span className="text-[24px] font-bold leading-none sm:text-[27px]">
                →
              </span>
            </button>
          </div>
        </div>

        {/* Separator */}
        <div className="mx-auto mt-[35px] h-[1.5px] w-[calc(100%-32px)] max-w-[1170px] bg-[#7878783D] sm:w-[calc(100%-64px)] xl:w-full" />

        {index !== filteredCards.length - 1 && (
          <div className="h-[37px]" />
        )}
      </React.Fragment>
    ))}
  </div>
</section>
  );
}