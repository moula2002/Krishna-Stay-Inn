import React from "react";
import HeroSection from "./Home_Page_Sections/HeroSection";
import HomeAboutUs from "./Home_Page_Sections/HomeAboutUs";
import HomeCountSection from "./Home_Page_Sections/HomeCountSection";
import HomeRommsSection from "./Home_Page_Sections/HomeRommsSection";
import HomeLuxuryLiving from "./Home_Page_Sections/HomeLuxuryLiving";
import HomeServicesSection from "./Home_Page_Sections/HomeServicesSection";
import HomeContactUsSection from "./Home_Page_Sections/HomeContactUsSection";
import HomeTestimonialSection from "./Home_Page_Sections/HomeTestimonialSection";
import Home_Nearby_Places from "./Home_Page_Sections/Home_Nearby_Places";
import Home_Places from "./Home_Page_Sections/Home_Places";

const Home = () => {
  return (
    <main className="flex flex-col gap-20">
      <section>
        <HeroSection />
      </section>
      <section>
        <HomeAboutUs />
      </section>
      <section>
        <HomeCountSection />
      </section>
      <section>
        <HomeRommsSection />
      </section>
      <section>
        <HomeLuxuryLiving />
      </section>
      <section>
        <Home_Places/>
      </section>
      <section>
        <HomeServicesSection />
      </section>
      {/* <section>
        <Home_Nearby_Places />
      </section> */}
      <section>
        <HomeContactUsSection />
      </section>
      <section>
        <HomeTestimonialSection />
      </section>
    </main>
  );
};

export default Home;
