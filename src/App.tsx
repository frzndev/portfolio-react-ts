import { useEffect, useState } from "react";
import { services } from "./data/services.jsx";

import FirstSection from "./components/FirstSection";
import HeaderSection from "./components/HeaderSection";
import ServicesSection from "./components/services/ServicesSection";
import AboutMeSection from "./components/AboutMeSection.js";
import FooterSection from "./components/FooterSection.js";

function App() {
  const [theme, setTheme] = useState("");

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleOnClickThemeSwitch = () => {
    setTheme(theme === "dark" ? "ligh" : "dark");
  };

  return (
    <>
      <HeaderSection
        onClick={handleOnClickThemeSwitch}
        stateTheme={theme}
      ></HeaderSection>
      <div className="font-inter bg-lime-100 dark:bg-teal-900">
        <div className="max-w-5xl w-11/12 mx-auto">
          <FirstSection />
          <ServicesSection data={services} />
          <AboutMeSection />
          <FooterSection />
        </div>
      </div>
    </>
  );
}

export default App;
