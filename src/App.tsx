
import {
  useEffect,
  useRef,
  useState,
  type ComponentProps,
  type ComponentType,
} from "react";

// =====================================================
// HOME
// =====================================================
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import ExperienceSection from "./Components/ExperienceSection";
import Effertless from "./Components/Effertless";
import Wellness from "./Components/Wellness";
import PremiumNetwork from "./Components/PremiumNetwork";
import Secure from "./Components/Secure";
import ElevateExperience from "./Components/ElevateExperience";
import Footer from "./Components/Footer";

// =====================================================
// SKINCARE
// =====================================================
import Navbar2 from "./Skincare/Navbar2";
import GroomingCards from "./Skincare/GroomingCards";
import FacialServices from "./Skincare/FacialServices";
import Footer2 from "./Skincare/Footer2";

// =====================================================
// CLINIC
// =====================================================
import ClinicNavbar from "./Vanguard Grooming/ClinicNavbar";
import Lumina from "./Vanguard Grooming/Lumina";
import Available from "./Vanguard Grooming/Available";
import Custom from "./Vanguard Grooming/Custom";
import Buttons from "./Vanguard Grooming/Buttons";
import Footer3 from "./Vanguard Grooming/Footer3";

// =====================================================
// BOOKING
// =====================================================
import BookingModal from "./Booking/BookingModal";
import DatePickerModal from "./DateClender/DatePickerModal";
import BookingDetailsModel from "./BookingDetails/BookingDetailsModel";

// =====================================================
// ACCOUNT / AUTH
// =====================================================
import CreateAccount from "./AccountDetails/CreateAccount";
import AuthCard from "./login/Authcard";
import Welcome from "./smarter/welcome";
import AccountDataCreating from "./DataAccount/AccountDatacreating";
import Magnat from "./Forgot/Magnat";
import Verify from "./timeopt/Verify";
import Congratulations from "./NewCongratulations/Congratulations";

// =====================================================
// PAGE TYPE
// =====================================================
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

// =====================================================
// USE COMPONENT TYPES DIRECTLY
// =====================================================

// Exact GroomingCard type used by GroomingCards
type GroomingCard = Parameters<
  NonNullable<
    ComponentProps<typeof GroomingCards>["openClinicPage"]
  >
>[0];

// Exact Service type used by Available
type Service = Parameters<
  NonNullable<
    ComponentProps<typeof Available>["onBook"]
  >
>[0];

// Exact BookingData type used by BookingModal
type BookingData = Parameters<
  NonNullable<
    ComponentProps<typeof BookingModal>["onContinue"]
  >
>[0];

// BookingDetails type
type BookingDetails = Parameters<
  NonNullable<
    ComponentProps<typeof DatePickerModal>["onConfirm"]
  >
>[0];

// =====================================================
// ACCOUNT DATA CREATING
// =====================================================
type AccountDataCreatingProps = {
  onBack: () => void;
};

const AccountDataCreatingWithBack =
  AccountDataCreating as ComponentType<AccountDataCreatingProps>;

// =====================================================
// APP
// =====================================================
export default function App() {
  // ===================================================
  // STATE
  // ===================================================
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

  // ===================================================
  // RESET BOOKING
  // ===================================================
  const resetBookingData = () => {
    setSelectedGrooming(null);
    setShowAvailable(false);
    setSelectedService(null);
    setBookingData(null);
    setBookingDetails(null);
  };

  // ===================================================
  // BROWSER BACK / REFRESH
  // ===================================================
  useEffect(() => {
    const handlePopState = () => {
      const state = window.history.state || {};
      const pathname = window.location.pathname;

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

          if (state.selectedGrooming) {
            setSelectedGrooming(
              state.selectedGrooming as GroomingCard
            );
          }
          break;

        case "/booking":
          setPage("booking");

          if (state.selectedService) {
            setSelectedService(
              state.selectedService as Service
            );
          }
          break;

        case "/datepicker":
          setPage("datepicker");

          if (state.selectedService) {
            setSelectedService(
              state.selectedService as Service
            );
          }

          if (state.bookingData) {
            setBookingData(
              state.bookingData as BookingData
            );
          }
          break;

        case "/booking-details":
          setPage("bookingDetails");

          if (state.bookingDetails) {
            setBookingDetails(
              state.bookingDetails as BookingDetails
            );
          }
          break;

        case "/create-account":
          setPage("createAccount");

          if (state.bookingDetails) {
            setBookingDetails(
              state.bookingDetails as BookingDetails
            );
          }
          break;

        case "/auth-card":
        case "/AuthCard":
          setPage("AuthCard");

          if (state.bookingDetails) {
            setBookingDetails(
              state.bookingDetails as BookingDetails
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
          window.history.replaceState(
            { page: "home" },
            "",
            "/"
          );

          setPage("home");
          resetBookingData();
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

  // ===================================================
  // HOME
  // ===================================================
  const openHomePage = () => {
    window.history.pushState(
      { page: "home" },
      "",
      "/"
    );

    setPage("home");
    resetBookingData();
  };

  // ===================================================
  // SKINCARE
  // ===================================================
  const openSkincarePage = () => {
    window.history.pushState(
      { page: "skincare" },
      "",
      "/skincare"
    );

    setPage("skincare");
    resetBookingData();
  };

  // ===================================================
  // CLINIC
  // ===================================================
  const openClinicPage = (card: GroomingCard) => {
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

  // ===================================================
  // BOOK NOW
  // ===================================================
  const handleBookNow = () => {
    setShowAvailable(true);
  };

  // ===================================================
  // SERVICE BOOK
  // ===================================================
  const handleServiceBook = (service: Service) => {
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

  // ===================================================
  // BOOKING CONTINUE
  // ===================================================
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

  // ===================================================
  // DATE PICKER CONFIRM
  // ===================================================
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

  // ===================================================
  // BOOKING DETAILS CONFIRM
  // ===================================================
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

  // ===================================================
  // CREATE ACCOUNT CONFIRM
  // ===================================================
  const handleCreateAccountConfirm = () => {
    window.history.pushState(
      {
        page: "auth-card",
        bookingDetails: bookingDetails,
      },
      "",
      "/auth-card"
    );

    setPage("AuthCard");
  };

  // ===================================================
  // CLOSE BOOKING
  // ===================================================
  const handleCloseBooking = () => {
    window.history.back();
  };

  // ===================================================
  // SIGN IN
  // ===================================================
  const handleSignIn = () => {
    window.history.pushState(
      { page: "welcome" },
      "",
      "/welcome"
    );

    setPage("welcome");
  };

  // ===================================================
  // WELCOME SIGN IN
  // ===================================================
  const handleWelcomeSignIn = () => {
    openHomePage();
  };

  // ===================================================
  // WELCOME CREATE ACCOUNT
  // ===================================================
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

  // ===================================================
  // ACCOUNT DATA BACK
  // ===================================================
  const handleAccountDataBack = () => {
    window.history.pushState(
      { page: "welcome" },
      "",
      "/welcome"
    );

    setPage("welcome");
  };

  // ===================================================
  // FORGOT PASSWORD
  // ===================================================
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

  // ===================================================
  // SCROLL TO AVAILABLE
  // ===================================================
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

  // ===================================================
  // RENDER
  // ===================================================
  return (
    <div className="flex min-h-screen w-full flex-col overflow-x-hidden">
      <div className="mx-auto w-full max-w-[1400px] min-w-0 overflow-x-hidden">
    <>
      {/* =================================================
          HOME
      ================================================= */}
      {page === "home" && (
        <>
          <Navbar
            open={openHomePage}
            onSignIn={handleSignIn}
          />

          <About />

          <ExperienceSection
            openSkincarePage={openSkincarePage}
          />

          <Effertless />
          <Wellness />
          <PremiumNetwork />
          <Secure />
          <ElevateExperience />
          <Footer />
        </>
      )}

      {/* =================================================
          SKINCARE
      ================================================= */}
      {page === "skincare" && (
        <>
          <Navbar2
            open={openHomePage}
          />

          <GroomingCards
            openClinicPage={openClinicPage}
          />

          <FacialServices />

          <Footer2 />
        </>
      )}

      {/* =================================================
          CLINIC
      ================================================= */}
      {page === "clinic" && (
        <>
          <ClinicNavbar
            open={openHomePage}
            onBookNow={handleBookNow}
          />

          <Lumina
            selectedGrooming={selectedGrooming}
          />

          {showAvailable && (
            <div ref={availableSectionRef}>
              <Available
                onBook={handleServiceBook}
              />
            </div>
          )}

          <Custom />
          <Buttons />
          <Footer3 />
        </>
      )}

      {/* =================================================
          BOOKING
      ================================================= */}
      {page === "booking" && (
        <BookingModal
          service={selectedService || undefined}
          onClose={handleCloseBooking}
          onContinue={handleBookingContinue}
        />
      )}

      {/* =================================================
          DATE PICKER
      ================================================= */}
      {page === "datepicker" && (
        <DatePickerModal
          bookingData={bookingData}
          onClose={handleCloseBooking}
          onConfirm={handleDatePickerConfirm}
        />
      )}

      {/* =================================================
          BOOKING DETAILS
      ================================================= */}
      {page === "bookingDetails" && (
        <BookingDetailsModel
          bookingDetails={bookingDetails}
          onClose={handleCloseBooking}
          onConfirm={handleBookingDetailsConfirm}
        />
      )}

      {/* =================================================
          CREATE ACCOUNT
      ================================================= */}
      {page === "createAccount" && (
        <CreateAccount
          bookingDetails={bookingDetails}
          onClose={handleCloseBooking}
          onConfirm={handleCreateAccountConfirm}
        />
      )}

      {/* =================================================
          AUTH CARD
      ================================================= */}
      {page === "AuthCard" && (
        <AuthCard
          bookingDetails={bookingDetails}
          onClose={handleCloseBooking}
          onForgotPassword={handleForgotPassword}
        />
      )}

      {/* =================================================
          WELCOME
      ================================================= */}
      {page === "welcome" && (
        <Welcome
          onCreateAccount={
            handleWelcomeCreateAccount
          }
          onSignIn={handleWelcomeSignIn}
          onForgotPassword={
            handleForgotPassword
          }
        />
      )}

      {/* =================================================
          ACCOUNT DATA CREATING
      ================================================= */}
      {page === "accountDataCreating" && (
        <AccountDataCreatingWithBack
          onBack={handleAccountDataBack}
        />
      )}

      {/* =================================================
          FORGOT PASSWORD
      ================================================= */}
      {page === "forgotPassword" && (
        <Magnat />
      )}

      {/* =================================================
          VERIFY ACCOUNT
      ================================================= */}
      {page === "verifyAccount" && (
        <Verify />
      )}

      {/* =================================================
          CONGRATULATIONS
      ================================================= */}
      {page === "congratulations" && (
        <Congratulations />
      )}
    </>
    </div>
    </div>
  );
}
