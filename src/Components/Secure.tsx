import React from "react";
const paymentFeatures = [
  {
    image: "/Group%2083.png",
    text: "Professional hardware for elite in-studio checkouts.",
  },
  {
    image: "/Group%2084.png",
    text: "Safely store client cards for effortless 1-click billing.",
  },
  {
    image: "/Group%2085.png",
    text: "Turn your smartphone into a high-speed payment terminal.",
  },
  {
    image: "/Group%2086.png",
    text: "Text premium payment links directly to your clients.",
  },
];
const experiences = [
  {
    image: "/Rectangle%2034.png",
    title: "Studio LUX",
    subtitle: "Premium Grooming Studio",
  },
  {
    image: "/Rectangle%2035.png",
    title: "Beautix Studio",
    subtitle: "Luxury Hair Salon",
  },
  {
    image: "/Rectangle%2036.png",
    title: "Zenith Wellness",
    subtitle: "Premium Grooming Studio",
  },
  {
    image: "/Rectangle%2037.png",
    title: "Elite Spa Experience",
    subtitle: "Premium Grooming Studio",
  },
];
type PaymentFeatureProps = {
  image: string;
  text: string;
};
function PaymentFeature({
  image,
  text,
}: PaymentFeatureProps) {
  return (
    <div className="relative flex min-h-[82px] items-center">

      <div
        className="
          absolute
          left-0
          z-10
          flex
          h-[60px]
          w-[60px]
          items-center
          justify-center
          rounded-full
          bg-[#2A2A2A]
          shadow-[0_0_0_1px_rgba(255,255,255,0.03)]
          sm:h-[76px]
          sm:w-[76px]
        "
      >
        <img
          src={image}
          alt="Payment feature"
          className="
            h-[35px]
            w-[35px]
            object-contain
            sm:h-[40px]
            sm:w-[40px]
          "
        />
      </div>
      <div
        className="
          ml-[42px]
          flex
          min-h-[73px]
          w-full
          items-center
          rounded-full
          bg-[#f3f7fd]
          px-8
          pl-[72px]
          text-[17px]
          font-normal
          leading-[1.35]
          text-[#2C2C2C]
          cursor-pointer
mt-[50px]
          sm:min-h-[64px]
          sm:px-10
          sm:pl-[74px]
          sm:text-[18px]

          md:text-[17px]

          lg:text-[18px]
        "
      >
        {text}
      </div>
    </div>
  );
}
type ExperienceCardProps = {
  image: string;
  title: string;
  subtitle: string;
};
function ExperienceCard({
  image,
  title,
  subtitle,
}: ExperienceCardProps) {
  return (
    <div
      className="
        overflow-hidden
        rounded-[17px]
        border-[1px]
        border-[#d7d7d7]
        bg-[#f3f7fd]
        p-[4px]
        shadow-[0_0_0_1px_rgba(255,255,255,0.15)]
      "
    >
      <div
        className="
          h-[210px]
          overflow-hidden
          rounded-[10px]

          sm:h-[200px]

          md:h-[210px]
        "
      >
        <img
          src={image}
          alt={title}
          className="
            h-full
            w-full
            object-cover
            transition-transform
            duration-500
            hover:scale-105
          "
        />
      </div>
      <div className="px-[7px] pb-[6px] pt-[10px]">

        <h3
          className="
            text-[18px]
            font-bold
            leading-tight
            text-[#111111]
          "
        >
          {title}
        </h3>
        <p
          className="
            mt-[7px]
            text-[14px]
            leading-tight
            text-[#4a4a4a]
          "
        >
          {subtitle}
        </p>
        <div
          className="
            mt-[21px]
            flex
            items-center
            justify-between
            text-[13px]
            text-[#222222]
          "
        >
          <span>Today 5 PM</span>

          <span>$$$ Premium</span>
        </div>
        <button
          type="button"
          className="
            mt-[14px]
            flex
            h-[36px]
            w-full
            items-center
            justify-center
            cursor-pointer
            rounded-[6px]
            bg-[#222222]
            text-[13px]
            font-semibold
            text-white
            transition
            duration-200
            hover:bg-black
          "
        >
          View Experience
        </button>
      </div>
    </div>
  );
}
export default function Secure() {
  return (
    <main className="mt-[100px] min-h-screen text-white">
      <section
        className="
          relative
          overflow-hidden
          bg-gradient-to-b
          from-[#050505]
          via-[#101010]
          to-[#242424]
        "
      >

        <div
          className="
            mx-auto
            grid
            min-h-[610px]
            max-w-[1400px]
            grid-cols-1
            items-center
            gap-12
            px-6
            py-16

            sm:px-10

            lg:grid-cols-[0.92fr_1.08fr]
            lg:gap-14
            lg:px-[72px]
            lg:py-20

            xl:px-[90px]
          "
        >
          <div className="flex flex-col justify-center">
            <div className="mb-5 flex items-center">
              <div
                className="
                  flex
                  h-[35px]
                  w-[49px]
                  items-center
                  justify-center
                  rounded-[5px]
                "
              >
                <img
                  src="/Group%2088.png"
                  alt="Payment"
                  className="
                    h-full
                    w-full
                    object-contain
                  "
                />
              </div>
            </div>
            <h1
              className="
                max-w-[580px]
                text-[42px]
                font-bold
                leading-[1.08]
                tracking-[-1.5px]
                text-white

                sm:text-[50px]

                md:text-[56px]

                lg:text-[53px]

                xl:text-[45px]
              "
            >
              Secure payments at
              <br />
              the speed of style
            </h1>

   

            <p
              className="
                mt-7
                max-w-[540px]
                text-[17px]
                leading-[1.55]
                text-[#f1f1f1]

                sm:text-[18px]
              "
            >
              Empower your brand with integrated financial tools.

              <br className="hidden sm:block" />

              From instant deposits to seamless checkouts,

              <br className="hidden sm:block" />

              Appointset handles the currency so you can focus

              <br className="hidden sm:block" />

              on the craft.
            </p>
          </div>
          <div
            className="
              flex
              flex-col
              justify-center
              gap-5

              lg:gap-[20px]
            "
          >
            {paymentFeatures.map((feature, index) => (
              <PaymentFeature
                key={index}
                image={feature.image}
                text={feature.text}
              />
            ))}
          </div>
        </div>
      </section>
<p className="mt-40 flex items-center px-14 text-center text-[40px]  font-bold text-black">
  Available Today
</p>
      <section
        className="
          px-5
          pb-16
          pt-[150px]

          sm:px-8
          sm:pt-[160px]

          lg:px-10
          lg:pt-[50px]
        "
      >

        <div
          className="
            mx-auto
            grid
            max-w-[1210px]
            grid-cols-1
            gap-5

            sm:grid-cols-2

            lg:grid-cols-4
            lg:gap-[20px]
          "
        >
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={index}
              image={experience.image}
              title={experience.title}
              subtitle={experience.subtitle}
            />
          ))}
        </div>
      </section>
    </main>
  );
}