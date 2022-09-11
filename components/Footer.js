import React from "react";

const Footer = () => {
  return (
    <footer className="flex justify-center items-center py-4 px-8">
      <div className="flex flex-col justify-center items-center mx-auto">
        <span className="text-gray-700 font-medium">Hosted By</span>
        <span className="">ReactPlay</span>
        <p className="mt-4 font-medium text-gray-700">
          An open-source project made with ❤ by Tapas Adhikary and friends.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
