
import { useState } from "react";

interface AuthCardProps {
  bookingDetails?: unknown;
  onClose?: () => void;
  onContinue?: (formData: { email: string }) => void;
  onForgotPassword?: () => void;
}

export default function AuthCard({
  onClose,
  onContinue,
  onForgotPassword,
}: AuthCardProps) {
  const [formData, setFormData] = useState({
    email: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (onContinue) {
      onContinue(formData);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <div className="relative w-full max-w-md rounded-2xl bg-[#f4f9ff] px-8 py-12 shadow-sm text-center">
        {/* Close Button */}
        {onClose && (
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-sm font-medium"
            type="button"
          >
            ✕
          </button>
        )}

        {/* Header Section */}
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Get Started
        </h2>

        <p className="text-lg font-semibold text-[#6b7280] leading-relaxed mb-8 px-4">
          Create an account or log in to AppointSet to manage your
          appointments.
        </p>

        {/* Email Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="text-left">
            <label
              htmlFor="email"
              className="block font-semibold text-lg text-gray-500 mb-1 pl-3"
            >
              Email
            </label>

            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({
                  email: e.target.value,
                })
              }
              className="w-full rounded-full border border-gray-300 bg-[#f4f9ff] px-5 py-3 text-sm text-gray-900 outline-none transition focus:border-gray-400"
              placeholder="name@example.com"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-full bg-[#1c1c1c] py-3 text-sm font-medium text-white transition hover:bg-black"
          >
            Continue
          </button>
        </form>

        {/* Forgot Password */}
        {onForgotPassword && (
          <button
            type="button"
            onClick={onForgotPassword}
            className="mt-4 text-sm font-medium text-gray-600 hover:text-black transition"
          >
            Forgot Password?
          </button>
        )}

        {/* Divider */}
        <div className="relative my-6 flex items-center justify-center">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>

          <span className="relative bg-[#f4f9ff] px-3 text-xs text-gray-500">
            or
          </span>
        </div>

        {/* Social Authentication Buttons */}
        <div className="space-y-3">
          {/* Google Button */}
          <button
            type="button"
            className="flex w-full items-center justify-center gap-3 rounded-full border border-gray-200 bg-white py-3 text-lg font-medium text-gray-700 shadow-sm transition hover:bg-gray-50"
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>

            Continue with Google
          </button>

          {/* Facebook Button */}
          <button
            type="button"
            className="flex w-full items-center justify-center gap-3 rounded-full border border-gray-200 bg-white py-3 text-lg font-medium text-gray-700 shadow-sm transition hover:bg-gray-50"
          >
            <svg className="h-6 w-6" fill="#1877F2" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>

            Continue with Facebook
          </button>

          {/* Apple Button */}
          <button
            type="button"
            className="flex w-full items-center justify-center gap-3 rounded-full border border-gray-200 bg-white py-3 text-lg font-medium text-gray-700 shadow-sm transition hover:bg-gray-50"
          >
            <svg
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.54 9.103 1.51 12.06 1.004 1.445 2.183 3.06 3.75 3.002 1.51-.06 2.077-.972 3.894-.972 1.807 0 2.333.972 3.914.94 1.611-.026 2.637-1.455 3.616-2.891 1.138-1.657 1.61-3.259 1.637-3.342-.036-.015-3.125-1.196-3.157-4.764-.026-2.984 2.447-4.415 2.56-4.482-1.396-2.04-3.553-2.272-4.303-2.326-2.003-.162-3.834 1.194-4.801 1.194zM15.98 3.49c.846-1.023 1.411-2.448 1.254-3.864-1.214.05-2.69.807-3.562 1.83-1.011 1.164-1.442 2.723-1.229 4.103 1.353.106 2.736-.632 3.537-2.069z" />
            </svg>

            Continue with Apple
          </button>
        </div>
      </div>
    </div>
  );
}
