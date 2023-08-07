import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-dark text-white shadow text-center py-3 position-fixed w-100 bottom-0">
      <p>
        &copy; {currentYear} Food-Search-App. All Rights Reserved by Biitu Kumar
      </p>
    </footer>
  );
};

export default Footer;
