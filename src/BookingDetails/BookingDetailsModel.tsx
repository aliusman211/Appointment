import { FiX } from "react-icons/fi";
import clinicImage from "../assets/Bookingimage/clinic.png";

interface BookingDetailsModelProps {
  bookingDetails: any;
  onClose: () => void;
  onConfirm: (details: any) => void;
}

export default function BookingDetailsModel({ bookingDetails, onClose, onConfirm }: BookingDetailsModelProps) {
  const title = bookingDetails?.service?.title || "HydraGlow Facial";
  const price = bookingDetails?.service?.price || "$120.00";

  return (
    <div className="relative w-full max-w-[620px] rounded-[12px] bg-white px-8 py-10 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-[#F0F0F0] flex flex-col items-center">
      <div className="mb-6 flex w-full items-center justify-between">
        <button 
          onClick={onClose} 
          className="flex items-center gap-1 text-[14px] font-medium text-[#777777] hover:text-black transition-colors cursor-pointer"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </button>
        <button
          type="button"
          onClick={onClose}
          className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-[#EFF9FF] text-neutral-600 transition hover:bg-neutral-200 hover:text-black"
          aria-label="Close modal"
        >
          <FiX size={18} />
        </button>
      </div>
      <div className="mb-8 flex items-center gap-3 bg-black text-white rounded-full pl-3 pr-6 py-2 shadow-sm max-w-[90%]">
        <div className="h-9 w-9 shrink-0 overflow-hidden rounded-full bg-neutral-700 border border-neutral-600 flex items-center justify-center">
          <img
            className="h-full w-full object-cover rounded-full"
            src={clinicImage}
            alt="Logo"
          />
        </div>
        <div className="flex flex-col min-w-0">
          <h1 className="text-[15px] font-semibold tracking-tight text-white leading-tight truncate">
            Lumina Dermal Lab
          </h1>
          <p className="text-[10px] text-neutral-400 font-medium leading-none mt-0.5 truncate">
            Precision aesthetics, Refined clinical care
          </p>
        </div>
      </div>
      <div className="w-full bg-[#F4F9FF] rounded-[16px] px-6 py-8 border border-[#E8F1FC]">
        <h2 className="text-[16px] font-semibold text-[#111111] text-center mb-6 tracking-tight">
          Your Booking Detail
        </h2>

        <div className="bg-white rounded-[12px] border border-[#EAF2FC] p-3 shadow-[0_2px_8px_rgba(0,0,0,0.01)]">
          <div className="space-y-4">
            <div className="flex items-center  justify-between text-[20px]">
              <span className="font-bold text-[#222222]">{title}</span>
              <span className="font-bold text-[#111111]">{price}</span>
            </div>
          </div>
  </div>
          <div className="mt-3 flex items-center justify-between text-[14px]">
            <button
              onClick={onClose}
              className="text-[13px] font-semibold text-[#222222] hover:text-neutral-600 transition-colors flex items-center gap-1 cursor-pointer"
            >
              + Add more services
            </button>
          </div>
      
  <div className="mt-4 w-full border-t border-[#DDDDDD]"></div>
        <div className="mt-2 px-5 flex items-center justify-between text-[14px]">
          <span className="font-semibold text-[#222222]">Total</span>
          <span className="text-[16px] font-bold text-[#111111]">{price}</span>
        </div>
  <div className="mt-2 w-full border-t border-[#DDDDDD]"></div>
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => onConfirm(bookingDetails)}
            className="h-[40px] w-full max-w-[200px] rounded-full bg-[#1A1A1A] font-semibold text-[14px] text-white transition-all duration-200 hover:bg-black active:scale-[0.98] shadow-sm tracking-wide cursor-pointer"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
