import { useEffect, useRef, useState } from "react";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import ExperienceSection from "./Components/ExperienceSection";
import Effertless from "./Components/Effertless";
import Wellness from "./Components/Wellness";
import PremiumNetwork from "./Components/PremiumNetwork";
import Secure from "./Components/Secure";
import ElevateExperience from "./Components/ElevateExperience";
import Footer from "./Components/Footer";
import Navbar2 from "./Skincare/Navbar2";
import GroomingCards from "./Skincare/GroomingCards";
import FacialServices from "./Skincare/FacialServices";
import Footer2 from "./Skincare/Footer2";
import ClinicNavbar from "./Vanguard Grooming/ClinicNavbar";
import Lumina from "./Vanguard Grooming/Lumina";
import Available from "./Vanguard Grooming/Available";
import Custom from "./Vanguard Grooming/Custom";
import Buttons from "./Vanguard Grooming/Buttons";
import Footer3 from "./Vanguard Grooming/Footer3";
import BookingModal from "./Booking/BookingModal";
import DatePickerModal from "./DateClender/DatePickerModal";
import BookingDetailsModel from "./BookingDetails/BookingDetailsModel";
import CreateAccount from "./AccountDetails/CreateAccount";


import AuthCard from "./login/Authcard";
import Welcome from "./smarter/welcome";
import AccountDatacreating from "./DataAccount/AccountDatacreating";
import Magnat from "./Forgot/Magnat";


import Verify from "./timeopt/Verify";

import Congratulations from "./NewCongratulations/Congratulations";


type Page =
  | "home"
  | "skincare"
  | "clinic"
  | "booking"
  | "datepicker"
  | "bookingDetails"
  | "createAccount"
  | "AuthCard"
  | "welcome"
  | "accountDataCreating"
  | "forgotPassword"
  | "verifyAccount"
  | "congratulations";


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

interface BookingDetails {
  service: Service;
  day: string;
  period: string;
  time: string;
  selectedDate: string;
}
interface GroomingCard {
  id?: number;
  title?: string;
  name?: string;
  description?: string;
  image?: string;
  [key: string]: unknown;
}

export default function App() {
  const [page, setPage] = useState<Page>("home");

  const [selectedGrooming, setSelectedGrooming] =
    useState<GroomingCard | null>(null);

  const [showAvailable, setShowAvailable] =
    useState(false);

  const [selectedService, setSelectedService] =
    useState<Service | null>(null);

  const [bookingData, setBookingData] =
    useState<BookingData | null>(null);

  const [bookingDetails, setBookingDetails] =
    useState<BookingDetails | null>(null);
  const availableSectionRef =
    useRef<HTMLDivElement | null>(null);
  const resetBookingData = () => {
    setSelectedGrooming(null);
    setShowAvailable(false);
    setSelectedService(null);
    setBookingData(null);
    setBookingDetails(null);
  };

  useEffect(() => {
    const handlePopState = () => {
      const pathname = window.location.pathname;
      const state = window.history.state;

      switch (pathname) {
      
        case "/":
          setPage("home");
          resetBookingData();
          break;

        case "/skincare":
          setPage("skincare");
          resetBookingData();
          break;

        case "/clinic":
          setPage("clinic");

          if (state?.selectedGrooming) {
            setSelectedGrooming(
              state.selectedGrooming
            );
          }

          break;

        case "/booking":
          setPage("booking");

          if (state?.selectedService) {
            setSelectedService(
              state.selectedService
            );
          }

          break;

        case "/datepicker":
          setPage("datepicker");

          if (state?.selectedService) {
            setSelectedService(
              state.selectedService
            );
          }

          if (state?.bookingData) {
            setBookingData(
              state.bookingData
            );
          }

          break;
        case "/booking-details":
          setPage("bookingDetails");

          if (state?.bookingDetails) {
            setBookingDetails(
              state.bookingDetails
            );
          }

          break;

        case "/create-account":
          setPage("createAccount");

          if (state?.bookingDetails) {
            setBookingDetails(
              state.bookingDetails
            );
          }

          break;
        case "/auth-card":
        case "/AuthCard":
          setPage("AuthCard");

          if (state?.bookingDetails) {
            setBookingDetails(
              state.bookingDetails
            );
          }

          break;

        case "/welcome":
          setPage("welcome");
          break;
        case "/account-data-creating":
          setPage("accountDataCreating");
          break;

      
        case "/forgot-password":
          setPage("forgotPassword");
          break;

        case "/verify-account":
          setPage("verifyAccount");
          break;

        case "/congratulations":
          setPage("congratulations");
          break;

        default:
          setPage("home");
          resetBookingData();

          window.history.replaceState(
            { page: "home" },
            "",
            "/"
          );

          break;
      }
    };
    handlePopState();

    window.addEventListener(
      "popstate",
      handlePopState
    );

    return () => {
      window.removeEventListener(
        "popstate",
        handlePopState
      );
    };
  }, []);
  const openHomePage = () => {
    window.history.pushState(
      { page: "home" },
      "",
      "/"
    );

    setPage("home");
    resetBookingData();
  };
  const openSkincarePage = () => {
    window.history.pushState(
      { page: "skincare" },
      "",
      "/skincare"
    );

    setPage("skincare");
    resetBookingData();
  };

  const openClinicPage = (
    card: GroomingCard
  ) => {
    window.history.pushState(
      {
        page: "clinic",
        selectedGrooming: card,
      },
      "",
      "/clinic"
    );

    setSelectedGrooming(card);
    setShowAvailable(false);
    setPage("clinic");
  };

  const handleBookNow = () => {
    setShowAvailable(true);
  };

  useEffect(() => {
    if (
      page === "clinic" &&
      showAvailable &&
      availableSectionRef.current
    ) {
      setTimeout(() => {
        availableSectionRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    }
  }, [page, showAvailable]);

  const handleServiceBook = (
    service: Service
  ) => {
    window.history.pushState(
      {
        page: "booking",
        selectedService: service,
      },
      "",
      "/booking"
    );

    setSelectedService(service);
    setPage("booking");
  };

  const handleBookingContinue = (
    data: BookingData
  ) => {
    window.history.pushState(
      {
        page: "datepicker",
        selectedService: data.service,
        bookingData: data,
      },
      "",
      "/datepicker"
    );

    setSelectedService(data.service);
    setBookingData(data);
    setPage("datepicker");
  };


  const handleDatePickerConfirm = (
    finalSelection: BookingDetails
  ) => {
    window.history.pushState(
      {
        page: "booking-details",
        bookingDetails: finalSelection,
      },
      "",
      "/booking-details"
    );

    setBookingDetails(finalSelection);
    setPage("bookingDetails");
  };


  const handleBookingDetailsConfirm = (
    finalDetails: BookingDetails
  ) => {
    window.history.pushState(
      {
        page: "create-account",
        bookingDetails: finalDetails,
      },
      "",
      "/create-account"
    );

    setBookingDetails(finalDetails);
    setPage("createAccount");
  };


  const handleCreateAccountConfirm = () => {
    window.history.pushState(
      {
        page: "auth-card",
        bookingDetails,
      },
      "",
      "/auth-card"
    );

    setPage("AuthCard");
  };

 
  const handleCloseBooking = () => {
    window.history.back();
  };

  const handleSignIn = () => {
    window.history.pushState(
      { page: "welcome" },
      "",
      "/welcome"
    );

    setPage("welcome");
  };

  const handleWelcomeSignIn = () => {
    openHomePage();
  };

  const handleWelcomeCreateAccount = () => {
    window.history.pushState(
      {
        page: "accountDataCreating",
      },
      "",
      "/account-data-creating"
    );

    setPage("accountDataCreating");
  };

  const handleAccountDataBack = () => {
    window.history.pushState(
      {
        page: "welcome",
      },
      "",
      "/welcome"
    );

    setPage("welcome");
  };

  const handleForgotPassword = () => {
    window.history.pushState(
      {
        page: "forgotPassword",
      },
      "",
      "/forgot-password"
    );

    setPage("forgotPassword");
  };

  const handleForgotPasswordBack = () => {
    window.history.pushState(
      {
        page: "welcome",
      },
      "",
      "/welcome"
    );

    setPage("welcome");
  };

  const handleVerifyAccount = () => {
    window.history.pushState(
      {
        page: "verifyAccount",
      },
      "",
      "/verify-account"
    );

    setPage("verifyAccount");
  };

  const handleCongratulations = () => {
    window.history.pushState(
      {
        page: "congratulations",
      },
      "",
      "/congratulations"
    );

    setPage("congratulations");
  };

  return (
    <div className="min-h-screen w-full">

      {page === "home" && (
        <>
          <Navbar
            open={openHomePage}
            onSignIn={handleSignIn}
          />

          <About />

          <ExperienceSection
            openSkincarePage={
              openSkincarePage
            }
          />

          <Effertless />
          <Wellness />
          <PremiumNetwork />
          <Secure />
          <ElevateExperience />
          <Footer />
        </>
      )}

      {page === "skincare" && (
        <>
          <Navbar2
            open={openHomePage}
          />

          <GroomingCards
            openClinicPage={
              openClinicPage
            }
          />

          <FacialServices />

          <Footer2 />
        </>
      )}

      {page === "clinic" && (
        <>
          <ClinicNavbar
            open={openHomePage}
            onBookNow={handleBookNow}
          />

          <Lumina
            selectedGrooming={
              selectedGrooming
            }
          />

          {showAvailable && (
            <div
              ref={availableSectionRef}
              className="scroll-mt-6"
            >
              <Available
                onBook={
                  handleServiceBook
                }
              />
            </div>
          )}

          <Custom />
          <Buttons />
          <Footer3 />
        </>
      )}

      {page === "booking" && (
        <div className="flex min-h-screen w-full flex-col items-center justify-center bg-[#FAFAFA] px-4 py-12">
          <BookingModal
            service={
              selectedService || undefined
            }
            onClose={
              handleCloseBooking
            }
            onContinue={
              handleBookingContinue
            }
          />
        </div>
      )}

      {page === "datepicker" && (
        <div className="flex min-h-screen w-full flex-col items-center justify-center bg-[#FAFAFA] px-4 py-12">
          <DatePickerModal
            bookingData={bookingData}
            onClose={
              handleCloseBooking
            }
            onConfirm={
              handleDatePickerConfirm
            }
          />
        </div>
      )}

      {page === "bookingDetails" && (
        <div className="flex min-h-screen w-full flex-col items-center justify-center bg-[#FAFAFA] px-4 py-12">
          <BookingDetailsModel
            bookingDetails={
              bookingDetails
            }
            onClose={
              handleCloseBooking
            }
            onConfirm={
              handleBookingDetailsConfirm
            }
          />
        </div>
      )}

      {page === "createAccount" && (
        <div className="flex min-h-screen w-full flex-col items-center justify-center bg-[#FAFAFA] px-4 py-12">
          <CreateAccount
            bookingDetails={
              bookingDetails
            }
            onClose={
              handleCloseBooking
            }
            onConfirm={
              handleCreateAccountConfirm
            }
          />
        </div>
      )}
      {page === "AuthCard" && (
        <div className="flex min-h-screen w-full flex-col items-center justify-center bg-[#FAFAFA] px-4 py-12">
          <AuthCard
            bookingDetails={
              bookingDetails
            }
            onClose={
              handleCloseBooking
            }
            onForgotPassword={
              handleForgotPassword
            }
          />
        </div>
      )}

      {page === "welcome" && (
        <div className="min-h-screen w-full">
          <Welcome
            onCreateAccount={
              handleWelcomeCreateAccount
            }
            onSignIn={
              handleWelcomeSignIn
            }
            onForgotPassword={
              handleForgotPassword
            }
          />
        </div>
      )}

      {page === "accountDataCreating" && (
        <div className="min-h-screen w-full">
          <AccountDatacreating
            onBack={
              handleAccountDataBack
            }
          />
        </div>
      )}

      {page === "forgotPassword" && (
        <div className="min-h-screen w-full">
          <Magnat
            onBack={
              handleForgotPasswordBack
            }
          />
        </div>
      )}

      {page === "verifyAccount" && (
        <div className="min-h-screen w-full">
          <Verify />
        </div>
      )}

      {page === "congratulations" && (
        <div className="min-h-screen w-full">
          <Congratulations />
        </div>
      )}

    </div>
  );
}