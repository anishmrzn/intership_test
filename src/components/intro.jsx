import "../css/intro.css";

function Intro() {
  return (
    <div className="intro">
      <div className="intro-title">
        <h1>Who we are</h1>
        <p>
          We are a collaboration of Non Govt. and professionals working to
          ensure that government spending is done fairly, openly, efficiently,
          and creates the best value for money and best outcomes for Europe. We
          are working at the national and EU levels to advance the principles of
          openness in spending of funds, procurement, and company ownership
          within the EU.
        </p>
        <button>
          <span>See more</span>

          <svg
            width="12"
            height="13"
            viewBox="0 0 12 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.92 6.34022C11.8724 6.21747 11.801 6.10532 11.71 6.01022L6.71 1.01022C6.61676 0.916979 6.50607 0.843018 6.38425 0.792558C6.26243 0.742097 6.13186 0.716125 6 0.716125C5.7337 0.716125 5.4783 0.821913 5.29 1.01022C5.19676 1.10346 5.1228 1.21415 5.07234 1.33597C5.02188 1.45779 4.99591 1.58836 4.99591 1.72022C4.99591 1.98652 5.1017 2.24191 5.29 2.43022L8.59 5.72022H1C0.734784 5.72022 0.48043 5.82557 0.292893 6.01311C0.105357 6.20065 0 6.455 0 6.72022C0 6.98543 0.105357 7.23979 0.292893 7.42732C0.48043 7.61486 0.734784 7.72022 1 7.72022H8.59L5.29 11.0102C5.19627 11.1032 5.12188 11.2138 5.07111 11.3356C5.02034 11.4575 4.9942 11.5882 4.9942 11.7202C4.9942 11.8522 5.02034 11.9829 5.07111 12.1048C5.12188 12.2267 5.19627 12.3373 5.29 12.4302C5.38296 12.5239 5.49356 12.5983 5.61542 12.6491C5.73728 12.6999 5.86799 12.726 6 12.726C6.13201 12.726 6.26272 12.6999 6.38458 12.6491C6.50644 12.5983 6.61704 12.5239 6.71 12.4302L11.71 7.43022C11.801 7.33511 11.8724 7.22297 11.92 7.10022C12.02 6.85676 12.02 6.58368 11.92 6.34022Z"
              fill="#1D6FA3"
            />
          </svg>
        </button>
      </div>
      <div className="intro-pictures-alignment">
        <div className="intro-pictures-alignment1">
          <div className="intro-content">
            <div className="intro-img">
              <div className="intro-image1"></div>
              {/* <img src="intro1.jpg" alt="Adriana Homolova" /> */}
            </div>
            <p>Adriana Homolova</p>
          </div>
          <div className="intro-content">
            <div className="intro-img">
              <div className="intro-image3"></div>
            </div>
            <p>Karolis Granickas</p>
          </div>
        </div>
        <div className="intro-pictures-alignment2">
          <div className="intro-content">
            <div className="intro-img">
              <div className="intro-image2"></div>
            </div>
            <p>Sandor Lederer</p>
          </div>

          <div className="intro-content">
            <div className="intro-img">
              <div className="intro-image4"></div>
            </div>
            <p>Zara Montgomery</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Intro;
