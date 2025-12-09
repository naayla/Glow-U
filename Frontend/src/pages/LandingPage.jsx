import React, {useEffect} from "react";
import { useLocation } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import FeatureSection from "../components/FeatureSection";
import Testimonials from "../components/Testimonials";

export default function LandingPage() {
  const location = useLocation();

  useEffect(() => {
    if(location.state && location.state.scrollTo)
    {
      const targetId = location.state.scrollTo;
      const element = document.getElementById(targetId);

      if(element)
      {
        setTimeout(() => {
          element.scrollIntoView({behavior: "smooth"});
        }, 100);
      }

      window.history.replaceState({}, document.title);
    }
  }, [location]);

  return (
    <div className="landing-page">

      {/* Hero */}
      <HeroSection />

      {/* Features */}
      <FeatureSection />

      {/* Testimonials */}
      <div id="testimonials">
        <Testimonials />  
      </div>

    </div>
  );
}
