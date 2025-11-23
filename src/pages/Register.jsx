import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    senha: "",
    idade: "",
    faixa: "",
  });
  const navigate = useNavigate();

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }



  function handleSubmit(e) {
    e.preventDefault();
    localStorage.clear();
    localStorage.setItem("user-bjj", JSON.stringify(form));
    alert("Cadastro feito com sucesso!");
    setForm({ nome: "", email: "", senha: "", idade: "", faixa: "branca" });
    navigate("/profile");
  }

  return (
    <div className="flex items-center font-display justify-start flex-col pt-5 min-h-screen bg-[#F8F8F8] p-4">
      <h1 className="text-5xl font-bold pt-10">BJJ Atlas</h1>
      <h3 className="mb-8 text-gray-600">
          Domine a arte suave
        </h3>
      <div className="flex flex-col items-center bg-[#FFFAFA] py-10 px-6 sm:px-10 border border-[#C6C6C6] shadow-lg rounded-3xl w-full max-w-md">
        <h2 className=" font-semibold text-gray-800 text-2xl">
          Comece sua jornada!
        </h2>
        <h3 className="mb-8 text-gray-600">
          Crie uma conta agora e comece a treinar!
        </h3>
        <form
          className="flex justify-center flex-col w-full"
          onSubmit={handleSubmit}
        >
          <div className="relative w-full">
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder=" "
              value={form.nome}
              onChange={handleChange}
              className="peer w-full border-2 border-gray-300 rounded-xl bg-transparent mb-3 px-3 py-2.5 text-gray-800 focus:border-[#d11e1eff] focus:shadow-sm focus:outline-none"
            />
            <label
              htmlFor="nome"
              className="absolute left-3 top-3 -translate-y-1/2 text-gray-500 text-base bg-[#FFFAFA] px-1 transition-all duration-200 ease-in-out
               peer-placeholder-shown:top-5.5 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base
               peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:text-sm peer-focus:text-[#d11e1eff]
               peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:-translate-y-1/2 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:text-gray-500"
            >
              Nome
            </label>
          </div>
          <div className="relative w-full">
            <input
              type="email"
              id="email"
              name="email"
              placeholder=" "
              value={form.email}
              onChange={handleChange}
              className="peer w-full border-2 border-gray-300 rounded-xl bg-transparent mb-3 px-3 py-2.5 text-gray-800 focus:border-[#d11e1eff] focus:shadow-sm focus:outline-none"
            />
            <label
              htmlFor="email"
              className="absolute left-3 top-3 -translate-y-1/2 text-gray-500 text-base bg-[#FFFAFA] px-1 transition-all duration-200 ease-in-out
               peer-placeholder-shown:top-5.5 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base
               peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:text-sm peer-focus:text-[#d11e1eff]
               peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:-translate-y-1/2 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:text-gray-500"
            >
              E-mail
            </label>
          </div>
          <div className="relative w-full">
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder=" "
              value={form.senha}
              onChange={handleChange}
              className="peer w-full border-2 border-gray-300 rounded-xl bg-transparent mb-3 px-3 py-2.5 text-gray-800 focus:border-[#d11e1eff] focus:shadow-sm focus:outline-none"
            />
            <label
              htmlFor="senha"
              className="absolute left-3 top-3 -translate-y-1/2 text-gray-500 text-base bg-[#FFFAFA] px-1 transition-all duration-200 ease-in-out
               peer-placeholder-shown:top-5.5 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base
               peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:text-sm peer-focus:text-[#d11e1eff]
               peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:-translate-y-1/2 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:text-gray-500"
            >
              Senha
            </label>
          </div>
          <div className="relative w-full">
            <input
              type="number"
              id="idade"
              name="idade"
              placeholder=" "
              value={form.idade}
              onChange={handleChange}
              className="peer w-full border-2 border-gray-300 rounded-xl bg-transparent mb-3 px-3 py-2.5 text-gray-800 focus:border-[#d11e1eff] focus:shadow-sm focus:outline-none"
            />
            <label
              htmlFor="idade"
              className="absolute left-3 top-3 -translate-y-1/2 text-gray-500 text-base bg-[#FFFAFA] px-1 transition-all duration-200 ease-in-out
               peer-placeholder-shown:top-5.5 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base
               peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:text-sm peer-focus:text-[#d11e1eff]
               peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:-translate-y-1/2 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:text-gray-500"
            >
              Idade
            </label>
          </div>
          <div className="relative w-full">
            <select
              id="faixa"
              name="faixa"
              value={form.faixa}
              onChange={handleChange}
              className="
              peer block w-full mb-8 appearance-none border-2 border-gray-300 rounded-xl bg-transparent
              transition-all duration-200 ease-in-out px-3 py-3 text-gray-900 focus:border-[#d11e1eff] focus:shadow-sm focus:outline-none
              "
            >
              <option value="" disabled hidden></option>
              <option value="branca">Branca</option>
              <option value="azul">Azul</option>
              <option value="roxa">Roxa</option>
              <option value="marrom">Marrom</option>
              <option value="preta">Preta</option>
            </select>

            <label
              htmlFor="faixa"
              className={`
              absolute left-3 px-1 bg-[#FFFAFA] text-gray-500 pointer-events-none transition-all duration-200 ease-in-out
              ${
                form.faixa === ""
                  ? "top-6 -translate-y-1/2 text-base"
                  : "top-0 -translate-y-1/2 text-sm"
                }
              `}
            >
              Faixa
            </label>
          </div>
          <button

            type="submit"
            className="p-2.5 mb-2.5 rounded-xl cursor-pointer hover:bg-red-500 transition-all duration-300 ease-in-out font-medium text-md text-white bg-[#d11e1eff]"
          >
            Cadastrar
          </button>
          <h1 className="text-[14px]">Já tem conta? <Link className="underline text-red-500" to="/login">Entrar agora!</Link></h1>
        </form>
      </div>
    </div>
  );
}
