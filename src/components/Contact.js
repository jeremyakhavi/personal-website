import React from "react";

export default function Contact() {
  return (
      <section id="contact">
        <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              Want to chat?
            </h1>
            <p className="mb-8 leading-relaxed">
              Feel free to send me an email, or ping me a message on LinkedIn, I'd love to have a chat.
            </p>
            <div className="flex justify-center">
              <a
                href="mailto:jeremyakhavi@me.com"
                className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                Email me
              </a>
              <a
                href="https://linkedin.com/in/jeremy99"
                className="ml-4 inline-flex text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-blue-800 rounded text-lg">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
  );
}
