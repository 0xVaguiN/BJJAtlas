import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import TechniqueCard from "../components/TechniqueCard";

export default function Learned() {
  const { techniques, learnedTechs } = useContext(AppContext);

  const learned = techniques.filter(t => learnedTechs.includes(t.id));

  return (
    <div className="flex flex-col tech-list">
      <h2 className="text-2xl font-display font-semibold px-8 pt-10">Técnicas Aprendidas</h2>
      <div className="flex flex-wrap flex-row gap-10 m-8">
      {learned.length === 0 ? (
        <p className="text-lg font-display px-8 pt-2">Nenhuma técnica aprendida ainda.</p>
      ) : (
        learned.map(t => <TechniqueCard key={t.id} tech={t} />)
      )}
      </div>
    </div>
  );
}
