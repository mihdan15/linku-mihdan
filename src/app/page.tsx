"use client";
import React, { useState } from "react";
import useLinks from "@/components/page/uselinks";
import { useQuery, gql } from "@apollo/client";
import { Load } from "@/components/func/skeleton";
import Headerpage from "@/components/page/headerpage";
import SearchContainer from "@/components/page/searchcontainer";
import LinkList from "@/components/page/linklist";

export default function Home() {
  const { searchQuery, setSearchQuery, loading, error, filteredLinks } =
    useLinks();

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchQuery(event.target.value);
  };

  if (loading) return <Load />;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="backdrop-filter backdrop-blur-sm bg-opacity-10 min-h-screen p-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <Headerpage />
        <SearchContainer
          searchQuery={searchQuery}
          handleSearchInputChange={handleSearchInputChange}
        />
        <LinkList links={filteredLinks} />
      </div>
    </div>
  );
}
