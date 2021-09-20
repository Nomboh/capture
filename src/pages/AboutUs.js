import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import FaqSection from "../components/FaqSection";

// framer motion
import { motion } from "framer-motion";
import { animatePages } from "../animate";

const AboutUs = () => {
  return (
    <motion.div
      variants={animatePages}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <AboutSection />;
      <ServicesSection />
      <FaqSection />
    </motion.div>
  );
};

export default AboutUs;
