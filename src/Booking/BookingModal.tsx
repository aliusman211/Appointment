import { useState } from "react";
import {
  FiChevronLeft,
  FiChevronRight,
  FiPlus,
  FiX,
} from "react-icons/fi";

import Calendericon from "../assets/Bookingimage/Calendericon.png";
import clinicImage from "../assets/Bookingimage/clinic.png";

interface Service {
  id?: number;
  title: string;
  description: string;
  price: string;
  time: string;
}

interface BookingData {
  service: Service;
  day: number;
  period: string;
  time: string;
}

interface BookingModalProps {
  service?: Service;
  onClose?: () => void;
  onContinue?: (data: BookingData) => void;
}

function BookingModal({
  service,
  onClose,
  onContinue,
}: BookingModalProps) {
  const days = [
    { day: "Tue", date: 12 },
    { day: "Wed", date: 13 },
    { day: "Thu", date: 14 },
    { day: "Fri", date: 15 },
    { day: "Sat", date: 16 },
    { day: "Sun", date: 17 },
    { day: "Mon", date: 18 },
    { day: "Tue", date: 19 },
  ];

  const timeSlots = [
    "10:00 AM",
    "10:15 AM",
    "10:30 AM",
    "10:45 AM",
    "11:00 AM",
    "11:15 AM",
    "11:30 AM",
  ];

  const [selectedPeriod, setSelectedPeriod] =
    useState("Morning");

  const [selectedDay, setSelectedDay] =
    useState(13);

  const [selectedTime, setSelectedTime] =
    useState("10:00 AM");

  const selectedService: Service = service || {
    title: "Relaxation Face Massage",
    description:
      "Improves circulation and relieves facial tension",
    price: "$120",
    time: "60 min",
  };

  const handleContinue = () => {
    const bookingData: BookingData = {
      service: selectedService,
      day: selectedDay,
      period: selectedPeriod,
      time: selectedTime,
    };

    if (onContinue) {
      onContinue(bookingData);
    }
  };

  return (
    <div
      className="
        fixed
        inset-0
        z-[999]
        overflow-y-auto
        bg-black/40
        p-0
        backdrop-blur-[3px]
        md:p-4
      "
      onClick={onClose}
    >
      {/* Booking Container */}
      <div
        className="
          relative
          mx-auto
          min-h-screen
          w-full
          max-w-[800px]
          bg-white
          p-4
          shadow-2xl
          md:min-h-0
          md:rounded-[18px]
          md:p-5
        "
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            className="
              absolute
              right-5
              top-5
              z-10
              flex
              h-9
              w-9
              cursor-pointer
              items-center
              justify-center
              rounded-full
              bg-[#F3F4F6]
              text-neutral-600
              transition
              hover:bg-neutral-200
              hover:text-black
            "
            aria-label="Close booking"
          >
            <FiX size={18} />
          </button>
        )}

        {/* Back Button */}
        <button
          type="button"
          onClick={onClose}
          className="
            mb-5
            flex
            h-[45px]
            w-full
            max-w-[120px]
            cursor-pointer
            items-center
            justify-center
            gap-1.5
            rounded-full
            bg-white
            text-sm
            font-medium
            text-neutral-800
            transition
            hover:bg-neutral-100
            active:scale-[0.99]
          "
        >
          <FiChevronLeft size={17} />
          Back
        </button>

        {/* Clinic Header */}
        <div
          className="
            mx-auto
            flex
            max-w-fit
            items-center
            gap-3
            rounded-full
            bg-black
            px-5
            py-2
            pr-8
            text-white
          "
        >
          <div
            className="
              h-10
              w-10
              overflow-hidden
              rounded-full
              border
              border-neutral-700
              bg-neutral-800
            "
          >
            <img
              src={clinicImage}
              alt="Clinic Logo"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-col text-left">
            <span className="text-sm font-bold tracking-wide">
              Lumina Dermal Lab
            </span>

            <span className="text-[10px] text-neutral-400">
              Precision aesthetics. Refined clinical care
            </span>
          </div>
        </div>

        {/* Calendar Title */}
        <div
          className="
            mt-7
            flex
            items-center
            justify-center
            gap-2
            text-neutral-800
          "
        >
          <img
            className="h-[20px] w-[20px]"
            src={Calendericon}
            alt="Calendar"
          />

          <h2
            className="
              text-lg
              font-bold
              tracking-tight
              text-[#111111]
            "
          >
            April - May 2026
          </h2>
        </div>

        {/* Morning / Afternoon / Evening */}
        <div
          className="
            mx-auto
            mt-5
            flex
            cursor-pointer
            max-w-sm
            justify-between
            rounded-xl
            border
            border-neutral-100
            bg-[#F6FCFF]
            p-1
          "
        >
          {["Morning", "Afternoon", "Evening"].map(
            (period) => {
              const isSelected =
                selectedPeriod === period;

              return (
                <button
                  key={period}
                  type="button"
                  onClick={() =>
                    setSelectedPeriod(period)
                  }
                  className={`
                    flex-1
                    cursor-pointer
                    rounded-lg
                    py-2
                    text-xs
                    font-semibold
                    transition
                    ${
                      isSelected
                        ? "bg-white text-neutral-800 shadow-sm"
                        : "text-neutral-400 hover:text-neutral-600"
                    }
                  `}
                >
                  {period}
                </button>
              );
            }
          )}
        </div>

        {/* Date Selector */}
        <div
          className="
            mt-6
            flex
            h-[100px]
            w-full
            items-center
            gap-2
            rounded-[20px]
            bg-[#F6FCFF]
            px-2
          "
        >
          {/* Left Arrow */}
          <button
            type="button"
            className="
              flex
              h-11
              w-11
              shrink-0
              cursor-pointer
              items-center
              justify-center
              rounded-xl
              bg-[#F8F9FA]
              text-neutral-600
              transition
              hover:bg-neutral-100
            "
          >
            <FiChevronLeft size={18} />
          </button>

          {/* Days */}
          <div
            className="
              flex
              flex-1
              items-center
              justify-between
              gap-2
              overflow-x-auto
              pb-1
            "
          >
            {days.map((item) => {
              const isSelected =
                selectedDay === item.date;

              return (
                <button
                  key={item.date}
                  type="button"
                  onClick={() =>
                    setSelectedDay(item.date)
                  }
                  className={`
                    flex
                    min-w-[58px]
                    aspect-[1/1.1]
                    cursor-pointer
                    flex-col
                    items-center
                    justify-center
                    rounded-xl
                    border
                    transition
                    ${
                      isSelected
                        ? "border-black bg-black text-white"
                        : "border-neutral-100 bg-white text-neutral-500 hover:border-neutral-300"
                    }
                  `}
                >
                  <span
                    className={`
                      text-[11px]
                      ${
                        isSelected
                          ? "text-neutral-300"
                          : "text-neutral-400"
                      }
                    `}
                  >
                    {item.day}
                  </span>

                  <span className="mt-0.5 text-base font-bold">
                    {item.date}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Arrow */}
          <button
            type="button"
            className="
              flex
              h-11
              w-11
              shrink-0
              cursor-pointer
              items-center
              justify-center
              rounded-xl
              bg-[#F8F9FA]
              text-neutral-600
              transition
              hover:bg-neutral-100
            "
          >
            <FiChevronRight size={18} />
          </button>
        </div>

        {/* Time Selector */}
        <div
          className="
            mt-6
            flex
            items-center
            gap-2
            rounded-xl
            bg-[#0F172A]
            p-2
          "
        >
          {/* Left Arrow */}
          <button
            type="button"
            className="
              shrink-0
              p-1
              text-white
              opacity-70
              transition
              hover:opacity-100
            "
          >
            <FiChevronLeft size={16} />
          </button>

          {/* Time Slots */}
          <div
            className="
              flex
              flex-1
              items-center
              gap-3
              overflow-x-auto
              py-1
            "
          >
            {timeSlots.map((time) => {
              const isSelected =
                selectedTime === time;

              return (
                <button
                  key={time}
                  type="button"
                  onClick={() =>
                    setSelectedTime(time)
                  }
                  className={`
                    whitespace-nowrap
                    rounded-lg
                    px-4
                    py-2
                    cursor-pointer
                    text-xs
                    font-semibold
                    tracking-wide
                    transition
                    ${
                      isSelected
                        ? "bg-white font-bold text-black shadow-md"
                        : "text-neutral-400 hover:text-white"
                    }
                  `}
                >
                  {time}
                </button>
              );
            })}
          </div>

          {/* Right Arrow */}
          <button
            type="button"
            className="
              shrink-0
              p-1
              text-white
              opacity-70
              transition
              hover:opacity-100
            "
          >
            <FiChevronRight size={16} />
          </button>
        </div>

        {/* Selected Service */}
        <div
          className="
            mt-8
            rounded-xl
            border
            border-neutral-100/60
            bg-[#F6FCFF]
            p-5
            text-left
          "
        >
          <div
            className="
              flex
              items-start
              justify-between
              gap-4
            "
          >
            {/* Service Details */}
            <div className="min-w-0">
              <h3
                className="
                  text-sm
                  font-semibold
                  tracking-tight
                  text-neutral-800
                "
              >
                {selectedService.title}
              </h3>

              <p
                className="
                  mt-1
                  text-[11px]
                  leading-5
                  text-neutral-500
                "
              >
                {selectedService.description}
              </p>
            </div>

            {/* Price */}
            <div className="shrink-0 text-right">
              <span
                className="
                  text-sm
                  font-bold
                  text-neutral-900
                "
              >
                {selectedService.price}
              </span>

              <p
                className="
                  mt-0.5
                  text-[10px]
                  font-bold
                  text-neutral-400
                "
              >
                {selectedTime} - 11:00 AM
              </p>
            </div>
          </div>

          <div className="my-4 border-t border-neutral-200/50" />

          {/* Total */}
          <div
            className="
              flex
              items-baseline
              justify-end
              gap-2
              text-right
            "
          >
            <span
              className="
                text-xs
                font-medium
                text-neutral-500
              "
            >
              Total:
            </span>

            <span
              className="
                text-xl
                font-extrabold
                text-neutral-900
              "
            >
              {selectedService.price}
            </span>

            <span
              className="
                text-xs
                font-bold
                text-neutral-400
              "
            >
              {selectedService.time}
            </span>
          </div>
        </div>

        {/* Add More Services */}
        <button
          type="button"
          className="
            mt-5
            flex
            cursor-pointer
            items-center
            gap-1.5
            text-xs
            font-bold
            text-neutral-800
            transition
            hover:text-black
          "
        >
          <FiPlus
            size={16}
            strokeWidth={2.5}
          />

          <span>Add more services</span>
        </button>

        {/* Continue */}
        <div className="mt-5 flex justify-center">
          <button
            type="button"
            onClick={handleContinue}
            className="
              h-[40px]
              w-full
              max-w-[200px]
              cursor-pointer
              rounded-full
              bg-[#1A1A1A]
              text-sm
              font-medium
              text-white
              transition
              hover:bg-black
              active:scale-[0.99]
            "
          >
            Continue
          </button>
        </div>

        {/* Bottom Spacing */}
        <div className="h-6" />
      </div>
    </div>
  );
}

export default BookingModal;