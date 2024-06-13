import "./App.css";
import Campaign from "./components/campaign";
import Carousel from "./components/carousel";
import Contact from "./components/contacts";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Intro from "./components/intro";
import News from "./components/news";

import Resources from "./components/resources";

function App() {
  return (
    <div className="homepage">
      <Hero />
      <Campaign />
      <Intro />
      <Carousel />
      <News />
      <Resources />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
