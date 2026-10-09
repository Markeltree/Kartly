import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Marquee from './components/Marquee';
import HowItWorks from './components/HowItWorks';
import Screens from './components/Screens';
import Features from './components/Features';
import Tracking from './components/Tracking';
import Rewards from './components/Rewards';
import Reviews from './components/Reviews';
import Faq from './components/Faq';
import Download from './components/Download';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Marquee />
        <HowItWorks />
        <Screens />
        <Features />
        <Tracking />
        <Rewards />
        <Reviews />
        <Faq />
        <Download />
      </main>
      <Footer />
    </>
  );
}
