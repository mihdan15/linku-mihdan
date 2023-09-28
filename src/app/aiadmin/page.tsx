"use client";
import { useState } from "react";
import { gql, useMutation, useQuery } from "@apollo/client";

// const GET_CATEGORIES = gql`
//   query GetCategories {
//     Categories {
//       id
//       title
//     }
//   }
// `;

const ADD_LINK = gql`
  mutation AddLink($name: String!, $url: String!, $categoryId: Int!) {
    insert_Links_one(
      object: { name: $name, url: $url, category_id: $categoryId }
    ) {
      id
      name
      url
    }
  }
`;

const GET_LINKS = gql`
  query GetLinks {
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

export default function Home() {
  const [newLinkName, setNewLinkName] = useState("");
  const [newLinkUrl, setNewLinkUrl] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | number>(
    " "
  );

  const [addLink] = useMutation(ADD_LINK);
  const { data, loading, error } = useQuery(GET_LINKS);

  const handleSubmitLink = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedCategory) return;
    try {
      await addLink({
        variables: {
          name: newLinkName,
          url: newLinkUrl,
          categoryId: selectedCategory,
        },
      });
      setNewLinkName("");
      setNewLinkUrl("");
    } catch (error) {
      console.error("Failed to add link:", error);
    }
  };

  return (
    <div className="backdrop-filter backdrop-blur-sm bg-opacity-10 bg-gradient-to-b from-sky-800 to-slate-900 min-h-screen p-8 ">
      <form onSubmit={handleSubmitLink} className="space-y-4">
        {" "}
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="block p-2 border rounded shadow-sm w-full max-w-lg mx-auto"
        >
          {data?.Categories?.map((category: any) => (
            <option value={category.id}>{category.title}</option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Link Name"
          value={newLinkName}
          onChange={(e) => setNewLinkName(e.target.value)}
          className="block w-full p-2 border rounded shadow-sm"
        />
        <input
          type="text"
          placeholder="Link URL"
          value={newLinkUrl}
          onChange={(e) => setNewLinkUrl(e.target.value)}
          className="block w-full p-2 border rounded shadow-sm"
        />
        <button
          type="submit"
          className="p-2 bg-blue-500 text-white rounded shadow-sm hover:bg-blue-600"
        >
          Add Link
        </button>
      </form>

      <div className="mt-10">
        <h2 className="text-xl mb-5">All Links:</h2>
        {loading && <p>Loading links...</p>}
        {error && <p>Error: {error.message}</p>}
        <ul>
          {data?.Categories?.map((Category: any) =>
            Category.Links.map((link: any) => (
              <li
                key={link.id}
                className="mb-4 p-4 border rounded shadow-sm space-y-2"
              >
                <div>
                  <strong>Name:</strong> {link.name}
                </div>
                <div>
                  <strong>URL:</strong>{" "}
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    {link.url}
                  </a>
                </div>
                <div>
                  <strong>Category:</strong> {Category.title}
                </div>
                <div className="mt-2 space-x-2">
                  <button className="p-1 bg-blue-500 text-white rounded hover:bg-blue-600">
                    Edit
                  </button>
                  <button className="p-1 bg-red-500 text-white rounded hover:bg-red-600">
                    Delete
                  </button>
                </div>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}
