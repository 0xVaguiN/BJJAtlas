import { useParams, Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faAngleDoubleLeft } from "@fortawesome/free-solid-svg-icons";

export default function Technique() {
  const { id } = useParams();
  const techId = Number(id);

  const {
    techniques,
    favoritedTechs,
    learnedTechs,
    toggleFavorite,
    markLearned
  } = useContext(AppContext);

  const move = techniques.find((m) => m.id === techId);

  if (!move) return <p>Erro: técnica não encontrada.</p>;

  const beltColors = {
    branca: { bg: "bg-white", text: "text-black" },
    azul: { bg: "bg-[#3535ff]", text: "text-white" },
    roxa: { bg: "bg-purple-800", text: "text-white" },
    marrom: { bg: "bg-amber-900", text: "text-white" },
    preta: { bg: "bg-black", text: "text-white" }
  };

  const { bg, text } = beltColors[move.belt];

  const favorited = favoritedTechs.includes(techId);
  const alreadyLearned = learnedTechs.includes(techId);

  return (
    <div className="flex flex-col items-center text-left p-2 font-display bg-[#F8F8F8]">
      <div className="flex w-[90%] flex-col px-10 py-10">
        <Link
          className="w-fit px-0.5 py-0.5 mb-8 hover:-translate-x-2 transition-all duration-150 ease-in-out"
          to="/techniques"
        >
          <FontAwesomeIcon icon={faAngleDoubleLeft} /> Voltar para técnicas
        </Link>

        <iframe
          className="w-full h-[450px] rounded-2xl"
          src={move.video}
          title={move.name_pt}
          allowFullScreen
        ></iframe>

        <div className="flex flex-row justify-between">
          <h2 className="pt-10 text-3xl font-semibold">{move.name_pt}</h2>

          <button
            onClick={() => toggleFavorite(techId)}
            className={`border-2 mt-9 transition-all duration-200 ease-in-out text-center text-xl px-2 py-2 w-fit rounded-lg cursor-pointer border-[#C6C6C6] bg-[#FFFAFA] hover:scale-90 ${
              favorited ? "text-red-600" : "text-gray-500"
            }`}
          >
            <FontAwesomeIcon icon={faHeart} />
          </button>
        </div>

        <span
          className={`border-2 text-xs font-semibold border-[#C6C6C6] ${text} ${bg} w-fit mb-10 px-4 py-1 rounded-full`}
        >
          Faixa {move.belt}
        </span>

        <div className="flex w-full flex-col px-10 py-10 rounded-2xl border-2 border-[#C6C6C6] bg-[#FFFAFA]">
          <h2 className="text-3xl font-semibold">Status</h2>

          <div>
            <button
              onClick={() => markLearned(techId)}
              disabled={alreadyLearned}
              className={`font-semibold w-fit py-1 px-3 mt-5 rounded-md ${
                alreadyLearned
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-red-600 text-white cursor-pointer"
              }`}
            >
              {alreadyLearned ? "Já Aprendida ✔" : "Aprendida!"}
            </button>
          </div>
        </div>

        <div className="flex w-full flex-col mt-10 px-10 py-8 rounded-2xl border-2 border-[#C6C6C6] bg-[#FFFAFA]">
          <p className="font-semibold text-2xl text-left">Descrição</p>
          <p className="py-2 text-justify">{move.description_pt}</p>
        </div>

        <div className="flex w-full flex-col my-10 px-10 py-8 rounded-2xl border-2 border-[#C6C6C6] bg-[#FFFAFA]">
          <p className="font-semibold text-2xl text-left">Instruções Passo a Passo</p>

          <div className="mt-4 flex justify-center flex-col gap-4">
            {move.steps.map((s, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="shrink-0 w-9 h-9 rounded-full bg-red-600 text-white font-bold flex items-center justify-center">
                  {i + 1}
                </div>
                <div className="py-1.5 text-gray-800">{s}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
