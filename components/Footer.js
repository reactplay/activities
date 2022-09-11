import React from "react";

const Footer = () => {
  return (
    <footer className="flex justify-center items-center pt-16 pb-11 px-8 bg-white bg-opacity-10">
      <div className="flex flex-col justify-center items-center mx-auto ">
        <span className="text-gray-600 font-semibold font-body">Hosted By</span>
        <span className="">ReactPlay</span>
        <p className="mt-4 font-semibold font-body text-gray-600">
          An open-source project made with ❤ by Tapas Adhikary and friends.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
