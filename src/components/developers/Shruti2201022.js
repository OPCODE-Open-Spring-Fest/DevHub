import React from "react";
import Shruti from "../assets/Shruti Shahi.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const Shruti2201022 = () => {
    return (
        <div className="">
            <div className="pt-16 min-h-lvh ">
                <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-6 lg:px-8 ">
                    {/* created gradient for the text part */}
                    <div className="relative isolate overflow-hidden bg-black px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
                    <div className="absolute top-0 -left-4 w-72 h-72 bg-pink-400 rounded full shadow-sm mix-blend-multiply filter blur-2xl opacity-70"></div>
                    <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-500 rounded full shadow-sm mix-blend-multiply filter blur-2xl opacity-70"></div>
                    <div className="absolute top-8 right-20 w-72 h-72 bg-blue-600 rounded full shadow-sm mix-blend-multiply filter blur-2xl opacity-70"></div>
                    <div className="absolute -bottom-8 right-20 w-72 h-72 bg-yellow-400 rounded full shadow-sm mix-blend-multiply filter blur-2xl opacity-70"></div>
                        <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                                Shruti Shahi
                                <br />
                            </h2>
                            <p className="mt-6 text-lg leading-8 text-gray-300">
                                A 2nd year student of CSE branch and a web
                                development enthusiast.
                            </p>
                            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                                <a
                                    href="/"
                                    className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                                >
                                    CSE
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/shruti-shahi180803/"
                                    className="text-sm font-semibold leading-6 text-white"
                                >
                                    <FontAwesomeIcon
                                        icon={faLinkedinIn}
                                        size="2xl"
                                        style={{ color: "#ffffff" }}
                                    />
                                </a>
                                <a
                                    href="https://github.com/ShrutiShahi18"
                                    className="text-sm font-semibold leading-6 text-white"
                                >
                                    Github <span aria-hidden="true">→</span>
                                </a>
                            </div>
                        </div>
                        <div className="relative mt-16 h-80 lg:mt-8">
                            <img
                                className="absolute left-0 top-0 w-[32rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
                                src={Shruti}
                                alt=""
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

export default Shruti2201022;
