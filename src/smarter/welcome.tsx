
import { useState, type FormEvent } from "react";

import Container1 from "../assets/signInimages/Container (1).png";
import Container2 from "../assets/signInimages/Container (2).png";
import Container3 from "../assets/signInimages/Container (3).png";

import Icon1 from "../assets/signInimages/Icon (1).png";
import Icon2 from "../assets/signInimages/Icon (2).png";
import Icon3 from "../assets/signInimages/Icon (3).png";
import Icon4 from "../assets/signInimages/Icon (4).png";
import Icon5 from "../assets/signInimages/Icon (5).png";
import Icon6 from "../assets/signInimages/Icon (6).png";
import Icon7 from "../assets/signInimages/Icon (7).png";
import Icon8 from "../assets/signInimages/Icon (8).png";
import Icon9 from "../assets/signInimages/Icon (9).png";

import Group3 from "../assets/signInimages/Group 3.png";

interface SignInProps {
  onCreateAccount?: () => void;
  onBack?: () => void;
  onSignIn?: () => void;
  onForgotPassword?: () => void;
}

interface Feature {
  icon: string;
  label: string;
}

export default function Welcome({
  onCreateAccount,
  onBack,
  onSignIn,
  onForgotPassword,
}: SignInProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // =====================================================
  // SIGN IN
  // =====================================================
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Remember Me:", rememberMe);

    // After Sign In -> Open Home Page
    if (onSignIn) {
      onSignIn();
    }
  };

  // =====================================================
  // FEATURES
  // =====================================================
  const features: Feature[] = [
    {
      icon: Icon1,
      label: "Instant Appointment Booking",
    },
    {
      icon: Icon2,
      label: "Booking History & Reminders",
    },
    {
      icon: Icon3,
      label: "Secure Payments",
    },
    {
      icon: Icon4,
      label: "Personalized Experiences",
    },
  ];

  // =====================================================
  // BACK BUTTON
  // =====================================================
  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      window.history.back();
    }
  };

  // =====================================================
  // CREATE ACCOUNT
  // =====================================================
  const handleCreateAccount = () => {
    if (onCreateAccount) {
      onCreateAccount();
    }
  };

  // =====================================================
  // FORGOT PASSWORD
  // =====================================================
  const handleForgotPassword = () => {
    if (onForgotPassword) {
      onForgotPassword();
    }
  };

  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-white font-sans text-[#1A1A1A]">
      <div className="mx-auto flex min-h-screen w-full max-w-[1600px] flex-col lg:flex-row">

        {/* =====================================================
            LEFT SIDE
        ===================================================== */}
        <section className="flex w-full flex-col justify-between px-5 py-8 sm:px-8 sm:py-10 md:px-12 lg:w-1/2 lg:px-12 lg:py-12 xl:px-20">

          {/* =====================================================
              LOGO
          ===================================================== */}
          <button
            type="button"
            onClick={handleBack}
            className="flex w-fit flex-col items-center border-0 bg-transparent text-left"
          >
            <div className="mb-[-8px] flex items-center justify-center">
              <img
                src={Group3}
                alt="AppointSet Logo"
                className="h-[28px] w-[28px] object-contain sm:h-[30px] sm:w-[30px]"
              />
            </div>

            <span className="font-serif text-[30px] font-bold leading-none tracking-[-1.5px] sm:text-[34px] md:text-[38px]">
              AppointSet
            </span>
          </button>

          {/* =====================================================
              CONTENT
          ===================================================== */}
          <div className="my-12 max-w-[500px] lg:my-8 xl:my-18">

            <h1 className="text-2xl font-bold leading-tight tracking-tight text-[#0F172A] sm:text-3xl md:text-4xl">
              Book Smarter.
              <span className="block">
                Experience Better.
              </span>
            </h1>

            <p className="mt-4 max-w-[420px] text-sm font-medium leading-6 text-gray-500 sm:text-base">
              Find services, book instantly, stay connected.
            </p>

            {/* =====================================================
                FEATURES
            ===================================================== */}
            <div className="mt-8 space-y-4">
              {features.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-black">
                    <img
                      src={item.icon}
                      alt=""
                      className="h-4 w-4 object-contain brightness-0 invert"
                    />
                  </div>

                  <span className="text-sm font-semibold text-black sm:text-[15px]">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* =====================================================
              BOTTOM CONTENT
          ===================================================== */}
          <div className="space-y-6">

            {/* =====================================================
                APPOINTMENT CARD
            ===================================================== */}
            <div className="flex w-full max-w-[380px] items-center justify-between gap-3 rounded-2xl bg-[#E0F2FE] p-4 shadow-sm">

              <div className="flex min-w-0 items-center gap-3">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#3B82F6]">
                  <img
                    src={Icon1}
                    alt=""
                    className="h-5 w-5 object-contain"
                  />
                </div>

                <div className="min-w-0">
                  <h4 className="text-xs font-bold text-gray-400">
                    Next Appointment
                  </h4>

                  <p className="text-xs font-bold text-blue-600">
                    Tomorrow, 10:30 AM
                  </p>

                  <p className="mt-0.5 truncate text-xs font-bold text-gray-800">
                    Deep Tissue Massage
                  </p>
                </div>
              </div>

              <span className="mt-10 shrink-0 rounded-full bg-[#10B981] px-2 py-1 text-[9px] font-bold uppercase text-white">
                Confirmed
              </span>
            </div>

            {/* =====================================================
                TRUSTED USERS
            ===================================================== */}
            <div className="flex items-center gap-3">

              <div className="flex shrink-0 -space-x-3">

                <img
                  src={Container1}
                  alt="Customer 1"
                  className="h-8 w-8 rounded-full border-2 border-white object-cover"
                />

                <img
                  src={Container2}
                  alt="Customer 2"
                  className="h-8 w-8 rounded-full border-2 border-white object-cover"
                />

                <img
                  src={Container3}
                  alt="Customer 3"
                  className="h-8 w-8 rounded-full border-2 border-white object-cover"
                />

              </div>

              <p className="text-xs font-medium leading-5 text-gray-800 sm:text-sm">
                Trusted by modern service businesses
                <br />
                and customers.
              </p>

            </div>
          </div>
        </section>

        {/* =====================================================
            RIGHT SIDE - SIGN IN
        ===================================================== */}
        <section className="flex w-full flex-1 items-center justify-center bg-[#F6FCFF] px-5 py-10 sm:px-8 md:px-12 lg:w-1/2 lg:px-12 lg:py-12 xl:px-20">

          <div className="w-full max-w-[560px]">

            {/* =====================================================
                HEADING
            ===================================================== */}
            <div className="mb-7">

              <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                Welcome Back
              </h2>

              <p className="mt-2 text-sm leading-5 text-gray-500">
                Sign in to continue your booking experience.
              </p>

            </div>

            {/* =====================================================
                FORM
            ===================================================== */}
            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              {/* =====================================================
                  EMAIL
              ===================================================== */}
              <div>

                <label
                  htmlFor="email"
                  className="block text-xs font-bold uppercase tracking-wide text-gray-700"
                >
                  Email Address
                </label>

                <div className="relative mt-2">

                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <img
                      src={Icon8}
                      alt=""
                      className="h-4 w-4 object-contain opacity-50"
                    />
                  </span>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={email}
                    onChange={(event) =>
                      setEmail(event.target.value)
                    }
                    placeholder="Enter your email address"
                    className="h-[48px] w-full rounded-xl border border-gray-200 bg-white py-3 pl-10 pr-4 text-sm text-gray-900 outline-none transition-all placeholder:text-gray-400 focus:border-black focus:ring-1 focus:ring-black"
                  />

                </div>
              </div>

              {/* =====================================================
                  PASSWORD
              ===================================================== */}
              <div>

                <label
                  htmlFor="password"
                  className="block text-xs font-bold uppercase tracking-wide text-gray-700"
                >
                  Password
                </label>

                <div className="relative mt-2">

                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <img
                      src={Icon5}
                      alt=""
                      className="h-4 w-4 object-contain opacity-50"
                    />
                  </span>

                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    required
                    autoComplete="current-password"
                    value={password}
                    onChange={(event) =>
                      setPassword(event.target.value)
                    }
                    placeholder="Enter your password"
                    className="h-[48px] w-full rounded-xl border border-gray-200 bg-white py-3 pl-10 pr-11 text-sm text-gray-900 outline-none transition-all placeholder:text-gray-400 focus:border-black focus:ring-1 focus:ring-black"
                  />

                  {/* =====================================================
                      SHOW / HIDE PASSWORD
                  ===================================================== */}
                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(
                        (previous) => !previous
                      )
                    }
                    aria-label={
                      showPassword
                        ? "Hide password"
                        : "Show password"
                    }
                    className="absolute inset-y-0 right-0 flex cursor-pointer items-center pr-3 text-gray-400 transition hover:text-black"
                  >
                    <img
                      src={Icon9}
                      alt=""
                      className="h-3.5 w-4 object-contain opacity-60"
                    />
                  </button>

                </div>
              </div>

              {/* =====================================================
                  REMEMBER + FORGOT PASSWORD
              ===================================================== */}
              <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-medium">

                <label className="flex cursor-pointer items-center gap-2 text-gray-600">

                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(event) =>
                      setRememberMe(
                        event.target.checked
                      )
                    }
                    className="h-4 w-4 rounded border-gray-300 text-black accent-black focus:ring-black"
                  />

                  <span>
                    Remember Me
                  </span>

                </label>

                {/* =====================================================
                    FORGOT PASSWORD BUTTON
                ===================================================== */}
                <button
                  type="button"
                  onClick={handleForgotPassword}
                  className="cursor-pointer text-gray-600 transition hover:text-black hover:underline"
                >
                  Forgot Password?
                </button>

              </div>

              {/* =====================================================
                  SIGN IN BUTTON
              ===================================================== */}
              <button
                type="submit"
                className="h-[48px] w-full cursor-pointer rounded-xl bg-black px-4 text-center text-sm font-semibold text-white transition-all hover:bg-zinc-800 active:scale-[0.99]"
              >
                Sign In
              </button>

            </form>

            {/* =====================================================
                DIVIDER
            ===================================================== */}
            <div className="relative my-7 flex items-center justify-center">

              <div className="absolute inset-x-0 flex items-center">
                <div className="w-full border-t border-gray-200" />
              </div>

              <span className="relative bg-[#F6FCFF] px-3 text-sm text-gray-400">
                Or continue with
              </span>

            </div>

            {/* =====================================================
                SOCIAL LOGIN
            ===================================================== */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">

              {/* GOOGLE */}
              <button
                type="button"
                className="flex h-[46px] cursor-pointer items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-4 text-xs font-semibold text-gray-800 shadow-sm transition hover:bg-gray-50 active:scale-[0.99]"
              >
                <span className="h-5 w-5">
                  <img
                    src={Icon6}
                    alt="Google"
                    className="h-full w-full object-contain"
                  />
                </span>

                Google
              </button>

              {/* FACEBOOK */}
              <button
                type="button"
                className="flex h-[46px] cursor-pointer items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-4 text-xs font-semibold text-gray-800 shadow-sm transition hover:bg-gray-50 active:scale-[0.99]"
              >
                <span className="h-5 w-5">
                  <img
                    src={Icon7}
                    alt="Facebook"
                    className="h-full w-full object-contain"
                  />
                </span>

                Facebook
              </button>

            </div>

            {/* =====================================================
                CREATE ACCOUNT
            ===================================================== */}
            <p className="mt-7 text-center text-xs font-normal text-gray-500 sm:text-sm">

              Don't have an account?{" "}

              <button
                type="button"
                onClick={handleCreateAccount}
                className="cursor-pointer font-bold text-black transition hover:underline"
              >
                Create Account
              </button>

            </p>

          </div>
        </section>
      </div>
    </main>
  );
}

