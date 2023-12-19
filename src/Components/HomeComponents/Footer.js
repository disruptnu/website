import React from "react";
import email from "../../img/email.svg";
import instagram from "../../img/instagram.svg";
import linkedin from "../../img/linkedin.svg";
import { NavLink } from "react-router-dom";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  function handleClickInstagram() {
    window.location = "https://www.instagram.com/neudisrupt";
  }
  function handleClickLinkedIn() {
    window.location = "https://www.linkedin.com/company/neudisrupt/";
  }
  function handleClickEmail() {
    window.location = "mailto:%20nufintech@gmail.com";
  }

  return (
    <div>
      <nav>
        <div class="mx-auto max-w-7xl px-2 py-20 sm:px-6 lg:px-8">
          <div class="relative flex h-70 items-center justify-between">
            <div class="flex flex-1 items-center sm:items-stretch">
              <div class="hidden sm:ml-6 sm:block w-1/2">
                <div
                  class="text-4xl font-bold leading-11 text-white flex"
                  style={{
                    fontFamily: "Faucet",
                    fontFeatureSettings: "'dlig' on, 'ss01' on",
                  }}
                >
                  WANT MORE?
                </div>
                <div class="mt-3 text-md leading-5 text-white">
                  Subscribe to our bi-weekly newsletter for event updates, job
                  opportunities, latest FinTech news and to connect with our
                  community!
                </div>
                <div class="mt-10 text-white font-normal">NAME</div>
                <input
                  type="text"
                  class="bg-black block mt-2 w-3/5 rounded-md border-blue-500 py-4 pl-7 pr-20 text-white ring-1 ring-blue-500 focus:ring-1 sm:text-sm sm:leading-3"
                ></input>
                <div class="mt-10 text-white font-normal">EMAIL ADDRESS</div>
                <input
                  type="text"
                  class="bg-black block mt-2 w-3/5 rounded-md border-blue-500 py-4 pl-7 pr-20 text-white ring-1 ring-blue-500 focus:ring-1 sm:text-sm sm:leading-3"
                ></input>
                <button className="text-white text-base mt-10 px-12 py-3 font-bold bg-black border border-solid border-[#b5f727] rounded-full hover:bg-[#b5f727] hover:text-black">
                  SUBSCRIBE
                </button>
              </div>
              <div class="width-1/4 ml-10 pr-20">
                <div>
                  <a
                    href="/About"
                    class="text-white font-bold text-lg"
                    aria-current="page"
                  >
                    ABOUT
                  </a>
                </div>
                <div>
                  <NavLink
                    to="/About"
                    className="text-white text-sm font-medium"
                  >
                    Team
                  </NavLink>
                  <div>
                    <a
                      href="mailto:%20nufintech@gmail.com"
                      className="text-white text-sm font-medium"
                    >
                      Contact
                    </a>
                  </div>
                  <div className="mt-14">
                    <NavLink
                      to="/PastVentures"
                      onClick={scrollToTop}
                      className="text-white font-bold text-lg"
                    >
                      PORTFOLIO
                    </NavLink>
                  </div>
                  <div>
                    <NavLink
                      to="/Ventures"
                      onClick={scrollToTop}
                      className="text-white text-sm font-medium"
                    >
                      Ventures
                    </NavLink>
                  </div>
                  <div>
                    <NavLink
                      to="/PastVentures"
                      onClick={scrollToTop}
                      className="text-white text-sm font-medium"
                    >
                      Past Ventures
                    </NavLink>
                  </div>
                  <div class="mt-14">
                    <NavLink
                      to="/Newsroom"
                      onClick={scrollToTop}
                      className="text-white font-bold text-lg"
                    >
                      BLOG
                    </NavLink>
                  </div>
                  <div>
                    <NavLink
                      to="/Newsroom"
                      onClick={scrollToTop}
                      className="text-white text-sm font-medium"
                    >
                      Newsletters
                    </NavLink>
                  </div>
                  <div>
                    <NavLink
                      to="/Newsroom"
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
                    to="/Ventures"
                    onClick={scrollToTop}
                    className="text-white font-bold text-lg"
                  >
                    PROGRAMS
                  </NavLink>
                </div>
                <div>
                  <NavLink
                    to="/Ventures"
                    onClick={scrollToTop}
                    className="text-white text-sm font-medium"
                  >
                    Finnovate
                  </NavLink>
                </div>
                <div>
                  <NavLink
                    to="/Consulting"
                    onClick={scrollToTop}
                    className="text-white text-sm font-medium"
                  >
                    Elevate
                  </NavLink>
                </div>
                <div>
                  <NavLink
                    to="/"
                    onClick={scrollToTop}
                    className="text-white text-sm font-medium"
                  >
                    Misc.
                  </NavLink>
                </div>

                <div className="mt-8">
                  <NavLink
                    to="/Events"
                    onClick={scrollToTop}
                    className="text-white font-bold text-lg"
                  >
                    EVENTS
                  </NavLink>
                </div>
                <div>
                  <NavLink
                    to="/Events"
                    onClick={scrollToTop}
                    className="text-white text-sm font-medium"
                  >
                    Calendar
                  </NavLink>
                </div>
                <div>
                  <NavLink
                    to="/Events"
                    onClick={scrollToTop}
                    className="text-white text-sm font-medium"
                  >
                    Fireside Chats
                  </NavLink>
                </div>
                <div>
                  <NavLink
                    to="/Events"
                    onClick={scrollToTop}
                    className="text-white text-sm font-medium"
                  >
                    Technology Workshops
                  </NavLink>
                </div>
              </div>
            </div>
            <div class="absolute right-0 bottom-0 flex place-items-end pr-2 space-x-20">
              <button onClick={handleClickEmail}>
                <img src={email} alt="" />
              </button>
              <button onClick={handleClickInstagram}>
                <img src={instagram} alt="" />
              </button>
              <button onClick={handleClickLinkedIn}>
                <img src={linkedin} alt="" />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
