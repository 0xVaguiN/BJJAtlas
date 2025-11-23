import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import TechniqueCard from "../components/TechniqueCard";

export default function Progress() {
  const { techniques, inProgressTechs } = useContext(AppContext);

  const list = techniques.filter(t => inProgressTechs.includes(t.id));

  return (
    <div className="tech-list">
      <h2 className="text-2xl font-display font-semibold px-8 pt-10">Técnicas em Progresso</h2>
      <div className="flex flex-wrap flex-row gap-10 m-8">
      {list.length === 0 ? (
        <p className="text-lg font-display px-8 pt-2">Você ainda não marcou nenhuma técnica como em progresso.</p>
      ) : (
        list.map(t => <TechniqueCard key={t.id} tech={t} />)
      )}
      </div>
    </div>
  );
}
