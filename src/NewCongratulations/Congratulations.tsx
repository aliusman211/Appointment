const Congratulations = () => {
  return (
    <div className="min-h-screen w-full bg-[#f4fbff] flex items-center justify-center px-4">
      
      {/* Main Card */}
      <div
        className="
          w-full
          max-w-[520px]
          min-h-[500px]
          bg-white
          border
          border-[#dfe5e8]
          rounded-xl
          shadow-sm
          flex
          flex-col
          items-center
          justify-center
          px-8
          py-12
        "
      >

        {/* Circle + Dots Illustration */}
        <div className="relative w-[180px] h-[180px] mb-8">

          {/* Main Circle */}
          <div
            className="
              absolute
              left-1/2
              top-1/2
              -translate-x-1/2
              -translate-y-1/2
              w-[142px]
              h-[142px]
              rounded-full
              bg-[#111111]
            "
          />

          {/* Top Left Dot */}
          <span
            className="
              absolute
              top-[8px]
              left-[20px]
              w-[20px]
              h-[20px]
              rounded-full
              bg-[#111111]
            "
          />

          {/* Top Small Dot */}
          <span
            className="
              absolute
              top-[7px]
              left-1/2
              -translate-x-1/2
              w-[5px]
              h-[5px]
              rounded-full
              bg-[#111111]
            "
          />

          {/* Top Right Dot */}
          <span
            className="
              absolute
              top-[25px]
              right-[18px]
              w-[15px]
              h-[15px]
              rounded-full
              bg-[#111111]
            "
          />

          {/* Left Middle Dot */}
          <span
            className="
              absolute
              top-[95px]
              left-[10px]
              w-[10px]
              h-[10px]
              rounded-full
              bg-[#111111]
            "
          />

          {/* Right Middle Dot */}
          <span
            className="
              absolute
              top-[73px]
              right-[23px]
              w-[5px]
              h-[5px]
              rounded-full
              bg-[#111111]
            "
          />

          {/* Bottom Left Dot */}
          <span
            className="
              absolute
              bottom-[10px]
              left-[63px]
              w-[7px]
              h-[7px]
              rounded-full
              bg-[#111111]
            "
          />

          {/* Bottom Right Dot */}
          <span
            className="
              absolute
              bottom-[28px]
              right-[27px]
              w-[5px]
              h-[5px]
              rounded-full
              bg-[#111111]
            "
          />

        </div>

        {/* Heading */}
        <h1
          className="
            text-[30px]
            sm:text-[32px]
            font-bold
            text-[#111111]
            leading-tight
            text-center
          "
        >
          Congratulations!
        </h1>

        {/* Description */}
        <p
          className="
            mt-6
            max-w-[430px]
            text-center
            text-[18px]
            sm:text-[20px]
            leading-[1.4]
            text-[#222222]
          "
        >
          Your password has been changed successfully.
          <br />
          Please log in to continue.
        </p>

      </div>
    </div>
  );
};

export default Congratulations;