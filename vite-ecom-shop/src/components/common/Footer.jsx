import React from "react";

const Footer = () => {
  return (
    <footer className="footer rounded-sm">
      <div className=" mx-auto bg-amber-300 text-center">
        <div className="text-center  py-2">
          <div className="container mx-auto">Footer content</div>
        </div>
        <div className="text-xs bg-gray-500 pt-2 pb-2">
          <div className="container mx-auto">
            Built with Vite + React + React Router 7
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
