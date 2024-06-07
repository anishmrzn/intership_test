import "./hero.css";
function Hero() {
  return (
    <div className="hero">
      <div className="navigation">
        <div className="navigation-bar">
          <img src="logo.png" alt="" />
          <a href="">Home</a>
          <a href="">About Us</a>
          <a href="">Case Studies</a>
          <a href="">Resources</a>
        </div>
        <div className="search-icon">
          <ion-icon name="search-outline"></ion-icon>
        </div>
      </div>

      <hr />
      <div className="hero-title">
        <h1>Beautiful analytics to grow smarter</h1>
        <p>
          Powerful, self-serve product and growth analytics to help you convert,
          engage, and retain more users. Trusted by over 4,000 startups.
        </p>
        <button className="hero-button">Why Catalog? &#8594;</button>
      </div>
    </div>
  );
}
export default Hero;
