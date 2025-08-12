import Background3D from '@/components/ui/3d-background';
import Navbar from '@/components/navbar';
import HeroSection from '@/components/hero-section';
import AboutSection from '@/components/about-section';
import EventsSection from '@/components/events-section';
import TimelineSection from '@/components/timeline-section';
import BrochureSection from '@/components/brochure-section';
import TeamSection from '@/components/team-section';
import LocationSection from '@/components/location-section';
import Footer from '@/components/footer';

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <Background3D />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <EventsSection />
      <TimelineSection />
      <BrochureSection />
      <TeamSection />
      <LocationSection />
      <Footer />
    </div>
  );
};

export default Index;
