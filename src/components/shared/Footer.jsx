import React from "react";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 px-6 py-16 max-w-5xl mx-auto text-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-faucet mb-4">Want More?</h3>
          <p className="text-sm text-gray-400 mb-6">
            Subscribe to our bi-weekly newsletter for event updates, job
            opportunities, latest FinTech news and to connect with our community!
          </p>
          <div className="space-y-3">
            <div>
              <label htmlFor="footer-name" className="text-sm text-gray-400">Name</label>
              <input id="footer-name" type="text" className="w-full mt-1 px-3 py-2 bg-black border border-gray-700 rounded text-white text-sm" />
            </div>
            <div>
              <label htmlFor="footer-email" className="text-sm text-gray-400">Email</label>
              <input id="footer-email" type="email" className="w-full mt-1 px-3 py-2 bg-black border border-gray-700 rounded text-white text-sm" />
            </div>
            <button className="px-6 py-2 bg-brand-lime text-black font-bold rounded text-sm">
              Subscribe
            </button>
          </div>
        </div>

        {/* Navigation */}
        <div className="space-y-2">
          <h4 className="font-bold mb-2">Pages</h4>
          <NavLink to="/about" className="block text-sm text-gray-400 hover:text-white">About</NavLink>
          <NavLink to="/finnovate" className="block text-sm text-gray-400 hover:text-white">Finnovate</NavLink>
          <NavLink to="/consulting" className="block text-sm text-gray-400 hover:text-white">Consulting</NavLink>
          <NavLink to="/events" className="block text-sm text-gray-400 hover:text-white">Events</NavLink>
          <NavLink to="/newsroom" className="block text-sm text-gray-400 hover:text-white">Newsroom</NavLink>
          <NavLink to="/past-ventures" className="block text-sm text-gray-400 hover:text-white">Past Ventures</NavLink>
        </div>

        {/* Contact */}
        <div className="space-y-2">
          <h4 className="font-bold mb-2">Connect</h4>
          <a href="mailto:nufintech@gmail.com" className="block text-sm text-gray-400 hover:text-white">Email</a>
          <a href="https://www.instagram.com/neudisrupt" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-400 hover:text-white">Instagram</a>
          <a href="https://www.linkedin.com/company/neudisrupt/" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-400 hover:text-white">LinkedIn</a>
          <a href="https://disrupt-fintech.medium.com/" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-400 hover:text-white">Newsletter</a>
        </div>
      </div>
    </footer>
  );
}
