import React from "react";

import facialMain from "../assets/Vanguard grooming/facial-main.png";
import facialRoom from "../assets/Vanguard grooming/facial-room.png";
import facialMassage from "../assets/Vanguard grooming/facial-massage.png";
import facialTreatment from "../assets/Vanguard grooming/facial-treatment.png";

const services = [
  {
    id: 1,
    title: "HydraGlow Facial",
    description:
      "Deep hydration to restore glow and improve skin texture",
    price: "$120",
    time: "60 min",
  },
  {
    id: 2,
    title: "Advanced Skin Facial",
    description:
      "Cleansing, exfoliation, and nourishment for healthy skin",
    price: "$95",
    time: "50 min",
  },
  {
    id: 3,
    title: "Relaxation Face Massage",
    description:
      "Improves circulation and relieves facial tension",
    price: "$120",
    time: "60 min",
  },
  {
    id: 4,
    title: "HydraGlow Facial",
    description:
      "Deep hydration to restore glow and improve skin texture",
    price: "$120",
    time: "60 min",
  },
  {
    id: 5,
    title: "Advanced Skin Facial",
    description:
      "Cleansing, exfoliation, and nourishment for healthy skin",
    price: "$95",
    time: "50 min",
  },
  {
    id: 6,
    title: "Relaxation Face Massage",
    description:
      "Improves circulation and relieves facial tension",
    price: "$120",
    time: "60 min",
  },
];

function Available() {
  return (
   <main className="min-h-screen w-full bg-white text-white">
  <section
    className="
      px-4
      pb-16
      pt-[100px]
      sm:px-5
      sm:pb-20
      md:px-8
      lg:px-12
      lg:pt-[115px]
      xl:px-20
    "
  >
    {/* =========================
        HEADING
    ========================== */}
    <div className="mb-8">
      <h1
        className="
          text-[28px]
          font-bold
          leading-tight
          text-[#000000]
          sm:text-[32px]
          md:text-[34px]
        "
      >
        Available Experiences
      </h1>

      <p
        className="
          mt-1
          text-[15px]
          text-[#484848]
          sm:text-[16px]
          md:text-[17px]
        "
      >
        Precision aesthetics, Refined clinical care
      </p>
    </div>

    {/* =========================
        MAIN CONTENT
    ========================== */}
    <div
      className="
        mt-5
        grid
        grid-cols-1
        gap-8
        lg:grid-cols-[minmax(400px,530px)_minmax(400px,1fr)]
        lg:gap-8
        xl:grid-cols-[530px_minmax(500px,1fr)]
        xl:gap-10
        2xl:grid-cols-[550px_minmax(600px,1fr)]
      "
    >
      {/* =========================
          SERVICES
      ========================== */}
      <div className="flex w-full flex-col gap-2">
        {services.map((service, index) => (
          <React.Fragment key={service.id}>
            {/* SERVICE CARD */}
            <div
              className="
                flex
                min-h-[100px]
                w-full
                items-center
                rounded-[8px]
                bg-[#F6FCFF]
                px-4
                py-4
                text-black
                shadow-[0_0_4px_rgba(0,0,0,0.12)]
                sm:px-5
              "
            >
              {/* LEFT CONTENT */}
              <div className="min-w-0 flex-1 pr-3">
                <h2
                  className="
                    text-[17px]
                    font-bold
                    leading-tight
                    text-[#000000]
                    sm:text-[18px]
                    md:text-[20px]
                  "
                >
                  {service.title}
                </h2>

                <p
                  className="
                    mt-2
                    max-w-[360px]
                    text-[12px]
                    leading-5
                    text-[#484848]
                    sm:mt-3
                    sm:text-[13px]
                    md:text-[14px]
                  "
                >
                  {service.description}
                </p>
              </div>

              {/* PRICE + BOOK */}
              <div
                className="
                  flex
                  w-[68px]
                  shrink-0
                  flex-col
                  items-end
                  sm:w-[75px]
                "
              >
                <span
                  className="
                    text-[16px]
                    font-bold
                    leading-none
                    text-[#000000]
                    sm:text-[18px]
                  "
                >
                  {service.price}
                </span>

                <span
                  className="
                    mt-1
                    text-[12px]
                    leading-none
                    text-[#484848]
                    sm:text-[14px]
                  "
                >
                  {service.time}
                </span>

                <button
                  type="button"
                  className="
                    mt-2
                    flex
                    h-[27px]
                    w-[62px]
                    items-center
                    justify-center
                    rounded-full
                    bg-[#202020]
                    text-[12px]
                    text-white
                    transition
                    duration-200
                    hover:bg-black
                    sm:w-[65px]
                    sm:text-[13px]
                  "
                >
                  Book
                </button>
              </div>
            </div>

            {/* DIVIDER */}
            {index < services.length - 1 && (
              <div className="flex w-full">
                <div className="h-[1px] w-full bg-[#DFDFDF]" />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>


     <div
            className="
              hidden
              gap-2
              lg:grid
              lg:grid-cols-[230px_1fr]
            "
          >
            {/* LARGE LEFT IMAGE */}
            <div
              className="
                h-[450px]
                w-[230px]
                overflow-hidden
                rounded-l-full
              "
            >
              <img
                src={facialMain}
                alt="Facial treatment"
                className="
                  h-full
                  w-full
                  object-cover
                "
              />
            </div>

            {/* RIGHT IMAGES */}
            <div className="flex flex-col gap-2">
              {/* TOP IMAGE */}
              <div
                className="
                  h-[220px]
                  w-full
                  overflow-hidden
                  rounded-tr-[160px]
                "
              >
                <img
                  src={facialRoom}
                  alt="Facial treatment room"
                  className="
                    h-full
                    w-full
                    object-cover
                  "
                />
              </div>

              {/* MIDDLE IMAGE */}
              <div
                className="
                  h-[220px]
                  w-full
                  overflow-hidden
                  rounded-[18px]
                "
              >
                <img
                  src={facialMassage}
                  alt="Facial massage"
                  className="
                    h-full
                    w-full
                    object-cover
                  "
                />
              </div>

              {/* BOTTOM IMAGE */}
              <div
                className="
                  h-[220px]
                  w-full
                  overflow-hidden
                  rounded-tl-[18px]
                  rounded-br-[210px]
                "
              >
                <img
                  src={facialTreatment}
                  alt="Facial treatment"
                  className="
                    h-full
                    w-full
                    object-cover
                  "
                />
              </div>
            </div>
          </div>
    </div>
  </section>
</main>
  );
}

export default Available;
