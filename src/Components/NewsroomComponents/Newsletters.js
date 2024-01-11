import React from "react";
import { newsletter } from "./NewsLetterItems/newsLetterConstants";
import { NavLink } from "react-router-dom";

export default function Newsletters() {
  return (
    <div className="border-b border-solid border-b-gray-400">
      <div
        className="text-white text-xs pl-10 pt-10 font-bold"
        style={{ fontFamily: "Usual-Light" }}
      >
        <h6>/ NEWSLETTERS</h6>
      </div>
      <ul className="divide-y divide-gray-800 px-80 mb-10">
        {newsletter.map((newsletter) => (
          <div className="flex flex-col justify-center">
            <li
              key={newsletter.description}
              className="flex justify-between gap-x-6 py-5 w-11/12"
            >
              <div className="flex min-w-0 gap-x-4">
                <img
                  className="h-60 w-80 flex-none bg-black"
                  src={newsletter.img}
                  alt=""
                />
                <div className="min-w-0 flex-auto text-white mt-1">
                  <p
                    className="text-4xl font-bold leading-11 text-white mb-2"
                    style={{ fontFamily: "Usual-Light" }}
                  >
                    {newsletter.name}
                  </p>
                  <p
                    className="text-lg italic text-white mb-3"
                    style={{ fontFamily: "Usual-Light" }}
                  >
                    {newsletter.date}
                  </p>
                  <p
                    className="mt-1 text-md leading-5 text-white mb-3"
                    style={{ fontFamily: "Usual-Light" }}
                  >
                    {newsletter.description}
                  </p>
                  <p className="flex">
                    <img
                      className="pb-10 mr-3 w-6 rounded-full"
                      src={newsletter.authorHeadshot}
                      alt=""
                    />
                    {newsletter.author}
                  </p>
                </div>
              </div>
              <div className="shrink-0 sm:flex sm:flex-col sm:items-end mt-auto mb-0">
                <NavLink
                  to={newsletter.navLink}
                  className="text-white border border-solid py-2 px-6 rounded-md"
                  style={{ fontFamily: "Usual-Light" }}
                >
                  Read More
                </NavLink>
              </div>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}
