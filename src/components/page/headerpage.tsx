import React from "react";
import Avatar from "../../../public/avatar.webp";
import Link from "next/link";
import Image from "next/image";
import {
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaGlobe,
} from "react-icons/fa";

function Headerpage() {
  return (
    <div className="header">
      {/* Avatar */}
      <div className="relative mx-auto bg-gradient-to-b from-indigo-500 to-pink-500 rounded-full w-64 h-64 mb-5 overflow-hidden shadow-sm">
        <Link href="/admin">
          <Image src={Avatar} alt="avatar" layout="fill" objectFit="cover" />
        </Link>
      </div>
      <h1 className="text-3xl md:text-6xl font-black mb-1 text-center bg-gradient-to-br from-indigo-500 to-pink-500 bg-clip-text text-transparent">
        Mihdan Advani
      </h1>
      <h4 className="md:text-2xl mb-2 text-center">
        Link yang mungkin berguna buatmu
      </h4>
      {/* Socmed */}
      <div className="flex mb-8 justify-center">
        <a
          href="https://www.twitter.com/mage_field"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 text-gray-300 hover:text-white "
        >
          <FaTwitter size={32} />
        </a>
        <a
          href="https://www.instagram.com/mihdan_advani"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 text-gray-300 hover:text-white "
        >
          <FaInstagram size={32} />
        </a>
        <a
          href="https://www.github.com/mihdan15"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 text-gray-300 hover:text-white "
        >
          <FaGithub size={32} />
        </a>
        <a
          href="https://www.linkedin.com/in/mihdanadvani/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 text-gray-300 hover:text-white "
        >
          <FaLinkedin size={32} />
        </a>
        <a
          href="https://mihdanadvani.my.id/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 text-gray-300 hover:text-white "
        >
          <FaGlobe size={32} />
        </a>
      </div>
    </div>
  );
}

export default Headerpage;
