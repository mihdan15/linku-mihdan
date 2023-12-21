import React from "react";
import { FaDharmachakra } from "react-icons/fa"; // Import the icons jika dibutuhkan di dalam komponen ini
import Image from "next/image";

type Props = {
  links: any[];
};

const LinkList: React.FC<Props> = ({ links }) => {
  return (
    <ul className="space-y-4">
      {links.map((link: any, index: any) => (
        <li key={index}>
          <a
            target="_blank"
            href={link.url}
            className="block p-2 rounded-lg bg-gradient-to-r from-indigo-600 to-pink-700 drop-shadow-md transition text-white saturate-80 hover:saturate-100 hover:scale-105 hover:drop-shadow-xl"
          >
            <span className="flex items-center">
              <span className="mr-[-5px]">
                {typeof link.icon === "string" &&
                link.icon.startsWith("https") ? (
                  <Image
                    src={link.icon}
                    alt="icon"
                    width={36}
                    height={36}
                    className="rounded-lg"
                  />
                ) : link.icon ? (
                  <FaDharmachakra size={36} />
                ) : (
                  <FaDharmachakra size={36} />
                )}
              </span>
              <div className="w-full text-center mr-5">{link.nama}</div>
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default LinkList;
