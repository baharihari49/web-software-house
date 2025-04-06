import Hero from "../components/sections/hero";
// import Clients from "@/components/sections/clients";
import Services from "@/components/sections/services/Services";
import Technologies from "@/components/sections/technologies/Technologies";
import About from "@/components/sections/about/about";
import Portfolio from "@/components/sections/portfolio/Portfolio";
import Process from "../components/sections/process";
import Testimonials from "@/components/sections/testimonials";
import Team from "@/components/sections/Team";
import Cta from "../components/sections/cta";
import Contact from "../components/sections/contact";
// import Faq from "../components/sections/faq";
import BackToTop from "@/components/layout/back-to-top";

export default function Home() {
  return (
    <>
      <Hero />
      {/* <Clients /> */}
      <About />
      <Services />
      <Technologies />
      <Portfolio />
      <Process />
      <Testimonials />
      <Team />
      <Cta />
      <Contact />
      {/* <Faq /> */}
      <BackToTop />
    </>
  );
}