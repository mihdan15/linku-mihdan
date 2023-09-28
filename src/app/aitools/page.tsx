"use client";
import React from "react";
import { useQuery, gql } from "@apollo/client";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const GET_CATEGORIES = gql`
  query GetCategories {
    Categories {
      id
      title
      Links {
        id
        name
        url
      }
    }
  }
`;
type CategoryType = {
  id: number;
  title: string;
  Links: {
    id: number;
    name: string;
    url: string;
  }[];
};

export default function Aitools() {
  const { data, loading, error } = useQuery(GET_CATEGORIES);
  const [expandedCategories, setExpandedCategories] = React.useState<number[]>(
    []
  );
  const [searchTerm, setSearchTerm] = React.useState("");

  const toggleCategory = (categoryId: number) => {
    if (expandedCategories.includes(categoryId)) {
      setExpandedCategories((prev) => prev.filter((id) => id !== categoryId)); // collapse the category if it's already expanded
    } else {
      setExpandedCategories((prev) => [...prev, categoryId]); // otherwise, expand it
    }
  };

  const filteredCategories =
    data?.Categories?.filter((category: any) =>
      category.title.toLowerCase().includes(searchTerm.toLowerCase())
    ) || [];

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="flex justify-center backdrop-filter backdrop-blur-sm bg-opacity-10 bg-gradient-to-b from-sky-800 to-slate-900 min-h-screen p-8">
      <div className="space-y-4 mx-auto px-4 sm:w-full md:w-4/5">
        <div className="mb-5 bg-gray-800 bg-opacity-40 rounded">
          <input
            type="text"
            placeholder="Search categories..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="p-2 rounded w-full"
          />
        </div>
        {filteredCategories?.map((category: CategoryType) => (
          <div
            key={category.id}
            className={`p-4 my-2 rounded transition-colors duration-200 cursor-pointer ${
              expandedCategories.includes(category.id)
                ? "bg-gray-800 bg-op"
                : "bg-gray-800"
            }`}
          >
            <div
              className={`flex transition-colors rounded duration-200 justify-between items-center p-2 ${
                expandedCategories.includes(category.id)
                  ? "bg-blue-600"
                  : "bg-gray-800"
              }`}
              onClick={() => toggleCategory(category.id)}
            >
              <h2 className="text-lg font-medium text-center flex-grow">
                {category.title}
              </h2>
              <span>
                {expandedCategories.includes(category.id) ? (
                  <FaAngleUp size={32} />
                ) : (
                  <FaAngleDown size={32} />
                )}
              </span>
            </div>

            {expandedCategories.includes(category.id) && (
              <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-4 mt-4">
                {category.Links.map((link) => (
                  <div
                    key={link.id}
                    className="text-center rounded bg-white bg-opacity-10 p-5 hover:bg-opacity-30 transition"
                    onClick={() => window.open(link.url, "_blank")}
                  >
                    {link.name}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    // <div className="flex justify-center mt-10">
    //   <div className="w-7/12">
    //     {data?.Categories?.map((category: CategoryType) => (
    //       <Dropdown
    //         key={category.id}
    //         title={category.title}
    //         Links={category.Links}
    //       />
    //     ))}
    //   </div>
    // </div>
  );
}
