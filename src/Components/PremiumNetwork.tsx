import React from "react";

import dashboardImage from "../assets/dashboard.png";
import profile1 from "../assets/image1.png";
import profile2 from "../assets/image2.png";
import profile3 from "../assets/image3.png";
import profile4 from "../assets/image4.png";
import profile5 from "../assets/image5.png";
import profile6 from "../assets/image6.png";
import profile7 from "../assets/image7.png";

const PremiumNetwork = () => {
  return (
    <section className="w-full px-3 py-6 sm:px-5 sm:py-8 lg:px-8 lg:py-10">
      <article
        className="
          relative
          mx-auto
          w-full
          max-w-[1440px]
          overflow-hidden
          rounded-[28px]
          bg-[#F5F9FF]
          px-4
          py-10
          sm:px-6
          sm:py-12
          md:px-8
          md:py-14
          lg:px-10
          lg:py-16
        "
      >
        <div className="relative z-40 mx-auto w-full max-w-[900px] text-center">
          <h2
            className="
           
              text-[30px]
              font-bold
              leading-[1.08]
              tracking-[-0.5px]
              text-black
              sm:text-[38px]
              md:text-[44px]
              lg:text-[50px]
              xl:text-[35px]
            "
          >
            Grow your business with a premium network
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-[820px]
              text-[16px]
              leading-[1.55]
              text-[#303030]
              sm:text-[18px]
              md:text-[20px]
              lg:text-[22px]
            "
          >
            Join thousands of beauty and wellness professionals who trust
            Appointset to manage their bookings and reach new clients.
          </p>
          <div
            className="
              mt-8
              flex
              flex-col
              items-center
              justify-center
              gap-3
              sm:flex-row
            "
          >
            <button
              type="button"
              className="
                h-[50px]
                w-full
                max-w-[200px]
                rounded-full
                bg-[#202020]
                px-7
                text-[17px]
                font-medium
                cursor-pointer
                text-white
                transition
                duration-200
                hover:bg-black
                sm:h-[60px]
                sm:text-[18px]
              "
            >
              List Your Business
            </button>

            <button
              type="button"
              className="
                h-[50px]
                w-full
                max-w-[220px]
                rounded-full
                border
                border-black
                bg-transparent
                px-7
                cursor-pointer
                text-[17px]
                font-medium
                text-black
                transition
                duration-200
                hover:bg-black
                hover:text-white
                sm:h-[60px]
                sm:text-[18px]
              "
            >
              Preview Dashboard
            </button>
          </div>
        </div>
        <div
          className="
            absolute
            left-[-30px]
            top-[130px]
            z-20
            hidden
            h-[185px]
            w-[185px]
            overflow-hidden
            rounded-full
            sm:block
            md:left-[-2px]
            md:h-[120px]
            md:w-[120px]
          "
        >
          <img
            src={profile1}
            alt="Beauty professional"
            className="block h-full w-full object-cover"
          />
        </div>
        <div
          className="
            absolute
            right-[55px]
            top-[185px]
            z-20
            hidden
            h-[62px]
            w-[62px]
            overflow-hidden
            rounded-full
            sm:block
            md:right-[65px]
            md:h-[50px]
            md:w-[50px]
          "
        >
          <img
            src={profile2}
            alt="Beauty professional"
            className="block h-full w-full object-cover"
          />
        </div>
        <div
          className="
            absolute
            left-[55px]
            top-[420px]
            z-20
            hidden
            h-[85px]
            w-[85px]
            overflow-hidden
            rounded-full
            sm:block
            md:left-[70px]
            md:h-[70px]
            md:w-[70px]
          "
        >
          <img
            src={profile3}
            alt="Beauty professional"
            className="block h-full w-full object-cover"
          />
        </div>
        <div
          className="
            absolute
            right-[45px]
            top-[340px]
            z-20
            hidden
            h-[145px]
            w-[145px]
            overflow-hidden
            rounded-full
            sm:block
            md:right-[55px]
            md:h-[80px]
            md:w-[80px]
          "
        >
          <img
            src={profile4}
            alt="Beauty professional"
            className="block h-full w-full object-cover"
          />
        </div>
        <div
          className="
            absolute
            right-[-5px]
            top-[500px]
            z-20
            hidden
            h-[80px]
            w-[80px]
            overflow-hidden
            rounded-full
            sm:block
            md:h-[50px]
            md:w-[50px]
          "
        >
          <img
            src={profile5}
            alt="Beauty professional"
            className="block h-full w-full object-cover"
          />
        </div>
        <div
          className="
            absolute
            bottom-[175px]
            right-[30px]
            z-20
            hidden
            h-[150px]
            w-[150px]
            overflow-hidden
            rounded-full
            sm:block
            md:right-[2px]
            md:h-[120px]
            md:w-[120px]
          "
        >
          <img
            src={profile7}
            alt="Beauty professional"
            className="block h-full w-full object-cover"
          />
        </div>
        <div
          className="
            absolute
            bottom-[175px]
            left-[10px]
            z-20
            hidden
            h-[175px]
            w-[175px]
            overflow-hidden
            rounded-full
            sm:block
            md:right-[45px]
            md:h-[120px]
            md:w-[120px]
          "
        >
          <img
            src={profile6}
            alt="Beauty professional"
            className="block h-full w-full object-cover"
          />
        </div>
        <div
          className="
            relative
            z-10
            mx-auto
            mt-12
            w-full
            max-w-[783px]
            sm:mt-14
            lg:mt-16
          "
        >
          {/* Dashboard Shadow */}
          <div
            className="
              absolute
              left-1/2
              top-1/2
              h-[70%]
              w-[80%]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-black/10
              blur-[45px]
            "
          />

          {/* Dashboard */}
          <div
            className="
              relative
              h-[220px]
              w-[762px]
              overflow-hidden
              rounded-[18px]
              border-[4px]
              border-black
              bg-black
              shadow-[0_25px_55px_rgba(0,0,0,0.28)]

              sm:h-[300px]
              sm:rounded-[22px]
              sm:border-[5px]

              md:h-[350px]

              lg:h-[473px]
              lg:rounded-[28px]
              lg:border-[6px]
            "
          >
            <img
              src={dashboardImage}
              alt="Appointset dashboard"
              className="
                block
                h-[473px]
                w-[762px]
                object-cover
                object-center
              "
            />
          </div>
        </div>

       
        <div
          className="
            relative
            z-40
            mx-auto
            mt-10
            grid
            w-full
            max-w-[1200px]
            grid-cols-1
            gap-7

            sm:mt-12
            sm:grid-cols-2

            lg:mt-20
            lg:grid-cols-4
            lg:gap-8
          "
        >
          <Feature text="Reach thousands of new clients actively searching for services" />

          <Feature text="Automated booking system with real-time calendar sync" />

          <Feature text="Secure payment processing and client management" />

          <Feature text="Featured placement in search results" />
        </div>
      </article>
    </section>
  );
};



type FeatureProps = {
  text: string;
};

const Feature = ({ text }: FeatureProps) => {
  return (
    <div className="flex items-start gap-3 sm:gap-4">
      {/* Check Icon */}
      <div
        className="
          flex
          h-[20px]
          w-[20px]
          shrink-0
          items-center
          justify-center
          rounded-full
          bg-[#202020]
          text-[18px]
          font-medium
          text-white
          shadow-[0_3px_8px_rgba(0,0,0,0.18)]
          sm:h-[38px]
          sm:w-[38px]
          sm:text-[19px]
        "
      >
        ✓
      </div>
      <p
        className="
          text-[15px]
          leading-[1.45]
          text-[#303030]
          sm:text-[16px]
          md:text-[15px]
        "
      >
        {text}
      </p>
    </div>
  );
};

export default PremiumNetwork;