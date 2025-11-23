//import { FaStar, FaMedal, FaHeart, FaHourglassHalf } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMedal,
  faHeart,
  faStar,
  faHourglassHalf,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect, useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Profile() {
  const [profilePic, setProfilePic] = useState(null);

  useEffect(() => {
    const savedPic = localStorage.getItem("profile-pic");
    if (savedPic) {
      setProfilePic(savedPic);
    }
  }, []);

  function handleImageUpload(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      localStorage.setItem("profile-pic", reader.result);
      setProfilePic(reader.result);
    };

    reader.readAsDataURL(file);
  }
  const dados = JSON.parse(localStorage.getItem("user-bjj"));
  const userName = dados ? dados.nome : "Usuário";
  const userBelt = dados ? dados.faixa : "branca";

  
  const { learnedTechs, favoritedTechs, inProgressTechs } = useContext(AppContext);
  const learned = learnedTechs;
  const favorited = favoritedTechs;
  const inProgress = inProgressTechs;


  let bgColor = "bg-gray-200";
  let textColor = "text-black";

  if (userBelt === "azul") {
    bgColor = "bg-blue-600";
    textColor = "text-white";
  }
  if (userBelt === "roxa") {
    bgColor = "bg-purple-700";
    textColor = "text-white";
  }
  if (userBelt === "marrom") {
    bgColor = "bg-amber-800";
    textColor = "text-white";
  }
  if (userBelt === "preta") {
    bgColor = "bg-black";
    textColor = "text-white";
  }

  return (
    <div className="min-h-screen px-6 py-10 font-display bg-[#f8f8f8]">
      <div className="flex items-center gap-5">
        <label htmlFor="profile-upload" className="cursor-pointer">
          <div
            className={`w-30 h-30 rounded-full shadow-md overflow-hidden border-2 border-gray-300`}
          >
            {profilePic ? (
              <img src={profilePic} className="w-full h-full object-cover" />
            ) : (
              <div
                className={`w-full h-full text-[14px] text-center flex items-center justify-center text-gray-600 bg-gray-200`}
              >
                Adicionar Foto
              </div>
            )}
          </div>
        </label>
        <input
          id="profile-upload"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleImageUpload}
        />
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Olá, {userName}</h1>
          <span
            className={`mt-1 inline-block px-3 py-1 rounded-full text-sm ${bgColor} ${textColor}`}
          >
            Faixa {userBelt}
          </span>
        </div>
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
        <div className="p-6 rounded-3xl bg-white shadow-lg border border-gray-200 hover:shadow-xl transition-all">
          <div className="flex items-center gap-3">
            <FontAwesomeIcon
              icon={faStar}
              className="text-yellow-500 text-3xl"
            />
            <h2 className="text-lg text-gray-600">Técnicas Aprendidas</h2>
          </div>
          <p className="text-5xl font-extrabold mt-3">{learned.length}</p>
          <p className="text-gray-500 text-sm mt-4">
            Continue treinando para dominar mais técnicas!{" "}
            <a href="/learned" className="text-red-600 underline">
              Ver técnicas apredidas!
            </a>
          </p>
        </div>
        <div className="p-6 rounded-3xl bg-white shadow-lg border border-gray-200 hover:shadow-xl transition-all">
          <div className="flex items-center gap-3">
            <FontAwesomeIcon
              icon={faHourglassHalf}
              className="text-blue-500 text-3xl"
            />
            <h2 className="text-lg text-gray-600">Em Progresso</h2>
          </div>
          <p className="text-5xl font-extrabold mt-3">{inProgress.length}</p>
          <p className="text-gray-500 text-sm mt-4">
            Técnicas que você ainda está aprendendo.{" "}
            <a href="/progress" className="text-red-600 underline">
              Ver técnicas em progresso!
            </a>
          </p>
        </div>
        <div className="p-6 rounded-3xl bg-white shadow-lg border border-gray-200 hover:shadow-xl transition-all">
          <div className="flex items-center gap-3">
            <FontAwesomeIcon icon={faHeart} className="text-red-500 text-3xl" />
            <h2 className="text-lg text-gray-600">Favoritas</h2>
          </div>
          <p className="text-5xl font-extrabold mt-3">{favorited.length}</p>
          <p className="text-gray-500 text-sm mt-4">
            Suas técnicas preferidas salvas!{" "}
            <a href="/favorites" className="text-red-600 underline">
              Ver técnicas favoritas!
            </a>
          </p>
        </div>
        <div className="p-6 rounded-3xl bg-white shadow-lg border border-gray-200 hover:shadow-xl transition-all">
          <div className="flex items-center gap-3">
            <FontAwesomeIcon
              icon={faMedal}
              className="text-amber-500 text-3xl"
            />
            <h2 className="text-lg text-gray-600">Conquistas</h2>
          </div>
          <p className="text-5xl font-extrabold mt-3">{learned.length}</p>
          <p className="text-gray-500 text-sm mt-4">
            Treine mais para desbloquear conquistas!{" "}
            <a href="/achievements" className="text-red-600 underline">
              Ver conquistas
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
