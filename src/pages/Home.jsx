import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus, faCirclePlay, faStar } from '@fortawesome/free-solid-svg-icons'


export default function Home() {
  return (
    <div className="bg-[#F8F8F8]">
      <section className="relative h-full flex items-center justify-center text-center font-display text-white py-48">
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

          <h1 className="text-4xl md:text-6xl font-extrabold mt-4">
            Aprenda, Evolua e Domine o <br className="hidden md:block" />
            <span className="text-red-400">Jiu-Jitsu Brasileiro</span> com o{" "}
            <br className="hidden md:block" />
            BJJ Atlas
          </h1>

          <p className="mt-4 max-w-xl mx-auto text-gray-50">
            Técnicas organizadas por faixa, vídeos detalhados e uma jornada
            completa para todos os níveis.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-10">
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
      <section className="relative py-12 flex flex-col justify-center font-display text-center px-4">
        <div className="relative z-10 mt-10 md:mt-0 px-4">
          <span className="text-sm font-bold text-red-600 bg-red-500/20 px-5 py-2 rounded-full backdrop-blur-sm">
            COMO FUNCIONA
          </span>
          <h1 className="text-4xl md:text-6xl text-gray-900 font-bold mt-10 md:mt-14">
            Sua Jornada no Jiu-Jitsu
          </h1>
          <p className="mt-4 max-w-xl mx-auto text-xl text-gray-600">
            Três passos simples para começar a evoluir suas habilidades
          </p>
        </div>
        <div className="relative flex flex-wrap flex-col items-center md:justify-center md:flex-row mt-16 px-5 gap-8 md:gap-10">
          <div className="relative w-full max-w-xs md:mx-20 mb-16 transition-all duration-300 ease-in-out hover:-translate-3.5 md:w-75 md:mb-0">
            <div className="absolute -top-5 left-1/2 -translate-x-30 w-14 h-14 flex items-center justify-center text-white font-bold text-2xl rounded-xl bg-red-500">1</div>
            <div className="w-full h-[300px] min-h-[260px] bg-[#FFFAFA] border border-[#C6C6C6] shadow-lg rounded-2xl p-4 pt-10">
              <h1><FontAwesomeIcon icon={faUserPlus} className="text-[#eb1717] text-3xl bg-[#FFDDDD] mt-2 rounded-xl px-3 py-4" /></h1>
              <h1 className="mt-4 px-3 font-bold text-xl">Crie sua Conta e Escolha sua Faixa</h1>
              <h2 className="mt-2 px-3 text-stone-600 text-sm font-semibold">Cadastre-se gratuitamente e informe sua graduação atual. O sistema liberará técnicas adequadas ao seu nível.</h2>
            </div>
          </div>
          <div className="relative w-full max-w-xs md:mx-20 mb-16 transition-all duration-300 ease-in-out hover:-translate-3.5  md:w-75 md:mb-0">
            <div className="absolute -top-5 left-1/2 -translate-x-30 w-14 h-14 flex items-center justify-center text-white font-bold text-2xl rounded-xl bg-blue-500">2</div>
            <div className="w-full h-[300px] min-h-[260px] bg-[#FFFAFA] border border-[#C6C6C6] shadow-lg rounded-2xl p-4 pt-10">
              <h1><FontAwesomeIcon icon={faCirclePlay} className="text-[#3535ff] text-3xl bg-[#D1D7F9] mt-2 rounded-xl px-3 py-4" /></h1>
              <h1 className="mt-4 px-3 font-bold text-xl">Explore Técnicas com Imagens e Vídeos</h1>
              <h2 className="mt-2 px-3 text-stone-600 text-sm font-semibold">Assista vídeos detalhados de cada técnica, com explicações passo a passo e demonstrações práticas.</h2>
            </div>
          </div>
          <div className="relative w-full max-w-xs md:mx-20 transition-all duration-300 ease-in-out hover:-translate-3.5  md:w-75">
            <div className="absolute -top-5 left-1/2 -translate-x-30 w-14 h-14 flex items-center justify-center text-white font-bold text-2xl rounded-xl bg-purple-500">3</div>
            <div className="w-full h-[300px] min-h-[260px] bg-[#FFFAFA] border border-[#C6C6C6] shadow-lg rounded-2xl p-4 pt-10">
              <h1><FontAwesomeIcon icon={faStar} className="text-[#792CF5] text-3xl bg-[#D6BBF9] mt-2 rounded-xl px-3 py-4" /></h1>
              <h1 className="mt-4 px-3 font-bold text-lg">Salve suas Favoritas e Acompanhe seu Progresso</h1>
              <h2 className="mt-2 px-3 text-stone-600 text-sm font-semibold">Marque suas técnicas favoritas e monitore sua evolução conforme avança nas graduações.</h2>
            </div>
          </div>
        </div>
      </section>
      <hr className="mt-16 md:mt-25 mx-auto max-w-6xl text-gray-400 border"/>
      <footer className="flex font-medium text-sm text-gray-600 justify-center p-4">
      <h1>© 2024 BJJ Atlas. Todos os direitos reservados.</h1>
      </footer>
    </div>
  )
}
