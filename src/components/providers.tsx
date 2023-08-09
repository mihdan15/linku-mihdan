"use client";

import React from "react";
import { ApolloProvider } from "@apollo/client";
import { GraphQlClient } from "../../API/Graph";
import { ThemeProvider } from "next-themes";
import ThemeSwitcher from "@/app/ThemeSwitcher";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <ApolloProvider client={GraphQlClient}>{children}</ApolloProvider>
    </ThemeProvider>
  );
}

export default Providers;
