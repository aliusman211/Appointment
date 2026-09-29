
import irene from "../assets/Vanguard Grooming/irene.png";
import jonas from "../assets/Vanguard Grooming/jonas.png";
const Custom = () => {
  return (
    <section className="px-4 pb-20 pt-10 sm:px-8 md:px-12">
      <div className="mx-auto max-w-[700px] text-center">
        <h2 className="text-[28px] font-bold text-[#000000] sm:text-[30px]">
          What does our customer say?
        </h2>

        <p className="mx-auto mt-2 max-w-[620px] text-[16px] leading-6 text-[#484848] sm:text-[16px]">
          Real experiences from clients who value quality, consistency,<br />
          and thoughtful service across every booking.
        </p>
      </div>
      <div
        className="
          relative mx-auto mt-5 max-w-[1000px]
          rounded-[8px]
          
          px-5 py-8
          shadow-[0_0_20px_rgba(255,255,255,0.25)]
          sm:px-8
          md:px-10
        "
      >
        <div
          className="
            absolute
            bottom-0
            left-1/2
            hidden
            h-full
            w-[55px]
            -translate-x-1/2
            bg-white/10
            md:block
          "
        />

        <div
          className="
            relative
            z-10
            grid
            grid-cols-1
            gap-6
            md:grid-cols-2
            md:gap-5
          "
        >
       
          <div
            className="
              min-h-[214px]
              rounded-[8px]
              bg-[#F6FCFF]
              px-6
              py-6
              text-center
              text-black
            "
          >
            <img
              src={irene}
              alt="Irene Strong"
              className="
                mx-auto
                h-[150px]
                w-[150px]
                rounded-full
                object-cover
                
              "
            />

            <h3 className="mt-2 text-[16px] font-medium">
              Irene Strong
            </h3>

            <p
              className="
                mx-auto
                mt-8
                font-semibold
                max-w-[370px]
                text-[12px]
                leading-4
                text-[#444]
              "
            >
              A seamless experience with a clear focus on quality
              and care. It stands out in every detail.
            </p>
          </div>
          <div
            className="
              min-h-[230px]
              rounded-[8px]
              bg-[#F6FCFF]
              px-6
              py-6
              text-center
              text-black
            "
          >
            <img
              src={jonas}
              alt="Jonas Kakaroto"
              className="
                mx-auto
                h-[150px]
                w-[150px]
                rounded-full
                object-cover
                
              "
            />

            <h3 className="mt-2 text-[16px] font-medium">
              Jonas Kakaroto
            </h3>

            <p
              className="
                mx-auto
                mt-8
                max-w-[370px]
                text-[12px]
                font-semibold
                leading-4
                text-[#444]
              "
            >
              Everything feels thoughtfully designed, from booking
              to the final result.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Custom;