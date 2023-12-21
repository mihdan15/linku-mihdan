import { useState } from "react";
import { useQuery, gql } from "@apollo/client";

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

const useLinks = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { loading, error, data } = useQuery(GET_DATA);

  const filteredLinks = data?.Linku.filter((link: any) =>
    link.nama.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return {
    searchQuery,
    setSearchQuery,
    loading,
    error,
    filteredLinks,
  };
};

export default useLinks;
