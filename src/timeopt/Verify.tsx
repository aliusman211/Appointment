import { useRef, useState } from "react";

export default function Verify() {
  const [otp, setOtp] = useState<string[]>([
    "4",
    "6",
    "7",
    "",
  ]);

  const inputRefs = useRef<
    Array<HTMLInputElement | null>
  >([]);

  // =====================================================
  // HANDLE OTP CHANGE
  // =====================================================
  const handleChange = (
    value: string,
    index: number
  ) => {
    const digit = value
      .replace(/\D/g, "")
      .slice(-1);

    const newOtp = [...otp];

    newOtp[index] = digit;

    setOtp(newOtp);

    if (
      digit &&
      index < otp.length - 1
    ) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  // =====================================================
  // HANDLE KEY DOWN
  // =====================================================
  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (
      event.key === "Backspace" &&
      !otp[index] &&
      index > 0
    ) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  // =====================================================
  // HANDLE PASTE
  // =====================================================
  const handlePaste = (
    event: React.ClipboardEvent<HTMLInputElement>
  ) => {
    event.preventDefault();

    const pastedValue = event.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, 4);

    if (!pastedValue) {
      return;
    }

    const newOtp = ["", "", "", ""];

    pastedValue
      .split("")
      .forEach((digit, index) => {
        newOtp[index] = digit;
      });

    setOtp(newOtp);

    const nextIndex = Math.min(
      pastedValue.length,
      3
    );

    inputRefs.current[nextIndex]?.focus();
  };

  // =====================================================
  // VERIFY ACCOUNT
  // =====================================================
  const handleVerify = () => {
    const code = otp.join("");

    if (code.length !== 4) {
      alert(
        "Please enter the complete verification code."
      );
      return;
    }

    console.log(
      "Verification Code:",
      code
    );

    // Congratulations page
    window.history.pushState(
      {
        page: "congratulations",
      },
      "",
      "/congratulations"
    );

    window.dispatchEvent(
      new PopStateEvent("popstate")
    );
  };

  // =====================================================
  // RESEND CODE
  // =====================================================
  const handleResend = () => {
    console.log("OTP resent");
  };

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-[#f4fbff] px-4">

      <div
        className="
          w-full
          max-w-[520px]
          rounded-xl
          border
          border-[#dfe5e8]
          bg-white
          px-8
          py-12
          shadow-sm
          sm:px-12
          sm:py-14
        "
      >

        {/* Heading */}
        <div className="text-center">

          <h1
            className="
              text-[28px]
              font-bold
              leading-tight
              text-black
              sm:text-[30px]
            "
          >
            Verify Your Account
          </h1>

          <p
            className="
              mt-3
              text-[17px]
              text-[#444]
              sm:text-[20px]
            "
          >
            Verify using the code sent to you.
          </p>

        </div>

        {/* OTP Inputs */}
        <div
          className="
            mt-10
            flex
            justify-center
            gap-3
            sm:mt-11
            sm:gap-6
          "
        >

          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(element) => {
                inputRefs.current[index] =
                  element;
              }}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(event) =>
                handleChange(
                  event.target.value,
                  index
                )
              }
              onKeyDown={(event) =>
                handleKeyDown(
                  event,
                  index
                )
              }
              onPaste={handlePaste}
              aria-label={`OTP digit ${
                index + 1
              }`}
              className="
                h-14
                w-14
                rounded-xl
                border
                border-[#edf1f3]
                bg-[#f8fcfe]
                text-center
                text-[22px]
                text-[#444]
                outline-none
                shadow-[0_1px_5px_rgba(0,0,0,0.08)]
                transition-all
                focus:border-gray-400
                focus:ring-2
                focus:ring-gray-100
                sm:h-16
                sm:w-16
                sm:text-[24px]
              "
            />
          ))}

        </div>

        {/* Verify Button */}
        <button
          type="button"
          onClick={handleVerify}
          className="
            mt-10
            h-[58px]
            w-full
            rounded-[10px]
            bg-black
            text-[17px]
            font-semibold
            text-white
            transition
            hover:bg-[#222]
            active:scale-[0.99]
            sm:mt-12
            sm:h-[61px]
            sm:text-[18px]
          "
        >
          Verify Account
        </button>

        {/* Resend */}
        <div className="mt-5 text-center">

          <button
            type="button"
            onClick={handleResend}
            className="
              text-sm
              font-medium
              text-gray-600
              underline
              underline-offset-4
              transition
              hover:text-black
            "
          >
            Resend Code
          </button>

        </div>

      </div>

    </div>
  );
}