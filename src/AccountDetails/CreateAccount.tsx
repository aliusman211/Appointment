import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

interface CreateAccountProps {
  onClose?: () => void;
  onConfirm?: (formData: any) => void; // 1. Changed from onContinue to onConfirm
}

export default function CreateAccount({ onClose, onConfirm }: CreateAccountProps) { // 2. Renamed here
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onConfirm) { // 3. Renamed here
      onConfirm(formData);
    } else {
      console.log("Form Submitted Successfully:", formData);
    }
  };

  return (
    <div className="w-full max-w-[520px] bg-white px-6 py-8 md:px-12 md:py-10 rounded-2xl mx-auto">
      {/* Header */}
      <h2 className="text-[22px] font-semibold text-center text-[#111111] mb-8 tracking-tight">
        Create your AppoinSet Account
      </h2>

      {/* Form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        {/* Email Field */}
        <div className="flex flex-col gap-1.5">
          <label className="text-[14px] text-[#4A4A4A] font-medium pl-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full h-12 px-5 border border-[#CCCCCC] rounded-full focus:outline-none focus:border-black transition text-[15px]"
          />
        </div>

        {/* First Name Field */}
        <div className="flex flex-col gap-1.5">
          <label className="text-[14px] text-[#4A4A4A] font-medium pl-1">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="w-full h-12 px-5 border border-[#CCCCCC] rounded-full focus:outline-none focus:border-black transition text-[15px]"
          />
        </div>

        {/* Last Name Field */}
        <div className="flex flex-col gap-1.5">
          <label className="text-[14px] text-[#4A4A4A] font-medium pl-1">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="w-full h-12 px-5 border border-[#CCCCCC] rounded-full focus:outline-none focus:border-black transition text-[15px]"
          />
        </div>

        {/* Phone Number Field */}
        <div className="flex flex-col gap-1.5">
          <label className="text-[14px] text-[#4A4A4A] font-medium pl-1">
            Phone Number
          </label>
          <div className="relative flex items-center">
            {/* Country Selector Graphic */}
            <div className="absolute left-4 flex items-center gap-1.5 pointer-events-none border-r border-[#E0E0E0] pr-3 h-6">
              <svg
                xmlns="http://w3.org"
                viewBox="0 0 7410 3900"
                className="w-6 h-4 rounded-sm object-cover"
              >
                <rect width="7410" height="3900" fill="#b22234" />
                <path d="M0,300h7410M0,900h7410M0,1500h7410M0,2100h7410M0,2700h7410M0,3300h7410" stroke="#fff" strokeWidth="300" />
                <rect width="2964" height="2100" fill="#3c3b6e" />
                <circle cx="1482" cy="1050" r="600" fill="#fff" opacity="0.15" />
              </svg>
              <span className="text-[14px] text-[#666666] font-medium">+1</span>
            </div>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              className="w-full h-12 pl-[76px] pr-5 border border-[#CCCCCC] rounded-full focus:outline-none focus:border-black transition text-[15px]"
            />
          </div>
          <p className="text-[12px] text-[#757575] pl-1 mt-0.5 leading-tight">
            We will send OTP to your number for conformation.
          </p>
        </div>

        {/* Password Field */}
        <div className="flex flex-col gap-1.5">
          <label className="text-[14px] text-[#4A4A4A] font-medium pl-1">
            Password
          </label>
          <div className="relative flex items-center">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full h-12 pl-5 pr-12 border border-[#CCCCCC] rounded-full focus:outline-none focus:border-black transition text-[15px]"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 text-[#888888] hover:text-[#444444] transition focus:outline-none"
            >
              {showPassword ? <Eye size={20} strokeWidth={1.5} /> : <EyeOff size={20} strokeWidth={1.5} />}
            </button>
          </div>
          <p className="text-[12px] text-[#757575] pl-1 mt-0.5 leading-relaxed max-w-[380px]">
            Password must be at least 8 characters long and must contain at least one number and one letter.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3 mt-4">
          <button
            type="submit"
            className="w-full h-12 bg-[#1A1A1A] text-white font-medium rounded-full hover:bg-black transition text-[15px]"
          >
            Continue
          </button>
          <button
            type="button"
            onClick={onClose}
            className="w-full h-12 bg-white text-black font-medium rounded-full border border-[#CCCCCC] hover:bg-[#F5F5F5] transition text-[15px]"
          >
            Back
          </button>
        </div>
      </form>
    </div>
  );
}
