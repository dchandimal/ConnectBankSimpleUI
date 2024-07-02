import React from "react";

import Navigation from "./Navigation";
import Logoset from "./logoset";

const Overall = () => {
  return (
    <div
      className="relative min-h-screen bg-center bg-cover"
      style={{ backgroundImage: `url(/assets/images/bg.jpg)` }}
    >
      <Navigation />

      <div className="relative px-6 isolate pt-14 lg:px-8">
        <div className="max-w-2xl max-h-screen py-2 mx-auto sm:py-1 lg:pt-8">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
          <div className="pt-10 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Connect to bank accounts for free
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              An effective, fast and reliable way to make a sense of raw
              transaction data recieved from banks, all in one single product.
            </p>
            <div className="flex items-center justify-center mt-10 mb-10">
              <input
                type="text"
                placeholder="Type your work email"
                className="px-4 py-2 text-sm text-gray-900 bg-white border-gray-300 border-none rounded-l-md focus:outline-none focus:border-transparent"
              />
              <button className="px-4 py-2 -ml-1 text-sm font-semibold text-white bg-green-600 rounded-md hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-600">
                Get started
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="relative px-32 isolate lg:px-32">
        <Logoset />
      </div>
    </div>
  );
};

export default Overall;
