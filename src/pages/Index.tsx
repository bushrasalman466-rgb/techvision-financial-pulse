import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Transparency from "@/components/Transparency";
import Team from "@/components/Team";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <Projects />
      <Transparency />
      <Team />
      <Footer />
    </div>
  );
};

export default Index;
