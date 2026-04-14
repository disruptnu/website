import React from "react";
import emailIcon from "../../img/email.svg";
import instagramIcon from "../../img/instagram.svg";
import linkedinIcon from "../../img/linkedin.svg";
import { NavLink } from "react-router-dom";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer>
      <nav aria-label="Footer navigation">
        <div className="mx-auto max-w-7xl px-2 py-20 sm:px-6 lg:px-8">
          <div className="relative flex h-70 items-center justify-between">
            <div className="flex flex-1 items-center sm:items-stretch">
              <div className="hidden sm:ml-6 sm:block w-1/2">
                <div
                  className="text-4xl font-bold leading-11 text-white flex"
                  style={{
                    fontFamily: "Faucet",
                    fontFeatureSettings: "'dlig' on, 'ss01' on",
                  }}
                >
                  WANT MORE?
                </div>
                <div className="mt-3 text-md leading-5 text-white">
                  Subscribe to our bi-weekly newsletter for event updates, job
                  opportunities, latest FinTech news and to connect with our
                  community!
                </div>
                <div className="mt-10 text-white font-normal">
                  <label htmlFor="footer-name">NAME</label>
                </div>
                <input
                  id="footer-name"
                  type="text"
                  className="bg-black block mt-2 w-3/5 rounded-md border-blue-500 py-4 pl-7 pr-20 text-white ring-1 ring-blue-500 focus:ring-1 sm:text-sm sm:leading-3"
                />
                <div className="mt-10 text-white font-normal">
                  <label htmlFor="footer-email">EMAIL ADDRESS</label>
                </div>
                <input
                  id="footer-email"
                  type="email"
                  className="bg-black block mt-2 w-3/5 rounded-md border-blue-500 py-4 pl-7 pr-20 text-white ring-1 ring-blue-500 focus:ring-1 sm:text-sm sm:leading-3"
                />
                <button className="text-white text-base mt-10 px-12 py-3 font-bold bg-black border border-solid border-brand-lime rounded-full hover:bg-brand-lime hover:text-black">
                  SUBSCRIBE
                </button>
              </div>
              <div className="w-1/4 ml-10 pr-20">
                <div>
                  <NavLink
                    to="/about"
                    onClick={scrollToTop}
                    className="text-white font-bold text-lg"
                  >
                    ABOUT
                  </NavLink>
                </div>
                <div>
                  <NavLink
                    to="/about"
                    onClick={scrollToTop}
                    className="text-white text-sm font-medium"
                  >
                    Team
                  </NavLink>
                  <div>
                    <a
                      href="mailto:nufintech@gmail.com"
                      className="text-white text-sm font-medium"
                    >
                      Contact
                    </a>
                  </div>
                  <div className="mt-14">
                    <NavLink
                      to="/past-ventures"
                      onClick={scrollToTop}
                      className="text-white font-bold text-lg"
                    >
                      PORTFOLIO
                    </NavLink>
                  </div>
                  <div>
                    <NavLink
                      to="/finnovate"
                      onClick={scrollToTop}
                      className="text-white text-sm font-medium"
                    >
                      Finnovate
                    </NavLink>
                  </div>
                  <div>
                    <NavLink
                      to="/past-ventures"
                      onClick={scrollToTop}
                      className="text-white text-sm font-medium"
                    >
                      Past Finnovate Events
                    </NavLink>
                  </div>
                  <div className="mt-14">
                    <NavLink
                      to="/newsroom"
                      onClick={scrollToTop}
                      className="text-white font-bold text-lg"
                    >
                      BLOG
                    </NavLink>
                  </div>
                  <div>
                    <NavLink
                      to="/newsroom"
                      onClick={scrollToTop}
                      className="text-white text-sm font-medium"
                    >
                      Newsletters
                    </NavLink>
                  </div>
                  <div>
                    <NavLink
                      to="/newsroom"
                      onClick={scrollToTop}
                      className="text-white text-sm font-medium"
                    >
                      Publications
                    </NavLink>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <NavLink
                    to="/finnovate"
                    onClick={scrollToTop}
                    className="text-white font-bold text-lg"
                  >
                    PROGRAMS
                  </NavLink>
                </div>
                <div>
                  <NavLink
                    to="/finnovate"
                    onClick={scrollToTop}
                    className="text-white text-sm font-medium"
                  >
                    Finnovate
                  </NavLink>
                </div>
                <div>
                  <NavLink
                    to="/consulting"
                    onClick={scrollToTop}
                    className="text-white text-sm font-medium"
                  >
                    Consulting
                  </NavLink>
                </div>

                <div className="mt-8">
                  <NavLink
                    to="/events"
                    onClick={scrollToTop}
                    className="text-white font-bold text-lg"
                  >
                    EVENTS
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="absolute right-0 bottom-0 flex place-items-end pr-2 space-x-20">
              <a href="mailto:nufintech@gmail.com" aria-label="Email us">
                <img src={emailIcon} alt="" />
              </a>
              <a href="https://www.instagram.com/neudisrupt" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <img src={instagramIcon} alt="" />
              </a>
              <a href="https://www.linkedin.com/company/neudisrupt/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <img src={linkedinIcon} alt="" />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </footer>
  );
}
