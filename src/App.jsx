import './App.scss';
import { Navbar } from './components/navbar/Navbar';
import { Test } from './Test';

function App() {
  return (
    <>
      <div className="section">
        <section>
          <Navbar />
        </section>
        <section>Parallax</section>
        <section>Services</section>
        <section>Parallax</section>
        <section>Portfolio1</section>
        <section>Portfolio2</section>
        <section>Portfolio3</section>
        <section>Contact</section>
        {/* <Test /> */}
      </div>
    </>
  );
}

export default App;
