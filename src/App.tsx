import { useEffect, useState } from "react";

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

type Page = "home" | "skincare" | "clinic";

function App() {
  const [page, setPage] = useState<Page>("home");

  const [selectedGrooming, setSelectedGrooming] = useState<any>(null);
  const [showAvailable, setShowAvailable] = useState(false);
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      const state = window.history.state;

      if (path === "/") {
        setPage("home");
        setShowAvailable(false);
        setSelectedGrooming(null);
      }

      else if (path === "/skincare") {
        setPage("skincare");
        setShowAvailable(false);
        setSelectedGrooming(null);
      }

      else if (path === "/clinic") {
        setPage("clinic");
        setShowAvailable(false);

        if (state?.selectedGrooming) {
          setSelectedGrooming(state.selectedGrooming);
        }
      }

      else {
        setPage("home");
        setShowAvailable(false);
        setSelectedGrooming(null);

        window.history.replaceState(
          { page: "home" },
          "",
          "/"
        );
      }

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    handlePopState();
    window.addEventListener("popstate", handlePopState);
    return () => {
      window.removeEventListener(
        "popstate",
        handlePopState
      );
    };
  }, []);
  const openHomePage = () => {
    setPage("home");
    setShowAvailable(false);
    setSelectedGrooming(null);

    window.history.pushState(
      { page: "home" },
      "",
      "/"
    );

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const openSkincarePage = () => {
    setPage("skincare");
    setShowAvailable(false);
    setSelectedGrooming(null);

    window.history.pushState(
      { page: "skincare" },
      "",
      "/skincare"
    );

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };



  const openClinicPage = (card: any) => {
    setSelectedGrooming(card);
    setPage("clinic");
    setShowAvailable(false);

    window.history.pushState(
      {
        page: "clinic",
        selectedGrooming: card,
      },
      "",
      "/clinic"
    );

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };



  const handleBookNow = () => {
    setShowAvailable(true);
    setTimeout(() => {
      const availableSection =
        document.getElementById("available-section");

      if (availableSection) {
        availableSection.scrollIntoView({
          behavior: "smooth",
        });
      }
    }, 100);
  };


  return (
    <div className="flex min-h-screen w-full flex-col ">
      <div className="mx-auto w-full max-w-[1400px]">

        {page === "home" && (
          <>
            <Navbar open={openHomePage} />

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
              <div id="available-section">
                <Available />
              </div>
            )}

            <Custom />

            <Buttons />

            <Footer3 />
          </>
        )}

      </div>
    </div>
  );
}

export default App;