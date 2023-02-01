import React, { createContext, useState } from "react";
import { articlesType } from "../data/articlesType";

type AppContextProps = {
  children: React.ReactNode;
};

export const NewsContext = createContext({});

export function NewsContextProvider({ children }: AppContextProps) {
  const [newsContent, setNewsContent] = useState();
  const NewsContextValue = {
    newsContent,
    setNewsContent,
  };

  return (
    <>
      <NewsContext.Provider value={NewsContextValue}>
        {children}
      </NewsContext.Provider>
    </>
  );
}
