import type { ReactNode } from "react";

import group59 from "../assets/Group 59.png";
import group60 from "../assets/Group 60.png";
import group61 from "../assets/Group 61.png";
import group65 from "../assets/Group 65.png";

const cards = {
  bookingImage: "/images/booking-app.png",
  barberImage: "/images/barbers.jpg",
  reviewImage: "/images/review-phone.jpg",
};
interface EyebrowProps {
  icon: ReactNode;
  children: ReactNode;
  light?: boolean;
}

function Eyebrow({
  icon,
  children,
  light = false,
}: EyebrowProps) {
  return (
    <div
      className={`flex items-center gap-2 text-sm font-semibold ${
        light ? "text-white" : "text-black"
      }`}
    >
      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
        {icon}
      </span>

      <span>{children}</span>
    </div>
  );
}

function BookingCard() {
  return (
    <article className="w-full overflow-hidden rounded-[28px] border border-gray-200 bg-[#FBFACE24] text-black">
      {/* Image */}
      <div className="relative h-[400px] w-full overflow-hidden sm:h-[450px] md:h-[500px] lg:h-[500px]">
        <img
          src={cards.bookingImage}
          alt="AppointSet booking application"
          className="
            absolute
            left-1/2
            top-1/2
            h-full
            w-auto
            max-w-none
            -translate-x-[43%]
            -translate-y-1/2
            object-contain
          "
        />
      </div>

      {/* Content */}
      <div className="px-5 py-7 sm:px-7 sm:py-8 lg:px-8 lg:py-9">
        <Eyebrow
          icon={
            <img
              src={group59}
              alt="Booking"
              className="h-full w-full object-contain"
            />
          }
        >
          Booking &amp; Discovery
        </Eyebrow>

        <h2 className="mt-4 max-w-[650px] text-[26px] font-bold leading-[1.12] sm:text-[30px] lg:text-[25px]">
          Seamless connectivity between brands and clients.
        </h2>

        <p className="mt-5 max-w-[680px] text-[15px] leading-[1.5] sm:text-[16px] lg:text-[17px]">
          From local salons to elite stylists, Appointest makes finding and
          booking your next transformation effortless. We handle the
          scratch-to-finish process so you can focus on the results.
        </p>
      </div>
    </article>
  );
}

function BrandCard() {
  return (
    <article className="relative h-[650px] w-full overflow-hidden rounded-[28px] bg-black !border-0 !border-t-0 !outline-none !ring-0">
      {/* Image */}
      <div className="h-[406px] w-full max-w-[678px] overflow-hidden">
        <img
          src={cards.barberImage}
          alt="Barber"
          className="-mt-[3px] block h-[calc(100%+6px)] w-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="px-5 py-7 sm:px-7 sm:py-8 lg:px-8 lg:py-9">
        <Eyebrow
          light
          icon={
            <img
              src={group60}
              alt="Digital growth"
              className="h-full w-full object-contain"
            />
          }
        >
          Digital Growth Platform
        </Eyebrow>

        <h2 className="mt-4 max-w-[700px] text-[20px] font-bold leading-[1.12] text-white sm:text-[30px] lg:text-[25px]">
          Supercharge your business with the Appointest advantage.
        </h2>

        <p className="mt-5 max-w-[850px] text-[15px] leading-[1.5] text-white sm:text-[16px] lg:text-[17px]">
          Multiply your clientele with Appointest, where premium clients book
          your services around the clock. Multiply your clientele with
          Appointest, where premium clients book your services around the
          clock.
        </p>
      </div>
    </article>
  );
}

function ReviewCard() {
  return (
    <article
      className="relative h-[406px] w-full overflow-hidden rounded-[28px] bg-black sm:h-[500px] lg:h-[560px]"
      style={{
        backgroundImage: `url(${cards.reviewImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 flex flex-col justify-between p-5 sm:p-7 lg:p-8">
        {/* Top Text */}
        <p className="max-w-[500px] text-sm font-semibold text-white sm:text-[15px]">
          Trusted by elite beauty brands and clients nationwide
        </p>

        {/* Bottom Reviews */}
        <div className="text-sm leading-[1.5] text-white sm:text-[16px]">
          Out of 5{" "}
          <span className="ml-1 tracking-[2px] text-[18px] text-[#eaff00] sm:text-[20px]">
            ★★★★★
          </span>{" "}
          on
          <br />
          Google Reviews, Trustpilot, App Store
        </div>
      </div>
    </article>
  );
}

function NotificationIcon() {
  return (
    <div className="flex h-[65px] w-[65px] rotate-[-40deg] items-center justify-center rounded-[14px] bg-[#303030] sm:h-[68px] sm:w-[68px]">
      <span className="rotate-[40deg] text-[23px] text-white sm:text-[27px]">
        <img
          src={group61}
          alt="Notification"
          className="h-full w-full object-contain"
        />
      </span>
    </div>
  );
}

function SmartBookingCard() {
  return (
    <article className="w-full overflow-hidden rounded-[28px] border border-gray-200 bg-[#E5FBFF7D] text-black">
      {/* Notification */}
      <div className="p-4 sm:p-6 lg:p-7">
        <div className="flex min-h-[360px] flex-col justify-between bg-[#FFFFFF59] p-5 sm:min-h-[440px] sm:p-7 lg:min-h-[650px] lg:p-9">
          <NotificationIcon />

          <div className="max-w-[760px] text-[15px] leading-[1.5] sm:text-[16px] lg:text-[17px]">
            <p>
              Hello Elena, your appointment at Luxe Studio is confirmed for
              Friday at 11:00 AM. To finalize your arrival, please reply YES or
              manage your booking through our secure portal:
            </p>

            <strong className="mt-4 block break-all text-sm">
              verify.appointest.com/portal
            </strong>
          </div>
        </div>
      </div>

      {/* Bottom Content */}
      <div className="px-5 pb-7 pt-1 sm:px-7 sm:pb-8 lg:px-8 lg:pb-10">
        <Eyebrow
          icon={
            <img
              src={group65}
              alt="Smart booking"
              className="h-full w-full object-contain"
            />
          }
        >
          Smart Booking Alerts
        </Eyebrow>

        <h2 className="mt-4 max-w-[700px] text-[26px] font-bold leading-[1.12] sm:text-[30px] lg:text-[25px]">
          Ensure Every Appointment Stays Confirmed.
        </h2>

        <p className="mt-5 max-w-[760px] text-[15px] leading-[1.5] sm:text-[16px] lg:text-[17px]">
          Eliminate the gap between booking and arrival. Our platform
          automates high-end touchpoints, ensuring your clients are always
          informed while protecting your schedule from empty slots and
          last-minute changes.
        </p>
      </div>
    </article>
  );
}

export default function App() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden px-3 py-8 text-white sm:px-5 sm:py-12 lg:px-6 lg:py-14">
      <div className="mx-auto w-full max-w-[1450px]">
        {/* Intro */}
        <div className="mx-auto mb-12 w-full max-w-[650px] text-center sm:mb-16 lg:mb-20">
          <p className="text-[24px] font-bold leading-tight text-black sm:text-[28px] lg:text-[27px]">
            Your Wellness, Made Simple &amp; Special
          </p>

          <p className="mt-2 text-[14px] font-semibold leading-[1.4] text-neutral-600 sm:text-[16px] lg:text-[17px]">
            We've designed every detail so that taking care of yourself feels
            easy,
            <br className="hidden sm:block" />
            relaxing, and truly meaningful.
          </p>
        </div>

        {/* Responsive Grid */}
        <section className="grid w-full grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-2 lg:gap-6">
          {/* Left Column */}
          <div className="flex w-full flex-col gap-4 sm:gap-5 lg:gap-6">
            <BookingCard />
            <ReviewCard />
          </div>

          {/* Right Column */}
          <div className="flex w-full flex-col gap-4 sm:gap-5 lg:gap-6">
            <BrandCard />
            <SmartBookingCard />
          </div>
        </section>
      </div>
    </main>
  );
}