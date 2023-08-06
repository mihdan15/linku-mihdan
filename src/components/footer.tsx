import React from "react";
import {
  FaDharmachakra,
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaGlobe,
  FaFacebook,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
      <div className="sm:flex sm:items-center sm:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            Mihdan Advani™
          </a>
          , Made with ❤.
        </span>
        <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
          <a
            href="https://www.facebook.com/aku.midan"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
          >
            <FaFacebook size={32} />
            <span className="sr-only">Facebook page</span>
          </a>
          <a
            href="https://www.twitter.com/mage_field"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
          >
            <FaTwitter size={32} />
            <span className="sr-only">Twitter page</span>
          </a>
          <a
            href="https://www.github.com/mihdan15"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
          >
            <FaGithub size={32} />
            <span className="sr-only">GitHub account</span>
          </a>
          <a
            href="https://www.instagram.com/mihdan_advani"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
          >
            <FaInstagram size={32} />
            <span className="sr-only">Instagram account</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
