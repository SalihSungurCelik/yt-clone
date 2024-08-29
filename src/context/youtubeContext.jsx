import { createContext, useState, useEffect } from "react";
import { categories } from "../constants";
import { getData } from "../utils/getData";

// 1) context temelini oluştur
export const YoutubeContext = createContext();

// 2) context'de tutulan verileri uygulamaya aktaracak
export const YoutubeProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [videos, setVideos] = useState(null);
  // selectedCategory her değiştiğinde apiden ilgili kategorinin verilerini çek.
  useEffect(() => {
    //farklı verileri alırken öncekileri temizledik.
    setVideos(null);
    // eğer ki seçili kategorinin tipi home veya trending ise o kategorinin tipinin ismine istek
    if (
      selectedCategory.type === "home" ||
      selectedCategory.type === "trending"
    ) {
      getData(`${selectedCategory.type}`).then((data) => setVideos(data.data));
    }
    // eğer seçilen kategorinin tipi category ise search endpointine istek atıcaz
    if (selectedCategory.type === "category") {
      getData(`/search?query=${selectedCategory.name}`).then((data) =>
        setVideos(data.data)
      );
    }
  }, [selectedCategory]);
  // console.log(videos);

  return (
    <YoutubeContext.Provider
      value={{ selectedCategory, setSelectedCategory, videos }}
    >
      {children}
    </YoutubeContext.Provider>
  );
};
