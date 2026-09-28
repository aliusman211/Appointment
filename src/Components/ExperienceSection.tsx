import React, { useRef } from "react";
import {
  FiChevronLeft,
  FiChevronRight,
  FiMapPin,
} from "react-icons/fi";
import picture1 from "../assets/picture1.png";
import picture2 from "../assets/picture2.png";
import picture3 from "../assets/picture3.png";
import picture4 from "../assets/picture4.png";
import picture5 from "../assets/picture5.png";
import picture6 from "../assets/picture6.png";
import picture7 from "../assets/picture7.png";
import salon1 from "../assets/salon1.png";
import salon2 from "../assets/salon2.png";
import salon3 from "../assets/salon3.png";
import salon4 from "../assets/salon4.png";
const categories = [
  {
    id: 1,
    title: "Skin Care",
    image: picture1,
  },
  {
    id: 2,
    title: "Beard",
    image: picture2,
  },
  {
    id: 3,
    title: "Face Massage",
    image: picture3,
  },
  {
    id: 4,
    title: "Hair",
    image: picture4,
  },
  {
    id: 5,
    title: "Skin Care",
    image: picture5,
  },
  {
    id: 6,
    title: "Serums",
    image: picture6,
  },
  {
    id: 7,
    title: "Massage",
    image: picture7,
  },
];
const experiences = [
  {
    id: 1,
    image: salon1,
    title: "Flawless Fades & Hair Studio",
    description:
      "Experience refined grooming tailored to the modern standard. From signature fades to expert styling, we deliver sharp, high-quality results with every visit.",
    location:
      "884 Heritage Oak Way, Suite 12, Winter Park, FL 32789",
  },
  {
    id: 2,
    image: salon2,
    title: "Flawless Fades & Hair Studio",
    description:
      "Experience refined grooming tailored to the modern standard. From signature fades to expert styling, we deliver sharp, high-quality results with every visit.",
    location:
      "884 Heritage Oak Way, Suite 12, Winter Park, FL 32789",
  },
  {
    id: 3,
    image: salon3,
    title: "Flawless Fades & Hair Studio",
    description:
      "Experience refined grooming tailored to the modern standard. From signature fades to expert styling, we deliver sharp, high-quality results with every visit.",
    location:
      "884 Heritage Oak Way, Suite 12, Winter Park, FL 32789",
  },
  {
    id: 4,
    image: salon4,
    title: "Flawless Fades & Hair Studio",
    description:
      "Experience refined grooming tailored to the modern standard. From signature fades to expert styling, we deliver sharp, high-quality results with every visit.",
    location:
      "884 Heritage Oak Way, Suite 12, Winter Park, FL 32789",
  },
];
type ExperienceSectionProps = {
  openSkincarePage: () => void;
};
function ExperienceSection({
  openSkincarePage,
}: ExperienceSectionProps) {
  const categoryRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const scrollCategories = (
    direction: "left" | "right",
  ) => {
    if (!categoryRef.current) return;

    categoryRef.current.scrollBy({
      left: direction === "left" ? -300 : 300,
      behavior: "smooth",
    });
  };
  const scrollExperiences = (
    direction: "left" | "right",
  ) => {
    if (!experienceRef.current) return;

    const container = experienceRef.current;

    const scrollAmount =
      container.clientWidth * 0.8;

    container.scrollBy({
      left:
        direction === "left"
          ? -scrollAmount
          : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="mx-auto mt-[41px] w-full max-w-[2048px] px-4 sm:px-6 lg:pl-[57px] lg:pr-0">
      <p className="font-bold text-[24px] text-black sm:text-[27px] lg:text-[30px]">
        Recommended
      </p>
      <div className="relative mx-auto mt-[40px] w-full max-w-[1500px] sm:mt-[57px]">
        <button
          type="button"
          onClick={() =>
            scrollCategories("left")
          }
          className="
            absolute
            left-2
            top-1/2
            z-20
            hidden
            h-8
            w-8
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            bg-black/30
            p-1.5
            text-white
            shadow-sm
            transition
            hover:bg-black
            md:flex
            lg:left-8
          "
          aria-label="Previous categories"
        >
          <FiChevronLeft size={25} />
        </button>

        {/* CATEGORY CARDS */}

        <div
          ref={categoryRef}
          className="
            flex
            flex-col
            gap-4
            px-4

            sm:gap-5

            md:flex-row
            md:gap-2
            md:overflow-x-auto
            md:overflow-y-hidden
            md:px-0
            md:scroll-smooth

            [scrollbar-width:none]
            [-ms-overflow-style:none]
            [&::-webkit-scrollbar]:hidden
          "
        >
          {categories.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={openSkincarePage}
              className="
                relative
                h-[200px]
                w-full
                shrink-0
                cursor-pointer
                overflow-hidden
                rounded-[5px]
                bg-gray-800
                text-left

                sm:h-[220px]

                md:h-[230px]
                md:w-[190px]
                md:min-w-[190px]

                lg:h-[251px]
                lg:w-[190px]
                lg:min-w-[190px]
              "
            >
              <img
                src={category.image}
                alt={category.title}
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  object-cover
                  transition
                  duration-300
                  hover:scale-105
                "
              />

              <div className="absolute inset-0 bg-black/10" />

              <h3
                className="
                  absolute
                  bottom-3
                  left-4
                  z-10
                  text-[15px]
                  font-normal
                  text-white

                  sm:text-[16px]
                "
              >
                {category.title}
              </h3>
            </button>
          ))}
        </div>

        {/* RIGHT CATEGORY ARROW */}

        <button
          type="button"
          onClick={() =>
            scrollCategories("right")
          }
          className="
            absolute
            right-2
            top-1/2
            z-20
            hidden
            h-8
            w-8
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            bg-black/30
            p-1.5
            text-white
            shadow-lg
            transition
            hover:bg-black
            md:flex
            lg:right-8
          "
          aria-label="Next categories"
        >
          <FiChevronRight size={25} />
        </button>
      </div>

      {/* ================= CURATED EXPERIENCE TITLE ================= */}

      <div
        className="
          mx-auto
          mt-16
          w-full
          max-w-[900px]
          px-4
          text-center

          sm:mt-20
          sm:px-6

          md:mt-24
          md:px-8

          lg:mt-28
        "
      >
        <p className=" text-[24px] font-bold leading-tight text-black sm:text-[27px] md:text-[29px] lg:text-[30px]">
          Curated Experiences, Tailored for you
        </p>

        <p className="mt-3 text-[15px] leading-6 text-[#2C2C2C] sm:text-[17px] md:text-[19px] lg:text-[20px]">
          No endless searching. We bring the best
          options directly to you.
        </p>
      </div>

      {/* ================= EXPERIENCE CARDS ================= */}

      <div className="relative mx-auto mt-8 max-w-[1500px]">

        <div
          ref={experienceRef}
          className="
            flex
            gap-4
            overflow-x-auto
            scroll-smooth
            pb-3

            md:gap-5

            [scrollbar-width:none]
            [-ms-overflow-style:none]
            [&::-webkit-scrollbar]:hidden
          "
        >
          {experiences.map((experience) => (
            <article
              key={experience.id}
              className="
                w-[calc(100vw-32px)]
                min-w-[calc(100vw-32px)]
                overflow-hidden
                rounded-[16px]
                border
                border-[#B88F581A]
                bg-[#B88F581A]
                shadow-[0_0_0_1px_rgba(255,255,255,0.15)]

                sm:w-[calc(50vw-28px)]
                sm:min-w-[calc(50vw-28px)]

                lg:w-[calc(32%-15px)]
                lg:min-w-[calc(32%-15px)]
              "
            >
              {/* ================= SALON IMAGE ================= */}

              {/* NO CLICK HERE */}
              {/* salon1, salon2, salon3, salon4 do not open skincare */}

              <div
                className="
                  h-[260px]
                  w-full
                  overflow-hidden

                  sm:h-[250px]

                  lg:h-[265px]
                "
              >
                <img
                  src={experience.image}
                  alt={experience.title}
                  className="
                    h-full
                    w-full
                    object-cover
                    transition
                    duration-300
                    hover:scale-105
                  "
                />
              </div>

              {/* ================= EXPERIENCE CONTENT ================= */}

              <div className="flex min-h-[280px] flex-col p-4 sm:p-5">
                <h2 className="text-[20px] font-bold leading-tight text-black sm:text-[21px]">
                  {experience.title}
                </h2>

                <p className="mt-3 text-[13px] leading-6 text-[#333] sm:text-[14px]">
                  {experience.description}
                </p>

                {/* ================= LOCATION ================= */}

                <div className="mt-5">
                  <div className="flex items-center gap-1.5">
                    <FiMapPin
                      size={17}
                      strokeWidth={2.2}
                      className="shrink-0 text-black"
                    />

                    <span className="text-[16px] font-bold text-black">
                      Location
                    </span>
                  </div>

                  <p className="mt-2 text-[12px] leading-5 text-black sm:text-[13px]">
                    {experience.location}
                  </p>
                </div>

                {/* ================= VIEW EXPERIENCE ================= */}

                {/* NO CLICK HERE */}
                {/* Does not open Skincare */}

                <button
                  type="button"
                  className="
                    mt-auto
                    h-[45px]
                    w-full
                    cursor-pointer
                    rounded-[8px]
                    bg-[#202020]
                    text-[15px]
                    font-medium
                    text-white
                    transition
                    hover:bg-[#333]
                  "
                >
                  View Experience
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* ================= LEFT EXPERIENCE ARROW ================= */}

        <button
          type="button"
          onClick={() =>
            scrollExperiences("left")
          }
          className="
            absolute
            -left-1
            top-1/2
            z-20
            hidden
            h-8
            w-8
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            bg-[#5D4A35]
            text-white
            shadow-lg
            transition
            hover:bg-[#333]
            md:flex
            sm:left-8
          "
          aria-label="Previous experiences"
        >
          <FiChevronLeft size={20} />
        </button>

        {/* ================= RIGHT EXPERIENCE ARROW ================= */}

        <button
          type="button"
          onClick={() =>
            scrollExperiences("right")
          }
          className="
            absolute
            -right-1
            top-1/2
            z-20
            hidden
            h-8
            w-8
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            bg-[#5D4A35]
            text-white
            shadow-lg
            transition
            hover:bg-[#333]
            md:flex
            sm:right-8
          "
          aria-label="Next experiences"
        >
          <FiChevronRight size={20} />
        </button>
      </div>
    </section>
  );
}

export default ExperienceSection;