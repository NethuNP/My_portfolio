import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <div>
      <div
        className="max-w-[1200px] mx-auto bg-black md:pt-[90px] pt-[100px]"
        id="contact"
      >
        <div className="text-center">
          <h2
            className="text-4xl font-bold leading-tight primary-color"
            data-aos="zoom-in"
          >
            Contact Me
          </h2>
        </div>

        <div className="max-w-[800px] mx-auto" data-aos="zoom-in">
          <div className="mt-6 bg-gray-900 rounded-xl">
            <div className="p-10">
              <form action="https://getform.io/f/akkgeepa" method="Post">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                  <div>
                    <div className="mt-2.5 relative">
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        className="bg-gray-950 w-full px-4 py-4 text-gray-400 placeholder:gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-pink-600"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <div className="mt-2.5 relative">
                      <input
                        type="email"
                        name="email"
                        placeholder="Your E-mail"
                        className="bg-gray-950 w-full px-4 py-4 text-gray-400 placeholder:gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-pink-600"
                        required
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <div className="mt-2.5 relative">
                      <textarea
                        name="message"
                        placeholder="Your Message"
                        className="bg-gray-950 w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-pink-600"
                        rows="4"
                        required
                      ></textarea>
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      className="text-xl w-full p-4 mt-2 font-semibold text-white bg-primary-color rounded-md"
                    >
                      Send
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
