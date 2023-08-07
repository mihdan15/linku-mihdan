"use client";

import React from "react";
import { ApolloProvider } from "@apollo/client";
import { GraphQlClient } from "../../API/Graph";

export function Providers({ children }: { children: React.ReactNode }) {
  return <ApolloProvider client={GraphQlClient}>{children}</ApolloProvider>;
}

export default Providers;
