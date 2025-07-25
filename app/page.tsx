import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Menu } from './components/Menu';
import { About } from './components/About';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <Menu />
      <About />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}