
import { useState } from "react";
import {
  FiUser,
  FiMail,
  FiPhone,
  FiMapPin,
  FiLock,
  FiEye,
  FiEyeOff,
  FiArrowLeft,
} from "react-icons/fi";

interface AccountDataCreatingProps {
  onBack: () => void;
}

const AccountDataCreating = ({
  onBack,
}: AccountDataCreatingProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleSignUp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Sign Up ke baad Welcome page par wapas
    onBack();
  };

  return (
    <div className="min-h-screen w-full bg-[#f4fbfe] px-4 py-8">
      <div className="flex min-h-screen items-center justify-center">
        <div className="w-full max-w-[520px] rounded-[14px] border border-[#dfe5e8] bg-white px-8 py-10 shadow-sm sm:px-12 sm:py-12">

          {/* Back Button */}
          <button
            type="button"
            onClick={onBack}
            className="mb-6 flex cursor-pointer items-center gap-2 text-sm text-gray-500 transition hover:text-black"
          >
            <FiArrowLeft />
            Back
          </button>

          {/* Heading */}
          <div className="mb-8">
            <h1 className="text-[28px] font-bold text-black">
              Create Your Account
            </h1>

            <p className="mt-2 text-[18px] text-[#444]">
              Sign up to continue your booking experience.
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSignUp}
            className="space-y-3"
          >

            {/* Full Name */}
            <div>
              <label className="mb-2 block text-[16px] font-semibold text-[#444]">
                Full Name
              </label>

              <div className="flex h-[50px] items-center rounded-[12px] border border-[#dfe5e8] bg-[#f6fbfd] px-4">
                <FiUser className="mr-3 text-[#8b9296]" />

                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full cursor-pointer bg-transparent text-[14px] outline-none placeholder:text-[#8b9296]"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="mb-2 block text-[16px] font-semibold text-[#444]">
                Email Address
              </label>

              <div className="flex h-[50px] items-center rounded-[12px] border border-[#dfe5e8] px-4">
                <FiMail className="mr-3 text-[#8b9296]" />

                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full cursor-pointer bg-transparent text-[14px] outline-none placeholder:text-[#8b9296]"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="mb-2 block text-[18px] font-semibold text-[#444]">
                Phone Number
              </label>

              <div className="flex h-[50px] items-center rounded-[12px] border border-[#dfe5e8] bg-[#f6fbfd] px-4">
                <FiPhone className="mr-3 text-[#8b9296]" />

                <input
                  type="tel"
                  placeholder="+1 (555) 0000-0000"
                  className="w-full cursor-pointer bg-transparent text-[14px] outline-none placeholder:text-[#8b9296]"
                />
              </div>
            </div>

            {/* Location */}
            <div>
              <label className="mb-2 block text-[18px] font-semibold text-[#444]">
                Location
              </label>

              <div className="flex h-[50px] items-center rounded-[12px] border border-[#dfe5e8] bg-[#f6fbfd] px-4">
                <FiMapPin className="mr-3 text-[#8b9296]" />

                <input
                  type="text"
                  placeholder="City, Address, Zip Code"
                  className="w-full cursor-pointer bg-transparent text-[14px] outline-none placeholder:text-[#8b9296]"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="mb-2 block text-[18px] font-semibold text-[#444]">
                Password
              </label>

              <div className="flex h-[50px] items-center rounded-[12px] border border-[#dfe5e8] bg-[#f6fbfd] px-4">
                <FiLock className="mr-3 text-[#8b9296]" />

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="w-full cursor-pointer bg-transparent text-[14px] outline-none"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                  className="cursor-pointer text-[#777]"
                >
                  {showPassword ? (
                    <FiEyeOff className="h-5 w-5" />
                  ) : (
                    <FiEye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Terms */}
            <div className="flex items-center gap-3 pt-1">
              <input
                type="checkbox"
                id="terms"
                className="h-[18px] w-[18px] cursor-pointer"
              />

              <label
                htmlFor="terms"
                className="cursor-pointer text-[14px] text-[#777]"
              >
                I agree to the{" "}
                <span className="cursor-pointer font-bold text-black">
                  Terms & Privacy Policy
                </span>
                .
              </label>
            </div>

            {/* Sign Up Button */}
            <button
              type="submit"
              className="mt-5 h-[50px] w-full cursor-pointer rounded-[20px] bg-black text-[14px] font-semibold text-white transition hover:opacity-80"
            >
              Sign Up
            </button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default AccountDataCreating;
