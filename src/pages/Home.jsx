import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus, faCirclePlay, faStar } from '@fortawesome/free-solid-svg-icons'


export default function Home() {
  return (
    <div className="bg-[#F8F8F8]">
      <section className="relative h-screen flex items-center justify-center text-center font-display text-white">
        <img
          src="https://images.unsplash.com/photo-1555597408-26bc8e548a46?w=1920&h=1080&fit=crop"
          alt="Treino de Jiu-Jitsu"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-linear-to-b from-red-700/80 to-red-900/50"></div>

        <div className="relative z-10 px-4">
          <span className="text-sm bg-white/20 px-5 py-2 rounded-full backdrop-blur-sm">
            Bem-vindo(a) ao BJJ Atlas
          </span>

          <h1 className="text-6xl font-extrabold mt-4">
            Aprenda, Evolua e Domine o <br />
            <span className="text-red-400">Jiu-Jitsu Brasileiro</span> com o{" "}
            <br />
            BJJ Atlas
          </h1>

          <p className="mt-4 max-w-xl mx-auto text-gray-50">
            Técnicas organizadas por faixa, vídeos detalhados e uma jornada
            completa para todos os níveis.
          </p>

          <div className="mt-8 flex justify-center gap-10">
            <Link to="/register">
              <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2 rounded-md cursor-pointer transition">
                Criar Conta Grátis
              </button>
            </Link>
            <Link to="/techniques">
              <button className="bg-white/20 hover:bg-white/30 text-white font-semibold px-6 py-2 rounded-md cursor-pointer transition">
                Explorar Técnicas
              </button>
            </Link>
          </div>
        </div>
      </section>
      <section className="relative h-screen flex flex-col justify-center font-display text-center">
        <div className="relative z-10 mt-30 px-4 py-2">
          <span className="text-sm font-bold text-red-600 bg-red-500/20 px-5 py-2 rounded-full backdrop-blur-sm">
            COMO FUNCIONA
          </span>
          <h1 className="text-6xl text-gray-900 font-bold mt-15">
            Sua Jornada no Jiu-Jitsu
          </h1>
          <p className="mt-4 max-w-xl mx-auto text-xl text-gray-600">
            Três passos simples para começar a evoluir suas habilidades
          </p>
        </div>
        <div className="relative flex justify-center flex-row mt-10 px-4 gap-15">
          <div className="cursor-pointer hover:-translate-y-4.5 hover:-translate-x-2.5 transition-all duration-400 ease-in-out ">
            <h1 className="absolute text-center text-white font-bold text-2xl w-15 py-3.5 ml-7.5 rounded-xl bg-red-500">1</h1>
            <div className="w-75 h-65 mt-7.5 bg-[#FFFAFA] border border-[#C6C6C6] shadow-lg rounded-2xl">
              <h1><FontAwesomeIcon icon={faUserPlus} className="text-[#eb1717] text-3xl bg-[#FFDDDD] mt-8.5 rounded-xl px-3 py-4" /></h1>
              <h1 className="mt-4 px-3 font-bold text-xl">Crie sua Conta e Escolha sua Faixa</h1>
              <h2 className="mt-2 px-3 text-stone-600 text-sm font-semibold">Cadastre-se gratuitamente e informe sua graduação atual. O sistema liberará técnicas adequadas ao seu nível.</h2>
            </div>
          </div>
          <div className="cursor-pointer hover:-translate-y-4.5 hover:-translate-x-2.5 transition-all duration-400 ease-in-out ">
            <h1 className="absolute text-center text-white font-bold text-2xl w-15 py-3.5 ml-7.5 rounded-xl bg-blue-500">2</h1>
            <div className="w-75 h-65 mt-7.5 bg-[#FFFAFA] border border-[#C6C6C6] shadow-lg rounded-2xl">
              <h1><FontAwesomeIcon icon={faCirclePlay} className="text-[#3535ff] text-3xl bg-[#D1D7F9] mt-8.5 rounded-xl px-3 py-4" /></h1>
              <h1 className="mt-4 px-3 font-bold text-xl">Explore Técnicas com Imagens e Vídeos</h1>
              <h2 className="mt-2 px-3 text-stone-600 text-sm font-semibold">Assista vídeos detalhados de cada técnica, com explicações passo a passo e demonstrações práticas.</h2>
            </div>
          </div>
          <div className="cursor-pointer hover:-translate-y-4.5 hover:-translate-x-2.5 transition-all duration-400 ease-in-out ">
            <h1 className="absolute text-center text-white font-bold text-2xl w-15 py-3.5 ml-7.5 rounded-xl bg-purple-500">3</h1>
            <div className="w-75 h-65 mt-7.5 bg-[#FFFAFA] border border-[#C6C6C6] shadow-lg rounded-2xl">
              <h1><FontAwesomeIcon icon={faStar} className="text-[#792CF5] text-3xl bg-[#D6BBF9] mt-8.5 rounded-xl px-3 py-4" /></h1>
              <h1 className="mt-4 px-3 font-bold text-xl">Salve suas Favoritas e Acompanhe seu Progresso</h1>
              <h2 className="mt-2 px-3 text-stone-600 text-sm font-semibold">Marque suas técnicas favoritas e monitore sua evolução conforme avança nas graduações.</h2>
            </div>
          </div>
        </div>
      </section>
      <hr className="mt-35 mx-15.5 text-gray-400 border"/>
      <footer className="flex font-medium text-sm text-gray-600 justify-center p-4">
      <h1>© 2024 BJJ Atlas. Todos os direitos reservados.</h1>
      </footer>
    </div>
  )
}
