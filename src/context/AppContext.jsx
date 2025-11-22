import { createContext, useState, useEffect } from "react";
import techniquesData from "../data/moves.json"; // importe seu JSON

export const AppContext = createContext();

export default function AppProvider({ children }) {
  const [techniques, setTechniques] = useState([]);

  useEffect(() => {
    setTechniques(techniquesData);
  }, []);

  const [favoritedTechs, setFavoritedTechs] = useState(() => {
    const saved = localStorage.getItem("favoritedTechs");
    return saved ? JSON.parse(saved) : [];
  });

  const [inProgressTechs, setInProgressTechs] = useState(() => {
    const saved = localStorage.getItem("inProgressTechs");
    return saved ? JSON.parse(saved) : [];
  });

  const [learnedTechs, setLearnedTechs] = useState(() => {
    const saved = localStorage.getItem("learnedTechs");
    return saved ? JSON.parse(saved) : [];
  });

  const toggleFavorite = (id) => {
    setFavoritedTechs((prev) => {
      const updated = prev.includes(id) ? prev.filter(t => t !== id) : [...prev, id];
      localStorage.setItem("favoritedTechs", JSON.stringify(updated));
      return updated;
    });
  };

  const toggleInProgress = (id) => {
    setInProgressTechs((prev) => {
      const updated = prev.includes(id) ? prev.filter(t => t !== id) : [...prev, id];
      localStorage.setItem("inProgressTechs", JSON.stringify(updated));
      return updated;
    });
  };

  const markLearned = (id) => {
    setLearnedTechs((prev) => {
      const updated = prev.includes(id) ? prev.filter(t => t !== id) : [...prev, id];
      localStorage.setItem("learnedTechs", JSON.stringify(updated));
      return updated;
    });
  };

  return (
    <AppContext.Provider value={{
      techniques,
      favoritedTechs,
      inProgressTechs,
      learnedTechs,
      toggleFavorite,
      toggleInProgress,
      markLearned
    }}>
      {children}
    </AppContext.Provider>
  );
}
