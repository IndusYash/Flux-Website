import Hero from "@/components/sections/home/Hero"
import { motion } from "framer-motion"
import FeatureGrid from "@/components/sections/home/FeatureGrid"
import Showcase from "@/components/sections/home/Showcase"
import Testimonials from "@/components/sections/home/Testimonials"
import Collaboration from "@/components/sections/home/Collaboration"
import InductionCTA from "@/components/sections/home/InductionCTA"
import FacultyPreview from "@/components/sections/home/FacultyPreview"


export default function HomePage() {
  return (
    <>
      <Hero />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <FeatureGrid />
        <Showcase />
        <FacultyPreview />
        <Testimonials />
        <Collaboration />
        <InductionCTA />
      </motion.div>
    </>
  )
}
