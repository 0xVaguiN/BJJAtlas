import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function TechniqueCard({ tech, locked }) {
  const {
    favoritedTechs,
    inProgressTechs,
    learnedTechs,
    toggleFavorite,
    toggleInProgress,
    markLearned
  } = useContext(AppContext);

  const favorited = favoritedTechs.includes(tech.id);
  const inProgress = inProgressTechs.includes(tech.id);
  const learned = learnedTechs.includes(tech.id);

  return (
    <div className={`max-w-[330px] w-full bg-[#FFFAFA] border border-gray-200 shadow-md rounded-2xl overflow-hidden transform transition-all duration-300 hover:border-red-600 hover:shadow-lg ${locked ? "opacity-50" : ""}`}>
      <div className="h-44 w-full overflow-hidden">
        <img
          src={tech.image}
          alt={tech.name_pt}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      <div className="flex flex-col p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-xl">{tech.name_pt}</h3>
          <button onClick={() => toggleFavorite(tech.id)} className={`text-xl p-2 rounded-lg border-2 border-[#C6C6C6] bg-white hover:scale-90 ${favorited ? "text-red-600" : "text-gray-500"}`}>
            <FontAwesomeIcon icon={faHeart} />
          </button>
        </div>

        <p className="text-gray-500 text-sm line-clamp-2 mb-2">{tech.description_pt}</p>
        <span className="border-2 text-xs font-semibold bg-white border-[#C6C6C6] w-fit px-3 py-1 mb-3 rounded-full">Faixa {tech.belt}</span>

        {(
          <div className="flex flex-col gap-2">
            <button onClick={() => toggleInProgress(tech.id)} className="w-full py-1 bg-blue-100 text-blue-700 font-semibold rounded-lg">
              {inProgress ? "Remover de Progresso" : "Iniciar Progresso"}
            </button>

            <button onClick={() => markLearned(tech.id)} className="w-full py-1 bg-green-100 text-green-700 font-semibold rounded-lg">
              {learned ? "Desmarcar Aprendida" : "Marcar como Aprendida"}
            </button>
          </div>
        )}

        <Link
          to={`/techniques/${tech.id}`}
          className="w-full block text-center py-2 bg-red-600 hover:bg-red-700 transition-all text-white font-semibold rounded-xl mt-3"
        >
          Ver Técnica
        </Link>
      </div>
    </div>
  );
}
