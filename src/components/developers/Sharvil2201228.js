import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

import Sharvil from "../assets/sharvil.JPG";

const Sharvil2201228 = () => {
  return (
    <div>
      {/* Apply background gradient */}
      <div className="bg-gradient-to-r from-white-900 to-indigo-900">
        <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-8 lg:px-8">
          <div className="relative overflow-hidden bg-blue-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            {/* Improved SVG design */}
            <svg
              viewBox="0 0 1024 1024"
              className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
              aria-hidden="true"
            >
              <circle
                cx={512}
                cy={512}
                r={512}
                fill="url(#gradient)"
                fillOpacity="0.7"
              />
              <defs>
                <radialGradient id="gradient">
                  <stop offset="5%" stopColor="#8A2387" />
                  <stop offset="95%" stopColor="#E94057" />
                </radialGradient>
              </defs>
            </svg>
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl hover:text-yellow-500 transition duration-300">
                Sharvil Lade
                <br />
                <span className="text-xl font-medium">
                  Electronics & Communication Engineering Student
                </span>
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Passionate about Web Development and AI/ML technologies.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                <a
                  href="#"
                  className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 hover:text-purple-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition duration-300"
                >
                  ECE
                </a>
                <a
                  href="https://www.linkedin.com/in/sharvil-lade/"
                  className="text-sm font-semibold leading-6 text-white hover:text-blue-500 transition duration-300"
                >
                  <FontAwesomeIcon
                    icon={faLinkedinIn}
                    size="2xl"
                    style={{ color: "#ffffff" }}
                  />
                </a>
                <a
                  href="https://github.com/sharvil-lade"
                  className="text-sm font-semibold leading-6 text-white hover:text-green-500 transition duration-300"
                >
                  Github <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            <div className="relative mt-16 h-80 lg:mt-8">
              <img
                className="absolute left-0 top-0 w-[32rem] max-w-none rounded-md bg-white/10 ring-1 ring-white/20 transition duration-300 transform hover:scale-105 px-7"
                src={Sharvil}
                alt="App screenshot"
                width={1824}
                height={1080}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sharvil2201228;
