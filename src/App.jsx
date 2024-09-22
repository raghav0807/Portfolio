// import React from "react";
import Bio from "./components/Bio";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
// import index.jsx from "./constants/index.jsx";
import Projects from "./components/Projects";
// import Bio from "./components/Bio";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";
import EducationSection from "./components/EducationSection";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

// import bgImg from "./assets/bg-img.png";

const App = () => {
  return (
    // <div>App</div>
    <div className="relative h-full overflow-y-auto antialiased">
      <div className="fixed inset-0 bg-fixed bg-cover bg-center bg-img"></div>

      <div className="relative z-10 flex flex-col items-center p-4 space-y-8 container mx-auto">
        <Hero />
        <Navbar />
        <Projects />
        <Bio />
        <Skills />
        <WorkExperience />
        <EducationSection />
        <ContactForm />
        <Footer />
      </div>
    </div>

    // <div>
    //   <h1 className="text-3xl font-bold underline">Hello world!</h1>
    // </div>
  );
};

export default App;
