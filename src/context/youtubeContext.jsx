import { createContext, useState } from "react";

// 1) context temelini oluştur
export const YoutubeContext = createContext();

// 2) context'de tutulan verileri uygulamaya aktaracak
export const YoutubeProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState();
  const [videos, setVideos] = useState(null);

  return (
    <YoutubeContext.Provider
      value={{ selectedCategory, setSelectedCategory, videos }}
    >
      {children}
    </YoutubeContext.Provider>
  );
};
