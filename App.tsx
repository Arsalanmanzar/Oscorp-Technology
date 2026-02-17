import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutHero } from './components/AboutHero';
import { About } from './components/About';
import { CoreCategories } from './components/CoreCategories';
import { Courses } from './components/Courses';
import { CoursesHero } from './components/CoursesHero';
import { DetailedCourseList } from './components/DetailedCourseList';
import { Achievements } from './components/Achievements';
import { MissionVision } from './components/MissionVision';
import { Testimonials } from './components/Testimonials';
import { TechnicalRoadmap } from './components/TechnicalRoadmap';
import { IndustryInsights } from './components/IndustryInsights';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FAQ } from './components/FAQ';
import { Stories } from './components/Stories';


const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there is a hash, scroll to the element
    if (hash) {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // If no hash, scroll to top
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

const PageTransition = ({ children }: { children?: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
    animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
    exit={{ opacity: 0, filter: "blur(10px)", y: -20 }}
    transition={{ duration: 0.4, ease: "easeOut" }}
    className="h-full"
  >
    {children}
  </motion.div>
);

const HomePage = () => (
  <PageTransition>
    <Hero />
    <CoreCategories />
    <About />
    <Courses />
    <Testimonials />
    <TechnicalRoadmap />
    <IndustryInsights />
  </PageTransition>
);

const AboutPage = () => (
  <PageTransition>
    <AboutHero />
    <About />
    <MissionVision />
    <CoreCategories />
    <Courses />
    <Achievements />
    <Testimonials />
    <TechnicalRoadmap />
    <IndustryInsights />
  </PageTransition>
);

const CoursesPage = () => (
  <PageTransition>
    <CoursesHero />
    <CoreCategories />
    <DetailedCourseList />
    <FAQ />
    <IndustryInsights />
  </PageTransition>
);

const ContactPage = () => (
  <PageTransition>
    <div className="pt-24 min-h-[80vh]">
      <Contact />
    </div>
  </PageTransition>
);

const StoriesPage = () => (
  <PageTransition>
    <Stories />
  </PageTransition>
);

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/stories" element={<StoriesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-oscorp-primary font-sans selection:bg-oscorp-accent selection:text-oscorp-secondary flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;