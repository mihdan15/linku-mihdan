"use client";
import {
  FaDharmachakra,
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaGlobe,
  FaFacebook,
} from "react-icons/fa"; // Import the icons
import React, { useState } from "react";
import Image from "next/image";
import Avatar from "public/avatar.png";
import Link from "next/link";
import { useQuery, gql } from "@apollo/client";
import Load from "@/components/load";

const GET_DATA = gql`
  query MyQuery {
    Linku {
      id
      icon
      nama
      url
    }
  }
`;

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const { loading, error, data } = useQuery(GET_DATA);
  const filteredLinks = data?.Linku.filter((link: any) =>
    // link.title.toLowerCase().includes(searchQuery.toLowerCase())
    link.nama.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchQuery(event.target.value);
  };

  console.log(data);

  if (loading) return <Load />;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="backdrop-filter backdrop-blur-sm bg-opacity-10 bg-gradient-to-b from-sky-800 to-slate-900 min-h-screen p-8 bg-svg">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="header">
          {/* Avatar */}
          <div className="relative mx-auto bg-gradient-to-b from-cyan-500 to-blue-500 rounded-full w-64 h-64 mb-5 overflow-hidden shadow-sm">
            <Link href="/admin">
              <Image
                src={Avatar}
                alt="avatar"
                layout="fill"
                objectFit="cover"
              />
            </Link>
          </div>
          <h1 className="text-3xl font-semibold mb-1 text-center">
            Mihdan Advani
          </h1>
          <h2 className="text-2xl mb-2 text-center">
            Link yang mungkin berguna buatmu
          </h2>
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
        <div className="search-container mb-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchInputChange}
              className="placeholder:italic text-slate-700 placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="Search for anything..."
              // className="p-2 border rounded-lg w-full focus:ring-blue-300 text-blue-500"
            />{" "}
          </div>
        </div>
        <ul className="space-y-4">
          {filteredLinks.map((link: any, index: any) => (
            <li key={index}>
              <a
                target="_blank"
                href={link.url}
                className="block p-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 shadow-lg transition text-white saturate-50 hover:saturate-100 hover:scale-105"
              >
                <span className="flex items-center">
                  <span className="mr-[-5px]">
                    {typeof link.icon === "string" &&
                    link.icon.startsWith("https") ? (
                      <Image
                        src={link.icon}
                        alt="icon"
                        width={32}
                        height={32}
                        className="rounded-lg"
                      />
                    ) : link.icon ? (
                      <FaDharmachakra size={32} />
                    ) : (
                      <FaDharmachakra size={32} />
                    )}
                  </span>
                  <div className="w-full text-center mr-5">{link.nama}</div>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
