import './app.scss';
import { Navbar } from './components/navbar/Navbar';
import { Hero } from './components/hero/Hero';
import { Parallax } from './components/parallax/Parallax';

// import {Sidebar} from './components/sidebar/Sidebar';

function App() {
  return (
    <>
      <div className="section">
        <section id="Homepage">
          <Navbar />
          <Hero />
        </section>
        <section id="Services">
          <Parallax type="services" />
        </section>
        <section>Services</section>
        <section id="Portfolio">
          <Parallax type="portfolio" />
        </section>
        <section>Portfolio1</section>
        <section>Portfolio2</section>
        <section>Portfolio3</section>
        <section id="Contact">Contact</section>
      </div>
    </>
  );
}

export default App;
