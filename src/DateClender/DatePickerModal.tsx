import { useState } from "react";
import { FiX } from "react-icons/fi";
import calendericon from "../assets/Bookingimage/calendericon.png";
interface Service {
  id: number;
  title: string;
  description: string;
  price: string;
  time: string;
}

interface BookingData {
  service: Service;
  day: string;
  period: string;
  time: string;
}

interface DatePickerModalProps {
  bookingData: BookingData | null;
  onClose: () => void;
  onConfirm: (finalSelection: any) => void;
}

export default function DatePickerModal({ bookingData, onClose, onConfirm }: DatePickerModalProps) {
  const [selectedDay, setSelectedDay] = useState<string>("25");

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

  const calendarDays = [
    { day: "01", type: "current" }, { day: "02", type: "current" }, { day: "03", type: "current" },
    { day: "04", type: "current" }, { day: "05", type: "current" }, { day: "06", type: "current" },
    { day: "07", type: "current" }, { day: "08", type: "current" }, { day: "09", type: "current" },
    { day: "10", type: "current" }, { day: "11", type: "current" }, { day: "12", type: "current" },
    { day: "13", type: "current" }, { day: "14", type: "current" }, { day: "15", type: "current" },
    { day: "16", type: "current" }, { day: "17", type: "current" }, { day: "18", type: "current" },
    { day: "19", type: "current" }, { day: "20", type: "current" }, { day: "21", type: "current" },
    { day: "22", type: "current" }, { day: "23", type: "current" }, { day: "24", type: "current" },
    { day: "25", type: "current" }, { day: "26", type: "current" }, { day: "27", type: "current" },
    { day: "28", type: "current" }, { day: "29", type: "current" }, { day: "30", type: "current" },
    { day: "31", type: "current" },
    { day: "01", type: "next" }, { day: "02", type: "next" }, { day: "03", type: "next" },
    { day: "04", type: "next" }
  ];
  const handleContinue = () => {
    if (!bookingData) return;
    const finalizedDetails = {
      ...bookingData,
      selectedDate: `2026-05-${selectedDay}`,
    };
    onConfirm(finalizedDetails);
  };
  return (
    <div className="relative w-full max-w-[800px] rounded-[12px] bg-white px-8 py-10 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-[#F0F0F0]">
      
      <div className="mb-6 flex items-center justify-start">
        <button 
          onClick={onClose} 
          className="flex items-center gap-2 text-[14px] font-medium text-[#777777] hover:text-black transition-colors"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </button>

        {/* Close Button */}
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            className="absolute right-5 top-5 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-[#F3F4F6] text-neutral-600 transition hover:bg-neutral-200 hover:text-black"
            aria-label="Close booking"
          >
            <FiX size={18} />
          </button>
        )}
      </div>

      <div className="mb-8 flex flex-col items-center justify-center">
        <h2 className="text-[18px] font-bold text-[#111111]">Select Date & Time</h2>
       <div
          className="
            mt-3
            flex
            items-center
            justify-center
            gap-2
            text-neutral-800
          "
        >
          <img
            className="h-[20px] w-[20px]"
            src={calendericon}
            alt="Calendar"
          />

          <h2
            className="
              text-lg
              font-semibold
              tracking-tight
              text-[#111111]
            ">
            April - May 2026
          </h2>
        </div>
      </div>

      <div className="mb-4 grid grid-cols-7 text-center">
        {daysOfWeek.map((day) => (
          <span 
            key={day} 
            className={`text-[13px] font-medium tracking-wide ${day === "Sun" ? "text-red-500" : "text-[#777777]"}`}
          >
            {day}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-x-[10px] gap-y-[12px]">
        {calendarDays.map((item, idx) => {
          const isSelected = selectedDay === item.day && item.type === "current";
          return (
            <button
              key={idx}
              type="button"
              onClick={() => item.type === "current" && setSelectedDay(item.day)}
              className={`flex h-[56px] w-full items-center justify-center rounded-[12px] text-[14px] font-medium transition-all duration-200 
                ${isSelected 
                  ? "bg-black text-white font-semibold shadow-md" 
                  : "border border-[#EAEAEA] text-[#333333] hover:border-black/30 bg-white"
                } 
                ${item.type === "next" ? "opacity-40 cursor-not-allowed bg-[#FAFAFA]" : ""}
              `}
              disabled={item.type === "next"}
            >
              {item.day}
            </button>
          );
        })}
      </div>

      <div className="mt-10 flex justify-center">
        <button 
          onClick={handleContinue} 
          className="h-[40px] w-full max-w-[200px] rounded-full bg-[#1A1A1A] font-medium text-white transition-all duration-200 hover:bg-black active:scale-[0.98] shadow-sm"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
