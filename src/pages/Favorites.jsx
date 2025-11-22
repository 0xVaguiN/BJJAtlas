import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import TechniqueCard from "../components/TechniqueCard";

export default function Favorites() {
  const { techniques, favoritedTechs } = useContext(AppContext);

  const favorites = techniques.filter(t => favoritedTechs.includes(t.id));

  return (
    <div className="flex flex-col tech-list">
      <h2 className="text-2xl font-display font-semibold px-8 pt-10">Técnicas Favoritas</h2>
      <div className="flex flex-row gap-10 m-8">
      {favorites.length === 0 ? (
        <p className="text-lg font-display px-8 pt-2">Nenhuma técnica favoritada ainda.</p>
      ) : (
        favorites.map(t => <TechniqueCard key={t.id} tech={t} />)
      )}
      </div>
    </div>
  );
}
