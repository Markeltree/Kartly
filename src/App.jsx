import { useEffect, useState } from 'react';
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
import PrivacyPolicy from './components/PrivacyPolicy';

const pages = {
  '#/privacy': { component: PrivacyPolicy, title: 'Privacy Policy | Kartly' },
};

const homeTitle = document.title;

export default function App() {
  const [hash, setHash] = useState(window.location.hash);

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash);
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const page = pages[hash];

  useEffect(() => {
    document.title = page ? page.title : homeTitle;
    if (page) {
      window.scrollTo(0, 0);
    } else if (hash) {
      // Coming back from a sub-page: the target section only exists after this render.
      document.getElementById(hash.slice(1))?.scrollIntoView();
    }
  }, [hash, page]);

  return (
    <>
      <Navbar />
      <main>
        {page ? (
          <page.component />
        ) : (
          <>
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
          </>
        )}
      </main>
      <Footer />
    </>
  );
}
