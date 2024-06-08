import { useState } from "react";
import "./hero.css";
function Hero() {
  const [searchBarVisible, setSearchBarVisible] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleSearchBarToggle = () => {
    setSearchBarVisible(!searchBarVisible);
  };
  const handledropdownToggle = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div className="hero">
      <div className="navigation">
        <div className="navigation-bar">
          <img src="logo.png" alt="" />
          <span>Home</span>
          <span>About Us</span>
          <span>Case Studies</span>
          <span onClick={handledropdownToggle}>
            Resources
            {
              <svg
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1.5L6 6.5L11 1.5"
                  stroke="white"
                  stroke-width="1.67"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            }
          </span>
        </div>
        <div className="search-icon" onClick={handleSearchBarToggle}>
          <ion-icon name="search-outline"></ion-icon>
        </div>
      </div>
      <div className={`dropdown ${dropdownVisible ? "" : "hidden"}`}>
        <div className="dropdown-contents">
          <svg
            width="18"
            height="22"
            viewBox="0 0 18 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 18.5C1 17.837 1.26339 17.2011 1.73223 16.7322C2.20107 16.2634 2.83696 16 3.5 16H17M1 18.5C1 19.163 1.26339 19.7989 1.73223 20.2678C2.20107 20.7366 2.83696 21 3.5 21H17V1H3.5C2.83696 1 2.20107 1.26339 1.73223 1.73223C1.26339 2.20107 1 2.83696 1 3.5V18.5Z"
              stroke="#1D6FA3"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <div className="dropdown-title">
            <h2>Blog</h2>
            <p>The latest industry news, updates and info.</p>
          </div>
        </div>
        <div className="dropdown-contents">
          <svg
            width="20"
            height="22"
            viewBox="0 0 20 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 1L1 13H10L9 21L19 9H10L11 1Z"
              stroke="#1D6FA3"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <div className="dropdown-title">
            <h2>Customer stories</h2>
            <p>Learn how our customers are making big changes.</p>
          </div>
        </div>
        <div className="dropdown-contents">
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z"
              stroke="#1D6FA3"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9 7L15 11L9 15V7Z"
              stroke="#1D6FA3"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <div className="dropdown-title">
            <h2>Video tutorials</h2>
            <p>Get up and running on new features and techniques.</p>
          </div>
        </div>
      </div>
      <hr />

      <input
        className={`search-bar ${searchBarVisible ? "" : "hidden"}`}
        type="text"
        placeholder="Search"
      />

      <div className="hero-title">
        <h1>Beautiful analytics to grow smarter</h1>
        <p>
          Powerful, self-serve product and growth analytics to help you convert,
          engage, and retain more users. Trusted by over 4,000 startups.
        </p>
        <button className="hero-button">
          <span>Why Catalog?</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 16L6.575 14.6L12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
export default Hero;
