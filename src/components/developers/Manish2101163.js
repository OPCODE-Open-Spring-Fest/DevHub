import React from "react";
import Manish from '../assets/Manish2101163ec.JPG';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const Manish2101163 = () => (
  <>
    <div className="pt-16 min-h-lvh">
      <div className="mx-auto max-w-7xl py-24 px-4 sm:px-6 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gray-700 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">

          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Manish Kumar
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              A 3rd year student of Electronics And Communication Engineering, and Full stack web developer
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <button
                type="button"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
              >
                ECE
              </button>
              <a
                href="https://www.linkedin.com/in/manish-kumar-aaa77b250/"
                className="text-sm font-semibold leading-6 text-white"
              >
                <FontAwesomeIcon icon={faLinkedinIn} size="2xl" style={{ color: "#ffffff", }} />
              </a>
              <a
                href="https://github.com/ManishKumar2515"
                className="text-sm font-semibold leading-6 text-white"
              >
                Github <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div className="relative mt-16 h-80 lg:mt-8 lg:h-auto">
            <img
              className="absolute left-0 top-0 w-full max-w-none rounded-md bg-white/5 ring-1 ring-white/10 sm:w-[32rem]"
              src={Manish}
              alt=""
              width={1824}
              height={1080}
            />
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Manish2101163;