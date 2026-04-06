import Hero from "@/components/sections/Hero";
import PainPoints from "@/components/sections/PainPoints";
import AboutTeaser from "@/components/sections/AboutTeaser";
import ServicesPreview from "@/components/sections/ServicesPreview";
import StatsRow from "@/components/sections/StatsRow";
import TestimonialsPreview from "@/components/sections/TestimonialsPreview";
import QuizCTABanner from "@/components/sections/QuizCTABanner";
import BlogPreview from "@/components/sections/BlogPreview";
import BookingPreview from "@/components/sections/BookingPreview";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <PainPoints />
      <AboutTeaser />
      <ServicesPreview />
      <StatsRow />
      <TestimonialsPreview />
      <QuizCTABanner />
      <BlogPreview />
      <BookingPreview />
      <FinalCTA />
    </>
  );
}
