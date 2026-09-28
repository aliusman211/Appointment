import React from "react";

import Rectangle78 from "../assets/Vanguard grooming/Rectangle 78.png";

import icon2 from "../assets/Vanguard grooming/icon2.png";
import icon3 from "../assets/Vanguard grooming/icon3.png";
import icon4 from "../assets/Vanguard grooming/icon4.png";
import icon5 from "../assets/Vanguard grooming/icon5.png";

import map from "../assets/Vanguard grooming/map.png";

import { FaThumbsUp } from "react-icons/fa";
import { Star, ArrowRight } from "lucide-react";

const Lumina = ({ selectedGrooming }) => {
  return (
    <div className="mt-[120px]  min-h-screen overflow-x-hidden font-sans">
      
      <div className="grid min-h-screen grid-cols-1 gap-5 lg:grid-cols-2">
        <div className="relative px-4 sm:px-8 lg:pl-[80px] lg:pr-0">

          <img
            src={selectedGrooming?.image || Rectangle78}
            alt={selectedGrooming?.title || "Spa treatment"}
            className="
              h-[300px]
              w-full
              rounded-[10px]
              object-cover
              sm:h-[400px]
              lg:h-[446px]
              lg:max-w-[550px]
            "
          />
          <div
            className="
              absolute
              left-7
              top-[310px]
              flex
              items-center
              gap-2
              rounded-full
              border
              border-[#0000006E]
              bg-[#0F0F0F26]
              px-3
              py-2
              cursor-pointer
              text-sm
              font-medium
              text-black
              shadow-lg
              sm:left-11
              sm:top-[410px]
              lg:left-[80px]
              lg:top-[454px]
            "
          >
            <div className="flex h-5 w-7  items-center justify-center rounded-full bg-black">
              <FaThumbsUp className="text-[10px] text-white" />
            </div>

            <span>Promoted</span>
          </div>
        </div>
<section
  className="
    w-full
    rounded-[10px]
    bg-[#F6FCFF]
    px-4
    py-6
    pr-[20px]
    sm:px-6
    sm:py-8
    md:px-8
    pr-[20px]
    lg:px-10
    xl:px-12
  "
>
  <div
    className="
      mx-auto
      w-full
      max-w-[480px]
      lg:max-w-[560px]
    "
  >
    <div
      className="
        rounded-xl
        bg-white
        p-4
        shadow-sm
        sm:p-5
      "
    >
      <div
        className="
          mb-4
          flex
          items-center
          justify-between
          text-xs
          font-medium
          text-black
          sm:text-sm
        "
      >
        <span>TODAY</span>
        <span>CLOSED</span>
      </div>

      <div
        className="
          mb-4
          flex
          items-start
          justify-between
          gap-3
          text-xs
          text-[#484848]
          sm:text-sm
        "
      >
        <span>Next available:</span>

        <span className="text-right">
          Tomorrow, 10:30 AM
        </span>
      </div>

      <div
        className="
          mb-4
          flex
          items-center
          justify-between
          text-xs
          text-[#484848]
          sm:text-sm
        "
      >
        <span>Response time:</span>

        <span className="font-medium">
          FAST
        </span>
      </div>

      <button
        type="button"
        className="
          flex
          cursor-pointer
          items-center
          gap-2
          text-xs
          font-semibold
          text-black
          transition
          hover:gap-3
          sm:text-sm
        "
      >
        View full schedule
        <ArrowRight size={17} />
      </button>
    </div>
    <div className="mt-7 sm:mt-8">

      <h1
        className="
          text-2xl
          font-bold
          tracking-tight
          text-[#222]
          sm:text-3xl
        "
      >
        Lumina Dermal Lab
      </h1>

      <p
        className="
          mt-2
          text-base
          leading-6
          text-gray-600
          sm:text-lg
        "
      >
        Precision aesthetics. Refined clinical care
      </p>

      <div
        className="
          mt-3
          flex
          items-center
          gap-1
          text-sm
          text-[#222]
        "
      >
        <Star
          size={16}
          className="fill-[#222] text-[#222]"
        />

        <span>5.0 (142)</span>
      </div>

      <div className="mt-3">
        <span
          className="
            inline-flex
            items-center
            rounded-full
            border
            border-gray-400
            bg-[#DBDBDB]
            px-3
            py-1.5
            text-xs
            text-[#333]
            sm:px-4
            sm:py-2
            sm:text-sm
          "
        >
          Precision Grooming
        </span>
      </div>

      <p
        className="
          mt-4
          text-sm
          leading-6
          text-gray-600
          sm:text-[15px]
        "
      >
        A refined space focused on advanced skincare and
        precision-based treatments. Known for consistent
        results and a client-first approach.
      </p>
    </div>
    <div
      className="
        mt-6
        rounded-xl
        border
        border-white/40
        bg-white/60
        p-4
        shadow-sm
        sm:mt-7
        sm:p-6
      "
    >
      <p
        className="
          mb-5
          text-center
          text-sm
          leading-6
          text-gray-600
        "
      >
        Unlock full access to availability, updates, and
        seamless booking.
      </p>

      <button
        type="button"
        className="
          w-full
          cursor-pointer
          rounded-full
          bg-[#272727]
          px-5
          py-3
          text-sm
          font-medium
          text-white
          transition
          hover:bg-black
        "
      >
        Continue with Email
      </button>

      <button
        type="button"
        className="
          mt-3
          w-full
          cursor-pointer
          rounded-full
          border
          border-[#333]
          px-5
          py-3
          text-sm
          font-medium
          text-[#333]
          transition
          hover:bg-white
        "
      >
        Book Experience
      </button>
    </div>
    <div className="mt-7">

      <h2
        className="
          text-lg
          font-semibold
          text-[#222]
          sm:text-xl
        "
      >
        Digital Presence
      </h2>

      <div
        className="
          mt-4
          grid
          grid-cols-4
          gap-2
          sm:flex
          sm:gap-3
        "
      >
        <button
          type="button"
          className="
            flex
            h-[48px]
            min-w-0
            flex-1
            cursor-pointer
            items-center
            justify-center
            rounded-lg
            bg-[#000000AB]
            p-2
            sm:h-[50px]
            sm:w-[60px]
            sm:flex-none
            sm:p-3
          "
        >
          <img
            src={icon2}
            alt="Social media"
            className="
              h-[21px]
              w-[12px]
              object-contain
              brightness-0
              invert
            "
          />
        </button>
        <button
          type="button"
          className="
            flex
            h-[48px]
            min-w-0
            flex-1
            cursor-pointer
            items-center
            justify-center
            rounded-lg
            bg-[#000000AB]
            p-2
            sm:h-[50px]
            sm:w-[60px]
            sm:flex-none
            sm:p-3
          "
        >
          <img
            src={icon3}
            alt="Social media"
            className="
              h-[24px]
              w-[24px]
              object-contain
              brightness-0
              invert
            "
          />
        </button>
        <button
          type="button"
          className="
            flex
            h-[48px]
            min-w-0
            flex-1
            cursor-pointer
            items-center
            justify-center
            rounded-lg
            bg-[#000000AB]
            p-2
            sm:h-[50px]
            sm:w-[60px]
            sm:flex-none
            sm:p-3
          "
        >
          <img
            src={icon4}
            alt="Social media"
            className="
              h-[21px]
              w-[17px]
              object-contain
              brightness-0
              invert
            "
          />
        </button>
        <button
          type="button"
          className="
            flex
            h-[48px]
            min-w-0
            flex-1
            cursor-pointer
            items-center
            justify-center
            rounded-lg
            bg-[#000000AB]
            p-2
            sm:h-[50px]
            sm:w-[60px]
            sm:flex-none
            sm:p-3
          "
        >
          <img
            src={icon5}
            alt="Social media"
            className="
              h-[21px]
              w-[21px]
              object-contain
              brightness-0
              invert
            "
          />
        </button>
      </div>
    </div>
    <div className="mt-7 sm:mt-8">

      <img
        title="Los Angeles Map"
        src={map}
        alt="Los Angeles Map"
        className="
          h-[190px]
          w-full
          rounded-xl
          object-cover
          shadow-sm
          sm:h-[240px]
          md:h-[280px]
        "
        loading="lazy"
      />

    </div>
    <div className="mt-7 pb-6 sm:pb-8">
      <h2
        className="
          text-lg
          font-semibold
          text-[#222]
          sm:text-xl
        "
      >
        Policies
      </h2>

      <div className="mt-3 space-y-2">
        <button
          type="button"
          className="
            flex
            w-full
            cursor-pointer
            items-center
            justify-between
            rounded-xl
            bg-white/50
            px-4
            py-3.5
            text-left
            text-sm
            text-gray-700
            shadow-sm
            transition
            hover:bg-white
            sm:px-5
            sm:py-4
          "
        >
          <span>Booking Policy</span>
          <ArrowRight size={18} />
        </button>

        {/* CANCELLATION POLICY */}
        <button
          type="button"
          className="
            flex
            w-full
            cursor-pointer
            items-center
            justify-between
            rounded-xl
            bg-white/50
            px-4
            py-3.5
            text-left
            text-sm
            text-gray-700
            shadow-sm
            transition
            hover:bg-white
            sm:px-5
            sm:py-4
          "
        >
          <span>Cancellation Policy</span>
          <ArrowRight size={18} />
        </button>

        {/* PAYMENT DETAIL */}
        <button
          type="button"
          className="
            flex
            w-full
            cursor-pointer
            items-center
            justify-between
            rounded-xl
            bg-white/50
            px-4
            py-3.5
            text-left
            text-sm
            text-gray-700
            shadow-sm
            transition
            hover:bg-white
            sm:px-5
            sm:py-4
          "
        >
          <span>Payment Detail</span>
          <ArrowRight size={18} />
        </button>

      </div>
    </div>

  </div>
</section>
      </div>
    </div>
  );
};

export default Lumina;