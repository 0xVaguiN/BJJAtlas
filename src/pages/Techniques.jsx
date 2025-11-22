import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import TechniqueCard from "../components/TechniqueCard";

export default function Techniques() {
  const { techniques } = useContext(AppContext);
  const user = JSON.parse(localStorage.getItem("user-bjj")) || { faixa: "branca" };
  const beltOrder = ["branca", "azul", "roxa", "marrom", "preta"];

  return (
    <div className="flex flex-col flex-wrap font-display p-5 bg-[#F8F8F8]">
      <h1 className="font-semibold mt-3 text-2xl text-left">Arsenal de Técnicas</h1>
      <h3 className="mb-8 text-gray-600">Explore nossa coleção completa de técnicas de Jiu-Jitsu Brasileiro.</h3>
      <h6 className="mb-2 text-xs text-gray-600">Mostrando {techniques.length} técnicas</h6>

      <div className="flex flex-wrap justify-center mt-1 gap-10 px-2">
        {techniques.map((tech) => {
          const locked = beltOrder.indexOf(user.faixa) < beltOrder.indexOf(tech.belt);
          return <TechniqueCard key={tech.id} tech={tech} locked={locked} />;
        })}
      </div>
    </div>
  );
}
