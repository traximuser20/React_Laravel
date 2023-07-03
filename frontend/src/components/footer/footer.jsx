import React from "react";
import CaretRight from "../../assets/logos/CaretRight.svg";
import Facebook from "../../assets/logos/Facebook.svg";
import Instagram from "../../assets/logos/Instagram.svg";
import Twitter from "../../assets/logos/Twitter.svg";
import Youtube from "../../assets/logos/Youtube.svg";
import Logo_white from "../../assets/Logo_white.svg";

const Footer = () => {
  return (
    <div>
      {/* <!-- FAQ  --> */}
      <section className="sectionSize items-start pt-8 md:pt-18 bg-black text-white mt-28">
        <div>
          <h2 className="text-4xl pt-4 pb-4 underline underline-offset-8 bg-highlight3 p-10 mb-0 bg-center bg-100%">
            FAQ
          </h2>
        </div>

        <div toggleElement className="w-full py-4">
          <div className="flex justify-between items-center">
            <div question className="font-montserrat font-medium mr-auto">
              Where can I get this HTML template?
            </div>
            <img
              src={CaretRight}
              alt=""
              className="transform transition-transform"
            />
          </div>
          <div
            answer
            className="font-montserrat text-sm font-extralight pb-8 hidden"
          >
            You can download it on Gumroad.com
          </div>
        </div>
        <hr className="w-full bg-white" />

        <div toggleElement className="w-full py-4">
          <div className="flex justify-between items-center">
            <div question className="font-montserrat font-medium mr-auto">
              Is this HTML template free?
            </div>
            <img
              src={CaretRight}
              alt=""
              className="transform transition-transform"
            />
          </div>
          <div
            answer
            className="font-montserrat text-sm font-extralight pb-8 hidden"
          >
            Yes! For you it is free.
          </div>
        </div>
        <hr className="w-full bg-white" />

        <div toggleElement className="w-full py-4">
          <div className="flex justify-between items-center">
            <div question className="font-montserrat font-medium mr-auto">
              Am I awesome?
            </div>
            <img
              src={CaretRight}
              alt=""
              className="transform transition-transform"
            />
          </div>
          <div
            answer
            className="font-montserrat text-sm font-extralight pb-8 hidden"
          >
            Yes! No doubt about it.
          </div>
        </div>
        <hr className="w-full bg-white" />
      </section>

      {/* <!-- Footer --> */}
      <section className="bg-black sectionSize w-full">
        <div className="mb-4 flex justify-center pt-4">
          <img src={Logo_white} alt="Logo" className="h-4" />
        </div>
        <div className="flex mb-8 justify-center">
          <a href="#">
            <img src={Facebook} alt="Facebook logo" className="mx-4" />
          </a>
          <a href="#">
            <img src={Youtube} alt="Youtube logo" className="mx-4" />
          </a>
          <a href="#">
            <img src={Instagram} alt="Instagram logo" className="mx-4" />
          </a>
          <a href="#">
            <img src={Twitter} alt="Twitter logo" className="mx-4" />
          </a>
        </div>
        <div className="text-white font-montserrat text-sm pb-8">
          © 2023 Traxim. All rights reserved
        </div>
      </section>
    </div>
  );
};

export default Footer;
