import { useState } from "react";
import { FiMail } from "react-icons/fi";

const Magnat = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email) {
      alert("Please enter your email address.");
      return;
    }

    console.log("Reset code requested for:", email);

    // Verify page par redirect
    window.history.pushState({}, "", "/verify-account");

    // Page ko refresh kiye baghair route change karne ke liye
    window.dispatchEvent(new PopStateEvent("popstate"));
  };

  return (
    <div className="min-h-screen bg-[#f5fbfe] flex items-center justify-center px-4">
      <div className="w-full max-w-[520px] bg-white border border-gray-200 rounded-xl shadow-sm px-12 py-14">

        <div className="mb-12">
          <h1 className="text-[25px] font-bold text-black leading-tight">
            Forget Password
          </h1>

          <p className="mt-2 text-[20px] text-[#444]">
            Enter your email to reset your password.
          </p>
        </div>

        <form onSubmit={handleSubmit}>

          <label
            htmlFor="email"
            className="block text-[21px] font-semibold text-[#444] mb-2"
          >
            Email Address
          </label>

          <div className="relative">
            <FiMail
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
              size={18}
            />

            <input
              id="email"
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-[64px] rounded-xl border border-gray-200 bg-[#f8fcfe] pl-11 pr-4 text-[18px] text-gray-700 placeholder:text-gray-400 outline-none transition focus:border-black focus:ring-1 focus:ring-black"
            />
          </div>

          <button
            type="submit"
            className="w-full h-[40px] mt-9 rounded-xl bg-black text-white text-[16px] font-semibold transition hover:bg-[#222] active:scale-[0.99]"
          >
            Continue
          </button>

        </form>
      </div>
    </div>
  );
};

export default Magnat;